function checkOverlap(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) return 1;
  }
}

function deleteOverlap(str) {
  var test = str;
  while (checkOverlap(test)) {
    var test2 = [];
    if (test[0] != test[1]) test2.push(test[0]);
    for (var i = 1; i < test.length - 1; i++) {
      if (test[i - 1] != test[i] && test[i] != test[i + 1]) {
        test2.push(test[i]);
      }
    }
    if (test[test.length - 1] != test[test.length - 2]) {
      test2.push(test[test.length - 1]);
    }
    test = test2;
  }
  return test;
}

function problem2(cryptogram) {
  var answer = deleteOverlap(cryptogram);
  answer = answer.join("");

  return answer;
}

module.exports = problem2;
