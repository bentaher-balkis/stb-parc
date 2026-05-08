import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Inscription } from './pages/inscription/inscription';

import { Layout } from './pages/layout/layout';

import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { Users } from './pages/users/users';
import { Roles } from './pages/roles/roles';
import { Tpes } from './pages/tpes/tpes';
import { Transactions } from './pages/transactions/transactions';
import { Notifications } from './pages/notifications/notifications';
import { Auditlogs } from './pages/auditlogs/auditlogs';
import { Affectations } from './pages/affectations/affectations';
import { Statistiques } from './pages/statistiques/statistiques';

export const routes: Routes = [

  // LOGIN
  {
    path: '',
    component: Login
  },

  // REGISTER
  {
    path: 'register',
    component: Inscription
  },

  // ADMIN LAYOUT
  {
    path: 'admin',
    component: Layout,

    children: [

      {
        path: 'dashboard',
        component: AdminDashboard
      },

      {
        path: 'users',
        component: Users
      },

      {
        path: 'roles',
        component: Roles
      },

      {
        path: 'tpes',
        component: Tpes
      },

      {
        path: 'transactions',
        component: Transactions
      },

      {
        path: 'notifications',
        component: Notifications
      },

      {
        path: 'auditlogs',
        component: Auditlogs
      },

      {
        path: 'affectations',
        component: Affectations
      },
      {
        path: 'statistiques',
        component: Statistiques
      },

      // DEFAULT ADMIN PAGE
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }

    ]
  },

  // UNKNOWN ROUTE
  {
    path: '**',
    redirectTo: ''
  },
  


];