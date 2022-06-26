import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { DashboardComponent } from './dashboard.component'

import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';

// routing
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuardGuard],
  },
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    ContentHeaderModule,
  ]
})
export class DashboardModule { }
