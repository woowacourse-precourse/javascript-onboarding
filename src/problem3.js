function problem3(number) {
  let count = 0;
  function get369Count(num) {
    let str = String(num);
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
      let tempChar = str.charAt(i);
      if (tempChar === "3" || tempChar === "6" || tempChar === "9") {
        answer++;
      }
    }
    return answer;
  }
  for (let i = 1; i <= number; i++) {
    count += get369Count(i);
  }
  return count;
}

module.exports = problem3;
