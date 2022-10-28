/*
 * 기능 분석
 * [x] 입력받은 forms에 대한 입력값 user 객체에 저장하는 기능
 * [x]] 닉네임에 2글자씩 분할하여 저장하는 nicknameDictionary 객체에 저장하는 기능
 * [x] 중복되는 2글자 닉네임이 있는 경우 중복된 사람의 이메일을 answer에 저장하는 기능
 * [] 반복되는 닉네임을 가진 사람에 대한 처리 기능(ex. 김머판머판)
 * [] 중복된 이메일과 중복된 닉네임으로 가입되는 경우에 대한 처리 기능
 */


function problem6(forms) {
  var answer = [];
  var userData = {};
  var nicknameDictionary = {};

  // 2글자가 중복되는 닉네임이 존재하는지 여부를 파악하고 answer값을 처리해주는 함수
  const isDuplicateNickName = (prev, last, nickname) => {

    /*
     * prev와 last를 활용해서 만약 두 글자가 동일한 경우에 answer에 이메일을 저장한다.
     * 먼저 들어왔던 이메일을 순서대로 넣어야 하기에 userData[nickname]을 먼저 비교한다.
     * 만약 존재하는 경우에는 nicknameDictionary에 저장되지 않도록 하기위해 
     * true를 반환, 아닐 시에는 false를 반환한다.
     */
    if (Object.keys(nicknameDictionary).includes(prev) && Object.keys(nicknameDictionary[prev]).includes(last) ){
      if (!answer.includes(userData[nickname])){
        answer.push(userData[nickname])
      }
      if (!answer.includes(nicknameDictionary[prev][last])) {
        answer.push(nicknameDictionary[prev][last]);
      }
      return true;
    }
    return false; 
  }

  // 문자와 이메일을 nicknameDictionary에 저장하는 함수
  const setNicknameDirectory = (prev, last, nickname) => {
  
    /*
     * 만약 prev와 last 두글자와 동일하 요소가 존재할 경우 nicknameDictionary에는 저장하지 않고
     * answer에 넣는 작업을 진행한다.
     * 아닐 경우에는 nicknameDictionary에 prev 단어가 없는 경우와 있는 경우를 생각해서
     * 데이터를 저장한다.
     */
    if(isDuplicateNickName(prev, last, nickname)) return;
  
    if (Object.keys(nicknameDictionary).includes(prev)) {
      nicknameDictionary[prev][last] = userData[nickname];
    } else{
      nicknameDictionary[prev] = { [last]: userData[nickname] };
    }
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
