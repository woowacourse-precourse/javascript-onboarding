function problem6(forms) {
  // * arr1과 arr2는 중복되는 부분을 찾기 위한 배열
  var arr1,
    arr2 = [];
  var arr3 = []; // * 그 중복되는 사람의 이메일을 담기 위한 배열
  var name1 = ""; // * 중복되는 사람 이름1
  var name2 = ""; // * 중복되는 사람 이름2
  var answer = []; // * 최종적으로 중복된 사람들의 이메일 배열
  var regex_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  var korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  // * 크루는 1명 이상 10,000명 이하일 때
  if (forms.length >= 1 && forms.length <= 10000) {
    for (var i = 0; i < forms.length; i++) {
      if (
        // * 이메일의 길이는 11이상 20미만이고 이메일 형식 확인
        forms[i][0].length >= 11 &&
        forms[i][0].length < 20 &&
        regex_email.test(forms[i][0])
      ) {
        // * 닉네임 1자 이상 20자 미만에 한글 확인
        if (
          forms[i][1].length >= 1 &&
          forms[i][1].length < 20 &&
          korean.test(forms[i][1])
        ) {
          arr1 = forms[i][1].split("");
          name1 = forms[i][1];
          for (var j = i + 1; j < forms.length; j++) {
            arr2 = forms[j][1].split("");
            name2 = forms[j][1];
            for (var k = 0; k < arr1.length - 1; k++) {
              for (var m = 0; m < arr2.length; m++) {
                // * 처음 글자 매칭 확인
                if (arr1[k] == arr2[m]) {
                  // * 그 다음 글자 매칭 확인
                  if (arr1[k + 1] == arr2[m + 1]) {
                    if ((forms[i][1] = name1)) {
                      // * name 중복 사람들의 이메일 푸쉬
                      arr3.push(forms[i][0]);
                      arr3.push(forms[j][0]);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // * 중복 제거 + 정렬하여 배열로 지정
  answer = [...new Set(arr3)].sort();

  return answer;
}

module.exports = problem6;
