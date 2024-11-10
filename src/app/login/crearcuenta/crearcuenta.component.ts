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
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async register() {
    const { data, error } = await this.supabaseService.signUpWithEmail(this.email, this.password);
    if (error) {
      this.errorMessage = error.message;
      this.successMessage = null;
    } else {
      this.errorMessage = null;
      this.successMessage = 'Registro exitoso. Por favor, verifica tu correo electrónico.';
      this.router.navigate(['/login']); // Ajusta la ruta según tu aplicación
    }
  }
}
