import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Importa tus módulos de rutas
import { AppRoutingModule } from './app.routes'; // Asegúrate de que la ruta y nombre sean correctos
import { AppComponent } from './app.component'; // Asegúrate de tener este componente creado
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
