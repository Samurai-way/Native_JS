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
//
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     },100)
// }
// console.log('hi')
//
// setTimeout(()=> console.log('there'), 5000)
//
//console.log('you')

// function Rabbit() {}
//
// const rabbit = new Rabbit()
//
// Rabbit.prototype = {}
//
// const rabbit2 = new Rabbit()
//
// console.log(rabbit.constructor === Rabbit)
// console.log(rabbit2.constructor === Rabbit)

// const promise = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res('hello')
//     },2000)
// })

// const promise2 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('Alexey')
//     },2000)
//     rej('Error')
// }).catch(e => {
//     console.log(e)
// })

// const promise3 = Promise.all([promise, promise2]).then(res => console.log(res))

// let num = 10
//
// function add() {
//     this.num = 12
// }
// add()


// const man = {
//     name: 'Dima',
//     age: 10,
//     getName(){
//         console.log(this.age)
//     }
// }
// man.getName()


// function a() {
//     console.log(this.name)
// }
//
// a.apply({name: 'Dima'})

// let i = 0
//
// function foo() {
//     i += 1
// }
// foo()

// const promise = new Promise((res, rej) => {
//      res('12')
// }).then((res)=>{
//     console.log(res)
// })

// console.log(this)
//
// function foo() {
//     console.log(`hello ${this}`)
// }
// foo()
//
// const obj = {
//     name: 'Dima'
// }
// obj.f = foo()

// const foo = () => {
//     console.log(this)
// }
// foo()
// const a = 10
//
// function foo() {
//     console.log(a)
// }
// foo()

// const man = {
//     name: 'Dima', // <-----
//     age: 10,
//     getName(){
//         console.log(this.age)
//     }
// }
//
// man.getName()
//
// // 'use strict'
//
// function f() {
//     console.log(this.name)
// }
// f.bind({name: 'Okey'})()

// let a = 19
//
// function f() {
//     a += 1
// }
// f()
//
// console.log(a)
//
// let man = {
//     // name: 'Dima',
//     age: 10,
//     getName:() =>{
//         (()=>{
//             console.log(this.name)
//         })()
//     }
// }
//
// man.getName.bind({name: 'Dama'})()


// function User(name) {
//     this.name = name
// }
//
// const user = new (User.bind({age: 25}))()
// console.log(user)
//
// const promise = new Promise((res, rej) => {
//     rej(10)
// })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(`first: ${e}`)
//     })
//     .then((res)=>console.log(`second: ${res}`))
//     .finally((f) => {
//         console.log(f)
//     })

// setTimeout(()=>{
//     console.log(1) //5
// },3000)
//
// const p = new Promise((res)=>{
//     console.log(2) //1
//     res()
// }).then(()=>{
//     console.log(3) //3
// })
//
// setTimeout(()=>{
//     console.log(4) //4
// },1000)
//
// console.log(5)// 2
//
// let a = 10
//
// console.log(a.__proto__ === Number.prototype)

// function Car() {}
// Car.prototype.engine = 'default'
//
// function Ford(){}
// const ford = new Ford()
//
// Ford.prototype.__proto__ = Car.prototype
// console.log(ford.engine)


// const group = {
//     name: 'Samurai',
//     users: ['Alex', 'Hanna'],
//
//     showUsersWithGroup(){
//         const handler = function (user) {
//             console.log(`${this.name}: ${user}`)
//         }
//
//         group.users.forEach(handler)
//     }
// }
//
// group.showUsersWithGroup()


// function a(x,y) {
//     return x * y
// }
//
// const b = a.bind(null,2)
//
// console.log(b(2))
// console.log(b(3))


// const callCount = (fn) => {
//     let count = 0;
//
//     return [
//         (...args) => {
//             count += 1
//             fn(...args)
//         },
//         () => {
//             return count
//         }
//     ]
// }
//
// const add = (a,b) => {
//     return a + b
// }
//
// const [addCount, getCount] = callCount(add)
//
// addCount(1,2)
// addCount(1,3)
// addCount(2,5)
//
// console.log(getCount())

