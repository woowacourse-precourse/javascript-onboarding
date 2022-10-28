function problem6(forms) {
  var answer;
  let nickname = [];
  let dic = {};
  let check;
  //중복제거 위해서 집합 생성
  result = new Set([]);

  for (i = 0; i < forms.length; i++) {
    nickname.push(forms[i][1]);
    //닉네임에서 2글자씩 dic에 저장
    for (j = 0; j < nickname[i].length - 1; j++) {
      check = nickname[i].substring(j, j + 2);
      console.log(check);
      if (dic[check]) {
        dic[check] += 1;
      }
      //중복시 +1
      else {
        dic[check] = 1;
      }
    }
  }

  for (i = 0; i < forms.length; i++) {
    for (j = 0; j < nickname[i].length - 1; j++) {
      check = nickname[i].substring(j, j + 2);
      //두개 이상 사용됐을 경우
      if (dic[check] > 1) {
        //result에 이메일 추가
        result.add(forms[i][0]);
      }
    }
  }
  //배열로 변경
  answer = [...result];
  //오름차순 정렬
  answer.sort();
  return answer;
}

module.exports = problem6;
