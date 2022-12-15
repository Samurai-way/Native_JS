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

function foo() {
    console.log(this)
}
foo()

const user = {
    showFoo: foo
}
user.showFoo() // 2

foo.bind()()
foo.call()
foo.apply()