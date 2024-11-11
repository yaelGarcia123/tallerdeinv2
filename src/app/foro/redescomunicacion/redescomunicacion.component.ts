import { Component } from '@angular/core';

@Component({
  selector: 'app-redescomunicacion',

  templateUrl: './redescomunicacion.component.html',
  styleUrl: './redescomunicacion.component.css'
})
export class RedescomunicacionComponent {
// Perfiles de los maestros
perfiles: any[] = [
  
  { id: 1, nombre: 'Luis Fernández', descripcion: 'Especialista en Seguridad en Redes de Comunicación, con un enfoque en la protección de datos y la gestión de vulnerabilidades en infraestructuras de redes', foto: 'assets/img/teacher7.jpg' },
  { id: 2, nombre: 'Sofía Martínez', descripcion: 'Experta en Administración y Gestión de Redes, con amplios conocimientos en la configuración, monitoreo y mantenimiento de redes de comunicación a gran escala.', foto: 'assets/img/teacher5.jpeg' },


]

// Arreglo para almacenar los perfiles filtrados
filteredPerfiles: any[] = [];

// Variable para almacenar la búsqueda
searchQuery: string = '';

constructor() { }

ngOnInit(): void {
  // Inicialmente mostramos todos los perfiles
  this.filteredPerfiles = this.perfiles;
}

// Método para filtrar los perfiles en base a la búsqueda
onSearchChange(): void {
  this.filteredPerfiles = this.perfiles.filter(perfil => {
    return perfil.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
           perfil.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase());
  });
}
}
