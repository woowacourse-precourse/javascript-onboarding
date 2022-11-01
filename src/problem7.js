function problem7(user, friends, visitors) {
  if (errorHandler(user, friends, visitors))  return "Error";
  var answer;

  answer = scoreFriend(user, friends, visitors);
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


function scoreFriend(user, friends, visitors) {
  // user의 친구 리스트
  const friendsList = findFriend(user, friends);
  // 점수판
  let scoreBoard = {};

  // user의 친구 중 친구의 친구가 없을 경우 10점 추가
  friendsList.forEach((name) => {
    const friendsFriend = findFriend(name, friends).filter(
      (e) => e != user
    );
    friendsFriend.forEach((name) => {
      if (!friendsList.includes(name)) {
        scoreBoard[name]
          ? (scoreBoard[name] += 10)
          : (scoreBoard[name] = 10);
      }
    });
  });

  // visitors중 친구 리스트에 없으면 1점 추가
  for(i=0; i<visitors.length; i++) {
    if (!friendsList.includes(visitors[i])) {
      scoreBoard[visitors[i]] += 1
    }
  }

  let result = Object.entries(scoreBoard);

  // 점수순으로 정렬하되 점수가 같으면 이름순으로 정렬한다.
  return result.sort(([nameA, scoreA], [nameB, scoreB]) => {
    if (nameA < nameB)  return -1;
    else if (nameA > nameB) return 1;
    else  return 0;
  }).sort(([nameA, scoreA], [nameB, scoreB]) => scoreB - scoreA)
  .map(([name, _]) => name)
  .splice(0, 5);
}

module.exports = problem7;
