import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
export const routes: Routes = [

{ path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona la ruta raíz a 'inicio' (opcional)

  { path: 'login', component: LoginComponent },

  { path: 'inicio', component: InicioComponent }, // Define la ruta
  


 
=======
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

// Define las rutas que necesitas aquí
export const routes: Routes = [

>>>>>>> carlossalas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
