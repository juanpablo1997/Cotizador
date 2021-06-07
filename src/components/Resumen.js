import React from "react";
import styled from "@emotion/styled";

// Componentes:
import {primerMayuscula} from '../Helper';

// Stayled Components:
const ContenedorResumen = styled.div `
    padding: 0.5rem;
    text-align: center;
    background-color: #F39C12;
    color: #FFFFFF;
    margin-top: 0.5rem;
    font-size: 16px;
    user-select: none;
`;

const TituloResumen = styled.h2 `
    text-align: center;
    margin-top: 0;
    margin-bottom: 0.5rem;
`;

const InformacionResumen = styled.span `
    margin-right: 10px;
    font-weight: bold;
`;

const Resumen = ({ datos }) => {
  // Extraigo los valores que contenga datos.
  const { marca, year, plan } = datos;

  // Si los datos estan vacíos retorna null
  // y si es null no se renderiza el componente.
  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen>
      <TituloResumen>Resumen de cotización</TituloResumen>
      <ul>
          <li><InformacionResumen>Marca del auto:</InformacionResumen>{primerMayuscula(marca)}</li>
          <li><InformacionResumen>Año del auto:</InformacionResumen>{primerMayuscula(year)}</li>
          <li><InformacionResumen>Plan seleccionado:</InformacionResumen>{primerMayuscula(plan)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
