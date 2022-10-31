function problem6(forms) {

  let emailList = [];
  
  const formsMap = new Map(forms);
  const nickName = Array.from(formsMap.values());

  //다른 크루들과 닉네임이 연속으로 2글자 이상 중복되는지 확인하는 기능
  const check = (name) => {
    for (let i = 0; i < nickName.length; i++) {
      for (let j = 0; j < nickName[i].length - 1; j++) {
        if (name == nickName[i]) continue;
        if (name.includes(nickName[i][j] + nickName[i][j + 1])) {
          return true;
        }
      }
    }
  }

  //중복되는 크루들의 이메일을 담는 기능
  formsMap.forEach((value, key) => {
    if (check(value)) emailList.push(key);
  })

  //중복된 크루들의 이메일의 목록에서 중복을 제거하고, 오름차순으로 정렬하는 기능
  return emailList = [...new Set(emailList)].sort()
}

module.exports = problem6;
