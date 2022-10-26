function problem3(number) {
  let answer = 0;
  let check = ["3", "6", "9"];

  //연산
  for (let i = 1; i <= number; i++) {
    //기능목록 1-1 구현
    let num = i.toString();
    for (let x of num) {
      //기능목록 1-2 구현
      if (check.includes(x)) answer++;
    }
  }
  return answer;
}

module.exports = problem3;
