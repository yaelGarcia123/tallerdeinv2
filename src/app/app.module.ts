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


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    BodyComponent,
    FooterComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

