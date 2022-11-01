function setNicknameMap(map, nickname) {
  for (let i = 0; i < nickname.length - 1; i++) {
    let temp = nickname.slice(i, i + 2);
    if (!map.has(temp)) {
      map.set(temp, 1);
    } else {
      map.set(temp, map.get(temp) + 1);
    }
  }
  return map;
}

function filterOverlap(map) {
  let arr = [];
  map.forEach((value, key) => {
    if (value > 1) arr.push(key);
  });
  return arr;
}

function problem6(forms) {
  var answer;
  const nickNameMap = new Map();
  forms.forEach((v, i) => {
    setNicknameMap(nickNameMap, v[1]);
  });
  let overlapNickname = filterOverlap(nickNameMap);

  answer = forms
    .filter((form) => {
      for (let i = 0; i < form[1].length - 1; i++) {
        let temp = form[1].slice(i, i + 2);
        for (let j = 0; j < overlapNickname.length; j++) {
          if (overlapNickname[j].includes(temp)) return true;
        }
      }
      return false;
    })
    .map((f) => f[0]);

  return answer.sort();
}

module.exports = problem6;
