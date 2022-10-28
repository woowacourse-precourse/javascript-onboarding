function problem6(forms) {
  const twoChaArr = [];
  const pushedEmail = [];
  for (let i = 0; i < forms.length; i++) {
    const nameSplited = forms[i][1].split("");
    for (let j = 0; j < nameSplited.length - 1; j++) {
      const dup = nameSplited[j] + nameSplited[j + 1];
      twoChaArr.push(dup);
    }
  }
  const findDuplicates = (twoChaArr) =>
    twoChaArr.filter(
      (item, index) => twoChaArr[index] === twoChaArr[index + 2]
    );
  const duplicates = findDuplicates(twoChaArr);
  const duplicatesJoined = duplicates.join("");

  for (let h = 0; h < forms.length; h++) {
    const findName = forms[h][1];
    if (findName.includes(duplicatesJoined)) {
      pushedEmail.push(forms[h][0]);
    }
  }
  const noDupEmail = [...new Set(pushedEmail)];
  
  return noDupEmail.sort();
}

module.exports = problem6;
