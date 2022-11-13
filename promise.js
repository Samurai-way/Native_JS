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


const a = {
    name: 'a'
}
const b = {
    name: 'b',
    hi(){
        (()=>{
            console.log(this.name)
        }).call(a)
    }
}

const c = {
    name: 'c'
}

b.hi.call(c)