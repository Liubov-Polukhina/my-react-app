import  React, {useEffect, useState } from 'react';
import {Pop, Overlay, BotonX, Boton1} from "./Films.styles";



function Films (props){
  
    const [info, setInfo] = useState(false);

    const abrir = () => {
        setInfo(true);
    }
    const cerrar = () => {
        setInfo(false);
    }
    return(
        <>
        <Boton1 onClick={abrir}> Peliculas </Boton1>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        {/* <Pop> */}
        <div> Peliculas  </div>
        <div> {props.films}  </div>
        {/* </Pop> */}
        </Overlay>
        }
        </>
    )

    };

export default Films;