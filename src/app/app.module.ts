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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormBuilder,FormsModule} from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    ConsultReporteVentaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
