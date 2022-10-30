function problem7(user, friends, visitors) {
  const idList = getIdSet(user, friends, visitors);
  var answer;
  return answer;
}

/**
 * user, friends, visitors에 등장하는 모든 id를 중복없이 저장한다
 * @param {string} user - 사용자 아이디
 * @param {Array<Array<string, string>>} friends - 친구 관계를 담은 이차원 배열
 * @param {Array<string>} visitors - 사용자 타임 라인 방문 기록
 * @returns {Array<string>} 모든 id 리스트
 */
const getIdSet = (user, friends, visitors) => {
  const idSet = new Set(visitors);
  idSet.add(user);
  friends.forEach((friend) => {
    idSet.add(friend[0]).add(friend[1]);
  });
  return [...idSet];
};

module.exports = problem7;
