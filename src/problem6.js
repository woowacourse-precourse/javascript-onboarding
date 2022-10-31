function problem6(forms) {
  var nickname = [];
  var overlapArr = [];
  var result = [];

  for (var i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
  }

  for (var i = 0; i < nickname.length - 1; i++) {
    for (var j = nickname.length - 1; j > i; j--) {
      if (compare(nickname[i], nickname[j]) == true) {
        // 비교해서 불린값 반환하는 함수 만들기
        overlapArr.push(i);
        overlapArr.push(j);
      }
    }
  }

  var set = new Set(overlapArr);
  var newOverlapArr = [...set];

  for (var i = 0; i < newOverlapArr.length; i++) {
    result.push(forms[newOverlapArr[i]][0]);
  }

  return result.sort();
}

function compare(word1, word2) {
  // a
  for (var i = 0; i < word1.length - 1; i++) {
    var having = word2.indexOf(word1.substring(i, 2)); // 연속하는 두 단어가 포함 되어 있는지 확인하는 변수
    if (having != -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = problem6;
