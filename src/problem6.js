function problem6(forms) {
  const duplicatedEmails = [];
  const subNickname = {};

  forms.forEach(([email, nickName]) => {
    for (let i = 0; i < nickName.length - 1; i++) {
      const word = nickName.substring(i, i + 2);
      if (subNickname[word]) subNickname[word].add(email);
      else subNickname[word] = new Set([email]);
    }
  });
  Object.keys(subNickname).map(nickName => {
    if (subNickname[nickName].size >= 2) duplicatedEmails.push(...subNickname[nickName]);
  });

  const answer = [...new Set(duplicatedEmails)].sort();
  return answer;
}
module.exports = problem6;
