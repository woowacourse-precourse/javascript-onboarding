function problem6(forms) {
  var answer = [];
  let find = []; //중복문자열
  let idx = [];

  if (!forms) {
    return;
  }

  for (let i = 0; i < forms.length; i++) {
    if (typeof forms[i][0] === "string" && typeof forms[i][1] === "string") {
      if (forms[i][1]) {
        for (let j = 0; j < forms[i].length; j++) {
          if (forms[i][1][j + 1]) {
            find.push({ idx: i, char: forms[i][1][j] + forms[i][1][j + 1] });
          }
        }
      }
    }
  }

  for (let i = 0; i < find.length; i++) {
    //중복 문자열로부터 정규식 체크 : idx 추출
    let regex = new RegExp(find[i].char);
    if (find[i + 1]) {
      if (regex.test(find[0].char)) {
        idx.push(find[i].idx);
      }
    }
  }

  if (idx.length >= 2) {
    //중복 문자열이 있으면 해당 idx의 email을 넣고 sorting
    for (let i = 0; i < idx.length; i++) {
      answer.push(forms[idx[i]][0]);
    }
  }

  answer.sort().filter((el, idx) => {
    return answer.indexOf(el) === idx;
  });
  return answer;
}

module.exports = problem6;
