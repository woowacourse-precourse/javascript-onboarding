function problem6(forms) {
  const fractionMap = new Map();
  forms.forEach((form) => {
    const [, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const fraction = nickname[i] + nickname[i + 1];
      fractionMap.set(fraction, fractionMap.get(fraction) + 1 || 1);
    }
  });
  const repeatedFractions = [];
  for (const [fraction, number] of fractionMap) {
    if (number > 1) repeatedFractions.push(fraction);
  }
  const result = [];
  forms.forEach((form) => {
    const [email, nickname] = form;
    repeatedFractions.forEach((fraction) => {
      const hasRepeatedFraction = new RegExp(fraction).exec(nickname) !== null;
      if (hasRepeatedFraction) {
        result.push(email);
      }
    });
  });
}

module.exports = problem6;
