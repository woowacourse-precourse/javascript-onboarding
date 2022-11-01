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

  
  return answer;
}

module.exports = problem7;
