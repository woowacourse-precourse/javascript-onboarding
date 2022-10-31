/* 문제 분석
1. 친구 추천 알고리즘을 구현한다.
2. 규칙은 다음과 같다
  - 사용자와 함께 아는 친구의 수 = 10점
  - 사용자의 타임라인에 방문한 횟수 = 1점
3. 사용자 아이디(user)가 주어지고, 친구 관계를 담은 배열(2차원) friends, 그리고 타임라인 방문기록 visitors가 주어진다.
4. 점수가 높은 순으로 정렬하여, 최대 5명을 리턴한다.
  - 단, 추천점수가 0점이면 추천 대상에서 제외한다.
  - 점수가 같으면 이름순 정렬*/

/* 테스트 케이스 분석
tc1. 
user : "mrko"
friends : [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
visitors : ["bedi", "bedi", "donut", "bedi", "shakevan"]

mrko가 아는 친구 donut, shakevan
donut의 친구 andole, jun, mrko
andole의 친구 donut, shakevan
jun의 친구 donut, shakevan
shakevan의 친구 andole, jun, mrko
bedi의 친구 X

타임라인 가산점
bedi : 3점
donut : 1점
shakevan : 1점
 */

/* getAllUsers(friends:string[], visitors:string[], getFriends:boolean):Object(Map)
  팀에 존재하는 모든 유저의 목록을 생성*/
function getAllUsers(friends, visitors, getFriends) {
  const users = new Map(); // 반환할 map
  const setValue = getFriends ? [] : 0; // 함수의 사용 용도 구분

  friends.forEach((el) => {
    users.set(el[0], setValue);
    users.set(el[1], setValue);
  });
  visitors.forEach((visitor) => users.set(visitor, setValue));

  return users;
}

/* setFriendsList(friends:string[], friendsList:map):void 
        친구 관계를 파악하여 friendsList map에 저장*/
function setFriendsList(friends, friendsList) {
  friends.forEach((el) => {
    const first = friendsList.get(el[0]);
    const second = friendsList.get(el[1]);
    friendsList.set(el[0], [...first, el[1]]);
    friendsList.set(el[1], [...second, el[0]]);
  });
}

/* getScores(scores:map, user:string, friendsList:map, visitors:string[]):void
        인수로 주어진 대상 user와 다른 유저들의 친구를 대조하여 함께아는 친구를 구하고,
        다음 규칙에 따라 scores map에 점수를 부여한다.
        (함께아는 친구 수 * 10점) + (방문자 수 * 1)*/
function getScores(scores, user, friendsList, visitors) {
  let userFriends = friendsList.get(user); // 대상 user의 친구

  // 1. 함께 아는 친구 점수 부여
  // 대상 user는 대조 대상에서 제외
  friendsList.delete(user);
  friendsList.forEach((values, key) => {
    const arr = userFriends.filter((uf) => values.includes(uf));
    scores.set(key, arr.length * 10);
  });

  // 2. 방문자에 따른 점수 부여
  visitors.forEach((visitor) => scores.set(visitor, scores.get(visitor) + 1));

  // 3. 대상 user의 친구들은 추천 대상에서 제외해야 하므로, 0점을 부여
  userFriends.forEach((friend) => {
    scores.set(friend, 0);
  });
}

/* getResult(scores:map):string[] 
      점수에 따른 추천 친구 배열 리턴*/
function getResult(scores) {
  const result = [];

  // 점수가 0이 아닌 친구만 결과 배열에 push
  scores.forEach((score, key) => {
    if (score !== 0) result.push(key);
  });

  // 점수 내림차 순으로 정렬
  result.sort((a, b) => {
    return scores.get(b) - scores.get(a);
  });

  // 점수가 같으면 이름순 정렬
  return sameScoreSort(result, scores);
}

/* sameScoreSort(result:Array, scores:map):Array
점수가 같을 때 이름순으로 정렬한 결과 배열을 리턴*/
function sameScoreSort(result, scores) {
  let startIdx = 0; // 점수가 같은 그룹의 첫 번째 원소의 인덱스를 나타내기 위한 변수
  let nextIdx = 1; // 다음 원소의 점수를 비교하기 위한 변수
  let final = []; // 최종적으로 반환할 배열
  let tmp = [result[startIdx]]; // 점수 그룹이 변경될 때 (다음 점수그룹으로 이동할 떄), 최종 배열에 합쳐질 배열

  while (true) {
    // startIdx가 배열의 끝에 도달하면 while문을 탈출.
    if (startIdx === result.length) break;

    // 만약, 점수가 같은 유저가 있다면 tmp에 해당 인원을 추가하고 nextIdx를 1 증가시켜서 다음 유저의 점수를 비교
    if (scores.get(result[startIdx]) === scores.get(result[nextIdx])) {
      tmp.push(result[nextIdx]);
      nextIdx += 1;
    } else {
      // 다음 유저와 점수가 다르다면, tmp를 이름순(string sort)으로 정렬하여, 최종 배열(final)에 합친다.
      tmp.sort();
      final = final.concat(tmp);
      tmp = [];

      // 다음 점수 그룹과 비교를 위해 startIdx를 nextIdx로 지정하고, nextIdx는 startIdx + 1로 지정
      startIdx = nextIdx;
      nextIdx = startIdx + 1;
      // 만약, 다음 점수 그룹의 startIdx가 마지막 원소라면, 바로 최종 배열(final)에 push
      if (startIdx === result.length) final.push(result[startIdx - 1]);
    }
  }

  return final;
}

// main
function problem7(user, friends, visitors) {
  const scores = getAllUsers(friends, visitors);
  const friendsList = getAllUsers(friends, visitors, true);

  setFriendsList(friends, friendsList);
  getScores(scores, user, friendsList, visitors);

  const answer = getResult(scores);
  return answer;
}

module.exports = problem7;
