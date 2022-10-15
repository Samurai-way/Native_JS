//this

//'use-strict' this -> undefined, null, 5, false ....
//!'use-strict' this -> { ? }


//1 Global scope -> global object (window, global)
//2 Arrow functions
//3 Functions (not arrow) -> watch how function called
// - like constructor -> new Function()
// - .call() .bind() .apply()
// someObject <--- . function()
// function() // !use-strict this -> window | in use strict this -> undefined


// ==================== GLOBAL SCOPE ====================

// console.log(this)
//
// console.log(this === window)
//
// this.age = 23
//
// console.log(window.age)


// ==================== ARROW FUNCTIONS  ====================

// const foo = () => {
//     console.log(this) // -> Window
// }
//
//
// this.age = 40 //window.age = 40
//
//
// const user = {
//     name: "Alex",
//     age: 26,
//
//     showAge: () => {
//         console.log(this.age)
//     }
// }
//
// user.showAge()


// ==================== FUNCTIONS  ====================

// const user = {
//     name: "Alex",
//     showName() {
//         console.log(this)
//     }
// }
//
// user.showName()
//
// const foo = user.showName
// foo()
//
//
// const hanna = {
//     name: 'Hanna',
//     showName: user.showName
// }
//
// hanna.showName()
//
//
// const car = {
//     run() {
//         console.log(`By ${this}`)
//     }
// }


// ======================= CONSTRUCTORS ===================


// function User() {
//     console.log(this)
// }
//
// const alex = new User()
//
// console.log(alex)

//'use strict';


// const group = {
//     name: 'KMB-40',
//     users: ["Alex", 'Hanna'],
//
//     showUsers() {
//         this.users.forEach(function (user) {
//             console.log(`${this.name}: ${user}`)
//         })
//     }
// }
//
// group.showUsers()
//
//
// const forEach = (cb, thisArgs) => {
//     cb.call(undefined)
// }


//                  Прототипы след урок


// console.log('start')
//
// setTimeout(() => {
//     console.log('setTimeout')
// })
//
// Promise.resolve().then(() => {
//     console.log('resolve')
// })
//
// console.log('end')


function findOdd(A) {
    return A.reduce((a, b) => a ^ b)
}

// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

const sumNum = (s) => { // // максимальное число в массиве //
    let res = s[0]
    for (let i = 0; i < s.length; i++) {
        if (s[i] > res) {
            res = s[i]
        }
    }
    return res
}

const sumMax = (max) => max.reduce((a, b) => a < b ? b : a) // максимальное число в массиве

// console.log(sumMax([1, 2, 3, 4, 5, 0, 1, 3]))


const isAnagram = (test, original) => {
    let t = test.split('').sort().join('')
    let o = original.split('').sort().join('')
    return t == o ? true : false
};

// const isAnagram = (test, original) => {
//     let tArr = []
//     let oArr = []
//     for (let i = 0; i < test.length; i++) {
//         tArr.push(test[i])
//     }
//     for (let i = 0; i < original.length; i++) {
//         oArr.push(original[i])
//     }
//     const tRes = tArr.sort().join('')
//     const oRes = oArr.sort().join('')
//     return tRes == oRes ? true : false
// };

// console.log(isAnagram("foefet", "toffee")) // анаграмма

// Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
// Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
// Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')

function count(string) {
    let obj = {}
    string.split('').map(o => obj[o] = obj[o] + 1 || 1)
    return obj
}

// console.log(count("aba"))
// assert.deepEqual(count(""), {});

function findNextSquare(sq) {
    let root1
    let nextroot
    if (Math.sqrt(sq) % 1 === 0) {
        root1 = Math.sqrt(sq)
        nextroot = root1 + 1
    } else {
        return -1;
    }
    return nextroot * nextroot;
}

// console.log(findNextSquare(121))

// Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
// Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
// Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
// Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
//
// function duplicateEncode(word) {
//     let newString = ''
//     word = word.toLowerCase()
//     word.split('').filter((x, index) => {
//         if(word.indexOf(x) !== index){
//             newString += ')'
//         }else if(word.lastIndexOf(x) !== index){
//             newString += ')'
//         }else{
//             newString += '('
//         }
//     })
//     return newString
// }



function duplicateEncode(word) {
    let string = ''
    word = word.split('').filter((a,b) => {
        if(word.indexOf(a) !== b){
            string += ')'
        }else if(word.lastIndexOf(a) !== b){
            string += ')'
        }else{
            string += '('
        }
    })
    return string
}


// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// console.log(duplicateEncode("Success"))
// assert.strictEqual(duplicateEncode("din"),"(((");
// assert.strictEqual(duplicateEncode("recede"),"()()()");
// assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
// assert.strictEqual(duplicateEncode("(( @"),"))((");

function factorial(n) {
    if(n > 12 || n < 0){
        throw new RangeError
    }
    if (n == 0 || n == 1)
        return 1;
    if (factorial[n] > 0)
        return factorial[n];
    return factorial[n] = factorial(n-1) * n;
}

console.log(factorial(0))

// Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
// Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
// Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
// Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");