/* 
1. user의 친구를 찾는다 -> findUserFriends
2. user의 친구의 친구를 찾는다. =>findUserFriendFriends
3. 방문한 사람 중 user의 친구 삭제 => removeVisitorsFriends
*/
const findUserFriends = (user, friends) => {
  let userFriends = [];
  friends.map((elem) => {
    if (elem[0] === user) {
      userFriends.push(elem[1]);
    }
    if (elem[1] === user) {
      userFriends.push(elem[0]);
    }
  });
  return userFriends;
};
function problem7(user, friends, visitors) {
  let userFriends = [];
  var answer;

  return answer;
}

module.exports = problem7;
