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
//
// const numbers = [1, 11, 14, 15, 25, 55]
// for (let j = 0; j <numbers.length; j++) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > numbers[i + 1]){
//             [numbers[i+1], numbers[i]] = [numbers[i], numbers[i+1]]
//         }
//     }
// }
//
//
// console.log(numbers)

// const mentors = [
//     {id: 'id100', title: 'Oleg', salary: 10}, //0
//     {id: 'id250', title: 'Petya', salary: 50}, //1
//     {id: 'id501', title: 'Grisha', salary: 15}, //2
// ];
//
// const mentorsID = 'id100';
// const mentor = mentors.find(m=>m.id === mentorsID);
// console.log(mentor)
//
// const mentoR = mentors[2]
// console.log(mentoR)
//
// const students = [
//     {id: 'id150', title: 'Andrey'},//0
//     {id: 'id160', title: 'Sergey'},//1
//     {id: 'id165', title: 'Petya'},//2
// ]
//
// marina = students.find(m=>m.title === 'Petya')
// marina.title = 'Marina'
// console.log(marina)

// const students = [
//     {id: 'id140', title: 'Grisha'},//0
//     {id: 'id150', title: 'Dima'},//1
//     {id: 'id170', title: 'Sasha'},//2
// ];
//
// const sasha = students.find(s=>s.id ==='id170')
// console.log(sasha)

// const studentsObj = {
//     "id150": {id: 'id150', title: 'Jora'},//0
//     "id160": {id: 'id160', title: 'Olexandr'},//1
// };
//
// studentsObj["id150"].title = 'Petya'
// console.log(studentsObj)
//
// let grisha = studentsObj.id150
// console.log(grisha)
//
// grisha.title += " Sun";
// console.log(grisha)
//
// studentsObj["id150"].title = "React"
//
// console.log(studentsObj)

// console.log(typeof NaN)

// function smash (words) {
//     return words.join(' ')
// };
// console.log(smash(['hello', 'world', 'this', 'is', 'great']))
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


// let doubleChar = (str) => str.replace(/(\w)/g, '$1$1')

// let arr = []
// for (let i = 0; i < str.length; i++) {
//     arr = str[i].split()
//     for (let j = 0; j < arr.length; j++) {
//         return arr[i**2]
//     }
// }

// function doubleChar(str) {
//     return str.split('').map(el => el + el).join('')
// }

// console.log(doubleChar('Hello World'))

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// function findMultiples(integer, limit) {
//     return Array.from({length: parseInt(limit / integer)}, (_,index)=> (index+1)*integer)
// }
//
// console.log(findMultiples(5, 25))

// Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
// Test.assertSimilar(findMultiples(1, 2), [1, 2])
// Test.assertSimilar(findMultiples(5, 7), [5])
// Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])

// function spongMame(str){
//     let res = '';
//     for (let i = 0; i < str.length;i++) {
//         res += (i % 2) ? str[i].toLowerCase() : str[i].toUpperCase()
//     }
//     return res
// }
//
// console.log(spongMame('Hello my friends'))

// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 90,
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
//     },
//     {
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110
//     },
//     {
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105
//     },
// ];
//
// const user = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Nick", "John"]
// }
//
// //1. Создайте поверхностную копию объекта user
// let copyUser = {...user};
// // console.log(user===copyUser);
// // console.log(user.friends===copyUser.friends)
//
// //2. Полная (глубокая) копия объекта user
// let deepCopyUser = {...user, friends: [...user.friends]};
// // console.log(user===deepCopyUser)
// // console.log(user.friends===deepCopyUser.friends)
//
// //3. Поверхностная копия массива students
// let copyStudents = [...students];
//
// // console.log(copyStudents === students)
// // console.log(copyStudents[0] === students[0])
// // console.log(copyStudents[0].age === students[0].age)
// // console.log(copyStudents[1].name === students[1].name)
//
// //4*. Полная (глубокая) копия массива students (map)
// let deepCopyStudents = students.map(el => ({...el}))
// // console.log(deepCopyStudents === students)
//
//
//
//
// //5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName = deepCopyStudents.sort((a,b) => a.name > b.name ? 1 : -1)
// // console.log(sortedByName);
//
// //6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let  bestStudents = students.filter(t => t.scores >=100);
// // console.log(bestStudents)
//
// //6a. Получите массив ("вырежьте") трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//
// let topStudents = students.slice(0,3);
// // console.log(topStudents)
// // console.log(deepCopyStudents)
//
// //6b Объедините массивы deepCopyStudents и topStudents так,
// // //чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents = [...topStudents,...deepCopyStudents]
// // console.log(newDeepCopyStudents)
//
// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents = students.filter(s => s.isMarried === false);
// // console.log(notMarriedStudents)
//
// //8. Сформируйте массив имён студентов (map)
// let studentsNames = students.map(s => s.name);
// // console.log(studentsNames)
//
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом (join)
// // - запятой (join)
// let namesWithSpace = studentsNames.join(' ')
// // console.log(namesWithSpace)
//
// let namesWithComma = studentsNames.join();
// // console.log(namesWithComma)
//
// //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents = students.map(el => ({...el, isDone: true}));
// // console.log(trueStudents)
//
// //10. Nick женился. Выполните соответствующие преобразование массива students (map)
// let studentsWithMarriedNick = students.map(e => e.name === 'Nick' ? {...e, isMarried: true} : e);
// // console.log(studentsWithMarriedNick)
//
// //11. Найдите студента по имени Ann (find)
// let ann = students.find(a=>a.name === 'Ann');
// // console.log(ann)
//
// //12. Найдите студента с самым высоким баллом (reduce)
// // - c помощью reduce
// // - *не испльзуя методы массивов и Math.max()*
// let bestStudent = students.reduce((a, b)=>(a.scores > b.scores) ? a:b, {})
// // console.log(bestStudent)
//
// //13. Найдите сумму баллов всех студентов (reduce)
//
// let sum = students.reduce((acc, el) => +el.scores, 0)
// // console.log(sum)

// let a = [
//     {name: 'Katya'}
// ]
//
// let b = a.map(el => {
//     return {...el}
// })
//
// // console.log(b)
//
// b[0].name = 'Grisha'
// console.log(a)

// let a = {
//     name: 'Dima',
//     age: 30,
//     title: {
//         name: 'USA'
//     }
// }
//
// let b = {
//     ...a, title:{
//         ...a.title
//     }
// }
// console.log(b)

// let q = {
//     name: 'Name',
//     age: 20,
//     street: {
//         name: 'Grogobuch',
//         person: {
//             name: 'Oles',
//             age: 15
//         }
//     }
// }
//
// let w = {
//     ...q, street: {...q.street}, person: {...q.street.person}
// }
// console.log(w)

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be
//
// // 1. Simple object
// let man = {
//     name: 'John',
//     age: 28
// };
//
// let manFullCopy = {...man}
// // console.log(man === manFullCopy)
//
//
// // 2. Array of primitives
// let numbers = [1, 2, 3];
//
// let numbersFullCopy  = [...numbers]
// // console.log(numbersFullCopy === numbers)
//
//
// // 3. Object inside an object
// let man1 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: 'Kate',
//         age: 50
//     }
// };
//
// let man1FullCopy = {...man1}
// man1FullCopy.mother = {...man1.mother}
// // console.log(man1FullCopy)
// man1FullCopy.mother.name = 'Dima'
// // console.log(man1)
// // console.log(man1FullCopy)
//
//
// // 4. Array of primitives inside an object
// let man2 = {
//     name: 'John',
//     age: 28,
//     friends: ["Peter", "Steven", "William"]
// };
//
// let man2FullCopy = {...man2, friends: {...man2.friends}}
// // man2FullCopy.friends = [...man2.friends]
// // console.log(man2)
// man2FullCopy.friends[0] = 'Dima'
// // console.log(man2)
// // console.log(man2FullCopy)
//
//
// // 5 Array of objects
// let people = [
//     {name: "Peter", age: 30},
//     {name: "Steven", age: 32},
//     {name: "William", age: 28}
// ];
//
//
// let peopleFullCopy  = people.map(n => ({...n}))
//
// peopleFullCopy[0].name = 'Dima';
// // console.log(peopleFullCopy)
// // console.log(people)
//
//
// // 6 Array of objects inside object
// let man3 = {
//     name: 'John',
//     age: 28,
//     friends: [
//         {name: "Peter", age: 30},
//         {name: "Steven", age: 32},
//         {name: "William", age: 28}
//     ]
// };
//
// let man3FullCopy = {...man3, friends: {...man3.friends.map(el => ({...el}))}}
//
// man3FullCopy.friends[0].name = 'Dima'
// // console.log(man3)
// // console.log(man3FullCopy)
//
//
// // 7 Object inside an object, inside an object
// let man4 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         }
//     }
// };
//
// let man4FullCopy = {...man4, mother:
//         {...man4.mother},
//     work: {...man4.mother.work}
// }
//
// man4FullCopy.mother.name = 'Dima'
// // console.log(man4)
// // console.log(man4FullCopy)
//
// // 8 Array of objects inside object -> object
// let man5 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {name: "Kevin", age: 80},
//             {name: "Jennifer", age: 78},
//         ]
//     }
// };
//
// let man5FullCopy = {...man5,
//     mother: {...man5.mother},
//     work: {...man5.mother.work},
//     parents:
//         {...man5.mother.parents.map(el => ({...el}))}
// }
// console.log(man5FullCopy)
//
//
// // 9 Object inside an object -> array -> object ->  object
// let man6 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht"
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi"
//                 }
//             },
//         ]
//     }
// };
//
// let man6FullCopy  = {...man6, mother: {...man6.mother}, parents: {...man6.mother.parents.map(el => ({...el}))}}
//
// // console.log(man6FullCopy)
//
//
// //10 Array of objects inside an object -> object -> array -> object ->  object
// let man7 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht",
//                     ingredients: [
//                         {title: "beet", amount: 3},
//                         {title: "potatoes", amount: 5},
//                         {title: "carrot", amount: 1},
//                     ]
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi",
//                     ingredients: [
//                         {title: "fish", amount: 1},
//                         {title: "rise", amount: 0.5}
//                     ]
//                 }
//             },
//         ]
//     }
// };
//
// let man7FullCopy  = {...man7, mother: {...man7.mother}, parents: {...man7.mother.parents.map(el => ({...el}))}}
//
// man7FullCopy.parents[0].name = 'Dima'
// // console.log(man7FullCopy)
// // console.log(man7)

