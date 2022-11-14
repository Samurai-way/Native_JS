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

let num = 'a'

function logName() {
    console.log(num)
}

num = 'b'
logName.bind({num: 'c'})()