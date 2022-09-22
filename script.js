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
    if(!numbers)return [];
    let min=Math.min.apply(null,numbers);
    let newArr = numbers.slice(0);
    newArr.splice(newArr.indexOf(min),1);
    return newArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]))

// Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");

