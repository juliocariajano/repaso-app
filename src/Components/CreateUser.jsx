import React from 'react';
import {createUser} from '../actions';
import {connect} from 'react-redux';

export function CreateUser({create}){
    let [input, setInput] = React.useState({
        name:"",
        lastName:"",
        age:"",
        city:"",
    });
    let handleChange = (e) => {e.preventDefault();
    console.log(e)
    setInput((prev) =>({...prev, [e.target.name]:e.target.value}))};

    // configuracion de hooks para tener el dispatch tambien se puede hacer el metodo de connect
    //let dispatch= React.useDispatch();
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        //dispatch(createUser(input));
        create(input);
        setInput({name:'', lastName:'', age:'',city:''})

    };
return (
    <React.Fragment>

    <div> CREATE USER </div>
    <br/>
    <form onSubmit={e => handleSubmit(e)}>
        <div>
            <label>Name</label>
            <input type={"text"} name={'name'} value={input.name} onChange={(e)=> handleChange(e)}/>
        </div>
        <div>
            <label>LastName</label>
            <input type={"text"} name={'lastName'} value={input.lastName} onChange={(e)=> handleChange(e)}/>
        </div>
        <div>
            <label>Age</label>
            <input type={"text"} name={'age'} value={input.age} onChange={(e)=> handleChange(e)}/>
        </div>
        <div>
            <label>City</label>
            <input type={"text"} name={'city'} value={input.city} onChange={(e)=> handleChange(e)}/>
        </div>
        <br/>
            <input type = {'submit'} value={'CREATE'}/>
         </form>
         </React.Fragment>
);}


function mapDispatchToProps(dispatch) {
    return {
        create: (input)=> dispatch(createUser(input))
    }}

export default connect(null, mapDispatchToProps)(CreateUser)
