//user는 1-30인 문자열
//friends는 1-10000인 배열
//friends의 원소는 [아이디a,아이디b](길이2)

//visitors는 길이가 0-10000이하 문자열
//아이디는 알파벳 소문자로만

//친구관계 중복x
//추천 친구가 없으면 -1

function exceptUser(user){
  //문자열
  if(typeof(user)!='string'){return -1}
  //1-30
  if(1>user.length || 30<user.length){return -1}
  //알파벳 소문자
  let reg = /[a-z]/g
  if(user.match(reg)==null){return -1}

  return 0
}
//visitor 예외
function exceptVisitors(visitors=[]){

  //1-10000
  if(10000<visitors){return -1}

  //visitor의 아이디 예외사항
  for(let value of visitors){
    if(exceptUser(value)==-1){return -1}
  }
  return 0
}
//친구 예외사항
function exceptFriends(friends=[[]]){

  if(10000<friends){return -1}

  for(let value of friends){
    //friends의 원소 길이는 2
    if(value.length!=2){return -1}
    //friends의 아이디 예외사항
    for(let id of value){
      if(exceptUser(id)==-1){return -1}
    }
  }

  return 0
}

function problem7(user, friends, visitors) {
  var answer;

  let eUser = exceptUser(user)
  let eFriends = exceptFriends(friends)
  let eVisitors = exceptVisitors(visitors)

  if(eUser==-1||eFriends==-1||eVisitors==-1){return -1}


  return answer;
}

module.exports = problem7;
