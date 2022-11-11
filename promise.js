// let a = {}
//
// let b = {}
//
// console.log(a.__proto__ === b.__proto__)

// let users = []
// let cars = []
//
// console.log(users.__proto__ === cars.__proto__)

let promise = new Promise(()=>{})

console.log(promise.__proto__ === Promise.prototype)

let number = 10

console.log(number.__proto__ === Number.prototype)

let str = 'string'

console.log(str.__proto__ === String.prototype)

function f() {}

console.log(f.__proto__ === Function.prototype)

class Class {}

console.log(Class.__proto__ === Function.prototype)

let boolean = false

console.log(boolean.__proto__ === Boolean.prototype)