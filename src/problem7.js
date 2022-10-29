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

//3. 친구가 이닌 명단 구하기
function people_list(user, friends, visitors) {
  let user_list = new Set();
  friends.map((friend) => {
    user_list.add(friend[0]);
    user_list.add(friend[1]);
  });
  visitors.map((visitor) => {
    user_list.add(visitor);
  });
  let friend_list = find_friend_list(user, friends);
  user_list.delete(user);
  friend_list.map((friend) => {
    user_list.delete(friend);
  });

  const dictObj = {};
  for (let i = 0; i < Array.from(user_list).length; i++) {
    dictObj[Array.from(user_list)[i]] = 0;
  }
  return dictObj;
}
// 3. 점수계산
function calculate_score(user, friends, visitors) {
  let user_dict = people_list(user, friends, visitors);
  let common_friend_list = common_friend(user, friends);
  common_friend_list.map((common) => {
    user_dict[common] += 10;
  });
  visitors.map((visitor) => {
    if (common_friend_list.includes(visitor)) user_dict[visitor] += 1;
  });
  return user_dict;
}