// function inc(x,y,c){
//     return (x%y ==0 && x%c ==0) ? true : false
// }
//
// console.log(inc(10, 2, 2))

// function between(a, b) {
//     return Array.from(new Array(b - a + 1), x => a++ )
// }
//
// console.log(between(-2, 2))
//
// it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
// it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));


// function getGrade (s1, s2, s3) {
//     return {
//         10: 'A',
//         9: 'A',
//         8: 'B',
//         7: 'C',
//         6: 'D'
//     }[Math.floor((s1 + s2 + s3) / 30)] || 'F'
//
// }
//
// console.log(getGrade(80, 85, 82))

//
// const rps = (p1, p2) => {
//
//     if (p1 === p2) return 'Draw!'
//
//     if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!'
//     if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!'
//     if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!'
//     else {
//         return 'Player 2 won!'
//     }
// };
//
// console.log(rps('scissors','rock' ))

//
// Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
// Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
// Test.assertEquals(rps('paper', 'rock'), getMsg(1));
// });
// function updateLight(current) {
//     switch (current) {
//         case current = 'green': return 'yellow';
//             break
//         case current = 'yellow': return 'red';
//             break
//         case current = 'red': return 'green'
//         break
//         default: alert('ky')
//     }
//
// }
//
// console.log(updateLight('red'))

// assert.strictEqual(updateLight("green"), "yellow");
// assert.strictEqual(updateLight("yellow"), "red");
// assert.strictEqual(updateLight("red"), "green");

// function points(games) {
//     let sum=0;
//     for (let i=0; i<games.length; ++i)
//     {
//         console.log(games[i][2])
//         if (games[i][0]>games[i][2])
//             sum+=3;
//         if (games[i][0]==games[i][2])
//             sum+=1;
//     }
//     return sum;
// }
//
// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])

// function sum(a, b){
//     return a*b;
// }
//
// console.log(sum(0, 188))

// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240

// function descendingOrder(n){
//     return parseInt((n+'').split('').sort().reverse().join(''))
// }

// assert.strictEqual(descendingOrder(0), 0)
// assert.strictEqual(descendingOrder(1), 1)
// assert.strictEqual(descendingOrder(111), 111)
// assert.strictEqual(descendingOrder(15), 51)
// assert.strictEqual(descendingOrder(1021), 2110)
// assert.strictEqual(descendingOrder(123456789), 987654321)


