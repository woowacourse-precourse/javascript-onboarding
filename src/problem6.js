function problem6(forms) {
  // input에서 이름만 뽑아 nameList에 추가
  let nameList = [];
  for (let i of forms) {
    nameList.push(i[1]);
  }

  // 이름에서 추출할 수 있는 순서가 있는 두 글자의 모음을 twoLetterList에 추가
  twoLetterList = [];
  for (let i of nameList) {
    for (let j = 0;j < i.length - 1; j++) {
      twoLetterList.push(i.substr(j , 2));
    }
  }
  twoLetterList = [...new Set(twoLetterList)];

  // 위에서 추출한 글자가 이름에 총 몇 번 들어갔는지 각각의 count를 countList에 반환
  let countList = [];
  for (let i = 0; i < twoLetterList.length ; i++) {
    countList[i] = 0;
  }
  for (let i of nameList) {
    let count = 0;
    for (let j = 0; j < twoLetterList.length; j++) {
      let k = twoLetterList[j];
      if (i.indexOf(k) === 0) {
        countList[j] = countList[j] + 1;
      }
    }
  }


  // 2개 이상 count된 글자가 어느 이름에 있는지 확인 후 추출한 각 이름에 해당하는 이메일을 result 배열에 추가
  let result = [];
  for (let i = 0; i < countList.length; i++) {
    if (countList[i] >1) {
      for (let j = 0; j < nameList.length; j++) {
        if (nameList[j].indexOf(twoLetterList[i]) !== -1) {
          result.push(forms[j][0]);
        }
      }
    } 
  }

  // result 배열 오름차순 정렬
  result.sort();

  let answer = result;
  return answer;
}

module.exports = problem6;

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));