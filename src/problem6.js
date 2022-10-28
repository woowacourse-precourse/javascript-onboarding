// 기능 목록
// 1. 이메일 예외처리
// 2. 닉네임 예외처리
// 3. 이메일, 닉네임을 두 리스트에 각각 저장
// 4. 닉네임 리스트를 순회하며 2개의 문자 단위로 잘라서 닉네임 인덱스와 함께 저장
// => 2개의 문자로 자르는 이유는, 
//    연속되는 2개만 중복된다면 그 이상의 연속된 단어로 인한 중복은 전부 처리할 수 있기 때문
// 5. 문자 단위로 담긴 리스트를 순회하며 중복된 인덱스를 저장
// 6. 중복된 인덱스에 따라 이메일을 반환
// 7. 중복되는 경우가 2가지 이상인 경우 -> 리스트를 개수에 맞게 반환

// 두 글자 단어를 끊어주는 함수
function makeWord(nick_list){
  // 단어를 저장할 리스트
  const make_word_list = [];
  // 닉네임을 순회하며 두글자 씩 잘라 리스트에 저장
  for(let j = 0; j < nick_list.length - 1; j++){
    const word = nick_list[j] + nick_list[j+1];
    make_word_list.push(word);
  }
  // 닉네임이 한글자 이상이라면 정상적으로 반환
  return make_word_list.length > 1?make_word_list:false;
}

// 중복을 체크하여 반환하는 함수
function checkDuplicateNick(nick_list){
  // 두 자로 나눈 단어를 인덱스와 함께 저장할 리스트
  let word_list = [];
  // 중복된 인덱스를 해당 단어마다 저장할 객체
  let duplicateObject = {};

  // 닉네임 리스트를 순회하며 두 단어 단위로 만들어 생성
  for(let i = 0; i < nick_list.length; i++){
    // 해당 닉네임의 인덱스를 저장
    let temp_list = [i];
    // 두개씩 끊은 단어 리스트를 저장
    temp_list.push(...makeWord(nick_list[i]));
    // 만약 단어 리스트가 없다면, 즉 닉네임이 한글자라면 word_list에 저장하지 않음
    if(temp_list[1] !== false) word_list.push(temp_list);
  }
}

// 정규식을 통해 닉네임 예외처리
function exceptionNick(nick){
  // 닉네임에 자음 or 모음만 들어갈 경우가 아닌 오직 한글로 이루어진 경우만 확인
  const nickRegExp = new RegExp("[가-힣]+$");
  // 닉네임 정규식 및 길이 확인
  return nickRegExp.test(nick) && nick.length >= 1 && nick.length < 20?true:false;
}

// 정규식을 통해 이메일 예외처리
function exceptionEmail(email) {
  // 'RFC 5322 형식 + email.com'으로 이메일 확인
  const emailRegExp = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@email.com");
  // 정규식에 및 길이 확인
  return emailRegExp.test(email) && email.length >= 11 && email.length < 20?true:false;
}

function problem6(forms) {
  let answer;
  // 예외처리 할 form을 저장할 리스트
  let nick_list = [];
  let email_list = [];

  for([email, nick] of forms){
    // 이메일, 닉네임 예외처리
    const check_email = exceptionEmail(email);
    const check_nick = exceptionNick(nick);
    // 예외처리가 됐다면 리스트에 저장
    if(check_email && check_nick){
      email_list.push(email);
      nick_list.push(nick);
    }
  }
  const index_list = checkDuplicateNick(nick_list);
  
  return answer;
}

module.exports = problem6;