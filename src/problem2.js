function problem2(cryptogram) {
  var answer, i;

  var text = cryptogram.split("");
  for (i = 0; i <= cryptogram.length; i++) {
    if (text[i] == text[i + 1]) {
      var result = new Set(text);
    }
  }

  console.log(result);
  return answer;
}

problem2("browoanoommnaon");
module.exports = problem2;
