function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function errorHandler(user, friends, visitors) {
  if (user.length >= 30)  return true;
  if (friends.length > 10000 | visitors > 10000)  return true;

  return false;
}

// 친구찾기 함수
function findFriend(user, friends) {
  let friendList = [];

  // user가 있는 객체를 찾은 후 user의 반대편에 있는 친구의 이름을 저장한다.
  friendList = friends.filter(([a, b]) => a == user | b == user).map(
    ([a, b]) => (a == user ? b : a)
  );

  return friendList;
}

function scoreFriend(user, friends) {
  // user의 친구 리스트
  const friendsList = findFriend(user, friends);
  // 친구의 친구를 저장할 배열
  const friendsFriend = [];

  // friendsList 원소(친구)의 친구를 찾는다.
  for(i=0; i<friendsList.length; i++) {
    friendsFriend = findFriend(friendsList[i], friends).filter((e) => e != user);
  }
}

module.exports = problem7;
