import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto

  posts = [
    {
      usuario: 'Usuario1',
      contenido: 'Esta es una publicación interesante sobre la naturaleza.',
      imagen: 'https://via.placeholder.com/600x300?text=Imagen+de+Naturaleza',
      fecha: 'Hace 2 horas'
    },
    {
      usuario: 'Usuario2',
      contenido: 'Compartiendo una actualización sobre mi día. ¡Espero que les guste!',
      imagen: '',
      fecha: 'Hace 5 horas'
    },
    {
      usuario: 'Usuario3',
      contenido: 'Aquí les dejo una foto de mi reciente viaje.',
      imagen: 'https://via.placeholder.com/600x300?text=Viaje+Increíble',
      fecha: 'Ayer'
    }
  ];

  friends = ['Amigo1', 'Amigo2', 'Amigo3', 'Amigo4'];

  // Método para alternar la visibilidad del menú lateral
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Cambia el estado de visibilidad
  }

  // Método para cambiar la sección actual
  changeSection(section: string) {
    this.currentSection = section; // Actualiza la sección actual
  }

  // Método para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar lógica adicional para manejar el cierre de sesión
  }
}
