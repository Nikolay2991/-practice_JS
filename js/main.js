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


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};

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

console.log(personalMovieDB);