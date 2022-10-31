function problem7(user, friends, visitors) {
  var answer;
  let user_dict = calculate_score(user, friends, visitors);

  console.log(user_dict);
  let user_list = [];
  let key = Object.keys(user_dict);
  key.map((k) => user_list.push([k, user_dict[k]]));

  user_list.sort((a, b) => {
    let a_name = a[0];
    let b_name = b[0];
    let a_score = a[1];
    let b_score = b[1];

    if (a_score > b_score) return -1;
    else if (a_score < b_score) return 1;
    else if (a_name > b_name) return 1;
    else if (a_name < b_name) return -1;
  });
  console.log(user_list);
  answer = user_list.map((user) => {
    return user[0];
  });

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
  let common_friend_list = [];
  friends.map((friend) => {
    //친구명단에 있는 친구의 친구이며, 나 또는 나의 친구가 아닌 친구면 추가
    if (friend_list.includes(friend[0]) && !friend_list.includes(friend[1]) && friend[1] != user)
      common_friend_list.push(friend[1]);
    if (friend_list.includes(friend[1]) && !friend_list.includes(friend[0]) && friend[0] != user)
      common_friend_list.push(friend[0]);
  });
  return Array.from(common_friend_list);
}

//3. 친구가 아닌 사람의 명단 구하기
function people_list(user, friends, visitors) {
  let user_list = new Set();
  //friends와 visitors에 있는 모든 인원을 추가하고, 본인과 본인의 친구 명단은 모두 삭제함.
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
// 3. 점수계산 - 친구의 친구면
function calculate_score(user, friends, visitors) {
  let user_dict = people_list(user, friends, visitors);
  let common_friend_list = common_friend(user, friends);
  let friend_list = find_friend_list(user, friends);
  common_friend_list.map((common) => {
    user_dict[common] += 10;
  });
  visitors.map((visitor) => {
    if (!friend_list.includes(visitor)) user_dict[visitor] += 1;
  });

  return user_dict;
}

console.log(
  problem7(
    "yaena",
    [
      ["yaena", "ming"],
      ["ming", "siun"],
      ["yaena", "bbang"],
      ["bbang", "siun"],
      ["yaena", "zzi"],
      ["zzi", "siun"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);
