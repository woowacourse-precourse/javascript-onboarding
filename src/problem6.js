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

function problem6(forms) {
  const answer = [];

  forms.map((form) => {
    const [, nickname] = form;
    findOverLappingWord(nickname);
  });

  return answer;
}

module.exports = problem6;
