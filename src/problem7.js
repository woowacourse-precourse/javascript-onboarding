function problem7(user, friends, visitors) {
  var answer = [];
  var result = [];
  const user_friends = [];
  const friend_list = [];
  const friends_point = {};
  var friend1 = "";
  var friend2 = "";

  for(let i=0; i<friends.length; i++){
    friend1 = friends[i][0];
    friend2 = friends[i][1];
    if(friend_list.includes(friend1) === false && friend1 !== user){
      friend_list.push(friend1);
    }
    if(friend_list.includes(friend2) === false && friend2 !== user){
      friend_list.push(friend2);
    }

    if(friend1 === user){
      user_friends.push(friend2);
    }
    else if(friend2 === user){
      user_friends.push(friend1);
    }
  }

  for (let i=0; i<visitors.length; i++){
    if(friend_list.includes(visitors[i]) === false){
      friend_list.push(visitors[i]);
    }
  }

  for (let i=0; i<friend_list.length; i++){
    friends_point[friend_list[i]] = 0;
  }

  for(let i=0; i<friends.length; i++){
    friend1 = friends[i][0];
    friend2 = friends[i][1];
    if(user_friends.includes(friend1) && friend2 !== user){
      friends_point[friend2] += 10;
    }
    else if(user_friends.includes(friend2) && friend1 !== user){
      friends_point[friend1] += 10;
    }
  }

  for (let i=0; i<visitors.length; i++){
    friends_point[visitors[i]] += 1;
    
  }

  for (var point in friends_point) {
    answer.push([point, friends_point[point]]);
  }
  answer.sort(function(a, b){
    return b[1] - a[1];
  });

  var cnt = 0;
  for (let i=0; i<answer.length; i++){
    if(answer[i][1] !== 0 && user_friends.includes(answer[i][0]) === false){
      result.push(answer[i][0]);
      cnt += 1;
    }
    if(cnt>=5){
      break
    }
  }


  return result;
}

module.exports = problem7;
