import { Component } from '@angular/core';

@Component({
  selector: 'app-ingenierosearch',
  templateUrl: './ingenierosearch.component.html',
  styleUrls: ['./ingenierosearch.component.css']
})
export class IngenierosearchComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto

  // Definir las claves de 'services' como tipo para 'selectedCareer'
  selectedCareer: 'Ing.Sistemas' | 'Ing.mecatronica' | 'Ing.redes de la comunicacion' | null = null;

  services = {
    'Ing.Sistemas': [
      { name: 'Tester en programación', description: 'Técnicas y herramientas fundamentales para convertirte en un tester profesional en el campo de la programación.' },
      { name: 'Desarrollo Full Stack', description: 'Ir de la mano con cualquier aplicación que se tenga problemas ya sea en el front end o back end.' }
    ],
    'Ing.mecatronica': [
      { name: 'Robótica', description: 'Diseño, programación y control de robots industriales y móviles para innovacción.' },
      { name: 'Electrónica', description: 'Fundamentos de circuitos electrónicos, incluyendo el análisis y diseño de sistemas.' }
    ],
    'Ing.redes de la comunicacion': [
      { name: 'Seguridad en Redes de Comunicación', description: 'Técnicas de seguridad y protección de redes.' },
      { name: 'Administración y Gestión de Redes', description: 'Técnicas para gestionar, monitorear y optimizar el rendimiento de redes.' }
    ]
  };

  // Método para obtener la ruta según la carrera y el servicio
  getServiceDetailsLink(career: string, serviceName: string): string {
    if (career === 'Ing.Sistemas') {
      return '/serviciosforo'; // Ruta para Ing.Sistemas
    } else if (career === 'Ing.redes de la comunicacion') {
      return '/redescomunicacion'; // Ruta para Ing.redes de la comunicación
    } else if (career === 'Ing.mecatronica') {
      return '/serviciosmecatronica'; // Ruta para Ing.mecatronica
    } else {
      return '/'; // Ruta por defecto (puedes cambiarla si es necesario)
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Cambia el estado de visibilidad
  }

  // Método para cambiar la sección actual
  changeSection(section: string) {
    this.currentSection = section; // Actualiza la sección actual
  }

  showServices(career: 'Ing.Sistemas' | 'Ing.mecatronica' | 'Ing.redes de la comunicacion') {
    this.selectedCareer = career; // Almacena la carrera seleccionada
  }

  // Método para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar lógica de cierre de sesión
  }
}
