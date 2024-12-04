import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  isSidebarVisible: boolean = true; // Estado del menú lateral (visible/invisible)
  currentSection: string = 'home'; // Sección actual por defecto
  searchQuery: string = ''; // Consulta de búsqueda
  user: any;
  errorMessage: string | null = null;
  titulo: string = '';
  contenido: string = '';
  imagen: string | ArrayBuffer | null = '';
  showPostForm = false;
  publicaciones: any[] = []; // Array donde se guardarán las publicaciones
  loading: boolean = true;
  grupoSeleccionado: any = null; // Nuevo campo para el grupo seleccionado

  currentSection1: string = 'notificaciones'; // Sección activa
  notificaciones: any[] = [
    { titulo: 'Nueva Solicitud', mensaje: 'Acabas de enviar una solicitud a freenlancer.', tipo: 'exito', fecha: new Date() },
   
    { titulo: 'Actualización de Servicio', mensaje: 'El servicio se actualizará mañana a las 10:00 AM.', tipo: 'advertencia', fecha: new Date() }
  ];


  submitHelpRequest() {
    console.log('Solicitud de ayuda enviada');
    // Aquí puedes agregar lógica adicional para procesar el formulario.
  }
constructor(private supabaseService: SupabaseService,private router: Router,private cdr: ChangeDetectorRef) {}


posts = [
  {
    usuario: 'Carlos Salas - Ingenieros en informatica, Mexico',
    contenido: 'Este es un problema que se presento quien me ayuda.',
    imagen: 'assets/img/images.png',
    fecha: 'Hace 2 horas',
    comentarios: [
      {
        usuario: { nombre: 'Juan Pérez', foto: 'assets/img/ingenieriasoftware.jpg' },
        contenido: 'yo tambien tuve lo mismo".',
      },
      {
        usuario: { nombre: 'Ana López', foto: 'assets/img/user1.webp' },
        contenido: 'x2.',
      }
    ],
    mostrarComentarios: false,
    nuevoComentario: '' // Inicialización de nuevoComentario
  },
  {
    usuario: 'Yael Garcia - Ingenieros de software, Mexico',
    contenido: 'Compartiendo una actualización sobre mi día. ¡Espero que les guste!',
    imagen: 'assets/img/postprogramer.png',
    fecha: 'Hace 5 horas',
    comentarios: [
      {
        usuario: { nombre: 'Luis Gómez', foto: 'assets/img/user1.webp' },
        contenido: '¡Espero que haya sido un buen día que chambeador!',
      },
      {
        usuario: { nombre: 'Carla Martínez', foto: 'assets/img/user1.webp' },
        contenido: 'Seguro fue un día productivo, ¡sigue así!',
      }
    ],
    mostrarComentarios: false,
    nuevoComentario: '' // Inicialización de nuevoComentario
  },
  {
    usuario: 'Kevin chavez - Ingenieros Mecanicos, Mexico',
    contenido: 'Aquí les dejo una foto de mi reciente viaje.',
    imagen: 'assets/img/ingenieriamecanicaa.jpg',
    fecha: 'Ayer',
    comentarios: [
      {
        usuario: { nombre: 'María Fernández', foto: 'assets/img/user1.webp' },
        contenido: 'Puro chambear como debe de ser',
      }
    ],
    mostrarComentarios: false,
    nuevoComentario: '' // Inicialización de nuevoComentario
  }
];


onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagen = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

submitPost() {
  if (this.titulo.trim() && this.contenido.trim() && this.grupoSeleccionado) {
    const nuevaPublicacion = {
      usuario: `Carlos Salas - ${this.grupoSeleccionado.nombre}`, // Incluye el nombre del grupo
      contenido: this.contenido,
      titulo: this.titulo,
      imagen: this.imagen ? String(this.imagen) : '',
      grupo: this.grupoSeleccionado, // Incluye el grupo en la publicación
      fecha: 'Justo ahora',
      comentarios: [],
      mostrarComentarios: false,
      nuevoComentario: ''
    };

    this.posts.unshift(nuevaPublicacion);
    this.resetForm();
  }
}

resetForm() {
  this.titulo = '';
  this.contenido = '';
  this.imagen = null;
  this.grupoSeleccionado = null; // Reinicia el grupo seleccionado
  this.showPostForm = false; // Cierra el modal
}



nuevoPost = {
  usuario: '',
  contenido: '',
  imagen: '',  // Campo opcional para la URL de la imagen
};




