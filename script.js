// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof (()=>{}))
//
// const user = {
//     name: 'Bob',
//     age: 23,
//     isStudent: true,
//     friends: [
//         'Oleg', 'Vasia'
//     ]
// }
// user.friends.push('Katya')
// const user2 = {...user, isMarried: true, name: 'Vasia'}
// const deepCopyUser = {...user, friends: [...user.friends]}

// console.log(user2)
// console.log(deepCopyUser)
//
// const students = [
//     {name: "Alex"},
//     {name: "Bob"},
//     {name: "Donald"},
//     {name: "Ann"},
// ]

// const newStudents = students.map(st => st.name === 'Alex' ? {...st, name: 'Joe'} : st)
// console.log(newStudents)

// const arr = [1,2,3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// let arrY = [1,15,11,2,4,101,12125,16,12]

// let filt = arrY.filter((elem)=>{
//     return elem < 15
// })

// let result = arrY.map((elem)=>{
//     return elem * 2;
// })
//
// console.log(result)

// let a = [1,11,12,14,21,22,25]
// let old = a.filter(el => el < 10);
// console.log(old)

// let courses = [
//     {
//         id: 1, course: 'HTML', price: 140
//     }, {
//         id: 2, course: 'JS', price: 250
//     }, {
//         id: 3, course: 'Angular', price: 300
//     }
// ]
//
// let filt = courses.filter(el => el.price < 150)
// console.log(filt)

// let fruits = ['banana', 'orange', 'lemon'];
// let filt = fruits.filter(el => el === 'lemon');
// console.log(filt)

// let students =[
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];

// const getNames = (array) => {
// const result = []
//     const getValue = el => el.name
//     for(let i = 0; i < array.length; i++) {
//         const newValue = getValue(array[i])
//         return[i] = newValue
//     }
//     return result
// }

// const getScores =(array)=>{
//     const result = []
//     const getValueScores = el => el.scores
//     for(let i = 0; i < array.length; i++) {
//         const newValue = getValueScores(array[i])
//         return[i] = newValue
//     }
//     return result
// }
// console.log(getScores(students))

// const addScores = (array) => {
//     const result = []
//     const getValueScores = el => ({...el, scores: el.scores + 10})
//     for(let i = 0; i < array.length; i++) {
//          const newValue = getValueScores(array[i])
//          result[i] = newValue
//    }
//     return result
// }
// console.log(addScores(students))
//
// const anyFunction = (array, callBack) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         const newValue = callBack(array[i])
//         result[i] = newValue
//     }
//     return result
// }
// console.log(anyFunction(students, el => el.name))
// console.log(anyFunction(students, el => el.scores))
// console.log(anyFunction(students, el => el.id))

// const filterFunction = (array, callback) => {
//     const result = new Array()
//     for (let i = 0; i < array.length; i++) {
//         if(callback(array[i]) === true){
//             return array[i]
//         }
//     }
//     return result
// }
//
// console.log(filterFunction(students, el => el.name === 'Nick'))
// console.log(filterFunction(students, el => el.scores >= 100))
// console.log(students.filter(el => el.name ==='Bob'))
// console.log(filterFunction(students, el => el.name === 'Alex'))
//
// console.log(students.map(st => {
//     return `Student ${st.name}: ${st.age}, ${st.isMarried ? 'Married' : "Not Merried" }`
//     }))
//
// console.log(students.map(st => st.name === 'Nick'? {...st, isMarried: true} : st))
// function areYouPlayingBanjo(name) {
//     if (name.charAt(0) === 'R') {
//         return name + " plays banjo";
//     } if (name.charAt(0) === 'r'){
//         return name + " plays banjo";
//
//     } else {
//         return name + " does not play banjo"
//     }
// }

// function areYouPlayingBanjo(name) {
//     if (name[0] == 'R' || name[0] == 'r')
//         return name + " plays banjo";
//     else
//         return name + " does not play banjo";
// }
//
// console.log(areYouPlayingBanjo('Bas'))

// function DNAtoRNA(dna) {
//     return dna.split('T').join('U')
// }
//
// console.log(DNAtoRNA('GCAT'))

// let DNAtoRNA =(dna) => dna.split('T') ? dna.join('U') : undefined
// console.log(DNAtoRNA('GCAT'))

// const DNAtoRNA = dna => dna.replace(/T/g, 'U');
//
// let dnca = d => d.replace(/E/g, 'Y')
// console.log(dnca('GLAg'))

