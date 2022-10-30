const clapCount = (num) => {
  return num;
}

function problem3(number) {
  var answer = 0;

  for(let i = 1; i < number + 1; i++){
    answer += clapCount(i);
  }

  return answer;
}

module.exports = problem3;
