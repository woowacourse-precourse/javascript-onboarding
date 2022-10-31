function problem7(user, friends, visitors) {
  // user의 친구뽑아내기
  let extractName = friends
    .map((e) => e.filter((e) => !e.includes(user)))
    .filter((e) => e.length < 2)
    .flat();
  // user의 친구를 포함하고 있고 user가 없는 배열에만 10점씩 적용
  friends.map((e) => {
    extractName.forEach((i) => {
      if (e.includes(i)) {
        e.splice(e.indexOf(i), 1);
        if (!e.includes(user)) {
          e.push(10);
        }
      }
    });
  });
  // Map으로 중복 제거 및 user 제거
  // Set은 이중배열일때 적용 불가
  let map1 = new Map(friends);
  map1.delete(user);

  // map -> obj로 변환
  let frinedObj = {};
  frinedObj = Object.fromEntries(map1);

  //  count visitor
  let objCount = {};
  visitors.forEach((e) => {
    if (objCount[e]) {
      objCount[e] += 1;
    } else {
      objCount[e] = 1;
    }
  });

  // 정렬을 이미 해뒀기에 배열을 만들어서 반환하면 끝
  let ans = Object.assign(frinedObj, objCount);
  let ansArr=Object.keys(ans)
  ansArr=ansArr.filter(x=>!extractName.includes(x))
  return ansArr
}


module.exports = problem7;
