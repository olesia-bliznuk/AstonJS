// 1. Перечислить какие бывают алгоритмы сортировок?
// - Сортировка пузырьком
// - Сортировка вставками 
// - Быстрая сортировка
// - Сортировка слиянием
// - Пирамидальная сортировка
// - Сортировка перемешиванием
// - Сортировка выбором

// 2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

//Использование литерала объекта

const Person = {
    name: 'Ann',
    logInfo: function () {
        console.log(this.name);
    }
}

const AnotherPerson = Object.create(Person);
AnotherPerson.name = 'Alice';

AnotherPerson.logInfo();

//С использованием функции-конструктор

function Person1(name) {
    this.name = name;
}

Person1.prototype.logInfo = function () {
    console.log(this.name);
};

function AnotherPerson1(name) {
    Person1.call(this, name);
}

AnotherPerson1.prototype = Object.create(Person1.prototype);
AnotherPerson1.prototype.constructor = AnotherPerson1;

const anotherPerson1 = new AnotherPerson1("Alice");
anotherPerson1.logInfo();

//И спользованием класса

class Person2 {
    constructor(name) {
        this.name = name;
    }

    logInfo() {
        console.log(this.name);
    }
}

class AnotherPerson2 extends Person2 {
    constructor(name) {
        super(name);
    }

}
const anotherperson2 = new AnotherPerson2('Ann');
anotherperson2.logInfo();


//3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

class PersonNew extends SuperPerson {
    constructor(name) {
        super(name);
    }
}

// 4. Написать функцию которая вернет массив с первой парой чисел, сумма которых равна total

const firstSum = (arr, total) => {
    const numMap = new Map(arr.map((num, index) => [num, index]));
    for (let num of arr) {
        const complement = total - num;
        if (numMap.has(complement)) {
            return [num, complement];
        }
    }
    return [];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total)); 

//Сложность алгоритма составляет O(n). Cоздание numMap происходит за O(n), так как мы проходим 
//по всем элементам массива один раз и затем в худшем случае мы снова проходим весь массив в 
//цикле for за O(n). Получается O(2n), но множитель не влияет на сложность, поэтому его можно опустить



