import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-redescomunicacion',
  templateUrl: './redescomunicacion.component.html',
  styleUrls: ['./redescomunicacion.component.css']
})
export class RedescomunicacionComponent implements OnInit {

  // Perfiles de los maestros
  perfiles: any[] = [
    { 
      id: 1, 
      nombre: 'Luis Fernández', 
      descripcion: 'Especialista en Diseño Mecánico, con un enfoque en el desarrollo de componentes y sistemas utilizando herramientas avanzadas de CAD para optimización y precisión en la ingeniería.', 
      foto: 'assets/img/teacher7.jpg' 
    },
    { 
      id: 2, 
      nombre: 'Sofía Martínez', 
      descripcion: 'Experta en Termodinámica Aplicada, con amplios conocimientos en el análisis y optimización de sistemas termodinámicos en procesos industriales para mejorar la eficiencia energética.', 
      foto: 'assets/img/teacher5.jpeg' 
    }
  ];

  // Arreglo para almacenar los perfiles filtrados
  filteredPerfiles: any[] = [];

  // Variable para almacenar la búsqueda
  searchQuery: string = '';

  // Profesor seleccionado para el modal
  selectedProfesor: any = null;

  constructor() {}

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

  // Método para abrir el modal y seleccionar al profesor
  abrirModal(profesor: any): void {
    this.selectedProfesor = profesor; // Establece el profesor seleccionado
  }

  // Método cuando el usuario se une al curso
  unirseProfesor(): void {
    alert(`Te has unido a: ${this.selectedProfesor.nombre}`);
    // Aquí puedes agregar la lógica para enviar datos al backend

    // Cierra el modal
    const modalElement = document.getElementById('joinModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement); // Usa getOrCreateInstance
      modalInstance.hide();
    }

 
  }

}
