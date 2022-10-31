function problem7(user, friends, visitors) {
  checkUserFriends(user, friends, userFriends);
}
function checkUserFriends(user, friends, userFriends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      userFriends.push(String(friends[i].filter((e) => e !== user)));
    }
  }
} // user의 친구를 확인하는 함수
module.exports = problem7;
