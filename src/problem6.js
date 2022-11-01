function problem6(forms) {
  var answer;
  var emailSet = new Set(); //같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자의 이메일 목록

  var nickArr = []; //지원자들의 닉네임을 저장하는 배열
  for (var i = 0; i < forms.length; i++) {
    //닉네임 저장
    nickArr.push(forms[i][1]);
  }

  var twoWordArr = []; //닉네임의 연속되는 두 글자씩 잘라서 저장하는 배열
  var twoWordArr2 = []; //닉네임의 연속되는 두 글자씩 잘라서 닉네임의 인덱스와 함께 저장하는 배열

  for (var i = 0; i < nickArr.length; i++) {
    //닉네임의 연속되는 두 글자 저장 및 검사
    for (var j = 0; j < nickArr[i].length - 1; j++) {
      twoWordArr.push(nickArr[i].slice(j, j + 2));
      twoWordArr2.push([i, nickArr[i].slice(j, j + 2)]);
    }
  }

  for (var i = 0; i < twoWordArr2.length; i++) {
    //
    var nick = twoWordArr2[i][1];
    var nickIdx = twoWordArr2[i][0];

    var isNick = twoWordArr.indexOf(nick); //twoWordArr에 nick이 있는지 검사/ twoWordArr에 nick이 있는 첫번째 인덱스
    var indexArr = []; //nick이 있는 인덱스값들을 저장하는 배열
    while (isNick != -1) {
      //twoWordArr에 nick 인덱스 모두 찾기
      indexArr.push(isNick);
      isNick = twoWordArr.indexOf(nick, isNick + 1); //isNick 갱신
    }

    if (indexArr.length > 1) {
      //중복이 2개이상일 경우(본인+다른사람)
      emailSet.add(forms[nickIdx][0]);
    }
  }

  //오름차순으로 정렬
  const setToArr = Array.from(emailSet);
  answer = setToArr.sort();

  return answer;
}

module.exports = problem6;
