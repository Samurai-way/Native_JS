// for (var i = 0; i < 10; i++) {
//     (function (j) {
//         setTimeout(()=> console.log(j),10)
//     })(i)
// }

// const test = {
//     prefix: '_',
//     tests: ['1','2','3'],
//     add(){
//         this.tests = this.tests.map((testName) => {
//             return `${this.tests} ${testName}`
//         })
//     }
// }
//
// test.add()
// console.log(test.tests)

// function User(name) {
//     this.name = name
// }
//
// const user = new User('Alex')
//
// console.log(user.isActive)
//
// User.prototype = {
//     isActive: true
// }
//
// console.log(user.isActive)

// function User(name) {
//     this.name = name
// }
//
// const user = new User('Alex')
//
// console.log(
//     user.constructor === User
// )
//
// User.prototype = {
//     isActive: true
// }
//
// console.log(
//     user.constructor === User
// )

// new Promise(() => {
//     setTimeout(() => {
//         return 'hello'
//     }, 1000)
// }).then((res) => `${res} world`)
//     .then((res) => `${res}!`)
//     .then(console.log)
//
// let a = 5
//
// Number.prototype.add = function () {
//     return a += 1
// }
//
// a = a.add()
//
// console.log(a)

// Object.prototype.toString = function () {
//     return 'custom'
// }
//
// const a = Object.create(null, {})
//
// console.log(a + '')

// console.log(a)
//
// {
//     var a = 6
// }

// {
//     let b = 6
// }
// console.log(b)

// test()
// {
//     function test() {
//         console.log('test')
//     }
// }

// for (var i = 0; i < 10; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(j)
//         }, 10)
//     })(i)
// }

// let a = 10
// function f() {
//     console.log(a)
// }
// f()


// let a = {
//     age: 15,
//     foo(){
//         console.log(this.age)
//     }
// }
// a.foo()

// const a = {
//     name: 'Dima',
//     pr: new Promise((res, rej)=>{
//         rej('Hello')
//     })
//         .then((res)=>console.log(res))
//         .catch(res => console.log(res))
//         .then(res => console.log(res))
//         .then(res => console.log(res))
// }

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Hello')
//     },2000)
// }).then(res => console.log(res))

// let pr = new Promise((res, rej) => {
//     setTimeout(()=>{
//         rej('hello')
//     },2000)
// }).then(res => console.log(res)).catch(res => console.log(res)).then(res => console.log(res))
//     .finally(res => console.log(res))

// function foo() {
//     let a = 3
//     function f() {
//         console.log(a)
//     }
// }
// foo()

// let obj = {
//     name: 'Dimas',
//     age: 10,
//     getName(){
//         console.log(this.name)
//     }
// }
// obj.getName()

// let obj = {
//     name: 'Dima',
//     f: function f() {
//         console.log(this.name)
//     }
// }
//
// const obj2 = {
//     f: obj.f
// }
//
// let og = {
//     name: 'Sasha',
//     f(){
//         console.log(this.name)
//     }
// }
//
// obj2.f.bind(og)()
//
// function User(f, n) {
//     this.f = f
//     this.n = n
// }
// let user2 = new (User.bind(obj))('hello', 'okey')
// console.log(user2)


// const object = {}
//
// function User(name, age) {
//     this.name = name
//     this.age = age
// }
//
// let pr = new (User.bind(object))('Dima', 10)
// console.log(pr)

// let a = 10
//
// console.log(a.__proto__.prototype === Number.__proto__.prototype)
//
// let pr = new Promise((res, rej) => {
//     let data = {name: 'Sasha', age: 12}
//     res(data)
// }).then(res => console.log(res))

// let a = 10
//
// const b = 15
// a = 15
// b = 1

// function f() {
//     let a = 15
//     function f1() {
//         console.log(a)
//     }
// }
// f()

// let a = {
//     name: 'Dima',
//     age: 15,
//     getName(){
//         console.log(this)
//     }
// }
//
// const b = {
//      name: 'Sasha'
//
// }
// a.getName.bind(b)()
//
// let a = 11
//
// function f() {
//     console.log(a)
// }
// f()
//
// function f(name) {
//     this.name = name
// }
// const aa = new f('Dima')
// console.log(aa)
//
// class Promise {
//
// }
//
// console.log(Promise.__proto__ === Function.prototype)

// class Promise {
//     constructor(name) {
//         this.name = name
//     }
//
//     showName(){
//         console.log(this.name)
//     }
// }
//
//
// const p = new Promise('Dima')
// const p2 = new Promise('Sasha')
// console.log(p)
//
// p.showName()
// p2.showName()

// let pr = new Promise((res,rej)=>{
//     let data = [1,2,3]
//
//     res(data)
// })
// .then((res)=>console.log(res))

// singleton

// class Promise {
//     getUsers(){
//         // wait - make request
//         console.log('get')
//     }
//     createUser(){
//         // wait - make request
//         console.log('set')
//     }
// }
//
// let api = new Promise()
// api.createUser()
// api.getUsers()

// 3 Pattern

// class MapManager {
//
//     constructor(props) {
//         this.props = props
//     }
//
//
//     load(){
//
//     }
//
//     getShops(){
//
//     }
//
//     drawMap(){
//         return 'canvas'
//     }
//
//     drawMap(){
//
//     }
// }

// proxy

let a = {
    yo(message) {
        console.log(message)
    }
}
let proxyA = {
    yo(message){
        a.yo(message)
    }
}

proxyA.yo('hello')