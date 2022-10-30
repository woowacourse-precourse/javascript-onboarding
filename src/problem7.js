function problem7(user, friends, visitors) {

  let recommendFriend = new Map();

  let count = 1;
  
  const findFriend = (user, friends) => {
    const friendList = friends.filter(list => list.includes(user));
    console.log(friendList);
    return friendList;
  }
  
  const onlyFriend = (user, friendList) => {
    let flat = friendList.flat();
    for(let i = 0; i<flat.length; i++){
      if(flat[i] === user){
        flat.splice(i,1);
        i--;
      }
    }
    console.log(flat);
    return flat;
  }

  const findFriendFriend = (friend, friends, user) => {
    let checkFriend = [];
    let checkF = [];
    for(let j = 0; j<friend.length; j++){
      for(let k = 0; k<friends.length; k++){
        if(friends[k].includes(friend[j])){
          if(!friends[k].includes(user)){
            checkF.push(friends[k]);
          }
        }
      }
    }
    return checkF;
  }

  const plusTen = (findFriendFriend, friend) => {
    let result = findFriendFriend.flat();
    result = result.filter(i => !friend.includes(i));
    let check = new Set(result);
    let newPlus = [...check];
    return newPlus;
  }

  const plusOne = (visitors, friend) => {
    let visit = visitors.flat();
    visit = visit.filter(i => !friend.includes(i));
    let visitCheck = visit;
    let count = 1;
    for(let i = 0; i < visitCheck.length; i++){
      if(visitCheck[i] === visitCheck[i-1]){
        count++;
      }
    }
    console.log(count);
    let newVisit = visitCheck.filter((e, i) => visitCheck.indexOf(e) === i);
    console.log(newVisit);
    return visitCheck;
  }

  const friendPlus = (ten, one) => {
    let i;
    let userName;
    for(let i = 0; i < ten.length; i++){
      recommendFriend.set(ten[i],10);
    }
    for(let j = 0; j < one.length; j++){
      recommendFriend.set(one[j], count);
    }
    console.log(recommendFriend);
    for(let [key, value] of recommendFriend){
      userName = recommendFriend.keys();
      // map 상태에서 sort 해서 key값 리턴하면 끝
    }
    return userName;
  }
  

  let arr = findFriend(user, friends);
  let friend = onlyFriend(user,arr);
  let findF = findFriendFriend(friend, friends, user);
  let plus = plusTen(findF, friend);
  let oneP = plusOne(visitors, friend);
  let answer = friendPlus(plus, oneP);

  return answer;
}
console.log(problem7("mrko",
[
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
],
["bedi", "bedi", "donut", "bedi", "shakevan"]))

module.exports = problem7;
