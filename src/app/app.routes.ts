
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RecuperarcuentaComponent } from './login/recuperarcuenta/recuperarcuenta.component';
import { CrearcuentaComponent } from './login/crearcuenta/crearcuenta.component';
import { PagoComponent } from './pago/pago.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona la ruta raíz a 'inicio' (opcional)

  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent }, // Define la ruta
  { path: 'recuperarcuenta', component:  RecuperarcuentaComponent}, // Define la ruta
  { path: 'crearcuenta', component:  CrearcuentaComponent}, // Define la ruta
  { path: 'pago', component: PagoComponent},
  { path: 'MetodoPago', component: MetodoPagoComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }