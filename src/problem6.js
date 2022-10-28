function isFirstCrew(idx, answer, email) {
  if (idx == 0 && !answer.includes(email)) return true;
  else return false;
}

function isContainSameLetters(tokens, slicedName) {
  if (tokens.includes(slicedName)) return true;
  else return false;
}

function checkIsDoubled(token, list) {
  if (!list.includes(token)) return true;
  else return false;
}

function problem6(forms) {
  let tokens = [];
  let answer = [];

  forms.forEach((form, idx) => {
    const [email, name] = form;
    
    for (let i =0; i<name.length - 1; i++) {
      const slicedName = `${name.slice(i,i+2)}`;
      
      if (isFirstCrew(idx, answer, email)) answer.push(email);
      else if (isContainSameLetters(tokens, slicedName) && checkIsDoubled(email, answer)) answer.push(email);
      
      checkIsDoubled(slicedName, tokens) && tokens.push(slicedName);
    }
  })

  answer =answer.sort();
  return answer;
}

module.exports = problem6;
