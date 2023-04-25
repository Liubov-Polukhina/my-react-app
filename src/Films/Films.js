import  React, {useEffect, useState } from 'react';
import {Pop, Overlay, BotonX, Boton1} from "./Films.styles";



function Films (props){
  
    const [info, setInfo] = useState(false);
    const [peliculas, setPeliculas] = useState([]);

    const abrir = () => {
        setInfo(true);
    }
    const cerrar = () => {
        setInfo(false);
    }

    async function fetchAll() {

        if (props.films.length === 0){
            setPeliculas([{title: "no aparece en las peliculas"}]);
          }
          else {
        const results = await Promise.all(props.films.map((url) => fetch(url).then((r) => r.json())));
        console.log(results);
        setPeliculas(results);
      }
    }

    useEffect(() => {
        fetchAll();
     }, []);

    return(
        <>
        <Boton1 onClick={abrir}> Peliculas </Boton1>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        <Pop>
        <div> Peliculas:  </div>
        {peliculas.map((data)=> {
        return(
        <div > {data.title} </div>
    
        )
    })}
	
        </Pop>
        </Overlay>
        }
        </>
    )

    };

export default Films;