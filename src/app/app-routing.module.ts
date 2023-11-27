import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantEmpleadoComponent } from './components/mant-empleado/mant-empleado.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MantClienteComponent } from './components/mant-cliente/mant-cliente.component';
import { MantCarrosComponent } from './components/mant-carros/mant-carros.component';
import { LoginComponent } from './components/login/login.component';
import { GenerarVentaComponent } from './components/generar-venta/generar-venta.component';
import { ConsultReporteVentaComponent } from './components/consult-reporte-venta/consult-reporte-venta.component';
import { ConsultEmpleadoComponent } from './components/consult-empleado/consult-empleado.component';
import { ConsultClienteComponent } from './components/consult-cliente/consult-cliente.component';
import { ConsultCarrosComponent } from './components/consult-carros/consult-carros.component';


const routes: Routes = [

  // { path : "app-menu-principal", component: MenuPrincipalComponent},
  { path : "menu", component: MenuPrincipalComponent},
  { path : "app-mant-empleado", component: MantEmpleadoComponent},
  { path : "app-mant-cliente", component: MantClienteComponent},
  { path : "app-mant-carros", component: MantCarrosComponent},
  { path : "", component: LoginComponent},
  { path : "app-generar-venta", component: GenerarVentaComponent},
  { path : "app-consult-reporte-venta", component: ConsultReporteVentaComponent},
  { path : "app-consult-empleado", component: ConsultEmpleadoComponent},
  { path : "app-consult-cliente", component: ConsultClienteComponent},
  { path : "app-consult-carros", component: ConsultCarrosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
