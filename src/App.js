
import { Boton1, Boton2, Container, Container1, Footer, Header, HeaderF } from "./styled";

import Ships from "./components/Ships";
import  React, {useEffect, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './App.css';
import imagen from "./pics/unnamed.jpg";



const App = () => {
  const [usuario, setUsuario] = useState(() =>{
    try {
      const item=window.localStorage.getItem('usuario')
      return  item ? JSON.parse(item) : {user:null, pass:null}
    }
    catch(error){
      return {user:null, pass:null}
    }}
    );
  const [naves, setNaves] = useState([]);
  const [pagina, setPagina] = useState(1);

  const crearUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
    try{
      window.localStorage.setItem('usuario',  JSON.stringify(nuevoUsuario));
    }catch (error){
        console.error(error);
    }
  }
  const actualizaPagina = () => {
    let p = pagina;
    setPagina(p+1)
  }
  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page="+pagina)
    .then(res => res.json())
    .then (res=> {
      setNaves(res.results);
    })
  }, [pagina]);



  return (
    <div>
      
     
      <Header>
        
        <Login usuario ={usuario}></Login>
        <Signup usuario ={usuario} crearUsuario ={crearUsuario}></Signup>
      </Header>
      <HeaderF> <img src={imagen} alt="" width="100" height="100"></img></HeaderF>
      

      <Container>
      <Boton2>HOME</Boton2>
      <Boton2>STARSHIPS</Boton2>
      </Container>
      {naves[0] ? <Container1>
      <Ships nave = {naves[0]}/>
      <Ships nave = {naves[1]}/>
      <Ships nave = {naves[2]}/>
      <Ships nave = {naves[3]}/>
      <Ships nave = {naves[4]}/> 
      <Ships nave = {naves[5]}/>
      <Ships nave = {naves[6]}/>
      {/* <Ships nave = {naves[7]}/>
      <Ships nave = {naves[8]}/>
      <Ships nave = {naves[9]}/>   */}
      </Container1>
      : "Cargando"}
      
      <Footer>
      <Boton1 onClick={actualizaPagina}>view more</Boton1>
      </Footer>
    </div>
  );
}
export default App;
