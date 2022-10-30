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

  var answer = "";

  hashMap.forEach((v) => {
    if (answer.length < v.length) answer = v;
  });

  return answer.sort();
}

module.exports = problem6;
