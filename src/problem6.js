function getSubnicks(nickname) {
  const subnicks = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    subnicks.add(nickname.substr(i, 2));
  }
  return subnicks;
}

function problem6(forms) {
  const answer = new Set();
  const subnickCount = {};

  forms.forEach(([_, nickname]) => {
    getSubnicks(nickname).forEach((subnick) => {
      subnickCount[subnick] = subnickCount[subnick] || 0;
      subnickCount[subnick]++;
    });
  });

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const subnick = nickname.substr(i, 2);
      if (subnickCount[subnick] > 1) {
        answer.add(email);
        break;
      }
    }
  });

  return [...answer].sort();
}

module.exports = problem6;
