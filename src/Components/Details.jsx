import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

export  function Details(props){
    //props.match.params.id sirve para recibir el estado por params
    let params = props.match.params.id; //utilizando props

    let dispatch = useDispatch(); // utilizo el de redux para el store
    let detail = useSelector(state => state.detail); // selector para obtener el objeto del estado global
    let users = useSelector(state => state.users); //para traer el estado de user
    return(
        <div> DETAIL</div>
    )
}
//para uutilizar el connect
function mapStateToProps(state) {
    return {
        detail: state.detail,
        users: state.users

    }
}
export default connect(mapStateToProps)(Details)