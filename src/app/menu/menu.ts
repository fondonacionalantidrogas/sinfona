import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'home',
      type: 'item',
      url: 'dashboard',
    },
  {
    id: 'soporte',
    title: 'Soporte',
    type: 'collapsible',
    role: ['Admin'], //? To hide collapsible based on user role
    icon: 'tool',
    children: [
      {
        id: 'ecommerce',
        title: 'Modulos Menus',
        type: 'item',
        icon: 'circle',
        url: '/menu-module'
      },
      {
        id: 'ecommerce',
        title: 'Roles de Usuarios',
        type: 'item',
        icon: 'circle',
        url: '/role-user'
      },
      {
        id: 'ecommerce',
        title: 'Permisos de Usuarios',
        type: 'item',
        icon: 'circle',
        url: '/permissions-user'
      },
      {
        id: 'analytics',
        title: 'Gestion Usuario',
        type: 'item',
        // role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: '/user-management'
      },
      {
        id: 'ecommerce',
        title: 'Gestion Tablas',
        type: 'item',
        icon: 'circle',
        url: '/table-management'
      },
      {
        id: 'ecommerce',
        title: 'Cambiar Contraseña',
        type: 'item',
        icon: 'circle',
        url: '/change-password'
      },
      {
        id: 'ecommerce',
        title: 'Copias de Seguridad',
        type: 'item',
        icon: 'circle',
        url: '/backups'
      },
      {
        id: 'ecommerce',
        title: 'Auditoria',
        type: 'item',
        icon: 'circle',
        url: '/audit'
      }
    ]
  },
  {
    id: 'soporte',
    title: 'Registro Contribuyente',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'file-text',
    children: [
      {
        id: 'analytics',
        title: 'Gestion Inscripcion',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        id: 'ecommerce',
        title: 'Desclaracion y Pagos',
        type: 'item',
        icon: 'circle',
        url: '/taxpayer-registration'
      },
      {
        id: 'ecommerce',
        title: 'Planilla Solvencia',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  {
    id: 'soporte',
    title: 'Recaudación',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'check-circle',
    children: [
      {
        id: 'analytics',
        title: 'Empresas Contribuyentes',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        id: 'ecommerce',
        title: 'Pagos Contribuyentes',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      },
      {
        id: 'ecommerce',
        title: 'Consolidación de Pagos',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      },
      {
        id: 'ecommerce',
        title: 'Gestión de Metas',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  {
    id: 'soporte',
    title: 'Documentación Digital',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'folder-plus',
    children: [
      {
        id: 'analytics',
        title: 'Contribuyentes',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        id: 'ecommerce',
        title: 'Comunicaciones',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
  {
    id: 'soporte',
    title: 'Reportes y Alertas',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'alert-triangle',
    children: [
      {
        id: 'analytics',
        title: 'Gestión Alertas',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        id: 'ecommerce',
        title: 'Definición Alertas',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      },
      {
        id: 'ecommerce',
        title: 'Configuración Usuarios Alertados',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      },
      {
        id: 'ecommerce',
        title: 'Reportes Dinamicos',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      },
      {
        id: 'ecommerce',
        title: 'Reportes Estaticos',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  }

];
