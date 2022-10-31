function getRecommendedFriend(user, friends, visitors) {
  let recommendedArr = [];
  // user 친구 리스트 추출
  let friendsOfUser = friends.filter((element)=> element[0] === user || element[1] === user);
  friendsOfUser = friendsOfUser.reduce(function(acc,cur) {
    return [...new Set(acc.concat(cur))].filter((element)=>!element.includes(user))
  });

  // user와 친구가 아닌 사람의 리스트 추출
  let friendsOfOthers= friends.reduce(function(acc,cur){
    let arr = [...new Set(acc.concat(cur))];
    arr = arr.filter(x => !friendsOfUser.includes(x));
    arr = arr.filter((element)=>!element.includes(user))
    return arr;
  });

  // 방문자 중복제거 리스트 추출
  let visitorsOfUser = [...new Set(visitors)].filter(x => !friendsOfUser.includes(x));

  friendsOfOthers.forEach(people => recommendedArr.push([people,0]));
  visitorsOfUser.forEach(people => recommendedArr.push([people,0]));
  
  return [recommendedArr, friendsOfUser];
}


function problem7(user, friends, visitors) {
  
  let answer = [];
  let [recommendedArr,friendsOfUser] = getRecommendedFriend(user, friends, visitors)
  
  return answer;
}

module.exports = problem7;
