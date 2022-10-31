function problem6(forms) {
  let map = new Map();

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const str = forms[i][1].substr(j, 2);
      // console.log(str);
      if (!map.has(str)) {
        map.set(str, 1);
      } else {
        map.set(str, map.get(str) + 1);
      }
    }
  }
  return answer;
}

module.exports = problem6;
