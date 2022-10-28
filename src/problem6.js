// 기능 목록
// 1. 이메일 예외처리
// 2. 닉네임 예외처리
// 3. 이메일, 닉네임을 두 리스트에 각각 저장
// 4. 닉네임 리스트를 순회하며 2개의 문자 단위로 잘라서 닉네임 인덱스와 함께 저장
// => 2개의 문자로 자르는 이유는, 
//    연속되는 2개만 중복된다면 그 이상의 연속된 단어로 인한 중복은 전부 처리할 수 있기 때문
// 5. 문자 단위로 담긴 리스트를 순회하며 중복된 인덱스를 저장
// 6. 중복된 인덱스에 따라 이메일을 중복 처리 및 반환
// 7. 중복되는 경우가 2가지 이상인 경우 -> 리스트를 개수에 맞게 반환

// 인덱스를 이메일로 변환하여 저장
function makeEmailList(index_list, email_list){
  // 중복된 경우가 두 가지 이상일 경우에 중복된 단어 기준 오름차순으로 정렬
  let sort_index_list = index_list.sort((a, b)=>{
    return a.word - b.word;
  });

  let temp_email_list = [];
  // sort_index_list를 순회하며 인덱스를 통해 이메일로 변환
  for(object of sort_index_list){
    let change_email = object.index.map(index=>{
      return email_list[index];
    });
    // 이메일을 오름차순
    change_email.sort();
    // 이메일 중복 제거
    const email_set = new Set(change_email);
    temp_email_list.push([...email_set]);
  }
  return temp_email_list;
}

// word_list를 돌며 단어를 포함하고 있나 확인하는 함수
function checkDuplicate(current_word, word_list){
  let temp_object = {word: current_word, index: []};
  for(let k = 0; k < word_list.length; k++){
    // word_list 안의 리스트에 단어가 포함된다면 temp_object에 추가
    if(word_list[k].includes(current_word)){
      temp_object.index.push(word_list[k][0]);
    };
  }
  return temp_object;
}

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
  let duplicateList = [];

  // 닉네임 리스트를 순회하며 두 단어 단위로 만들어 생성
  for(let i = 0; i < nick_list.length; i++){
    // 해당 닉네임의 인덱스를 저장
    let temp_list = [i];
    // 두개씩 끊은 단어 리스트를 저장
    let make_word_list = makeWord(nick_list[i]);
    // 만약 단어 리스트가 없다면, 즉 닉네임이 한글자라면 word_list에 저장하지 않음
    if(make_word_list){
      temp_list.push(...make_word_list);
      word_list.push(temp_list);
    } 
  }
  // word_list의 단어를 순회하며 해당 단어로 중복된 닉네임의 인덱스를 객체로 저장
  for(let i = 0; i < word_list.length; i++){
    for(let j = 1; j < word_list[i].length; j++){
      // 중복 확인할 단어
      const current_word = word_list[i][j];
      // 해당 단어가 객체에 없다면 중복 검사
      let checkPossible = true;
      for(let object of duplicateList){
        if(object.word === current_word){
          checkPossible = false; break;
        }
      }
      if(checkPossible){
        let temp_object = checkDuplicate(current_word, word_list);
        if(temp_object.index.length > 1) duplicateList.push(temp_object);
      }
    }
  }
  return duplicateList;
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

  // 이메일로 변환하여 저장
  answer = makeEmailList(index_list, email_list);
  // 중복되는 경우가 여러개인 경우 그대로, 1개인 경우는 이중 리스트 임으로 0인덱스의 리스트만 반환
  return answer.length > 1?answer:answer[0];
}

module.exports = problem6;