function problem7(user, friends, visitors) {
  var userFriend = [];
  var test = {};
  var test_sort = [];
  var answer = [];
  // 사용자친구 목록 만들기
  for (f of friends) {
    if (f.includes(user)) {
      // 유저를 가지고 있니?
      if (f[0] == user) {
        userFriend.push(f[1]);
      } else if (f[1] == user) {
        userFriend.push(f[0]);
      }
    }
  }
  console.log(userFriend);
  for (f of friends) {
    for (friend of userFriend) {
      if (f.includes(friend) && !f.includes(user)) {
        if (f[0] === friend) {
          if (test[f[1]] in test) {
            test[f[1]] += 10;
          } else {
            test[f[1]] = 10;
          }
        } else if (f[1] == user) {
          if (test[f[0]] in test) {
            test[f[0]] += 10;
          } else {
            test[f[0]] = 10;
          }
        }
      }
    }
  }
  for (v of visitors) {
    if (!userFriend.includes(v)) {
      if (v in test) {
        test[v] += 1;
      } else {
        test[v] = 1;
      }
    }
  }
  // 이름순으로 정렬
  var test1 = Object.fromEntries(
    Object.entries(test).sort(([a], [b]) => (a < b ? -1 : 1))
  );
  // 점수로 정렬
  for (var name in test1) {
    test_sort.push([name, test1[name]]);
    num++;
  }
  test_sort.sort(function (a, b) {
    return b[1] - a[1];
  });

  // 친구 5명만 전달
  var num = 0;
  for (t of test_sort) {
    num++;
    answer.push(t[0]);
    if (num == 5) {
      return answer;
    }
  }
  return answer;
}

module.exports = problem7;
