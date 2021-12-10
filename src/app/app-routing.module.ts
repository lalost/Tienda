import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobroComponent } from './cobro/cobro.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LoginComponent } from './login/login.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'cobro', component:CobroComponent},
  {path:'inventario', component:InventarioComponent},
  {path:'detalle_venta', component: DetalleVentaComponent},
  {path:'ventas', component: VentasComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
