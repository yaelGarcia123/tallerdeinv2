import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { InicioComponent } from './inicio/inicio.component'; 
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

// Define las rutas que necesitas aquí
export const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
