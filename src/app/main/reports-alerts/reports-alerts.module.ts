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


// 
import { AlertManagementComponent } from './alert-management/alert-management.component';
import { DefinitionAlertsComponent } from './definition-alerts/definition-alerts.component';
import { AlertedUsersConfigurationComponent } from './alerted-users-configuration/alerted-users-configuration.component';
import { DynamicReportsComponent } from './dynamic-reports/dynamic-reports.component';
import { StaticReportsComponent } from './static-reports/static-reports.component';

// routing
const routes: Routes = [
  {
    path: 'alert-management',
    component: AlertManagementComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'definition-alerts',
    component: DefinitionAlertsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'alerted-users-configuration',
    component: AlertedUsersConfigurationComponent,
    canActivate:[AuthGuardGuard]
   }
   ,
  {
    path: 'dinamic-reports',
    component: DynamicReportsComponent,
    canActivate:[AuthGuardGuard]
   },
   {
     path: 'static-reports',
     component: StaticReportsComponent,
     canActivate:[AuthGuardGuard]
    }
]

@NgModule({
  declarations: [
    AlertManagementComponent,
    DefinitionAlertsComponent,
    AlertedUsersConfigurationComponent,
    DynamicReportsComponent,
    StaticReportsComponent
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
export class ReportsAlertsModule { }
