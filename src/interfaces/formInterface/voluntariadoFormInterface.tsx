export interface voluntariadoFormInterface {
  nombre: string;
  apellido: string;
  email: string;
  programa: string;
  pais: string;
  detalles: string;
  cedula: File | null;
}

// inputFormInterface.ts
import React from "react";

export interface inputFormInterface {
  label: string;
  state: string | File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Cambiado a onChange
  type?: string;
  name: string;
  placeholder:string;
}