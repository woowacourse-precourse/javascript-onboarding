// 이메일 조건에 적합한지 확인하는 함수
function checkEmail(str) {
  const len = str.length;

  const reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 이메일 형식이 아니라면 false
  if (!reg.test(str)) return false;
  // 이메일이 email.com 이 아니라면 false
  const arr = str.split("@");
  if (arr[1] !== "email.com") return false;
  // 길이가 11보다 작거나 19보다 크다면 false
  if (len > 19 || len < 11) return false;

  return true;
}

// 닉네임 조건에 부합한지 확인하는 함수
function checkNickname(str) {
  const len = str.length;
  const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  // 한글이 아니라면 false
  if (!reg.test(str)) return false;
  // 길이가 1보다 작거나 19보다 크다면 false
  if (len < 1 || len > 19) return false;

  return true;
}

function problem6(forms) {
  let answer = [];
  let verifyForms = [];
  for (const [email, name] of forms) {
    if (checkEmail(email) && checkNickname(name))
      verifyForms.push([email, name]);
  }
  // 연속된 문자가 두글자 이상이면 겹치니 최소 개수 2개만 뽑아내서 검사
  let sameWord = {};
  for (let [email, name] of verifyForms) {
    for (let idx = 0; idx < name.length - 1; idx++) {
      const word = name.substr(idx, 2);
      if (!sameWord[word]) sameWord[word] = 1;
      else sameWord[word]++;
    }
  }

  // 객체에서 개수가 2이상인것을 뽑아낸다
  for (const [word, cnt] of Object.entries(sameWord)) {
    if (cnt > 1) {
      for (const [email, name] of verifyForms) {
        if (name.match(word)) answer.push(email);
      }
    }
  }

  // 중복 제거
  // 오름차순 정렬 추가
  answer = [...new Set(answer)].sort();
  return answer;
}

module.exports = problem6;
