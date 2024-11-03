import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Propiedad para el email
  password: string = ''; // Propiedad para la contraseña
  errorMessage: string = ''; // Propiedad para mensajes de error

  constructor(private supabaseService: SupabaseService, private router: Router) {} // Agrega Router

  async login() {
    this.errorMessage = ''; // Resetea el mensaje de error
    const { user, error } = await this.supabaseService.loginUser(this.email, this.password);
    
    if (error) {
      this.errorMessage = error.message; // Asigna el mensaje de error
      console.error('Error en el inicio de sesión:', error);
    } else {
      console.log('Usuario autenticado:', user);
      // Redirige al usuario al componente 'foro' después del inicio de sesión exitoso
      this.router.navigate(['/foro']); // Cambia '/foro' por la ruta correcta
    }
  }
}