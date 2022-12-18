// examples

// const a = false && 'true'
// console.log(a)
// let a,b;
// console.log(b)

// let a = {
//     name: 'a',
// }
//
// let b = {
//     name: 'b'
// }
//
// let c = {
//     name: 'c'
// }
//
// console.log(g)


// let animals = [{name: '2'}, '3']
// let clone = animals.slice()
// clone[0].type = 'bire'
// clone[1] = '1'
// // console.log(clone[0].ty)
// let baer = {
//     soud: 'roar',
//     roar(){
//         console.log(this.soud)
//     }
// }
//
// baer.sound = 'grunt'
// let bearSound = baer.roar
// bearSound()
//                                                             let a = ['1', '2', '3'];
// let key = a => a => '3';
// if(a.some(key)){
//     console.log('')
// }

// let cat = Object.create({type: 'lion'})
// cat.size = 'large'
// let copyCat = {...cat}
// cat.type = 'tiger'
// console.log(copyCat.type, copyCat.size)
// setTimeout(()=>{
//     console.log('love')
// },0)
// console.log('JS')console.log('i')

// let cat = {type: 'tiger', size: 'large'}
// let json = JSON.stringify(cat)
// console.log(json)
// let anim = ['jag', 'elef']
// anim.pop()
// console.log(anim)
// let sound = 'grout'
// let bear = {sound: 'roar'}
// function roar() {
//     console.log(this.sound)
// }
// bear.bind(roar)
// class Script {
//     static mini = 60
// }
// let congo = new Script()
// Script.mini = 80
// console.log(congo.mini)
// let cat = {name: '1'}
//
// function f(fel) {
//     fel.name = 'Wild'
//     fel = {name: 'Tabby'}
// }
//
// f(cat)
// console.log(cat.name)

let name = {
    name: 'c'
}

function f1() {
    // this.name = name
    console.log(this.name)
}

console.log(f1.bind(name))