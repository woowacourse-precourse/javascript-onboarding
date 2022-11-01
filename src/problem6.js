const partOfWord = [];
const overLappingWord = [];

const checkCrew = (number) => {
  if (number < 1 || number > 10000) return true;
  return false;
};

const checkEmail = (email) => {
  if (email.length < 11 || email.length >= 20 || !email.endsWith('email.com'))
    return true;
  return false;
};

const checkNickname = (nickname) => {
  const regex = /^[ㄱ-ㅎ|가-힣|]+$/;
  if (nickname.length < 1 || nickname.length >= 20 || !regex.test(nickname))
    return true;
  return false;
};

const checkValid = (forms) => {
  if (checkCrew(forms.length)) return true;

  for (let i = 0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    if (checkEmail(email) || checkNickname(nickname)) return true;
    else continue;
  }
  return false;
};

const findOverLappingWord = (nickname) => {
  for (let i = 0; i < nickname.length - 1; i++) {
    const tmp = nickname.slice(i, i + 2);
    if (!partOfWord.includes(tmp)) partOfWord.push(tmp);
    else if (!overLappingWord.includes(tmp)) overLappingWord.push(tmp);
  }
  return overLappingWord;
};

const checkWordIncluded = (nickname) => {
  for (let i = 0; i < nickname.length - 1; i++) {
    const tmp = nickname.slice(i, i + 2);
    if (overLappingWord.includes(tmp)) return true;
  }
  return false;
};

function problem6(forms) {
  let answer = [];

  if (checkValid(forms)) return false;

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
