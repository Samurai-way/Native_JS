

// function f() {
//     console.log(this.name)
// }
// f()

let man = {
    name: 'Dima',
    age: 10,
    hey(){
        const hello = () =>{
            console.log(this.name)
        }
       return  hello
    }
}

let hop = man.hey()
console.log(hop)

