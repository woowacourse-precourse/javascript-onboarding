function problem6(forms) {
  let nameDict = {}
  let answer = []

  // 두 글자씩 잘라 dict 제작 후 이메일 배열 만듬
  forms.forEach((user) =>{
    let user_email, user_nickName
    [user_email, user_nickName] = user

    let cutPieces = cutNameTwoWords(user_nickName)
    cutPieces.forEach(piece =>{
      if(Object.keys(nameDict).includes(piece)){
        nameDict[piece].push(user_email)
      }
      else{
        nameDict[piece] = [user_email]
      }
    })
  })

  // 중복된 닉네임 조각이 있는 이메일 걸러내기
  Object.keys(nameDict).forEach(element =>{
    if (nameDict[element].length != 1){
      answer.push(...nameDict[element])
    }
  })

  // 중복 제거
  answer = new Set(answer)
  answer = [...answer]

  return answer;
}


// 두 글자씩 자른다
function cutNameTwoWords(name){
  let rst_arr = []
  if(name.length == 1){
    return rst_arr
  }
  
  let nowPiece = name.slice(0,2)
  rst_arr.push(nowPiece)
  let name_strArr = [...name].slice(2)
  name_strArr.forEach((char) =>{
    nowPiece = nowPiece[1] + char
    rst_arr.push(nowPiece)
  })

  return rst_arr
}


module.exports = problem6;
