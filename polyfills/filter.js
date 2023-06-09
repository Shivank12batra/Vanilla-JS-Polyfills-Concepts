// polyfill for filter
const arr = [1, 3, 5, 7, 9, 12, 14]

const filterOddNums = num => num % 2 === 0

const greaterThanTen = num => num > 10

const filter = (arr, fn) => {
    const newArr = []
    for (var i=0; i<arr.length; i++) {
        const element = arr[i]
        if (fn(element)) newArr.push(element)
    }
    return newArr
}

const filteredArr = filter(arr, filterOddNums)
const greaterThanArr = filter(arr, greaterThanTen)
console.log(filteredArr)
console.log(greaterThanArr)