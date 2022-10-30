function problem4(word) {
  let s = "";
  let ss = [];
  let sss = [];

  for (let i = 0; i < word.length; i++) {
    s+= word[i];
    ss.push(s.charCodeAt(i)); //[65, 98, 32, ..]
    if (ss[i]===32){sss.push(' ')}
  }
  // let s='a' //word[i]
  // let ss = s.charCodeAt(0); //str -> uni
  // let sss = String.fromCharCode(ss + 25); //uni -> str

  return sss.join('')
}

module.exports = problem4;
