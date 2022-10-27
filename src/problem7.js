function problem7(user, friends, visitors) {
  var answer = [];
  const users_friend = [];  // user와 친구인 사용자 목록
  const users_reco = [];    // 추천 사용자
  const users_rank = [];    // 추천 사용자 랭킹

  // friends에서 user와 친구로 되어있는 사용자는 추천X
  const findFriends = () => {
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(user) > 0) {
        users_friend.push(friends[i][0]);
      }
    }
  }

  // friends에서 user와 친구로 되어있는 사용자와 친구인 사용자는 추천O (10점씩)
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

  // 랭킹 목록에 추가 또는 점수 부여
  const scoreFriends = () => {
    for (let i = 0; i < users_reco.length; i++) {
      if (!(users_rank.find(e => e.name === users_reco[i]))) {
        users_rank.push({ name: users_reco[i], score: 10 });
      } else {
        let idx = users_rank.findIndex(e => e.name === users_reco[i]);
        users_rank[idx].score += 10;
      }
    }
  }

  // visitors에서 추천 사용자의 중복횟수 * 3
  const scoreVisitors = () => {
    visitors.map((u) => {
      if (!(users_rank.find(e => e.name === u)) && (users_friend.includes(u) == false)) {
        users_rank.push({ name: u, score: 1 });
      } else if ((users_rank.find(e => e.name === u)) && (users_friend.includes(u) == false)) {
        let idx = users_rank.findIndex(e => e.name === u);
        users_rank[idx].score += 1;
      }
    })
  }

  // 추천 점수가 부여된 사용자의 목록을 점수-이름 순으로 정렬
  const sortRank = () => {
    users_rank.sort((a, b) => {
      if (a.score < b.score) return 1;
      else if (a.name > b.name) return 1;
    });
  }

  // 최종 답안 입력
  const result = () => {
    users_rank.map(u => {
      answer.push(u.name);
    })
  }

  findFriends() // user와 친구인 사용자
  recommendFriends()  // 추천 친구(사용자)
  scoreFriends()  // 서로 아는 사용자 점수 부여
  scoreVisitors() // 방문자 점수 부여
  sortRank()      // 추천 친구 목록 정렬
  result()        // 최종 답안(사용자 이름) 추출

  return answer;
}

module.exports = problem7;
