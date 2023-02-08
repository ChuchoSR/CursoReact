// export const FirstApp = () => {
//   return (
//     <>
//     <h1>Developer Jesus Sierra</h1>
//     <p> prueba de error</p>
//     </>
//   );
// }
  
//<> ESTE OPERADOR ES EL USO DE UNA OPCION DE REACT (QUE SE IMPORTA PERO DICHO SIGNO NOS HACE LA AUTOIMPORTACION), QUE SE LLAMA FRAGMENTE, 
// ASI EVITAMOS CREAR MAS LINEAS DE CODIGOS SI USAMOS VARIAS OPERADORES DEL MISMO NIVEL JERARQUICO.


// const newMessage = {
//   message: 'Hola mmundo',
//   title: 'Jesus'
  
// };
// PARA IMPRIMIR UN OBJETO ENTERO EN ESTE CODIGO, SE DEBE USAR JSON.stringify (SERIALIZA EL OBJETO INDICADO Y LO ENVIA EN FORMATO .JSON)  , SE PODRIA IMPRIMIR UNO POR UNO
// HACIENDO MENCION AL OBJETO EN CUESTION Y SELECCIONANDO LO QUE SE NECESITA (EN ESTE CASO SERIA newMessage.message o title)
// export const FirstApp = () => {
//     return(
//       <>
//       <h1></h1>
//       {/* <code>{JSON.stringify (newMessage)}</code> */}
//       <p>paso a paso, lo lograras Jesus</p>
//       </>
//     )


// }

//LOS PROPS (PROPIEDAS), ES LA COMUNICACION QUE FLUYE ENTRE EL COMPONENTE PADRE, HACIA EL COMPONENTE HIJO
// ES POCO COMUN HACER LO QUE SE EXPRESA A CONTIN UACION, LO MAS ACONSEJABLE ES HACER DESESTRUCTURACION Y OBTENER LOS DATOS REQUERIDOS


import PropTypes from 'prop-types';
export const FirstApp = ( {title, subTitle, name} ) => {
   // console.log(props);

   
    return (
      <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
      </>
    )

};

//DE ESTA FORMA ESTAMOS CONDICIONANDO ALGO, EN ESTE CASO "title", tiene que ser un string, de no enviarse correctamente
//LA CONSOLA DIRA INVALID PROP, PORQUE NO ES LO QUE ESPERABA
//CON EL isRequired CONDICIONAMOS QUE SE CUMPLA TODO LO SOLICITADO SI O SI
FirstApp.propTypes= {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired

}

FirstApp.defaultProps = {

  name: 'Jesus Sierra',
  subTitle: 'lee mas',
  title: 'Se paciente y perseverante'


}
