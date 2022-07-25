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