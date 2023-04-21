
import  React, {useEffect, useState } from 'react';
import {Pop, Overlay, BotonX, Boton1} from "./Pilotos.styled";


function Pilotos (props){
  
    const [info, setInfo] = useState(false);

    const abrir = () => {
        setInfo(true);
    }
    const cerrar = () => {
        setInfo(false);
    }

    // async function fetchAll() {
    //     const results = await Promise.all(props.pilots.map((url) => fetch(url).then((r) => r.json())));
    //     console.log(results);
    //     return results;
    //   }
      
    //   const results = fetchAll();

      
    
    return(
        <>
        <Boton1 onClick={abrir}> Pilots </Boton1>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        <Pop>
        <div> Pilots:  </div>
        {/* {results.map((data)=> {
        return(
        <div > {data.name} </div>
    )
    })}; */}
	
        </Pop>
        </Overlay>
        }
        </>
    )

    };

export default Pilotos;
