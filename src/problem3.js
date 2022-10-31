const getMatchCount = (target) => {
  const result = target.match(/3|6|9/g) || [];
  return result.length;
};

function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getMatchCount(String(i));
  }

  return answer;
}

module.exports = problem3;
