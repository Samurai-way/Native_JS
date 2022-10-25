function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] + numbers[1];
}

// console.log(largestPairSum([10,14,2,23,19]))
// doTest([10,14,2,23,19], 42);
//     doTest([-100,-29,-24,-19,19], 0);
//     doTest([1,2,3,4,6,-1,2], 10);
//     doTest([-10, -8, -16, -18, -19], -18);

// const deleteUser = (userID) => {
//     const action = {
//         type: 'DELETE-USER',
//         payload: {
//             userID: userID
//         }
//     }
//     return action
// }
//
// const action1 = deleteUser('12345')
// const action2 = deleteUser('12345')
//
// console.log(action1)

//2

// function DeleteAction(userID) {
//     this.type = 'DELETE-TYPE',
//         this.payload = {
//             userID: userID
//         }
// }
//
// const action1 = new DeleteAction(12345)
// const action2 = new DeleteAction(123)
// console.log(action1)
// console.log(action2)

// const a = {}
// a.constructor.name
// console.log(a)
//3

// class DeleteUserAction {
//     constructor() {
//         this.type = 'DELETE-USER',
//             this.payload = {
//                 userID: userID
//             }
//     }
// }

// const userFabric = (name) => {
//     const user = {
//         name: name,
//         site: 'google',
//         hello(){
//             console.log(`I am ${this.name} from ${this.site}`)
//         }
//     }
//     return user
// }
//
// const u1 = userFabric('Dima')
// const u2 = userFabric('Grisha')
//
// u1.hello()
//
// console.log(u1)
// console.log(u2)

// class User {
//     #name = 'Oleg'
//     constructor(name, site, dob) {
//         this.#name = name;
//         this.site = site;
//         this.dateOfBirth = dob
//         this.counter = 0
//     }
//
//     getName(){
//         return this.#name
//     }
//
//     setName(){
//         return this.#name
//     }
//
//     hello(){
//         this.counter++
//         console.log(`I am ${this.name} from ${this.site}`)
//     }
// }
//
// const u1 = new User('Dima', 'google', new Date(1998, 1,2))
// u1.hello()
//
// console.log(u1.setName())

// наследование

class User {
    #name = 'Oleg'

    constructor(name, site, dob, tech) {
        this.name = name;
        this.site = site;
        this.dateOfBirth = dob
        this.counter = 0
        this.tech = tech
    }

    getName() {
        return this.#name
    }

    setName() {
        return this.#name
    }

    hello() {
        this.counter++
        console.log(`I am ${this.name} from ${this.site} + ${this.tech}`)
    }
}

const u1 = new User('Dima', 'google', new Date(1998, 1, 2), '15')
const u2 = new User('Sasha', 'google', new Date(1998, 1, 2), '25')
u1.hello()

// console.log(u1.setName())

const users = [u1, u2]
// users.forEach((u) => u.hello())

class Coder extends User {
    code() {
        console.log(`I am ${this.name}, is my code: const sum = (a,b) => a + b`)
    }
    hello() {
        super.hello();
        console.log('go away')
    }
}

const coder1 = new Coder('Ronaldo', 'yandex', new Date(2000, 1, 2), '152')
coder1.hello()


// наследование, расширение свойств на основе чего-то базового
let person = {
    name: '',
    age: 15,
    email: '',
    role: ''
}

admin(person){

}
//

// полиморфизм - возможность менять методы и свойства, соблюдая при этом интерфейс взаимодействия так, что эти
// свойства  и методы могут содержать разные данные и разные
// действия, но, результат будет один и там и там, возможно результат будет разный
// такое тоже может быть






            // инкапсуляция - не возможность прямого доступа к данным, что бы к ним достучаться, мы делаем контролируемый доступ, с помощью
            // методов
let course = {
    title: '',
    url: '',
    price: ''
}
