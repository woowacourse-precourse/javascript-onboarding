function problem6(forms) {
  // 닉네임 리스트
  let nicks = [];
  for (let i = 0; i < forms.length; i++) {
    nicks.push(forms[i][1]);
  }

  // 닉네임 별로 doubledList 만들기
  let doubledList = [];
  let emailList = [];

  for (let i = 0; i < nicks.length; i++) {
    makeList(nicks[i]);
  }

  function makeList(nick) {
    // 두글자씩 자르기
    for (let i = 0; i < nick.length - 1; i++) {
      str = nick.substr(i, 2 * (i + 1));
      if (doubledList.includes(str) === false) {
        doubledList.push(str);
      } else {
        emailList.push(nick);
      }
    }
  }

  // 맨 처음 사람 별도 체크
  let lastCheck = [...emailList];
  let doubledListLast = [];

  function makingLast(nick) {
    // 두글자씩 자르기
    for (let i = 0; i < nick.length - 1; i++) {
      str = nick.substr(i, 2 * (i + 1));
      doubledListLast.push(str);
    }
  }

  for (let i = 0; i < lastCheck.length; i++) {
    makingLast(lastCheck[i]);
  }

  // 첫번째 닉네임 자르면서 includes 확인
  let first = nicks[0];
  for (let i = 0; i < first.length - 1; i++) {
    str = first.substr(i, 2 * (i + 1));
    if (doubledListLast.includes(str) === false) {
      doubledListLast.push(str);
    } else {
      emailList.push(first);
    }
  }

  // 이메일 주소 리턴 (오름차순)
  let answer = [];
  let i = 0;
  while (i < emailList.length) {
    let j = 0;
    while (j < forms.length) {
      if (emailList[i] === forms[j][1]) {
        answer.push(forms[j][0]);
      }
      j++;
    }
    i++;
  }

  answer = answer.sort();

  return answer;
}

module.exports = problem6;
