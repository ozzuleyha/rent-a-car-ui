import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import companyFill from '@iconify/icons-eva/home-fill';
import flashFill from '@iconify/icons-eva/flash-outline';
import carFill from '@iconify/icons-eva/car-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
const sidebarConfig = [
  {
    title: 'topluluk',
    path: '/dashboard/admin/topluluk',
    icon: getIcon(pieChart2Fill),
    userRole: 1
  },
  {
    title: 'akademisyen',
    path: '/dashboard/admin/akademisyen',
    icon: getIcon(pieChart2Fill),
    userRole: 1
  },
  {
    title: 'topluluk',
    path: '/dashboard/ogrenci/topluluk',
    icon: getIcon(peopleFill),
    userRole: 4
  },
  {
    title: 'duyurular',
    path: '/dashboard/ogrenci/duyuru',
    icon: getIcon(companyFill),
    userRole: 4
  },
  {
    title: 'duyuru',
    path: '/dashboard/yonetici/duyuru',
    icon: getIcon(flashFill),
    userRole: 3
  },
  {
    title: 'topluluk',
    path: '/dashboard/yonetici/topluluk',
    icon: getIcon(flashFill),
    userRole: 3
  },
  {
    title: 'Cars',
    path: '/dashboard/employee/cars',
    icon: getIcon(carFill),
    userRole: 2
  },
  {
    title: 'Rent-requests',
    path: '/dashboard/employee/rent-requests',
    icon: getIcon(peopleFill),
    userRole: 2
  },
  {
    title: 'Cars',
    path: '/dashboard/user/cars',
    icon: getIcon(peopleFill),
    userRole: 2
  },
  {
    title: 'Rent Result',
    path: '/dashboard/user/rent-result',
    icon: getIcon(peopleFill),
    userRole: 2
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  }
];

export default sidebarConfig;
