import React, { useState } from "react";
import styled from "@emotion/styled";

// Componentes:
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../Helper";

// Stayled Components:
const Campo = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
  font-size: 16px;
  font-weight: bolder;
  user-select: none;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #e1e1e1;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  // Quita la apariencia natural, el estilo
  // Y así se le pueden dar otros estilos.
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const TextoInputRadio = styled.p`
  font-size: 16px;
  user-select: none;
  margin-right: 0.5rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 0.5rem;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.5s ease;

  // &: hace referencia al mismo elemento (Boton)
  &:hover {
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: #d01d1d;
  color: #ffffff;
  padding: 1rem;
  width:520px;
  text-align: center;
  margin-bottom: 1rem;
  border-radius: 2px;
  font-size: 16px;
`;

// Componente Formulario
const Formulario = ({ guardarResumen, guardarCargando }) => {
  // Contruyo los Hooks

  // Inicializo el estado del formulario vacío.
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  // Inicializo el estado del error.
  const [error, guardarError] = useState(false);

  // Extraigo los valores del state.
  const { marca, year, plan } = datos;

  // Leo los datos del formulario y los coloco
  // en el state.
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Evento que se activa al presionar el boton submit.
  const cotizarSeguro = (e) => {
    e.preventDefault();
    // Valido en esta parte que el formulario
    // No se envíe vacío.
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    // Una vez se hallan completado los cmapos
    // se regresa al estado de error a false
    // porque no está vacío por lo que no entra
    // al if.
    guardarError(false);

    // Cuando la validación ya esté bien entonces
    // se tienen que hacer algunas cosas según los requisitos:
    // Si es un año anterior entonces es más barato

    // Base de 2000. De estas se va a incrementar o a
    // disminuir el seguro.
    let resultado = 2000;

    // Obtener la diferencia de año:
    const diferencia = obtenerDiferenciaYear(year);

    // Por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15% de incremento
    // Asiatico 5% de incremento
    // Europeo 30% de incremento
    resultado = calcularMarca(marca) * resultado;

    // Basico aumenta 20%
    // Completo 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // Al llamar esta funcinon del state de resumen en App.js
    // le paso los datos obtenidos y el resultado de las
    // operaciones desde Formulario.js al componente App.js
    
    //Muestra spinner cuando se cambien los datos y se 
    // haga una nueva cotizacion.
    guardarCargando(true);

    // Elimina el spinner y muestra los datos.
    setTimeout(() => {
      guardarCargando(false);

      // Pasa la informacion al componente principal.
      guardarResumen({
        cotizacion: resultado,
        datos,
      });
    }, 3000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">Selecione marca</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">Seleccione año</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />{" "}
        <TextoInputRadio>Basico</TextoInputRadio>
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />{" "}
        <TextoInputRadio>Completo</TextoInputRadio>
      </Campo>

      <Boton type="submit">Hacer cotización</Boton>
    </form>
  );
};

export default Formulario;
