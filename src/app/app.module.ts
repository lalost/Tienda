import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobroComponent } from './cobro/cobro.component';
import { VentasComponent } from './ventas/ventas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CobroComponent,
    VentasComponent,
    InventarioComponent,
    DetalleVentaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
