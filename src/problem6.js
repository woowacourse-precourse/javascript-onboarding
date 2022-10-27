function problem6(forms) {
  //닉네임만 배열로 만든다
  const nameArr = forms.map((v) => v[1]);

  //닉네임을 두글자씩 나눈다
  const parserName = [];
  for (let i = 0; i < nameArr.length; i++) {
    for (let j = 0; j < nameArr[i].length - 1; j++) {
      parserName.push(nameArr[i][j] + nameArr[i][j + 1]);
    }
  }
}

module.exports = problem6;
