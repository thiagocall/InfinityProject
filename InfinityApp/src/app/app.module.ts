import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MzNavbarModule, MzCardModule, MzButtonModule, MzIconModule, MzIconMdiModule, MzInputModule, MzSelectModule, MzSwitchModule, MzTabModule} from 'ngx-materialize'
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
// export const options: Partial<IConfig> | (() => Partial<IConfig>);
// export const options: Partial<IConfig> | (() => Partial<IConfig>)  ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';


const maskConfig: Partial<IConfig> = {
  validation: false,

};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OrdersComponent,
    ClientsComponent,
    ClientsListComponent,
    OrderListComponent,
    ClientsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzCardModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule,
    MzInputModule,
    MzSelectModule,
    NgxMaskModule.forRoot(maskConfig),
    MzSwitchModule,
    MzTabModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


