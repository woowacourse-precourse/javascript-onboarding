function problem7(user, friends, visitors) {
  //제한사항
  //user 길이 제한
  if(user < 1 || user > 30){
    return -1;
  }

  //friends 배열 길이 제한
  if(friends.length < 1 || friends.length > 10000){
    return -1;
  } 

  //friends 배열 원소 길이 제한
  for(let f = 0; f < friends.length; f++){
    if(friends[f].length != 2){
      return -1;
    } 
  }


  //friends 배열 아이디 길이 제한, 소문자 제한
  let low = /[a-z]/;
  for(let i = 0; i < friends.length; i++){
    for(let j = 0; j < 2; j++){
      if(friends[i][j].length < 1 || friends[i][j].length > 10000){
        return -1;
      } else if(low.test(friends[i][j]) == false){
        return -1;
      }
    }
  }

  //visitors 길이 제한
  if(visitors < 0 || visitors > 10000){
    return -1;
  }


  //구현
  var result = {};

  //인간관계 분석
  let friendsOf = {};
  friends.forEach(pair => {
      if (friendsOf[pair[0]] == undefined) {
        friendsOf[pair[0]] = [];
        friendsOf[pair[0]].push(pair[1]);
      }
      if (friendsOf[pair[1]] == undefined) {
        friendsOf[pair[1]] = [];
        friendsOf[pair[1]].push(pair[0]);
      }
      
  });
    
  //friendsOf의 모든 key 가져옴
  /*Object.keys(friendsOf).forEach(name => {  
      console.log(name + "의 친구 : " + friendsOf[name]);
  });
  */

  //점수 계산
  //friends 점수 계산
  friendsOf[user].forEach(friend => {
    friendsOf[friend].forEach(someOne => {
        if(someOne != user){
            if(result[someOne] == undefined) {
              result[someOne] = 10;
            } else {
              result[someOne] += 10;
            }
        }
    });
  });

  
  //visitors 점수 계산
  visitors.forEach(someOne => {
    if(!friendsOf[user].includes(someOne)){
        if(result[someOne] == undefined) {
          result[someOne] = 1;
        } else {
          result[someOne] += 1;
        }
    }
  });
  console.log(result);

   // 점수 순으로 정렬
   let items = Object.keys(result).map( key => [key, result[key]]).sort((a,b) => {
    if(a[1] - b[1] == 0){
        return (b[0] < a[0]);
    }else{
        return (b[1] > a[1]);
    }
  });

  // 상위 5명 
  result = [];
  for (let index = 0; index < 5; index++) {
      if(items[index] != undefined){
        result.push(items[index][0]);
      }
  }

  console.log(result);

  return result;

}


//테스트 케이스
let user = "mrko";
let friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ];
let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

problem7(user, friends, visitors);



module.exports = problem7;
