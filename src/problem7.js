/*
<풀이>
fridend의 이중배열안에 유저와 같이 넣어져 있는 친구를 찾는다.
찾아서 그 친구를 아는 친구를 찾는다.
찾아서 딕셔너리 키로 아이디를 넣고 점수 10점을 넣는다.
(유저와 같이 넣어져 잇는 친구가 여러명이면 따로 반복)

visitors배열 안 방문자들의 아이디의 개수를 세서 딕셔너리 키 값에 +1해준다.
없으면 1로 초기화 시킨다.

딕셔너리 키 값에 있는 닉네임과 점수를 높은순으로 5명까지 배열에  넣는다.
점수가 같으면 이름순으로 정렬한다.
*/

function problem7(user, friends, visitors) {
  let friend_score = {};
  let user_Acquaintance = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user) {
      user_Acquaintance.push(friends[i][0]);
    }
    if (friends[i][0] === user) {
      user_Acquaintance.push(friends[i][1]);
    }
  }

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < user_Acquaintance.length; j++) {
      let friends_friend = null;
      if (friends[i][0] === user_Acquaintance[j]) {
        friends_friend = friends[i][1];
      } else if (friends[i][1] === user_Acquaintance[j]) {
        friends_friend = friends[i][0];
      }
      if (!friends_friend) continue;
      if (friends_friend in friend_score) {
        friend_score[friends_friend] += 10;
      } else {
        friend_score[friends_friend] = 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] in friend_score) {
      friend_score[visitors[i]] += 1;
    } else {
      friend_score[visitors[i]] = 1;
    }
  }

  delete friend_score[user];
  for (let i = 0; i < user_Acquaintance.length; i++) {
    delete friend_score[user_Acquaintance[i]];
  }

  let dict_array_conversion = [];
  for (let key in friend_score) {
    dict_array_conversion.push([key, friend_score[key]]);
  }

  dict_array_conversion.sort(function (a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (b[1] > a[1]) {
      return 1;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  });

  let nickname_Sort = [];
  for (let i = 0; i < dict_array_conversion.length; i++) {
    nickname_Sort.push(dict_array_conversion[i][0]);
  }

  return nickname_Sort;
}

module.exports = problem7;
