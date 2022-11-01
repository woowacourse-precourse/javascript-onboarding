const EMAIL = 0;
const NICKNAME = 1;
const DUPLICATE_NICK_LENGTH = 2;
const DOMAIN_FIRST_INDEX = -10;

function problem6(forms) {
  let answer = [];

  for (let form of forms) {
    const cases = words(form[NICKNAME]);

    for (let word of cases) {
      checkNameContainsCase(form, word);
    }
  }

  const set = new Set(answer);

  answer = [...set];
  answer.sort((a, b) => {
    const a_nick = a.slice(0, DOMAIN_FIRST_INDEX);
    const b_nick = b.slice(0, DOMAIN_FIRST_INDEX);

    if (a_nick > b_nick) return 1;
    if (a_nick < b_nick) return -1;
    if (a_nick === b_nick) return 0;
  });

  return answer;

  function checkNameContainsCase(form, word) {
    for (let index = 0; index < forms.length; index++) {
      if (forms[index][EMAIL] === form[EMAIL]) continue;

      if (forms[index][NICKNAME].includes(word)) {
        answer.push(forms[index][EMAIL]);
        answer.push(form[EMAIL]);
      }
    }
  }
}

// 가능한 연속된 문자열 추출 함수
function words(name) {
  const wordOfCases = [];

  for (let index = 0; index < name.length - 1; index++) {
    wordOfCases.push(name.substr(index, DUPLICATE_NICK_LENGTH));
  }

  return wordOfCases;
}

module.exports = problem6;
