import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { SalesLedgerComponent } from './sales-ledger/sales-ledger.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { SetupComponent } from './setup/setup.component';
import { RouteNavModuleModule } from './route-nav-module/route-nav-module.module';
import { SellProductCardComponent } from './sell-product-card/sell-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SellComponent,
    SalesLedgerComponent,
    ReportingComponent,
    ProductsComponent,
    CustomersComponent,
    SetupComponent,
    SellProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    RouteNavModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
