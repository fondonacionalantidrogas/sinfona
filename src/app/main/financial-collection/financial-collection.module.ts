import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CoreCardModule } from '@core/components/core-card/core-card.module';

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
import { GoalManagementComponent } from './goal-management/goal-management.component';
import { DetailsComponent } from './modals/contributing-companies/details/details.component';
import { AddComponent } from './modals/contributing-companies/add/add.component';
import { UpdateComponent } from './modals/contributing-companies/update/update.component';

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
  }
  ,
  {
    path: 'goal-management',
    component: GoalManagementComponent,
    canActivate:[AuthGuardGuard],
   }
]

@NgModule({
  declarations: [
    ContributingCompaniesComponent,
    TaxpayerPaymentsComponent,
    GoalManagementComponent,
    DetailsComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    CoreCardModule,
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
