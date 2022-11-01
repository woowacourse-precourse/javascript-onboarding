function consecutiveWord(word) {
  let arr = [];
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length - 1; i++) {
    // for (let j = i + 2; j <= wordArr.length; j++) {
    arr.push(wordArr.slice(i, i + 2).join(""));
    // }
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

  console.log(dupliArr);
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

console.log(
  problem6([
    ["jm@email.com", "제이엠"],
    ["jason@email.com", "제이슨"],
    ["woniee@email.com", "워니"],
    ["mj@email.com", "엠제이"],
    ["nowm@email.com", "이제엠"],
  ])
);

module.exports = problem6;
