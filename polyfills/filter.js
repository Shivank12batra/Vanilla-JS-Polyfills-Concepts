const numbers = [1, 3, 5, 7, 9, 12, 14]

const filterOddNums = num => num % 2 === 0

const greaterThanTen = num => num > 10

Array.prototype.myFilter = function(func) {
    let filtered = []
    console.log(this)
    for (let i=0; i<this.length; i++) {
        if (func(this[i], i, this)) {
            filtered.push(this[i])
        }
    }
    return filtered
}

// const filter = (arr, fn) => {
//     const newArr = []
//     for (var i=0; i<arr.length; i++) {
//         const element = arr[i]
//         if (fn(element)) newArr.push(element)
//     }
//     return newArr
// }

const filteredArr = numbers.myFilter(filterOddNums)
const greaterThanArr = numbers.myFilter(greaterThanTen)
console.log(filteredArr)
console.log(greaterThanArr)