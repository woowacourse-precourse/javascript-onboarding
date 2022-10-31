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

function friendScore(friend_dict,score,user_friend){
  for (let i = 0; i < user_friend.length; i++) {
      Object.keys(friend_dict).forEach(function(ele, idx) {
        if (friend_dict[ele].includes(user_friend[i]))  
          score[ele] += 10
      });
  }
  return score;
}

function visitorScore(visitors,score){
  visitors.forEach(function(ele,idx){
    if(!Object.keys(score).includes(ele))
    {
      score[ele] = 1
    }
    else{
      score[ele]+=1
    }
  });
  return score;
}

function problem7(user, friends, visitors) {
  let answer;
  let friend_dict={};
  let score={};
  friend_dict,score = makeObject(friends,friend_dict,score);
  let user_friend = friend_dict[user]
  delete friend_dict[user]
  if (user_friend!==undefined) 
    score = friendScore(friend_dict,score,user_friend);
  score = visitorScore(visitors,score);
  return answer;
}

module.exports = problem7;
