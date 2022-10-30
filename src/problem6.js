const partOfWord = [];
const overLappingWord = [];

const findOverLappingWord = (nickname) => {
  for (let i = 0; i < nickname.length - 1; i++) {
    const tmp = nickname.slice(i, i + 2);
    if (!partOfWord.includes(tmp)) partOfWord.push(tmp);
    else if (!overLappingWord.includes(tmp)) overLappingWord.push(tmp);
  }
  return overLappingWord;
};

const checkWordIncluded = (nickname, overLappingWords) => {
  for (let i = 0; i < nickname.length - 1; i++) {
    const tmp = nickname.slice(i, i + 2);
    if (overLappingWord.includes(tmp)) return true;
  }
  return false;
};

function problem6(forms) {
  let answer = [];

  forms.map((form) => {
    const [, nickname] = form;
    findOverLappingWord(nickname);
  });

  forms.map((form) => {
    const [email, nickname] = form;
    if (checkWordIncluded(nickname)) answer.push(email);
  });

  answer = [...new Set(answer)];
  answer.sort();
  return answer;
}

module.exports = problem6;
