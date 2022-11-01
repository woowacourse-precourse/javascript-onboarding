function checkForm(forms) {
  if (forms.length < 1 || forms.length > 10000)
    return 0;
}

function emailCheck(element) {
  const email = element[0];
  if (email.length < 11 || email.length >= 20)
    return false;
  if (!email.endsWith('@email.com'))
    return false;
  return true;
}

function nicknameCheck(element) {
  const nickname = element[1];
  const regx = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (nickname.length < 1 || nickname.length >= 20)
    return false;
  return !regx.test(nickname);
}

function wordCountObj(forms) {
  const obj = {};
  forms.forEach(function(form) {
    const nickname = form[1];
    for (let i = 0; i < nickname.length - 1; i++) {
      const word = nickname.substr(i, 2);
      if (obj.hasOwnProperty(word)) obj[word]++;
      else  obj[word] = 1;
    }
  });
  return obj;
}

function checkDup(forms) {
  const wordCntList = wordCountObj(forms);
  for (let word in wordCntList) {
    if (wordCntList[word] === 1)
      delete wordCntList[word];
  }
  const answerSet = getEmailOfDups(forms, wordCntList)
  return Array.from(answerSet);
}

function problem6(forms) {
  if (!checkForm)
    return '';
  forms = forms.filter(emailCheck);
  forms = forms.filter(nicknameCheck);
  var answer = checkDup(forms);
  return answer.sort();
}

module.exports = problem6;

/*
예외처리
1 <= forms.length <= 10000
10 < 이메일 length < 20
이메일 도메인이 @email.com (email.endsWith('@email.com'))
0 < 닉네임 length < 20
닉네임이 한글인지 ('/ㄱ-ㅎ|ㅏ-ㅣ|가-힣/'.test(name))

구현
1. 예외처리 함수
2. form의 nickname의 연속된 두글자의 경우를 모두 wordlist에 저장
3. wordlist에 처음 저장되는 경우 값을 1로, 이미 저장된 글자인 경우는 값++
4. wordlist에서 값이 2 미만인 프로퍼티 지우기
5. const answerSet = new Set();
6. wordlist에 있는 문자가 닉네임에 포함된 사람의 아메일을 answerSet에 추가
 */