/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addFrase() {

    var txnominativo = document.getElementById("nome").value;
    var d = new Date();
    document.getElementById("frase").innerHTML = "Oggi è il " + d.toDateString() + " " + "ciao" + " " + txnominativo + " " + "buona giornata!";
}

function changeName() {


    let txnominativo1 = document.getElementById("name1").value;
    let txnominativo2 = document.getElementById("name2").value;
    let txnominativo3 = document.getElementById("name3").value;

    document.getElementById("name1").value = txnominativo2;
    document.getElementById("name2").value = txnominativo3;
    document.getElementById("name3").value = txnominativo1;

}

//dichiaro variabili globali

var ar_articoli = [];
var ar_valori = [];




function carrello() {

    var txarticoli = "";
    var txvalori = "";

    txarticoli = document.getElementById("in_articolo").value;
    txvalori = document.getElementById("in_prezzo").value * 1;

    //inietto i contenuti delle caselle
    ar_articoli.push(txarticoli);
    ar_valori.push(txvalori);

    //creo ciclo for e gli assegno una variabile let
    let ris = "";
    for (var i = 0; i < ar_articoli.length; i++) {
        ris = ris + ar_articoli[i] + " " + ar_valori [i] + "<br>";

//prendo i valori e li inserisco nel div
        document.getElementById("articoli").innerHTML = ris;
    }



    for (let i = 0; i < ar_valori.length; i++) {
        txvalori = txvalori + ar_valori[i];
    }

    document.getElementById("in_totale").innerHTML = txvalori;
//sbaglia somma..si somma a se stesso quando scrivo il numero ....ricontrollare :(((((((((((((((((


 /*media: scorro gli elementi inseriti nella casella prezzo(utilizzo ciclo for)
  * sommo gli elementi della casella prezzo e li divido per il loro numero
  * prendo il risultato
  * stampo il risultato nella casella in_media
  * 
  * 
  * min/max: scorro gli elementi (utilizzo il ciclo for)
  * ogni volta che incontro un numero min o maggiore li tengo
  * alla fine del ciclo stampo il ris min nella casella in_minimo o in_massimo
  *
  */
 
}








