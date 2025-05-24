import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  Stethoscope, 
  BarChart2, 
  FlaskConical, 
  MessageSquare, 
  LifeBuoy, 
  Settings 
} from 'lucide-react';

const navigationLinks = [
  {
    id: 1,
    name: 'Dashboard',
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: 2,
    name: 'History',
    icon: Clock,
    active: false,
  },
  {
    id: 3,
    name: 'Calendar',
    icon: Calendar,
    active: false,
  },
  {
    id: 4,
    name: 'Appointments',
    icon: Stethoscope,
    active: false,
  },
  {
    id: 5,
    name: 'Statistics',
    icon: BarChart2,
    active: false,
  },
  {
    id: 6,
    name: 'Tests',
    icon: FlaskConical,
    active: false,
  },
  {
    id: 7,
    name: 'Chat',
    icon: MessageSquare,
    active: false,
  },
  {
    id: 8,
    name: 'Support',
    icon: LifeBuoy,
    active: false,
  },
  {
    id: 9,
    name: 'Setting',
    icon: Settings,
    active: false,
  },
];

export default navigationLinks;