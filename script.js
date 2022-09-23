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

function toAcronym(inp){
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


let a = (b) => {
    return b * 5
}
console.log(a(10))