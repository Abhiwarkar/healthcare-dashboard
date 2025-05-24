const healthData = {
  anatomyIndicators: [
    {
      id: 1,
      name: 'Healthy Heart',
      status: 'good',
      color: '#3F51B5',
      icon: '❤️',
      position: { top: '34%', left: '45%' },
    },
    {
      id: 2,
      name: 'Healthy Leg',
      status: 'good',
      color: '#00C2CB',
      icon: '🦵',
      position: { top: '75%', left: '35%' },
    },
  ],
  healthStatusCards: [
    {
      id: 1,
      name: 'Lungs',
      date: '26 Oct 2021',
      status: 'warning',
      statusPercentage: 65,
      icon: '🫁',
    },
    {
      id: 2,
      name: 'Teeth',
      date: '26 Oct 2021',
      status: 'good',
      statusPercentage: 85,
      icon: '🦷',
    },
    {
      id: 3,
      name: 'Bone',
      date: '26 Oct 2021',
      status: 'warning',
      statusPercentage: 70,
      icon: '🦴',
    },
  ],
};

export default healthData;