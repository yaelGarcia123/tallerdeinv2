import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-serviceindustrial',
  templateUrl: './serviceindustrial.component.html',
  styleUrls: ['./serviceindustrial.component.css']
})
export class ServiceindustrialComponent implements OnInit {

  perfiles: any[] = [
    {
      id: 1,
      nombre: 'Roberto Hernández',
      descripcion: 'Especialista en Gestión de Operaciones y Procesos, enfocado en la optimización y planificación de sistemas productivos en industrias de alta demanda.',
      foto: 'assets/img/industrial.jpg'
    },
    {
      id: 2,
      nombre: 'Ana Mejía',
      descripcion: 'Experta en Logística y Cadena de Suministro, con amplia experiencia en el diseño y gestión de procesos logísticos para maximizar la eficiencia empresarial.',
      foto: 'assets/img/industrial2.jpeg'
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
    // Lógica adicional para enviar datos al backend o realizar alguna acción

    // Cierra el modal
    const modalElement = document.getElementById('joinModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement); // Usa getOrCreateInstance
      modalInstance.hide();
    }

    
  }
}
