function problem2(cryptogram) {
  if (cryptogram.length === 0) return "";
  function getNoContinuousWords(str) {
    let obj = { 0: str[0] };
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        obj[`${i}`] = str[i];
      } else {
        if (obj[`${i - 1}`]) {
          delete obj[`${i - 1}`];
        }
      }
    }
    let answerStr = Object.values(obj).join("");
    if (!answerStr) return "";
    if (answerStr === str) return str;
    return getNoContinuousWords(answerStr);
  }
  return getNoContinuousWords(cryptogram);
}

module.exports = problem2;
