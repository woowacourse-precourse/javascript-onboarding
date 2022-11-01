function problem7(user, friends, visitors) {
  var answer;

  if (violationChk) {
  } else {
    answer = -1;
  }

  return answer;
}

function violationChk(user, friends, visitors) {
  var userChk = userChecker(user);
  var friendsChk = friendsChecker(friends);
  var visitorsChk = visitorsChecker(visitors);

  return userChk && friendsChk && visitorsChk;
}

function userChecker(user) {
  // user의 길이가 1 ~ 30 이하 인지 검사
  if (user.length >= 1 && user.length <= 30) {
    return true;
  } else {
    return false;
  }
}

module.exports = problem7;
