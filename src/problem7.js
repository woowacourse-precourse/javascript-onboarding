function problem7(user, friends, visitors) {
  let answer = [];
  const userFriends = findFriends(user, friends);
  const recommendFriends = findrecommendFriends(user, friends, userFriends)
  const scoreFriendsList = recommendFriends.map(i => 10)
  visitors.forEach(i => {
    if (recommendFriends.indexOf(i) !== -1) {
      scoreFriendsList[recommendFriends.indexOf(i)]++
    } else if (recommendFriends.indexOf(i) === -1 && userFriends.indexOf(i) === -1) {
      recommendFriends.push(i);
      scoreFriendsList.push(1);
    }
  })
  
  const countArr = makeFriendsScore(recommendFriends, scoreFriendsList);
  countArr.forEach(i => answer.push(i[0]))
  return answer;
}

module.exports = problem7;

/**
 * 기준값을 받아 배열을 순회하여 기준값과 함께 있는 친구를 찾고 기준값을 제거하여 친구 리스트를 반환
 * @param {String, Array} 기준값과 비교할 배열 입력
 * @returns 친구 리스트 반환
 */
function findFriends(user, friends) {
  return  friends.map(friendTable => friendTable.filter(friend => !user.includes(friend))).filter(arr => arr.length < 2).flat();
}

/**
 * 기준값, 친구 목록, 기준값 친구의 친구목록을 통해 친구 목록을 순회하여 기준값의 친구의 친구 리스트를 반환
 * @param {String, Array, Array} 기준값, 친구 목록, 기준값 친구의 친구목록
 * @returns 나에게 추천할 친구 리스트를 반환
 */
function findrecommendFriends(user, friends, myFriends) {
  return [...new Set(friends.map(friendTable => friendTable.filter(friend => !myFriends.includes(friend))).filter(friend => !user.includes(friend)).filter(friendList => friendList.length < 2).flat())]
}

/**
 * 추천 목록과 점수를 묶어서 배열을 반환
 * @param {Array, Array} 추천 목록, 점수
 * @returns 추천 목록과 점수를 묶어서 배열을 반환
 */
function makeFriendsScore(recommendFriends, scoreFriendsList) {
  const friendsScoreTable = [];
  for (let i = 0; i < recommendFriends.length; i++) {
    friendsScoreTable.push([recommendFriends[i], scoreFriendsList[i]])
  }
  scoreSort(friendsScoreTable)
  return friendsScoreTable
}

/**
 * 배열이 들어오면 점수를 기준으로 내림차순 정렬하고 점수가 같다면 이름순으로 오름차순 정렬
 * @param {Array} 정렬 대상 배열
 * @returns 점수를 기준으로 내림차순 정렬하고 점수가 같다면 이름순으로 오름차순 정렬
 */
function scoreSort(arr) {
    arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return (a[0] - b[0])
    } else {
      (b[1] - a[1])
    }
    })
  
  return arr
}