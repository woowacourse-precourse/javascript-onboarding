/*
 * 기능 분석
 * [x] 입력받은 forms에 대한 입력값 user 객체에 저장하는 기능
 * [] 닉네임에 2글자씩 분할하여 저장하는 nickName 객체에 저장하는 기능
 * [] 중복되는 2글자 닉네임이 있는 경우 중복된 사람의 이메일을 answer에 저장하는 기능
 * [] 반복되는 닉네임을 가진 사람에 대한 처리 기능(ex. 김머판머판)
 * [] 중복된 이메일과 중복된 닉네임으로 가입되는 경우에 대한 처리 기능
 */

function problem6(forms) {
  var answer;
  var user = {};

  /*
   * user를 객체로 선언하여 해당 닉네임을 키값으로 이메일을 저장한다.
   */
  for (let i = 0; i < forms.length; i++) {
    user[forms[i][1]] = forms[i][0];
  }

  return answer;
}

module.exports = problem6;