// let arr = {
//     city: [{title: 'Stits'}, {title: 'Trits'}]
// }
// let s = arr.city[0]
// console.log(s)
// function countBy(x, n) {
//     let z = [];
//     let arr = n
//     for(let i = x; arr > 0; i+=x){
//         z.push(i)
//         arr--
//     }
//     return z;
// }
//
// console.log(countBy(2,5
// ))

// const s = document.getElementById('small')
// const m = document.getElementById('medium')
// const b = document.getElementById('big')


// const click = () => alert('yo')
// s.onclick = click
// s.addEventListener('click', click)

// m.addEventListener('click', (e)=>{
//     alert('medium')
// })
//
// b.addEventListener('click', ()=>{
//     alert('big')
// })
//
// const getElementById = (e) => {
//     alert(e.currentTarget.id)
// }
//
// b.addEventListener('click', getElementById)


// let str = '600'
// let num = Number(str)
// console.log(num)
//
// const stringToNumber = function(str) {
//     let x = Number(str)
//     if(str) {
//         str = x
//     } return str
//
// }
// console.log(stringToNumber('500'))
// console.log(typeof )

// function lovefunc(flower1, flower2){
//     if(flower1 % 2 == 0 && flower2 % 2 == 1){
//         return true;
//     }
//     if(flower1 % 2 == 1 && flower2 % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//
// console.log(lovefunc(0,0))

//1. Реализуйте функцию, которая принимает в качестве параметра массив чисел и возвращает самое большое значение из массива (максимум массива)
// [1,22,3,4,5] => 22

// function minmax(list) {
//     let result = [list[0]];
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] > result[0])
//             result[0] = list[i];
//     }
//     return result;
// }
//
// console.log(minmax([11,25,167, 2162]))

// Реализуйте функцию, которая принимае в качестве параметра массив с вложенными в него массивами из чисел и возвращает массив, состоящий из максимальных значений каждого вложенного массива.
//     [[1,2,3], [4,5,6]] => [3,6]

// const maxArrNumsFor = (arr) => {
//     let maxArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let maxNumArrI = arr[i][0]
//         for(let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > maxNumArrI) maxNumArrI = arr[i][j]
//         }
//         maxArr[i] = maxNumArrI
//     }
//     return maxArr
// }
// console.log(maxArrNumsFor([[21,-5,-32], [4,-5,12]]))

// let person = {
//     name: 'Oleg',
//     age: 20,
//     live: {
//         city: 'Kiev',
//         street: {
//             name: 'Nezalejna'
//         }
//     }
// }
// console.log(person.live.city)
// console.log(person["live"]["city"])
//
// let city = {}
// city["name"] = 'Petya'
// console.log(city)
//
// city['привет как дела'] = 'ОКЕЙ'
// console.log(city)
//
// console.log(city["привет как дела"])

// let a = {
//     '1': 'Oleg',
//     '2': 'Vasia',
//     '3': 'Grisha',
//     '4': 'Andrey'
// }
// console.log(a["2"])
// console.log(Object.keys(a))

// a[null] = 'null'
// console.log(a)
// for(let i = 0; i < 100; i++) {
//     a[i] = 'ky'
// }
// // console.log(a)
// for (let x = 0; x < a['1']; x++) {
//     a["1"][x] = 'Grisha'
// }
// console.log(a['1'])
//
// let arr = [
//     {id: 1, name: 'Vasya'},
//     {id: 2, name: 'Valera'},
//     {id: 5, name: 'Sveta'},
// ]
// console.log(arr.find(v => v.id ===2))
//
// arr.name = 'sorname'
// console.log(arr)
// delete arr.name
// console.log(arr)
//
// delete arr[0]
// console.log(arr)
//
// arr[1].name = 'Petka'
// console.log(arr)
// delete arr[1]
// console.log(arr)

// let arr = {
//     'value': 'Oleg',
//     'id': 16,
//     'sourname': 'Moish'
// }
// console.log(arr)
// arr.id = 'ID'
// console.log(arr)
//
// delete arr.id
// console.log(arr)
//
// arr['id'] = 2
// console.log(arr)
//
// arr.id = 'Petya'
//
// console.log(arr)
//
// console.log(Object.keys(arr.value))

// let RemoveExclamationMarks = s => s.replace(/\!/g,'')
//
// function removeExclamationMarks(s) {
//     return s.replace(/!/g,'');
// }
//
// console.log(RemoveExclamationMarks('Hello world!!!'));

