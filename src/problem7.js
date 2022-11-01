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

module.exports = problem7;
