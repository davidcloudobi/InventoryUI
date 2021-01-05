import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SellComponent } from '../sell/sell.component';
import { SalesLedgerComponent } from '../sales-ledger/sales-ledger.component';
import { ReportingComponent } from '../reporting/reporting.component';
import { SetupComponent } from '../setup/setup.component';
import { CloseRegisterComponent } from '../close-register/close-register.component';
import { SalesHistoryComponent } from '../sales-history/sales-history.component';
import { SaleTabAllComponent } from '../sale-tab-all/sale-tab-all.component';
import { SaleTabCompletedComponent } from '../sale-tab-completed/sale-tab-completed.component';
import { SaleTabContinueComponent } from '../sale-tab-continue/sale-tab-continue.component';
import { StockControlComponent } from '../product/stock-control/stock-control.component';
import { InventoryCountsComponent } from '../product/inventory-counts/inventory-counts.component';
import { PromotionsComponent } from '../product/promotions/promotions.component';
import { PriceBooksComponent } from '../product/price-books/price-books.component';
import { ProductTypesComponent } from '../product/product-types/product-types.component';
import { SuppliersComponent } from '../product/suppliers/suppliers.component';
import { BrandsComponent } from '../product/brands/brands.component';
import { ProductTagsComponent } from '../product/product-tags/product-tags.component';
import { ProductsComponent } from '../product/products/products.component';
import { ErrorComponent } from '../error/error.component';
import { DueComponent } from '../inventoryCounts/due/due.component';
import { UpComingComponent } from '../inventoryCounts/up-coming/up-coming.component';
import { CompletedComponent } from '../inventoryCounts/completed/completed.component';
import { CancelledComponent } from '../inventoryCounts/cancelled/cancelled.component';
import { CustomersComponent } from '../customer/customers/customers.component';

const routes: Routes = [
{
    path: '' , redirectTo: '/dashboard', pathMatch: 'full'
},
{
  path: 'dashboard' , component: HomeComponent
},
{
  path: 'sell' , component: SellComponent
},
{
  path: 'sell-ledager' , component: SalesLedgerComponent
},
{
  path: 'reporting' , component: ReportingComponent
},
{
  path: 'customers' , component: CustomersComponent
},
{
  path: 'setup' , component: SetupComponent
},
{
  path: 'registerclosure' , component: CloseRegisterComponent
},
{
  path: 'sale-history' , component: SalesHistoryComponent, children : [
    {path: 'all', component: SaleTabAllComponent},
    {path: 'completed', component: SaleTabCompletedComponent},
    {path: 'continue', component: SaleTabContinueComponent}
  ]
},
{
  path: 'products' , component: ProductsComponent
},
    {
      path: 'stock-control' , component: StockControlComponent
    },
    {
      path: 'inventory-counts' , component: InventoryCountsComponent, children : [
        {path: 'due', component: DueComponent},
        {path: 'upcoming', component: UpComingComponent},
        {path: 'completed', component: CompletedComponent},
        {path: 'cancelled', component: CancelledComponent}
      ]
    },
    {
      path: 'promotions' , component: PromotionsComponent
    },
    {
      path: 'price-books' , component: PriceBooksComponent
    },
    {
      path: 'product-types' , component: ProductTypesComponent
    },
    {
      path: 'suppliers' , component: SuppliersComponent
    },
    {
      path: 'brands' , component: BrandsComponent
    },
    {
      path: 'product-tags' , component: ProductTagsComponent
    },
{
  path: '**' , component: ErrorComponent
}
];

@NgModule({
  imports: [
RouterModule.forRoot(routes)
  ],
  exports : [
RouterModule
  ]
})
export class RouteNavModuleModule { }