// function summNumb (n) {
//     return n.reduce((sum, n) => sum+n, 0);
// }
//
// console.log(summNumb([14,15]))

const tasksTitle = [
    {
        id: 1,
        title: 'hello my dear friend',
        filter: 'all',
    },
    {
        id: 2,
        title: 'hello my dear friend',
        filter: 'all',
    }
]

let tasks = {
    1: [
        {id: 11, titles: 'JS', isDone: false},
        {id: 13, titles: 'CSS', isDone: false},
        {id: 15, titles: 'Ract', isDone: false},
    ],
    2: [
        {id: 20, titles: 'Cola', isDone: false},
        {id: 21, titles: 'Water', isDone: false},
        {id: 30, titles: 'Sprite', isDone: false},
    ]
}

// console.log(tasks[1].find(t => t.id === 13))
// console.log([...tasks[1], {id: 17, title: 'KY'}])
// console.log(tasks[1].map(t => t.id ===13 ? {...t, isDone: true} : t ))
// console.log([...tasksTitle,  {id: 2, title: 'GUUU',filter: 'all',}])
// console.log({...tasks, 3: []})
// const secretKey = Math.floor(Math.random()*100)
// const user = {
//     user: 'Bob',
//     'user age': 13,
//     [secretKey]: 'password'
// }
// console.log(user)
//
// let num = [15,20]
//
// let s =  num.reduce((el, t) => el+t);
// console.log(s)
//
//
// const todolistID_1 = "were-454k"
// const todolistID_2 = "rukd-095r"
//
//
//
// const todoLists = [
//     {
//         id: todolistID_1,
//         title: "What to learn",
//         filter: "all",
//     },
//     {
//         id: todolistID_2,
//         title: "What to buy",
//         filter: "all",
//     },
// ]
//
//
// const tasks = {
//     [todolistID_1] : [
//         {id: 11, title: "JS", isDone: false},
//         {id: 12, title: "HTML", isDone: false},
//         {id: 13, title: "CSS", isDone: false},
//     ],
//     [todolistID_2] : [
//         {id: 21, title: "Beer", isDone: false},
//         {id: 22, title: "Cola", isDone: false},
//         {id: 23, title: "Water", isDone: false},
//     ],
// }


// console.log(tasks[1].find(t => t.id === 11))
// console.log([...tasks[1],  {id: 14, title: "LESS", isDone: false}])
// console.log(tasks[1].map(t => t.id === 12 ? {...t, isDone: true} : t))
//
// console.log([...todoLists, {id: 3, title: "What to read", filter: "all"}])
// console.log({...tasks, 3: []})
//
//
// const secretKey = Math.floor(Math.random()*100)  // 0 - 99
//
// const user = {
//     ["name"]: "Bob",
//     "user age": 23,
//     [secretKey]: "password",
// }
//
// console.log(user)


// reduce -> свёртка - ???

// const numbers = [10,20,30]

// console.log(numbers.reduce((acc, el, i) => acc + el))
// acc - 10, el - 20 => 30
// acc -30, el - 300 => 60
// => 60

