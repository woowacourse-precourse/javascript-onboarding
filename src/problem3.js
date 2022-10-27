function problem3(number) {
  var answer;
  return answer;
}

function count369(number) {
  return number
    .toString()
    .split("")
    .filter((ele) => ele !== "0" && Number(ele) % 3 === 0).length;
}

module.exports = problem3;
