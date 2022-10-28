function createNameDictionary(forms) {
  const nameDictionary = {};

  for (i = 0; i < forms.length; i++) {
    nameDictionary[forms[i][1]] = 0;
  }

  return nameDictionary;
}

function problem6(forms) {
  var answer;
  // 이름이 두 글자 이상인 크루 리스트
  const nameLengthTwoList = forms.filter(form => form[1].length > 1);

  return answer;
}

module.exports = problem6;
