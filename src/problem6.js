function problem6(forms) {
  var answer;
  answer = [];

  var overlap = []; //중복된 단어 리스트
  var overlapping_user = []; //중복된 유저들 인덱스
  var name;
  var two_words = [];

  for (var i = 0; i < forms.length; i++) {
    //i명의 사용자
    name = forms[i][1];

    for (var j = 0; j < name.length - 1; j++) {
      // 두 글자씩 쪼갠 문자열 리스트
      if (!two_words.includes(name[j] + name[j + 1])) {
        two_words.push(name[j] + name[j + 1]);
      }
    }
    for (var k = 0; k < two_words.length; k++) {
      //중복이 있는지 확인
      if (overlap.includes(two_words[k])) {
        overlap.push(two_words[k]);
        //중복되었다면
        if (!overlapping_user.includes(i)) {
          overlapping_user.push(i);
        }
      } else {
        //중복되지 않았다면
        overlap.push(two_words[k]); //단어를 overlap에 추가
      }
    }
    two_words = [];
  }

  //첫번째 사용자는 중복 검사 하지 않았음 -> 첫번쨰 사용자 중복 검사
  name = forms[0][1];
  for (var j = 0; j < name.length - 1; j++) {
    if (!two_words.includes(name[j] + name[j + 1])) {
      two_words.push(name[j] + name[j + 1]);
    }
  }
  var first_length = name.length - 1;
  var overlap_except_first = overlap.slice(first_length);
  for (var k = 0; k < two_words.length; k++) {
    if (overlap_except_first.includes(two_words[k])) {
      overlapping_user.push(0);
      break;
    }
  }

  //overpaping_user 에 중복된 사용자들의 인덱스가 담겨있음
  var overlapping_user_name = [];
  var index;

  for (var i = 0; i < overlapping_user.length; i++) {
    //사용자 이름 담기
    overlapping_user_name.push(forms[overlapping_user[i]][0]);
  }
  for (var i = 0; i < overlapping_user_name.length; i++) {
    //오름차순 정렬을 위해서 @ 자르기
    index = overlapping_user_name[i].indexOf("@");
    answer.push(overlapping_user_name[i].slice(0, index));
  }
  answer.sort(); //오름차순 정렬
  for (var i = 0; i < answer.length; i++) {
    //이후 다시 @ 붙여주기
    answer[i] = answer[i] + "@email.com";
  }

  return answer;
}

module.exports = problem6;
