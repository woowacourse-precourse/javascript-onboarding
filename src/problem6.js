function problem6(forms) {
  var hashMap = new Map();
  for (var form of forms) {
    for (var i = 0; i < form[1].length - 1; i++) {
      var nickname = form[1].slice(i, i + 2);
      if (hashMap.has(nickname)) {
        var emails = hashMap.get(nickname);
        hashMap.set(nickname, [...emails, form[0]]);
      } else hashMap.set(nickname, [form[0]]);
    }
  }

  var answer = "";

  hashMap.forEach((v) => {
    if (answer.length < v.length) answer = v;
  });

  return answer.sort();
}

module.exports = problem6;
