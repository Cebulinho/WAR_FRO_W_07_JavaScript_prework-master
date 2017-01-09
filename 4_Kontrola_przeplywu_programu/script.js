// Zadanie 1.

var liczba_1 = 3
var liczba_2 = 5
if (liczba_1 > liczba_2) {
  console.log (liczba_1);}
if (liczba_1 < liczba_2) {
  console.log (liczba_2);
}

// Zadanie 2.

var liczba_3 = 7
var liczba_4 = 25
var liczba_5 = 17

if (liczba_3 > liczba_4 && liczba_3 > liczba_5) {
  console.log (liczba_3);
}
if (liczba_4 > liczba_3 && liczba_4 > liczba_5) {
  console.log (liczba_4);
}
if (liczba_5 > liczba_3 && liczba_5 > liczba_4) {
  console.log (liczba_5);
}

// Zadanie 3.

for(var i = 0; i<10; i=i+1){
console.log("Lubie JavaScript");
}

// Zadanie 4.

var result = 0
for (var i=1; i<=10; i=i+1){
  result = result+i
}
console.log (result)

// Zadanie 5

var n = 5
for (var i=0; i<=n; i++){
  if(i % 2 == 0){
    console.log(i + "-" + "parzysta")
  } else {console.log(i + "-" + "nieparzysta")}
}

// Zadanie 6.

for(var i=0; i<10; i++) {
  for(var j=0; j<10; j++) {
console.log("i=" + i + ", j=" + j);
 }
 }



// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

// Zadanie 8.

console.log("Zadanie_8")
var n = 5

var lineOfStars = ""

for (var i = 1; i <= n; i++){
  lineOfStars="";
  for(var j=0; j < i; j++){
    lineOfStars = lineOfStars + "*";
  }
  console.log(" ");
  console.log(lineOfStars);
}
