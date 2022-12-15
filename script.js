console.log(this)

const user = {
    name: 'Alex',
    showName(){
        console.log(this.name)
    }
}
user.showName()