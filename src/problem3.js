const countThreeSixNine = (number) => {
  let count = 0;
  const numberToString = number.toString();
  for (eachNumber of numberToString) {
    if (eachNumber === "3" || eachNumber === "6" || eachNumber === "9") count++;
  }
  return count;
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
