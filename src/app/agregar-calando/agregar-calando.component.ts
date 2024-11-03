import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-agregar-calando',
  templateUrl: './agregar-calando.component.html',
  styleUrls: ['./agregar-calando.component.css']
})
export class AgregarCalandoComponent {
  id: number | null = null;
  nombre: string = '';
  mensaje: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async agregarCalando() {
    if (this.id && this.nombre) {
      const { data, error } = await this.supabaseService.agregarCalando(this.id, this.nombre);
      if (error) {
        this.mensaje = `Error: ${error.message}`;
      } else {
        this.mensaje = 'Registro agregado exitosamente.';
        this.limpiarCampos();
      }
    } else {
      this.mensaje = 'Por favor, completa todos los campos.';
    }
  }

  limpiarCampos() {
    this.id = null;
    this.nombre = '';
  }
}
