// src/app/serviciosforo/serviciosforo.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviciosforo',
  templateUrl: './serviciosforo.component.html',
  styleUrls: ['./serviciosforo.component.css']
})
export class ServiciosforoComponent implements OnInit {

  // Perfiles de los maestros
  perfiles: any[] = [
    { id: 1, nombre: 'Juan Pérez', descripcion: 'Experto en Testing de software, especializado en pruebas automatizadas y control de calidad.', foto: 'assets/img/teacher1.jpg' },
    { id: 2, nombre: 'Ana García', descripcion: 'Profesora Full Stack, con experiencia en desarrollo web tanto en el lado del cliente como del servidor.', foto: 'assets/img/teacher2.jpeg' },
    { id: 3, nombre: 'Carlos Gómez', descripcion: 'Instructor en Testing y calidad de software.', foto: 'assets/img/teacher3.jpeg' },
    { id: 4, nombre: 'María López', descripcion: 'Profesora Full Stack, apasionada por enseñar el desarrollo web integral.', foto: 'assets/img/teacher4.jpeg' }
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
