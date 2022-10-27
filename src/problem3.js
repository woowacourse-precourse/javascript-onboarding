function problem3(number) {
  var answer = 0;
  const reg = /[3|6|9]/g;

  for (let i = 1; i <= number; i++) {
    let samYukGuNumber = String(i).match(reg);
    if (samYukGuNumber) {
      answer += samYukGuNumber.length;
    }
  }

  return answer;
}

module.exports = problem3;
