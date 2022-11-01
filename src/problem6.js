/*
  ** Let's Think... **
  Sample size < 10,000 => Should use algorithm with time complexity of O(n^2)?
  Algorithm: Trie?
*/

function problem6(forms) {
  // Objectify forms array data
  const formsObj = [];
  for (const [emails, nicknames] of forms) {
    formsObj[emails] = nicknames;
  }

  const nicknameArr = Array.from(Object.values(formsObj));

  // Checking all possible consecutive strings that are more than two characters.
  const dupStrSet = new Set();
  for (const nickname of nicknameArr) {
    for (let i = 0; i < nickname.length - 1; i++) {
      const dupStr = nickname.substring(i, i + 2);
      dupStrSet.add(dupStr);
    }
  }
  const dupStrArr = [...dupStrSet];

  // Filtering consecutive strings that are only more than 1
  let dupNicknames;
  for (const dupStr of dupStrArr) {
    const a = nicknameArr.filter((el) => el.includes(dupStr));
    if (a.length > 2) {
      dupNicknames = a;
    }
  }

  // Find those emails that match up with the filtered consecutive strings
  let answer = [];
  for (const i of dupNicknames) {
    for (const [email, nickname] of Object.entries(formsObj)) {
      if (nickname === i) {
        answer.push(email);
      }
    }
  }

  answer = answer.sort();
  return answer;
}

module.exports = problem6;
