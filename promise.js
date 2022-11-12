





let m = {
    n: 10
}
console.log(m.prototype) // false
console.log(m.__proto__ === Object.prototype) // true
console.log(m.__proto__ === Object.prototype) // true

let num = [1,2,3,4]
console.log(num.prototype)// false
console.log(num.__proto__ === Array.prototype)// true
console.log(num.__proto__ === Array.prototype)// true

true

class Class {

}

console.log(Class.__proto__ === Function.prototype) // true

false

let shogun = new Class()
let shogu1 = new Class()
console.log(shogun.__proto__ === Class.prototype) // true
console.log(shogun.__proto__ === shogu1.__proto__) // true





