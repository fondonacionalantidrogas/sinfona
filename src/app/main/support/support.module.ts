import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';


//  USer
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { CoreDirectivesModule } from '@core/directives/directives';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { CoreSidebarModule } from '@core/components';
//  USer

import { UserManagementComponent } from './user-management/user-management.component'; 
import { RoleComponent } from './role/role.component'; 
import { PermissionsComponent } from './permissions/permissions.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BackupsComponent } from './backups/backups.component';
import { AuditComponent } from './audit/audit.component';
import { MenuModuleComponent } from './menu-module/menu-module.component';

// routing
const routes: Routes = [
  {
    path: 'user-management',
    component: UserManagementComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'role-user',
    component: RoleComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'permissions-user',
    component: PermissionsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'table-management',
    component: TableManagementComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'backups',
    component: BackupsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'audit',
    component: AuditComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'menu-module',
    component: MenuModuleComponent,
    canActivate:[AuthGuardGuard],
  }

]

@NgModule({
  declarations: [
    UserManagementComponent,
    RoleComponent,
    PermissionsComponent,
    MenuModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ReactiveFormsModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,
    CoreDirectivesModule,
    CorePipesModule,
    CoreSidebarModule
  ]
})


export class SupportModule { }
