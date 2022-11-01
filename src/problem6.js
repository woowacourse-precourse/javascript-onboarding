function problem6(forms) {
  var answer;
  const doubleOB = DoubleOBJ(forms);
  const duplEM = checkEM (forms, doubleOB);

  return duplEM.sort();
}

function checkEM(forms, doubleOB) {
  const duplEM = [];
  forms.forEach((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (doubleOB[testText] > 1) duplEM.push(email);
    }
  });
  return duplEM;
}

function DoubleOBJ(forms) {
  const doubleOB = {};
  forms.forEach((form) => {
    const [_, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const testText = nickname.substring(i, i + 2);
      if (testText in doubleOB) doubleOB[testText] += 1;
      else doubleOB[testText] = 1;
    }
  });
  return doubleOB;
}

module.exports = problem6;