/*
[기능 목록]
1. 이메일 형식 체크
2. 닉네임 한글 체크
3. 닉네임 중 같은 글자가 연속적으로 포함되는 닉네임 반환
4. 연속된 중복문자가 없는 이메일 중 중복된 이메일 제거하고 오름차순 정렬한 결과 반환
*/

function checkEmailFormat(forms){
  let email;
  for(let i = 0; i < forms.length; i++){
    email = forms[i][0];
    if(email.length < 11 || email.length >= 20){
      return false;
    }
    if(email.indexOf('email.com') === -1){
      return false;
    }
  }
  return true;
}

function checkNickname(forms){
  let korean_pattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  let nickname;
  for(let i = 0; i < forms.length; i++){
    nickname = forms[i][1];
    if(!korean_pattern.test(nickname)){
      return false;
    }
  }
  return true;
}

function checkSequenceName(forms){
  let word_data = {};
  for(let k = 0; k < forms.length; k++){
    let name = forms[k][1];
    let email = forms[k][0];
    for(let i = 2; i <= name.length; i++){
      for(let j = 0; i+j<=name.length; j++){
        let sequence_word = name.slice(j, j+i);
        if (sequence_word in word_data){
          word_data[sequence_word].push(email);
        } else{
          word_data[sequence_word] = [email];
        }
      }
    }
  }

  let result = []
  for(let key in word_data){
    if(word_data[key].length > 1){
        result = result.concat(word_data[key]);
    }
  }
  return getResult(result);
}


function getResult(result){
  const set = new Set(result);
  const new_result = Array.from(set);
  new_result.sort();
  return new_result;
}


function problem6(forms) {
  let answer;
  if(!checkEmailFormat(forms) || !checkNickname(forms)){
    return -1;
  }
  answer = checkSequenceName(forms);
  return answer;
}

module.exports = problem6;
