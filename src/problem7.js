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
  const checkFriendScore = (user, relations, myFriends) => {
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
  const checkVisitors = (user, score, visitors, myFriends) => {
    visitors.forEach((visitor) => {
      if (myFriends) {
        if (!myFriends.has(visitor)) {
          if (score[visitor]) {
            score[visitor] += 1;
          } else {
            score[visitor] = 1;
          }
        }
      } else {
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

  // 유저의 1차 친구들을 걸러내는 함수
  const filterFriends = (names, myFriends) => {
    const ret = [];
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (!myFriends.has(name)) {
        ret.push(name);
        if (ret.length === 5) break;
      }
    }
    return ret;
  };

  // 함수 적용 후 결과값 반환
  const relations = createRelations(friends);
  const myFriends = relations[user] || new Set();
  const friendScore = checkFriendScore(user, relations, myFriends);
  const totalScores = checkVisitors(user, friendScore, visitors, myFriends);
  const sortedResult = sortByScoreAndName(totalScores);
  const result = filterFriends(sortedResult, myFriends);
  return result;
}

module.exports = problem7;
