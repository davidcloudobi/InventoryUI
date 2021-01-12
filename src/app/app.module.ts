import { ProductsComponent } from './product/products/products.component';
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
import { SetupComponent } from './setup/setup.component';
import { RouteNavModuleModule } from './route-nav-module/route-nav-module.module';
import { SellProductCardComponent } from './sell-product-card/sell-product-card.component';
import { CloseRegisterComponent } from './close-register/close-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawerAmountDialogComponent } from './drawer-amount-dialog/drawer-amount-dialog.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { SalesHistoryHelpComponent } from './sales-history-help/sales-history-help.component';
import { SalesHistorySearchComponent } from './sales-history-search/sales-history-search.component';
import { SalesHistoryTableComponent } from './sales-history-table/sales-history-table.component';
import { SaleTabAllComponent } from './sale-tab-all/sale-tab-all.component';
import { SaleTabCompletedComponent } from './sale-tab-completed/sale-tab-completed.component';
import { SaleTabContinueComponent } from './sale-tab-continue/sale-tab-continue.component';
import { StockControlComponent } from './product/stock-control/stock-control.component';
import { InventoryCountsComponent } from './product/inventory-counts/inventory-counts.component';
import { PromotionsComponent } from './product/promotions/promotions.component';
import { PriceBooksComponent } from './product/price-books/price-books.component';
import { ProductTypesComponent } from './product/product-types/product-types.component';
import { SuppliersComponent } from './product/suppliers/suppliers.component';
import { BrandsComponent } from './product/brands/brands.component';
import { ProductTagsComponent } from './product/product-tags/product-tags.component';
import { ErrorComponent } from './error/error.component';
import { InventoryCountHelpComponent } from './inventoryCounts/inventory-count-help/inventory-count-help.component';
import { InventoryCountAdsComponent } from './inventoryCounts/inventory-count-ads/inventory-count-ads.component';
import { InventoryCountaTableComponent } from './inventoryCounts/inventory-counta-table/inventory-counta-table.component';
import { TableComponent } from './Table/table/table.component';
import { InventoyCountMainComponent } from './inventoryCounts/inventoy-count-main/inventoy-count-main.component';
import { DueComponent } from './inventoryCounts/due/due.component';
import { UpComingComponent } from './inventoryCounts/up-coming/up-coming.component';
import { CompletedComponent } from './inventoryCounts/completed/completed.component';
import { CancelledComponent } from './inventoryCounts/cancelled/cancelled.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { CustomersAddDialogComponent } from './customer/customers-add-dialog/customers-add-dialog.component';
import { UsersComponent } from './user/users/users.component';
import { UserTabComponent } from './user/user-tab/user-tab.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { UserComponent } from './user/user/user.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserTableNameComponent } from './user/table/user-table-name/user-table-name.component';
import { UserTableEnableComponent } from './user/table/user-table-enable/user-table-enable.component';
import { BusinessLoginComponent } from './login/business-login/business-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { BusinessRegComponent } from './login/business-reg/business-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SellComponent,
    SalesLedgerComponent,
    ReportingComponent,
    ProductsComponent,
    SetupComponent,
    SellProductCardComponent,
    CloseRegisterComponent,
    DrawerAmountDialogComponent,
    SalesHistoryComponent,
    SalesHistoryHelpComponent,
    SalesHistorySearchComponent,
    SalesHistoryTableComponent,
    SaleTabAllComponent,
    SaleTabCompletedComponent,
    SaleTabContinueComponent,
    StockControlComponent,
    InventoryCountsComponent,
    PromotionsComponent,
    PriceBooksComponent,
    ProductTypesComponent,
    SuppliersComponent,
    BrandsComponent,
    ProductTagsComponent,
    ErrorComponent,
    InventoryCountHelpComponent,
    InventoryCountAdsComponent,
    InventoryCountaTableComponent,
    TableComponent,
    InventoyCountMainComponent,
    DueComponent,
    UpComingComponent,
    CompletedComponent,
    CancelledComponent,
    CustomersComponent,
    CustomersAddDialogComponent,
    UsersComponent,
    UserTabComponent,
    UserRoleComponent,
    UserComponent,
    UserSearchComponent,
    UserTableComponent,
    UserTableNameComponent,
    UserTableEnableComponent,
    BusinessLoginComponent,
    UserLoginComponent,
    BusinessRegComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    RouteNavModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: ['http://example.com/examplebadroute/'],
        skipWhenExpired: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
