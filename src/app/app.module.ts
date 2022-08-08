import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { NgSelectModule } from '@ng-select/ng-select';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { LocationStrategy, HashLocationStrategy, JsonPipe } from '@angular/common';
import { AuthGuardGuard } from '@core/services/seguridad/auth-guard.guard';
import { AuthInterceptorService } from '@core/services/seguridad/auth-interceptor.service';

//  Modulos de Enlace de cada Menu
import { DashboardModule } from 'app/main/dashboard/dashboard.module';
import { SupportModule } from './main/support/support.module';
import { DigitalDocumentationModule } from './main/digital-documentation/digital-documentation.module';
import { FinancialCollectionModule } from './main/financial-collection/financial-collection.module';
import { TaxpayerRecordModule } from './main/taxpayer-record/taxpayer-record.module';
import { ReportsAlertsModule } from './main/reports-alerts/reports-alerts.module';
 //  Modulos de Enlace de cada Menu


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: '/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true, // Agregar # a las rutas URL
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    DashboardModule,
    SupportModule,
    DigitalDocumentationModule,
    FinancialCollectionModule,
    TaxpayerRecordModule,
    ReportsAlertsModule,
  ],
  providers: [
    {
      provide: [ LocationStrategy, AuthGuardGuard,  JsonPipe],
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
