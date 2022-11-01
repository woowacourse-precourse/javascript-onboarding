function problem6(forms) {
  let answer = [];
  const len = forms.length;
  let check = Array.from({ length: len }, () => 0);
  // 닉네임 길이를 오름차순 정렬.
  forms = sortAscen(forms);
  
  // 중복되는 닉네임을 찾고 check 배열에 기록.
  check = mainCheck(forms, len, check);
  
  // 중복됐다고 기록된 교육생들의 이메일을 받아내고, 오름차순으로 정렬
  check.map((el, idx) => {
    if (el) {
      answer.push(forms[idx][0]);
    }
  })
  return answer.sort();
}


// 닉네임 길이를 오름차순으로 정렬하는 함수.
const sortAscen = (arr) => {
  arr.sort((a, b) => {
    if (a[1].length > b[1].length) return 1;
    else return - 1;
  })
  return arr;
}

// 중복되는 닉네임을 찾아내는 함수 집합.
const mainCheck = (forms, len, check) => {
  for (let i = 0; i < len - 1; i++){
      let nickname = forms[i][1];
      let nameLen = nickname.length;

      // 닉네임이 한글자 이거나, 이미 중복으로 체크됐을 경우, 건너뛴다.
      if (nameLen === 1 || check[i]) continue;

      // 2글자 이상의 문자를 만들면서, 나머지 교육생들과 중복되는지 찾는 부분.
      for (let j = 2; j <= nameLen; j++){
        for (let idx = 0; idx + j <= nameLen; idx++){
          let word = nickname.substr(idx, j);

          // 중복된 문자열(닉네임)을 찾는 부분.
          check = duplCheck(word, forms, i, len, check);
        } 
      }  
  }
  return check;
}



// 중복된 문자열(닉네임)을 찾는 함수
const duplCheck = (word, formArr, formIdx, formLen, checkArr) => {
  for (let i = formIdx+1; i < formLen; i++){
    if (formArr[i][1].includes(word)) {
      checkArr[formIdx] = 1;
      checkArr[i] = 1;
    }
  }
  return checkArr;
}

problem6(forms);


module.exports = problem6;
