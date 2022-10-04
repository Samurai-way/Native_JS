let arr = {
    'sos': 'pisos'
}

arr['sos'] = ['pis']

// console.log(arr)


function findShort(s) {
    let arr = []
    s.split(' ').map(el => {
        // console.log(el.length)
        arr.push(el.length)

    })
    return Math.min(...arr)

}

// console.log(findShort("turns o random test cases are easier writing out basic ones"))


// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

function tidyNumber(n) {
    let a = n.toString().split('')
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] <= a[i + 1]) {
            return false
        }
        return true
    }
}

// console.log(tidyNumber(891))
// Test.assertEquals(tidyNumber(12),true);
// Test.assertEquals(tidyNumber(102),false);
// Test.assertEquals(tidyNumber(9672),false);
// Test.assertEquals(tidyNumber(2789),true);
// Test.assertEquals(tidyNumber(2335),true);

function disemvowel(str) {
    return str.toLowerCase().replace(/[aeiouy]/gi, '')
}

// console.log(disemvowel("This website is for losers LOL!"))

// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

function correct(string) {
    return string.replace(/5/gi, 'S').replace(/1/gi, 'I').replace(/0/gi, 'O')
}

// console.log(correct("PAR15"))

function greet(language) {
    return (el => el[language] || 'Welcome')
    ({
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    })
}


let otherAngle = (a, b) => 180 - a - b

function minMax(arr) {
    let a = Math.min(...arr)
    let b = Math.max(...arr)
    return [a, b]
}

// [1,2,3,4,5] --> [1,5]
//     [2334454,5] --> [5,2334454]
//     [1]         --> [1,1]
function removeSmallest(numbers) {
    if (!numbers) return [];
    let min = Math.min.apply(null, numbers);
    let newArr = numbers.slice(0);
    newArr.splice(newArr.indexOf(min), 1);
    return newArr;
}

// console.log(removeSmallest([1, 2, 3, 4, 5]))

// Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

// console.log(finalGrade(100,12))
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
//
// 85, 5 --> 90
//
// 55, 3 --> 75
//
// 55, 0 --> 0
// 20, 2 --> 0

// assert.strictEqual(finalGrade(100, 12), 100);
// assert.strictEqual(finalGrade(85, 5), 90);

function toAcronym(inp) {
    let a = inp.split(' ')
    let b = []
    for (let i = 0; i < a.length; i++) {
        b.push(a[i][0])
    }
    return b.join('').toUpperCase()
}

// console.log(toAcronym("Code Wars"))
// let tests = [
//     ["Code Wars", "CW"],
//     ["Water Closet", "WC"],
//     ["Portable Network Graphics", "PNG"],
//     ["PHP: Hypertext Preprocessor", "PHP"],
//     ["hyper text markup language", "HTML"]
// ];

let person = {
    name: {
        firstName: 'Dima',
        secondName: 'Dimych'
    }
}
// let copy = {
//     ...person,
//     name: {
//         ...person.name
//     }
// }
// copy.name.firstName = 'Artur'

// let a = 7
// console.log(a)
// let b = new Promise(function (resolve, reject) {
//     setInterval(()=>{
//         resolve(a = 100)
//     }, 2000)
//
// })
// b.then(function (){
//     console.log(a)
// })


// let a = (b) => {
//     return b * 5
// }
// console.log(a(10))


const SmallestIntegerFinder = (args) => {
    return Math.min(...args)
}

// console.log(SmallestIntegerFinder([34, -345, -1, 100]))

let likeOrDislike = (buttons) => buttons.reduce((p, c) => c == p ? Nothing : c, Nothing)

function getMiddle(s) {
    let a = s.split('')
    while (a.length > 2) {
        a.pop()
        a.shift()
    }
    return a.join('')
}

// console.log(getMiddle("testing"))
// Test.assertEquals(getMiddle("test"),"es");
// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");
// Test.assertEquals(getMiddle("A"),"A");

function accum(s) {
    return s.toLowerCase().split('').map((el, index) => el.toUpperCase() + el.repeat(index)).join('-')
}

console.log(accum("ZpglnRxqenU"))

// Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

let isSquare = function (n) {
    let result = Math.sqrt(n);
    return (result % 1 === 0);
}
// console.log(isSquare(25))

const sequenceSum = (begin, end, step) => {
    let sum = 0
    for (let i = begin; i <= end; i += step) sum += i;
    return sum
};
// console.log(sequenceSum(1,5, 1))

// assert.strictEqual(sequenceSum(2, 6, 2), 12)
// assert.strictEqual(sequenceSum(1, 5, 1), 15)
// assert.strictEqual(sequenceSum(1, 5, 3), 5)

function highAndLow(numbers) {
    let arr = numbers.split(' ')
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return [max, min].join(' ')

}

// console.log(highAndLow("1 9 3 4 -5"))
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function nameShuffler(str) {
    let arr = str.split(' ').reverse().join(' ')
    return arr
}

// console.log(nameShuffler('Mary jeggins'))
// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
// assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')

let friend = (friends) => friends.filter(el => el.length === 4)

