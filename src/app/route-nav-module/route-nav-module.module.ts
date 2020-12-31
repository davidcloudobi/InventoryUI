import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SellComponent } from '../sell/sell.component';
import { SalesLedgerComponent } from '../sales-ledger/sales-ledger.component';
import { ReportingComponent } from '../reporting/reporting.component';
import { CustomersComponent } from '../customers/customers.component';
import { SetupComponent } from '../setup/setup.component';

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
  path: '**' , redirectTo: '/dashboard', pathMatch: 'full'
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
