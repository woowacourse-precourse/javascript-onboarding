function problem3(number) {
  var answer = solution(number);
  return answer;
};
function solution(number) {
  let changeArr = [];
  let clap = [];
  for(let i = 1; i <= number; i++) {
    changeArr.push(i)
  };
  clap = changeArr.toString().split("").filter(item => item == 3 || item == 6 || item == 9);
  let countClap = clap.length;
  return countClap;
};
module.exports = problem3;