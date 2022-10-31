function problem6(forms) {
  let answer = [];
  let wordList = [];
  let splitForms = [];
  forms.forEach((item) => {
    let arr = [];
    let splitWord = item[1].split("");
    for (let i = 0; i < splitWord.length - 1; i++) {
      arr.push([splitWord[i], splitWord[i + 1]].join(""));
      wordList.push([splitWord[i], splitWord[i + 1]].join(""));
    }
    splitForms.push(arr);
  });

  let dupicatedWordList = [];
  dupicatedWordList = wordList.filter((item, index) => {
    return wordList.indexOf(item) !== index;
  });
  dupicatedWordList = [...new Set(dupicatedWordList)];

  splitForms.forEach((item, idx) => {
    if (item.includes(dupicatedWordList[0])) {
      answer.push(forms[idx][0]);
    }
  });
  answer.sort();

  return answer;
}

module.exports = problem6;
