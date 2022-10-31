/*
 * <기능 목록>
 * 1. 친구 관계를 담은 이차원 배열 friends에서 사용자와 친구인 userFriends와 친구의 친구인 friendsOfFriend 배열을 반환하는 seperateFriends() 함수.
 *     이 때, userFriends는 중복을 제거하고, friendsOfFriend는 추천 점수를 계산해야 하므로 중복 제거하지 않는다.
 *     또한, user는 friendsOfFriend에서 제외한다.
 * 2. 친구의 친구 리스트 friendsOfFriend을 입력받아 함께 아는 친구 추천 점수를 포함한 Object를 반환하는 scoreCommonFriend() 함수.
 *     이 때, Object의 key는 '아이디'이고, value는 (중복된 친구 수 * 10) 이다.
 * 3. 방문기록 visitors에서 방문자 추천 점수를 포함한 Object를 반환하는 scoreVisitor() 함수.
 *     이 때, Object의 key는 '아이디'이고, value는 (중복된 친구 수) 이다.
 *     또한, 사용자의 친구인 userFriends는 제외 추천에서 제외한다.
 * 4. 두 개의 추천 점수를 합산한 Object를 반환하는 addScore() 함수.
 * 5. 친구 추천 점수 상위 5명을 반환하는 findFeatureFriend() 함수.
 * 6. 점수는 내림차순, 점수가 같다면 이름순으로 정렬하기 위해 쓰이는 sortFunction() 함수.
 */

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
