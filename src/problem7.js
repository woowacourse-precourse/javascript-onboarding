/**
 * @param {[string, string]} friends
 * @returns {{[name : string] : string[]}} [name] : friendList
 */
const getRelationPeople = (friends) => {
  const obj = {};

  for (const [f1, f2] of friends) {
    f1 in obj ? (obj[f1] = [...obj[f1], f2]) : (obj[f1] = [f2]);
    f2 in obj ? (obj[f2] = [...obj[f2], f1]) : (obj[f2] = [f1]);
  }

  return obj;
};

/**
 * @param {string[]} visitors
 * @returns {{[name : string] : number}} [name] : visitedCnt 사용자의 타임 라인에 방문한 횟수
 */
const getVisitorsCnt = (visitors) => {
  const obj = {};

  for (const visitor of visitors) {
    visitor in obj ? (obj[visitor] += 1) : (obj[visitor] = 1);
  }

  return obj;
};

/**
 * @param {string} user1 사용자
 * @param {string} user2
 * @param {{[name : string] : string[]}} relation [name] : friendList
 * @returns {number} 사용자와 함께 아는 친구의 수
 */
const getKnowSameCnt = (user1, user2, relation) => {
  if (!(user1 in relation) || !(user2 in relation)) return 0;

  const friend1 = relation[user1];
  const friend2 = relation[user2];

  const difference = friend1.filter((x) => friend2.includes(x) && x !== user2);

  return difference.length;
};

const compareScoreAndName = (a, b) => {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;

  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

/**
 *
 * @param {string} user
 * @param {string[]} people
 * @param {[name: string]: string[]} relations
 * @param {[name: string]: number} visitedCnt
 * @returns {{score: number; name: string}[]}
 */
const getRecommendScore = (user, people, relations, visitedCnt) => {
  const recommendScore = [];

  for (person of people) {
    let score = 0;

    if (person in relations) {
      score += getKnowSameCnt(person, user, relations) * 10;
    }
    if (person in visitedCnt) {
      score += visitedCnt[person];
    }

    if (score !== 0) {
      recommendScore.push({ score, name: person });
    }
  }

  return recommendScore;
};

/**
 * 사용자와 사용자의 친구들이 아닌 사람들
 * @param {string} user
 * @param {[name: string]: string[]} relations
 * @param {[name: string]: number} visitedCnt
 * @returns {string[]}
 */
const getNotUserFriends = (user, relations, visitedCnt) => {
  const allPeople = [
    ...new Set([...Object.keys(relations), ...Object.keys(visitedCnt)]),
  ];

  const notUserFriends = allPeople.filter((person) =>
    checkNotUserFriends(user, person, relations)
  );

  return notUserFriends;
};

/**
 * @param {string} user
 * @param {string} person
 * @param {[name: string]: string[]} relations
 * @returns boolean
 */
const checkNotUserFriends = (user, person, relations) => {
  if (user in relations)
    return person !== user && !relations[user].includes(person);
  return true;
};

function problem7(user, friends, visitors) {
  const relations = getRelationPeople(friends);
  const visitedCnt = getVisitorsCnt(visitors);

  const notUserFriends = getNotUserFriends(user, relations, visitedCnt);

  const recommendScore = getRecommendScore(
    user,
    notUserFriends,
    relations,
    visitedCnt
  );

  const sortedRecommendScoreName = recommendScore.sort(compareScoreAndName);

  const resultNameList = sortedRecommendScoreName
    .map((res) => res.name)
    .slice(0, 5);

  return resultNameList;
}

module.exports = problem7;
