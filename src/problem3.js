const isThreeSixNine = (number) => {
  const isThreeSixNine = false;
  if (number === "3" || number === "6" || number === "9") isThreeSixNine = true;
  return isThreeSixNine;
};
const countThreeSixNine = (number) => {
  let count = 0;
  const numberToString = number.toString();
  for (eachNumber of numberToString) {
    if (isThreeSixNine(eachNumber)) count++;
  }
  return count;
};
function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
