//
//console.log("hello world");

//let number = 20;
//console.log (number);

//let zahl1 = 5;
//let zahl2 = 4;  
//console.log(zahl1+zahl2);
//console.log(zahl1-zahl2);
//console.log(zahl1*zahl2);

//console.log(3 == '5');
//console.log(5 <= 4 );

//function functionName(zahl1, zahl2){
//    let result = zahl1 + zahl2;
//    return result; 
//}
//console.log(functionName(5,5));

//let istDurstig = true; 
//let willKaffee = true;

//if (istDurstig){
//    if (willKaffee){
//         //Kaffe kochen;
//   }
//}


//let number1=5;
//let number2=6;
//let result =0;

//Größer-KLeiner Funktion
//function compare (number1, number2){
//    if (number1 > number2){
//        return number1;
//    } else {
//        return number2;
//    }
//}
//result = compare(number1, number2);
//console.log(result);

//Zahlen vergleichen (verkürzte Variante geht auch mit if)
//function compare (number1, number2){
//    return number1 == number2; 
//}
//console.log(compare(number1, number2));

//(Un)grade Zahlen
//function isEven (number1){
//    if (number1% 2 == 0){
//        return "Die Zahl ist gerade";
//    } else{
//        return "Die Zahl ist ungerade";
//    }
//}
//console.log(isEven(number1));

//switch / case 

//let difficulty = 2; 

//switch(difficulty){
    //case 1: console.log("Easy");
    //break;
    //case 2: console.log("Medium");
    //break; 
    //case 3: console.log("Hard");
    //break;
//}

//let canZombiesSmashDoors = (difficulty == 3) ? true : false;
//console.log("Can Zombies smash Doors? " + canZombiesSmashDoors);

//Schleife 
//for-loop
//for (let i = 0; i < 5; i++){
    //console.log(i)
//}

//while loop
//let zahl = 1;
//while (zahl < 5){
    //zahl = zahl +2;
    //console.log(zahl);
//}

//arrays
//creating an array
//let birthdayVisitors = ["Anna", "Bastian", "Kevin", "Denise"];
//Adding an element later 
//birthdayVisitors.push("Elena");
//let name = birthdayVisitors[1]; //return Batians name [1]-> Platz 2 Liste

// Schleife mit Nummern 1-10
//for (let i = 1; i < 11; i++){
    //console.log(i)
//}

//let zahl = 0; 
//while (zahl < 10) {
    //zahl = zahl + 1; 
    //console.log(zahl);
//}

//let zahl=0;
/*do {
    zahl = zahl +1;
    console.log(zahl)}
while (zahl < 10 );
*/

const ergebnis = document.getElementById("ergebnis");
const B1 = document.getElementById("B1"); 
const B2 = document.getElementById("B2"); 
const B3 = document.getElementById("B3");

B1.addEventListener("click", ()=> {
    ergebnis.textContent ="Falsch. Neuer Versuch!";  
}); 

B2.addEventListener("click", ()=> {
    B2.style.backgroundColor="green";
    ergebnis.textContent = "Richtig!";  
});

B3.addEventListener("click", ()=> {
    ergebnis.textContent= "Falsch. Neuer Versuch!"
});

const B4 = document.getElementById("B4"); 
const B5 = document.getElementById("B5"); 
const B6 = document.getElementById("B6");

B4.addEventListener("click", ()=> {
    ergebnis.textContent ="Falsch. Neuer Versuch!";  
}); 

B5.addEventListener("click", ()=> {
    ergebnis.textContent ="Falsch. Neuer Versuch!"; 
});

B6.addEventListener("click", ()=> {
    B6.style.backgroundColor="green";
    ergebnis.textContent = "Richtig!";  
});
