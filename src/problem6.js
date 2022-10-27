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
  //두글자의 닉네임을 닉네임 배열에 검색하여 2개 이상이 검색되면 findName배열에 추가한다
  let findName = [];
  const join = nameArr.join();
  for (let i = 0; i < parserName.length; i++) {
    const regexp = new RegExp(parserName[i], 'g');
    if (join.match(regexp).length >= 2) {
      findName.push(parserName[i]);
    }
  }
  //2개이상 검색된 문자열중 중복된것을 제거한다
  findName = [...new Set(findName)];
}

module.exports = problem6;
