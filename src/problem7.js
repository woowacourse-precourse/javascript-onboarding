function getFriendMap(friends){
  const friendMap = new Map()
  
  friends.forEach(([firstName,secondName])=>{
    const firstPrevValue = friendMap.get(firstName);
    const secondPrevValue = friendMap.get(secondName);
    
    firstPrevValue? friendMap.set(firstName, [...firstPrevValue, secondName]) : friendMap.set(firstName, [secondName]);
    secondPrevValue? friendMap.set(secondName, [...secondPrevValue, firstName]) : friendMap.set(secondName, [firstName]);
  });

  return friendMap;
}

function problem7(user, friends, visitors) {

  // var answer;
  // return answer;
}

module.exports = problem7;
