const compareNickName = (nickName) => {
  // String 메소드인 substring을 사용하여 값을 비교할 수 있음.
  var left = 0;
  var right = 1;
  var value = "";
  while (true){

    if (right < nickName[0].length){

    }

    value = nickName[0].substring(left, right);


  }

}

function problem6(forms) {
  var answer;
  var nickName = [];

  forms.forEach(element => {
    nickName.push(element[1]);
  });
  compareNickName(nickName);

  // return nickName;
  return answer;
}

// 연속된 문자가 3개일 수 도 있지만, 2개인 경우만 파악하면 된다. 왜냐하면 2개만 중복이더라도 닉네임을 바꿔줘야하니까. 2개의 연속된 집합 찾기.

module.exports = problem6;
