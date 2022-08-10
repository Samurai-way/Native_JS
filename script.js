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
    {id: 1,
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

const user = {
    user: 'Bob',
    'user age': 13
}
console.log(user["user age"])