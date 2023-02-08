import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un string y un numero', () => {

        const [ letters, numbers ] = retornaArreglo();
        //letters y numbers pasa a ser la forma como se desestructuro el arreglo traido desde donde se importó
        //console.log(retorno);

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

    });

});