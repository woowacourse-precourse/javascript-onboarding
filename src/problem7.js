function problem7(user, friends, visitors) {
  var answer;
  answer = [];
  var user_friends = [];
  var friends_number = [];
  var visitors_number = [];
  var n = 0;

  //friends에서 user인 mrko를 찾는다
  for (let i = 0; i < friends.length; i++) {
    if (user == friends[i][0]) {
      //user친구 아이디B를 찾는다
      user_friends[n] = friends[i][1];
      n += 1;
    } else if (user == friends[i][1]) {
      //user친구 아이디A를 찾는다
      user_friends[n] = friends[i][0];
      n += 1;
    } else {
      continue;
    }
  }

  //user친구의 친구아이디를 찾는다
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < user_friends.length; j++) {
      if (user_friends[j] == friends[i][0] && user != friends[i][1]) {
        //친구 아이디에 각 10점을 부여한다
        friends_number.push([friends[i][1], 10]);
      } else if (user_friends[j] == friends[i][1] && user != friends[i][0]) {
        friends_number.push([friends[i][0], 10]);
      } else {
        continue;
      }
    }
  }

  //user친구의 친구아이디에서 중복 아이디는 점수를 더한다.
  for (let i = 0; i < friends_number.length; i++) {
    for (let j = i + 1; j < friends_number.length; j++) {
      if (friends_number[i][0] == friends_number[j][0]) {
        friends_number[i][1] += friends_number[j][1];
        friends_number.splice(j, 1);
        j--;
      }
    }
  }

  //visitors 아이디에 1점씩 부여한다
  for (let i = 0; i < visitors.length; i++) {
    visitors_number.push([visitors[i], 1]);
  }

  //visitors 아이디의 중복을 제거하고 점수를 더한다.
  for (let i = 0; i < visitors_number.length; i++) {
    for (let j = i + 1; j < visitors_number.length; j++) {
      if (visitors_number[i][0] == visitors_number[j][0]) {
        visitors_number[i][1] += 1;
        visitors_number.splice(j, 1);
        j--;
      }
    }
  }

  //친구의 아이디와 점수, visitors 아이디와 점수를 한 곳에 모은다
  for (let i = 0; i < visitors_number.length; i++) {
    friends_number.push(visitors_number[i]);
  }

  //점수 높은 순으로 정렬하기
  friends_number.sort(sortvalueFunction);

  function sortvalueFunction(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? 1 : -1;
    }
  }

  //점수가 같다면 이름 순으로 정렬하기
  for (let i = 0; i < friends_number.length; i++) {
    for (let j = i + 1; j < friends_number.length; j++) {
      if (friends_number[i][1] == friends_number[j][1]) {
        if (friends_number[i][0] > friends_number[j][0]) {
          var tmp = friends_number[i];
          friends_number[i] = friends_number[j];
          friends_number[j] = tmp;
        }
      }
    }
  }

  //점수가 높은 순으로 최종 5명을 선발한다
  for (let i = 0; i < 5; i++) {
    answer[i] = friends_number[i][0];
  }

  return answer;
}

module.exports = problem7;
