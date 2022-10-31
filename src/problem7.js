// 의사 코드 작성
// 1. 기능 요구 사항 이해하기 -> 이미 알고 있는 친구는 추천에서 배제
// 2. friends 순회하면서 user 와 친구인 사람들을 뽑기 
// 3. 또 다시 friends 순회하면서 뽑은 친구들과 친구인 사람들 뽑아서 10점씩 주기
// 4. visitors 에서 원래 친구인 사람들 빼고 남은 사람들에게 1점씩 주기
// 5. 위 과정에서 0점인 사람은 뽑히지 않음
// 6. 이름 순으로 정렬
// 7. 점수가 높은 순으로 정렬
// 8. 앞에서 5명만 출력  

function problem7(user, friends, visitors) {
  let answer = [];
  let userFriends = [];
  let recommendFriends = {};
  
  friends.map(relation => {
    if (relation.includes(user)) {
      // console.log(relation);
      relation.map(userFriend => {
        if (userFriend !== user) userFriends.push(userFriend);
      });
    }
  });
  
  friends.map(relation => {
    if (!relation.includes(user)) {
      // console.log(relation);
      relation.map(recommendFriend => {
        if (!userFriends.includes(recommendFriend)) {
          if (recommendFriend in recommendFriends) {
            recommendFriends[recommendFriend] += 10;
          } else {
            recommendFriends[recommendFriend] = 10;
          }
        }
      });
    }
  });
  
  visitors.map(visitor => {
    if (!visitor.includes(user) && !userFriends.includes(visitor)) {
      // console.log(visitor);
      if (visitor in recommendFriends) {
        recommendFriends[visitor] += 1;
      } else {
        recommendFriends[visitor] = 1;
      }
    }
  });

  answer = Object.entries(recommendFriends).sort().sort((a, b) => b[1] - a[1]).map(friend => friend[0]);
  if (answer.length < 5) {
    return answer;
  } else {
    return answer.slice(0, 5);
  }
}

module.exports = problem7;
