// foo()
//
// function foo() {
//     bar()
//     {
//         function bar() {
//             console.log('bar')
//         }
//     }
// }
//
// let a = () => {
//     console.log('a')
// }
//
// const run = (cb) => {
//     setTimeout(cb, 1000)
// }
//
// a = () => {
//     console.log('new a')
// }

// const a = {
//     mag: 'Hello world',
//     getMag(){
//         const msg = 'hello'
//         console.log(this.mag)
//     }
// }
//
// a.getMag()

// this.name = 'global'
//
// const a = {
//     name: 'a',
//     logName: () => {
//         console.log(this.name)
//     }
// }
//
// setTimeout(a.logName, 100)

// const a = {
//     name: 'a',
//     getName(){
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// const c = {
//     name: 'c'
// }
//
// a.getName()
// const foo = a.getName.bind(b)
// a.getName()
// a.getName.call(b)
// foo.call(c)
//
//
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
//
// const c = {
//     name: 'c'
// }
//
// b.hi.call(c)
//
// const a = Object.create({}, {})
// const b = {}
//
// b[a] = 'a'
// console.log(b)

// Object.prototype.name = 'Object'
//
// const a = {
//     getName(){
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'b'
// }
//
// a.getName()
//
// b.__proto__ = a
//
// b.getName()
//
// const c = Object.create(a,{
//     name: {
//         value: 'c'
//     }
// })
//
// c.getName()

// const user = {
//     sleep(){
//         this.isSleeping = true
//     }
// }
//
// const john = {}
//
// john.__proto__ = user
// john.sleep()
//
// console.log(john.isSleeping)

// console.log(Object.__proto__ === Function.prototype)
//
// const arr = []
// console.log(arr.constructor === Array)
//
// const a = () => {
//     console.log(a.__proto__.__proto__.constructor === Object)
// }
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)
//
// class BaseUser {}
//
// class Class extends BaseUser{
//     constructor(name) {
//         super();
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
// }
//
// const user = new Class('Dimas')
//
// console.log(user.__proto__ === Class.prototype)
// console.log(typeof Class)
// console.log(Class === Class.prototype.constructor)
// console.log(Class.__proto__ === Function.prototype)

// class Promise {
//     getName(){
//         return this.name
//     }
//
// }
//
// const b = Object.create(Promise,{
//     name: {
//         value: 'b'
//     }
// })
//
// console.log(b.getName())
//
// class Class {
//     constructor(name) {
//         this.name = name
//         if(!name){
//             return {name: 'No test name'}
//         }
//     }
// }
//
// const t = new Class()
// const tl = new Class('Should return undefined')
//
// console.log(t.__proto__ === tl.__proto__)


// function Test() {
//     this.name = name
//     if(!name){
//         return {name: 'No test name!'}
//     }
// }
//
// const t = new Test()
//
// const tl = new Test('Should return undefined!')
//
// console.log(t.__proto__ === tl.__proto__)
//
// Promise
//     .resolve(10)
//     .then(res => console.log(res))
//     .then(res => Promise.resolve(res))
//     .then(console.log)
//     .then(res => {
//         if(!res) throw new Error('New error')
//     })
//     .then(res => console.log(res.message))
//     .catch(res => console.log(res.message))

// const arr = [1,2,3,4,5]
//
// const [a,b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)

// let [a,b,c] = 'abs ccc';
// console.log(a,b,c)
//
// let user = {
//     name: 'Default Name'
// }
//
// [user.name, user.surname] = 'Name Surname'.split('')
// console.log(user.name)

// let num = 'a'
//
// function logName() {
//     console.log(num)
// }
//
// num = 'b'
// logName.bind({num: 'c'})()
//
// function User(name) {
//     this.name = 'default'
//     this.sayHi = ()=>{
//         console.log(name)
//     }
// }
//
// const user = new User('John')
// // user.sayHi()
//
// console.log([].__proto__.__proto__ === null)
//
// console.log(
//     (()=>{}).__proto__.__proto__ === Object.prototype)


// const a = {
//     name: 'a',
//     logName: () => {
//         console.log(this.name)
//     }
// }
//
// setTimeout(a.logName, 100)

// const arr = [1,2,3,4,5]
//
// const [a,b, ...c] = arr
//
// console.log(a)
// console.log(b)
// console.log(c)

// function User() {}
//
// User.prototype = {}
//
// const user = new User.prototype.constructor()
//
// console.log(user.constructor === User)
//
// let obj = Object.create(Object.prototype,{
//     name: {
//         value: 'Alex',
//         enumerable: true
//     }
// })
//
// Object.defineProperty(obj, 'name', {
//     value: 'Alex',
//     enumerable: true,
//     writable: true,
//     configurable: false
// })
//
// Object.defineProperty(obj, 'name', {
//     value: 'Alex',
//     enumerable: false
// })
//
// console.log(obj)
//
// console.log('log')
//
// while(true){
//     // console.log('in loop')
// }
// // setTimeout(console.log,0,'setTimeout')
// Promise.resolve('promise')

