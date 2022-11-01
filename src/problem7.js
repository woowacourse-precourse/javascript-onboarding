/**
 * 기능 정의
 *
 * - [x] 전체 유저 목록 생성하기
 * - [ ] 사용자와 함께 아는 친구 있는 유저들을 그 수만큼 친구 추천 점수 높이기
 * - [ ] 사용자의 타임 라인에 방문한 유저들의 점수를 높이기
 * - [ ] 사용자와 사용자의 친구를 제외하고, 점수가 0이 아닌 유저들로 친구 추천 목록 구성하기
 * - [ ] 친구 추천 목록을 점수 순, 이름 순으로 정렬하기
 */

/**
 * 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명의 추천인을 반환하는 함수
 * - 사용자와 함께 아는 친구의 수 = 10점
 * = 사용자의 타임 라인에 방문한 횟수 = 1점
 *
 * @param {string} user 사용자의 아이디
 * - 길이가 1 이상 30 이하인 문자열인
 * @param {string[][]} friends 사용자의 친구 관계를 담은 이차원 배열
 * - 길이가 1이상 10,000 이하인 배열
 * - 각 원소는 길이가 2인 배열로 [아이디 A, 아이디 B] 순이다.
 * - 아이디는 길이가 1 이상 30 이하인 문자열로 소문자로만 이루어져 있다.
 * - 동일한 친구 관계가 중복으로 주어지지 않는다.
 * - 추천할 친구가 없는 경우 주어지지 않는다. (? => 길이가 1 이상인데)
 * @param {string[]} visitors 사용자 타임 라인 방문 기록
 * - 길이가 0 이상 10,000 이하인 배열
 * @returns {string[]} 친구 추천 규칙에 따라 점수가 높은 5인의 추천인
 */
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

/**
 * 유저 정보가 담긴 객체
 *
 * @typedef {Object} User
 * @property {string} name - 유저의 이름
 * @property {string[]} friends - 유저의 친구들의 이름
 * @property {score} score - 유저의 점수
 */

/**
 * 주어진 친구목록과 사용자의 타임 라인에 방문한 유저들을 토대로 전체 유저 목록을 생성하는 함수
 *
 * @param {string[][]} friends 사용자의 친구 관계를 담은 이차원 배열
 * @param {string[]} visitors 사용자 타임 라인 방문 기록
 * @returns {User[]} 유저의 이름, 친구목록, 점수를 가진 객체들이 담긴 배열
 */
function getUsers(friends, visitors) {
  const users = {};

  friends.forEach(([userA, userB]) => {
    users[userA] = createUser(users, userA, userB);
    users[userB] = createUser(users, userB, userA);
  });

  visitors.forEach((user) => {
    users[user] = createUser(users, user, null);
  });

  return users;
}

/**
 * userB를 친구로 가진 userA를 생성하는 함수
 *
 * @param {User[]} users 유저가 담긴 배열
 * @param {string} userA 생성할 유저의 이름
 * @param {string} userB 유저읜 친구 이름
 * @returns {User}
 */
function createUser(users, userA, userB) {
  return {
    name: userA,
    friends: [...(users[userA]?.friends || []), userB],
    score: 0,
  };
}

module.exports = problem7;
