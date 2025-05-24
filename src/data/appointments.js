const appointments = {
  upcomingSchedule: [
    {
      day: 'Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '💉',
          color: '#E0E7FF',
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️',
          color: '#E0E7FF',
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️',
          color: '#E0E7FF',
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
          color: '#E0E7FF',
        }
      ]
    }
  ],
  activityData: {
    weeklyAppointmentsCount: 3,
    dailyActivity: [
      { day: 'Mon', appointments: [{ time: '10:00', duration: 1 }, { time: '15:00', duration: 2 }] },
      { day: 'Tues', appointments: [{ time: '09:00', duration: 1 }] },
      { day: 'Wed', appointments: [{ time: '11:00', duration: 1 }, { time: '14:00', duration: 1 }] },
      { day: 'Thurs', appointments: [{ time: '09:00', duration: 2 }] },
      { day: 'Fri', appointments: [{ time: '10:00', duration: 1 }, { time: '13:00', duration: 2 }] },
      { day: 'Sat', appointments: [{ time: '11:00', duration: 1 }] },
      { day: 'Sun', appointments: [{ time: '09:00', duration: 1 }] },
    ]
  }
};

export default appointments;

