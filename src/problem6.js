function problem6(forms) {
  var answer;
  let student = [];
  let stackArr = [];
  let errEmail = [];
  forms.map((x, i) => {
    student.push(x);

    stackArr = student[i][1];
    let message = student[0][1] + "?";
    let regexp = RegExp(message, "gi");
    if (stackArr.search(regexp) >= 0) {
      errEmail.push(student[i][0]);
    }
  });
  let item = errEmail.splice(0, 1);
  errEmail.splice(1, 0, item[0]);
  answer = errEmail;
  return answer;
}

module.exports = problem6;

// 기능 목록
// 1. 각 학생들의 닉네임을 스택배열에 넣고, 다음 학색의 닉네임이 들어왔을 때 비교한다.
// 2. 같은 글자가 연속적으로 포함되었을 때, 해당 닉네임의 이메일을 반환한다.
// 3. 에러 : 반환 순서 조정..
