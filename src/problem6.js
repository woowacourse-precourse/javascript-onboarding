function problem6(forms) {
  var answer;
  let obj = new Object();

  for (const [e, n] of forms) {
    obj[n] = e;
  }

  let nicknames = Object.keys(obj);

  for (let i = 0; i < nicknames.length; i++) {
    let reg = new RegExp(`[${nicknames[i]}]{2}`);
    for (let j = i; j < nicknames.length; j++) {
      if (reg.test(`${nicknames[j]}`) && nicknames[i] !== nicknames[j]) {
        console.log(`${nicknames[i]}`, `${nicknames[j]}`);
      }
    }

  }

  return answer;
}

module.exports = problem6;
