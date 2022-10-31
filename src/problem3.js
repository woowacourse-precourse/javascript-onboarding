function problem3(number) {
  let answer = "";

  for (let i = number.length - 1; i >= 0; i--){
    answer = answer + number[i];
  }
  return answer;
}

console.log(problem3("I love you"));

module.exports = problem3;
