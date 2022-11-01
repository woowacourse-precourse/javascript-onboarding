function problem7(user, friends, visitors) {
  const userFriendList = makeUserFriendList(user, friends)
  const withoutUserList = makeWithoutUserList(user, friends)
  const bestRecommendFriend = makeBestRecommendFriend(withoutUserList, userFriendList);

  const scoreBoard = {};
  const dudeScore = 10;
  const visitScore = 1;

  bestRecommendFriend.forEach((el) => {
    if (scoreBoard[el]) scoreBoard[el] += dudeScore;
    else scoreBoard[el] = dudeScore;
  })

  visitors.forEach((el) => {
    if (userFriendList.includes(el)) return
    else if (scoreBoard[el]) scoreBoard[el] += visitScore;
    else scoreBoard[el] = visitScore;
  })

  const scoreObj = [];
  const keysArr = Object.keys(scoreBoard);
  const valueArr = Object.values(scoreBoard);

  for (let i = 0; i < keysArr.length; i++) {
    scoreObj.push({
      key: keysArr[i],
      score: valueArr[i]
    })
  }

  const answer = printObjKey(scoreSort(keySort(scoreObj)))

  return answer.slice(0, 5);
}

function printObjKey(answer) {
  return answer.map(i => i.key)
}

function scoreSort(answer) {
  return answer.sort((a, b) => b.score - a.score);
}

function keySort(scoreObj) {
  return scoreObj.sort((a, b) => {
    if (a.key > b.key) return 1
    if (a.key === b.key) return 0
    if (a.key < b.key) return -1
  });
}

function makeBestRecommendFriend(withoutUserList, userFriendList) {
  return withoutUserList.map((v) => v.filter((x) => !userFriendList.includes(x))).map(i => i.join(''))
}

function makeUserFriendList(user, friends) {
  const userFriend = []
  friends.forEach((v) => {
    if (v.includes(user)) {
      userFriend.push(v.filter(i => i !== user).join(''));
    }
  })
  return userFriend
}

function makeWithoutUserList(user, friends) {
  const withoutUser = [];
  friends.forEach((v) => {
    if (!v.includes(user))
      withoutUser.push(v)
  })
  return withoutUser
}

module.exports = problem7;