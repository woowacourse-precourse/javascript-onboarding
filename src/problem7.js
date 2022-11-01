/* 
  로직
  1. [x] 필요한 변수
    1.1 친구관계를 연결한 graph map
    1.2 친구점수를 저장한 map
  2. [x] user의 친구를 찾아서, 친구의 친구는 + 10, vistior들은 + 1
  3. [x] 순회 -> 0점이상인 친구들을 저장하며 점수가 가장 낮은 친구 기록(이후 대체)
  4. [x] 같은 점수가 있으면 이름대로 정렬
*/

// 1.1 친구관계 연결한 graph map 초기화
/**
 * initialize 'friendInfo' variable
 * @param {string[][]} friends - relation of friends
 * @param {object} friendInfo - object that needs initializing firend relation
 */
const initFriendInfo = (friends, friendInfo) => {
  for (let info of friends) {
    if (!friendInfo[info[0]]) {
      friendInfo[info[0]] = [];
    } 

    if (!friendInfo[info[1]]) {
      friendInfo[info[1]] = [];
    } 

    friendInfo[info[0]].push(info[1]);
    friendInfo[info[1]].push(info[0]);
  }
}

// 1.2 친구 점수 map 초기화
/**
 * initialize 'scoreInfo' variable
 * @param {string} user - user name
 * @param {object} friendInfo - object of friend relation
 * @param {object} scoreInfo - object that needs initializing score of each friend
 */
const initScoreInfo = (user, friendInfo, scoreInfo) => {
  for (let name of Object.keys(friendInfo)) {
    if (name === user) continue;
    scoreInfo[name] = 0;
  }
}

// 2. 친구의 친구 점수 추가 함수
/**
 * add score of user friends 
 * @param {string} user - user name
 * @param {object} friendInfo - object of friend relation
 * @param {object} scoreInfo - score Object of each friend
 */
const addFriendScore = (user, friendInfo, scoreInfo) => {
  const myFriend = friendInfo[user];

  for (let friend of myFriend) {
    for (let name of friendInfo[friend]) {
      if (name === user) continue;
      else scoreInfo[name] += 10;
    }
  }
}

// 2. visitor 점수 추가 함수
/**
 * add score of each visitor
 * @param {object} scoreInfo - score object of each friend
 * @param {string[]} visitors - visitors of user page
 */
const addVisitorScore = (scoreInfo, visitors) => {
  for (let name of visitors) {
    if (!scoreInfo[name]) {
      scoreInfo[name] = 0;
    }

    scoreInfo[name] += 1;
  }
}

// 3. 친구 추천 함수 - 추천할 목록
/**
 * select 5 top scores
 * @param {string} user - user name
 * @param {object} friendInfo - object of friend relation
 * @param {object} scoreInfo - score object of each friend
 * @param {string[]} topScore - names of top 5 scores
 */
const recommendFriend = (user, friendInfo, scoreInfo, topScore) => {
  let minScoreIndex = 0;
  // user 친구 목록
  const myFriend = friendInfo[user]; 

  for (let name of Object.keys(scoreInfo)) {
    // score가 0인 경우 추천에서 제외
    if (scoreInfo[name] === 0) continue;
    // 이미 친구인 경우 추천에서 제외
    if (myFriend.includes(name)) continue;

    topScore.push(name);
    minScoreIndex = Math.min(minScoreIndex, scoreInfo[name]);

    // 최대 5명 -> 점수가 가장 낮은 친구 제외
    if (topScore.length > 5) {
      topScore.splice(minScoreIndex, 1);
    }
  }
}

/**
 * swap index i and index j
 * @param {string} topScore - top 5 scores
 * @param {number} i - index i change with index j
 * @param {number} j - index j change with index i
 */
const swap = (topScore, i, j) => {
  [topScore[i], topScore[j]] = [topScore[j], topScore[i]];
}

// 4. 상위 다섯명 이름 정렬
/**
 * align Top 5 Scores
 * @param {string[]} topScore - unsorted top 5 scores
 * @param {object} scoreInfo - object matching name with score
 */
const sortFriends = (topScore, scoreInfo) => {
  // 점수 순 정렬 (버블 sort)
  for (let i = 0; i < topScore.length; i++) {
    if (scoreInfo[topScore[i]] < scoreInfo[topScore[i + 1]]) {
      swap(topScore, i, i + 1);
    }
  }
  // 같은 점수 이름 순 정렬
  let start = 0;

  while (start < topScore.length) {
    const sameScore = [];
    let curr = start;

    while (scoreInfo[topScore[curr]] === scoreInfo[topScore[curr + 1]]) {
      sameScore.push(topScore[curr]);
      curr++;
    }

    sameScore.push(topScore[curr]);
    sameScore.sort(); 
    topScore.splice(start, sameScore.length, ...sameScore);
    start = curr + 1;
  }
}

/**
 * main function 
 * @param {string} user - name of user
 * @param {string[][]} friends - relation of friends
 * @param {string[]} visitors - visitors of user page
 * @returns {string[]} topScore - align 5 top Scores
 */
function problem7(user, friends, visitors) {
  // 1. 필요한 map 변수들 선언, 초기화
  const friendInfo = {};
  const scoreInfo = {};
  let topScore = [];

  // 1. 초기화
  initFriendInfo(friends, friendInfo);
  initScoreInfo(user, friendInfo, scoreInfo);
  // 2. 친구의 친구 + 10
  addFriendScore(user, friendInfo, scoreInfo);
  // 2. visitor + 1
  addVisitorScore(scoreInfo, visitors);
  // 3. 추천 목록 상위 다섯명
  recommendFriend(user, friendInfo, scoreInfo, topScore); 
  // 4. 상위 다섯명 이름 정렬
  sortFriends(topScore, scoreInfo);

  return topScore;
}

module.exports = problem7;