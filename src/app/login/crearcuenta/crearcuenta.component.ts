import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearCuentaComponent {
  name: string = ''; // Nombre completo
  username: string = ''; // Nombre de usuario
  email: string = ''; // Correo electrónico
  password: string = ''; // Contraseña
  confirmPassword: string = ''; // Confirmar contraseña
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async register() {
    // Verifica si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      this.successMessage = null;
      return;
    }

    // Llamar al servicio de Supabase para registrar el usuario
    const { data, error } = await this.supabaseService.signUpWithEmail(this.email, this.password);

    if (error) {
      this.errorMessage = error.message;
      this.successMessage = null;
    } else {
      this.errorMessage = null;
      this.successMessage = 'Registro exitoso. Por favor, verifica tu correo electrónico.';
      this.router.navigate(['/login']); // Redirige a la página de login
    }
  }
}