agregarComentario(post: any) {
  if (post.nuevoComentario?.trim()) {
    post.comentarios.push({
      usuario: { nombre: 'Carlos Salas', foto: 'assets/img/user1.webp' }, // Cambia el nombre y la foto según corresponda
      contenido: post.nuevoComentario
    });
    post.nuevoComentario = ''; // Limpia el campo de entrada
  }
}



  
  





  async getPosts() {
    const { data, error } = await this.supabaseService.getPosts();
  
    if (error) {
      console.error('Error obteniendo publicaciones:', error);
    } else {
      // Si `data` es null, lo asignamos como un array vacío
      this.publicaciones = data ?? [];
      this.loading = false;
    }
  }

  




  
 


    // Variable para almacenar el chat seleccionado
    selectedChat: any = null;
    newMessage: string = ''; // Nuevo mensaje que se enviará
    // Lista de chats (ejemplo de cómo pueden estar estructurados los chats)
    chats = [
      { 
        usuario: { nombre: 'Ing Juan Ramirez', foto: 'assets/img/user1.webp' }, 
        ultimoMensaje: 'Hola, ¿cómo estás?', 
        nuevaNotificacion: true, 
        mensajes: [
          { usuario: { nombre: 'Juan' }, texto: 'Hola, ¿cómo estás?' },
          { usuario: { nombre: 'Tú' }, texto: 'Todo bien, ¿y tú?' }
        ]
      },
      { 
        usuario: { nombre: 'Ana García', foto: 'assets/img/user1.webp' }, 
        ultimoMensaje: 'Reunión mañana a las 10:00 AM', 
        nuevaNotificacion: false, 
        mensajes: [
          { usuario: { nombre: 'Ana' }, texto: 'Reunión mañana a las 10:00 AM' },
          { usuario: { nombre: 'Tú' }, texto: 'Perfecto, ahí estaré.' }
        ]
      },
      { 
        usuario: { nombre: 'Carlos López', foto: 'assets/img/user1.webp' }, 
        ultimoMensaje: '¡Te envié los documentos!', 
        nuevaNotificacion: true, 
        mensajes: [
          { usuario: { nombre: 'Carlos' }, texto: '¡Te envié los documentos!' },
          { usuario: { nombre: 'Tú' }, texto: '¡Gracias! Los revisaré en breve.' }
        ]
      },
      { 
        usuario: { nombre: 'Marta Rodríguez', foto: 'assets/img/user1.webp' }, 
        ultimoMensaje: '¿Nos vemos esta tarde?', 
        nuevaNotificacion: false, 
        mensajes: [
          { usuario: { nombre: 'Marta' }, texto: '¿Nos vemos esta tarde?' },
          { usuario: { nombre: 'Tú' }, texto: 'Sí, ¿a qué hora?' }
        ]
      }
    ];
    
  
    // Función para seleccionar el chat
    openChat(chat: any) {
      this.selectedChat = chat;
    }
  
    // Función para cerrar el modal
    closeModal() {
      this.selectedChat = null;
    }
    // Enviar mensaje
    sendMessage() {
      if (this.newMessage.trim()) {
        this.selectedChat.mensajes.push({
          usuario: { nombre: 'Tú' },
          texto: this.newMessage
        });
        this.newMessage = ''; // Limpiar el campo de entrada
      }
    }
  












// Estado para saber si el usuario le dio "Me gusta"
isLiked: boolean = false;
  
// Función para alternar el estado de "Me gusta"
toggleLike() {
  this.isLiked = !this.isLiked;
}






  usuario = [
    {
      nombre: 'Carlos Salas',
      imagen: 'assets/img/user1.webp'
    }
  ];





  submissionMessage: string = '';

  submitRequest() {
    // Aquí puedes agregar la lógica para enviar la solicitud, por ejemplo, hacer una llamada API
    // Después de enviar la solicitud, muestra el mensaje:
    alert('¡Solicitud enviada! Esté atento a la respuesta en su correo.');
  }












  // Variable para mostrar el modal
  showGroupForm = false;

  // Datos del nuevo grupo
  newGroup = {
    nombre: '',
    imagen: '',
    descripcion: '',
    miembros: 0
  };

  // Lista de grupos de ejemplo
  groups = [
    { imagen: 'assets/img/ingenieriainformatica.jpg', nombre: 'Ingenieros en Informática', descripcion: 'Grupo sobre informática y software.', miembros: 120 },
    { imagen: 'assets/img/ingenieriamecanicaa.jpg', nombre: 'Ingenieros Mecánicos', descripcion: 'Grupo de ingenieros mecánicos en México.', miembros: 85 },
    { imagen: 'assets/img/ingenieriasoftware.jpg', nombre: 'Ingeniería Software', descripcion: 'Discusiones sobre medio ambiente y sostenibilidad.', miembros: 64 }
  ];

  // Función para agregar un nuevo grupo
// Función para agregar un nuevo grupo
addGroup() {
  const newGroupData = { 
    ...this.newGroup, 
    imagen: this.newGroup.imagen || 'assets/img/default-group.jpg' 
  };
  
  this.groups.push(newGroupData);  // Agrega el grupo a la lista

  // Reinicia los valores del nuevo grupo y oculta el formulario
  this.newGroup = { nombre: '', imagen: '', descripcion: '', miembros: 0 };
  this.showGroupForm = false;
}

  // Función para manejar la carga de la imagen
  onFileChangeG(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.newGroup.imagen = reader.result as string; // Asigna la imagen seleccionada
    };
    reader.readAsDataURL(file); // Convierte el archivo en un base64 string
  }















  
  // Grupos filtrados para mostrar según la búsqueda
  filteredGroups = [...this.groups];
















  // Método para alternar la visibilidad del menú lateral
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // Cambia el estado de visibilidad
  }












  // Método para cambiar la sección actual
  changeSection(section: string) {
    this.currentSection = section; // Actualiza la sección actual
  }


















  // Método para cerrar sesión
  async logout() {
    const { error } = await this.supabaseService.signOut();
    if (error) {
      this.errorMessage = 'Error al cerrar sesión: ' + error.message;
    } else {
      this.errorMessage = null;
      alert('Has cerrado sesión exitosamente');
      // Aquí puedes redirigir al usuario a la página de inicio de sesión u otra página
      this.router.navigate(['/login']); // Ajusta la ruta según tu aplicación
    }
  }














  joinGroup(group: any) {
    console.log(`Te has unido al grupo: ${group.nombre}`);
    // Aquí puedes agregar la lógica para unirse al grupo
  }




  mensajeSinResultados = ''; // Variable para almacenar el mensaje

  // Método para filtrar grupos según la búsqueda
  filterGroups() {
    this.filteredGroups = this.groups.filter(group => 
      group.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      group.descripcion.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    
    // Si no hay resultados, muestra un mensaje
    this.mensajeSinResultados = this.filteredGroups.length === 0 ? 'No se han encontrado resultados.' : '';
  }










}
