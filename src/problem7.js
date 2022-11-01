function problem7(user, friends, visitors) {
  // 중복 제외한 user의 친구 A의 배열
  const aArr = [...new Set(friends.map((el) => el[0]))];
  // user를 제외한 A의 친구 B의 배열
  const bArr = friends.map((el) => el[1]).filter((el) => el !== user);
  // 친구 A를 제외한 방문자 배열
  const filteredVisitors = visitors.filter((el) => {
    if (aArr.indexOf(el) < 0) return el;
  });

  // 배열의 요소의 개수를 count하고 점수를 부여하는 함수
  const getScore = (arr, score) => {
    // 배열 요소 개수를 카운트하여 객체화  -> {요소A: A의 개수, 요소B: B의 개수, ...}
    let reducedObj = arr.reduce(
      (pre, cur) => ({ ...pre, [cur]: (pre[cur] || 0) + 1 }),
      {}
    );
    // 점수 부여  -> {요소A: A의 점수, 요소B: B의 점수, ...}
    for (let key of Object.keys(reducedObj)) {
      reducedObj[key] *= score;
    }
    // 점수 객체 리턴
    return reducedObj;
  };

  // B의 배열, visitors 배열에 함께 아는 친구의 수, 방문 횟수에 따른 점수 부여
  const bScore = getScore(bArr, 10);
  const visitorsScore = getScore(filteredVisitors, 1);
  // B 점수 배열과 visitors 점수 배열을 합친 배열
  let assignedScores = Object.assign({ ...bScore }, visitorsScore);

  // B 배열과 visitors 배열의 키 값을 배열 keyArr에 할당
  let keyArr = [...Object.keys(bScore), ...Object.keys(visitorsScore)];
  // 중복된 키가 저장될 배열 overlapKeyArr 선언
  let overlapKeyArr;

  // bScore와 visitorsScore에 중복된 키가 있는지 확인하여 중복된 키만 필터링
  if (keyArr.length !== [...new Set(keyArr)].length) {
    let overlaps = keyArr.filter((el, idx) => keyArr.indexOf(el) !== idx);
    overlapKeyArr = [...new Set(overlaps)];
    // 중복된 키가 있다면 두 객체의 점수를 합산하여 assignedScores에 재할당
    for (key of overlapKeyArr) {
      assignedScores[key] = bScore[key] + visitorsScore[key];
    }
  }

  // assignedScores를 [키, 값]배열로 변환
  let assignedScoresArr = Object.entries(assignedScores);
  // 이름 오름차순 정렬 후 -> 점수 내림차순 정렬
  assignedScoresArr = assignedScoresArr
    .sort((a, b) => {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    })
    .sort((a, b) => b[1] - a[1]);

  // 5명까지로 제한 후 이름 배열 리턴
  return assignedScoresArr.slice(0, 5).map((el) => el[0]);
}

module.exports = problem7;

// bScore와 visitorsScore 객체를 하나의 객체 또는 배열로 합치되 중복된 키가 있다면 그 값도 합해야 함.
// 1. Object.entries()를 활용하여 하나의 배열(result)로 모두 합친다음
//    result의 el[0]이 동일한 el이 있다면 합친다.
// 2. Object.assign()으로 일단 하나의 객체로 합친 뒤
//    두 객체의 중복되는 키를 찾아 값을 재할당한다.
