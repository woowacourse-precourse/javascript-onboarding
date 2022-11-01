function problem7(user, friends, visitors) {
  // friends 배열에서 user의 친구만 배열로 생성
  const getFriends = (user, friends) => {
    const user_friends = [];
    for (let friend of friends) {
      if (friend.includes(user)) user_friends.push(friend[0]);
    }
    return user_friends;
  };

  // user의 친구의 친구에게 추천 점수 부여
  const getRelationScore = (friends, user_friends, recommend_score) => {
    friends.forEach((item) => {
      const my_friend = item[0];
      const relation_friend = item[1];
      if (user_friends.includes(my_friend) && item[1] !== user) {
        if (relation_friend in recommend_score) {
          recommend_score[relation_friend] += 10;
        } else {
          recommend_score[relation_friend] = 10;
        }
      }
    });
    return recommend_score;
  };

  // user의 방문자에게 추천 점수 부여
  const getVisitScore = (visitors, user_friends, recommend_score) => {
    visitors.forEach((item) => {
      if (!user_friends.includes(item)) {
        if (item in recommend_score) {
          recommend_score[item] += 1;
        } else {
          recommend_score[item] = 1;
        }
      }
    });
    return recommend_score;
  };

  // 정렬한 뒤 이름만 배열로 반환
  const recommendFriend = (recommend_score) => {
    const sort_arr = Object.entries(recommend_score).sort((a, b) => {
      b[1] - a[1];
    });

    return sort_arr.map((item) => {
      return item[0];
    });
  };

  // 코드 작성
  let answer;
  let user_friends = [];
  let recommend_score = {};

  user_friends = getFriends(user, friends);
  recommend_score = getRelationScore(friends, user_friends, recommend_score);
  recommend_score = getVisitScore(visitors, user_friends, recommend_score);

  answer = recommendFriend(recommend_score);
  return answer;
}

module.exports = problem7;