// function Rabbit() {}
//
// const whiteRabbit = new Rabbit()
//
// Rabbit.prototype = {
//     jumps: true
// }
//
// const blackRabbit = new whiteRabbit.constructor()
//
// console.log(whiteRabbit.constructor === Rabbit) // true
// console.log(whiteRabbit.jumps) // undifined
//
// console.log(blackRabbit.jumps) // true
// console.log(blackRabbit.constructor === Rabbit) // false

// setTimeout(() => {
//     console.log(1)
// }, 30)
//
// setTimeout(() => {
//     console.log(2)
// }, 20)
//
// setTimeout(() => {
//     console.log(3)
// }, 10)
//
//
// const p = new Promise((res) => {
//     console.log(4)
//
//     setTimeout(() => {
//         res(5)
//     }, 50)
// })
//
// p.then(res => console.log(res))
//
// Promise.resolve(6)
//     .then(res => console.log(res))

// 4,6,3,2,1,5


// class Promise {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// class B {
//     constructor(name) {
//         this.name = name
//         return 'D'
//     }
// }
//
// class C {
//     constructor(name) {
//         this.name = name
//         return {a: 1, b: 2, c: 3}
//     }
// }
//
// const a = new Promise('A')
// const b = new B('B')
// const c = new C('C')
//
// console.log(a.name)
// console.log(b.name)
// console.log(c.name)


// class Car {
//     name = 'car'
// }
//
// class User {
//     name = 'user'
// }
//
// class Road {
//     name = 'road'
// }
//
// const aggregate = (classes) => {
//     const res = {}
//
//     Object.defineProperty(res, 'showName', {
//         value: function () {
//             console.log(this.name)
//         },
//         enumerable: false
//     })
//
//     for (let i = 0; i < classes.length; i++) {
//         const instance = new classes[i]
//         res[instance.name] = instance
//     }
//
//     return res
// }
//
// const a = aggregate([Car, User, Road])
//
// Object.values(a)
//     .forEach(k => a.showName.call(k))

// console.log([].__proto__ === Array.prototype )
//
// console.log('1' + true)
// console.log([1] + true)
// console.log('2' * 3 * true)

// console.log(null == undefined)
// console.log(null === null)
// console.log({} + {})

// const a = {
//     name: 'a'
// }
//
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

// const b = {
//     name: 'b',
//     getName: function () {
//         return (() => this.name)()
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// Object.setPrototypeOf(c,b)
// console.log(c.getName())

// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//
//     hi2(){
//         (()=>{
//             console.log(this.age)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()

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
// Object.setPrototypeOf(b,{})
//
// b.showName()
//
// const arr = []
//
// console.log(arr.constructor === Array)
//
// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)
//
// let i;
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// console.log('a')
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
// Promise.resolve('Promise 1').then((res)=> console.log(res))
// Promise.resolve(setTimeout(()=> (console.log('Promise 2')),5))
//
// Promise.resolve('Promise 3').then(console.log)
//
// setTimeout(()=>{
//     console.log('timer 0')
// },0)
//
// console.log('d')

// a b d Promise 1, Promise 3, timer 0, Promise 2, timer 10, timer 20

// console.log('1' + true)
// console.log([1] + true)
// console.log('2' * 3 + true)

// 1true,
// 1true,
// 7

// console.log(null == undefined)
// console.log(null === null)
// console.log({} + {})

// true, true, Object, Object

// const a = {
//     name: 'a'
// }
//
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

// const b = {
//     name: 'b',
//     getName: function () {
//         return (()=> this.name)()
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// Object.setPrototypeOf(c,b)
// console.log(c.getName())

// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//
//     hi2(){
//         (()=>{
//             console.log(this.age)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()
//
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
//
// const arr = []
// console.log(arr.constructor === Array)
//
// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)
//
// let i
// for ( i = 0; i < 10; i++) {
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

//a, b, d, Prom1, Prom3, timer0, Prom2, timer10, timer20

// console.log('1' + true)
// console.log([1] + true)
// console.log('2' * 3 + true)
//1true, 1true, 7
//
// console.log(null == undefined)
// console.log(null === null)
// console.log([{}] + [{}])
//
// const a = {
//     name: 'a'
// }
//
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
// c.name = 'new c'
// b.name = 'new b'
//
// console.log(a.name)
// console.log(b.name)
// console.log(c.name)

// const b = {
//     name: 'b',
//     getName: function () {
//         return (()=> this.name)()
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// Object.setPrototypeOf(c,b)
// console.log(c.getName())

// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//
//     hi2() {
//         (() => {
//             console.log(this.age)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()

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
// b.showName()

// const arr = []
//
// console.log(arr.constructor === Array)
//
// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)
//
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)

// let i
// for (i = 0; i < 10; i++) {
//     setTimeout(()=>{
//         console.log(i)
//     },1)
// }


//a,b,d, Pro1, Pro3, tim0, Pro2, timer10, timer 20

// console.log('1false' + true)
// // 1true
//
// console.log([1] + true)
// //true
//
// console.log('2' * 3 + true)
//7

// console.log(null == undefined)
// console.log(null === null)
// console.log({} + {})

// let a = {
//     name: 'a'
// }
//
// let b = {
//     name: 'b'
// }
//
// let c = {
//     name: 'c'
// }
//
// c = b;
// b = a;
//
// c.name = 'new c'
// b.name = 'new b'
//
// console.log(a.name)
// console.log(b.name)
// console.log(c.name)

// const b = {
//     name: 'b',
//     getName: function () {
//         return (
//             () => this.name
//         )()
//     }
// }
//
// const c = {
//     name: 'cas'
// }
//
// Object.setPrototypeOf(c,b)
//
// console.log(c.getName())

// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//
//     hi2(){
//         (()=>{
//             console.log(this.age)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()

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
// const a = () => {}
// console.log(a.__proto__.__proto__.constructor === Object)
//
//
// arr.__proto__ = []
// console.log(arr.__proto__.__proto__ === Object.prototype)

// let i
// for (i = 0; i < 10; i++) {
//     setTimeout(()=>{
//         console.log(i)
//     },1)
// }
//
// console.log('a')
//
// console.log('b')
//
// setTimeout(() => {
//     console.log('timer 10')
// }, 10)
//
// setTimeout(() => {
//     console.log('timer 20')
// }, 20)
//
// Promise.resolve('Promise 1').then((res) => console.log(res))
// Promise.resolve(setTimeout(() => (console.log('Promise2')), 5))
// Promise.resolve('Promise 3').then(console.log)
//
// setTimeout(() => {
//     console.log('timer 0')
// }, 0)
//
// console.log('d')

//a,b,d, Pro1, Pro3, timer0, Pro2, timer10, timer20

// console.log('1' + true)
// console.log([1] + true)
// console.log('2' * 3 + true)
// 1true
// 1true
// 7

// const b = {
//     name: 'b',
//     getName: function(){
//         return (
//             () => this.name
//         )()
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// Object.setPrototypeOf(c,b)
//
// console.log(c.getName())

// const a = {
//     age: 25
// }
//
// const b = {
//     age: 23,
//
//     hi: () => {
//         console.log(this.age)
//     },
//
//     hi2(){
//         (()=>{
//             console.log(this.age)
//         }).call(a)
//     }
// }
//
// b.hi()
// b.hi2()

Object.prototype.name = 'Object'

Object.prototype.showName = function () {
    console.log(this.name)
}

const a = {
    name: 'a'
}

const b = Object.create(a)
b.showName()

Object.setPrototypeOf(b, {})
b.showName()