





// let m = {
//     n: 10
// }
// console.log(m.prototype) // false
// console.log(m.__proto__ === Object.prototype) // true
// console.log(m.__proto__ === Object.prototype) // true
//
// let num = [1,2,3,4]
// console.log(num.prototype)// false
// console.log(num.__proto__ === Array.prototype)// true
// console.log(num.__proto__ === Array.prototype)// true
//
// true
//
// class Class {
//
// }
//
// console.log(Class.__proto__ === Function.prototype) // true
//
// false
//
// let shogun = new Class()
// let shogu1 = new Class()
// console.log(shogun.__proto__ === Class.prototype) // true
// console.log(shogun.__proto__ === shogu1.__proto__) // true
//
// const component = () => {
//
// }
//
// console.log(component.__proto__ === Function.prototype)

// console.log(({}) === ({}).__proto__)
// function f() {}
//
// console.log(f.prototype === f.__proto__)

// function f() {}
// function f1() {}
//
// console.log(f.__proto__ === f1.__proto__)
// console.log(f.prototype === f1.prototype)
//
// let a = () => {
//
// }
// console.log(a.prototype === Object.prototype)

// let afe = 10
// console.log(afe.prototype === Number.prototype)
// console.log(afe.__proto__ === Number.prototype)

class Promise {

}

console.log(Promise.__proto__ === Function.prototype)

function f() {

}

console.log(f.__proto__ === Function.prototype)

let count = 10

console.log(count.__proto__ === Number.prototype)