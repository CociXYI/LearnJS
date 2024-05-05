let i = 3;
while (i) {
  alert( i-- );
}
// Ответ: 1.
// let i = 3;
// alert(i--); // выведет 3, затем уменьшит i до 2
// alert(i--) // выведет 2, затем уменьшит i до 1
// alert(i--) // выведет 1, затем уменьшит i до 0







let o = 0;
while (++o < 5) alert( o );
// От 1 до 4
let ii = 0;
while (ii++ < 5) alert( ii );
// От 1 до 5








for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i );
// Ответ: от 0 до 4 в обоих случаях.








// При помощи цикла for выведите чётные числа от 2 до 10.
// решение:
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}









// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let a = 0;
while (a < 3) {
  alert( `number ${a}!` );
  a++;
}







// Повторять цикл, пока ввод неверен

let num;
do {
  num = prompt("Введите число больше 100?", );
} while (num <= 100 && num);







let n = 10;

Prime:for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue Prime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}