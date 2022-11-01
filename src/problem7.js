function problem7(user, friends, visitors) {
  const fdobj = {};
  var answer = [];
  let answerCnt = 0;
  
  //사용자 객체 생성
  fdobj[user] = [[], 0];
  
  //친구 관계 생성 및 저장.
  function SaveF(friend1, friend2) {
    if (friend1 in fdobj) {
       fdobj[friend1][0].push(friend2);
    } else {
      fdobj[friend1] = [[], 0];
       fdobj[friend1][0].push(friend2);
    }
  }

  friends.forEach((element) => {
    SaveF(element[0], element[1]);
    SaveF(element[1], element[0]);
  });

      // 친구를 담는 Set 생성(중복제거)
      const userFriendsSet = new Set(fdobj[user][0]);
    

      // 겹치는 친구 수 판별 및 점수부여
      for (const key in fdobj) {
        if (key === user) {
          continue;
        }
        fdobj[key][0].forEach((element) => {
          if (userFriendsSet.has(element)) {
            fdobj[key][1] += 10;
          }
        });
      }
}

module.exports = problem7;
