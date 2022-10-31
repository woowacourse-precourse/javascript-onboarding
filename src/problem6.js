function problem6(forms) {

  const inputForms = forms.slice()
  const inputEmailList = inputForms.map(form => form[0])
  const inputNickNameList = inputForms.map(form => form[1])

  //특이사항
  //!1. 이메일의 전체 길이는 11자 이상 20자 미만

  function CHECK_EMAIL_LENGTH (email) {
    if(email.length <11 || email.length >19){return false;}
    else {return true;}
  }

  //!2. 신청할수 있는 이메일의 도메인은 email.com으로 제한

  function CHECK_EMAIL_DOMAIN (email) {
    
    const inputEmail = email.split('@');
    if(inputEmail[1] !== "email.com"){return false;}
    else {return true;}

  }
  //!3. 닉네임은 한글만 가능

  function CHECK_NICK_NAME_KOR (nickName){
    const nickNameWordList = nickName.split('');
    for(word of nickNameWordList){
      if(/[가-힣]/.test(word) === false){
        return false;
      }      
    }
    return true;
  }

  //!4. 닉네임의 전체 길이는 1자 이상, 20자 미만

  function CHECK_NICK_NAME_LENGTH(nickName){
    if(nickName.length <1 || nickName.length >19){return false;}
    else {return true;}
  }

  //!5. 이메일을 오름차순으로 정렬된 값을 반환하는 함수

  function RETURN_ASC_EMAIL (mailList) {
    return mailList.sort()
  }

  //!6. 이메일의 결과값의 중복된 내용은 제거

  function RETURN_REMOVED_DUPLICATED_EMAIL (mailList ){
    const newMailList = new Set(mailList)
    return [...newMailList]
  }

  //[!1]
  for(let email of inputEmailList){
    if(CHECK_EMAIL_LENGTH(email) === false){
      return '11자 미만이거나, 19자를 초과하는 이메일이 존재합니다.'
    }
  }

  //[!2]
  for(let email of inputEmailList){
    if(CHECK_EMAIL_DOMAIN(email) === false){
      return '형식에 맞지 않는 이메일이 존재합니다.'
    }
  }

  //[!3]
  for(let nickName of inputNickNameList){
    if(CHECK_NICK_NAME_KOR(nickName) === false){
      return '한글이 아닌 닉네임이 존재합니다.'
    }
  }

  //[!4]
  for(let nickName of inputNickNameList){
    if(CHECK_NICK_NAME_LENGTH(nickName) === false){
      return '1자 미만, 19자를 초과하는 닉네임이 존재합니다.'
    }
  }


  //필요변수
  //&1. 검사한 단어가 저장되는 배열
  const SEARCHED_WORD_LIST = [];
  //&2. 중복된 [이메일,이름]의 인덱스가 저장되는 배열
  const DUPLICATED_INDEX_LIST = [];


  //필요함수
  //#1. 닉네임을 검색해야하는 리스트로 만들어 반환하는 함수 : []

  function RETURN_SEARCH_WORD_LIST_FROM_NICKNAME (nickName) {
    const outputList = [];
    const letterList = nickName.split('')
    let tempLength = 2;
    for(let i=0; i<letterList.length;i++){
      for(let k=0; k<letterList.length; k++){
        if(k+tempLength >letterList.length){
          break;
        }
        outputList.push(letterList.slice(k,k+tempLength).join(''))
      }
      tempLength += 1;
    } 
    return outputList;
  }


  //#2. 검색어를 '검사한 단어' 배열에 넣는 함수 : INPUT

  function INPUT_WORD_TO_SEARCHED_WORD_LIST (word) {
    SEARCHED_WORD_LIST.push(word)
  }

  //#3. 닉네임에 검색어가 포함되는지 확인하는 함수 : True/False

  function CHECK_INCLUDE_WORD_IN_NICKNAME (word,nickName) {
    const checkWordList = RETURN_SEARCH_WORD_LIST_FROM_NICKNAME(nickName)
    return checkWordList.includes(word)
  }

  //#4. 중복된 이름이 가진 배열 인덱스를 '중복된 인덱스' 배열에 넣는 함수 : INPUT 

  function INPUT_INDEX_TO_DUPLICATED_INDEX_LIST (index) {
    DUPLICATED_INDEX_LIST.push(index)
  }


  //#5. 검색어가 '검사한 단어' 배열에 포함되는지 확인하는 함수 : T/F

  function CHECK_INCLUDE_WORD_IN_SEARCHED_WORD_LIST (word) {
    return SEARCHED_WORD_LIST.includes(word)

  }

  //#6. 검사하려는 인덱스가 '중복된 인덱스'에 존재하는지 확인하는 함수 : T/F

  function CHECK_INCLUDE_INDEX_IN_DUPLICATED_INDEX_LIST (index) {
    return DUPLICATED_INDEX_LIST.includes(index)

  }

  //#7. 인덱스를 통해 이메일 리스트를 반환하는 함수 : INPUT

  function RETURN_EMAIL_LIST_WITH_INDEX () {
    const FORMS = forms.slice();
    const outputEmailList = [];
    for(let i of DUPLICATED_INDEX_LIST){
      outputEmailList.push(FORMS[i][0])
    }
    return outputEmailList;
  }


  // 해답 로직

  for(let index in inputForms){

    index = Number(index)

    //#6. [이미 중복 인덱스 리스트에 검사하려는 인덱스(이름)이 있다면 다음 인덱스로 넘어감]
    if(CHECK_INCLUDE_INDEX_IN_DUPLICATED_INDEX_LIST(index) === true){continue;}  
    
    const tempWordList = RETURN_SEARCH_WORD_LIST_FROM_NICKNAME(inputForms[index][1]);
    const tempFormSearchList = inputForms.slice(index+1).map(form => form[1]);
    
    for(let tempWord of tempWordList){

      //#5. [이미 검사한 단어 리스트에 검사하려는 단어가 있다면 다음 단어로 넘어감]
      if(CHECK_INCLUDE_WORD_IN_SEARCHED_WORD_LIST(tempWord) === true){continue}    
        INPUT_WORD_TO_SEARCHED_WORD_LIST(tempWord)
        
        for(let searchIndex in tempFormSearchList){

          //#6. [이미 중복 인덱스 리스트에 검사하려는 인덱스(이름)이 있다면 다음 인덱스로 넘어감]
          if(CHECK_INCLUDE_INDEX_IN_DUPLICATED_INDEX_LIST(index + +searchIndex) === true){continue}

          //#3. [닉네임에 검색어가 포함되어 있지 않다면 다음 단어로 넘어감]
          if(CHECK_INCLUDE_WORD_IN_NICKNAME(tempWord,tempFormSearchList[searchIndex]) ===false){continue}
          
          INPUT_INDEX_TO_DUPLICATED_INDEX_LIST(index)
          INPUT_INDEX_TO_DUPLICATED_INDEX_LIST(index +1 + +searchIndex)
        } 
      }
  }



  
  const unsortedEmailList = RETURN_EMAIL_LIST_WITH_INDEX()
  //[!5]
  const removedDuplicatedEmailList = RETURN_REMOVED_DUPLICATED_EMAIL(unsortedEmailList);
  //[!6]
  const sortedEmailList = RETURN_ASC_EMAIL(removedDuplicatedEmailList);

  return sortedEmailList
}

module.exports = problem6;
