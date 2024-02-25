// Базовое:
// Задание 1 – Создать объект counter всеми возможными способами;
//Литеральный способ
const counter = {
    count: 0,
};

//Через ключевое слово new 
const counter1 = new Object({
    count: 0,
});

//Через функцию
function MyCounter() {
    this.count = 0;
}

const counter2 = new MyCounter();

//Через класс

class Counter {
    constructor(count) {
        this.count = count;
    }
}

const counter3 = new Counter(0);

//Object.create

const counter4 = Object.create(null, {
    count: {
        value: 0,
        enumerable: true
    }
});

//Object.assign

const counter5 = Object.assign({
    count: 0
});


// Задание 2 – Скопировать объект counter всеми возможными способами;
//Object.assign

const copy = Object.assign({}, counter);

//Spread оператор

const copy1 = { ...counter };

//lodash

const lodash = require('lodash');
const copy2 = lodash.cloneDeep(counter);

//JSON.stringify() и JSON.parse()

const copy3 = JSON.parse(JSON.stringify(counter));

//Создание своей собственной функции для глубокого копирования;

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

const copy4 = deepCopy(counter);

//structuredClone

const copy5 = structuredClone(counter);


// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// Объявляемая функция (function declaration)

function makeCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter6 = makeCounter();
counter6.increment();
console.log(counter6.getCount());

// Функциональное выражение (function expression)

const makeCounter2 = function () {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter7 = makeCounter2();
counter7.increment();
console.log(counter7.getCount());

// Стрелочная функция (arrow function, ES6)

const makeCounter3 = () => {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter8 = makeCounter3();
counter8.increment();
console.log(counter8.getCount());


// Продвинутое:
// Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split('').reverse().join('');
}

// Задание 2– Написать функцию глубокого сравнения двух объектов:
// const obj1 = { here: { is: "on", other: "3" }, object: Z };
// const obj2 = { here: { is: "on", other: "2" }, object: Z };

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    const entries1 = Object.entries(obj1);
    const entries2 = Object.entries(obj2);

    if (entries1.length !== entries2.length) {
        return false;
    }

    return entries1.every(([key, value]) => deepEqual(value, obj2[key]));
}
