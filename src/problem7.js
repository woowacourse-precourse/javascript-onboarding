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

  return answer;
}

module.exports = problem7;
