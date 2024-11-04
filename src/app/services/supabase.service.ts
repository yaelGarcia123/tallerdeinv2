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
    // Autenticación de usuario con Supabase
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { user: null, error }; // Devuelve el error si hay uno
    }

    // Si el inicio de sesión es exitoso, busca los datos adicionales del usuario
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



// Función para iniciar sesión usando el nombre de usuario
async loginUsers(username: string, password: string): Promise<{ user: any; error: any }> {
  // Primero, busca el email asociado al nombre de usuario
  const { data: userData, error: fetchError } = await this.supabase
    .from('usuarios')
    .select('email')
    .eq('nombre_usuario', username)
    .single();

  // Si no se encuentra el usuario o hay un error, retornar un error
  if (fetchError || !userData) {
    return { user: null, error: fetchError || new Error('Usuario no encontrado') };
  }

  const email = userData.email;

  // Autenticación de usuario con Supabase usando el email encontrado
  const { data, error } = await this.supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { user: null, error }; // Devuelve el error si hay uno
  }

  // Si el inicio de sesión es exitoso, busca los datos adicionales del usuario
  const { data: fullUserData, error: fullFetchError } = await this.supabase
    .from('usuarios')
    .select('*')
    .eq('nombre_usuario', username)
    .single();

  if (fullFetchError || !fullUserData) {
    return { user: null, error: fullFetchError || new Error('Usuario no encontrado') };
  }

  return { user: fullUserData, error: null }; // Devuelve el usuario encontrado
}


  // Función para autenticar al usuario
  async loginUserb(username: string, password: string): Promise<{ user: any; error: any }> {
    // Paso 1: Busca el usuario en la base de datos
    const { data: userData, error: fetchError } = await this.supabase
      .from('usuarios') // Asegúrate de que el nombre de la tabla esté en minúsculas
      .select('*')
      .eq('nombre_usuario', username)
      .single();

    if (fetchError || !userData) {
      return { user: null, error: fetchError || new Error('Usuario no encontrado') };
    }

    // Paso 2: Verifica la contraseña
    const passwordMatch = await bcrypt.compare(password, userData.contraseña);
    if (!passwordMatch) {
      return { user: null, error: new Error('Contraseña incorrecta') };
    }

    // Autenticación exitosa
    return { user: userData, error: null };
  }









  async agregarCalando(id: number, nombre: string) {
    const { data, error } = await this.supabase
      .from('calando')
      .insert([{ id, nombre }]);

    return { data, error };
  }















}
