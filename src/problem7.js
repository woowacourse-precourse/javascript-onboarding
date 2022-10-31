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

  return answer;
}

module.exports = problem7;
