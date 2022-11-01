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
  return answer;
}

module.exports = problem6;
