
import  React, {useEffect, useState } from 'react';
import {Pop, Overlay, BotonX, Boton1} from "./Pilotos.styled";


function Pilotos (props){
  
    const [info, setInfo] = useState(false);
    const [pilotos, setPilotos] = useState([]);

    const abrir = () => {
        setInfo(true);
    }
    const cerrar = () => {
        setInfo(false);
    }

    async function fetchAll() { 
        if (props.pilots.length === 0){
        setPilotos([{name: "esta nave no tiene pilotos conocidos"}]);
      }
      else {
        const results = await Promise.all(props.pilots.map((url) => fetch(url).then((r) => r.json())));
        console.log(results);
        setPilotos(results);
      }
    }
    useEffect(() => {
         fetchAll();
      }, []);

    
      
      
    
    return(
        <>
        <Boton1 onClick={abrir}> Pilots </Boton1>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        <Pop>
        <div> Pilots:  </div>
        {pilotos.map((data)=> {
        return(
        <div > {data.name} </div>
    )
    })}
	
        </Pop>
        </Overlay>
        }
        </>
    )

    };

export default Pilotos;
