window.MemoryLabNotes = (() => {
  const { consultationNote, question } = window.MemoryLabSchema;
  const consultationNotes = [
    consultationNote({ patientId: 'anna-bakker', label: 'Primary concern today', answer: 'Not recorded yet - ask during visit', empty: true }),
    consultationNote({ patientId: 'anna-bakker', label: 'Medication questions', answer: 'Asked whether blood pressure medication affects memory.', previous: 'From last visit - 14 Apr' }),
    consultationNote({ patientId: 'anna-bakker', label: 'Goal for next session', answer: 'Patient wants to keep doing weekly sessions; daughter will help set reminders.', previous: 'From last visit - 14 Apr' }),
    consultationNote({ patientId: 'johan-de-vries', label: 'Primary concern today', answer: 'No new concern recorded.', empty: true }),
    consultationNote({ patientId: 'johan-de-vries', label: 'Medication questions', answer: 'Asked if sleep medication could affect recall speed.', previous: 'From last visit - 30 Apr' }),
    consultationNote({ patientId: 'johan-de-vries', label: 'Goal for next session', answer: 'Continue fortnightly sessions and review sleep quality.', previous: 'From last visit - 30 Apr' }),
    consultationNote({ patientId: 'greet-janssen', label: 'Primary concern today', answer: 'Daughter reports difficulty remembering appointments.', previous: 'From phone note - 13 May' }),
    consultationNote({ patientId: 'greet-janssen', label: 'Medication questions', answer: 'No medication question recorded.', empty: true }),
    consultationNote({ patientId: 'greet-janssen', label: 'Goal for next session', answer: 'Send reminder to daughter before the next session.', previous: 'From last visit - 28 Apr' }),
    consultationNote({ patientId: 'pieter-mulder', label: 'Primary concern today', answer: 'Last session was interrupted; repeat before interpreting trend strongly.' }),
    consultationNote({ patientId: 'pieter-mulder', label: 'Medication questions', answer: 'Asked whether new antihistamine could affect alertness.', previous: 'From last visit - 30 Apr' }),
    consultationNote({ patientId: 'pieter-mulder', label: 'Goal for next session', answer: 'Repeat session with caregiver nearby to reduce interruption risk.', previous: 'From last visit - 30 Apr' }),
    consultationNote({ patientId: 'marieke-smit', label: 'Primary concern today', answer: 'Baseline setup after patient requested memory check-ins.' }),
    consultationNote({ patientId: 'marieke-smit', label: 'Medication questions', answer: 'No medication question recorded.', empty: true }),
    consultationNote({ patientId: 'marieke-smit', label: 'Goal for next session', answer: 'Build baseline across four sessions before interpreting trend.' }),
    consultationNote({ patientId: 'henk-visser', label: 'Primary concern today', answer: 'No new concern recorded.', empty: true }),
    consultationNote({ patientId: 'henk-visser', label: 'Medication questions', answer: 'Asked if testing after breakfast is preferable.', previous: 'From last visit - 2 May' }),
    consultationNote({ patientId: 'henk-visser', label: 'Goal for next session', answer: 'Keep session timing consistent in the morning.', previous: 'From last visit - 2 May' }),
  ];

  const questions = [
    question({ patientId: 'anna-bakker', text: 'Is it normal that some weeks feel much harder than others?', date: 'Submitted 9 May via patient app' }),
    question({ patientId: 'anna-bakker', text: 'Should my husband do the test too?', date: 'Submitted 2 May via patient app' }),
    question({ patientId: 'johan-de-vries', text: 'Can I do the memory check in the evening instead?', date: 'Submitted 10 May via patient app' }),
    question({ patientId: 'greet-janssen', text: 'Can my daughter receive the reminders too?', date: 'Submitted 29 Apr via patient app' }),
    question({ patientId: 'pieter-mulder', text: 'Should I repeat the test because the doorbell rang?', date: 'Submitted 30 Apr via patient app' }),
    question({ patientId: 'marieke-smit', text: 'How many sessions do you need before this becomes useful?', date: 'Submitted 12 May via patient app' }),
    question({ patientId: 'henk-visser', text: 'Can I skip a week while travelling?', date: 'Submitted 11 May via patient app' }),
  ];

  return { consultationNotes, questions };
})();
