// Базовый:
// Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:
// pattern(5):
//     1    
//    121  
//   12321  
//  1234321
// 123454321
//  1234321
//   12321  
//    121  
//     1 

function pattern(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const incrNumbers = [...Array(i).keys()].map(x => x + 1).join('');
        const decrNumbers = incrNumbers.slice(0, -1).split('').reverse().join('');
        result.push(spaces + incrNumbers + decrNumbers);
    }

    for (let i = n - 2; i >= 0; i--) {
        result.push(result[i]);
    }

    console.log(result.join('\n'));
}

pattern(5);

// Продвинутый:
// Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число, отображающее количество элементов на странице.

class PaginationUtil {
    constructor(arr, num) {
        this.arr = arr;
        this.num = num;
    }

    pageCount() {
        return Math.ceil(this.arr.length / this.num);
    }

    itemCount() {
        return this.arr.length;
    }

    pageItemCount(pageNum) {
        if (pageNum >= this.pageCount() || pageNum < 0)
            return -1;
        if (pageNum < this.pageCount() - 1)
            return this.num;
        return this.arr.length % this.num;
    }

    pageIndex(index) {
        if (index > this.arr.length || index < 0)
            return -1;
        return Math.floor(index / this.num);
    }
}

const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(`Page count: ${helper.pageCount()}`); // 2
console.log(`Item count: ${helper.itemCount()}`); // 6

console.log(`Page item count 0: ${helper.pageItemCount(0)}`); // 4
console.log(`Page item count 1: ${helper.pageItemCount(1)}`); // 2
console.log(`Page item count 2: ${helper.pageItemCount(2)}`); // -1

console.log(`Page index 5: ${helper.pageIndex(5)}`); // 1
console.log(`Page index 2: ${helper.pageIndex(2)}`); // 0
console.log(`Page index 20: ${helper.pageIndex(20)}`); // -1
console.log(`Page index -10: ${helper.pageIndex(-10)}`); //-1