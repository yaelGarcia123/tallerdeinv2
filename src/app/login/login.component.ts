import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async login() {
    const { error } = await this.supabaseService.signInWithEmail(this.email, this.password);
    if (error) {
      this.errorMessage = error.message;
    } else {
      this.errorMessage = null;
      alert('Login successful');
      this.router.navigate(['/foro']); // Ajusta la ruta según tu aplicación
    }
  }
}