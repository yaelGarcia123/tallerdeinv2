
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RecuperarcuentaComponent } from './login/recuperarcuenta/recuperarcuenta.component';
import { CrearCuentaComponent } from './login/crearcuenta/crearcuenta.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { ForoComponent } from './foro/foro.component';
import { AgregarCalandoComponent } from './agregar-calando/agregar-calando.component';
import { ConfiguracionComponent } from './foro/configuracion/configuracion.component';
import {ServiciosforoComponent } from './foro/serviciosforo/serviciosforo.component';
import { IngenierosearchComponent } from './foro/ingenierosearch/ingenierosearch.component';
import{RedescomunicacionComponent} from './foro/redescomunicacion/redescomunicacion.component';
import {ServiciosmecatronicaComponent} from './foro/serviciosmecatronica/serviciosmecatronica.component';
import { ChatComponent } from './foro/chat/chat.component';
import {ContratacionesComponent} from './foro/contrataciones/contrataciones.component'
import {ServiceindustrialComponent} from './foro/serviceindustrial/serviceindustrial.component'

export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona la ruta raíz a 'inicio' (opcional)

  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent }, // Define la ruta
  { path: 'recuperarcuenta', component:  RecuperarcuentaComponent}, // Define la ruta
  { path: 'crearcuenta', component:  CrearCuentaComponent}, // Define la ruta
  { path: 'metodo-pago', component: MetodoPagoComponent},
  { path: 'foro', component: ForoComponent},
  {path: 'calando', component: AgregarCalandoComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'serviciosforo', component: ServiciosforoComponent},
  {path: 'ingenierosearch', component:IngenierosearchComponent },
  {path: 'redescomunicacion', component:RedescomunicacionComponent},
  {path: 'serviciosmecatronica', component:ServiciosmecatronicaComponent},
  {path: 'chat', component:ChatComponent},
{path: 'contrataciones', component:ContratacionesComponent},
{path: 'serviceindustrial', component:ServiceindustrialComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }