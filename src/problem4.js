function problem4(word) {
  let str = "";
  let unicoded = [];
  let result = [];

  if (!word) {
    return;
  }

  for (let i = 0; i < word.length; i++) {
    str += word[i];
    unicoded.push(str.charCodeAt(i));
    if (unicoded[i] >= 65 && unicoded[i] <= 122) {
      if (unicoded[i] <= 90) {
        result.push(String.fromCharCode(155 - unicoded[i]));
      } else if (unicoded[i] >= 97) {
        result.push(String.fromCharCode(219 - unicoded[i]));
      } else result.push(word[i]);
    } else result.push(word[i]);
  }
  return result.join("");
}
module.exports = problem4;
