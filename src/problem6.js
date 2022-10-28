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

  let includeOrNot = [];
  for (let i of nameList) {
    for (let j of twoLetterList) {
      includeOrNot.push(i.indexOf(j));
    }
  }

  let answer = includeOrNot;
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