function problem7(user, friends, visitors) {
  // 제한사항 체크
  // - user는 길이가 1이상 30이하인 문자열
  // - friends는 길이가 1이상 10,000이하인 배열
  // - visitor는 길이가 0이상 10,000이하인 배열
  // - friends의 각 원소의 길이는 2인 배열
  // - 사용자의 아이디는 길이가 1이상 30이하이고 알파벳 소문자
  if(isValidInput(user,friends,visitors)) return false;

  function isValidInput (user, friends, visitors){
    if (user.length < 1 || user.length > 30 || friends.length < 1 || friends.length > 10000 || visitors.length < 0 || visitors.length > 10000) return true;
    friends.forEach(e => {
      if(e.length !== 2 || e[0].length < 1 || e[0].length > 30 || e[1].length < 1 || e[1].length > 30) return true;
    });
    return false;
  }

  function sortRecommend(list){
    const tempArr = [...list];
    const recommendFriends = [];

    const nameSort = tempArr.sort();
    const scoreSort = nameSort.sort((a,b) => b[1] - a[1]);
    scoreSort.forEach(([friend,_])=>{
      recommendFriends.push(friend);
    });

    return recommendFriends.slice(0,5);
  }

  function recommendFriends(friendsList, visitorsList){
    const recommendList = new Map();
    friendsList.forEach((value,key) => {
      if (visitorsList.has(key)){
        recommendList.set(key, value + visitorsList.get(key));
      } else {
        recommendList.set(key, value);
      }
    });
    visitorsList.forEach((value,key) => {
      if (!recommendList.has(key)) {
        recommendList.set(key, value);
      }
    });
    return recommendList
  }

  function writeVisitorsList(visitors){
    const visitorsList = new Map();
    visitors.forEach(id => {
      if (userFriends.includes(id)) return;
      if (visitorsList.get(id)){
        visitorsList.set(id, visitorsList.get(id) + 1);
      } else {
        visitorsList.set(id, 1);
      }
    });
    return visitorsList;
  }

  /**
   * - user와 친구인 Id의 친구목록 생성
   * - 친구목록에서 추천 점수 계산 후 반환
   * @param {string} user 
   * @param {string[]} userFriends 
   * @returns {map}
   */
  function writeFriendsList(user, userFriends){
    const recommendFriends = new Map;
    const tempFriendsList = []
    friends.forEach(([id1, id2]) => {
      if(userFriends.includes(id1) && id2 !== user){
        tempFriendsList.push(id2);
      } else if (userFriends.includes(id2) && id1 !== user){
        tempFriendsList.push(id1)
      }
    });
    tempFriendsList.forEach(id => {
      if (recommendFriends.get(id)) {
        recommendFriends.set(id, recommendFriends.get(id) + 10);
      } else {
        recommendFriends.set(id, 10);
      }
    });
    return recommendFriends;
  }

  /**
   * friends 에서 user와 친구인 Id를 찾아 배열에 저장하여 반환
   * @param {string} user 
   * @param {string[][]} friends 
   * @returns {string[]}
   */
  function findFriends(user,friends){
    const tempFriendsList = new Set();
    friends.forEach(([id1,id2]) => {
      if(id1 === user) {
        tempFriendsList.add(id2);
      } else if(id2 === user){
        tempFriendsList.add(id1)
      }
    });
    return [...tempFriendsList];
  }

  const userFriends = findFriends(user, friends);
  const userFriendsList = writeFriendsList(user, userFriends);
  const userVisitorsList = writeVisitorsList(visitors);
  const userRecommendList = recommendFriends(userFriendsList,userVisitorsList);
  const result = sortRecommend(userRecommendList);

  return result;

}

module.exports = problem7;
