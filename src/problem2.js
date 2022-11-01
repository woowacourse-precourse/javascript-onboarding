function problem2(cryptogram) {
  var answer;
  var crytogram_tmp = cryptogram.split("");
  var tmp = [];
  while (true) {
    var bef = "";
    var aft = "";
    tmp = crytogram_tmp.filter((value, index) => {
      aft = index + 1 != crytogram_tmp.length ? crytogram_tmp[index + 1] : "";
      if ((value != bef) & (value != aft)) {
        bef = value;
        return value;
      }
      bef = value;
    });
    if (crytogram_tmp.length == tmp.length) {
      answer = tmp.join("");
      break;
    }
    crytogram_tmp = [...tmp];
    tmp.length = 0;
  }
  return answer;
}

module.exports = problem2;
