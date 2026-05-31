window.MemoryLabPatients = (() => {
  const { patient } = window.MemoryLabSchema;
  return [
    patient({ id: 'anna-bakker', name: 'Anna Bakker', initials: 'AB', age: 72, educationCode: 1, status: 'Monitoring - MCI screen', patientSince: 'Jan 2026', colour: '#4A6FA5', lastReviewedAt: '2026-05-10' }),
    patient({ id: 'johan-de-vries', name: 'Johan de Vries', initials: 'JV', age: 68, educationCode: 2, status: 'Routine monitoring', patientSince: 'Feb 2026', colour: '#7B5EA7', lastReviewedAt: '2026-05-14' }),
    patient({ id: 'greet-janssen', name: 'Greet Janssen', initials: 'GJ', age: 79, educationCode: 0, status: 'Monitoring - missed session', patientSince: 'Nov 2025', colour: '#2E8B72', lastReviewedAt: '2026-05-15' }),
    patient({ id: 'pieter-mulder', name: 'Pieter Mulder', initials: 'PM', age: 74, educationCode: 1, status: 'Monitoring - quality review', patientSince: 'Dec 2025', colour: '#C17D2A', lastReviewedAt: '2026-05-15' }),
    patient({ id: 'marieke-smit', name: 'Marieke Smit', initials: 'MS', age: 66, educationCode: 3, status: 'New baseline', patientSince: 'May 2026', colour: '#3D7FB5', lastReviewedAt: '2026-05-12' }),
    patient({ id: 'henk-visser', name: 'Henk Visser', initials: 'HV', age: 71, educationCode: 1, status: 'Routine monitoring', patientSince: 'Jan 2026', colour: '#8B5A6E', lastReviewedAt: '2026-05-14' }),
  ];
})();
