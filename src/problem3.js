function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += count369(i);
  }
  return answer;
}
function count369(number) {
  //해당에서 3,6,9 몇개 있는지 리턴한다
  let count = 0;
  numString = number.toString();
  for (let i in numString) {
    if (["3", "6", "9"].includes(numString[i])) {
      count++;
    }
  }
  return count;
}

module.exports = problem3;
