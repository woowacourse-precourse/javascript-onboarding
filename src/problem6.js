function createNameDictionary(forms) {
  const nameDictionary = {};

  for (i = 0; i < forms.length; i++) {
    nameDictionary[forms[i][1]] = 0;
  }

  return nameDictionary;
}

// 두 이름에 중복되는 값이 있는지 확인하는 함수
function compareTwoNames(name1, name2) {
  for (l = 0; l < name1.length - 1; l++) {
    const twoWord = name1[l] + name1[l + 1];
    if (name2.includes(twoWord)) {
      return true;
    }
  }
  return false;
}

// 리스트를 돌면서 이름 비교하는 함수
function findDuplicateName(nameObj) {
  const NAME_LIST = Object.keys(nameObj);
  for (j = 0; j < NAME_LIST.length; j++) {
    const comparison = NAME_LIST[j];
    for (k = j + 1; k < NAME_LIST.length; k++) {
      if (compareTwoNames(comparison, NAME_LIST[k])) {
        nameObj[comparison]++;
        nameObj[NAME_LIST[k]]++;
      }
    }
  }
}

function problem6(forms) {
  var answer;
  // 이름이 두 글자 이상인 크루 리스트
  const nameLengthTwoList = forms.filter(form => form[1].length > 1);
  const nameDictionary = createNameDictionary(nameLengthTwoList);
  findDuplicateName(nameDictionary);
  return answer;
}

module.exports = problem6;
