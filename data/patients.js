window.MemoryLabPatients = (() => {
  const { patient } = window.MemoryLabSchema;
  return [
    patient({ id: 'anna-bakker', name: 'Anna Bakker', initials: 'AB', age: 72, educationCode: 1, status: 'Monitoring - MCI screen', patientSince: 'Jan 2026', colour: '#4A6FA5', lastReviewedAt: '2026-05-10' }),
    patient({ id: 'johan-de-vries', name: 'Johan de Vries', initials: 'JV', age: 68, educationCode: 2, status: 'Routine monitoring', patientSince: 'Feb 2026', colour: '#7B5EA7', lastReviewedAt: '2026-05-14' }),
    patient({ id: 'greet-janssen', name: 'Greet Janssen', initials: 'GJ', age: 79, educationCode: 0, status: 'Monitoring - missed session', patientSince: 'Nov 2025', colour: '#2E8B72', lastReviewedAt: '2026-05-15' }),
    patient({ id: 'pieter-mulder', name: 'Pieter Mulder', initials: 'PM', age: 74, educationCode: 1, status: 'Monitoring - quality review', patientSince: 'Dec 2025', colour: '#C17D2A', lastReviewedAt: '2026-05-15' }),
    patient({ id: 'marieke-smit', name: 'Marieke Smit', initials: 'MS', age: 66, educationCode: 3, status: 'New baseline', patientSince: 'May 2026', colour: '#3D7FB5', lastReviewedAt: '2026-05-12' }),
    patient({ id: 'henk-visser', name: 'Henk Visser', initials: 'HV', age: 71, educationCode: 1, status: 'Routine monitoring', patientSince: 'Jan 2026', colour: '#8B5A6E', lastReviewedAt: '2026-05-14' }),
    patient({ id: 'fatima-el-amrani', name: 'Fatima el Amrani', initials: 'FA', age: 63, educationCode: 2, status: 'Routine monitoring', patientSince: 'Mar 2026', colour: '#4F8A8B', lastReviewedAt: '2026-05-08' }),
    patient({ id: 'kees-van-dijk', name: 'Kees van Dijk', initials: 'KD', age: 76, educationCode: 1, status: 'Monitoring - inactive', patientSince: 'Sep 2025', colour: '#9B6A4C', lastReviewedAt: '2025-10-07' }),
    patient({ id: 'noor-peters', name: 'Noor Peters', initials: 'NP', age: 58, educationCode: 4, status: 'New baseline', patientSince: 'May 2026', colour: '#5F7A9E', lastReviewedAt: '2026-05-16' }),
    patient({ id: 'willem-bos', name: 'Willem Bos', initials: 'WB', age: 70, educationCode: 0, status: 'New baseline - borderline', patientSince: 'May 2026', colour: '#B06F55', lastReviewedAt: '2026-05-11' }),
    patient({ id: 'saskia-meijer', name: 'Saskia Meijer', initials: 'SM', age: 69, educationCode: 3, status: 'Routine monitoring', patientSince: 'Feb 2026', colour: '#6C8E5A', lastReviewedAt: '2026-05-13' }),
    patient({ id: 'bram-de-koning', name: 'Bram de Koning', initials: 'BK', age: 80, educationCode: 1, status: 'Monitoring - trend review', patientSince: 'Feb 2026', colour: '#A6535F', lastReviewedAt: '2026-05-06' }),
    patient({ id: 'lia-verhoeven', name: 'Lia Verhoeven', initials: 'LV', age: 73, educationCode: 2, status: 'Monitoring - inactive', patientSince: 'Jan 2026', colour: '#5B7C6E', lastReviewedAt: '2026-03-10' }),
    patient({ id: 'tom-de-groot', name: 'Tom de Groot', initials: 'TG', age: 65, educationCode: 4, status: 'Routine monitoring', patientSince: 'Mar 2026', colour: '#4D6A9A', lastReviewedAt: '2026-05-10' }),
    patient({ id: 'ria-willems', name: 'Ria Willems', initials: 'RW', age: 78, educationCode: 0, status: 'New baseline - inactive', patientSince: 'Jan 2026', colour: '#8F6B8C', lastReviewedAt: '2026-01-20' }),
    patient({ id: 'daan-jansen', name: 'Daan Jansen', initials: 'DJ', age: 61, educationCode: 3, status: 'Routine monitoring', patientSince: 'Apr 2026', colour: '#3F7F9A', lastReviewedAt: '2026-05-14' }),
  ];
})();
