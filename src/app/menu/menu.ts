import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
    {
      id: 'dashboard',
      title: 'Inicio',
      icon: 'home',
      // role: ['Admin'],
      type: 'item',
      url: 'dashboard',
    },
];
