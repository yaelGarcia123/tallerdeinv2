import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
import { LoginComponent } from './login/login.component';
export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona la ruta raíz a 'inicio' (opcional)

  { path: 'login', component: LoginComponent },

  { path: 'inicio', component: InicioComponent }, // Define la ruta
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
