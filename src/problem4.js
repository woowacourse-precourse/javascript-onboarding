function problem4(word) {
  const wordArr = [...word];
  const newArr = [];
  wordArr.forEach((item) => {
    let ascii = item.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      return newArr.push(String.fromCharCode(155 - ascii));
    } else if (ascii >= 97 && ascii <= 122) {
      return newArr.push(String.fromCharCode(219 - ascii));
    } else {
      return newArr.push(String.fromCharCode(ascii));
    }
  });
  return newArr.join("");
}

module.exports = problem4;