// console.log('6' / '2a') // NaN
// console.log('6' * '2') // 12
// console.log('6' + '2') //62
// console.log('6' - '2') //4
// console.log('2' + true) //2true
// console.log(null === undefined) // false
// console.log(null === null) // true
// console.log(undefined === undefined) //true

// const a = {}
// const b = {}
//
// a[b] = 'b'
// console.log(a)
//
// const arr = [
//     {id: 1, name: 'Dima'}
// ]
//
// const arr2 = arr.map(e => {
//     return ({...e, name: 'Sosa'})
// })
// console.log(arr2)

// (()=>{
//     let a = b = 45
// })()
//
// // console.log(a)
// console.log(b)

// const a = {
//     name: 'a',
//     logName(){
//         console.log(this.name)
//     }
// }
//
// setTimeout(a.logName, 100)

// const a = {
//     isMale: true,
//     age: 20,
//
//     getIsMale:() => {
//         return this.getIsMale
//     },
//
//     getAge: function () {
//         const age = 24
//         return this.age
//     }
// }
//
// console.log(
//     a.getIsMale()
// )
//
// console.log(
//     a.getAge()
// )

// Object.prototype.getName = function () {
//     return this.name
// }
//
// const a = {
//     name: 'a'
// }
//
// const b = {
//     name: 'b'
// }
//
// const c = {
//     name: 'c'
// }
//
// console.log(
//     a.getName.bind(b)
//         .bind(c)()
// )
//
// console.log(a.getName()
//     .bind(c)
//     .call(b)
// )

//
// function User(name) {
//     this.name = name
//     return 'User'
// }
//
// function Car(engine) {
//     this.engine = engine
//     return {}
// }
//
// const user = new User('Alex')
// const car = new Car('b8')
//
// console.log(user.name)
// console.log(car.engine)
//
// const watchBalance = function (cb) {
//     let count = 0
//
//     return function () {
//         cb()
//         console.log(`Balance ${++count} times`)
//     }
// }
//
// const wallet = {
//     money: 100,
//     currency: 'USA',
//     watchBalance(){
//         console.log(`${this.money} ${this.currency}`)
//     }
// }
//
// wallet.watchBalance = watchBalance(wallet.watchBalance)
//
// wallet.watchBalance()
// wallet.watchBalance()
// wallet.watchBalance()

// console.log([1,2,3] + true)
// console.log('2' * 3 + true + true + false)
// console.log('2' + 3)
// console.log({} + {})

// const a = {
//     name: 'a'
// }
// let b = {
//     name: 'b'
// }
//
// let c = {
//     name: 'c'
// }
//
// c = b
// b = a
//
// c.name = 'new c'
// b.name = 'new b'
//
// console.log(a.name)
// console.log(b.name)
// console.log(c.name)

// const a = {
//     name: 'a'
// }
//
// const b = {
//     name: 'b',
//     getName: () =>{
//         (()=>{
//             console.log(this.name)
//         }).call(a)
//     }
// }
//
// b.getName()

// Object.prototype.name = 'Object'
//
// Object.prototype.showName = function () {
//     console.log(this.name)
// }
//
// const a = {
//     name: 'a'
// }
//
// const b = Object.create(a)
// b.showName()
//
// Object.setPrototypeOf(b, {})
//
// b.showName()

// const arr = []
// console.log(arr.constructor === Array)
//
// const a = () => {
//     console.log(a.__proto__.__proto__.constructor === Object)
// }
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)


// function Person(name, age) {
//     this.name = name
//     this.age = age
//
//
//     this.getInfo = function () {
//         return this.name;
//     };
// }
//
//
//     Person.prototype.getInfo() = function () {
//         return `${this.name} ${this.age}`;
//  };
//
// const java = new Person('JS', 24)
// console.log(java.getInfo());

// console.log('a')
//
// console.log('b')
//
// setTimeout(()=>{
//     console.log('timer 10')
// },10)
//
// setTimeout(()=>{
//     console.log('timer 20')
// },20)
//
// Promise.resolve('Promise 1').then((res) => console.log(res))
// Promise.resolve(setTimeout(()=> (console.log('Promise 2')), 5))
//
// Promise.resolve('Promise 3').then(console.log)
//
// setTimeout(()=>{
//     console.log('timer 0')
// }, 0)
//
// console.log('d')

// a, b,d, Promise 1, Promise 3, timer 0, Promise 2, timer 10, timer 20

// let arr = [1,125,14,22,7,3,2]

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    },100)
}
console.log('hi')

setTimeout(()=> console.log('there'), 5000)

console.log('you')
