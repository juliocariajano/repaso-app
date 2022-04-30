import React from 'react';
import User from './User'
import {connect} from 'react-redux'

export  function Users({users}){
    return (
        <div>
            {
            //consulta si existen usuarios para que se ejecute el codigo del map en caso de ser false no se ejecuta nada
           users && users.map(u =><div>
               <User key={u.id} id={u.id} name={u.name} lastName={u.lastName} age={u.age} city={u.city}/>
               </div>) 
            }
        </div>
    )
   
}
// para recibir el estado global
function mapStateToProps(state){
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, null)(Users)