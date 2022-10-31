function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) answer += count369(i);
  return answer;
}

function count369(number) {
  return number
    .toString()
    .split("")
    .filter((ele) => ele !== "0" && Number(ele) % 3 === 0).length;
}

module.exports = problem3;
