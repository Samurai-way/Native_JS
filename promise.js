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

