/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 =20
let numero2= 50
if(numero1>numero2) {
  console.log('è vero che numero1 è maggiore di numero2')
}else {
  console.log('è vero che numero2 è maggiore di numero1')
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero= 4
if(numero === 5){
  console.log(' equal')
}else {
  console.log(' not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero5 = 25
if(numero5  % 5 === 0 ) {
  console.log('divisibile per 5')
}
 

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const number1= 5
const number2 = 3
if(number1===8 ||number2===8 || number1+number2===8 || number1-number2===8  ){
  console.log('uno dei 2 numeri è 8 oppure la loro somma/sottrazione è 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 45
if(totalShoppingCart>50){
  console.log('spedizione gratis')

}else {
  console.log('la spedizione costa 10 euro,il totale è 55 euro')
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const BlackFriday =totalShoppingCart- (totalShoppingCart *20)/100
if(BlackFriday>50) {
  console.log('spedizione gratis')
}else {
  console.log('la spedizione costa 10 euro,il totale è 46 euro')
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const q = 1
const w = 5
const e = 6
if(q>w){
  console.log('q è il numero piu alto')
}else if(q>e){
  console.log('q è il numero piu alto')
}else if(w>e)
{console.log('w è il numero piu alto' )}
else {
  console.log('e>w>q')
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = 'filippo'


if(nome===numero){
  console.log('la variabile è un numero')

}else  {
  console.log('non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero10 = 3
let DispariOPari = numero10 % 2

if(DispariOPari ===0 ){
  console.log('è un numero pari')
}else {
  console.log('è un numero dispari')
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 2
if (val < 10 && val >= 5 ) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'toronto'
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/



/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me.lastName)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
const array = []
 array.push(1)
 array.push(2)
 array.push(3)
 array.push(4)
 array.push(5)
 array.push(6)
 array.push(7)
 array.push(8)
 array.push(9)
 array.push(10)

 console.log(array)

 

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.pop()
array.push(100)
console.log(array)
