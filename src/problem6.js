function problem6(forms) {
  // 크루들의 닉네임 중 공통으로 포함되는 두글자 찾기
  let twoChars = new Set()   // 닉네임의 두글자 모음
  let commonWords = new Set()   // 크루들의 닉네임 중 공통으로 포함되는 두글자
  for (let trainee of forms) {
    let nickname = trainee[1]
    for (let start = 0; start < nickname.length - 1; start++) {
      let twoChar = nickname.slice(start, start + 2)
      if (twoChars.has(twoChar)) {
        commonWords.add(twoChar)
      } else {
        twoChars.add(twoChar)
      }
    }
  }

  // 교육생을 순회하면서 같은 글자가 연속적으로 포함되는 닉네임 찾기
  result = []
  for (let trainee of forms) {
    let email = trainee[0]
    let nickname = trainee[1]
    for (let commonWord of commonWords) {
      if (nickname.includes(commonWord)) {
        result.push(email)
        break
      }
    }
  }

  // 이메일을 오름차순으로 정렬
  result.sort()

  return result
}

module.exports = problem6;
