function getUserFriend(pair, user, userFriends) {
  // 친구 목록에서 user의 친구를 추출한다.
  if (pair.includes(user)) {
    // user의 이름을 포함하고 있는 목록에서
    userFriends.push(pair.filter((name) => name !== user)[0]); // user의 이름을 제외한 친구의 이름을 배열에 추가한다.
  }
}

function getTheirFriend(pair, user, userFriends, theirFriends) {
  for (let friend of userFriends) {
    // user의 친구 목록 중 각 친구(friend)마다 반복문을 수행하며
    if (pair.includes(friend) && !pair.includes(user)) {
      // 전체 친구 관계 목록 중 friend를 포함하고 user를 포함하지 않는(user 친구의 친구인 경우)
      theirFriends.add(pair.filter((name) => name !== friend)[0]); // user의 친구가 아닌 친구의 친구를 theirFriends에 저장한다.
    }
  }
}

function getVisitorScore(visitor, userFriends, scores) {
  if (!userFriends.includes(visitor)) {
    // user의 친구가 아닌 방문자이고
    if (!scores.has(visitor)) {
      // scores에 해당 방문자명(visitor)이 존재하지 않는다면
      scores.set(visitor, 1); // scores에 방문자명을 추가하고 추천 점수 1로 시작한다.
    } else if (scores.has(visitor)) {
      // scores에 해당 방문자 데이터가 존재한다면
      let score = scores.get(visitor); // 그 방문자의 추천 점수를
      scores.set(visitor, score + 1); // 1만큼 증가시키고 저장한다.
    }
  }
}

function problem7(user, friends, visitors) {
  var answer;
  answer = [];
  let userFriends = []; // user 친구 명단
  let theirFriends = new Set(); // user 친구의 친구 명단
  let scores = new Map(); // user의 추천 친구 목록과 각 추천 점수 목록

  for (let pair of friends) {
    // user의 친구 목록 전체에 대해 반복문을 수행하며
    getUserFriend(pair, user, userFriends); // user의 친구 추출
  }

  for (let pair of friends) {
    // user의 친구 목록 전체에 대해 반복문을 수행하며
    getTheirFriend(pair, user, userFriends, theirFriends); // user 친구의 친구 추출
  }

  // 친구의 친구인 경우에는 추천 점수를 10점 부여한다.
  theirFriends.forEach((friend) => {
    scores.set(friend, 10);
  });

  for (let visitor of visitors) {
    // 방문자 목록에 대해 반복문을 수행하며
    getVisitorScore(visitor, userFriends, scores); // user의 친구가 아닌 방문자에 대해 추천 점수 부여
  }

  let arrayScores = [...scores]; // scores map 객체를 arrayScore 배열에 복사한다.
  arrayScores.sort((a, b) => {
    // 추천 점수를 높은 순으로 정렬하고
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else if (a[1] === b[1]) {
      // 추천 점수가 같은 사람의 경우 이름이 빠른 순으로 정렬한다.
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
    }
  });

  for (let arrayScore of arrayScores) {
    // 친구 추천 목록에서 모든 원소에 대해 반복문을 수행하며
    let name = arrayScore[0]; // 추천 이름만을 추출하고
    answer.push(name); // answer 배열에 추가한다.
  }

  if (answer.length > 5)
    // answer 배열의 크기가 5를 초과하면
    answer = answer.slice(0, 5); // 5명까지만 return 한다.

  return answer;
}

module.exports = problem7;
