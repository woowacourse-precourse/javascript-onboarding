function problem6(forms) {
  let answer = [];
  let nameList = [];
  let duplicate = [];

  //이름 한글자씩 분리해서 배열에 넣기
  for (let i = 0; i < forms.length; i++) {
    nameList.push(forms[i][1].split(""));
  }

  //이름 자리수마다 비교해서 중복 되는 이름 배열에 넣기
  for (let i = 0; i < nameList.length - 1; i++) {
    for (let j = i + 1; j < nameList.length; j++) {
      for (let k = 0; k < nameList[i].length - 1; k++) {
        for (let l = 0; l < nameList[j].length - 1; l++) {
          if (nameList[i].slice(k, k + 2).join() === nameList[j].slice(l, l + 2).join()) {
            duplicate.push(nameList[i].join(""));
            duplicate.push(nameList[j].join(""));
            break;
          }
        }
      }
    }
  }

  let returnName = new Set(duplicate);
  returnName = [...returnName];

  //중복 배열에 있는 이름의 이메일 리턴하기
  for (let i = 0; i < returnName.length; i++) {
    forms.map((name) => {
      if (name.includes(returnName[i])) {
        answer.push(name.filter((name) => name !== returnName[i]).join());
      }
    });
  }

  answer.sort();
  return answer;
}

module.exports = problem6;
