function problem4(word) {
  let s = "";
  let ss = [];
  let sss = [];

  for (let i = 0; i < word.length; i++) {
    s += word[i];
    ss.push(s.charCodeAt(i)); //[65, 98, 32, ..]
    if (ss[i] === 32) {
      sss.push(" ");
    } else if (ss[i] <= 90) {
      sss.push(String.fromCharCode(155 - ss[i]));
    } else sss.push(String.fromCharCode(219 - ss[i]));
  }

  return sss.join("");
}

module.exports = problem4;
