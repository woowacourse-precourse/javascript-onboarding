
function look_Friends(user, friends){ //유저의 친구를 리턴하는 함수
  let user_Friends = [];
  let friends_Index = [];
  friends.map((item,index)=>{

    if(item[0] == user){
      user_Friends.push(item[1]);
      friends_Index.push(index)
      return;
    }

    if(item[1] == user){
      user_Friends.push(item[0])
      friends_Index.push(index)
      return;
    }
  })

  friends_Index.map((element,i)=>{

    friends.splice(element-i,1)
  })
  return [user_Friends, friends];
}

function delete_Friends(visitors, user_Friends){ //방문자에서 친구를 제외시키는 함수
    for(let i=0; i<visitors.length; i++){
        for(let j=0; j<user_Friends.length; j++){
          if(visitors[i] === user_Friends[j]){
            var not_Friends = visitors.splice(i);
            return not_Friends;
          }
        }
      }
    }


function problem7(user, friends, visitors) {
  var answer;
  user_Friends = look_Friends(user, friends);
  return delete_Friends(visitors, user_Friends);
}

module.exports = problem7;