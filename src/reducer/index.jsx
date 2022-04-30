let index=1;
const initialState ={
    users:[], //estado para users
    detail:{}//propiedad para utilizar en el componente detalle
};

export default function rootReducer (state=initialState, action){
    switch(action.type){
        case 'CREATE_USER':
        return {
            ...state,
            users:[...state.users, {...action.payload, id: index++}]
        };
     default: return {...state}
    }
}