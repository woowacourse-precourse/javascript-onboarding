function problem7(user, friends, visitors) {
  let answer;
  let friendList = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      friendList.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      friendList.push(friends[i][0]);
    }
  }
  
  let friendOfFriendList = [];
  for (let i = 0; i < friendList.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j][0] == friendList[i] && friends[j][1] != user) {
        friendOfFriendList.push(friends[j][1]);
      } else if (friends[j][1] == friendList[i] && friends[j][0] != user) {
        friendOfFriendList.push(friends[j][0]);
      }
    }
  }

  const getElCount = (arr) => arr.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});

  let result = getElCount(friendOfFriendList);
  
  for (let [key, value] of Object.entries(result)) {
    value *= 10;
    result[key] = value;
  }

  let visitorList = [];
  for (let i = 0; i < visitors.length; i++) {
    if (friendList.indexOf(visitors[i]) == -1) {
      visitorList.push(visitors[i]);
    }
  }

  for (let i = 0; i < visitorList.length; i++) {
    if (result[visitorList[i]] == undefined) {
      result[visitorList[i]] = 1;
    } else {
      result[visitorList[i]] += 1;
    }
  }
  result = Object.entries(result);
  result.sort((a, b) => b[1] - a[1]);
  answer = result.slice(0, 5);
  answer = answer.map((el) => el[0]);

  return answer;
}

module.exports = problem7;
