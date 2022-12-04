// // constructor pattern
//
// class Server {
//     constructor(name, ip) {
//         this.name = name
//         this.ip = ip
//     }
//
//     getURL() {
//         return `https://${this.ip}:80`
//     }
// }
//
// const aws = new Server('AWS German', '82.21.21.32')
// console.log(aws.getURL())
//
// // constructor 2
// class Promise {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     showAge() {
//         return console.log(this.name, this.age)
//     }
// }
//
// const newAge = new Promise('Dima', 14)
// console.log(newAge.showAge())
//
// // constructor 3
//
// class Test {
//     constructor(ip, name) {
//         this.ip = ip
//         this.name = name
//     }
//
//     showName() {
//         return this.name + 'Haha'
//     }
// }
//
// const test = new Test('21.52.11', 'Sasha ')
// console.log(test.showName())
//
// // constructor 4
//
// class Test2 {
//     constructor(name, phone) {
//         this.name = name
//         this.phone = phone
//     }
//
//     showThere() {
//         console.log('name: ', this.name, 'phone: ', this.phone)
//     }
// }
//
// const other = new Test2('Dima', 'iphone XS')
// console.log(other.showThere())
//
// // constructor 5
//
// class Fruvita {
//     constructor(age, name, surname) {
//         this.age = age
//         this.name = name
//         this.surname = surname
//     }
//     showThere(){
//         console.log(this.name, this.age, this.surname)
//     }
// }
//
// const person = new Fruvita(22, 'Dimas', 'Pupkin')
// console.log(person.showThere())

// prototype

// // const car = {
// //     wheels: 4,
// //     init(){
// //         console.log(` у меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
// //     }
// // }
// //
// // const carWithOwner = Object.create(car, {
// //     owner: {
// //         value: 'Dima'
// //     }
// // })
// //
// // carWithOwner.init()
//
// const person = {
//     hand: 2,
//     lenght(){
//         console.log(`у меня ${this.hand} руки и мы дружим с ${this.person}`)
//     }
// }
//
// const personFriend = Object.create(person,{
//     person: {
//         value: 'Dimas'
//     }
// })
//
// console.log(personFriend.__proto__ === person)
// personFriend.lenght()

// singleton
//
// class Database {
//     constructor(data) {
//         if(Database.exists){
//             return Database.instanse // pattern singleton
//         }
//         Database.instanse = this
//         Database.exists = true
//         this.data = data
//     }
//
//     getData(){
//         return this.data
//     }
// }
//
// const mongo = new Database('MongoDB')
// const mySQL = new Database('MySQL')
// console.log(mongo.getData())
// console.log(mySQL.getData())

// 5_adapter

// class OldCalc {
//     operations(t1, t2, operation) {
//         switch (operation) {
//             case 'add':
//                 return t1 + t2
//             case 'sub':
//                 return t1 - t2
//             default:
//                 return NaN
//         }
//     }
// }
//
// class NewCalc {
//     add(t1,t2){
//         return t1 + t2
//     }
//     sub(t1,t2){
//         return t1 - t2
//     }
// }
//
// class CalcAdapter {
//     constructor() {
//         this.calc = new NewCalc()
//     }
//     operation(t1,t2, operation){
//         switch (operation){
//             case 'add':
//                 return t1 + t2
//             case 'sub':
//                 return t1 - t2
//             default:
//                 return NaN
//         }
//     }
// }
//
// const oldCalc = new OldCalc()
// console.log(oldCalc.operations(10,5,'add'))
// const newCalc = new NewCalc()
// console.log(newCalc.add(10,5))
// const adapter = new CalcAdapter()
// console.log(adapter.operation(25,10,'sub'))

// decoration

// class Server {
//     constructor(ip, port) {
//         this.ip = ip
//         this.port = port
//     }
//     getUrl(){
//         return `https://${this.ip}:${this.port}`
//     }
// }
//
// function aws(server) {
//     server.isAws = this
//     server.awsInfo = function (){
//         return server.url
//     }
//     return server
// }
//
// const s1 = aws(new Server('12.34.52.11', 9010))
// console.log(s1.isAws)
// console.log(s1.awsInfo())
//
// function azure(server) {
//     server.isAsure = true
//     server.port += 500
//     return server
// }
//
// const s2 = azure(new Server('98.87.76', 1000))
// console.log(s2.isAsure)
// console.log(s2.url)

//                          proxy

function networkFetch(url) {
    return `${url} - ответ с сервера`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - ответ из кеша`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, argArray)
        }
    }
})

console.log(proxiedFetch('react'))
console.log(proxiedFetch('redux'))
console.log(proxiedFetch('ts'))

                                    // change of responsibility

class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(9).add(10).add(2).sum)

const sum2 = new MySum(0)

console.log(sum2.add(2).add(2).add(15))