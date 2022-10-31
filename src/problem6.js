function problem6(forms) {
  let arr = new Array();
  let resultEmail = new Array();
  let duplicateWord = "";

  forms.map(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      arr.push(nickname[i - 1] + nickname[i]);
    }
  });
  arr.map((v, i) => {
    if (arr.indexOf(v) !== i) {
      duplicateWord = v;
    }
  });
  forms.map(([email, nickname]) => {
    if (nickname.includes(duplicateWord)) {
      resultEmail.push(email);
    }
  });
  return resultEmail.sort();
}
module.exports = problem6;
