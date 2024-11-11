import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  posts: any[] = [];

  constructor() {
    this.supabase = createClient('https://ydsjycufwtkymsqeqrhy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc2p5Y3Vmd3RreW1zcWVxcmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mjc2NzcsImV4cCI6MjA0NjEwMzY3N30.OjYCT0odwRV5-238BhrgEEWFFjtGaXv-QG8e4aoGVfk');
  }





  async signInWithEmail(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }
  async signUpWithEmail(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }
  async signOut() {
    return this.supabase.auth.signOut();
  }

  async getUser() {
    return this.supabase.auth.getUser();
  }










  
  async getPosts() {
    const { data, error } = await this.supabase
      .from('Publicaciones')
      .select('*')
      .order('fecha_publicacion', { ascending: false });
  
    // Si `data` es null, lo asignamos como un array vacío
    return { data: data || [], error };
  }








 
  async createPost(titulo: string, contenido: string, usuarioId: number, comunidadId: number) {
    // Aquí puedes subir la imagen a Supabase Storage si es necesario
    // const { data: imageData, error: imageError } = await supabase.storage.from('images').upload('path/to/image', imagen);

    const { data, error } = await this.supabase
      .from('Publicaciones')
      .insert([
        { 
          titulo,
          contenido,
          id_usuario: usuarioId,
          id_comunidad: comunidadId
        }
      ]);

    return { data, error };
  }


  async agregarCalando(id: number, nombre: string) {
    const { data, error } = await this.supabase
      .from('calando')
      .insert([{ id, nombre }]);

    return { data, error };
  }















}
