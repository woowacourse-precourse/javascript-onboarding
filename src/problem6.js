//이메일(key), 닉네임(value)를 각각의 배열에 반환
const createArr = (data) => {
  const emailArr = [...new Map(data).keys()]
  const nicknameArr = [...new Map(data).values()]
  const checkArr = new Array(data.length)
}
 
// function problem6(forms) {
//   return createArr(forms)
// }


// // module.exports = problem6;
