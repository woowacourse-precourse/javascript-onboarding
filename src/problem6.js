function getSubnicks(nickname) {
  const subnicks = new Set();
  for (let i = 0; i < nickname.length - 1; i++) {
    subnicks.add(nickname.substr(i, 2));
  }
  return subnicks;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
