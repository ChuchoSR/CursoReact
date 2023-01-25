import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

    //desestructuraremos el counter para ponerlo funcional en la renderizacion
    //el set es para cambiar la variable (counter)
    const [ counter, setCounter ] = useState(value);
    const handleAdd= () => {
       // console.log(event)
       setCounter( counter +1 );
    }

    const difference = () => setCounter (counter -1);
    const reset = () => setCounter (value);
    //DE ESA FORMA MOSTRADA, EL CONTADOR EMPIEZA A SER FUNCIONAL, CUANDO SE ACCIONA EL BOTON, SUMA 1 AL VALOR DE (EN ESTE CASO), EL usesTate
    return(
        //EMPEZANDO LOS  EVENTO ONCLICK
        <>
        
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>
            +1
        </button>

         <button onClick={ difference }>
            -1 
        </button> 

        <button onClick={ reset }> Reset </button>
        
        </>
    
    )
}

CounterApp.propTypes= {
    value: PropTypes.number
    
  }
  