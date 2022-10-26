// // Promise
//
// // const promise = new Promise((res, rej) => {
// //     setTimeout(()=>{
// //         res()
// //     },1000)
// // }).then(()=>{
// //     console.log('hello')
// // }).then(()=>{
// //     console.log('hello2')
// // }).then(()=>{
// //     console.log('hello3')
// // })
//
//
// //замыкание
//
// // function foo() {
// //
// // }
// // у функции есть свойство inviriment которое знает в каком лексическом окружении она создана
//
//
// //this
//
// // class Person{
// //     constructor(name, age) {
// //         this.name = name,
// //         this.age = age
// //     }
// //     setAge(){
// //         console.log(this.age)
// //     }
// //     setName(){
// //         console.log(this.name)
// //     }
// // }
// // const Man = new Person('Dima', 15)
// //
// // Man.setName()
// // Man.setAge()
// //наследование
//
// // class Script {
// //    a = 10;
// //     b = 15
// //     constructor(a,b) {
// //         this.a = a
// //         this.b = b
// //     }
// // }
// // class Person extends Script{
// //    constructor(a) {
// //        super(a);
// //    }
// // }
// // let foo = () => {
// //
// // }
// // let boo = () => {
// //
// // }
// // foo.__proto__ = boo
// //
// // foo.__proto__ = boo
// // foo.prototype.__proto__ = boo.prototype
//
// // let arr = Array.prototype.myMap = function () {
// //
// // }
// //
// // console.log(1 * '2a')
// // console.log(5 * '12aa')
// // console.log({} + {
// //     toString(){
// //         return '{}'
// //     }
// // })
//
// // console.log( [ 1, 2 ] + [1,2,3])
// // console.log([1,2] - [1,2,3])
//
// // const a = {
// //     name: 'a'
// // }
// // const b = {
// //     name: 'b',
// //     hi(){
// //         (()=>{
// //             console.log(this.name)
// //         }).call(a)
// //     }
// // }
// // const c = {
// //     name: 'c'
// // }
// // b.hi.call(c)
//
// // this.age = 40
// //
// // const a = {
// //     age: 10,
// //
// //     first(){
// //         console.log(this.age)
// //     },
// //
// //     second(){
// //         (()=>{
// //             console.log(this.age)
// //         })()
// //     },
// //
// //     third:()=>{
// //         console.log(this.age)
// //     }
// // }
// //
// // a.first()
// // a.second()
// // a.third()
// // const group = {
// //     name: 'Samurai',
// //     users: ['Alex', 'Hanna'],
// //
// //     showUsersWithGroup(){
// //         this.users.forEach(function (user){
// //             console.log(`${this.name}: ${user}`)
// //         })
// //     }
// // }
// //
// // group.showUsersWithGroup()
// // const user = {
// //     sleep(){
// //         this.isSleeping = true
// //     }
// // }
// //
// // const john = {}
// //
// // john.__proto__ = user
// //
// // john.sleep()
// //
// // console.log(john.isSleeping)
// // console.log(
// //     [].__proto__.__proto__.__proto__ == null
// // )
// // console.log(
// //     (()=>{}).__proto__.__proto__ === Object.prototype
// // )
// //
// // console.log(
// //     Object.__proto__ === (()=>{}).__proto__
// // )
//
// // function Rabbit() {}
// //
// // const rabbit1 = Rabbit()
// //
// // Rabbit.prototype = {}
// //
// // const rabbit2 = new Rabbit()
// //
// // console.log(
// //     rabbit1.constructor === Rabbit
// // )
// //
// // console.log(
// //     rabbit2.constructor === Object
// // )
//
// //true, true
//
// // setTimeout(()=>{
// //     console.log(1)
// // },30)
// //
// // setTimeout(()=>{
// //     console.log(2)
// // },10)
// //
// // new Promise((res) => {
// //     console.log(3)
// //     res()
// //     console.log(4)
// // }).then(()=>{
// //     console.log(5)
// // })
// //
// // async function test1(){
// //     console.log(6)
// //     await test2()
// //     console.log(9)
// // }
// //
// // async function test2(){
// //     console.log(8)
// // }
// // test1()
//
// // console.log(
// //     {} + {}
// // )
//
// // console.log(
// //     {} + 'hello'
// // )
// //
// // console.log(
// //     20 / {}
// // )
//
// // const user = {
// //     name: 'Alex',
// //     age: 12,
// //     [Symbol.toPrimitive]: function (hint) {
// //         console.log(hint)
// //     }
// // }
// //
// // console.log(user + 5)
//
// // const a = Symbol('Dima')
// // console.log(a)
//
// // const rect = {
// //     x: 6,
// //     y: 10,
// //     [Symbol.toPrimitive]: function (hint) {
// //         console.log(hint)
// //         if (hint === 'number') {
// //             return this.x * this.y
// //         }
// //         return 'Object'
// //     }
// // }
// //
// // const rect2 = {
// //     x: 2,
// //     y: 5,
// //     [Symbol.toPrimitive]: function (hint) {
// //         console.log(hint)
// //         if (hint === 'number') {
// //             return this.x * this.y
// //         }
// //         return 'Object'
// //     }
// // }
// //
// // console.log(rect > rect2 ? 'yes' : 'no')
//
//
// // const user = {
// //     age: 'alex',
// //     toString(){
// //         return 'hello'
// //     },
// //     valueOf(){
// //         console.log('hello')
// //         return 5
// //     }
// // }
// //
// // // console.log(user * 10)
// //
// // // user * 10
// //
// // // String(user)
// //
// // console.log(String(user))
//
// // console.log(
// //     ({}) / 5
// // )
//
// // console.log(
// //     // [1,2,3].toString()
// //     [{},{}].toString()
// // )
//
// // console.log(
// //     {} + 1
// // )
// //
// // const a = {}
// // const b = {}
// // a[b] = 10
// //
// // console.log(a)
//
// // let a = '10'
// // console.log(+a)
//
// // const nums = [1,2,3]
// //
// // const iterator = nums[String.iterator]
// // // console.log(iterator)
// //
// // const nums = [1,2,3]
// //
// // while (true){
// //     const current = iterator.next()
// //     if(current.done) break
// //     console.log(current.value)
// // }
// // const foo = (str)=>{
// //     let arr = []
// //     for (const arrElement of str) {
// //         arr.push(arrElement)
// //     }
// //     return arr
// // }
// // console.log(foo('hello'))
//
// // console.log(
// // Array.from([1, 2, 3])
// // )
// // const user = {
// //     name: 'Alex'
// // }
// // user.age = 10
// // delete user.name
// // delete user.age
// // console.log(user)
// //
// // const user = {
// //     name: 'Alex'
// // }
// //
// // const user1 = Object.create(Object.prototype,{
// //     name:'Dima',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// // })
// //
// // console.log(user1)
//
// // const user = {
// //     name: 10
// // }
// //
// // const user2 = {}
// //
// // Object.defineProperties(user2, 'age', {
// //     first: 'one',
// //     second: 'two'
// // })
// //
// // console.log(user2)
//
// const user = {
//     name: {
//         value: 'str',
//         writable: true,
//         configurable: true
//     }
// }
// console.log(user)
//
// for (const k in user) {
//     console.log(k)
// }

let user = {
    age: 10
}
Object.preventExtensions(user)
user.name = 'Dima'
console.log(user)