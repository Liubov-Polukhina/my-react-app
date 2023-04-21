
import  React, {useEffect, useState } from 'react';
import { Pop, Overlay, Boton3, BotonX, Nombre, Model, Model4, Model3} from "../styled";
import Pilotos from '../Pilots/Pilotos';
import Films from '../Films/Films';

function Ships (props){

const [naves, setNaves] = useState([]);
const [info, setInfo] = useState(false);

const abrir = () => {
    setInfo(true);
}
const cerrar = () => {
    setInfo(false);
}



return(
    <>
    <Boton3 onClick={abrir}> {props.nave.name} {props.nave.model} </Boton3>
        
        {info && <Overlay>
        <BotonX onClick={cerrar}> X </BotonX>    
        <Pop>
        
        <Nombre> {props.nave.name}</Nombre>

        <Model>
        <div>MODEL:  {props.nave.model}</div>
        <div>STARSHIP CLASS:  {props.nave.starship_class}</div>
        <div>MANUFACTURER:  {props.nave.manufacturer}</div>
        <div>COST:  {props.nave.cost_in_credits}</div>
        </Model>

        <Model4>
        <Model3>
        <div>CREW: {props.nave.crew} </div>
        <div>PASSENGER CAPACITY: {props.nave.passengers} </div>
        <div>CARGO CAPACITY: {props.nave.cargo_capacity} </div>
        <div>CONSUMABLES: {props.nave.consumables} </div>
        </Model3>

        <Model3>
        <div>LENGTH: {props.nave.length} </div>
        <div>MAXIMUM ATMOSPHERING SPEED: {props.nave.max_atmosphering_speed} </div>
        <div>HYPERDRIVE RATING: {props.nave.hyperdrive_rating} </div>
        <div>MAXIMUM SPEED IN REALSPACE: {props.nave.max_atmosphering_speed} </div>
        </Model3>
        </Model4>

       
        <Pilotos pilots = {props.nave.pilots}></Pilotos> 
       
        <Films films={props.nave.films}> </Films>

        </Pop>
        
        </Overlay>
        }
    </>
)
};


export default Ships;