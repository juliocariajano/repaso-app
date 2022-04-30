import React from 'react';


// en este ejemplo se crea un componente de clase 
export default class Home extends React.Component{
    // se crea un constructor solo si quiere definir un estado en caso de los reducers y se utiliza super siempre que este la palabra extend en la deficinicion de la funcion
  /*  constructor(props){
            super(props);
             this.state={
                name:'',
                lastName:''
                }
    }
    */
    // si quiero destructura ponngo los siguiente
    // si el componente creado tiene un estado local se crea el constructor
    //constructor(props){}
    //super(props);
    //this.state={
    //    name:'martina'
    //}
// si no tiene un estado entonces solo se prondria this.props.
//}
// el render remplaza el return 
/*Si quiero hacer destructin aumento este codigo
            let {name} = this.props debajo del render
            y donde va Home {name}
        */
render (){
    return(
        
        <div>
            {/**En caso de recibir algun parametro se aumentan laos corchetes y dentro se pone la propiedad */}
            HOME {this.props.name} {this.props.age}
        </div>
    )
}
}
//==================================
// componente creado con funcion
// en caso de recibir una propiedad por parametro se la pone dentro de parentesis y se publica en el lugar que quiera 
// si quiero hacer destructuracion cambia (props) por {name} y donde esta Home{props.name} por Home {name}
/* 
function Home({name, age}){
    let [input,setInput]= React.useState({name:'',lastName:''}); este codigo es para setear un estado 
    return 
    <div>
        Home{name}{age}
    </div>
}
*/