function problem6(forms) {
  let answer = []

  for (let i = 0; i < forms.length; i++) {
    let nickName = forms[i][1]
    //비교하고자 하는 닉네임을 선언

    for (let j = 0; j < nickName.length; j++) {
      let partOfNickName = nickName.slice(j, j + 2)
      //최소 2글자라도 연속이면 중복이므로 최소단위인 2글자씩 분리

      if (partOfNickName.length === 1) continue

      for (let k = 0; k < forms.length; k++) {
        if (k === i) continue

        if (forms[k][1].includes(partOfNickName)) {
          if (!answer.includes(forms[k][0])) {
            //중복처리
            answer.push(forms[k][0])
          }
        }
      }
    }
  }

  return answer.sort()
}

module.exports = problem6
