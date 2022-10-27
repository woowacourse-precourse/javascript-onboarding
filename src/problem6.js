function problem6(forms) {
  var answer;
  let student = [];
  let stackArr = [];
  let errEmail = [];
  forms.map((x, i) => {
    student.push(x);

    stackArr = student[i][1];
    let rep = stackArr.search(/제이엠?/g);
    if (rep >= 0) {
      console.log(student[i][0]);
      errEmail.push(student[i][0]);
    }
    // stackArr.map((e) => {
    //   console.log(e);
    //   if (student[top][1].match(e)) {
    //     sameCount++;
    //     console.log(e, "있음", sameCount);
    //   }
    // });

    // if (student[i][1] !== "제이엠" && sameCount >= 2) {
    //   errEmail = student[0][i];
    //   console.log(errEmail);
    // }
  });
  console.log(errEmail);
  answer = errEmail;
  return answer;
}

module.exports = problem6;

// 기능 목록
// 1. 각 학생들의 닉네임을 스택배열에 넣고, 다음 학색의 닉네임이 들어왔을 때 비교한다.
// 2. 같은 글자가 연속적으로 포함되었을 때, 해당 닉네임의 이메일을 반환한다.
