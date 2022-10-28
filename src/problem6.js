function problem6(forms) {
  // [ '제이엠', '제이슨', '워니', '엠제이', '이제엠' ]
  let nameList = [];
  for (let i of forms) {
    nameList.push(i[1]);
  }

  //['제이', '이엠', '이슨', '워니', '엠제', '이제', '제엠']
  twoLetterList = [];
  for (let i of nameList) {
    for (let j = 0;j < i.length - 1; j++) {
      twoLetterList.push(i.substr(j , 2));
    }
  }
  twoLetterList = [...new Set(twoLetterList)];

  // 중복 횟수를 세어 각각의 count를 countList에 반환
  let countList = [];
  for (let i = 0; i < twoLetterList.length ; i++) {
    countList[i] = 0;
  }

  // countList = [1, 0, 0, 0, 0, 0, 0]
  for (let i of nameList) {
    let count = 0;
    for (let j = 0; j < twoLetterList.length; j++) {
      let k = twoLetterList[j];
      if (i.indexOf(k) === 0) {
        countList[j] = countList[j] + 1;
      }
    }
  }


  // 2개 이상 count된 두 글자를 찾아 
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

  // 오름차순 정렬
  result.sort();
  
  let answer = result;
  return answer;
}

module.exports = problem6;

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

// input: [ ["jm@email.com", "제이엠"], O '제이'엠
//        ["jason@email.com", "제이슨"], O '제이'슨
//        ["woniee@email.com", "워니"], 
//        ["mj@email.com", "엠제이"], O 엠'제이'
//        ["nowm@email.com", "이제엠"] ]

// output: ["jason@email.com", "jm@email.com", "mj@email.com"]