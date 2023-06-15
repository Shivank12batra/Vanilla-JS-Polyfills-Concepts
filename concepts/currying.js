// addition simple function
// function addition(a, b, c) {
//     return a + b + c
// }

// const res = addition(1, 2, 3)
// console.log(res)

function addition(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const res = addition(2)(3)(5)
console.log(res)

userProfile = {
    name : 'Shivank',
    age : 28
}

function userInfo(obj) {
    return function(info) {
        return obj[info]
    }
}

const info = userInfo(userProfile)('age')
console.log(info)