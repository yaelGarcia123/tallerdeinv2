import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = 'https://ydsjycufwtkymsqeqrhy.supabase.co';  // Reemplaza con tu URL de Supabase
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc2p5Y3Vmd3RreW1zcWVxcmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mjc2NzcsImV4cCI6MjA0NjEwMzY3N30.OjYCT0odwRV5-238BhrgEEWFFjtGaXv-QG8e4aoGVfk';  // Reemplaza con tu clave pública de Supabase
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  // Ejemplo de función para obtener datos de una tabla
  async getData() {
    const { data, error } = await this.supabase
      .from('nombre_de_tu_tabla')
      .select('*');

    if (error) {
      console.error('Error al obtener datos:', error);
    }
    return data;
  }
}
