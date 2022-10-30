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

function problem6(forms) {
  const answer = [];
  const slicedName = getSlicedName(forms);

  return answer;
}

module.exports = problem6;
