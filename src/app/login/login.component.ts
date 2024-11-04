import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async login() {
    this.errorMessage = ''; // Limpiar mensaje de error

    const { user, error } = await this.supabaseService.loginUserb(this.username, this.password);

    if (error) {
      this.errorMessage = error.message;
      console.error('Error en el inicio de sesión:', error);
    } else {
      console.log('Usuario autenticado:', user);
      // Redirige al usuario a la ruta deseada después del inicio de sesión exitoso
      this.router.navigate(['/foro']); // Ajusta la ruta según tu aplicación
    }
  }
}