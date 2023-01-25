import React from "react";
import ReactDOM from 'react-dom/client';
import {FirstApp} from './FirstApp';
import { HelloWorld } from "./HelloWorldApp";
import './index.css';
import { CounterApp } from "./CounterApp";


// function App() {
    
//     return <h1>Hola mundo!!</h1>;
// }
//Se usa el createroot que nos manda a buscar el id determinado en el index.html (es alli donde se renderiza nuestro componente),
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {123}/>

    </React.StrictMode>
);

//ACA SE INTRODUCEN DIRECTAMENTE LAS PROPIERTYS QUE SE ENVIAN DEL COMPONENTE PADRE (MAIN), AL COMPONENTE HIJO (FirsApp)