function problem6(forms) {
  var answer;
  function restrictNickArr(forms) {
    // let nickname_arr = [];
    let emailArr = [];
    // for (let i = 0; i < forms.length; i++) {
    //   nickname_arr.push(forms[i][1]);
    // }
    for (let i = 0; i < forms.length; i++) {
      for (let j = 0; j < forms[i][1].length - 1; j++) {
        for (let k = i + 1; k < forms.length; k++) {
          if (
            forms[k][1].indexOf(forms[i][1][j] + forms[i][1][j + 1], 0) == -1
          ) {
          } else {
            emailArr.push(forms[k][0], forms[i][0]);
          }
        }
      }
    } //forms[0][1]~forms[5][1]까지 두글자씩 순회하며 서로 비교
    //중복값이 있을경우(else) emailArr에 해당 email을 push
    let uniqueEmailArr = [];
    emailArr.sort().forEach((element) => {
      if (!uniqueEmailArr.includes(element)) {
        uniqueEmailArr.push(element);
      } //emailArr의 중복 인덱스 제거 및 오름차순 정렬
    });
    return uniqueEmailArr;
  }

  answer = restrictNickArr(forms);

  return answer;
}
module.exports = problem6;
//리팩토링필요..
