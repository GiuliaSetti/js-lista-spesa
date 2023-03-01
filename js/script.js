// Consegna:
// Data una lista della spesa (memorizzata in un array), stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


/* - creo un'array
   - creo una variabile contatore che possa interrompere il ciclo di while.

   WHILE (FINO A CHE) il contatore non raggiunge la lunghezza dell'array -

        ° collego la ul (lista della spesa) in js
        ° crea un elemento (li)
        ° lo collego alla lista della spesa .append()
        ° stampo l'elemento in pagina

*/

// creo un'array

let listaSpesa = [
    "Pane",
    "Pasta",
    "Sale",
    "Farina",
    "NUTELLA!!!!",
    "Biscotti",
    "Rucola"
];

// test

console.log(listaSpesa);

// creo una variabile contatore che possa interrompere il ciclo di while.

let contatore = 0;

// FINO A CHE il contatore non raggiunge la lunghezza dell'array 

while (contatore < listaSpesa.length){

    
    contatore++;

    // ° collego la ul (lista della spesa) in js

    let listItems = document.getElementById("lista_spesa");

    // ° crea un elemento (li)

    let listSingleItem = document.createElement ("li");

    // ° lo collego alla lista della spesa .append()

    listItems.append(listSingleItem);

    listSingleItem = listaSpesa[contatore];

    console.log(listSingleItem);



    
}


