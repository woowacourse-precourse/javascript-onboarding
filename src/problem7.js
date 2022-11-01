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

function friendsChecker(friends) {
  var result = true;

  // friends 배열의 길이가 1 ~ 10000 인지 확인
  if (friends.length >= 1 && friends.length <= 10000) {
    for (var i = 0; i < friends.length; i++) {
      // friends의 각 원소의 길이가 2인지 확인
      if (!friends[i].length === 2) {
        result = false;
        break;
      }

      // 각 원소 안의 두 개의 아이디의 길이가 모두 1 ~ 30 인지 확인
      if (friends[i][0].length >= 1 && friends[i][0].length <= 30) {
        if (friends[i][1].length >= 1 && friends[i][1].length <= 30) {
          // 두 개의 아이디가 모두 알파벳 소문자인지 확인
          if (friends[i][0] === friends[i][0].toLowerCase()) {
            if (!(friends[i][1] === friends[i][1].toLowerCase())) {
              result = false;
              break;
            } else {
              result = false;
              break;
            }
          }
        } else {
          result = false;
          break;
        }
      } else {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }

  return result;
}

function visitorsChecker(visitors) {}

module.exports = problem7;
