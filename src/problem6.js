function problem6(forms) {
  var answer;
  let nickname = [];
  let dic = {};
  let slice_nickname;
  //중복제거 위해서 집합 생성
  result = new Set([]);

  for (i = 0; i < forms.length; i++) {
      nickname.push(forms[i][1]);
      for (j = 0; j < nickname[i].length - 1; j++) {
          // substring : 특정 문자열을 잘라내여 반환
          slice_nickname = nickname[i].substring(j, j + 2);
          // console.log(slice_nickname)

          // 중복 확인
          if (dic[slice_nickname]) {
              dic[slice_nickname] += 1;
          } else {
              dic[slice_nickname] = 1;
          }
      }
  }

  for (i = 0; i < forms.length; i++) {
      for (j = 0; j < nickname[i].length - 1; j++) {
          slice_nickname = nickname[i].substring(j, j + 2);
          //두개 이상 사용됐을 경우
          if (dic[slice_nickname] > 1) {
              //result에 이메일 추가
              result.add(forms[i][0]);
          }
      }
  }

  answer = [...result];
  // 정렬
  answer.sort();
  return answer;
}


module.exports = problem6;
