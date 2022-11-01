function problem7(user, friends, visitors) {
  let strangers = [];
  for (let i = 0; i < friends.length; i++) {
    if (user !== friends[i][1]) {
      strangers.push(friends[i][1]);
    }
  }
  console.log("strangers:", strangers);

  const test = {};
  for (let i = 0; i < strangers.length; i++) {
    if (test[strangers[i]]) {
      test[strangers[i]] += 10;
    } else {
      test[strangers[i]] = 10;
    }
  }
  console.log(test);

  //이미 친구
  let fr = [];
  for (let i = 0; i < friends.length; i++) {
    if (!fr.includes(friends[i][0])) {
      fr.push(friends[i][0]);
    }
  }
  console.log("fr:", fr);
  //
  let strangers2 = Object.assign([], visitors);
  for (let i = 0; i < fr.length; i++) {
    strangers2 = strangers2.filter((visitor) => visitor !== fr[i]);
    console.log(strangers2);
  }
  console.log("strangers2:", strangers2);

  const test2 = {};
  for (let i = 0; i < strangers2.length; i++) {
    if (test2[strangers2[i]]) {
      test2[strangers2[i]] += 1;
    } else {
      test2[strangers2[i]] = 1;
    }
  }
  console.log(test2);

  // 배열 합치기
  Object.assign(test, test2);
  console.log(test);

  // 정렬
  let sortArr = [];
  for (let name in test) {
    sortArr.push([name, test[name]]);
  }
  sortArr.sort(function (a, b) {
    if (a[1] == b[1]) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    } else {
      return b[1] - a[1];
    }
  });
  console.log(sortArr);

  let result = [];
  for (let i = 0; i < sortArr.length; i++) {
    result.push(sortArr[i][0]);
  }

  return result;
}

module.exports = problem7;
