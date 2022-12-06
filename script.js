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

// console.log(5 + '2')
// console.log(5 - '2')
// console.log(5 * '2')
// console.log(true + true)
// console.log([12,2,3] + {toString() {return 'a'}})


                                            // 2

// const user = {
//     name: 'Dima',
//     hello: function () {
//         const name = 'Hanna'
//         console.log(`hello', ${this.name}`)
//     }
// }
//
// setTimeout(user.hello, 1000)

                                            // 3
//
// const  a = {
//     toString() {
//         return 'a'
//     },
//
//     go: function () {
//         console.log(this.toString())
//     },
//
//     run: () => {
//         console.log(this)
//     },
//
//     stop: function () {
//         (() => {
//             console.log(this)
//         })()
//     }
// }
//
// a.go()
// a.run()
// a.stop()

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

console.log('6' / '2') // 3
console.log('6' * '2') // 12 Number
console.log('6' + '2') // 62 strung
console.log('6' + 2) // str 62
console.log('6' - 2) // 4 number
console.log(null == undefined) // true
console.log(null === null) // true
console.log(undefined === undefined) // true