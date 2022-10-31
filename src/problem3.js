function problem3(number) {
  var answer = 0;
  var tempForCheck;
  var result = 0;

  for (var i=1; i<=number; i++) {
    tempForCheck = i.toString();
    result = tempForCheck.match(/[3|6|9]/g);
    if (result != undefined)
      answer += result.length;
  }

  return answer;
}

module.exports = problem3;
