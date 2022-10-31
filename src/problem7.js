function problem7(user, friends, visitors) {
  var answer;
  let user_dict = calculate_score(user, friends, visitors);
  let user_list = [];
  let key = Object.keys(user_dict);

  //기능 6 - 예외처리 중, 점수가 0점이면 추천하지 않음
  key.map((k) => {
    if (user_dict[k] !== 0) user_list.push([k, user_dict[k]]);
  });

  //기능 5 - 정렬
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

  answer = user_list.map((user) => {
    return user[0];
  });

  //기능 6 - 예외처리 중, 최대 5명만 추천하도록 제한함.
  if (answer.length > 5) {
    answer = answer.slice(0, 5);
  }

  return answer;
}

module.exports = problem7;

// 기능 1 - 친구 명단 만들기 기능
function find_friend_list(user, friends) {
  let friend_list = new Set();
  friends.map((friend) => {
    if (friend[0] === user) friend_list.add(friend[1]);
    else if (friend[1] === user) friend_list.add(friend[0]);
  });
  return Array.from(friend_list);
}

//기능 3 -친구가 아닌 사람 중에서, 친구와 겹치는지인의 명단을 만드는 기능
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

//기능 2 - 친구가 아닌 사람의 명단 만들기 기능
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
// 기능 4 - 점수 계산 기능
function calculate_score(user, friends, visitors) {
  let user_dict = people_list(user, friends, visitors);
  let common_friend_list = common_friend(user, friends);
  let friend_list = find_friend_list(user, friends);

  //친구의 친구이면 10점 추가
  common_friend_list.map((common) => {
    user_dict[common] += 10;
  });

  //방문한 사람이면 1점 추가
  visitors.map((visitor) => {
    if (!friend_list.includes(visitor)) user_dict[visitor] += 1;
  });

  return user_dict;
}
