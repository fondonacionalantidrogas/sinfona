import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { CoreCommonModule } from '@core/common.module';

import { InscriptionComponent } from 'app/main/pages/inscription/inscription.component'

// routing
const routes: Routes = [
  {
    path: 'inscripcion',
    component: InscriptionComponent,
    data: { animation: 'auth' }
  }
];

@NgModule({
  declarations: [InscriptionComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    ContentHeaderModule,
    CardSnippetModule
  ]
})
export class InscriptionModule { }
