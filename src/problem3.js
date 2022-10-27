function isClapping(number) {
  let cnt = 0;
  while (number > 0) {
    const checkNum = number % 10;
    if (checkNum == 3 || checkNum == 6 || checkNum == 9) cnt++;
    number = Math.floor(number / 10);
  }
  return cnt;
}
function problem3(number) {
  let result = 0;
  for (let cnt = 1; cnt <= number; cnt++) result += isClapping(cnt);
  return result;
}

module.exports = problem3;
