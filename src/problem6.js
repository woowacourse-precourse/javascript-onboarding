function problem6(forms) {
  const emailSet = new Set([]);
  const duplicateCheckMap = new Map();

  for (const [email, nickName] of forms) {
    for (let i = 0; i < nickName.length - 1; i++) {
      const word = nickName[i] + nickName[i + 1];
      const curData = duplicateCheckMap.get(word);
      if (curData) {
        const { containEmail, count } = curData;
        duplicateCheckMap.set(word, {
          containEmail: [...containEmail, email],
          count: count + 1,
        });
      } else {
        duplicateCheckMap.set(word, { containEmail: [email], count: 1 });
      }
    }
  }

  for (const [_, data] of duplicateCheckMap) {
    if (data.count > 1) {
      for (const email of data.containEmail) {
        emailSet.add(email);
      }
    }
  }

  return [...emailSet].sort();
}

module.exports = problem6;
