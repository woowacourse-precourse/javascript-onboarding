function problem6(forms) {
  
  // 닉네임 저장 Arr
  const nickName = []
  // 2글자씩 저장 Arr
  const twoLetter = []
  // 중복된 닉네임에 따른 이메일 저장
  const resultEmail = new Set()

  for (let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1])
    for (let j = 0; j < nickName[i].length - 1; j++) {
      twoLetter.push(nickName[i].slice(j, j + 2))
    }
  }

  // twoLetter에서 중복된 단어 찾아서 반환하는 함수
  function findDuplicates(twoLetter) {
    const word = twoLetter.filter((item, index) => twoLetter.indexOf(item) !== index);
    return [...new Set(word)]
  }

  // 고유한 값 저장
  const word = findDuplicates(twoLetter);  
  console.log(word.length)

  // forms에서 중복된 단어에 따른 이메일 저장 
  for (i = 0; i < forms.length; i++) {
    // 중복된 단어가 여러개 일 경우(예외처리)
    for (j = 0; j < word.length; j++) {
      if (forms[i][1].includes(word[j])) {
        resultEmail.add(forms[i][0]);
      }
    }
  }

  // 배열로 변환
  const answer = [...resultEmail]
  
  // 오름차순으로 정렬
  answer.sort();

  return answer
}

module.exports = problem6;
