function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    const numberToString = i.toString();
    const matchArr = numberToString.match(/[3|6|9]/g);
    //match는 일치하는 항목이 없다면 null 반환
    if (matchArr === null) continue;
    answer += matchArr.length;
  }
  return answer;
}

module.exports = problem3;
