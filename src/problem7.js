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

function scoreRecommendedFriends(recommendedArr,friendsOfUser,user,friends,visitors){
  // user 친구의 친구 리스트 추출
  let friendsOfFriend =[];
  friendsOfUser.forEach(function(friendOfUser){
    friends.forEach(function(friend){
      friend[0].includes(friendOfUser) || friend[1].includes(friendOfUser) ? friendsOfFriend.push(friend) : "";
    })
  });
  friendsOfFriend = friendsOfFriend.filter((element)=>!element.includes(user))
  
  recommendedArr.forEach(function(x,idx){
    // 함께 아는 친구수 점수 부여
    friendsOfFriend.forEach(function(friend){
      friend.includes(x[0]) ? recommendedArr[idx][1] += 10 : "";
    })
    // 타임라인 방문횟수 점수 부여
    visitors.forEach(function(visitor){
      visitor.includes(x[0]) ? recommendedArr[idx][1] += 1: "";
    })
  })
  return recommendedArr;
}

function getResult(recommendedArr){
  recommendedArr = recommendedArr.filter(x => x[1]!==0);
  recommendedArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return b[1] - a[1]
    }
  })
  return recommendedArr;
}

function problem7(user, friends, visitors) {
  let answer = [];
  let [recommendedArr,friendsOfUser] = getRecommendedFriend(user, friends, visitors)
  recommendedArr = scoreRecommendedFriends(recommendedArr,friendsOfUser,user,friends,visitors);
  recommendedArr = getResult(recommendedArr)
  recommendedArr.forEach(function(x) {
    answer.push(x[0])
  })
  return answer;
}

module.exports = problem7;
