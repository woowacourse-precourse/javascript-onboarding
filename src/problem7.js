function problem7(user, friends, visitors) {
  var answer = [];
  let cntFriends = 0;
  let listFriendship = [];
  listFriendship[0] = [];
  let score = new Map();
  score.set(user, -1);
  let numberOfFriend = new Map();
  numberOfFriend.set(user, cntFriends);
  cntFriends++;

  for (let i = 0; i < friends.length; i++) {
    let user1 = friends[i][0];
    let user2 = friends[i][1];
    if (!numberOfFriend.has(user1)) {
      numberOfFriend.set(user1, cntFriends);
      listFriendship[cntFriends] = [];
      cntFriends++;
    }
    if (!numberOfFriend.has(user2)) {
      numberOfFriend.set(user2, cntFriends);
      listFriendship[cntFriends] = [];
      cntFriends++;
    }
    listFriendship[numberOfFriend.get(user1)].push(user2);
    listFriendship[numberOfFriend.get(user2)].push(user1);
  }
  for (let i = 0; i < listFriendship[0].length; i++) {
    score.set(listFriendship[0][i], -1);
    for (let j = 0; j < listFriendship[i].length; j++) {
      if (
        score.has(listFriendship[i][j]) &&
        score.get(listFriendship[i][j]) != -1
      ) {
        score.set(listFriendship[i][j], score.get(listFriendship[i][j]) + 10);
      } else if (!score.has(listFriendship[i][j])) {
        score.set(listFriendship[i][j], 10);
      }
    }
  }
  for (let i = 0; i < visitors.length; i++) {
    if (score.has(visitors[i]) && score.get(visitors[i]) != -1) {
      score.set(visitors[i], score.get(visitors[i]) + 1);
    } else if (!score.has(visitors[i])) score.set(visitors[i], 1);
  }
  const scoreList = [...score];
  scoreList.sort((score1, score2) => {
    if (score2[1] > score1[1]) return 1;
    if (score2[1] - score1[1] == 0) {
      if (score1[0] > score2[0]) return 1;
      else if (score1[0] < score2[0]) return -1;
    } else return -1;
  });
  for (let i = 0; i < 5; i++) {
    if (scoreList[i][1] != -1) answer.push(scoreList[i][0]);
  }
  return answer;
}

module.exports = problem7;
