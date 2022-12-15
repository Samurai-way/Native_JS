// !use strict ==> object
// use strict ==> any data type


// 1. Global Scope ==> global object window

// console.log(this)
//
// const user = {
//     name: 'Alex',
//     showName(){
//         console.log(this.name)
//     }
// }
// user.showName()

                                     //============= INSIDE FUNCTION =========

// function foo() {
//     console.log(this)
// }
// foo()
//
// const user = {
//     showFoo: foo
// }
// user.showFoo() // 2
//
// foo.bind()()
// foo.call()
// foo.apply()
//
// new foo()

                                    // вызывается от имени объекта

// function foo() {
//     console.log(this)
// }
//
// const user = {
//     foo: foo
// }
//
// foo()
// user.foo()

// const alex = {
//     name: 'Alex',
//     showName(){
//         console.log(this.name)
//     }
// }
//
// const hanna = {
//     name: 'Hanna',
//     showName(){
//         alex.showName()
//     }
// }
// alex.showName()//
// hanna.showName()//

                                  //  с помощью методов call, bind, apply

function foo() {
    console.log(this)
}
foo.call({name: 'Dimas'})