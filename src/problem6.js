function problem6(forms) {
  let nickNames = forms.map((el) => el[1]); // 새로운 닉네임 배열
  let newArr = forms.map((el) => el[1].split('')); // 문자를 한글자씩 split
  let set = new Set(...newArr); // set 을 중복값 제거
  let strArr = [...set];

  let idx = new Set();
  let result = [];
  for (let i = 0; i < strArr.length - 1; i++) {
    let word = strArr[i] + strArr[i + 1]; // 2글자씩 word에 할당
    for (let j = 0; j < nickNames.length; j++) {
      if (nickNames[j].includes(word)) {
        idx.add(j);
      }
    }
    word = '';
  }
  [...idx].forEach((el) => {
    result.push(forms[el][0]);
  });

  return result.sort();
}

module.exports = problem6;
