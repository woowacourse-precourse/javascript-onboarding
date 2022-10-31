function problem7(user, friends, visitors) {
  let userFriends = [];
  let point = {};
  let result = [];
  checkUserFriends(user, friends, userFriends);
  addFriends(user, friends, userFriends, point);
}
function checkUserFriends(user, friends, userFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(String(friends[i].filter((e) => e !== user)));
    }
  }
} // user의 친구를 확인하는 함수

function addFriends(user, friends, userFriends, point) {
  for (let i = 0; i < friends.length; i++) {
    for (let k = 0; k < 2; k++) {
      if (!userFriends.includes(friends[i][k]) && friends[i][k] !== user) {
        point[friends[i][k]] = 0;
      }
    }
  }
}
module.exports = problem7;
