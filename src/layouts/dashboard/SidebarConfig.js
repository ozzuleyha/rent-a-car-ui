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
    title: 'dashboard',
    path: '/dashboard/admin/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user / rent-requests',
    path: '/dashboard/admin/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'company',
    path: '/dashboard/admin/company',
    icon: getIcon(companyFill)
  },
  {
    title: 'employee',
    path: '/dashboard/admin/employee',
    icon: getIcon(flashFill)
  },
  {
    title: 'Cars',
    path: '/dashboard/employee/cars',
    icon: getIcon(carFill)
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
