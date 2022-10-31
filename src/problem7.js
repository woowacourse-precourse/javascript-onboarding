function problem7(user, friends, visitors) {
  let result = [];
  const userFriends = [];
  const recommended = new Map();

  // 1. Find people who are the friends of the user
  for(i = 0; i < friends.length; i++){
    if(friends[i].includes(user)){
      if(friends[i][0] != user){
        userFriends.push(friends[i][0]);
      }else{
        userFriends.push(friends[i][1]);
      }
      delete(friends[i]);
    }
  }

  // 2. Find people who are the friends of each friend of the user and give 10 points.
  for(i = 0; i < userFriends.length; i++){
    for(j = 0; j < friends.length; j++){
      if(!friends[j]) continue;
      if(friends[j].includes(userFriends[i])){
        if(friends[j][0] != userFriends[i]){
          recommended.set(friends[j][0], 10);
        }else{
          recommended.set(friends[j][1], 10);
        }
      }
    }
  }

  // 3. increment 1 point for each visiting. 
  for(i = 0; i < visitors.length; i++){
    if(!userFriends.includes(visitors[i])){
      recommended.set(visitors[i], recommended.get(visitors[i]) + 1 || 1);
    }
  }

  // 4. sort in descending order.
  const sortedRec = [...recommended.entries()].sort((a, b) => (b[1] - a[1]));

  // 5. sort in the case of same point.
  if(sortedRec.length > 1){
    let samepoint = new Set();
    for(i = 1; i < sortedRec.length; i++){
      if(sortedRec[i][1] == sortedRec[i - 1][1]){
        samepoint.add(sortedRec[i - 1][0]);
        samepoint.add(sortedRec[i][0]);
      }else{
        var arr = Array.from(samepoint);
        arr.sort();
        var start = i - arr.length;
        for(j = 0; j < arr.length; j++){
          sortedRec[j + start][0] = arr[j];
        }
      }
    }
  }


  // 6. withdraw the result from sorted array
  for(i = 0; i < sortedRec.length; i++){
    result.push(sortedRec[i][0]);
  }

  return result;
}

module.exports = problem7;
