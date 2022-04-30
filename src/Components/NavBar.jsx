import React from 'react';
import { NavLink } from 'react-router-dom'; // Se importa el navlink para la creacion de ruta
// Creacion de componente con  funciones 

export default function NavBar(){
    return ( 
//RETURN // es el render de un componente de funcion
//React.Fragment es opcional permite agrupa los compentes que se generen denrtro del fragment de manera q se evite utilizar los div o tag o algun elemente de html
      <React.Fragment>
      <nav>
            <ul>
                <li> 
                    <NavLink to={'/home'}>Home  </NavLink> 
                    </li>
                <li> 
                    <NavLink to={'/users'}>User</NavLink>
                </li>
                <li> 
                    <NavLink to={'/create'}>Create User</NavLink>
                </li>
                <li> 
                    <NavLink to={'/about'}>About</NavLink>
                </li>
            </ul>
        </nav>
        </React.Fragment>
    );
}   