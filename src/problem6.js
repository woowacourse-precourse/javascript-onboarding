function consecutiveWord(word) {
  let arr = [];
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i + 2; j <= wordArr.length; j++) {
      arr.push(wordArr.slice(i, j).join(""));
    }
  }
  return arr;
}

function problem6(forms) {
  let answer = [];
  let dupliArr = [];
  let dupliMap = new Map();

  forms.forEach((form) => {
    const [_, nickName] = form;
    const conseWord = consecutiveWord(nickName);
    dupliArr = [...dupliArr, ...conseWord];
  });

  dupliArr.forEach((w) => {
    if (dupliMap.has(w)) {
      dupliMap.set(w, dupliMap.get(w) + 1);
    } else {
      dupliMap.set(w, 1);
    }
  });

  for (const [key, value] of dupliMap) {
    if (value <= 1) {
      dupliMap.delete(key);
    }
  }

  forms.forEach((form) => {
    const [email, nickName] = form;

    [...dupliMap.keys()].forEach((dupliWord) => {
      if (nickName.includes(dupliWord)) {
        answer.push(email);
      }
    });
  });
  answer = Array.from(new Set(answer)).sort();
  return answer;
}

module.exports = problem6;
