import React from "react";
import { inputFormInterface } from "@/interfaces/formInterface/voluntariadoFormInterface";

export const InputForm: React.FC<inputFormInterface> = ({
  label,
  state,
  onChange, // Cambiado a onChange
  type,
  name,
  placeholder
}) => {

  return (
    <div className="inputs_form">
      <label htmlFor={name}>{label}</label>

        <div className="file-input-container text-neutral-950">
          <input type={type} name={name} onChange={onChange} />
        </div>
      
    </div>
  );
};
