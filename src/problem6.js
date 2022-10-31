function problem6(forms) {
  const everyNameArray = forms.map(crew => crew[1]); // 닉네임 모음
  const maxNameLength = Math.max(...everyNameArray.map(name => name = name.length)); // 가장 긴 닉네임 길이

  // 주어진 닉네임에서 나올 수 있는 두 글자 모두 찾기
  let twoLetterArray = [];
  for (let index = 0; index < maxNameLength; index++) {
    everyNameArray.map(name => name.length > index + 1 && twoLetterArray.push(name.slice(index, index + 2)))
  }

  return answer;
}

module.exports = problem6;
