// reduce function polyfill/custom implementation
const numbers = [1, 3, 5, 7, 9, 12, 14]

Array.prototype.myReducer = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]
    let startIndex = initialValue !== undefined ? 0 : 1

    for (let i=startIndex; i<this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const result = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(result)
const sum = numbers.myReducer((acc, curr) => acc + curr)
console.log(sum)
const multiplierResult = numbers.myReducer((acc, curr) => acc * curr, 1)
console.log(multiplierResult)