/*
 * 기능 분석
 * [x] friends에 대한 친구 내용과 관계를 friendList에 저장하는 기능
 * [x] user의 친구의 친구 중 user와 친구를 맺지 않은 친구들에 대한 선택 및 10점씩 추가 기능
 * [x] user의 친구의 친구 중 user와 친구를 맺지 않은 친구들이 visitor에 존재하는 갯수만큼 1점씩 추가 기능
 * [x] 점수가 결정된 친구에 대한 recommendFriendList에 저장하는 기능
 * [x] user의 친구의 친구는 아니지만 visitor에 있는 인원에 대한 점수 계산 및 recommendFriendList에 저장
 * [x] recommendFriendList에 저장될 때 점수가 높고, 같을 경우 초성이 사전순으로 빠른 5개만 가지고 있도록 유지하는 기능 
 */

// 입력 받은 친구와 그의 친구들을 저장하는 함수
function updateFriendsList([friend, otherFriend], friendsList) {
  if (friendsList[friend]) {
    friendsList[friend].push(otherFriend);
  } else {
    friendsList[friend] = [otherFriend];
  }
}

// 추천친구리스트에 중복을 확인하는 함수
function isDuplicateRecommendFriendList(name, list) {
  for(let f =0;f<list.length;f++){
    if(list[f][0] === name){
      return true;
    }
  }
  return false;
}

/*
 * 추천 친구 리스트를 반환해주는 기능의 함수
 * 이 함수는 user 친구의 친구 중 user와 친구가 아닌 이들에 대해 추천해주어야한다. 
 * 위에 조건에 부합하는 친구를 추천친구라고 한다면, 
 * 추천친구가 만약 user의 친구들 중 n명과 친구라면 추천친구의 point는 n * 10이 된다.
 * 그리고 추천친구가 user의 타임라인에 방문한 횟수만큼 point를 +1을 한다. 
 * 최종점수와 이름을 setRecommendList를 통해 추천친구리스트를 저장하고 반환한다.
 */
function getRecommendFriendList(user, visitors, friendsList) {
  const recommendFriendList = [];

  // user의 친구 수 만큼 반복
  for(let friend = 0; friend < friendsList[user].length; friend++){

    // user의 친구의 친구수 만큼 반복
    for(let otherFriend = 0; otherFriend < friendsList[friendsList[user][friend]].length; otherFriend++){
      let point = 0;

      //만약 친구의 친구가 user의 친구 중에 포함되지 않은 인원이며, user본인이 아니며, 추천리스트에 아직 없는 경우
      if (!friendsList[user].includes(friendsList[friendsList[user][friend]][otherFriend]) && (
          friendsList[friendsList[user][friend]][otherFriend] !== user && (
          !isDuplicateRecommendFriendList(friendsList[friendsList[user][friend]][otherFriend], recommendFriendList)
        ))) {

        // 친구의 친구의 친구 수만큼 반복
        for (let k = 0; k < friendsList[friendsList[friendsList[user][friend]][otherFriend]].length; k++) {

          // 친구의 친구의 친구 중에 user의 친구가 있다면 10점씩 추가
          if (friendsList[user].includes(friendsList[friendsList[friendsList[user][friend]][otherFriend]][k])) {
            point += 10;
          }
        }

        // 만약 user의 타임라인에 방문한 친구인 경우 횟수당 1점 추가
        point += visitors.filter((elem) => elem === friendsList[friendsList[user][friend]][otherFriend]).length;

        // 최종점수와 함께 이름을 추천리스트에 저장
        setRecommendFriendList(recommendFriendList ,[friendsList[friendsList[user][friend]][otherFriend], point]);
      }
    }
  }

  // user의 친구의 친구는 아니지만 visitor에 있는 인원에 대한 점수 계산 및 recommendList에 저장
  for(let n = 0; n < visitors.length; n++){
    if (!(recommendFriendList.includes(visitors[n])) && (
        !friendsList[user].includes(visitors[n])) && (
        !isDuplicateRecommendFriendList(visitors[n], recommendFriendList)
      )){
      let point =visitors.filter(elem => elem === visitors[n]).length;
      setRecommendFriendList(recommendFriendList, [visitors[n], point]);
    }
  }
  
  return recommendFriendList;
}

function setRecommendFriendList(recommendFriendList, [name, point]) {
  if (recommendFriendList.length === 1) {
    recommendFriendList.push([name, point])
    return;
  }

  for (let i = 0; i < 5; i++ ) {
    if (recommendFriendList[i] === undefined) {
      recommendFriendList.push([name, point]);
      return;
    }
    let tmp;
    if (recommendFriendList[i][1] < point){
      tmp = recommendFriendList[i];
      recommendFriendList[i] = [name, point];
      [name, point] = tmp;
    } else if (recommendFriendList[i][1] === point) {
      for (let z = 0; z < name.length; z++) {
        if (recommendFriendList[i][0][z] > name[z]) {
          tmp = recommendFriendList[i];
          recommendFriendList[i] = [name, point];
          [name, point] = tmp;
        }
      }
    }
  }
}

function problem7(user, friends, visitors) {
  var answer = [];
  const friendsList = {
    [user] : [],
  }
  
  // friends 배열을 순회하면서 updateFriendsList에 저장한다.
  friends.forEach(([friend, otherFriend]) => {
    updateFriendsList([friend, otherFriend], friendsList);
    updateFriendsList([otherFriend, friend], friendsList);
  });

  let recommendList = getRecommendFriendList(user, visitors, friendsList);

  for (let i = 0;i < recommendList.length; i++) {
    answer.push(recommendList[i][0]);
  }
  
  return answer;
}

module.exports = problem7;