// function stray(numbers) {
//     let arr = numbers[0];
//
//     for(let i = 1; i < numbers.length; i++){
//         if(arr !== numbers[i]){
//             return arr = numbers[i];
//         }
//     }
//     return 0;
// }
//
// console.log(stray([5,5,1]))
//
//
// function stray(numbers) {
//     return numbers.find((e) => numbers.filter((v) => v===e).length === 1);
// }
// //
// // console.log(stray([1,1,5]))
//
// // let str = (num) => num.find((e) => num.filter((f) => f === e).length === 1)
//
// let str = (num) =>
//     num.find((e) =>
//         num.filter((f) =>
//             f === e).length === 1)
//
// console.log(str([1, 1, 5]))

// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(stray([1, 1, 2]), 2);
//     });
// });


// Kata = (function() {
//     function Kata() {}
//
//     Kata.getVolumeOfCuboid = function(length, width, height) {
//         return length * width * height;
//     };
//
//     return Kata;
//
// })();
//
// console.log(Kata.getVolumeOfCuboid(15,2,6))


// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === '0') {
//             array[i] = array[i] * (1)
//         }
//         array[i] = array[i] * (-1)
//     }
//     return array
// }
//
// console.log(invert([1,2,3]))

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length
// }
//
// console.log(countSheeps([true,true, false, true]))

// [true,  true,  true,  false,
// true,  true,  true,  true ,
// true,  false, true,  false,
// true,  false, false, true ,
// true,  true,  true,  true ,
// false, false, true,  true ];

// function greet(name, owner){
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }
//
// console.log(greet('Daniel', 'Daniel'))

// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')

// function switchItUp(number){
//     switch (number){
//         case 0:
//             return 'zero'
//         case 1:
//             return 'one'
//         case 2:
//             return 'two'
//         case 3:
//             return 'three'
//         case 4:
//             return 'four'
//         case 5:
//             return 'five'
//         case 6:
//             return 'six'
//         case 7:
//             return 'seven'
//         case 8:
//             return 'eight'
//         case 9:
//             return 'nine'
//         break
//         default:
//             console.log('ky')
//     }
// }
//
// console.log(switchItUp(5))

// function solution(str){
//     return str.split('').reverse().join('')
// }
// console.log(solution('world'))

// function bmi(weight, height) {
//     let sum = weight / (height*height)
//     if(sum <= 18.5) return "Underweight"
//     if(sum <= 25.0) return "Normal"
//     if(sum <= 30.0) return "Overweight"
//     if(sum > 30) return "Obese"
// }
//
// console.log(bmi(80, 1.80))

// let abbrevName =(name) => name.split(" ").map(el => el[0].toUpperCase()).join(".")
//
// console.log(abbrevName('Petia Vasia'))

//1. Реализуйте функцию, которая принимает параметром подсторку,
// число повторов и разделитель, а возвращает сторку, состоящую
// из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

// let func = (str, number, strDEF) => {
//     return JSON.stringify(str.repeat(number).split(strDEF))
// }

function rep(a, count, x){
    let string = '';
    for(let i = 0; i <=count; i++){
        string += a;
        if(i < count) {
            string += x
        }
    }
    return string
}

// console.log(rep('yo', 4, ' '))

//2. Реализуйте функцию, которая принимает параметром
// сторку и подстроку, а возвращает true,
// если строка начинается с указанной подстроки,
// в противном случае - false. Регистр не учитывается.

// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

let task2 = function(value, set){
    value = value.toLowerCase()
    return set.split('').reduce((a,b) => value.includes(b) ? a : a + 1, 0) < 1
}
// console.log(task2("Incubator", "tor"))

//3. Реализуйте функцию, которая принимает
// параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до
// указанного количества символов и завершает её многоточием.


//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function rizen( text, limit) {
    return text.slice(0, limit) + '...'
}
// console.log(rizen("Всем студентам инкубатора желаю удачи!", 7))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает самое короткое слово в предложении, если в параметрах пустая
// строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

let findLongestWord = (str) => str.split(' ').reduce((a, b) => (b.length < a.length) ? b : a);
console.log(findLongestWord('Всем студентам инкубатора желаю удачи'))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

