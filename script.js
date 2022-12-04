// const regex = /358\d{7}/;
// const regexText = /@gmail.\w{3}/;
// const emailName = /^[a-z]+@gmail\.com$/ // начало от a до z, а конец @gmail.com и только точка и ничего другого
// const trueRes = /^\w+@gmail\.com$/
// const trueName = /^oleg+@mail\.ru$/
// const reg = /^http\w{0,}:\/\/tut\.by$/
//
// console.log(reg.test('httpsasfaf://tut.by'))
// // console.log(trueName.test('oleg@mail.ru'))
// // console.log(regex.test(358111111))
// // console.log(regexText.test('oleg@gmail.cm'))
// // console.log(emailName.test('aassasaz@gmail,com'))
// // console.log(trueRes.test('oleg@gmail.com'))


let obj1 = {
    title: "title",
    items: [
        {
            id: "id20029",
            likeList:
                [
                    {
                        likeCount: '22',
                        dislikeCount: '23'
                    }
                ]
        }
    ]
}

const copyObj = {
    ...obj1,
    items: obj1.items.map((item) => ({
        ...item,
        likeList: item.likeList.map(like => ({ ...like }))
    })),
}
console.log(copyObj.items[0].likeList[0].likeCount)