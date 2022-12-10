
// const regex = /358\d{7}/;
// const regexText = /@gmail.\w{3}/;
// const emailName = /^[a-z]+@gmail\.com$/ // начало от a до z, а конец @gmail.com и только точка и ничего другого
// const trueRes = /^\w+@gmail\.com$/
// const trueName = /^oleg+@mail\.ru$/
// const reg = /^http\w{0,}:\/\/tut\.by$/
//
// console.log(reg.test('httpsasfaf://tut.by'))
// // console.log(trueName.test('oleg@mail.ru'))
// // console.log(regex.test(358111111))
// // console.log(regexText.test('oleg@gmail.cm'))
// // console.log(emailName.test('aassasaz@gmail,com'))
// // console.log(trueRes.test('oleg@gmail.com'))


// let obj1 = {
//     title: "title",
//     items: [
//         {
//             id: "id20029",
//             likeList:
//                 [
//                     {
//                         likeCount: '22',
//                         dislikeCount: '23'
//                     }
//                 ]
//         }
//     ]
// }
//
// const copyObj = {
//     ...obj1,
//     items: obj1.items.map((item) => ({
//         ...item,
//         likeList: item.likeList.map(like => ({ ...like }))
//     })),
// }
//
// const a = JSON.parse(JSON.stringify(obj1))
// console.log(a)

// let arr = [1,2,3,4,5,11,2,3,4,5,1111,222]
//
// let filt = arr.filter(el => el !== 2)
// console.log(filt)

                                                // js sobes

// console.log(5 + '2') // '52'
// console.log(5 - '2') // 3
// console.log(5 * '2') // 10
// console.log(true + true) // 2
// console.log([12,2,3] + {}) // 12,2,3ObjObj



                                               // 2

// const user = {
//     name: 'Dima',
//     hello() {
//         const name = 'Hanna'
//         console.log(`hello', ${this.name}`)
//     }
// }
//
// setTimeout(()=>user.hello(), 1000)

                                            // 3


// const  a = {
//     name: 'DIma',
//     toString() {
//         return 'a'
//     },
//
//     go: function () {
//         console.log(this.toString())
//     },
//
//     run: () => {
//         console.log(this.name)
//     },
//
//     stop: function () {
//         (() => {
//             console.log(this)
//         })()
//     }
// }
//
// a.go() // a
// a.run() // und
// a.stop() // Obj
                                            // 4

// function User(name) {
//     this.name = name
//     return this
// }
//
// const admin = new User('Alex')
// const developer = User('Hanna')
//
// name = 'John'
//
// console.log(admin.name)
// console.log(developer.name)

                                            // 5

// console.log('6' / '2') // 3
// console.log('6' * '2') // 12
// console.log('6' + '2') // '62'
// console.log('6' + 2) // '62'
// console.log('6' - 2) // 4
// console.log(null == undefined) // false
// console.log(null === null) //  true
// console.log(NaN === NaN) // false
// console.log(typeof undefined) // str
// console.log(typeof NaN) // Number
// console.log(undefined === undefined) // true
// console.log('2' + true) // '2true'

                                            // 6

// const a = {}
// const b = {}
//
// a[b] = 'b'
// console.log(a)

                                            // 7

// (()=>{
//     let a = b = 42
// })()
//
// console.log(typeof  a === 'undefined')
// console.log(typeof  b === 'undefined')

                                            // 8

// const a = {
//     name: 'a',
//     logName(){
//         console.log(this.name)
//     }
// }
//
// setTimeout(a.logName, 100)

                                            // 9

// const a = {
//     isMale: true,
//     age: 21,
//
//     getIsMale: () => {
//         return this.isMale
//     },
//     getAge: function () {
//         const age = 24
//         return this.age
//     }
// }
//
// console.log(a.getIsMale())
// console.log(a.getAge())

                                            // 10

// Object.prototype.getName = function () {
//     return this.name
// }
//
// const a = {name: 'a'}
// const b = {name: 'b'}
// const c = {name: 'c'}
//
// console.log(
//     a.getName.bind(b).bind(c)()
// )
//
// console.log(
//     a.getName.bind(c).call(b)
// )
// // b c

// let obj1 = {
//     title: "title",
//     items: [
//         {
//             id: "id20029",
//             likeList:
//                 [
//                     {
//                         likeCount: '22',
//                         dislikeCount: '23'
//                     }
//                 ]
//         }
//     ]
// }
//
// const copy = {...obj1, items: obj1.items.map(el => ({...el, likeList: el.likeList.map(l => ({...l}))}))}
//
// const nums = [1,2,3,4]
// const names = ['Hanna', 'Alex']
//
//
// Array.prototype.myMap = function (e) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr.push(e(this[i]))
//     }
//     return arr
// }
//
// console.log(nums.myMap((n) => {
//     return n + 1
// }))
//
// console.log(names.myMap((n,i) => ({name: n, index: i})))

const nums = [1,2,3,4]
const names = ['Hanna', 'Alex']

Array.prototype.myFilter = function (e) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if(e(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}

console.log(nums.myFilter(n => n % 2 === 0))
console.log(names.myFilter(n => n.indexOf('e') >= 0))








Array.prototype.myMap = function (cb){
    let term = []
    for (let index = 0; index < this.length; index++) {
        term.push(cb[this[index]])
    }
    return term
}


Array.prototype.myFilter = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}