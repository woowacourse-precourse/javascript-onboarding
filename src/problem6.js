function getSubnicks(nickname) {
  const subnicks = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    subnicks.add(nickname.substr(i, 2));
  }
  return subnicks;
}

function problem6(forms) {
  const subnickCount = {};

  forms.forEach(([_, nickname]) => {
    getSubnicks(nickname).forEach((subnick) => {
      subnickCount[subnick] = subnickCount[subnick] || 0;
      subnickCount[subnick]++;
    });
  });
  
  var answer;
  return answer;
}

module.exports = problem6;
