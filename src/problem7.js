/**
 * 미스터코의 친구 추천 알고리즘
 * - 사용자와 함께 아는 친구의 수 = 10점
 * - 사용자의 타임 라인에 방문한 횟수 = 1점
 * @function problem7
 * @param {string} user 사용자 아이디
 * @param {string[][]} friends 친구관계를 담은 이차원 배열
 * @param {string[]} visitor 사용자 타임라인 방문 기록
 * @returns {string[]} result 친구추천 규칙에따라 점수가 가장 높은 순으로 최대 5명의 이름
 */

function problem7(user, friends, visitor) {
  const scoreBoard = {};
  const myFriend = getMyFriend(user, scoreBoard, friends);
  const recommendFriends = getRecommendFriends(scoreBoard, myFriend, visitor);

  for (let relation of friends) {
    for (let j = 0; j < myFriend.length; j++) {
      for (let k = 0; k < recommendFriends.length; k++) {
        if (
          relation.includes(myFriend[j]) &&
          relation.includes(recommendFriends[k])
        ) {
          scoreBoard[recommendFriends[k]] += 10;
        }
      }
    }
  }
  const finalRecommendation = getResult(recommendFriends, scoreBoard);
  return finalRecommendation;
}

/**
 * @function getMyFriend
 * @returns {string[]} 이미 등록된 친구 목록
 *  */
function getMyFriend(user, scoreBoard, friends) {
  let myFriend = [];
  for (let relation of friends) {
    if (relation.includes(user)) {
      myFriend.push(relation);
    } else {
      scoreBoard[relation[0]] = 0;
      scoreBoard[relation[1]] = 0;
    }
    myFriend = myFriend.flat().filter((v) => v !== user);
  }
  return myFriend;
}

/**
 * @function getRecommendFriends
 * @returns {string[]} 친구추천 후보 리스트 리턴
 */
function getRecommendFriends(scoreBoard, myFriend, visitor) {
  for (let name of visitor) {
    scoreBoard[name] = (scoreBoard[name] || 0) + 1;
  }
  let recommendFriends = Object.keys(scoreBoard);
  for (let name of myFriend) {
    recommendFriends.splice(recommendFriends.indexOf(name), 1);
  }
  return recommendFriends;
}

/**
 * @function getResult
 * @returns {string[]} 점수가 0이 아닌 친구를 점수순, 이름순으로 정렬 후 최대 5명 리턴
 */
function getResult(recommendFriends, scoreBoard) {
  recommendFriends.sort().sort((a, b) => {
    return scoreBoard[b] - scoreBoard[a];
  });
  const result = recommendFriends.filter((name, idx) => {
    if (scoreBoard[name] !== 0 && idx < 5) return name;
  });
  return result;
}
module.exports = problem7;
