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
    icon: getIcon(pieChart2Fill),
    userRole: 3
  },
  {
    title: 'users',
    path: '/dashboard/admin/user',
    icon: getIcon(peopleFill),
    userRole: 3
  },
  {
    title: 'companies',
    path: '/dashboard/admin/company',
    icon: getIcon(companyFill),
    userRole: 3
  },
  {
    title: 'employees',
    path: '/dashboard/admin/employee',
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
    userRole: 1
  },
  {
    title: 'Rent Result',
    path: '/dashboard/user/rent-result',
    icon: getIcon(peopleFill),
    userRole: 1
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
