function problem7(user, friends, visitors) {

  //필요변수
  //&1. 친구 관계를 나타내는 리스트를 가질 빈 객체
  const FRIEND_RELATION_OBJ = {}

  //&2. user를 기준으로 점수가 저장될 빈 객체
  const USER_POINT_CALCUL_OBJ = {}

  //필요함수
  
  //1#. &1의 객체 속에 친구이름이 있는지 확인하는 함수

  function CHECK_EXIST_IN_FRIEND_RELATION_OBJ (userName) {

    if(FRIEND_RELATION_OBJ[userName] === undefined){return false}
    else {return true}

  }

  //2#. 친구와 친구 사이를 이어주는 함수

  function INPUT_RELATION_FRIENDS ([userName1,userName2]) {
    
    if(CHECK_EXIST_IN_FRIEND_RELATION_OBJ(userName1) === false){
      FRIEND_RELATION_OBJ[userName1] = []
    }

    if(CHECK_EXIST_IN_FRIEND_RELATION_OBJ(userName2) === false){
      FRIEND_RELATION_OBJ[userName2] = []
    }
    
    FRIEND_RELATION_OBJ[userName1].push(userName2)
    FRIEND_RELATION_OBJ[userName2].push(userName1)

  }

  //3#. user와 함께 아는 친구일때 점수를 더하는 함수

  function INPUT_NEAR_FRIENDS_POINT () {
    const userFriendsList = FRIEND_RELATION_OBJ[user];
    for(let friend of userFriendsList){
      for(let friendOfFriend of FRIEND_RELATION_OBJ[friend]){
        if(friendOfFriend!==user && userFriendsList.includes(friendOfFriend) === false){
          if(USER_POINT_CALCUL_OBJ[friendOfFriend] === undefined){
            USER_POINT_CALCUL_OBJ[friendOfFriend] = 10
          } else {
            USER_POINT_CALCUL_OBJ[friendOfFriend] += 10
          }
        }
      }
    }    
  }

  //4#. 타임 라인에 방문한 사용자들의 점수를 더하는 함수

  function INPUT_VISIT_FRIENDS_POINT () {
    const userFriendsList = FRIEND_RELATION_OBJ[user];
    for(let visitor of visitors){
      if(visitor!==user && userFriendsList.includes(visitor) === false){
        if(USER_POINT_CALCUL_OBJ[visitor] === undefined){
          USER_POINT_CALCUL_OBJ[visitor] = 1
        } else {
          USER_POINT_CALCUL_OBJ[visitor] += 1
        }
      }
    }    
  }


  //특이사항
  //!1. user는 길이가 1 이상 30 이하

  function CHECK_USER_NAME_LENGTH (userName) {

    if(userName.length <1 || userName.length >30){
      return false;
    } else {
      return true;
    }
  
  }

  //!2. friends는 길이가 1 이상 10,000 이하인 배열

  function CHECK_FRIENDS_LIST_LENGHT (friendsList) {

    if(friendsList.length <1 || friendsList.length >10000){
      return false;
    } else {
      return true;
    }

  }

  //!3. friends의 각 원소는 길이가 2인 배열

  function CHECK_FRIENDS_LIST_ELEMENTS_LENGHT (elementList) {

    if(elementList.length === 2){
      return true;
    } else {
      return false;
    }

  }

  //!4. visitors는 길이가 0 이상 10,000 이하인 배열

  function CHECK_VISITORS_LIST_LENGHT (visitors) {

    if(visitors.length <0 || visitors.length >10000){
      return false;
    } else {
      return true;
    }

  }

  //!5. 사용자 아이디는 알파벳 소문자로만 이루어져 있다.

  function CHECK_USER_NAME_IS_LOWER_ALPHABET (userName) {
   
    const lowerAlphabet = /a-z/

    for(let i of userName){
    
      if(lowerAlphabet.test(userName) === false){
        return false;
      }
    }
    return true;

  }


  //!6. 동일한 친구 관계가 중복해서 주어지지 않음



  
  for(let friend of friends){
    INPUT_RELATION_FRIENDS(friend)
  }

  INPUT_NEAR_FRIENDS_POINT()
  INPUT_VISIT_FRIENDS_POINT()

  
  return (Object.keys(USER_POINT_CALCUL_OBJ))
  


}

module.exports = problem7;
