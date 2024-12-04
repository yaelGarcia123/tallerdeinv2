import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-contrataciones',
  templateUrl: './contrataciones.component.html',
  styleUrls: ['./contrataciones.component.css']
})
export class ContratacionesComponent {
  perfiles: any[] = [
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
    }
  ];

  // Perfiles filtrados para la búsqueda
  filteredPerfiles: any[] = [];
  // Variable para almacenar la búsqueda
  searchQuery: string = '';
  // Perfil seleccionado para el modal
  selectedPerfil: any = null;
  // Mensaje de alerta
  alertMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {
    // Inicialmente mostramos todos los perfiles
    this.filteredPerfiles = this.perfiles;
  }

  // Filtra los perfiles en base a la búsqueda
  onSearchChange(): void {
    this.filteredPerfiles = this.perfiles.filter(perfil => {
      return perfil.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             perfil.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  // Abre el modal con el perfil seleccionado
  abrirModal(perfil: any): void {
    this.selectedPerfil = perfil;
  }

  // Lógica al presionar "Unirse"
  unirsePerfil(): void {
  alert(`Te has unido al servicio de: ${this.selectedPerfil.nombre}`);

    // Oculta el modal manualmente
    const modalElement = document.getElementById('joinModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }

    
  }
}
