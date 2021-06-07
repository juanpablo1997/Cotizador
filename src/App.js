import React, { useState } from "react";
import styled from "@emotion/styled";

// Componentes:
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

// Stayled Components:
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 1rem;
`;

function App() {
  // Contruyo los Hooks

  // State que inicializa el estado del componente resumen
  // con un objeto vacío.
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  // State que inicializa el estado del spinner.
  const [cargando, guardarCargando] = useState(false);

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros"/>
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner/> : null}   
        {!cargando ?  (<Resumen datos={datos}/>) : null}
        {!cargando ?  (<Resultado cotizacion={cotizacion}/>) : null}     
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
