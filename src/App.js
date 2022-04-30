import React from 'react';
import NavBar from './Components/NavBar'
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import CreateUser from './Components/CreateUser'
import Details from './Components/Details'
import Users from "./Components/Users"


function App() {
  return (
    //<React.Fragment permite por conjunto todos los componentes permite agrupa los compentes que se generen denrtro del fragment de manera q se evite utilizar los div o tag o algun elemente de html
   <React.Fragment>
    
    <NavBar/> 
        
    {/**1.Forma una de parte componentes a la ruta 
    <Route path={'/home'} render={() => <Home name={'Julio'} age={78}/>}/>
    */}

    {/*2.Forma de pasar componentes a la ruta */}
   <Route path={'/home'}>
   <Home name={'Andres'} age={'32'}/>
  </Route>
    {/*2.Forma de pasar componentes a la ruta */}
    <Route path={'/create'} component={CreateUser}/>
    <Route path={'/users'} component={Users}/>
    <Route path={'/detail/:id'} component={Details}/>

   </React.Fragment> 
  );
}

export default App;
