                                            //      7 kyu

// function getSum( a,b ) {
//     let min = Math.min(a,b),
//         max = Math.max(a,b)
//     return (max - min + 1) * (max + min) / 2
// }
//
// console.log(getSum(0, 1))
// // assert.strictEqual(getSum(0,-1),-1);
// // assert.strictEqual(getSum(0,1),1);

                                            // Repeat

// let person = {
//     name: 'Dima',
//     age: 15,
//     info:[
//         {name: 'Kiev', street: 'Soborna'}
//     ]
// }
// let copy = {
//     ...person,
//     info: person.info.map(e => ({...e}))
// }
//
// copy.info[0].street = 'Green'
// console.log(copy)
// console.log(person)
                                    // Associatove massive
let arr = {
    'one': 1,
    'two': 2,
    'isDone': true,
    'name': 'Dima'
}
let b = {
    ...arr,
    'isDone': 15
}
// console.log(b)

let person = {
    'name': {
        'city': 'Kiev',
        'street': 'Soborna'
    },
    'street':{
        name: 'Soborna',
        'age': 20
    }
}
person.name.street = 'Kharkov'
person.sorname = 'Ivanov'
// console.log(person)


const binaryArrayToNumber = arr => {
    return parseInt((arr + '')
        .replace(/[^01]/gi, ''), 2);
 }
console.log(binaryArrayToNumber([0,0,1,0]))
// Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
// Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
// Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
// Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);