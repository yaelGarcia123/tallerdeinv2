import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-serviciosforo',
  templateUrl: './serviciosforo.component.html',
  styleUrls: ['./serviciosforo.component.css']
})
export class ServiciosforoComponent implements OnInit {

  perfiles: any[] = [
    { id: 1, nombre: 'Juan Pérez', descripcion: 'Experto en Testing de software, especializado en pruebas automatizadas y control de calidad.', foto: 'assets/img/teacher1.jpg' },
    { id: 2, nombre: 'Ana García', descripcion: 'Profesora Full Stack, con experiencia en desarrollo web tanto en el lado del cliente como del servidor.', foto: 'assets/img/teacher2.jpeg' },
    { id: 3, nombre: 'Carlos Gómez', descripcion: 'Instructor en Testing y calidad de software.', foto: 'assets/img/teacher3.jpeg' },
    { id: 4, nombre: 'María López', descripcion: 'Profesora Full Stack, apasionada por enseñar el desarrollo web integral.', foto: 'assets/img/teacher4.jpeg' }
  ];

  filteredPerfiles: any[] = [];
  searchQuery: string = '';

  selectedProfesor: any = null; // Profesor seleccionado para el modal

  constructor() {}

  ngOnInit(): void {
    this.filteredPerfiles = this.perfiles;
  }

  onSearchChange(): void {
    this.filteredPerfiles = this.perfiles.filter(perfil => {
      return perfil.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             perfil.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  abrirModal(profesor: any): void {
    this.selectedProfesor = profesor; // Establece el profesor seleccionado
  }
  unirseProfesor(): void {
    console.log(`Te has unido a: ${this.selectedProfesor.nombre}`);
    // Lógica adicional para enviar datos al backend
  
    // Cierra el modal
    const modalElement = document.getElementById('joinModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement); // Usa getOrCreateInstance
      modalInstance.hide();
    }
  
    this.selectedProfesor = null; // Limpia la selección
  }
  
  
}
