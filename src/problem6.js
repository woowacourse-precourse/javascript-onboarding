function problem6(forms) {
  let answer = [];
  let map = new Map();

  forms.map(([email, korTrans]) => {
    for (let i = 1; i < korTrans.length; i++) {
      let cur = korTrans[i - 1] + korTrans[i];
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
