const arr = [1, 3, 5, 7, 9, 12, 14]

const multiplyByTwo = num => num * 2

const map = (arr, fn) => {
    const newArr = []
    for (var i=0; i<arr.length; i++) {
        const element = arr[i]
        newArr.push(fn(element))
    }
    return newArr
}

const newArr = map(arr, multiplyByTwo)
console.log(newArr)