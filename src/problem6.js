function problem6(forms) {
  const wordMap = new Map();
  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const word = nickname.slice(i, i + 2);
      const emailList = wordMap.get(word);
      wordMap.set(word, emailList ? [...emailList, email] : [email]);
    }
  });
}

module.exports = problem6;
