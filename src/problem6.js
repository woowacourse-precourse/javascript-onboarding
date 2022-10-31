const getWords = (name, words) => {
  for (let i = 0; i < name.length - 1; i++) {
    const temp = name.slice(i, i + 2);
    words[temp] = words[temp] + 1 || 1;
  }
};

const checkDupli = (name, words) => {
  for (let i = 0; i < words.length; i++) {
    if (name.includes(words[i])) {
      return true;
    }
  }

  return false;
};

function problem6(forms) {
  var answer = [];
  const words = {};
  const dupliWords = [];

  for (let i = 0; i < forms.length; i++) {
    const name = forms[i][1];
    getWords(name, words);
  }

  Object.entries(words).forEach((value) => {
    const [word, count] = value;
    if (count >= 2) {
      dupliWords.push(word);
    }
  });

  forms.forEach((user) => {
    const [email, name] = user;

    if (checkDupli(name, dupliWords)) {
      answer.push(email);
    }
  });

  return answer.sort();
}

module.exports = problem6;
