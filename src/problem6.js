//이메일(key), 닉네임(value)를 각각의 배열에 반환
const createArr = (data) => {
  const emailArr = [...new Map(data).keys()]
  const nicknameArr = [...new Map(data).values()]
  const checkArr = new Array(data.length)

  //닉네임을 두글자씩 나누어 새로운 배열에 반환
  const splicing = nicknameArr.map(nickname => {
    let splicing = []
    for (let i =0; i <nickname.length-1; i++){
      const substring = nickname[i] + nickname[i+1]
      splicing.push(substring)
    }
    splicing = [...new Set(splicing)]

    return splicing
  })
}
 
// function problem6(forms) {
//   return createArr(forms)
// }


// // module.exports = problem6;
