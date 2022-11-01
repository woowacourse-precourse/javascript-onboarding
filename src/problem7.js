/**
 * 추천 친구 list를 만들어주는 함수
 * @param {(string | undefined)[]} list
 * @param {string[][]} friends
 * @returns {object}
 */
function makeRecommandList(list, user, friends) {
  return list.reduce((acc, friend) => {
    if (!acc[friend]) acc[friend] = [];

    for (let i = 0; i < friends.length; i++) {
      if (
        (friends[i][0] === friend && friends[i][1] !== user) ||
        (friends[i][1] === friend && friends[i][0] !== user)
      ) {
        acc[friend].push(friend === friends[i][1] ? friends[i][0] : friends[i][1]);
      }
    }

    return acc;
  }, {});
}

/**
 * 아이디를 key로 점수를 저장한 후 반환하는 함수
 * @param {(string | undefined)[]} list
 * @param {string[]} visitors
 * @returns {object}
 */
function calculateScoreById(list, visitors) {
  const scoreById = {};

  for (const value of Object.values(list)) {
    value.forEach((id) => {
      if (!scoreById[id]) scoreById[id] = 0;
      scoreById[id] += 10;
    });
  }

  visitors.forEach((visitor) => {
    if (!scoreById[visitor]) scoreById[visitor] = 0;

    scoreById[visitor] += 1;
  });

  return scoreById;
}

/**
 * 점수가 높은 순으로 아이디를 배열에 저장하는 함수
 * @param {(string | undefined)[]} userFriends
 * @param {object} scoreById
 * @returns {string[]}
 */
function resultByScore(userFriends, scoreById) {
  const idByScore = {};
  const answer = [];

  for (const [key, value] of Object.entries(scoreById)) {
    if (userFriends.find((id) => id === key)) continue;

    if (!idByScore[value]) idByScore[value] = [];
    idByScore[value].push(key);
  }

  const keys = Object.keys(idByScore).sort((a, b) => b - a);

  keys.forEach((key) => {
    answer.push(...idByScore[key].sort());
  });

  return answer;
}

/**
 * @param {string} user
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {string[]}
 */
function problem7(user, friends, visitors) {
  const userFriends = friends.map((friend) => {
    if (friend.find((id) => id === user)) {
      return user === friend[1] ? friend[0] : friend[1];
    }
  });
  const recommandList = makeRecommandList(userFriends, user, friends);
  const scoreById = calculateScoreById(recommandList, visitors);
  const answer = resultByScore(userFriends, scoreById);

  return answer.splice(0, 5);
}

module.exports = problem7;
