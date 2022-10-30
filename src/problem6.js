function problem6(forms) {
  var answer = [];
  let obj = {};
  let visited = 0;
  for (i = 0; i < forms.length; i++) {
    // 이메일 도메인이 email.com이 아닌 경우는 제외
    const arr = forms[i][0].split("@");
    if (arr[1] !== "email.com") {
      continue;
    }

    let isFound = false;
    for (j = 0; j < forms[i][1].length - 1; j++) {
      let uni =
        forms[i][1].charCodeAt(j).toString(16) +
        forms[i][1].charCodeAt(j + 1).toString(16);

      if (uni in obj) {
        console.log(forms[i][0]);
        if (isFound === false) {
          isFound = true;
          answer.push(forms[i][0]);
          visited |= 1 << i;

          if ((visited & (1 << obj[uni])) === 0) {
            answer.push(forms[obj[uni]][0]);
            visited |= 1 << obj[uni];
          }
        }
      } else {
        obj[uni] = i;
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
