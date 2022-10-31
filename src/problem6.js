function problem6(forms) {
  const check = (word1, word2, answer) => {
    for (let i = 0; i < word1[1].length; i++) {
      for (let j = 0; j < word2[1].length; j++) {
        if (word1[1][i] === word2[1][j]) {
          if (word1[1][i + 1] && word1[1][i + 1] === word2[1][j + 1]) {
            answer.push(word1[0]);
            answer.push(word2[0]);
            return;
          }
        }
      }
    }
  };

  const answer = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      check(forms[i], forms[j], answer);
    }
  }

  return Array.of(...new Set(answer)).sort();
}

const testcase = [
  [
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ],
  [
    ['jm@email.com', '원피스'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '원피수'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '수원피'],
  ],
];

for (let i = 0; i < testcase.length; i++) {
  console.log(`${i + 1} ${problem6(testcase[i])}`);
}

module.exports = problem6;
