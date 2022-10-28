function problem6(forms) {
  let answer = [];
  const nicknames = forms.map(entry => entry[1]);
  answer = nicknames.map((nickname, idx, arr) => {
    let save = [];
    for (let i = 0; i < nickname.length - 1; i++) save = [...save, ...arr.filter((nick, index) => idx !== index 
      && nick.includes(nickname[i] + nickname[i + 1]))];
    return save;
  }).flat();

  answer = forms.map(entry => {
    if (answer.includes(entry[1])) return entry[0];
  });

  return answer.sort().filter(email => email);
}

module.exports = problem6;
