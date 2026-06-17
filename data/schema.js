window.MemoryLabSchema = (() => {
  const TODAY = new Date(2026, 5, 17);

  const education = [
    { code: 0, label: 'Elementary', fullLabel: 'Elementary (Basisonderwijs)', offset: 0.000 },
    { code: 1, label: 'Vocational', fullLabel: 'Vocational (MBO/VMBO)', offset: -0.006 },
    { code: 2, label: 'Pre-university', fullLabel: 'Pre-university (HAVO/VWO)', offset: -0.021 },
    { code: 3, label: 'Higher vocational', fullLabel: 'Higher vocational (HBO)', offset: -0.024 },
    { code: 4, label: 'Academic', fullLabel: 'Academic (Universitair)', offset: -0.036 },
  ];

  function dateFrom(value) {
    if (value instanceof Date) return new Date(value.getTime());
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? new Date(value + ' 2026') : parsed;
  }

  function displayDate(date) {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  function fullDisplayDate(date) {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function patient(data) {
    return { ...data };
  }

  function session(data) {
    const date = dateFrom(data.date);
    return {
      quality: 'good',
      trials: 40,
      interruptions: 0,
      nonRetrievalTime: 3.1,
      duration: '8:00',
      ...data,
      date: displayDate(date),
      label: displayDate(date),
      fullDate: fullDisplayDate(date),
      dateObj: date,
    };
  }

  function sessionSeries(patientId, records) {
    return records.map(record => session({ patientId, ...record }));
  }

  function homeDeadline(data) {
    const hasLeadMinutes = Object.prototype.hasOwnProperty.call(data, 'reminderLeadMinutes');
    const hasDaysBefore = Object.prototype.hasOwnProperty.call(data, 'reminderDaysBefore');
    const reminderLeadMinutes = hasLeadMinutes
      ? data.reminderLeadMinutes
      : (hasDaysBefore ? data.reminderDaysBefore * 24 * 60 : 24 * 60);
    const deadline = {
      type: 'home_deadline',
      title: 'At-home SGMA deadline',
      status: 'scheduled',
      ...data,
      date: dateFrom(data.date),
      reminderLeadMinutes,
    };
    delete deadline.time;
    delete deadline.endTime;
    return deadline;
  }

  function clinicAppointment(data) {
    return {
      type: 'clinic_appointment',
      status: 'scheduled',
      purpose: 'Consultation',
      ...data,
      date: dateFrom(data.date),
    };
  }

  function personalEvent(data) {
    return {
      type: 'personal_event',
      patientId: null,
      status: 'scheduled',
      title: 'Clinic block',
      ...data,
      date: dateFrom(data.date),
      patientId: null,
    };
  }

  function question(data) {
    return { ...data };
  }

  function consultationNote(data) {
    return { ...data };
  }

  return {
    TODAY,
    education,
    patient,
    session,
    sessionSeries,
    homeDeadline,
    clinicAppointment,
    personalEvent,
    question,
    consultationNote,
    dateFrom,
    displayDate,
    fullDisplayDate,
  };
})();
