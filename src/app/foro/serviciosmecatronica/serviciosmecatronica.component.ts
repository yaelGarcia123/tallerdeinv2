import { Component } from '@angular/core';

@Component({
  selector: 'app-serviciosmecatronica',

  templateUrl: './serviciosmecatronica.component.html',
  styleUrl: './serviciosmecatronica.component.css'
})
export class ServiciosmecatronicaComponent {


  // Perfiles de los maestros
  perfiles: any[] = [
    
  { id: 1, nombre: 'Luis Martínez', descripcion: 'Especialista en Robótica, con experiencia en la creación y programación de robots autónomos. Luis enseña a los estudiantes cómo integrar hardware y software para construir robots funcionales que puedan realizar tareas específicas de forma autónoma.', foto: 'assets/img/teacher8.jpeg' },
  { id: 2, nombre: 'Carla Sánchez', descripcion: 'Profesora de Electrónica y Circuitos, con amplia experiencia en diseño y desarrollo de sistemas electrónicos. Carla guía a los estudiantes en el diseño de circuitos, microcontroladores y sistemas embebidos aplicados en la robótica y otras áreas tecnológicas.', foto: 'assets/img/teacher6.jpg' },
  { id: 3, nombre: 'Javier Torres', descripcion: 'Instructor en Robótica y Automatización, especializado en la programación de sistemas robóticos y la integración de dispositivos IoT. Javier enseña a los estudiantes a crear soluciones robóticas avanzadas aplicables a la industria y la investigación.', foto: 'assets/img/teacher9.jpeg' },
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
