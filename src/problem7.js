function problem7(user, friends, visitors) {

  const totalScore = getScore(friends,visitors);
  
  // 점수를 기준으로 정렬
  let sorted = Object.entries(totalScore).sort((a,b) => b[1]-a[1]);

  // 가장 점수가 많은 5명의 친구 이름을 출력
  let topFive = [];

  for(let ele of sorted){
  topFive.push(ele[0])
  } return topFive.slice(0,5);
  
  
} 
  

//user의 친구 목록
function getUserFriends(userName,friendsList){
  let userFriends = [];
  for(let friendSet of friendsList){
    if(friendSet.includes(userName)){
    if(friendSet[0] === userName){
    userFriends.push(friendSet[1]);
    } else if(friendSet[1] === userName){
    userFriends.push(friendSet[0]);
    }
    }
  } 
  return userFriends
}

// 점수 목록을 얻기 위함
function getScore(friends,visitors){
  // user친구의 친구 목록
  const myFriends = getUserFriends(user,friends);
  let  friendOfFriendsSet= [];
  for(let friend of myFriends){ 
    friendOfFriendsSet.push(getUserFriends(friend,friends));
  } 

  // 친구의 친구목록에서 user이름 제외
  let friendOfFriends = [];
  for(let ele of friendOfFriendsSet.flat()){
    if(!ele.includes(user)) friendOfFriends.push(ele)
  }

  // 이미 친구인 사람은 친구의 친구 목록에서 제외함.
  const realFriends = friendOfFriends.filter(x=>!myFriends.includes(x))

  
  // 함께 아는 친구에게 10점씩 부여
  let score = {};
  realFriends.forEach((x)=>{
    score[x] = (score[x] || 0)+10;
  });
  
  // 이미 친구는 제외한 방문자 명단
  const realVisitors = visitors.filter(x => !myFriends.includes(x));
  
  //방문자는 1점씩 부여
  realVisitors.forEach((x)=>{
    score[x] = (score[x] || 0) +1;
  })

  return score;
  
}

// const user = "Walter";
// const friends = [
//   ["Christa", "Alyce"],
//   ["Hobart", "Retha"],
//   ["Elijah", "Josh"],
//   ["Cecil", "Lamont"],
//   ["Eliza", "Lamont"],
//   ["Austyn", "Retha"],
//   ["Retha", "Mara"],
//   ["Walter", "Lamont"],
//   ["Retha", "Walter"],
//   ["Urban", "Walter"],
// ];
// const visitors = ["Cecil", "Eliza", "Adonis", "Mara"];

// console.log(problem7(user,friends,visitors));
module.exports = problem7;

