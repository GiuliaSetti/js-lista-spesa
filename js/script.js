// Consegna:
// Data una lista della spesa (memorizzata in un array), stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


/* - creo un'array
   - creo una variabile contatore che possa interrompere il ciclo di while.

   - chiedo all'utente cosa vuole comprare

   al click del bottone:

   - pusho gli elementi inseriti dall'utente nella lista.


   WHILE (FINO A CHE) il contatore non raggiunge la lunghezza dell'array -

        ° collego la ul (lista della spesa) in js
        ° crea un elemento (li)
        ° lo collego alla lista della spesa .append()
        ° stampo l'elemento in pagina

*/

// creo un'array

let listaSpesa = [];

// test

console.log(listaSpesa);

//  Collego la ul (lista della spesa) in js

 let listItems = document.getElementById("lista_spesa");

// creo una variabile contatore che possa interrompere il ciclo di while.

let contatore = 0;

let addItembButton = document.getElementById("addto_list");

let newItem = document.getElementById("new_item");


addItembButton.addEventListener("click", function(){


    if (newItem.value == ""){

        alert("Non hai inserito niente!");

    } else {

        listaSpesa.push(newItem.value);

    }

    newItem.value = "";
    
    

    // FINO A CHE il contatore non raggiunge la lunghezza dell'array 
    while (contatore < listaSpesa.length){

   

    // ° crea un elemento (li)

    let listSingleItem = document.createElement ("li");

    // ° lo collego alla lista della spesa .append()

    listItems.append(listSingleItem);

    // ° stampo l'elemento in pagina

    listSingleItem.innerText = listaSpesa[contatore];


    contatore++;
    // console.log(listSingleItem);


    
     if (contatore % 2 == 0){

         listSingleItem.classList.add("pari");

     } else {

         listSingleItem.classList.add("dispari");

     }

}


});


