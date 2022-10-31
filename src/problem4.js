function problem4(word) {
  let string = [...word];
  let change = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      change.push(string[i]);
      continue;
    } else {
      const asc = string[i].charCodeAt(0);

      if (asc >= 65 && asc <= 90) {
        convert = String.fromCharCode(155 - asc);
      } else {
        convert = String.fromCharCode(219 - asc);
      }
      change.push(convert);
    }
  }
  return change.join("");
}

module.exports = problem4;
