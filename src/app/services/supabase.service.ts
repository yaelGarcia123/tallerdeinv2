import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

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

 
  async addPost(titulo: string, contenido: string, idUsuario: number, idComunidad: number) {
    const { data, error } = await this.supabase
      .from('Publicaciones')
      .insert([
        {
          titulo,
          contenido,
          id_usuario: idUsuario,
          id_comunidad: idComunidad,
        },
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
