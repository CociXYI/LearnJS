// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// решение:
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// решение:
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}



const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";
//   решение:
//   да, будет меняться





let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390







  
  // до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
//   Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
  

//   решение:
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
