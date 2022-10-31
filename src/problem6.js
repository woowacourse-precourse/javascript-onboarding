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

  //2번의 각 인덱스에 해당하는 값이 중복되는지 확인
  for (let i =0; i <splicing.length; i++){
    for (let j =i+1; j < splicing.length; j++){
      const mergeSubstrings = [...splicing[i], ...splicing[j]]
      const check = new Set(mergeSubstrings)
      
      if (mergeSubstrings.length !== check.size){
        checkArr[i]=true
        checkArr[j]=true
      } 
    } 
  }

  //중복되는 이메일 출력
  const noticeTargetEmails = emailArr.filter((_, idx) => checkArr[idx])
  
  //오름차순으로 정렬 후 중복 제거
  return noticeTargetEmails.sort((a,b) => a.localeCompare(b))
}
 
function problem6(forms) {
  return createArr(forms)
}


module.exports = problem6;