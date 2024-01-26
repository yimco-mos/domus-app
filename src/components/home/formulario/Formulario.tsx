'use client'
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "@/styles/home/voluntariadoform.css";
import { InputForm } from "./InputForm";
import { voluntariadoFormInterface } from "@/interfaces/formInterface/voluntariadoFormInterface";

export const Formulario = () => {
  const [dataForm, setDataForm] = useState<voluntariadoFormInterface>({
    nombre: "",
    apellido: "",
    email: "",
    programa: "",
    pais: "",
    detalles: "",
    cedula: null, // Cambiado a File | string | null
  });

  const [paises, setPaises] = useState<any[]>([]);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setPaises(data);
      } catch (error) {
        console.error("Error al obtener la lista de países:", error);
      }
    };

    fetchPaises();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataForm({ ...dataForm, pais: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDataForm({ ...dataForm, cedula: e.target.files[0] });
    }
  };

  const [state, handleSubmit] = useForm("mjvngpbb");

  return (
    <div className="content_form">
      <form className="form" onSubmit={handleSubmit}>
        <InputForm
          label="Nombre:"
          type="text"
          name="nombre"
          state={dataForm.nombre}
          onChange={handleChange}
          placeholder="jhon"
        />
        <InputForm
          label="Apellido:"
          type="text"
          name="apellido"
          state={dataForm.apellido}
          onChange={handleChange}
          placeholder="doe"
        />
        <InputForm
          label="Email:"
          type="email"
          name="email"
          state={dataForm.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />
        <InputForm
          label="Línea Voluntariado:"
          type="text"
          name="programa"
          state={dataForm.programa}
          onChange={handleChange}
          placeholder="porgrana al que desea aportar"
        />
        <label className="text-neutral-950" htmlFor="pais">
          País:
        </label>
        <select
          className="text-blue-900 bg-yellow-200"
          id="pais"
          name="pais"
          onChange={handlePaisChange}
        >
          <option className="text-yellow-400" value="">
            Selecciona tu país
          </option>
          {paises.map((pais: any) => (
            <option key={pais.name.common} value={pais.name.common}>
              {pais.name.common}
            </option>
          ))}
        </select>
        <textarea
          className="text-neutral-950"
          name="detalles"
          value={dataForm.detalles}
          onChange={handleChange}
          placeholder="algo que quieras decir"
        />
        <input
          type="file"
          name="cedula"
          placeholder="documento de identidad"
          onChange={handleFileChange}
        />

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
        {state.errors && (
          <div>
            <p className="text-red-900">Error al enviar el formulario:</p>
            <ul>
              {Object.values(state.errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
