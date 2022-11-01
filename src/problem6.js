function problem6(forms) {
  let answer = [];
  let ID = forms.map(value => value[1])
  let table = Array(forms.length).fill(0)
  
  for (let i = 0; i < ID.length; i++) {
    let tmp = '';
    for (let j = 0; j < ID[i].length; j++) {
      if (tmp == "") {
        tmp = ID[i][j]
      } else if (tmp.length === 1) {
        tmp += ID[i][j] 
      } else if (tmp.length === 2) {
        tmp = tmp.substring(1) + ID[i][j]
      }
            
      if (tmp.length === 2) {
        //중복 값 구했음, 이제 인덱스를 반환하면 됨
        for (let k = 0; k < ID.length; k++) {
          if (k === i) {
            continue;
          }
          if (ID[k].indexOf(tmp) !== -1) {
            table[k]++;
            table[i]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < table.length; i++) {
    if (table[i] !== 0) {
      answer.push(forms[i][0])
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