// console.log(friend(["Love", "Your", "Face", "1"]))

// (friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
// (friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
// (friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
// (friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

function isTriangle(a, b, c) {
    let ar12 = [a, b, c];
    if (triangleLineValidation(ar12) === 3) {
        return true;
    } else {
        return false
    }

    function triangleLineValidation(ar12) {
        let check = 0;
        for (let i = 0; i < ar12.length; i += 1) {
            for (let j = i + 1; i < ar12.length; i += 1) {
                if (ar12[i] + ar12[j] > ar12[2 - i] && Math.abs(ar12[i] - ar12[j]) < ar12[2 - i]) {
                    check += 1;
                }
            }
        }
        return check;
    }
}

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}

// console.log(isTriangle(1,2,2))

// assert.strictEqual(isTriangle(1,2,2), true);
// assert.strictEqual(isTriangle(7,2,2), false);

const user = {
    age: 18,
    showAge() {
        // console.log(this.age)
    }
}
const animal = {
    age: 2,
    getMyAge: user.showAge.bind(user)
}
animal.getMyAge()


function roundToNext5(n) {
    return Math.ceil(n / 5) * 5;
}

// console.log(roundToNext5(2))

function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
        default:
            console.log('vse')
    }
}

// console.log(arithmetic(10,2,'divide'))
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function reverseLetter(str) {
    return str.split('').reverse().join('').replace(/[^a-z]/gi, '')
}

// console.log(reverseLetter("ab23c"))

// Test.assertEquals(reverseLetter("krishan"),"nahsirk")
// Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")
// Test.assertEquals(reverseLetter("ab23c"),"cba")
// Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

function minValue(values) {
    return +[...new Set(values)].sort().join('')
}

// console.log(minValue([4,7,5]))
// assert.strictEqual(minValue([1, 3, 1]), 13);
// assert.strictEqual(minValue([4, 7, 5, 7]), 457);
// assert.strictEqual(minValue([4, 8, 1, 4]), 148);
// assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
// assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
// assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
// assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);


function solution(nums) {
    if (!nums) {
        return []
    } else {
        return nums.sort((a, b) => a - b)
    }

}

// console.log(solution([20, 2, 10]))
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

let capitals = function (word) {
    let arr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            arr.push(i)
        }
    }
    return arr
};
// console.log(capitals('CodEWaRs'))

// assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );

function getDivisorsCnt(n) {
    let res = 0
    for (let i = n; i > 0; i--) {
        if (n % i == 0) {
            res++
        }
    }
    return res
}

// console.log(getDivisorsCnt(11))

// Test.assertEquals(getDivisorsCnt(1) , 1);
// Test.assertEquals(getDivisorsCnt(10) , 4);
// Test.assertEquals(getDivisorsCnt(11) , 2);
// Test.assertEquals(getDivisorsCnt(54) , 8);
function oddOrEven(array) {
    return array.reduce(function (sum, item) {
        return sum + item
    }, 0) % 2 == 0 ? 'even' : 'odd';
}

// assert.strictEqual(oddOrEven([0]), 'even')
// assert.strictEqual(oddOrEven([1]), 'odd')
// assert.strictEqual(oddOrEven([]), 'even')

const sortByLength = (array) => array.sort((a, b) => a.length - b.length)

// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

function checkExam(array1, array2) {
    let points = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            points += 4;
        } else if (array2[i] === "") {
            points += 0;
        } else {
            points -= 1;
        }
    }
    if (points > 0) {
        return points;
    } else {
        return 0;
    }
}
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
// assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
// assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
// assert.strictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
// assert.strictEqual(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);

const quarterOf = (month) => {
    switch (month) {
        case 1:
            return 1
        case 2:
            return 1
        case 3:
            return 1
        case 4:
            return 2
        case 5:
            return 2
        case 6:
            return 2
        case 7:
            return 3
        case 8:
            return 3
        case 9:
            return 3
        case 10:
            return 4
        case 11:
            return 4
        case 12:
            return 4
    }
}
// console.log(quarterOf(1))

// complete the function
function solution(string) {
    let spl = ''
    for (latter of string) {
        if(latter === latter.toUpperCase()){
            spl += ' '
            spl += latter
        } else {
            spl += latter
        }
    }
    return spl
}

// console.log(solution('camelCasing'))
// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

// Test.assertEquals(solve("code"),"code");
function solve(s){
    let numUpper = s.length - s.replace(/[A-Z]/g, '').length;
    if(numUpper > 2 ) {
        return s.toUpperCase()
    } else{
        return s.toLowerCase()
    }
}

// console.log(solve("Code"))
// Test.assertEquals(solve("CODe"),"CODE");
// Test.assertEquals(solve("COde"),"code");
// Test.assertEquals(solve("Code"),"code");

function flattenAndSort(array) {
    return array.flat().sort((a,b) => a - b)
}

// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))

// assert.deepEqual(flattenAndSort([]), []);
// assert.deepEqual(flattenAndSort([[], []]), []);
// assert.deepEqual(flattenAndSort([[], [1]]), [1]);
// assert.deepEqual(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// assert.deepEqual(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);