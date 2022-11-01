function makeSubstrArr(nickname) {
  const substrArr = [];
  const splitedNickname = [...nickname];
  splitedNickname.forEach((char, i) => {
    if (i === nickname.length - 1) {
      return;
    }
    const substr = nickname.substr(i, 2);
    substrArr.push(substr);
  });
  return substrArr;
}

function makeNicknameMap(nicknameMap, substrArr) {
  substrArr.forEach((letter) =>
    nicknameMap.set(letter, (nicknameMap.get(letter) || 0) + 1)
  );
}

function isDuplicated(arr, nickname) {
  const substrArr = makeSubstrArr(nickname);

  return substrArr.some((letter) => {
    return arr.includes(letter);
  });
}

function problem6(forms) {
  const nicknameMap = new Map();
  forms.forEach(([email, nickname]) => {
    makeNicknameMap(nicknameMap, makeSubstrArr(nickname));
  });

  const duplicatedWords = [];
  nicknameMap.forEach((val, key) => {
    if (val > 1) {
      duplicatedWords.push(key);
    }
  });

  const duplicatedArr = forms.filter(([email, nickName]) =>
    isDuplicated(duplicatedWords, nickName)
  );
  const emailArr = duplicatedArr.map(([email, nickname]) => email);

  return [...new Set([...emailArr])].sort();
}

module.exports = problem6;
