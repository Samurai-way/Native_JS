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

function User(name) {
    this.name = name
}

const user = new User('Alex')

console.log(user.isActive)

User.prototype = {
    isActive: true
}

console.log(user.isActive)