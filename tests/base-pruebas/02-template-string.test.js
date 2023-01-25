import {getSaludo} from'../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo debe de retornar "Sr Jesus"', () => { 
        const name = 'Jesus';
        const message = getSaludo (name);

        expect(message).toBe(`hola ${name}`);
     });
 });