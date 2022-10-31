/** 기능 목록
 *  1. user와 친구관계에 있는 모든 친구를 찾는다.
 *  2. 친구 관계에 있는 친구와 친구인 사람의 이름과 점수가 담긴 객체를 만든다.
 *  3. 사용자의 타임 라인에 방문한 친구 중 친구가 아닌 사람들의 이름과 점수가 담긴 객체를 만든다.
 *  4. 2번과 3번의 객체를 합쳐서 점수가 높은 순으로 정렬한다.
 *  5. 점수가 같은 경우 이름을 사전순으로 정렬하여 반환한다.
 */

function problem7(user, friends, visitors) {
  const usersFriendList = friends
    .filter((friend) => friend.includes(user))
    .map((item) => (item[0] === user ? item[1] : item[0]));

  console.log("usersFriendList: ", usersFriendList);
}

module.exports = problem7;
