import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
//import Provider from 'react-redux'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // codigo exclusivo para conectar la extension devtoll en el navegado
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))// codigo exclusivo para conectar la extension devtoll en el navegado el counter es el nombre dell contador



export default store;