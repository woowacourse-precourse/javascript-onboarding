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

//2. 친구의 친구 명단 구하기
function common_friend(user, friends) {
  let friend_list = find_friend_list(user, friends);
  let common_friend_list = new Set();
  friends.map((friend) => {
    if (friend_list.includes(friend[0]) && !friend_list.includes(friend[1]) && friend[1] != user)
      common_friend_list.add(friend[1]);
    if (friend_list.includes(friend[1]) && !friend_list.includes(friend[1]))
      common_friend_list.add(friend[0]);
  });
  return Array.from(common_friend_list);
}
