function problem7(user, friends, visitors) {
  const answer = [];
  let mutualFriendList = [];
  let scoreSet = new Map();

  const getUserFriends = function (user, friendList) {
    friendList.forEach((friend) => {
      const [friendA, friendB] = friend;

      if (friendA === user) {
        mutualFriendList.push(friendB);
      }
      if (friendB === user) {
        mutualFriendList.push(friendA);
      }
    });
  };

  const getMutualFriends = function (user, friendList) {
    friendList.forEach((friend) => {
      const [friendA, friendB] = friend;

      if (!friend.includes(user)) {
        if (mutualFriendList.includes(friendA)) {
          scoreSet.set(friendB, (scoreSet.get(friendB) || 0) + 10);
        }
        if (mutualFriendList.includes(friendB)) {
          scoreSet.set(friendB, (scoreSet.get(friendB) || 0) + 10);
        }
      }
    });
  };

  const countVisitScore = function (visitor) {
    visitors.forEach((visitor) => {
      scoreSet.set(visitor, (scoreSet.get(visitor) || 0) + 1);
    });
  };

  const deleteDuplicate = function (mutualFriendList, scoreSet) {
    mutualFriendList.forEach((item) => {
      if (scoreSet.has(item)) {
        scoreSet.delete(item);
      }
    });
  };

  const getTopFiveRecommendation = function (scoreSet) {
    let cuttedScoreSet = [];

    scoreSet = [...scoreSet];
    scoreSet.sort((a, b) => {
      b[1] - a[1];
    });
    
    cuttedScoreSet = scoreSet.slice(0, 4);
    for (let [name, score] of cuttedScoreSet) {
      answer.push(name);
    }
  };

  getUserFriends(user, friends);
  getMutualFriends(user, friends);
  countVisitScore(visitors);
  deleteDuplicate(mutualFriendList, scoreSet);
  getTopFiveRecommendation(scoreSet);

  return answer;
}


module.exports = problem7;


