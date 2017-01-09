// Zadanie 1.
var liczby = [12, 33, 69]
console.log(liczby[0]);
console.log(liczby[1]);
console.log(liczby[2]);
console.log(liczby[3]);

// Zadanie 2.

var owoce = ["mango", "banan", "granat", "limonka"]
console.log (owoce[0]);
console.log (owoce.length);
console.log (owoce [3]);

for (var i=0; i<owoce.length; i++){
  console.log(owoce[i]);
}

// Zadanie 3.

var rozne = [3, 5, 7, 11, 44, 22, 123, 12, 18, 58, 66, 91];
var sum = 0;

for (var i=0; i<rozne.length; i++){
  sum = sum + rozne[i];
}
console.log (sum);

// Zadanie 4.

var rozne_2 = [3, 5, 7, 11, 44, 22, 123, 12, 18, 58, 66, 91];
var suma_pa = 0;

for (var i=0; i<rozne_2.length; i++){
  if (rozne_2[i]%2 == 0){
 suma_pa = suma_pa + rozne_2[i];
  }
}
console.log(suma_pa);
