console.log(typeof [])
console.log(typeof {})
console.log(typeof (()=>{}))

const user = {
    name: 'Bob',
    age: 23,
    isStudent: true,
    friends: [
        'Oleg', 'Vasia'
    ]
}
user.friends.push('Katya')
const user2 = {...user, isMarried: true, name: 'Vasia'}
const deepCopyUser = {...user, friends: [...user.friends]}

// console.log(user2)
console.log(deepCopyUser)

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]

const newStudents = students.map(st => st.name === 'Alex' ? {...st, name: 'Joe'} : st)
console.log(newStudents)

const arr = [1,2,3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

let a,b,c;

const [a,b,c] = arr