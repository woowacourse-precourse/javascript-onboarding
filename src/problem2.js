function isValid(cryptogram) {
  const regex = /^[a-z]+$/;

  let str = cryptogram;

  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    throw "1 이상 1000 이하인 글자수를 입력해주세요.";
  }
  if (!regex.test(str)) {
    throw "알파벳 소문자로 입력해주세요";
  }
}

function problem2(cryptogram) {
  var answer;
  isValid(cryptogram);

  return answer;
}

module.exports = problem2;
