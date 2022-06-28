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


import { DeclarationPaymentsComponent } from './declaration-payments/declaration-payments.component';
import { SolvencyFormsComponent } from './solvency-forms/solvency-forms.component'
import { RegistrationManagementComponent } from './registration-management/registration-management.component';
// routing
const routes: Routes = [
  {
    path: 'declaration-payments',
    component: DeclarationPaymentsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'solvency-forms',
    component: SolvencyFormsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'registration-management',
    component: RegistrationManagementComponent,
    canActivate:[AuthGuardGuard],
  }
]

@NgModule({
  declarations: [
    DeclarationPaymentsComponent,
  SolvencyFormsComponent,
  RegistrationManagementComponent
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
export class TaxpayerRecordModule { }
