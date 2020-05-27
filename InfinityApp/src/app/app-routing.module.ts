import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { OrdersComponent } from "./orders/orders.component";
import { ClientsComponent } from './clients/clients.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'pedidos/lista', component: OrderListComponent},
  {path: 'pedidos', component: OrdersComponent},

  {path: 'clientes/adicionar', component: ClientsAddComponent},
  {path: 'clientes/lista', component: ClientsListComponent},
  {path: 'clientes', component: ClientsComponent},

  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
