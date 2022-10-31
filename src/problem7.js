function problem7(user, friends, visitors) {
  let answer = [];
  let recommendationObj = {};

  const allRelationships = findAllRelationship(friends);
  findMutualFriends(user, allRelationships, recommendationObj);

  return answer;
}

function findAllRelationship(friends) {
  let allRelationships = {};

  for (let el of friends) {
    if (!allRelationships[el[0]]) {
      allRelationships[el[0]] = [];
    }

    allRelationships[el[0]].push(el[1]);

    if (!allRelationships[el[1]]) {
      allRelationships[el[1]] = [];
    }

    allRelationships[el[1]].push(el[0]);
  }

  return allRelationships;
}

function findMutualFriends(user, allRelationships, recommendation) {
  for (let person in allRelationships) {
    if (allRelationships[user].includes(person)) {
      for (let friend of allRelationships[person]) {
        if (!allRelationships[user].includes(friend) && friend !== user) {
          if (!recommendation[friend]) {
            recommendation[friend] = 0;
          }
          recommendation[friend] += 10;
        }
      }
    }
  }
}

module.exports = problem7;

/**
 *
 * 1) friends 목록으로부터 각 사용자의 id를 key로, 친구 목록의 배열을 값으로 하는 객체를 작성한다
 * 2) 해당 객체에서 user의 친구에 대하여(1촌), 1촌의 친구(2촌)가 나의 친구가 아니면 recommendation 객체에 추가하고, 점수를 10점 부여한다
 * 3) visitors 배열에 대하여 방문자가 나의 친구 배열에 없는 경우 recommendation 객체에 추가하고, 점수를 1점 추가한다
 * 4-1) recommendation 객체의 엘리먼트 수가 5개 이하이면 key값을 answer배열에 담아서 리턴한다
 * 4-2) recommendation 객체의 엘리먼트 수가 5 초과이면 점수 - 이름 순으로 sort하여 상위 5개만 answer배열에 담아 리턴한다
 *
 */
