function problem7(user, friends, visitors) {
  var answer;

  // friends에서 user와 친구로 되어있는 사용자는 추천X
  const users_friend = [];

  const findFriends = () => {
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(user) > 0) {
        users_friend.push(friends[i][0]);
      }
    }
  }

  // friends에서 user와 친구로 되어있는 사용자와 친구인 사용자는 추천O (10점씩)
  const users_reco = [];

  const recommendFriends = () => {
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < users_friend.length; j++) {
        if ((friends[i].includes(users_friend[j]) > 0)
          && (friends[i].includes(user) == false)) {
          users_reco.push(friends[i][1]);
        }
      }
    }
  }

  const user_rank = [];
  const scoreFriends = () => {
    for (let i = 0; i < users_reco.length; i++) {
      if (!(user_rank.find(e => e.name === users_reco[i]))) {
        user_rank.push({ name: users_reco[i], score: 10 });
      } else {
        let idx = user_rank.findIndex(e => e.name === users_reco[i]);
        user_rank[idx].score += 10;
      }
    }
  }

  // visitors에서 추천 사용자의 중복횟수 * 3
  // 추천 점수가 부여된 사용자의 목록을 점수-이름 순으로 정렬

  return answer;
}

module.exports = problem7;
