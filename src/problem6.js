/*
 * 기능 분석
 * [x] 입력받은 forms에 대한 입력값 user 객체에 저장하는 기능
 * [x]] 닉네임에 2글자씩 분할하여 저장하는 nicknameDictionary 객체에 저장하는 기능
 * [] 중복되는 2글자 닉네임이 있는 경우 중복된 사람의 이메일을 answer에 저장하는 기능
 * [] 반복되는 닉네임을 가진 사람에 대한 처리 기능(ex. 김머판머판)
 * [] 중복된 이메일과 중복된 닉네임으로 가입되는 경우에 대한 처리 기능
 */


function problem6(forms) {
  var answer = [];
  var userData = {};
  var nicknameDictionary = {};

  // 2글자를 받아 nicknameDictionary에 저장하는 함수
  const setNicknameDirectory = (prev, last) => {
    nicknameDictionary[prev] = { [last]: true };
  }

  /*
   * userData 객체에 forms의 닉네임을 키값으로 이메일을 저장한다.
   */
  for (let i = 0; i < forms.length; i++) {
    userData[forms[i][1]] = forms[i][0];

    /*
     * user 객체에 저장된 form 요소에서 닉네임에 관한 중복 요소를 구현하기 위해
     * 2글자마다 앞 글자를 키값으로, 뒷 글자를 내부 객체 키값으로 저장한다. 
     */
    for (let k = 0; k < forms[i][1].length - 1; k++) {
      let [prev, last] = forms[i][1].substr(k, k + 2);
      setNicknameDirectory(prev, last);
    }
  
  }

  return answer;
}

module.exports = problem6;
