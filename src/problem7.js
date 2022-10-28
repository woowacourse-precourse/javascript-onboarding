
//유저와 친구인 배열을 리턴하는 함수
function searchFriends(user, friends){
  let user_friends = [];
  let friends_index = [];
  friends.map((element,index)=>{
    if(element[0] == user){
      user_friends.push(element[1]);
      friends_index.push(index)
      return;
    }
    if(element[1] == user){
      user_friends.push(element[0])
      friends_index.push(index)
      return;
    }
  })

  friends_index.map((element,i)=>{

    friends.splice(element-i,1)
  })
  return [user_friends,friends];
}

//방문기록에서 친구 제외
function notFriendvisitors(visitors,user_friends){
  let recommand_1 = [...visitors]
  user_friends.map((search_friend_result)=>{
    recommand_1 = recommand_1.filter((data)=>{ return data != search_friend_result;});
  })
  return recommand_1
}

//유저의 친구의 친구를 리턴하는 함수
function searchFriendsFriend(user_friends/**유저와 친구인 배열 */,friends/**유저와 친구를 거른 배열 */){
  let recommand_10 = []
  user_friends.map((user)=>{
    friends.map((element)=>{
      if(element[0] == user){
        recommand_10.push(element[1]);
        return;
      }
      if(element[1] == user){
        recommand_10.push(element[0])
        return;
      }})
  })
  return recommand_10
}

//친구추천 점수를 아이디:점수로 반환
//오브젝트를 나누자 {name : aaa, score : 0} 하고 배열에 추가
function friendRecommandScore(recommand_10,recommand_1){
  friend_score = {};
  recommand_10.map((element)=>{
    if(friend_score.hasOwnProperty(element) == true){
      friend_score[element] = friend_score[element] + 10
    }
    if(friend_score.hasOwnProperty(element) == false){
      friend_score[element] = 10
    }

  })

  recommand_1.map((element)=>{
    if(friend_score.hasOwnProperty(element) == true){
      friend_score[element] = friend_score[element] + 1
    }
    if(friend_score.hasOwnProperty(element) == false){
      friend_score[element] = 1
    }

  })

  return friend_score
}
//친구추천 객첵를 이름순으로 정렬
function sortFriendRecommand(friend_recommand){
/**오브젝트 정렬
 * sort(([a,],[b,])) 이름순으로 정렬
 * sort(([,a],[,b])) 점수순 내림차순 정렬
 */
  let sort_friend_recommand = Object.entries(friend_recommand)
  .sort(([a,], [b,]) => a - b)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  return sort_friend_recommand
}

//추천 친구 배열을 리턴하는 함수
function friendRecommand(friend_recommand){
  let friend_recommand_array = [];
  let friend_recommand_score = Object.values(friend_recommand)
  friend_recommand_score = friend_recommand_score.sort((a,b)=> {return b-a} )
  if(friend_recommand_score.length > 5){
    friend_recommand_score = friend_recommand_score.slice(0,5)
  }
  friend_recommand_score.map((element)=>{
    friend_recommand_key = Object.keys(friend_recommand).find(key => friend_recommand[key] === element)
    friend_recommand[friend_recommand_key] = 0
    friend_recommand_array.push(friend_recommand_key)
  })
  return friend_recommand_array
}



let user = "mrko"
let friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]



function problem7(user, friends, visitors) {
  let answer;
  let search_friends_result = searchFriends(user,friends) //user의 친구와 user의 친구를 제외한 친구목록
  let user_friends = search_friends_result[0] //user의 친구 배열
  friends = search_friends_result[1] // user의 친구의 친구 배열
  let recommand_10 = searchFriendsFriend(user_friends,friends) //친구의 친구(10점짜리) 배열
  let recommand_1 = notFriendvisitors(visitors,user_friends) // 방문기록에서 친구 제외 배열
  let friend_recommand =  friendRecommandScore(recommand_10,recommand_1) //{추천친구 : 점수} 오브젝트
  friend_recommand = sortFriendRecommand(friend_recommand);//추천친구 오브젝트 이름순 정렬
  answer = friendRecommand(friend_recommand); // 추천 친구 배열
  return answer;
}

module.exports = problem7;
