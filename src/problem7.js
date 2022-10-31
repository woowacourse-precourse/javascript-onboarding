/**
 * @param {string} user 사용자
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열
 * @param {string[]} visitors 방문 기록
 * @return {string[]} 추천하는 친구 모록
 */
function problem7(user, friends, visitors) {
  // 친구 관계가 적힌 객체를 만든다.
  const relationship = makeRelationship(friends);

  // 각 아이디의 점수가 적힌 객체를 만든다.
  const scores = makeScoreObject(friends);

  // 공통된 친구들의 아이디가 담긴 배열을 만들어 그 개수에 10을 곱해서 점수에 더한다.
  for (const [id, friends] of Object.entries(relationship)) {
    if (id === user) break;
    const mutualFriends = relationship[user].filter((v) => friends.includes(v));
    const score = mutualFriends.length * 10;
    scores[id] += score;
  }

  // 방문 기록을 순회하며 방문자의 점수에 1점씩 더한다.
  visitors.forEach((visitor) => {
    scores[visitor] = (scores[visitor] || 0) + 1;
  });

  const transposedScores = Object.entries(scores).reduce((obj, [id, score]) => {
    // 이미 친구인지 검사한다.
    const isAlreadyFriends = relationship[user].includes(id);
    // 0점인지 검사한다.
    const isZeroScore = score === 0;
    // 이미 친구도 아니고 0점도 아니라면 알파벳 순으로 정렬해서 넣는다.
    if (!isAlreadyFriends && !isZeroScore) {
      obj[score] = obj[score] ? [...obj[score], id].sort() : [id];
    }

    return obj;
  }, {});

  // 역전시킨 점수판을 기반으로 결과 배열을 만드는데,
  const result = Object.entries(transposedScores)
    // 점수가 높은 순으로 정렬하고
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    // 각 아이디가 담긴 배열만 합치고
    .reduce((arr, [_, ids]) => {
      arr.push(...ids);
      return arr;
    }, [])
    // 앞에서 5개만 남기고 자른다.
    .slice(0, 5);

  return result;
}

/**
 * 각 아이디의 친구 목록을 객체를 만들어 반환하는 함수
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열
 * @returns {Object<string, string[]>} 각 아이디를 key, 친구 목록을 value로 갖는 객체
 */
function makeRelationship(friends) {
  return friends.reduce((obj, friend) => {
    const [person1, person2] = friend;

    // 현재 아이디를 key로 갖는 속성이 있으면 기존 객체에 추가하고 없으면 새로 넣어준다.
    obj[person1] = obj[person1] ? [...obj[person1], person2] : [person2];
    obj[person2] = obj[person2] ? [...obj[person2], person1] : [person1];

    return obj;
  }, {});
}

/**
 * 아이디 당 0점으로 초기화 된 점수판을 반환하는 함수
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열
 * @returns {Object<string, number>} key는 아이디, value는 0으로 초기화 된 객체
 */
function makeScoreObject(friends) {
  // 이차원 배열을 일차원 배열로 만든다.
  const flattendFriends = friends.reduce(
    (arr, friend) => arr.concat(friend),
    []
  );
  // Set을 사용해 중복을 제거한다.
  const friendsSet = new Set(flattendFriends);
  // Set을 배열로 만든다.
  const people = Array.from(friendsSet);
  // 각 사람을 key로, 값을 0으로 초기화한 객체를 만든다.
  const score = people.reduce((obj, person) => ({ ...obj, [person]: 0 }), {});

  return score;
}

module.exports = problem7;
