
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


export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona la ruta raíz a 'inicio' (opcional)

  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent }, // Define la ruta
  { path: 'recuperarcuenta', component:  RecuperarcuentaComponent}, // Define la ruta
  { path: 'crearcuenta', component:  CrearCuentaComponent}, // Define la ruta
  { path: 'metodo-pago', component: MetodoPagoComponent},
  { path: 'foro', component: ForoComponent},
  {path: 'calando', component: AgregarCalandoComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }