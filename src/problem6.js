function problem6(forms) {
  let answer = [];
  // 비교 기준이 되는 닉네임 (forms[i][1])
  for (i = 0; i < forms.length - 1; i++){
    for (j = 2; j < forms[i][1].length; j++){
      for (let start = 0; start < forms[i][1].length - j + 1; start++) {
        temp = forms[i][1].slice(start, start + j); // 특정 길이의 부분 닉네임 선택    
        for (let k = i+1; k < forms.length; k++) {
          console.log(`i: ${i} / j: ${j} / star: ${start} / k: ${k}`);
          if (forms[k][1].includes(temp)) {
            answer.push(forms[i][0]);
            answer.push(forms[k][0]);
            console.log(`answer : ${answer}`);
          }          
        }    
      }
    }
  }

  tempSet = new Set(answer);
  tempArray = [...tempSet];
  tempArray.sort();
  return tempArray;
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]));

module.exports = problem6;
