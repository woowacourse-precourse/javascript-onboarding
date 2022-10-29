function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;

// 1. 친구 명단 구하기
function find_friend_list(user, friends) {
  let friend_list = new Set();
  friends.map((friend) => {
    if (friend[0] === user) friend_list.add(friend[1]);
    else if (friend[1] === user) friend_list.add(friend[0]);
  });
  return Array.from(friend_list);
}
