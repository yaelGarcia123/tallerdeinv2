import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto
  searchQuery: string = ''; // Consulta de búsqueda
  user: any;
  errorMessage: string | null = null;
  titulo: string = '';
  contenido: string = '';
  imagen: File | null = null;
  showPostForm = false;
  
  constructor(private supabaseService: SupabaseService,private router: Router) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.getUser();
    if (data) {
      this.user = data.user;
    } else {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagen = file;
    }
  }

  async submitPost() {
    const idUsuario = 1; // Lógica para obtener el ID de usuario actual
    const idComunidad = 1; // Lógica para obtener el ID de la comunidad actual

    const { data, error } = await this.supabaseService.addPost(this.titulo, this.contenido, idUsuario, idComunidad);

    if (error) {
      console.error('Error al agregar la publicación:', error.message);
      alert('No se pudo agregar la publicación. Por favor, inténtalo de nuevo.');
    } else {
      alert('Publicación agregada con éxito');
      this.showPostForm = false;
      this.titulo = '';
      this.contenido = '';
      this.imagen = null;
      // Lógica para actualizar la lista de publicaciones
    }
  }
  async addPost() {
    const idUsuario = 1; // Reemplaza con la lógica para obtener el ID del usuario actual
    const idComunidad = 1; // Reemplaza con la lógica para obtener el ID de la comunidad actual

    const { data, error } = await this.supabaseService.addPost(this.titulo, this.contenido, idUsuario, idComunidad);

    if (error) {
      console.error('Error al agregar la publicación:', error.message);
      alert('No se pudo agregar la publicación. Por favor, inténtalo de nuevo.');
    } else {
      console.log('Publicación agregada con éxito:', data);
      alert('Publicación agregada con éxito');
      // Aquí puedes recargar la lista de publicaciones o actualizar la vista.
    }
  }


  usuario = [
    {
      nombre: 'Carlos Salas',
      imagen: 'assets/img/ingenieriasoftware.jpg'
    }
  ];



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
  async logout() {
    const { error } = await this.supabaseService.signOut();
    if (error) {
      this.errorMessage = 'Error al cerrar sesión: ' + error.message;
    } else {
      this.errorMessage = null;
      alert('Has cerrado sesión exitosamente');
      // Aquí puedes redirigir al usuario a la página de inicio de sesión u otra página
      this.router.navigate(['/login']); // Ajusta la ruta según tu aplicación
    }
  }

  // Método para filtrar grupos según la búsqueda
  filterGroups() {
    this.filteredGroups = this.groups.filter(group => 
      group.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      group.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
