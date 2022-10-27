/*
*요구사항
서로의 친구관계가 담긴 배열이 주어짐. 두명은 서로 친구라는 뜻.
user 의 타임라인 방문자 리스트도 주어짐.

user 와 함께 아는 친구의 수 *=10
user 타임라인 방문횟수 *=1 

해서 0점과 현재이미 친구인 사람들을 제외한 사람들을 점수대로 내림차순 해서 출력하여라.
점수가 같을 시 이름순 정렬. 출력값은 5명이 최대.

*해결전략
서로 친구에 대한 정보를 양방향으로 저장.
dict에 각 아이디의 배열 index 번호 정보를 담아주자.
해당 아이디의 index 번호에 해당 아이디의 친구 정보가 담겨있다.
user 정보는 배열 0번째 인덱스에 저장.

*기능목록
1. friends 를 순회하면서 dict에 각 아이디 인덱스 정보와 배열을 생성해줄 함수 
   =>  createInfo , 파라미터 값: 친구 관계 friends, 인덱스 idx
2. 각 아이디의 점수를 카운트해줄 함수 =>  cntScore
3. 함께아는 친구의 수에 대한 정보를 점수화 시켜 카운트해줄 함수 =>  cntKnowScore
4. 결과값을 출력해주고 정렬하여 return 해줄 함수 =>  makeResult
*/

function problem7(user, friends, visitors) {
  function createInfo(eachFriend, i) {
    let idx = i;
    eachFriend.map((friend) => {
      let [name1, name2] = friend;
      friend.map((name) => {
        if (!idIndexInfo[name]) {
          idIndexInfo[name] = idx;
          friendsInfo.push([]);
          friendsScore.push(0);
          idx += 1;
        }
      });
      friendsInfo[idIndexInfo[name1]].push(name2);
      friendsInfo[idIndexInfo[name2]].push(name1);
    });
    return idx;
  }

  function cntScore(visitorsInfo, i) {
    let idx = i;
    visitorsInfo.map((visitor) => {
      if (!idIndexInfo[visitor]) {
        idIndexInfo[visitor] = idx;
        friendsInfo.push([]);
        friendsScore.push(0);
      }
      let num = idIndexInfo[visitor];
      friendsScore[num] += 1;
    });
  }

  function cntKnowScore(target) {
    let nearFriends = friendsInfo[idIndexInfo[target]];
    nearFriends.map((nearName) => {
      let farFriends = friendsInfo[idIndexInfo[nearName]];
      farFriends.map((farName) => {
        friendsScore[idIndexInfo[farName]] += 10;
      });
    });
  }

  function makeResult(Score, Friends) {
    let tmpList = [];
    let nowFriendIdx = [];
    let result = [];
    Friends.map((friend) => {
      nowFriendIdx.push(idIndexInfo[friend]);
    });
    for (let i = 2; i < Score.length; i++) {
      if (nowFriendIdx.includes(i)) continue;
      if (Score[i] !== 0) tmpList.push([Score[i], i]);
    }
    tmpList.sort((a, b) => {
      if (b[0] > a[0]) return 1;
      if (b[0] < a[0]) return -1;
      if (b[1] > a[1]) return -1;
      if (b[1] < a[1]) return 1;
    });
    let memberList = Object.keys(idIndexInfo);
    tmpList.map((v) => {
      result.push(memberList[v[1] - 1]);
    });

    return result;
  }

  let idIndexInfo = {};
  let friendsInfo = [[], []];
  let friendsScore = [0, 0];
  let i = 1;
  idIndexInfo[user] = i;
  i = createInfo(friends, i + 1);
  cntScore(visitors, i);
  cntKnowScore(user);
  let nowFriends = friendsInfo[1];
  let answer = makeResult(friendsScore, nowFriends);
  answer = answer.slice(0, 5);
  return answer;
}

module.exports = problem7;
