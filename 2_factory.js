// 2 pattern ( factory )

class SimpleMember {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMember {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMember {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMember,
        standard: StandardMember,
        premium: PremiumMember
    }

    create (name, type = 'simple'){
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new MemberShip(name)
        member.type = type
        member.define = function (){
            console.log(`${this.name}` `${this.type}` `${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Dima', 'simple'),
    factory.create('Sasha', 'premium'),
]

console.log(members.forEach(e => e.cost))