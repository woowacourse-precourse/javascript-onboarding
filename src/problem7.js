//1. user의 친구 목록생성
//2. 추천할 친구와 점수 Map 생성 -> friends에서 나, 나의 친구 제외 + 목록엔 없으나 방문한적있는 사람
// 친구의 친구가 추가될 떄  +10, 방문자 +1
//3. 추천할 친구목록 점수 순 정렬 5개 반환


function usersFriendsFinder(user, friends){
  const friendsSet = new Set();
  for(let friend of friends){
    if(friend[0] == user)
      friendsSet.add(friend[1]);
    else if(friend[1] == user)
      friendsSet.add(friend[0]);
  }
  return friendsSet;
}

const sameFriendsFinder = (user, friends, usersFriends) => { 
  let recommendMap = new Map();
  for (let friend of friends) {
    //친구의 친구를 찾아 10점 추가하기
    //내가 포함된 배열은 이미 친구이므로 고려대상이 아님
    //나도, 내친구도 포함되지 않은 배열은 0점으로 고려대상이 아님
    //0이 내가 아니고 1이 내친구일때 => 0은 내 친구의 친구
    if (friend[0] !== user && usersFriends.has(friend[1])) { 
      if (!recommendMap.has(friend[0])) {
        recommendMap.set(friend[0], 10);
      } else if (recommendMap.has(friend[0])) {
        recommendMap.set(friend[0], recommendMap.get(friend[0])+10)
       }
    } 
    //1이 내가 아니고 0이 내친구일때 => 1은 내 친구의 친구
    else if (friend[1] !== user && usersFriends.has(friend[0])) { 
      if (!recommendMap.has(friend[1])) {
        recommendMap.set(friend[1], 10);
      } else if (recommendMap.has(friend[1])) {
        recommendMap.set(friend[1], recommendMap.get(friend[1])+10)
       }
    } 
  }
  return recommendMap;
}

function problem7(user, friends, visitors) {
  let answer = [];
  
  const usersFriends = usersFriendsFinder(user, friends);
  let recommendMap = sameFriendsFinder(user, friends, usersFriends);


  for (let visitor of visitors) {
    //방문자가 친구가 아닐때, +1
    if (!usersFriends.has(visitor)) {
      if (!recommendMap.has(visitor)) { 
        recommendMap.set(visitor, 1)
      }
      else if (recommendMap.has(visitor)) {
        recommendMap.set(visitor, recommendMap.get(visitor)+1)
      }
    }
  }

  //추천목록 정렬하여 5개 반환
  let sortRecommend = new Map([...recommendMap].sort((a,b)=>{
    if(a[1] == b[1]){
      if(a[0] > b[0])
        return 1;
      if(a[0] < b[0])
        return -1;
      return 0;
    }
    return b[1] - a[1];
  }));
  
  for (const key of sortRecommend.keys()){
    answer.push(key);
    if(answer.length == 5)
      break;
  }

  return answer;
}

module.exports = problem7;
