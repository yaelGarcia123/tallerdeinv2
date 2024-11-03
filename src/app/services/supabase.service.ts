import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('https://ydsjycufwtkymsqeqrhy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc2p5Y3Vmd3RreW1zcWVxcmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mjc2NzcsImV4cCI6MjA0NjEwMzY3N30.OjYCT0odwRV5-238BhrgEEWFFjtGaXv-QG8e4aoGVfk');
  }

  // Función para registrar un nuevo usuario
  async registerUser(nombre_usuario: string, email: string, password: string, tipo_usuario: string, curriculum?: string): Promise<{ user: any; error: any }> {
    // Primero registramos el usuario en Supabase Auth
    const { data: authData, error: authError } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return { user: null, error: authError }; // Devuelve error si hay uno
    }

    // Si el registro en Auth fue exitoso, inserta en la tabla 'Usuarios'
    const { error: insertError } = await this.supabase
      .from('Usuarios')
      .insert([
        {
          nombre_usuario,
          email,
          // No se recomienda almacenar la contraseña en texto plano
          // No almacenamos la contraseña, solo necesitamos el tipo de usuario
          tipo_usuario,
          curriculum: curriculum || null, // Puedes pasar el curriculum si lo tienes
          id_membresia: null, // Asignar un id_membresia válido si lo tienes
        }
      ]);

    return { user: authData?.user, error: insertError }; // Devuelve el usuario registrado o el error al insertar
  }

  // Función para iniciar sesión
  async loginUser(email: string, password: string): Promise<{ user: any; error: any }> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { user: null, error }; // Devuelve el error si hay uno
    }

    const { data: userData, error: fetchError } = await this.supabase
      .from('Usuarios')
      .select('*')
      .eq('email', email)
      .single(); // Obtiene un solo usuario

    if (fetchError || !userData) {
      return { user: null, error: fetchError || new Error('Usuario no encontrado') }; // Devuelve error si no se encuentra el usuario
    }

    return { user: userData, error: null }; // Devuelve el usuario encontrado
  }


  async agregarCalando(id: number, nombre: string) {
    const { data, error } = await this.supabase
      .from('calando')
      .insert([{ id, nombre }]);

    return { data, error };
  }
}
