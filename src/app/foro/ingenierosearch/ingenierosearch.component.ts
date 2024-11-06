import { Component } from '@angular/core';

@Component({
  selector: 'app-ingenierosearch',
  templateUrl: './ingenierosearch.component.html',
  styleUrls: ['./ingenierosearch.component.css']
})
export class IngenierosearchComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto
  selectedCareer: string | null = null;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Cambia el estado de visibilidad
  }

  // Método para cambiar la sección actual
  changeSection(section: string) {
    this.currentSection = section; // Actualiza la sección actual
  }
  showServices(career: string) {
    this.selectedCareer = career; // Almacena la carrera seleccionada
  }
  // Método para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar lógica de cierre de sesión
  }
}
