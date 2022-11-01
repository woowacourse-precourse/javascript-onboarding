function problem2(cryptogram) {
  return repeatCheck(cryptogram);
}
//중복된 글자를 ""로 변경
function repeatCheck(crypt) {
  for (let i = 0; i < crypt.length; i++) {
    if (crypt.length == 0) {
      return "";
    } else if (crypt[i] == crypt[i + 1]) {
      let a = crypt.toString().substring(i, i + 2);
      crypt = crypt.replace(a, "");
      return repeatCheck(crypt);
    }
  }
  return crypt;
}

module.exports = problem2;
