function problem4(word) {
  let answer = "";
  let alp = [];
  for (let i = 90; i >= 65; i--) {
    alp.push(String.fromCharCode(i));
  }
  word.split("").forEach((x) => {
    if (x.match(/[a-zA-Z]/)) {
      let charCode = x.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        answer += alp[charCode - 65];
      } else {
        answer += alp[charCode - 97].toLowerCase();
      }
    } else {
      answer += x;
    }
  });
  return answer;
}

module.exports = problem4;
