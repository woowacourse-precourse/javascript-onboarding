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
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])

// module.exports = problem6;
