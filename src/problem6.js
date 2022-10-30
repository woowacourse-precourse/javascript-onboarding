function problem6(forms) {
  var point = [];
  //forms 훑기
  for (var i = 0; i < forms.length; i++) {
    //forms에서 i번째 닉네임의 substring 뽑기
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      for (var k = j + 2; k < forms[i][1].length; k++) {
        // substring을 포함하고 있는게 있는지 확인하기
        for (var l = i + 1; l < forms.length; l++) {
          if (forms[l][1].includes(forms[i][1].substring(j, k))) {
            point.push(forms[l][0]);
            point.push(forms[i][0]);
          }
        }
      }
    }
  }
  var set = new Set(point);
  const answer = Array.from(set);
  return answer;
}

module.exports = problem6;
