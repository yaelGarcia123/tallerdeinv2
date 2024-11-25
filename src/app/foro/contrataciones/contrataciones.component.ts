import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-contrataciones',

  templateUrl: './contrataciones.component.html',
  styleUrl: './contrataciones.component.css'
})
export class ContratacionesComponent {
  perfiles: any[] = 
  [
    {
      id: 1,
      nombre: 'Andrés Castillo',
      descripcion: 'Especialista en Circuitos Digitales, enfocado en el diseño y análisis de sistemas digitales avanzados y soluciones electrónicas prácticas.',
      foto: 'assets/img/electrica.jpeg'
    },
    {
      id: 2,
      nombre: 'Martin Gómez',
      descripcion: 'Ingeniero en Electrónica con experiencia en Control Automático, diseñando sistemas de control eficientes para aplicaciones industriales y robóticas.',
      foto: 'assets/img/ele2.jpeg'
    },
    {
      id: 3,
      nombre: 'Fernando López',
      descripcion: 'Docente e investigador en Circuitos Digitales, con énfasis en la implementación de tecnologías innovadoras para el desarrollo de dispositivos electrónicos.',
      foto: 'assets/img/ele3.jpeg'
    },
    
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
