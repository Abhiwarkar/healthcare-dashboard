const calendarData = {
  month: 'October 2021',
  days: [
    { dayNum: 25, dayName: 'Mon', appointments: ['10:00', '11:00', '12:00'] },
    { dayNum: 26, dayName: 'Tues', appointments: ['08:00', '09:00', '10:00'] },
    { dayNum: 27, dayName: 'Wed', appointments: ['12:00', '13:00'] },
    { dayNum: 28, dayName: 'Thurs', appointments: ['10:00', '11:00'] },
    { dayNum: 29, dayName: 'Fri', appointments: ['14:00', '16:00'] },
    { dayNum: 30, dayName: 'Sat', appointments: ['12:00', '14:00', '15:00'] },
    { dayNum: 31, dayName: 'Sun', appointments: ['09:00', '10:00', '11:00'] },
  ],
  calendarAppointments: [
    {
      id: 1,
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      color: '#3F51B5',
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '🧠',
      color: '#7986CB',
    },
  ],
};

export default calendarData;