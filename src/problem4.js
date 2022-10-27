function problem4(word) {

  let string = [...word];
  let change = [];

  for (let i = 0; i < string.length; i++){
    if (string[i] === ' ') {
      change.push(string[i])
      continue;
    }
    else {
      const ascii = string[i].charCodeAt(0); 

      if (ascii >= 65 && ascii <= 90) {
        convert = String.fromCharCode(155 - ascii);//대문자 155
      } else {
        convert = String.fromCharCode(219 - ascii);//소문자 219
      }
      change.push(convert);
    } 
  }
  return change.join("");
}

module.exports = problem4;
