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
import { ContributingCompaniesComponent } from './contributing-companies/contributing-companies.component';
import { TaxpayerPaymentsComponent } from './taxpayer-payments/taxpayer-payments.component';
import { PaymentConsolidationComponent } from './payment-consolidation/payment-consolidation.component';
import { GoalManagementComponent } from './goal-management/goal-management.component';

// routing
const routes: Routes = [
  {
    path: 'contributing-companies',
    component: ContributingCompaniesComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'taxpayer-payments',
    component: TaxpayerPaymentsComponent,
    canActivate:[AuthGuardGuard],
  },
  {
    path: 'payment-consolidation',
    component: PaymentConsolidationComponent,
    canActivate:[AuthGuardGuard]
   }
   ,
  {
    path: 'goal-management',
    component: GoalManagementComponent,
    canActivate:[AuthGuardGuard]
   }
]

@NgModule({
  declarations: [
    ContributingCompaniesComponent,
    TaxpayerPaymentsComponent,
    PaymentConsolidationComponent,
    GoalManagementComponent
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
export class FinancialCollectionModule { }
