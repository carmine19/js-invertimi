/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.
*/


//creo un arry dove inserire i numeri
var numeri_casuali = [];
console.log(numeri_casuali);

// creo un ciclo con i numeri che voglio generare
for (var i = 0; i < 100; i++) {

    // genero i numeri casuali con math randon
    var numeri_generati = Math.floor(Math.random() * 101);
    console.log(numeri_generati);

    // pusho i numeri nell array di numeri casuali
    numeri_casuali.push(numeri_generati);

}

// creo le altre 2 variabili con i numeri in ordine crescente e decrescente
var numeri_in_oridne_crescente = numeri_casuali.sort();
console.log(numeri_in_oridne_crescente);

var numeri_in_oridne_decrescente = numeri_casuali.reverse();
console.log(numeri_in_oridne_decrescente);