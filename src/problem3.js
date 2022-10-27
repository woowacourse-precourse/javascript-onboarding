function problem3(number) {
  const makeArray = String([...Array(number+1).keys()]).split("");
  const findThreeSixNine = makeArray.filter(num => ["3", "6", "9"].includes(num));
  
  return answer;
}

module.exports = problem3;
