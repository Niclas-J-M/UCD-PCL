window.MemoryLabData = (() => {
  const TODAY = new Date(2026, 4, 18);

  const education = [
    { code: 0, label: 'Elementary', fullLabel: 'Elementary (Basisonderwijs)', offset: 0.000 },
    { code: 1, label: 'Vocational', fullLabel: 'Vocational (MBO/VMBO)', offset: -0.006 },
    { code: 2, label: 'Pre-university', fullLabel: 'Pre-university (HAVO/VWO)', offset: -0.021 },
    { code: 3, label: 'Higher vocational', fullLabel: 'Higher vocational (HBO)', offset: -0.024 },
    { code: 4, label: 'Academic', fullLabel: 'Academic (Universitair)', offset: -0.036 },
  ];

  const patients = [
    {
      id: 'anna-bakker',
      name: 'Anna Bakker',
      initials: 'AB',
      age: 72,
      educationCode: 1,
      status: 'Monitoring - MCI screen',
      patientSince: 'Jan 2026',
      trend: 'declining',
      dashboardBadges: [{ type: 'quality', label: 'Check quality' }],
      flagged: true,
      due: false,
      colour: '#4A6FA5',
      sessions: [
        { label: 'Jan 6', date: '6 Jan', fullDate: '6 Jan 2026', sof: 0.36, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 2.8, duration: '8:04' },
        { label: 'Jan 13', date: '13 Jan', fullDate: '13 Jan 2026', sof: 0.37, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.0, duration: '8:10' },
        { label: 'Jan 20', date: '20 Jan', fullDate: '20 Jan 2026', sof: 0.37, quality: 'good', trials: 43, interruptions: 0, nonRetrievalTime: 3.1, duration: '7:58' },
        { label: 'Jan 27', date: '27 Jan', fullDate: '27 Jan 2026', sof: 0.38, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:15' },
        { label: 'Feb 3', date: '3 Feb', fullDate: '3 Feb 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:01' },
        { label: 'Feb 10', date: '10 Feb', fullDate: '10 Feb 2026', sof: 0.39, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.4, duration: '8:20' },
        { label: 'Feb 24', date: '24 Feb', fullDate: '24 Feb 2026', sof: 0.40, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:07' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.40, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.5, duration: '8:16' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.41, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.6, duration: '8:22' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.41, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.4, duration: '8:11' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.42, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.7, duration: '8:18' },
        { label: 'Apr 28', date: '28 Apr', fullDate: '28 Apr 2026', sof: 0.42, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.8, duration: '8:13' },
        { label: 'May 5', date: '5 May', fullDate: '5 May 2026', sof: 0.42, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.9, duration: '8:08' },
        { label: 'May 12', date: '12 May', fullDate: '12 May 2026', sof: 0.44, quality: 'caution', trials: 38, interruptions: 1, interruptionNote: '4 min gap detected', nonRetrievalTime: 4.2, duration: '8:12' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'Not recorded yet - ask during visit', empty: true },
        { label: 'Medication questions', answer: 'Asked whether blood pressure medication affects memory.', previous: 'From last visit - 14 Apr' },
        { label: 'Goal for next session', answer: 'Patient wants to keep doing weekly sessions; daughter will help set reminders.', previous: 'From last visit - 14 Apr' },
      ],
      questions: [
        { text: 'Is it normal that some weeks feel much harder than others?', date: 'Submitted 9 May via patient app' },
        { text: 'Should my husband do the test too?', date: 'Submitted 2 May via patient app' },
      ],
      reviewNote: 'shows a declining trend over the last 3 sessions.',
      trendSummary: 'has declined steadily across the available sessions, so the latest score should be reviewed alongside session quality.',
    },
    {
      id: 'johan-de-vries',
      name: 'Johan de Vries',
      initials: 'JV',
      age: 68,
      educationCode: 2,
      status: 'Routine monitoring',
      patientSince: 'Feb 2026',
      trend: 'stable',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#7B5EA7',
      sessions: [
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.37, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 2.9, duration: '7:54' },
        { label: 'Mar 10', date: '10 Mar', fullDate: '10 Mar 2026', sof: 0.37, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.0, duration: '8:02' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.36, quality: 'good', trials: 43, interruptions: 0, nonRetrievalTime: 2.8, duration: '7:49' },
        { label: 'Mar 24', date: '24 Mar', fullDate: '24 Mar 2026', sof: 0.37, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 2.9, duration: '8:11' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.37, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.0, duration: '8:05' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:00' },
        { label: 'Apr 28', date: '28 Apr', fullDate: '28 Apr 2026', sof: 0.37, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.0, duration: '7:58' },
        { label: 'May 5', date: '5 May', fullDate: '5 May 2026', sof: 0.37, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:09' },
        { label: 'May 13', date: '13 May', fullDate: '13 May 2026', sof: 0.37, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.0, duration: '8:03' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'No new concern recorded.', empty: true },
        { label: 'Medication questions', answer: 'Asked if sleep medication could affect recall speed.', previous: 'From last visit - 30 Apr' },
        { label: 'Goal for next session', answer: 'Continue fortnightly sessions and review sleep quality.', previous: 'From last visit - 30 Apr' },
      ],
      questions: [{ text: 'Can I do the memory check in the evening instead?', date: 'Submitted 10 May via patient app' }],
      trendSummary: 'has remained broadly stable, with small week-to-week variation around the same range.',
    },
    {
      id: 'greet-janssen',
      name: 'Greet Janssen',
      initials: 'GJ',
      age: 79,
      educationCode: 0,
      status: 'Monitoring - missed session',
      patientSince: 'Nov 2025',
      trend: 'stable',
      dashboardBadges: [{ type: 'due', label: 'Session due' }],
      flagged: false,
      due: true,
      colour: '#2E8B72',
      sessions: [
        { label: 'Mar 10', date: '10 Mar', fullDate: '10 Mar 2026', sof: 0.39, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:25' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.0, duration: '8:18' },
        { label: 'Mar 24', date: '24 Mar', fullDate: '24 Mar 2026', sof: 0.40, quality: 'good', trials: 38, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:31' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.39, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:20' },
        { label: 'Apr 14', date: '14 Apr', fullDate: '14 Apr 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:12' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.40, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:27' },
        { label: 'Apr 28', date: '28 Apr', fullDate: '28 Apr 2026', sof: 0.39, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:16' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'Daughter reports difficulty remembering appointments.', previous: 'From phone note - 13 May' },
        { label: 'Medication questions', answer: 'No medication question recorded.', empty: true },
        { label: 'Goal for next session', answer: 'Send reminder to daughter before the next session.', previous: 'From last visit - 28 Apr' },
      ],
      questions: [{ text: 'Can my daughter receive the reminders too?', date: 'Submitted 29 Apr via patient app' }],
      reminderNote: 'has not completed her scheduled session.',
      trendSummary: 'has stayed fairly steady, but the missed session means the next data point is important.',
    },
    {
      id: 'pieter-mulder',
      name: 'Pieter Mulder',
      initials: 'PM',
      age: 74,
      educationCode: 1,
      status: 'Monitoring - quality review',
      patientSince: 'Dec 2025',
      trend: 'declining',
      dashboardBadges: [{ type: 'due', label: 'Session due' }],
      flagged: true,
      due: true,
      colour: '#C17D2A',
      sessions: [
        { label: 'Feb 17', date: '17 Feb', fullDate: '17 Feb 2026', sof: 0.39, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:02' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.40, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:12' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.41, quality: 'good', trials: 39, interruptions: 0, nonRetrievalTime: 3.4, duration: '8:18' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.42, quality: 'good', trials: 38, interruptions: 0, nonRetrievalTime: 3.8, duration: '8:22' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.42, quality: 'good', trials: 38, interruptions: 0, nonRetrievalTime: 3.9, duration: '8:16' },
        { label: 'Apr 30', date: '30 Apr', fullDate: '30 Apr 2026', sof: 0.43, quality: 'caution', trials: 34, interruptions: 1, interruptionNote: 'Session interrupted', nonRetrievalTime: 4.0, duration: '6:45' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'Last session was interrupted; repeat before interpreting trend strongly.' },
        { label: 'Medication questions', answer: 'Asked whether new antihistamine could affect alertness.', previous: 'From last visit - 30 Apr' },
        { label: 'Goal for next session', answer: 'Repeat session with caregiver nearby to reduce interruption risk.', previous: 'From last visit - 30 Apr' },
      ],
      questions: [{ text: 'Should I repeat the test because the doorbell rang?', date: 'Submitted 30 Apr via patient app' }],
      reviewNote: 'last session was interrupted - review session quality before interpreting.',
      trendSummary: 'shows a downward pattern, but the latest session quality needs review before firm interpretation.',
    },
    {
      id: 'marieke-smit',
      name: 'Marieke Smit',
      initials: 'MS',
      age: 66,
      educationCode: 3,
      status: 'New baseline',
      patientSince: 'May 2026',
      trend: 'new',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#3D7FB5',
      sessions: [
        { label: 'May 4', date: '4 May', fullDate: '4 May 2026', sof: 0.36, quality: 'good', trials: 43, interruptions: 0, nonRetrievalTime: 2.7, duration: '7:45' },
        { label: 'May 11', date: '11 May', fullDate: '11 May 2026', sof: 0.36, quality: 'good', trials: 44, interruptions: 0, nonRetrievalTime: 2.8, duration: '7:52' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'Baseline setup after patient requested memory check-ins.' },
        { label: 'Medication questions', answer: 'No medication question recorded.', empty: true },
        { label: 'Goal for next session', answer: 'Build baseline across four sessions before interpreting trend.' },
      ],
      questions: [{ text: 'How many sessions do you need before this becomes useful?', date: 'Submitted 12 May via patient app' }],
      trendSummary: 'is still in the baseline period, so the focus is on collecting more sessions.',
    },
    {
      id: 'henk-visser',
      name: 'Henk Visser',
      initials: 'HV',
      age: 71,
      educationCode: 1,
      status: 'Routine monitoring',
      patientSince: 'Jan 2026',
      trend: 'stable',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#8B5A6E',
      sessions: [
        { label: 'Feb 17', date: '17 Feb', fullDate: '17 Feb 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:05' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.1, duration: '7:56' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:14' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:00' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:07' },
        { label: 'May 13', date: '13 May', fullDate: '13 May 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:02' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'No new concern recorded.', empty: true },
        { label: 'Medication questions', answer: 'Asked if testing after breakfast is preferable.', previous: 'From last visit - 2 May' },
        { label: 'Goal for next session', answer: 'Keep session timing consistent in the morning.', previous: 'From last visit - 2 May' },
      ],
      questions: [{ text: 'Can I skip a week while travelling?', date: 'Submitted 11 May via patient app' }],
      trendSummary: 'has remained stable across recent sessions.',
    },
    {
      id: 'henk-visser1',
      name: 'Henk Visser',
      initials: 'HV',
      age: 71,
      educationCode: 1,
      status: 'Routine monitoring',
      patientSince: 'Jan 2026',
      trend: 'stable',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#8B5A6E',
      sessions: [
        { label: 'Feb 17', date: '17 Feb', fullDate: '17 Feb 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:05' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.1, duration: '7:56' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:14' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:00' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:07' },
        { label: 'May 13', date: '13 May', fullDate: '13 May 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:02' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'No new concern recorded.', empty: true },
        { label: 'Medication questions', answer: 'Asked if testing after breakfast is preferable.', previous: 'From last visit - 2 May' },
        { label: 'Goal for next session', answer: 'Keep session timing consistent in the morning.', previous: 'From last visit - 2 May' },
      ],
      questions: [{ text: 'Can I skip a week while travelling?', date: 'Submitted 11 May via patient app' }],
      trendSummary: 'has remained stable across recent sessions.',
    },
    {
      id: 'henk-visser2',
      name: 'Henk Visser',
      initials: 'HV',
      age: 71,
      educationCode: 1,
      status: 'Routine monitoring',
      patientSince: 'Jan 2026',
      trend: 'stable',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#8B5A6E',
      sessions: [
        { label: 'Feb 17', date: '17 Feb', fullDate: '17 Feb 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:05' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.1, duration: '7:56' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:14' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:00' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:07' },
        { label: 'May 13', date: '13 May', fullDate: '13 May 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:02' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'No new concern recorded.', empty: true },
        { label: 'Medication questions', answer: 'Asked if testing after breakfast is preferable.', previous: 'From last visit - 2 May' },
        { label: 'Goal for next session', answer: 'Keep session timing consistent in the morning.', previous: 'From last visit - 2 May' },
      ],
      questions: [{ text: 'Can I skip a week while travelling?', date: 'Submitted 11 May via patient app' }],
      trendSummary: 'has remained stable across recent sessions.',
    },
    {
      id: 'henk-visser3',
      name: 'Henk Visser',
      initials: 'HV',
      age: 71,
      educationCode: 1,
      status: 'Routine monitoring',
      patientSince: 'Jan 2026',
      trend: 'stable',
      dashboardBadges: [],
      flagged: false,
      due: false,
      colour: '#8B5A6E',
      sessions: [
        { label: 'Feb 17', date: '17 Feb', fullDate: '17 Feb 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.3, duration: '8:05' },
        { label: 'Mar 3', date: '3 Mar', fullDate: '3 Mar 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.1, duration: '7:56' },
        { label: 'Mar 17', date: '17 Mar', fullDate: '17 Mar 2026', sof: 0.39, quality: 'good', trials: 40, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:14' },
        { label: 'Apr 7', date: '7 Apr', fullDate: '7 Apr 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:00' },
        { label: 'Apr 21', date: '21 Apr', fullDate: '21 Apr 2026', sof: 0.38, quality: 'good', trials: 41, interruptions: 0, nonRetrievalTime: 3.2, duration: '8:07' },
        { label: 'May 13', date: '13 May', fullDate: '13 May 2026', sof: 0.38, quality: 'good', trials: 42, interruptions: 0, nonRetrievalTime: 3.1, duration: '8:02' },
      ],
      consultationNotes: [
        { label: 'Primary concern today', answer: 'No new concern recorded.', empty: true },
        { label: 'Medication questions', answer: 'Asked if testing after breakfast is preferable.', previous: 'From last visit - 2 May' },
        { label: 'Goal for next session', answer: 'Keep session timing consistent in the morning.', previous: 'From last visit - 2 May' },
      ],
      questions: [{ text: 'Can I skip a week while travelling?', date: 'Submitted 11 May via patient app' }],
      trendSummary: 'has remained stable across recent sessions.',
    },
  ];

  const calendarEvents = [
    { id: 1, type: 'session', pid: 'anna-bakker', date: new Date(2026, 4, 5), time: '10:00', status: 'completed', note: '' },
    { id: 2, type: 'session', pid: 'johan-de-vries', date: new Date(2026, 4, 5), time: '11:30', status: 'completed', note: '' },
    { id: 3, type: 'session', pid: 'greet-janssen', date: new Date(2026, 4, 6), time: '14:00', status: 'completed', note: '' },
    { id: 4, type: 'session', pid: 'pieter-mulder', date: new Date(2026, 4, 6), time: '09:00', status: 'completed', note: '' },
    { id: 5, type: 'session', pid: 'marieke-smit', date: new Date(2026, 4, 11), time: '10:00', status: 'completed', note: '' },
    { id: 6, type: 'session', pid: 'henk-visser', date: new Date(2026, 4, 12), time: '11:00', status: 'completed', note: '' },
    { id: 7, type: 'session', pid: 'anna-bakker', date: new Date(2026, 4, 12), time: '10:00', status: 'completed', note: 'Session had interruption' },
    { id: 8, type: 'session', pid: 'johan-de-vries', date: new Date(2026, 4, 13), time: '11:30', status: 'completed', note: '' },
    { id: 9, type: 'session', pid: 'greet-janssen', date: new Date(2026, 4, 13), time: '14:00', status: 'overdue', note: 'Missed - no response to reminder' },
    { id: 10, type: 'session', pid: 'pieter-mulder', date: new Date(2026, 4, 14), time: '09:00', status: 'overdue', note: '' },
    { id: 11, type: 'session', pid: 'henk-visser', date: new Date(2026, 4, 18), time: '10:00', status: 'confirmed', note: '' },
    { id: 12, type: 'session', pid: 'marieke-smit', date: new Date(2026, 4, 19), time: '14:30', status: 'confirmed', note: '' },
    { id: 13, type: 'session', pid: 'anna-bakker', date: new Date(2026, 4, 19), time: '11:00', status: 'confirmed', note: '' },
    { id: 14, type: 'session', pid: 'johan-de-vries', date: new Date(2026, 4, 21), time: '10:00', status: 'confirmed', note: '' },
    { id: 15, type: 'session', pid: 'greet-janssen', date: new Date(2026, 4, 20), time: '14:00', status: 'confirmed', note: 'Reminder sent' },
    { id: 16, type: 'session', pid: 'pieter-mulder', date: new Date(2026, 4, 21), time: '09:00', status: 'confirmed', note: '' },
    { id: 17, type: 'session', pid: 'henk-visser', date: new Date(2026, 4, 25), time: '10:00', status: 'confirmed', note: '' },
    { id: 18, type: 'session', pid: 'marieke-smit', date: new Date(2026, 4, 26), time: '14:30', status: 'confirmed', note: '' },
    { id: 19, type: 'session', pid: 'anna-bakker', date: new Date(2026, 4, 26), time: '11:00', status: 'confirmed', note: '' },
    { id: 20, type: 'session', pid: 'johan-de-vries', date: new Date(2026, 4, 28), time: '10:00', status: 'confirmed', note: '' },
    { id: 21, type: 'clinic', pid: null, date: new Date(2026, 4, 18), time: '08:30', title: 'GP staff meeting', status: 'confirmed', note: 'Monthly dept update' },
    { id: 22, type: 'clinic', pid: null, date: new Date(2026, 4, 20), time: '12:00', title: 'Lunch with Dr. Smit', status: 'confirmed', note: '' },
    { id: 23, type: 'clinic', pid: null, date: new Date(2026, 4, 22), time: '09:00', title: 'Admin block', status: 'confirmed', note: 'Reports and referrals' },
    { id: 24, type: 'clinic', pid: null, date: new Date(2026, 4, 27), time: '14:00', title: 'PCL update call', status: 'confirmed', note: 'Precision Cognition Labs monthly check-in' },
  ];

  function cloneEvents() {
    return calendarEvents.map(event => ({ ...event, date: new Date(event.date.getTime()) }));
  }

  function sofToSGMA(sof) {
    return 140 / (1 + Math.exp(15 * (sof - 0.33))) + 30;
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

  function latestSession(patient) {
    return patient.sessions[patient.sessions.length - 1];
  }

  function recentSessions(patient, count = 4) {
    return patient.sessions.slice(-count).reverse();
  }

  function patientIndex(id) {
    return Math.max(0, patients.findIndex(patient => patient.id === id));
  }

  function dashboardMarkerPercent(patient) {
    const sgma = sofToSGMA(latestSession(patient).sof);
    return Math.max(5, Math.min(95, ((sgma - 30) / 140) * 100));
  }

  function upcomingSessions(count = 3) {
    return cloneEvents()
      .filter(event => event.type === 'session' && event.date >= TODAY && event.status !== 'completed')
      .sort((a, b) => a.date - b.date || a.time.localeCompare(b.time))
      .slice(0, count);
  }

  function reminders() {
    const items = [];
    patients.forEach(patient => {
      if (patient.reviewNote) items.push({ patientId: patient.id, tone: 'alert', text: `${patient.name} ${patient.reviewNote}`, time: `Flagged ${latestSession(patient).date}` });
      if (patient.reminderNote) items.push({ patientId: patient.id, tone: 'soft', text: `${patient.name} ${patient.reminderNote}`, time: `Due since ${latestSession(patient).date}` });
    });
    return items.slice(0, 3);
  }

  function completedThisWeek() {
    return cloneEvents().filter(event => event.type === 'session' && event.status === 'completed' && event.date.getMonth() === 4 && event.date.getDate() >= 11 && event.date.getDate() <= 17).length;
  }

  return {
    TODAY,
    education,
    patients,
    cloneEvents,
    sofToSGMA,
    getPatient,
    getPatientFromUrl,
    educationFor,
    latestSession,
    recentSessions,
    patientIndex,
    dashboardMarkerPercent,
    upcomingSessions,
    reminders,
    completedThisWeek,
  };
})();
