// 중복 문자 찾는 function
function findDuplicate(arr) {
  const duplicateArr = arr.filter((item, index) => arr.indexOf(item) !== index);
  return [...new Set(duplicateArr)];
}

function problem6(forms) {
  var answer;
  // 두 글자씩 twoLetters에 담음
  let twoLetters = [];
  // 중복되는 닉네임을 가진 크루의 email 저장
  const resultArr = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      twoLetters.push(forms[i][1].substr(j, j + 2));
    }
  }

  forms.map((item) => {
    for (let i = 0; i < twoLetters.length; i++) {
      if (item[1].indexOf(twoLetters[i]) !== -1) resultArr.push(item[0]);
    }
  });

  // 중복되는 문자 확인
  twoLetters = findDuplicate(twoLetters);

  return answer;
}

module.exports = problem6;