//
// Array.prototype.reducePlus = function (func, startValue) {
//     let acc = startValue ? startValue : this[0]
//
//     for (let i = startValue ? 0 : 1; i < this.length; i++) {
//         acc = func(acc, this[i])
//     }
//     return acc;
// };
//
// console.log(numbers.reducePlus((acc, el) => acc + el))
// let students = [
//     {
//         id: "1",
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {   id: 2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         id: 3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id: 4,
//         name: "John",
//         age: 23,
//         isMarried: false,
//         scores: 100
//     }
// ];

// const updatedStudent = {
//     1: {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     2: {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     }
// }

// const updatedStudents = students.reduce((acc, el) => {
//     acc[el.id] = {...el}
//     delete acc[el.id].id
//     return acc
// }, {})


// {
//  1:{
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//   2: {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//   3:  {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
// }
// console.log(updatedStudents)

// [[1,2,3], [4,5,6]] => [3,6]
//
// function doubleInteger(i) {
//     return i*2
// }
//
// console.log(doubleInteger(2))
//
// function setAlarm(employed, vacation){
//     if(employed && vacation) return false
//     if(employed) {
//         return true
//     } else {
//         return false
//     }
//     if(vacation) return true
//
// }
//
// console.log(setAlarm(false, true))
//
// assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
// assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
// assert.strictEqual(setAlarm(true, false), true,"Should be true.");


// function basicOp(operation, value1, value2) {
//     if (operation == '+') return value1 + value2
//     if (operation == '-') return value1 - value2
//     if (operation == '*') return value1 * value2
//     if (operation == '/') return value1 / value2
// }
//
// console.log(basicOp('+', 12, 15))
// Test.assertSimilar(basicOp('+', 4, 7), 11);
// Test.assertSimilar(basicOp('-', 15, 18), -3);
// Test.assertSimilar(basicOp('*', 5, 5), 25);
// Test.assertSimilar(basicOp('/', 49, 7), 7);
// function isIsogram (str) {
//    return new Set(str.toLowerCase()).size === str.length
// }
//
// console.log(isIsogram('isIsogram'))
//
//
// assert.strictEqual( isIsogram("Dermatoglyphics"), true );
// assert.strictEqual( isIsogram("isogram"), true );
// assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
// assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
// assert.strictEqual( isIsogram("isIsogram"), false );
// assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );


// let countSheep = function (num){
//     let result = ''
//     for(let i = 1; i <=num; i++) {
//         result += i + ' sheep...'
//     }
//     return result
// }
//
// console.log(countSheep(6))
//
//
// describe("Fixed tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(countSheep(0), "");
//         assert.strictEqual(countSheep(1), "1 sheep...");
//         assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//         assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//     });
// });
//
// function howMuchILoveYou(nbPetals) {
//     const title = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all'
//     ]
//     return title[(howMuchILoveYou) -1] % title.length
// }
// console.log(howMuchILoveYou())
//
//
//
// assert.strictEqual(howMuchILoveYou(7),"I love you")
// assert.strictEqual(howMuchILoveYou(3),"a lot")
// assert.strictEqual(howMuchILoveYou(6),"not at all")
//
// function litres(time) {
//     return Math.floor(time * 0.5)
// }
//
// console.log(litres(12.3))
//
// assert.strictEqual(litres(2), 1, 'should return 1 litre');
// assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
// assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
// assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
// assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
// assert.strictEqual(litres(1787), 893, 'should return 893 litres');
// assert.strictEqual(litres(0), 0, 'should return 0 litres');

// function makeNegative(num) {
//   if(num < 0){
//       return num
//   } else return -num
// }
//
// console.log(makeNegative(5))
// Test.assertEquals(makeNegative(42), -42);

// function check(a,x){
//     return a.includes(x);
// };
//
// console.log(check([101, 45, 75, 105, 99, 107], 107))
//
//
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

// const even_or_odd = (number) => (number % 2) ? "Odd" : "Even";
//
// console.log(even(2))

// it("2 is even", () => {
//     assert.strictEqual(even_or_odd(2), "Even");
// });
// it("7 is odd", () => {
//     assert.strictEqual(even_or_odd(7), "Odd");
// });
// it("-42 is even", () => {
//     assert.strictEqual(even_or_odd(-42), "Even");
// });
// it("-7 is odd", () => {
//     assert.strictEqual(even_or_odd(-7), "Odd");
// });
// it("0 is even", () => {
//     assert.strictEqual(even_or_odd(0), "Even");
// function distinct(a){
//     return [...new Set(a)];
// }
//
// console.log(distinct([1,1,1,1,2,2,2,3,3,4,4,4,5,5,5,5,5,6]))
// let a = [1,1,1,2,2,3,4,5]
// console.log([...new Set(a)]);

// const avg = a => a.reduce((a, b) => a * b) / a.length
//
// console.log(avg([0,1,2,3,4]))

// const names = ['Bob', 'Alex', 'Dima', 'John']
// const yo = names.sort()
// console.log(yo === names)

// const numbers = [1, 2, 66, 101, 51, 22];
// let n = numbers.sort()
// console.log(n)

// let compareFunc = (a, b) => a - b;
// if(a < b) {
//     return -1
// } else {
//     return 1
// }
// }

// console.log(numbers.sort(compareFunc))

// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: "Alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Helge",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: "alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
// ];

// console.log(students.sort((a, b) => a.scores - b.scores));
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)));

const numbers = [1, 11, 14, 15, 25, 55]
for (let j = 0; j <numbers.length; j++) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]){
            [numbers[i+1], numbers[i]] = [numbers[i], numbers[i+1]]
        }
    }
}


console.log(numbers)