function problem6(forms) {
  var hashMap = new Map();

  for (var form of forms) {
    var [email, user] = form;
    for (var i = 0; i < user.length - 1; i++) {
      var nickname = user.slice(i, i + 2);
      if (hashMap.has(nickname)) {
        var emails = hashMap.get(nickname);
        hashMap.set(nickname, [...emails, email]);
      } else hashMap.set(nickname, [email]);
    }
  }

  var answer = [];

  hashMap.forEach((v) => {
    if (v.length > 1) answer.push(...v);
  });

  set = new Set(answer.sort());
  answer = [...set];

  return answer;
}

module.exports = problem6;
