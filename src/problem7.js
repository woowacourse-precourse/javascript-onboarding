// 0. user 문자열의 길이 검사
// 1. friends 배열이 1이상 10000이하 인지 검사
// 2. visitors 배열 길이가 0이상 10000이하 인지 검사
// 3. 사용자 아이디가 소문자인지 검사하는 함수 추가
// 4. 친구관계 중복검사

function userValidCheck(user) {
  const userRegex = /^[a-z]{1,30}$/;

  if (userRegex.test(user) === false) {
    return -1;
  }
  return 0;
}

function friendsValidCheck(friends) {
  if (friends.length < 1 || friends.length > 10000) {
    return -1;
  }
  for (let index = 0; index < friends.length; index++) {
    if (friends[index].length !== 2) {
      return -1;
    }
    if (
      userValidCheck(friends[index][0]) < 0 ||
      userValidCheck(friends[index][1]) < 0
    ) {
      return -1;
    }
  }
  return 0;
}

function visitorsValidCheck(visitors) {
  if (visitors.length < 0 || visitors.length > 10000) {
    return -1;
  }
  return 0;
}

function validInputCheck(user, friends, visitors) {
  if (userValidCheck(user) < 0) {
    return -1;
  }
  if (friendsValidCheck(friends) < 0) {
    return -1;
  }
  if (visitorsValidCheck(visitors) < 0) {
    return -1;
  }
  return 0;
}

function problem7(user, friends, visitors) {
  if (validInputCheck(user, friends, visitors) < 0) {
    return "Argument Error";
  }
  var answer;
  return answer;
}

module.exports = problem7;
