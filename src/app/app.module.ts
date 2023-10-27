import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MantCarrosComponent } from './components/mant-carros/mant-carros.component';
import { MantEmpleadoComponent } from './components/mant-empleado/mant-empleado.component';
import { MantClienteComponent } from './components/mant-cliente/mant-cliente.component';
import { GenerarVentaComponent } from './components/generar-venta/generar-venta.component';
import { ConsultEmpleadoComponent } from './components/consult-empleado/consult-empleado.component';
import { ConsultClienteComponent } from './components/consult-cliente/consult-cliente.component';
import { ConsultCarrosComponent } from './components/consult-carros/consult-carros.component';
import { ConsultReporteVentaComponent } from './components/consult-reporte-venta/consult-reporte-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    MantCarrosComponent,
    MantEmpleadoComponent,
    MantClienteComponent,
    GenerarVentaComponent,
    ConsultEmpleadoComponent,
    ConsultClienteComponent,
    ConsultCarrosComponent,
    ConsultReporteVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
