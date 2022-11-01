function join(id, answer, email) {
  if (id == 0 && !answer.includes(email)) return true;
  else return false;
}

function sameAlpha(tk, sName) {
  if (tk.includes(sName)) return true;
  else return false;
}

function checkTwice(token, list) {
  if (!list.includes(token)) return true;
  else return false;
}

function problem6(forms) {
  let tk = [];
  let answer = [];

  forms.forEach((form, id) => {
    const [email, name] = form;

    for (let i =0; i<name.length - 1; i++) {
      const sName = `${name.slice(i,i+2)}`;

      if (join(id, answer, email)) answer.push(email);
      else if (sameAlpha(tk, sName) && checkTwice(email, answer)) answer.push(email);

      checkTwice(sName, token) && tk.push(sName);
    }
  })

  answer =answer.sort();
  return answer;
}

module.exports = problem6;
