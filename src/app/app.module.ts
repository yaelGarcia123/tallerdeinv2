import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importa tus módulos de rutas
import { AppRoutingModule } from './app.routes'; // Asegúrate de que la ruta y nombre sean correctos
import { AppComponent } from './app.component'; // Asegúrate de tener este componente creado
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RecuperarcuentaComponent } from './login/recuperarcuenta/recuperarcuenta.component';
import { CrearCuentaComponent} from './login/crearcuenta/crearcuenta.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { ForoComponent } from './foro/foro.component';
import { AgregarCalandoComponent } from './agregar-calando/agregar-calando.component';
import { ConfiguracionComponent } from './foro/configuracion/configuracion.component';
import {ServiciosforoComponent } from './foro/serviciosforo/serviciosforo.component';
import { IngenierosearchComponent } from './foro/ingenierosearch/ingenierosearch.component';

import {RedescomunicacionComponent}from './foro/redescomunicacion/redescomunicacion.component';
import {ServiciosmecatronicaComponent} from './foro/serviciosmecatronica/serviciosmecatronica.component';

import { ChatComponent } from './foro/chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    BodyComponent,
    FooterComponent,
    RecuperarcuentaComponent,
    CrearCuentaComponent,
    MetodoPagoComponent,
    ForoComponent,
    AgregarCalandoComponent,
    ConfiguracionComponent,
    ServiciosforoComponent,
    IngenierosearchComponent,
    RedescomunicacionComponent,
    ServiciosmecatronicaComponent,
    ChatComponent

   
    

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

