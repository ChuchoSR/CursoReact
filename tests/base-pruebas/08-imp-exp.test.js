import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        //console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

     });

     test('getHeroeById debe de retornar un Undefined si no existe', () => { 
        //UNA FORMA DE EVALUAR SI BUSCAMOS QUE EL RESULTADO DE LA PRUEBA SEA NULL, UNDEFINED O FALSE
        const id = 100;
        const hero = getHeroeById(id);

       expect(hero).toBeFalsy();

     });

     //TAREA
     //getHeroesByOwner

    //  Debe de retornar un arreglo con los heroes de DC 
    //  LENGHT ===3
    //  toEqual AL ARREGLO FILTRADO

     test('Debe de retornar un arreglo con los heroes de DC', () => { 
        
        const owner = 'DC';
        const heroD = getHeroesByOwner(owner);

        //console.log(heroD);
        //console.log(owner);


        expect(heroD.length).toEqual(3); 
        expect(heroD).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },{
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },{
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }]); 
    });
    //  DEBE DE RETORNAR UN ARREGLO CON LOS HEROES DE MARVEL
    //  LENGHT ===2
        
        const owner = 'Marvel';
        const HeroM = getHeroesByOwner(owner);

        console.log(HeroM);

        expect(HeroM.length).toEqual(2);

});