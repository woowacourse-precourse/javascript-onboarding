function problem7(user, friends, visitors) {
  // 관계 설정 함수
  const createRelations = (friends) => {
    const addRelation = (friendA, friendB) => {
      if (!relations[friendA]) {
        relations[friendA] = new Set([friendB]);
      } else {
        relations[friendA].add(friendB);
      }
    };

    const relations = {};
    friends.forEach(([friendA, friendB]) => {
      addRelation(friendA, friendB);
      addRelation(friendB, friendA);
    });
    return relations;
  };

  // 대상 유저의 주변인들에 대한 점수 계산 함수
  const checkFriendScore = (user, relations) => {
    const myFriends = relations[user];
    const scores = {};

    myFriends.forEach((myFriend) => {
      const theirFriends = relations[myFriend];
      theirFriends.forEach((theirFriend) => {
        if (scores[theirFriend]) {
          scores[theirFriend] += 10;
        } else {
          scores[theirFriend] = 10;
        }
      });
    });

    delete scores[user];
    return scores;
  };

  // 방문자 점수를 포함한 점수 계산 함수
  const checkVisitors = (user, score, visitors) => {
    const myFriends = relations[user];
    visitors.forEach((visitor) => {
      if (!myFriends.has(visitor)) {
        if (score[visitor]) {
          score[visitor] += 1;
        } else {
          score[visitor] = 1;
        }
      }
    });
    return score;
  };

  // 점수 순, 이름 오름차순으로 정렬하는 함수
  const sortByScoreAndName = (scores) => {
    return Object.keys(scores).sort((a, b) => {
      if (scores[a] < scores[b]) return 1;
      if (scores[a] > scores[b]) return -1;
      if (a > b) return 1;
      if (a < b) return -1;
    });
  };
}

module.exports = problem7;
