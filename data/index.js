window.MemoryLabData = (() => {
  const schema = window.MemoryLabSchema;
  const TODAY = schema.TODAY;
  const education = schema.education;
  const patients = window.MemoryLabPatients;
  const sessions = window.MemoryLabSessions;
  const events = window.MemoryLabEvents;
  const notes = window.MemoryLabNotes.consultationNotes;
  const questions = window.MemoryLabNotes.questions;

  function cloneDate(date) {
    return date instanceof Date ? new Date(date.getTime()) : date;
  }

  function cloneEvent(event) {
    return { ...event, date: cloneDate(event.date) };
  }

  function sofToSGMA(sof) {
    return 140 / (1 + Math.exp(15 * (sof - 0.33))) + 30;
  }

  function patientIdOf(patientOrId) {
    return typeof patientOrId === 'string' ? patientOrId : patientOrId.id;
  }

  function getPatient(id) {
    return patients.find(patient => patient.id === id) || patients[0];
  }

  function getPatientFromUrl() {
    const id = new URLSearchParams(window.location.search).get('patient');
    return getPatient(id);
  }

  function educationFor(code) {
    return education.find(item => item.code === code) || education[0];
  }

  function sessionsForPatient(patientOrId) {
    const patientId = patientIdOf(patientOrId);
    return sessions
      .filter(session => session.patientId === patientId)
      .slice()
      .sort((a, b) => a.dateObj - b.dateObj);
  }

  function latestSession(patientOrId) {
    const patientSessions = sessionsForPatient(patientOrId);
    return patientSessions[patientSessions.length - 1];
  }

  function recentSessions(patientOrId, count = 4) {
    return sessionsForPatient(patientOrId).slice(-count).reverse();
  }

  function cloneEvents() {
    return events.map(cloneEvent);
  }

  function eventsForPatient(patientOrId) {
    const patientId = patientIdOf(patientOrId);
    return cloneEvents().filter(event => event.patientId === patientId);
  }

  function eventTime(event) {
    return event.time || '23:59';
  }

  function isHomeDeadline(event) {
    return event.type === 'home_deadline';
  }

  function deadlineStatus(patientOrId) {
    const patientId = patientIdOf(patientOrId);
    const deadlines = events
      .filter(event => isHomeDeadline(event) && event.patientId === patientId && event.status !== 'completed')
      .slice()
      .sort((a, b) => a.date - b.date || eventTime(a).localeCompare(eventTime(b)));
    const active = deadlines.find(event => event.status === 'overdue') || deadlines.find(event => event.status === 'due') || deadlines[0] || null;
    return {
      due: !!active && (active.status === 'overdue' || active.status === 'due'),
      status: active ? active.status : 'none',
      event: active ? cloneEvent(active) : null,
    };
  }

  function completedHomeEventsSinceReview(patientOrId) {
    const patient = typeof patientOrId === 'string' ? getPatient(patientOrId) : patientOrId;
    if (!patient.lastReviewedAt) return [];
    const reviewedAt = schema.dateFrom(patient.lastReviewedAt);
    return events
      .filter(event => isHomeDeadline(event) && event.patientId === patient.id && event.status === 'completed' && event.date > reviewedAt)
      .slice()
      .sort((a, b) => b.date - a.date)
      .map(cloneEvent);
  }

  function consultationNotesForPatient(patientOrId) {
    const patientId = patientIdOf(patientOrId);
    return notes.filter(note => note.patientId === patientId);
  }

  function addConsultationNote(patientOrId, note) {
    const patientId = patientIdOf(patientOrId);
    notes.unshift({ patientId, ...note });
  }

  function questionsForPatient(patientOrId) {
    const patientId = patientIdOf(patientOrId);
    return questions.filter(question => question.patientId === patientId);
  }

  function patientIndex(id) {
    return Math.max(0, patients.findIndex(patient => patient.id === id));
  }

  function trendForPatient(patientOrId) {
    const patientSessions = sessionsForPatient(patientOrId);
    if (patientSessions.length < 4) return 'new';
    const first = sofToSGMA(patientSessions[0].sof);
    const latest = sofToSGMA(patientSessions[patientSessions.length - 1].sof);
    const recent = patientSessions.slice(-4).map(session => sofToSGMA(session.sof));
    const recentDrop = recent[recent.length - 1] - recent[0];
    if (latest - first <= -10 || recentDrop <= -6) return 'declining';
    return 'stable';
  }

  function trendSummary(patientOrId) {
    const trend = trendForPatient(patientOrId);
    const patientSessions = sessionsForPatient(patientOrId);
    const latest = patientSessions[patientSessions.length - 1];
    if (trend === 'new') return 'is still in the baseline period, so the focus is on collecting more sessions.';
    if (latest && latest.quality === 'caution') return 'shows a downward pattern, but the latest session quality needs review before firm interpretation.';
    if (trend === 'declining') return 'has declined across recent sessions, so the latest score should be reviewed alongside session quality.';
    return 'has remained broadly stable, with small week-to-week variation around the same range.';
  }

  function patientClinicalSummary(patientOrId) {
    const patient = typeof patientOrId === 'string' ? getPatient(patientOrId) : patientOrId;
    const patientSessions = sessionsForPatient(patient.id);
    const latest = patientSessions[patientSessions.length - 1];
    const trend = trendForPatient(patient.id);
    const deadline = deadlineStatus(patient.id);
    const newHomeSessions = completedHomeEventsSinceReview(patient);
    const newSession = newHomeSessions.length > 0;
    const latestSgma = latest ? sofToSGMA(latest.sof) : 0;
    const qualityConcern = !!latest && latest.quality === 'caution';
    const lowScore = latestSgma < 60;
    const needsReview = trend === 'declining' || qualityConcern || lowScore;
    const badges = [];
    if (needsReview) badges.push({ type: qualityConcern ? 'quality' : 'review', label: qualityConcern ? 'Check quality' : 'Needs review', filter: 'review' });
    if (newSession) badges.push({ type: 'new-session', label: 'New session', filter: 'new-session' });
    if (trend === 'new') badges.push({ type: 'new', label: 'New baseline', filter: 'new' });
    return {
      trend,
      trendSummary: trendSummary(patient.id),
      needsReview,
      newSession,
      newHomeSessions,
      due: deadline.due,
      deadline,
      badges,
      latestSgma,
      qualityConcern,
      lowScore,
    };
  }

  function dashboardMarkerPercent(patientOrId) {
    const latest = latestSession(patientOrId);
    const sgma = latest ? sofToSGMA(latest.sof) : 30;
    return Math.max(5, Math.min(95, ((sgma - 30) / 140) * 100));
  }

  function upcomingEvents(count = 3) {
    return cloneEvents()
      .filter(event => event.date >= TODAY && event.status !== 'completed')
      .sort((a, b) => a.date - b.date || eventTime(a).localeCompare(eventTime(b)))
      .slice(0, count);
  }

  function dashboardReminders(count = 3) {
    const items = [];
    function reminderLeadMinutes(event) {
      if (typeof event.reminderLeadMinutes === 'number') return event.reminderLeadMinutes;
      if (typeof event.reminderDaysBefore === 'number') return event.reminderDaysBefore * 24 * 60;
      return 0;
    }
    function reminderLeadLabel(minutes) {
      if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} before deadline`;
      if (minutes < 24 * 60) {
        const hours = minutes / 60;
        return `${hours} hour${hours === 1 ? '' : 's'} before deadline`;
      }
      const days = minutes / (24 * 60);
      if (days === 7) return '1 week before deadline';
      return `${days} day${days === 1 ? '' : 's'} before deadline`;
    }
    patients.forEach(patient => {
      const summary = patientClinicalSummary(patient.id);
      if (summary.newSession) {
        const event = summary.newHomeSessions[0];
        items.push({
          patientId: patient.id,
          tone: 'soft',
          text: `${patient.name} completed a new at-home session.`,
          time: `Completed ${schema.displayDate(event.date)}`,
        });
      }
    });
    events
      .filter(event => isHomeDeadline(event) && event.status !== 'completed' && reminderLeadMinutes(event))
      .sort((a, b) => a.date - b.date)
      .forEach(event => {
        const patient = getPatient(event.patientId);
        const leadMinutes = reminderLeadMinutes(event);
        items.push({
          patientId: patient.id,
          tone: event.status === 'overdue' ? 'alert' : 'soft',
          text: `${patient.name} reminder: at-home deadline due ${schema.displayDate(event.date)}`,
          time: reminderLeadLabel(leadMinutes),
        });
      });
    patients.forEach(patient => {
      const summary = patientClinicalSummary(patient.id);
      const latest = latestSession(patient.id);
      if (summary.qualityConcern) {
        items.push({ patientId: patient.id, tone: 'alert', text: `${patient.name} latest session had a quality concern - review before interpreting.`, time: `Flagged ${latest.date}` });
      } else if (summary.trend === 'declining') {
        items.push({ patientId: patient.id, tone: 'alert', text: `${patient.name} shows a declining SGMA trend across recent sessions.`, time: `Flagged ${latest.date}` });
      }
    });
    return items.slice(0, count);
  }

  function completedThisWeek() {
    return events.filter(event => event.type === 'home_deadline' && event.status === 'completed' && event.date.getMonth() === 4 && event.date.getDate() >= 11 && event.date.getDate() <= 17).length;
  }

  function makeHomeDeadline(data) {
    return schema.homeDeadline(data);
  }

  function makeClinicAppointment(data) {
    return schema.clinicAppointment(data);
  }

  return {
    TODAY,
    education,
    patients,
    sessions,
    events,
    cloneEvents,
    sofToSGMA,
    getPatient,
    getPatientFromUrl,
    educationFor,
    sessionsForPatient,
    latestSession,
    recentSessions,
    eventsForPatient,
    upcomingEvents,
    upcomingSessions: upcomingEvents,
    deadlineStatus,
    consultationNotesForPatient,
    addConsultationNote,
    questionsForPatient,
    patientClinicalSummary,
    dashboardReminders,
    reminders: dashboardReminders,
    patientIndex,
    dashboardMarkerPercent,
    completedThisWeek,
    makeHomeDeadline,
    makeClinicAppointment,
  };
})();
