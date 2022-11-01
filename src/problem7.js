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

const findUserFriendFriends = (user, userFriends, friends) => {
  let findFriendsList = [];
  friends.map((elem) => {
    if (userFriends.includes(elem[0])) {
      findFriendsList.push(elem[1]);
    }
    if (userFriends.includes(elem[1])) {
      findFriendsList.push(elem[0]);
    }
  });
  findFriendsList = [...new Set(findFriendsList)];
  findFriendsList.map((elem, idx) => {
    if ([...userFriends, user].includes(elem)) {
      findFriendsList.splice(idx, 1);
    }
  });
  return findFriendsList;
};
function problem7(user, friends, visitors) {
  const userFriends = findUserFriends(user, friends);
  const findFriendsList = findUserFriendFriends(user, userFriends, friends);
  return answer;
}

module.exports = problem7;
