// Promise

// const promise = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res()
//     },1000)
// }).then(()=>{
//     console.log('hello')
// }).then(()=>{
//     console.log('hello2')
// }).then(()=>{
//     console.log('hello3')
// })


//замыкание

// function foo() {
//
// }
// у функции есть свойство inviriment которое знает в каком лексическом окружении она создана


//this

// class Person{
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }
//     setAge(){
//         console.log(this.age)
//     }
//     setName(){
//         console.log(this.name)
//     }
// }
// const Man = new Person('Dima', 15)
//
// Man.setName()
// Man.setAge()
//наследование

// class Script {
//    a = 10;
//     b = 15
//     constructor(a,b) {
//         this.a = a
//         this.b = b
//     }
// }
// class Person extends Script{
//    constructor(a) {
//        super(a);
//    }
// }
// let foo = () => {
//
// }
// let boo = () => {
//
// }
// foo.__proto__ = boo
//
// foo.__proto__ = boo
// foo.prototype.__proto__ = boo.prototype

// let arr = Array.prototype.myMap = function () {
//
// }
//
// console.log(1 * '2a')
// console.log(5 * '12aa')
// console.log({} + {
//     toString(){
//         return '{}'
//     }
// })

// console.log( [ 1, 2 ] + [1,2,3])
// console.log([1,2] - [1,2,3])

// const a = {
//     name: 'a'
// }
// const b = {
//     name: 'b',
//     hi(){
//         (()=>{
//             console.log(this.name)
//         }).call(a)
//     }
// }
// const c = {
//     name: 'c'
// }
// b.hi.call(c)

// this.age = 40
//
// const a = {
//     age: 10,
//
//     first(){
//         console.log(this.age)
//     },
//
//     second(){
//         (()=>{
//             console.log(this.age)
//         })()
//     },
//
//     third:()=>{
//         console.log(this.age)
//     }
// }
//
// a.first()
// a.second()
// a.third()