function capitalize(str) {
    let x = "";
    for (i = 0; i < str.length; i++) {
        if (str[i - 1] === " " || i === 0) {
            x += str[i].toUpperCase();
        } else {
            x += str[i];
        }
    }
    return x;
}

console.log(capitalize("всем стУдентам инкуБатора Желаю удачИ!"))

// return str.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')


//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// function inc(str1, str2){
//     let a = str1.toLowerCase().split('')
//     let b = str2.toLowerCase().split('')
//
//     while(b.length) {
//         if(a.includes(b[0])){
//             a.splice(a.indexOf(b[0], 1))
//             b.splice(0,1)
//         } else {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(inc("Incubator", "Incubatorrr"))

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0)
//
// }
//
// console.log(enough(100, 60, 50))

// assert.strictEqual(enough(10, 5, 5), 0);
// assert.strictEqual(enough(100, 60, 50), 10);
// assert.strictEqual(enough(20, 5, 5), 0);

// function century(year) {
//     return Math.floor((year-1)/100) +1;
// }
//
// console.log(century(1900))


// function likes (names) {
//     if (names.length === 0) {
//         return 'no one likes this';
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`;
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     } else if (names.length > 3) {
//         return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
//     }
// }
//
// console.log(likes(['Grisha', 'Vasia', 'Vasya']))

// assert.strictEqual(likes([]), 'no one likes this');
// assert.strictEqual(likes(['Peter']), 'Peter likes this');
// assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
// assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');

// function divisibleBy(numbers, divisor){
//     return numbers.filter(i => numbers.includes(i / divisor))
// }
//
// console.log(divisibleBy([1,2,3,4,5,6], 2))
// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
// Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
// Test.assertDeepEquals(divisibleBy([0], 4), [0]);
// Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
// function typeValidation(variable, type) {
//     if(typeof (variable) !== type){
//         return false
//     } else {
//         return true
//     }
// }
//
// console.log(typeValidation(1, 'number'))
// Test.assertEquals(typeValidation(42, "number"), true);
// Test.assertEquals(typeValidation("42", "number"), false);


// function sortArray(array) {
//     const oddArr = [];
//     const evenArr = [];
//     const result = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i]%2 === 0) {
//             evenArr.push(array[i]);
//         } else {
//             oddArr.push(array[i]);
//         }
//     }
//     oddArr.sort((a, b) => a - b);
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i]%2 === 0) {
//             result.push(evenArr.shift());
//         } else {
//             result.push(oddArr.shift());
//         }
//     }
//     return result;
// }
// assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);

// let filter_list = (l) =>
//     JSON.stringify(l.filter(item => typeof item === "number"))
//
//
// console.log(filter_list([1,'a','b',0,15]))
//
// function filter(l){
//     let arr = []
//     for (let i = 0; i < l.length; i++) {
//         if(Number.isInteger(l[i])){
//             arr.push(l[i])
//         }
//     }
//     return arr
// }
//
//
// console.log(filter([1,2,'a','b']))
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// let checkForFactor = (base, factor) => base % factor === 0 ? true : false
// console.log(checkForFactor(63,7))
// Test.assertEquals(checkForFactor(10,2), true)
// Test.assertEquals(checkForFactor(63,7), true)
// Test.assertEquals(checkForFactor(2450,5), true)
// Test.assertEquals(checkForFactor(24612,3), true)

// function htmlspecialchars(formData) {
//     let arr = []
//     for (let i = 0; i < formData.length; i++) {
//         if(formData[i] == '<') {
//             arr.push('&lt;')
//         } else if(formData[i] == '>') {
//             arr.push('&gt;')
//         } else if(formData[i] == '"') {
//             arr.push('&quot;')
//         } else if(formData[i] == '&') {
//             arr.push('&amp;')
//         } else {
//             arr.push(formData[i])
//         }
//     }
//     return arr.join('')
// }
//
// console.log(htmlspecialchars('Hello, how would you & I fare?'))
// function factorial(n){
//     return n ? n * factorial(n - 1) : 1;
// }
// Test.assertEquals(factorial(0), 1);
// Test.assertEquals(factorial(1), 1);
// Test.assertEquals(factorial(4), 24);
// Test.assertEquals(factorial(7), 5040);
// Test.assertEquals(factorial(17), 355687428096000);

function grow(x){
    return x.reduce((a,b) => a*b)
}

console.log(grow([1,2,3,4]))

// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);