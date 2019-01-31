/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function addTest() {

    var nome1 = document.getElementById("cuccarini").value;
    var nome2 = document.getElementById("hunziker").value;
    var nome3 = document.getElementById("levi").value;
    var nome4 = document.getElementById("majorana").value;
    let ris = 0;
    if (nome1 === "Lorella") {
        ris += 10;
    }


    if (nome2 === "Michelle") {
        ris += 10;
    }


    if (nome3 === "Rita") {
        ris += 20;
    }

    if (nome4 === "Ettore") {
        ris += 30;
    }
document.getElementById("esito").innerHTML = "Hai vinto" + ris;
return ris;

    
}