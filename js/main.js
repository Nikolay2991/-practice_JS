"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = +prompt('Введите число от 1 до 100', '');

// if (num <= 49) {
//     console.log('Мало');
// } else if (num >= 51) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// let person = {
//     name: 'Sam',
//     years: 25
// }

// let { name, years: age, height = null } = person;

// console.log(name, age, height);

// const nums = [25, 50, 75, 85, 95];

// const input = +prompt('Введите число', '25');
// const index = nums.indexOf(input);

// if (index > -1) {
//     console.log(nums[index], index);
// } else {
//     console.log('Not found');
// }


// const arr = [];

// for (let i = 0; i < 5; i++) {
//     let input = prompt('Введите число', '');
//     arr.push(input);
// };

// console.log(arr);

// const nums = [2,12,34,23,21];

// const input = +prompt('Enter a value: ');
// const index = nums.indexOf(input);

// if (index > -1) {
//     nums.splice(index, 1);
// }

// console.log(nums);

// const nums = [11, 12, 13, 14, 15];

// const input = prompt('Введите 5 чисел: ');

// const userArr = input.split(',');

// const newArr = nums.concat(userArr);

// console.log(newArr);

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

// let firstNumber = +prompt('Введите первое число');
// let secondNumber = +prompt('Введите второе число');
// let total = +firstNumber + +secondNumber;
// alert (total);

// var animals = ['тигр', 'медведь'];
// var fruit = ['дыня', 'апельсин'];
// var dishes = ['тарелка', 'бокал', 'чашка'];

// var whereIsTheTiger = animals.indexOf('тигр');
// var fruitsAndAnimals = fruit.concat(animals);

// document.write(animals + '<br>');
// document.write('Индекс тигра: '+ whereIsTheTiger + '<br>');
// document.write(fruitsAndAnimals + '<br>');
// whereIsTheTiger = animals.indexOf('тигр');
// document.write ('Индекс тигра: ' + whereIsTheTiger + '<br>');

// let animals = ['dog', 'cat', 'bird', 'octopus'];
// if (+prompt('Введите номер животного ', '') in animals) {
//     console.log('Это значение есть в массиве');
// } else {
//     console.log('Этого значения нет в массиве');
// }

// let myString = new String();
// if (myString instanceof String) {
//     console.log('Да, это строка!');
// } else {
//     console.log('Нет это число');
// }

// let areaCodes = ['770', '404', '718', '202', '901', '305', '312', '313', '215', '803'];
// for (x=0; x < areaCodes.length - 1; x++) {
//     console.log('Другой телефонный код:' + areaCodes[x]+ '<br>');
// }


const personalMovieDB = {
     count: 0,
     movies: {},
     actors: {},
     genres: [],
     privat: false,
     start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
            const a = prompt('Один из последний просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', ''),
                c = prompt('Какой любимый актер?');
    
            if (a,b,c != null && a,b,c != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                personalMovieDB.actors[1] = c;
                personalMovieDB.actors[2] = c;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genres === null || genres === '') {
                console.log("Некоректные данные или пустая графа")
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    detectPersonalLevel: function() {
        if  (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('Произошла ошибка');
        }
    }
};





// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(bg);

// console.log(Object.keys(options));

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
//     counter++;
// }

// console.log(counter);

// writeYourGenres();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello World');

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 6));

// const str = "test";

// console.log(str.length)

// console.log(str.toUpperCase())


// const logg = "Вася прошел к речке и нашел там большую черепаху";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));







// Массивы 





// const arr = [1, 2, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(arr.length);

// arr.pop();

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));






// Передача по ссылке или по значению, Spread оператор (ES6 - ES9)


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };


// function copies(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumber = copies(numbers);

// newNumber.a = 10;

// console.log(newNumber);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const array = ['a', 'b'];

// const newAarray = [...array];

// console.log(newAarray);




// Основы ОПП, прототипно-ориентированное наследование

// let soldier = {
//     health: 400,
//     armor: 100,
//     mana: 300,
//     sayCommand: function() {
//         console.log('Hello');
//     }
// };



// let jonh = {
//     health: 50,
//     armor: 300
// };

// // jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh);

