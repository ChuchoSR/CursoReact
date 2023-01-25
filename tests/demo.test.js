//import {expect, jest, test} from '/@jest/jsconfig.json';

describe('Pruebas en <DemoComponent />',  () => {

    test('esta prueba no debe de fallar', () => {
        // ESTRUCTURA GENERAL DE LAS PRUEBAS
        
        // 1. INICIALIZACION
        const message1= 'hola mundo';
    
        // 2. ESTIMULO.
        const message2= message1.trim();
        //.trim es para quitar espacios en blanco al inicio y al final
    
        // 3. OSBERVAR EL COMPORTAMIENTO.
    
        expect( message1 ).toBe( message2 );
    
        
    
    
    // expect y toBe es de jest. Esto es igual a una declaracion if...
    
    } )

});

