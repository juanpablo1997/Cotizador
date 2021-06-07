import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Stayled Components:
const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0.5rem;
  text-align: center;
  font-size: 16px;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 0.5rem;
  position: relative;
  font-size: 16px;
  user-select: none;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  margin: 0;
`;

const Resultado = ({ cotizacion }) => {
  // Esto soluciona el warning de Warning: findDOMNode is deprecated in StrictMode. 
  const nodeRef = React.useRef(null);
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
          nodeRef={nodeRef}
        >
          <TextoCotizacion ref={nodeRef}>
            El total del seguro es $ <span>{cotizacion}</span>
          </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};

export default Resultado;
