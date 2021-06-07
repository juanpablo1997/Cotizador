import React from 'react';
import styled from '@emotion/styled';

// Este es un styled component creado con ayuda de
// emotion. Crea una etiqueta. Emotion lo que permite es mezclar
// css, javascript y html.
const ContenedorHeader = styled.header `
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1 `
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    )
}

export default Header;