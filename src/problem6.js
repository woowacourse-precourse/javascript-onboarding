function problem6(forms) {
  let nicknames = []
  let sendEmails = []
  for (const person in forms) {
    nicknames.push(forms[person][1]);
  }

  for (const person in nicknames) {
    let samenicks = [];
    
    for (let i = 0; i < nicknames[person].length - 1; i++) {
      if (samenicks.indexOf(nicknames[person].slice(i, i + 2)) == -1)
        samenicks.push(nicknames[person].slice(i, i + 2));
    }  

    for (const compareP in nicknames) {
      if (nicknames[compareP] != nicknames[person]) {
        for (const nicks in samenicks) {
          if (nicknames[compareP].includes(samenicks[nicks])) {
            if (sendEmails.indexOf(forms[compareP][0]) == -1)
              sendEmails.push(forms[compareP][0]);
            break;
          }
        }
      }
    }
  }

  sendEmails.sort();
  return sendEmails;
}

module.exports = problem6;
