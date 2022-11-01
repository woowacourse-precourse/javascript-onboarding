function problem6(forms) {
  let answer = [];
  let nameCheckList = {};
  let warningList = [];

  //닉네임을 두 글자씩 잘라서 나온 횟수와 함께 저장
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      if (forms[i][1].substr(j, 2) in nameCheckList) {
        nameCheckList[forms[i][1].substr(j, 2)] += 1;
      } else {
        nameCheckList[forms[i][1].substr(j, 2)] = 1;
      }
    }
  }

  //두 번 이상 나온 경우들을 저장
  for (let key in nameCheckList) {
    if (nameCheckList[key] > 1) {
      warningList.push(key);
    }
  }

  //닉네임 검사를 통과하지 못한 사람들의 이메일을 저장
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < warningList.length; j++) {
      if (forms[i][1].includes(warningList[j])) {
        answer.push(forms[i][0]);
        break;
      }
    }
  }

  //중복 제거
  answer = answer.filter((v, i) => answer.indexOf(v) === i);

  //오름차순 정렬
  answer.sort();

  return answer;
}

module.exports = problem6;
