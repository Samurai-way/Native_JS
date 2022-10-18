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
    word = word.split('').filter((a, b) => {
        if (word.indexOf(a) !== b) {
            string += ')'
        } else if (word.lastIndexOf(a) !== b) {
            string += ')'
        } else {
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
    if (n > 12 || n < 0) {
        throw new RangeError
    }
    if (n == 0 || n == 1)
        return 1;
    if (factorial[n] > 0)
        return factorial[n];
    return factorial[n] = factorial(n - 1) * n;
}

// console.log(factorial(0))

// Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
// Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
// Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
// Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");

function wave(str) {
    let arr1 = []
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        if (letter === '') {
            continue
        } else {
            arr1.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
        }
    }
    return arr1
}

// console.log(wave("hello"))
// let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let a = age1 * age1
    let b = age2 * age2
    let c = age3 * age3
    let d = age4 * age4
    let e = age5 * age5
    let f = age6 * age6
    let j = age7 * age7
    let h = age8 * age8
    let sum = a + b + c + d + e + f + j + h
    let math = Math.sqrt(sum)
    let res = math / 2
    return Math.floor(res)
}

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

// let promise = new Promise((res, rej) => {
//     res()
// })
// .then((message) => {
//     console.log('finally', message)
// })
// .catch((err) => {
//     console.log('err', err)
// })
// .finally(() => {
//     console.log('завершился')
// })

// let promise = new Promise((res) => {
//     setTimeout(() => {
//         let random = Math.random()
//         res(random)
//     }, 2000)
// })
// promise.then(random => {
//     console.log('завершился и вижу: ' + random)
// })
// promise.then(random => {
//     console.log('2: ' + random)
// })
// console.log('1')

// let pr = new Promise( (resolve) => {
//     let data = {
//         cities: [{title: "Minsk"}, {title: "Kiev"}],
//         website: "it-kamasutra.com"
//     };
//     resolve(data);
// });
//
// pr.then( data => {
//     let n = data
//     console.log(n);
// })
// pr.then( website => {
//         let w = website
//         console.log(w.website);
//     })

// let promise = new Promise((res, rej) => {
//     setInterval(() => {
//         let a = 1
//         console.log(a)
//         rej(a)
//     }, 1000)
// })
// .then(a => {
//     a = 150
//     console.log(a)
// })


// function doAfter(num) {
//     let newPr = new Promise((res, reject) => {
//         setTimeout(() => {
//             const random = Math.random()
//             res(random)
//         }, num * 1000)
//     })
//     return newPr
// }
//
// doAfter(5).then((res) => {
//     console.log('я 1: ' + res)
//     return res
//     })
//     .then((res) => {
//         console.log('я 2: ' + res)
//         return res
//     })
//     .then((res) => {
//         console.log('я 3: ' + res)
//     })

function isPangram(string) {
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
// var string = "The quick brown fox jumps over the lazy dog."

function asPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => string.indexOf(x) !== -1);
}

// console.log(asPangram('The quick brown fox jumps over the lazy dog'))

let number = function (array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(i + 1 + ": " + array[i])
    }
    return arr
}

function sum(array) {
    return array.map((el, index) => `${index + 1}: ` + el)
}

// console.log(sum(["a", "b", "c", "d", "e", "f"]))
// console.log(number(["a", "b", "c", "d", "e", "f"]))

// assert.deepEqual(number([]), [], 'Empty array should return empty array');
// assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

const alphabetPosition = (text) =>
    text.toLowerCase().split('')
    .filter(a => a >= 'a' & a <= 'z')
    .map(a => a.charCodeAt(0) - 'a'.charCodeAt(0) +1)
    .join(' ')


// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

function squareDigits(num){
    let arr = ''
    let array = (""+num).split('').map(Number)
    for (let i = 0; i < array.length; i++) {
        arr += array[i] * array[i]
    }
    return parseInt(arr)
}

console.log(squareDigits(2112))
// assert.strictEqual(squareDigits(3212), 9414);