function problem6(forms) {
  let wordsArray = new Array();
  let resultEmail = new Array();
  let duplicateWord = "";

  forms.map(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      wordsArray.push(nickname[i - 1] + nickname[i]);
    }
  });
  wordsArray.map((v, i) => {
    if (wordsArray.indexOf(v) !== i) {
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
