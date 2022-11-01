//친구 관계 찾기 함수
const findRelation = (user, friends) => {
  let friendRelation = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      friendRelation.push(friend);
    }
  })

  return friendRelation;
}

//친구를 각 key 값으로 선언
const friendToObj = (friendRelation, user) => {
  let friendScore = Object();
  friendRelation.forEach((fr) => {
    const [leftPerson, rightPerson] = fr;
    if (leftPerson === user) {
      friendScore[rightPerson] = 0;
    } else {
      friendScore[leftPerson] = 0;
    }
  });

  return friendScore;
}

//visitors들을 각 key 값으로 추가
const visitorToObj  = (friendScore, visitors, user) => {
  for (let visitor of visitors) {
    if (visitor !== user) {
      friendScore[visitor] = 0;
    }
  }
  return friendScore;
}

function problem7(user, friends, visitors) {
  const friendRelation = findRelation(user, friends);
  const friendScore = friendToObj(friendRelation);
  const friendAndVisitorScore = visitorToObj(friendScore, visitors);
  const recommendFriend = Object.keys(friendAndVisitorScore);

  //추천 친구가 함께 아는 친구와 방문 횟수를 감지하여 점수 더하기
  recommendFriend.forEach((rf) => {
    friends.forEach((friend) => {
      if (friend.includes(rf)) {
        recommendFriend[rf] += 10;
      }
    });

    visitors.forEach((visitor) => {
      if (visitor === rf) {
        recommendFriend[rf] += 1;
      }
    })
  })

  let answer = [];
  let sortedRecommendFriend = Object.entries(recommendFriend).sort((a,b) => a[1] - b[1]).reverse();

  //가장 점수가 높은 5명 이름 출력
 for (let i = 0; i < 5; i++) {
    const name = sortedRecommendFriend[0];
    const cnt = sortedRecommendFriend[1];
    if (Number(cnt) === 0) {
      return answer;
    }
    answer.push(name);
  }

  return answer;
}

module.exports = problem7;
