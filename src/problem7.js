function problem7(user, friends, visitors) {
  let answer = [];
  let friend_dic = {};
  let friend_suggest = {};
  let new_friends;
  for (let friend of friends) {
    for (let i=0; i < 2; i++) {
      if (friend[1-i] != user) {
        if (friend[i] in friend_dic) {
          friend_dic[friend[i]].push(friend[1-i])
        }
        else {
          friend_dic[friend[i]] = [friend[1-i]]
        }
      }
    }
  }
  for (let user_friend of friend_dic[user]) {
    new_friends = friend_dic[user_friend]
    for (let new_friend of new_friends) {
      if (new_friend in friend_suggest) {
        friend_suggest[new_friend] += 10
      }
      else {
        friend_suggest[new_friend] = 10
      }
    }
  }
  for (let visitor of visitors) {
    if (!friend_dic[user].includes(visitor)) {
      if (visitor in friend_suggest) {
        friend_suggest[visitor] += 1
      }
      else {
        friend_suggest[visitor] = 1
      }
    }
  }
  let cnt = 0;
  let friend_suggest_lst = [];
  for (let key of Object.keys(friend_suggest)) {
    friend_suggest_lst.push([key,friend_suggest[key]])
  }
  friend_suggest_lst.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    else if (a[1] > b[1]) {
      return -1;
    }
    else{
      if (a[0] > b[0]) {
        return 1;
      }
      else if (a[0] < b[0]) {
        return -1;
      }
    }
    return 0;
  });
  for (let people of friend_suggest_lst) {
    cnt += 1;
    if (cnt === 6) {
      return answer;
    }
    else {
      answer.push(people[0]);
    }
  }
  return answer;
}

module.exports = problem7;