import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto
  searchQuery: string = ''; // Consulta de búsqueda
  
  constructor(private router: Router) {}


  posts = [
    {
      usuario: 'Carlos Salas - Ingenieros en informatica, Mexico',
      contenido: 'Esta es una publicación interesante sobre la naturaleza.',
      imagen: 'assets/img/ingenieriasoftware.jpg',
      fecha: 'Hace 2 horas'
    },
    {
      usuario: 'Yael Garcia - Ingenieros de software, Mexico',
      contenido: 'Compartiendo una actualización sobre mi día. ¡Espero que les guste!',
      imagen: 'assets/img/ingenieriasoftware.jpg',
      fecha: 'Hace 5 horas'
    },
    {
      usuario: 'Kevin chavez - Ingenieros Mecanicos, Mexico',
      contenido: 'Aquí les dejo una foto de mi reciente viaje.',
      imagen: 'assets/img/ingenieriamecanicaa.jpg',
      fecha: 'Ayer'
    }
  ];


  // Lista de grupos de ejemplo
  groups = [
    { imagen: 'assets/img/ingenieriainformatica.jpg', nombre: 'Ingenieros en Informática', descripcion: 'Grupo sobre informática y software.', miembros: 120 },
    { imagen: 'assets/img/ingenieriamecanicaa.jpg', nombre: 'Ingenieros Mecánicos', descripcion: 'Grupo de ingenieros mecánicos en México.', miembros: 85 },
    { imagen: 'assets/img/ingenieriasoftware.jpg', nombre: 'Ingeniería Software', descripcion: 'Discusiones sobre medio ambiente y sostenibilidad.', miembros: 64 }
    // Agrega más grupos según sea necesario
  ];

  // Grupos filtrados para mostrar según la búsqueda
  filteredGroups = [...this.groups];

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
    this.router.navigate(['/foro']);
  }

  // Método para filtrar grupos según la búsqueda
  filterGroups() {
    this.filteredGroups = this.groups.filter(group => 
      group.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      group.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
