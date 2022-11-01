function problem7(user, friends, visitors) {
  const friendMap = relationshipMap(user, friends);
  const score = scoreCalc(user, friendMap, visitors);
  const sort = sorting(score);
  return recommendFriend(sort);
}

// 친구 관계를 map 형태로 만들어주는 함수
function relationshipMap(user, friends) {
  let friendMap = new Map();
  for(let i=0; i<friends.length; i++) {
    const person1 = friends[i][0];
    const person2 = friends[i][1];
    if(friendMap.has(person1)) {
      friendMap.get(person1).push(person2);
    } else {
      friendMap.set(person1, new Array(person2));
    }

    if(friendMap.has(person2)) {
      friendMap.get(person2).push(person1);
    }else {
      friendMap.set(person2, new Array(person1));
    }
  }
  return friendMap;
}

// 친구 추천을 위한 친구 점수를 계산하는 함수
function scoreCalc(user, friendMap, visitors) {
  let score = new Map();

  // 함께 아는 친구 점수 계산
  const myFriend = friendMap.get(user);
  for(let i=0; i<myFriend.length; i++) {
    const friendfriend = friendMap.get(myFriend[i]);
    for(let j=0; j<friendfriend.length; j++) {
      if(friendfriend[j]===user) continue;
      if(score.has(friendfriend[j])) {
        const currentScore = score.get(friendfriend[j])+10;
        score.delete(friendfriend[j]);
        score.set(friendfriend[j], currentScore);
      } else {
        score.set(friendfriend[j], 10);
      }
    }
  }

  //visitor 점수 계산
  for(let i=0; i<visitors.length; i++) {
    if(myFriend.includes(visitors[i])) continue;
    if(score.has(visitors[i])) {
      const currentScore = score.get(visitors[i]) + 1;
      score.delete(visitors[i]);
      score.set(visitors[i], currentScore);
    } else {
      score.set(visitors[i], 1);
    }
  }
  return score;
}


// 점수 우선 정렬 후 점수가 같으면 이름 순으로 정렬하는 함수
function sorting(score) {
  let mapSort = [...score].sort((a, b) => {
    if(a[1] > b[1]) {
      return -1;
    } else if(a[1] < b[1]) {
      return 1;
    } else {
      if(a[0] > b[0]) {
        return 1;
      } else if(a[0] < b[0]) {
        return -1;
      } else {
        return 0;
      }
    }
  })
  return mapSort;
}

// 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬하여 최대 5명을 return하는 함수
function recommendFriend(mapSort) {
  let result = [];
  for(let i=0; i<mapSort.length; i++) {
    if(i==6) break;
    result.push(mapSort[i][0]);
  }
  return result;
}
module.exports = problem7;
