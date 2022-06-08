const ingredientes = ["harina", "levadura", "sal", "agua", "aceite", "salsa", "jamon", "queso", "tomate", "oregano", "ajo"];

let pares = [];
let impares = [];

function separarIngredientes(unidad) {
    for (i = 0; i < ingredientes.length; i++) {
        let letras = ingredientes[i].length;
        if (letras %2 === 0) {
            pares.push(ingredientes[i]);
        } else {
            impares.push(ingredientes[i]);
        }
    }
    return (
        console.log(`Los ingredientes pares son: ${pares}. Los ingredientes impares son: ${impares}`)
    );
};

separarIngredientes(ingredientes);


