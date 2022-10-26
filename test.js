function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    i.toString()
      .split("")
      .forEach((el) => {
        if (el === "3" || el === "6" || el === "9") cnt += 1;
      });
    answer += cnt;
  }
  return answer;
}

console.log(problem3(13));
console.log(problem3(33));
