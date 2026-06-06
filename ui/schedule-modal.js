(function () {
  function formatDateInput(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  function parseDateInput(value) {
    if (!value) return null;
    const [year, month, day] = value.split('-').map(Number);
    if ([year, month, day].some(Number.isNaN)) return null;
    return new Date(year, month - 1, day);
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function addOneHour(time) {
    if (!time || !time.includes(':')) return '';
    const [hours, minutes] = time.split(':').map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return '';
    const next = new Date(2000, 0, 1, hours, minutes);
    next.setHours(next.getHours() + 1);
    return `${String(next.getHours()).padStart(2, '0')}:${String(next.getMinutes()).padStart(2, '0')}`;
  }

  function updateRepeatFields({ repeatEl, endModeEl, endDateFieldEl }) {
    if (!repeatEl || !endModeEl || !endDateFieldEl) return;
    const repeats = repeatEl.value !== 'never';
    endModeEl.disabled = !repeats;
    if (!repeats) endModeEl.value = 'never';
    endDateFieldEl.style.display = repeats && endModeEl.value === 'date' ? '' : 'none';
  }

  function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function addCalendarMonths(date, months, preferredDay) {
    const next = new Date(date);
    next.setDate(1);
    next.setMonth(date.getMonth() + months);
    next.setDate(Math.min(preferredDay, daysInMonth(next.getFullYear(), next.getMonth())));
    return next;
  }

  function nextRepeatDate(startDate, repeat, step) {
    const next = new Date(startDate);
    if (repeat === 'daily') next.setDate(startDate.getDate() + step);
    if (repeat === 'weekly') next.setDate(startDate.getDate() + step * 7);
    if (repeat === 'biweekly') next.setDate(startDate.getDate() + step * 14);
    if (repeat === 'monthly') return addCalendarMonths(startDate, step, startDate.getDate());
    return next;
  }

  function deadlineDates({ startDate, repeat, endMode, endDateValue, alertFn = window.alert }) {
    if (repeat === 'never' || endMode === 'never') return [new Date(startDate)];
    const endDate = parseDateInput(endDateValue);
    if (!endDate) {
      alertFn('Please choose an end date for the repeat.');
      return null;
    }
    if (endDate < startDate) {
      alertFn('End repeat date must be on or after the due date.');
      return null;
    }
    const dates = [];
    let step = 0;
    while (true) {
      const dueDate = nextRepeatDate(startDate, repeat, step);
      if (dueDate > endDate) break;
      dates.push(dueDate);
      step += 1;
      if (step > 260) {
        alertFn('Repeat range is too long for this prototype. Please choose an earlier end date.');
        return null;
      }
    }
    return dates;
  }

  function createHomeDeadlines({ targetEvents, ML, patientId, dates, reminderLeadMinutes, note }) {
    return dates.map(dueDate => {
      const event = ML.makeHomeDeadline({
        id: targetEvents.length + 1,
        patientId,
        date: dueDate,
        status: sameDay(dueDate, ML.TODAY) ? 'due' : 'scheduled',
        reminderLeadMinutes,
        note,
      });
      targetEvents.push(event);
      return event;
    });
  }

  function createClinicAppointment({ targetEvents, ML, patientId, date, time, endTime, purpose, note }) {
    const patient = ML.getPatient(patientId);
    const event = ML.makeClinicAppointment({
      id: targetEvents.length + 1,
      patientId,
      date,
      time,
      endTime,
      title: patient.name + ' - ' + purpose.toLowerCase(),
      purpose,
      status: 'scheduled',
      note,
    });
    targetEvents.push(event);
    return event;
  }

  function defaultValues(date = window.MemoryLabData.TODAY, startTime = '10:00') {
    const dateValue = formatDateInput(date);
    return {
      dateValue,
      startTime,
      endTime: addOneHour(startTime),
      repeat: 'never',
      repeatEndMode: 'never',
      repeatEndDate: dateValue,
      reminderLeadMinutes: '1440',
      purpose: 'Assessment',
      note: '',
    };
  }

  window.MemoryLabScheduleModal = {
    formatDateInput,
    parseDateInput,
    sameDay,
    addOneHour,
    updateRepeatFields,
    deadlineDates,
    createHomeDeadlines,
    createClinicAppointment,
    defaultValues,
  };
})();
