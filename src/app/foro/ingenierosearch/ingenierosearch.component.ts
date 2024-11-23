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
  selectedCareer: 'Ing.Software' | 'Ing.Mecatronica' | 'Ing.Mecanica' | 'Ing.Electronica' | 'Ing.Industrial' | null = null;

  services = {
    'Ing.Software': [
      { name: 'Tester en programación', description: 'Técnicas y herramientas fundamentales para convertirte en un tester profesional en el campo de la programación.' },
      { name: 'Desarrollo Full Stack', description: 'Ir de la mano con cualquier aplicación que se tenga problemas ya sea en el front end o back end.' }
    ],
    'Ing.Mecatronica': [
      { name: 'Robótica', description: 'Diseño, programación y control de robots industriales y móviles para innovacción.' },
      { name: 'Electrónica', description: 'Fundamentos de circuitos electrónicos, incluyendo el análisis y diseño de sistemas.' }
    ],
    'Ing.Mecanica': [
      { name: 'Diseño Mecánico', description: 'Principios y técnicas para el diseño de componentes y sistemas mecánicos utilizando herramientas CAD.' },
      { name: 'Termodinámica Aplicada', description: 'Estudio de los sistemas termodinámicos y su aplicación en procesos industriales.' }
    ],
    'Ing.Electronica': [
      { name: 'Circuitos Digitales', description: 'Diseño y análisis de sistemas digitales y circuitos electrónicos avanzados.' },
      { name: 'Control Automático', description:  'Fundamentos y técnicas para el diseño de sistemas de control.' }
    ],
    'Ing.Industrial': [
      { name: 'Gestión de Operaciones y procesos', description: 'Optimización y planificación de procesos productivos en entornos industriales.' },
      { name: 'Logística y Cadena de Suministro',description:'Técnicas para gestionar eficientemente cadenas de suministro y procesos logísticos.' }
    ]
  };

  // Método para obtener la ruta según la carrera y el servicio
  getServiceDetailsLink(career: string, serviceName: string): string {
    if (career === 'Ing.Software') {
      return '/serviciosforo'; // Ruta para Ing.Software
    } else if (career === 'Ing.Mecanica') {
      return '/redescomunicacion'; // Ruta para Ing.Mecanica
    } else if (career === 'Ing.Mecatronica') {
      return '/serviciosmecatronica'; // Ruta para Ing.mecatronica
    } else if (career === 'Ing.Electronica') {
      return '/servicioselectronica'; // Ruta para Ing.Electronica
    } else if (career === 'Ing.Industrial') {
      return '/serviciosindustrial'; // Ruta para Ing.Industrial
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

  showServices(career: 'Ing.Software' | 'Ing.Mecatronica' | 'Ing.Mecanica' | 'Ing.Electronica' | 'Ing.Industrial') {
    this.selectedCareer = career; // Almacena la carrera seleccionada
  }

  // Método para cerrar sesión
  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar lógica de cierre de sesión
  }
}
