/**
 * @function problem7
 * @description
 * 레벨 2의 팀 프로젝트 미션으로 SNS(Social Networking Service)를 만들고자 하는 팀이 있다.
 * 팀에 속한 크루 중 평소 알고리즘에 관심이 많은 미스터코는 친구 추천 알고리즘을 구현하고자 아래와 같은 규칙을 세웠다.
 *
 * - 사용자와 함께 아는 친구의 수 = 10점
 * - 사용자의 타임 라인에 방문한 횟수 = 1점
 *
 * 사용자 아이디 user와 친구 관계를 담은 이차원 배열 friends, 사용자 타임 라인 방문 기록 visitors가 매개변수로 주어질 때,
 * 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return 하도록 solution 메서드를 완성하라.
 * 이때 추천 점수가 0점인 경우 추천하지 않으며, 추천 점수가 같은 경우는 이름순으로 정렬한다.
 * @param {string} [user]
 * @param {[string, string][]} [friends]
 * @param {string[]} [visitors]
 * @return {(string[])} 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return
 * @throws user는 길이가 1 이상 30 이하인 문자열이다.
 * @throws friends는 길이가 1 이상 10,000 이하인 배열이다.
 * @throws friends의 각 원소는 길이가 2인 배열로 [아이디 A, 아이디 B] 순으로 들어있다.
 * - A와 B는 친구라는 의미이다.
 * - 아이디는 길이가 1 이상 30 이하인 문자열이다.
 * @throws visitors는 길이가 0 이상 10,000 이하인 배열이다.
 * @throws 사용자 아이디는 알파벳 소문자로만 이루어져 있다.
 * @thorws 동일한 친구 관계가 중복해서 주어지지 않는다.
 * @thorws 추천할 친구가 없는 경우는 주어지지 않는다.
 * @todo 친구 관계를 가지는 해쉬맵을 리턴하는 함수
 * @todo 유저들과 점수를 초기화해 해쉬맵을 리턴하는 함수
 * @todo 서로 아는 친구의 추천 점수를 set하는 함수
 * @todo 타임 라인에 방문한 친구의 추천 점수를 set하는 함수
 * @todo 타겟 유저의 친구 관계를 순회하면서 +10점
 * @todo visitor를 순회하면서 +1점
 * @todo 결과를 정렬해주는 함수로 결과를 리턴
 */

function problem7(user, friends, visitors) {
  const friendsScore = getFriendsScore(friends);
  const friendsList = getFriendsList(friends);
  const alreadyFriends = friendsList.get(user);

  visitors.forEach((visitor) => setVisitorFriendsScore(visitor, friendsScore));

  if (!alreadyFriends) return getMaxScoreFriends(user, friendsScore);

  alreadyFriends.forEach((alreadyFriend) =>
    setFriendsScore(friendsList.get(alreadyFriend), friendsScore)
  );

  setRemoveAlreadyFriendsScore(alreadyFriends, friendsScore);

  return getMaxScoreFriends(user, friendsScore);
}

function getFriendsList(friends) {
  const map = new Map();
  friends.forEach(([from, to]) => {
    if (map.has(from)) map.get(from).push(to);
    else map.set(from, [to]);
    if (map.has(to)) map.get(to).push(from);
    else map.set(to, [from]);
  });
  return map;
}

function getFriendsScore(friends) {
  const map = new Map();
  friends.forEach(([from, to]) => {
    if (!map.has(from)) map.set(from, 0);
    if (!map.has(to)) map.set(to, 0);
  });
  return map;
}

function setFriendsScore(friends, friendsScore) {
  friends.forEach((friend) =>
    friendsScore.set(friend, friendsScore.get(friend) + 10)
  );
}

function setVisitorFriendsScore(visitor, friendsScore) {
  if (friendsScore.has(visitor))
    friendsScore.set(visitor, friendsScore.get(visitor) + 1);
  else friendsScore.set(visitor, 1);
}

function setRemoveAlreadyFriendsScore(alreadyFriends, friendsScore) {
  alreadyFriends.map((alreadyFriend) => friendsScore.delete(alreadyFriend));
}

function getMaxScoreFriends(user, friendsScore) {
  return setMapToArray(friendsScore)
    .filter(([key]) => key !== user)
    .filter(([_, value]) => value !== 0)
    .map(([name, scroe]) => ({ name, scroe }))
    .sort((a, b) => {
      if (a.scroe < b.scroe) return 1;
      if (a.scroe > b.scroe) return -1;
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    })
    .map(({ name }) => name)
    .slice(0, 5);
}

function setMapToArray(hashMap) {
  return Array.from(hashMap);
}

module.exports = problem7;
