function createNameDictionary(forms) {
  const nameDictionary = {};
  for (i = 0; i < forms.length; i++) {
    const nickname = forms[i][1];
    nameDictionary[nickname] = 0;
  }

  return nameDictionary;
}

// 두 이름에 중복되는 값이 있는지 확인하는 함수
function compareTwoNames(name1, name2) {
  for (l = 0; l < name1.length - 1; l++) {
    const twoWord = name1.substring(l, l + 2);
    if (name2.includes(twoWord)) return true;
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

// 길이가 두 글자 이상인 리스트롸 이름 사전을 파라미터로 받는다
function getEmailOfDuplicatedName(forms, nameDict) {
  const duplicateEmailList = [];
  forms.forEach(form => {
    const [email, nickname] = form;
    if (nameDict[nickname] > 0) {
      duplicateEmailList.push(email);
    }
  });

  duplicateEmailList.sort();

  return duplicateEmailList;
}

function problem6(forms) {
  var answer;
  // 이름이 두 글자 이상인 크루 리스트
  const nameLengthTwoList = forms.filter(form => form[1].length > 1);
  const nameDictionary = createNameDictionary(nameLengthTwoList);
  findDuplicateName(nameDictionary);
  answer = getEmailOfDuplicatedName(nameLengthTwoList, nameDictionary);
  return answer;
}

module.exports = problem6;
