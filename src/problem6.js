function problem6(forms) {
  let answer = [];
  const regex = /^[A-Za-z0-9]{2,10}@email.com/; // 이메일 형식 체크를 위한 정규표현식

  return answer.sort(); // 오름차순으로 정렬한다.
}

// 이메일 형식인지 체크한다.
function checkEmail(regex, email) {
  return regex.test(email);
}

module.exports = problem6;
