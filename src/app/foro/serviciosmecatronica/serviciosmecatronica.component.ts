import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-serviciosmecatronica',
  templateUrl: './serviciosmecatronica.component.html',
  styleUrls: ['./serviciosmecatronica.component.css']
})
export class ServiciosmecatronicaComponent implements OnInit {

  perfiles: any[] = [
    {
      id: 1,
      nombre: 'Luis Martínez',
      descripcion: 'Especialista en Robótica, con experiencia en la creación y programación de robots autónomos.',
      foto: 'assets/img/teacher8.jpeg'
    },
    {
      id: 2,
      nombre: 'Carla Sánchez',
      descripcion: 'Profesora de Electrónica y Circuitos, con amplia experiencia en diseño y desarrollo de sistemas electrónicos.',
      foto: 'assets/img/teacher6.jpg'
    },
    {
      id: 3,
      nombre: 'Javier Torres',
      descripcion: 'Instructor en Robótica y Automatización, especializado en la programación de sistemas robóticos.',
      foto: 'assets/img/teacher9.jpeg'
    }
  ];

  filteredPerfiles: any[] = [];
  searchQuery: string = '';
  selectedIngeniero: any = null; // Ingeniero seleccionado para el modal

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

  abrirModal(ingeniero: any): void {
    this.selectedIngeniero = ingeniero; // Establece el ingeniero seleccionado
  }

  unirseIngeniero(): void {
    alert(`Te has unido al servicio de: ${this.selectedIngeniero.nombre}`);
    // Cierra el modal
    const modalElement = document.getElementById('joinModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
  }
}
}