function getSlicedName(arr) {
  const slicedName = [];

  arr.forEach((name) => {
    let alphaArr = [...name[1]];

    alphaArr.forEach((alpha, idx) => {
      if (idx === alphaArr.length - 1) return;

      slicedName.push(alpha + alphaArr[idx + 1]);
    });
  });

  return slicedName;
}

function getWordCount(arr) {
  const wordCountObj = {};

  arr.forEach((item) => {
    if (wordCountObj.hasOwnProperty(item)) {
      wordCountObj[item] += 1;
      return;
    }

    wordCountObj[item] = 1;
  });

  return wordCountObj;
}

function problem6(forms) {
  const answer = [];
  const slicedName = getSlicedName(forms);
  const wordCountObj = getWordCount(slicedName);

  return answer;
}

module.exports = problem6;
