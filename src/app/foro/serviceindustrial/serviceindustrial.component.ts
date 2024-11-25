import { Component } from '@angular/core';

@Component({
  selector: 'app-serviceindustrial',
  
  templateUrl: './serviceindustrial.component.html',
  styleUrl: './serviceindustrial.component.css'
})
export class ServiceindustrialComponent {
  perfiles: any[] = 
  [
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
