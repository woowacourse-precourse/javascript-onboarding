function problem7(user, friends, visitors) {
  // 제한사항 체크
  // - user는 길이가 1이상 30이하인 문자열
  // - friends는 길이가 1이상 10,000이하인 배열
  // - visitor는 길이가 0이상 10,000이하인 배열
  // - friends의 각 원소의 길이는 2인 배열
  // - 사용자의 아이디는 길이가 1이상 30이하이고 알파벳 소문자
  if(isValidInput(user,friends,visitors)) return false;

  function isValidInput (user, friends, visitors){
    if (user.length < 1 || user.length > 30 || friends.length < 1 || friends.length > 10000 || visitors.length < 0 || visitors.length > 10000) return true;
    friends.forEach(e => {
      if(e.length !== 2 || e[0].length < 1 || e[0].length > 30 || e[1].length < 1 || e[1].length > 30) return true;
    });
    return false;
  }


}
module.exports = problem7;
