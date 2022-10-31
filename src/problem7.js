function makeObject(friends,friend_dict,score){
  friends.forEach(function(ele,idx){
    let me = ele[0]
    let friend = ele[1]
    if(Object.keys(friend_dict).includes(me)){
      friend_dict[me].push(friend)
    }
    else{
      friend_dict[me] = [friend]
      score[me] = 0
    }
    if(Object.keys(friend_dict).includes(friend)){
      friend_dict[friend].push(me)
    }
    else{
      friend_dict[friend]=[me]
      score[friend]=0
    }
  });
  return friend_dict,score;
}

function problem7(user, friends, visitors) {
  let answer;
  let friend_dict={};
  let score={};
  friend_dict,score = makeObject(friends,friend_dict,score);
  let user_friend = friend_dict[user]
  delete friend_dict[user]
  return answer;
}

module.exports = problem7;
