/*
 * 기능 분석
 * [x] 입력받은 forms에 대한 입력값 user 객체에 저장하는 기능
 * [x]] 닉네임에 2글자씩 분할하여 저장하는 nicknameDictionary 객체에 저장하는 기능
 * [x] 중복되는 2글자 닉네임이 있는 경우 중복된 사람의 이메일을 answer에 저장하는 기능
 * [x] 반복되는 닉네임을 가진 사람에 대한 처리 기능(ex. 김머판머판)
 * [x] 중복된 이메일과 중복된 닉네임으로 가입되는 경우에 대한 처리 기능
 */


function problem6(forms) {
  var answer = [];
  var userData = {};
  var nicknameDictionary = {};

  // 2글자가 중복되는 닉네임이 존재하는지 여부를 파악하는 함수
  const isDuplicateNickname = (prev, last) => Object.keys(nicknameDictionary).includes(prev) && (
    Object.keys(nicknameDictionary[prev]).includes(last)
  ); 

  // 현재 닉네임에서의 중복이 존재하는지 여부를 파악하는 함수
  const isDuplicateNowNickname = (prev, last, nowNickname) => (!(Object.keys(nowNickname).includes(prev) && (
    Object.keys(nowNickname[prev]).includes(last)))
  );

  const setAnswer = (prev, last, nickname) => {
  
    /*
     * answer 배열 안에 만약 이메일이 존재할 경우에는 저장하지 않도록 조건문 처리를 하였다.
     * 먼저 입력된 이메일이 먼저 들어가야하기에 userData에 있는 이메일을 먼저 비교하여야한다.
     */
    if (!answer.includes(userData[nickname])) {
      answer.push(userData[nickname])
    }
    if (!answer.includes(nicknameDictionary[prev][last])) {
      answer.push(nicknameDictionary[prev][last]);
    }
  }

  const setNicknameDirectory = (prev, last, nickname) => {

    /*
     * 만약 prev와 last 두글자와 동일하 요소가 존재할 경우 nicknameDictionary에는 저장하지 않고
     * answer에 넣는 작업을 진행한다.
     * 아닐 경우에는 nicknameDictionary에 prev 단어가 없는 경우와 있는 경우를 생각해서
     * 데이터를 저장한다.
     */
    if (Object.keys(nicknameDictionary).includes(prev)) {
      nicknameDictionary[prev][last] = userData[nickname];
    } else {
      nicknameDictionary[prev] = { [last]: userData[nickname] };
    }
  }


  for (let i = 0; i < forms.length; i++) {
    userData[forms[i][1]] = forms[i][0];
    let nowNickname = {}; // 현재 검사 중인 닉네임을 저장한다.
  
    /*
     * user 객체에 저장된 form 요소에서 닉네임에 관한 중복 요소를 구현하기 위해
     * 2글자마다 앞 글자를 키값으로, 뒷 글자를 내부 객체 키값으로 저장한다. 
     * 만약 저장하는 과정에서 isDuplicateNickname에서 true가 반환되면
     * 현재 진행하고 있는 닉네임에서 나온 것인지 여부를 파악하는 isDuplicateNowNickname을 실행한다.
     * true가 반환된 경우, setAnswer를 통해 이메일을 저장한다.
     * 중복되는 글자가 없다면 그대로 nicknameDictionary와 value에 저장해준다.
     */
    for (let k = 0; k < forms[i][1].length - 1; k++) {
      let [prev, last] = forms[i][1].substr(k, k + 2);
      if (isDuplicateNickname(prev, last)) {
        if (isDuplicateNowNickname(prev, last, nowNickname)) {
          setAnswer(prev, last, forms[i][1]);
        }
      }
      setNicknameDirectory(prev, last, forms[i][1]);

      if (Object.keys(nowNickname).includes(prev)) {
        nowNickname[prev][last] = true;
      } else {
        nowNickname[prev] = { [last]: true };
      }
    }

  }

  return answer;
}


module.exports = problem6;
