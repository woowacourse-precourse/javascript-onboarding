function problem4(string) {
  const frogDictionary = makeFrogDictionary();
  let answer = "";
  for (s of string) {
    if (Object.keys(frogDictionary).includes(s)) {
      answer += frogDictionary[s];
    } else {
      answer += s;
    }
  }
  return answer;
}

function makeFrogDictionary() {
  let BigalphaBet = [];
  let SmallalphaBet = [];
  let BigreverseAlphaBet = [];
  let SmallreverseAlphaBet = [];
  let frogDictionary = {};
  for (let i = 65; i <= 90; i++) {
    BigalphaBet.push(String.fromCharCode(i));
  }
  for (let j = 90; j >= 65; j--) {
    BigreverseAlphaBet.push(String.fromCharCode(j));
  }
  for (let k = 0; k < BigalphaBet.length; k++) {
    frogDictionary[BigalphaBet[k]] = BigreverseAlphaBet[k];
  }
  for (let i = 97; i <= 122; i++) {
    SmallalphaBet.push(String.fromCharCode(i));
  }
  for (let i = 122; i >= 97; i--) {
    SmallreverseAlphaBet.push(String.fromCharCode(i));
  }
  for (let k = 0; k < SmallalphaBet.length; k++) {
    frogDictionary[SmallalphaBet[k]] = SmallreverseAlphaBet[k];
  }
  return frogDictionary;
}

module.exports = problem4;
