function problem2(cryptogram) {
  var answer;
  let rule = /(\w)\1+/g;
  let repeated = cryptogram.match(rule);
  let deleted = cryptogram;

  function fnc2() {
    deleted = deleted.replace(repeated[0], "");
    repeated = deleted.match(rule);
  }

  if (repeated === null) {
    return cryptogram;
  } else {
    fnc2();
    while (repeated !== null) {
      fnc2();
    }
  }
  answer = deleted;
  return answer;
}

module.exports = problem2;
