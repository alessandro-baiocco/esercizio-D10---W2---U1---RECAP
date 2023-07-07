/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("esercizio 1 : ");
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
console.log("------------------------------------");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("esercizio 2 :", pets);
console.log("------------------------------------");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log("esercizio 3 : ", pets);
console.log("------------------------------------");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets[0]);
pets.shift();
console.log("esercizio 4 :", pets);
console.log("------------------------------------");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = Math.floor(Math.random() * 101);
}
console.log("esercizio 5 : ", cars);
console.log("------------------------------------");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const objExer1 = {
  brand: "Ferrari",
  model: "roma",
  color: "red",
  trims: ["carbon", "st", "active"],
  licensePlate: true,
};
cars.push(objExer1);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log("esercizio 6 :", cars);
console.log("------------------------------------");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log("esercizio 7 :", justTrims);
console.log("------------------------------------");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("esercizio 8 :");
for (let i = 0; i < cars.length; i++) {
  let firstLetter = cars[i].color.charAt(0);
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
console.log("------------------------------------");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("esercizio 9 : ");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let whileVar = 0;
while (numericArray[whileVar] !== 32) {
  console.log(numericArray[whileVar]);
  whileVar++;
}

console.log("------------------------------------");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("esercizio 10 :");
const charactersArray = ["g", "n", "u", "z", "d"];

for (i = 0; i < charactersArray.length; i++) {
  switch (typeof charactersArray[i] === "string") {
    case charactersArray[i].toUpperCase() === "A":
      console.log("1");
      break;
    case charactersArray[i].toUpperCase() === "B":
      console.log("2");
      break;
    case charactersArray[i].toUpperCase() === "C":
      console.log("3");
      break;
    case charactersArray[i].toUpperCase() === "D":
      console.log("4");
      break;
    case charactersArray[i].toUpperCase() === "E":
      console.log("5");
      break;
    case charactersArray[i].toUpperCase() === "F":
      console.log("6");
      break;
    case charactersArray[i].toUpperCase() === "G":
      console.log("7");
      break;
    case charactersArray[i].toUpperCase() === "H":
      console.log("8");
      break;
    case charactersArray[i].toUpperCase() === "I":
      console.log("9");
      break;
    case charactersArray[i].toUpperCase() === "J":
      console.log("10");
      break;
    case charactersArray[i].toUpperCase() === "I":
      console.log("11");
      break;
    case charactersArray[i].toUpperCase() === "L":
      console.log("12");
      break;
    case charactersArray[i].toUpperCase() === "M":
      console.log("13");
      break;
    case charactersArray[i].toUpperCase() === "N":
      console.log("14");
      break;
    case charactersArray[i].toUpperCase() === "O":
      console.log("15");
      break;
    case charactersArray[i].toUpperCase() === "P":
      console.log("16");
      break;
    case charactersArray[i].toUpperCase() === "Q":
      console.log("17");
      break;
    case charactersArray[i].toUpperCase() === "R":
      console.log("18");
      break;
    case charactersArray[i].toUpperCase() === "S":
      console.log("19");
      break;
    case charactersArray[i].toUpperCase() === "T":
      console.log("20");
      break;
    case charactersArray[i].toUpperCase() === "U":
      console.log("21");
      break;
    case charactersArray[i].toUpperCase() === "V":
      console.log("22");
      break;
    case charactersArray[i].toUpperCase() === "W":
      console.log("23");
      break;
    case charactersArray[i].toUpperCase() === "X":
      console.log("24");
      break;
    case charactersArray[i].toUpperCase() === "Y":
      console.log("25");
      break;
    case charactersArray[i].toUpperCase() === "Z":
      console.log("26");
      break;
    case typeof charactersArray[i] === "string":
      console.log("brah non è una lettera è una frase o un simbolo");
      break;
  }
  if (typeof charactersArray[i] !== "string") {
    console.log("brah non è una lettera");
  }
}
