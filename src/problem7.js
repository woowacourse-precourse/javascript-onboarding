function checkFriend(candidate, name){
  if (candidate.includes(name)){
      return false;
  }
  else{
    return true;
  }
}


function visitCount(visitors, user, friends){
  return visitors.reduce((prev, curr) => {
    if (curr in prev && checkFriend([user,...friendRelation(friends)[user]] ,curr)){
      prev[curr] += 1;
    }
    else{
      if (checkFriend([user,...friendRelation(friends)[user]] ,curr)){
        prev[curr] = 1;
      }
    }
    return prev;
  }, {});
};

function friendRelation(friends){
  const relation = {};
  friends.map(friend =>{
    let a = friend[0];
    let b = friend[1];
    if (a in relation){
      relation[a].push(b);
    }
    else{
      relation[a] = [b];
    }
    if (b in relation){
      relation[b].push(a);
    }
    else{
      relation[b] = [a];
    }
  })
  return relation;
}

function knowFriend(arr, user, relation, algorithm){
  //존재하는 경우
  userFriend = arr[user];
  userFriend.map(commonFriend => {
    arr[commonFriend].map(name => {
      if (checkFriend([user,...relation[user]], name)){
        (name in algorithm) ? algorithm[name] += 10 : algorithm[name] = 10;
      }
    })
  })
  return algorithm;
}

function exception(user, friends, relation){
  if (user.length < 1 || user.length > 30){
    return false;
  }
  else if (user.toLowerCase() !== user){
    return false;
  }
  else if (friends.length < 1 || friends.length > 10000){
    return false;
  }
  Object.keys(relation).map(id => {
    if (id.length < 1 || id.length > 30){
      return false;
    }
  })
  return true;
}

function problem7(user, friends, visitors) {
  
  const relation = friendRelation(friends);
  if (exception){
    const algorithm = visitCount(visitors, user, friends);
    const friendScore = knowFriend(relation, user, relation, algorithm);
    const sortByscore = Object.fromEntries(
      Object.entries(friendScore).sort(([,a],[,b]) => a > b? -1: 1)
    );

    if (Object.keys(sortByscore).length > 5){
      return Object.keys(sortByscore).slice(0,5);
    }
    else{
      return Object.keys(sortByscore);
    }
  }
  
}

module.exports = problem7;
