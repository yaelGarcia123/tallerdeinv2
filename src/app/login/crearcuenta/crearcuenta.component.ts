import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearCuentaComponent {
  name: string = ''; // Propiedad para el nombre
  surname: string = ''; // Propiedad para el apellido
  email: string = ''; // Propiedad para el email
  password: string = ''; // Propiedad para la contraseña
  confirmPassword: string = ''; // Propiedad para confirmar contraseña
  curriculum: string = ''; // Propiedad para el currículum
  errorMessage: string = ''; // Propiedad para mensajes de error
  successMessage: string = ''; // Propiedad para mensajes de éxito

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async register() {
    this.errorMessage = ''; // Resetea el mensaje de error
    this.successMessage = ''; // Resetea el mensaje de éxito

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    const { user, error } = await this.supabaseService.registerUser(this.name, this.email, this.password, 'general', this.curriculum);
    
    if (error) {
      this.errorMessage = error.message; // Asigna el mensaje de error
      console.error('Error en el registro:', error);
    } else {
      this.successMessage = 'Registro exitoso. Redirigiendo a login...'; // Mensaje de éxito
      console.log('Usuario registrado:', user);
      setTimeout(() => {
        this.router.navigate(['/login']); // Cambia a la ruta deseada después del registro exitoso
      }, 2000); // Espera 2 segundos antes de redirigir
    }
  }
}
