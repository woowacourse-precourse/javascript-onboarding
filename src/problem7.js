//내 친구 목록 생성 함수
const makeMyFriends = (friends, user, myFriends) =>{
    
  for(let friend of friends){
    if (friend.includes(user)) {
      myFriends.push(
        friend[Math.abs(friend.indexOf(user)-1)]
        );
    }
  }
};

//나와 함께 아는 친구 목록 생성
const makeMyFriendsKnow = (user, myFriends, friends, userFriendTogether) =>{

  for(let user_friend of myFriends){
    for(let friend of friends){
      const newFriendIndex = Math.abs(friend.indexOf(user_friend)-1);
      if ((friend.includes(user_friend)) &&
          (!friend[newFriendIndex].includes(user))) {
            userFriendTogether.push(
              friend[newFriendIndex]
            );
      }
    }
  }
};

//10점 짜리 계산
const calculateTen = (userFriendTogether, myFriends, score) =>{
  
  for(let ten_user of userFriendTogether){
    if (!myFriends.includes(ten_user)) {
      if (!score[ten_user]) {
        score[ten_user] = 0;
      }
        score[ten_user] += 10;
    } 
  }
};

//1점 짜리 계산
const calculateOne = (visitors, myFriends, score) =>{
  
  for(let visitor of visitors){
  //이미 내 친구는 제외시켜야한다
    if (!myFriends.includes(visitor)) {
        if (!score[visitor]) {
        score[visitor] = 0;
        }
        score[visitor] += 1;
    }
  }
};

//이름순 정렬 함수
const sortName = (score) => {
  score = Object.fromEntries(
    Object.entries(score).sort(([a],[b]) => a < b? -1: 1 )
    );
  return score;
};

//점수순 정렬 함수
const sortScore = (score) => {
  score = Object.fromEntries(
    Object.entries(score).sort(([,a],[,b]) => a > b? -1: 1 )
    );
  return score;
};

//상위 5개 출력 함수
const onlyFive = (score,result) =>{
  let count = 0;
  for(let key in score){
      if(count === 5){
        return result;
      }
      result.push(key);
      count++;
  }
}

//메인 함수
function problem7(user,friends,visitors){
  let myFriends = [];
  let userFriendTogether = [];
  let score = {};
  let result = [];

  //내 친구 배열 생성 
  makeMyFriends(friends, user, myFriends);
  //함께 아는 친구 배열 생성 
  makeMyFriendsKnow(user, myFriends, friends, userFriendTogether);
  //10점 짜리 점수 계산 
  calculateTen(userFriendTogether, myFriends, score);
  //1점 짜리 점수 계산
  calculateOne(visitors, myFriends, score);
  console.log(score)
  //이름순으로 정렬 
  score = sortName(score);
  //점수순으로 정렬 
  score = sortScore(score);
  //상위 5개만 출력
  onlyFive(score,result);
  return result;
}
module.exports = problem7;
