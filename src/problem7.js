function problem7(user, friends, visitors) {
  const VISIT_SCORE = 1;
  const FRIEND_WITH_USER_SCORE = 10;

  function createFriendsTable(friends) {
    const table = {};

    for (let friend of friends) {
      const [A, B] = friend;

      addFriend(table, A, B);
      addFriend(table, B, A);
    }

    return table;
  }

  function addFriend(table, A, B) {
    if (table[A]) {
      table[A].friends.push(B);
    }
    else {
      table[A] = {
        friends: [B],
        score: 0,
      };
    }
  }

  function calcFriendsScore(table, user) {
    const myFriends = table[user].friends;

    for (let friend of myFriends) {
      for (let test of table[friend].friends) {
        if (test !== user) {
          table[test].score += FRIEND_WITH_USER_SCORE;
        }
      }
    }
  }

  function calcVisitorsScore(table, visitors) {
    for (let visitor of visitors) {
      if (table[visitor]) {
        table[visitor].score += VISIT_SCORE;
      }
      else {
        table[visitor] = { score: VISIT_SCORE };
      }
    }
  }

  function isAlreadyFriend(table, user, target) {
    return table[user].friends.indexOf(target) > -1;
  }

  // indexOf보다 set이 좀더 빠를거같긴 함
  function getRecommendList(table) {
    const result = [];
    for (let name of Object.keys(table)) {
      if (isAlreadyFriend(table, user, name)) {
        continue;
      }
      if (table[name].score > 0) {
        result.push({ name, score: table[name].score });
      }
    }

    return result;
  }

  function sortFriendByScore(recommendList) {
    return recommendList.sort((a, b) => b.score - a.score).slice(0, 5);
  }

  const friendTable = createFriendsTable(friends);
  calcFriendsScore(friendTable, user);
  calcVisitorsScore(friendTable, visitors);

  const recommendList = getRecommendList(friendTable);
  sortFriendByScore(recommendList);

  return recommendList.map(friend => friend.name);
}

module.exports = problem7;

// 일단 친구 목록이랑 점수를 테이블로 만듬.
// 내 친구 이름을 키로 해서 친구의 친구들은 다 +10 ( 나 자신 빼고 )
// 방문자는 따로 +1
// hash keys 돌면서 점수가 0이 아니면 배열에 다 밖음 ( 나 자신 빼고 )
// 점수로 정렬해서 5명 짜름
// 점수 같은경우 이름으로 정렬

// 친구 추천이니까 이미 친구는 뺴고 return
