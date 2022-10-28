function problem3(number) {
  var answer;
  return answer;
}
function countNumber(number) {
  str = string(number);
  let count = 0;
  str.forEach((char) => {
    if (char == "3" || char == "6" || char == "9") {
      count += 1;
    }
  });
  return count;
}
module.exports = problem3;
