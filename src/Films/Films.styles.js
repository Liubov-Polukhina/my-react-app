import styled from 'styled-components';
import imagen from "../pics/5497.jpg";

export const Overlay = styled.div`

position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
width: 400px;
height: 200px;

color:white;
background-color:black;
border: 3px solid grey;
background-image: ${imagen};
background-repeat: no-repeat;
text-align: center;
justify-content: center
 `;

// export const Pop = styled.div`
// justify-content: center;
// position: relative;
// width: 100%

// `;

export const Boton1 = styled.button`
background-color: black;
display: flex;
justify-content: end;
align-items: center;
color: grey;
border-color: none;

`;

export const BotonX = styled.button`
background-color: black;
align-self: right;
color: grey;
border-color: none;
`;

export const Pop = styled.div`
justify-content: center;
position: relative;
width: 100%

`;