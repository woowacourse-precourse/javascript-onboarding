function makeFriendList(friends) {
  const friendList = {};
  for (let i = 0; i < friends.length; i++) {
    const [first, second] = friends[i];
    if (friendList.hasOwnProperty(first))
      friendList[first].push(second);
    else
      friendList[first] = [second];
    if (friendList.hasOwnProperty(second))
      friendList[second].push(first);
    else
      friendList[second] = [first];
  }
  return friendList;
}

function setScoreList(friendList) {
  const scoreList = {};
  for (let key in friendList) {
    scoreList[key] = 0;
  }
  return scoreList;
}

function addFriendScore(user, friendList, scoreObj) {
  for (let i = 0; i < friendList[user].length; i++) {
    const friend = friendList[user];
    for (farfriend of friendList[friend[i]]) {
      scoreObj[farfriend] += 10;
    }
  }
  for (let key in friendList) {
    if (scoreObj[key] === 0)
      delete scoreObj[key];
  }
}

function addVisitorScore(visitors, scoreObj) {
  visitors.forEach(function(element) {
    if (scoreObj.hasOwnProperty(element))
      scoreObj[element]++;
    else
      scoreObj[element] = 1;
  });
}

function recommandFriend(user, friends, visitors) {
  const friendList = makeFriendList(friends);
  const scoreList = setScoreList(friendList);
  addFriendScore(user, friendList, scoreList);
  addVisitorScore(visitors, scoreList);
}

function problem7(user, friends, visitors) {
  var answer = recommandFriend(user, friends, visitors);
  return answer;
}

module.exports = problem7;

/* 
구현

객체만들어서 친구 목록 정리
mrko : [donut, shakevan]
donut : [andole, jun, mrko]
andole ; [donut, shakevan]
jun : [donut, shakevan]
shakevan : [andole, jun, mrko]

key, value로 객체 생성

user 친구 목록 돌면서 친구의 친구들 +10
visitor 돌며 +1
user 직접적인 친구 리스트 삭제

 */