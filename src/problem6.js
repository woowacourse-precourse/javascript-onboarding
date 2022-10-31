function problem6(forms) {
  let answer = [];
  let map = new Map();

  forms.map(([email, nickname]) => {
    for (let i = 1; i < nickname.length; i++) {
      let cur = nickname[i - 1] + nickname[i];
      map.set(cur, [...(map.get(cur) || []), email]);
    }
  });

  for (item of map.values()) {
    if (item.length > 1) {
      answer = [...answer, ...item];
    }
  }

  return answer.sort();
}

module.exports = problem6;
