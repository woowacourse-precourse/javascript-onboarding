function problem6(forms) {

  //필요변수
  //&1. 검사한 단어가 저장되는 배열
  const SEARCHED_WORD_LIST = [];
  //&2. 중복된 [이메일,이름]의 인덱스가 저장되는 배열
  const DUPLICATED_INDEX_LIST = [];
  //&3. 중복된 이름을 가진 이메일 배열
  const DUPLICATED_EMAIL_LIST = [];

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


  //특이사항
  //!1. 이메일의 전체 길이는 11자 이상 20자 미만
  //!2. 신청할수 있는 이메일의 도메인은 email.com으로 제한
  //!3. 닉네임은 한글만 가능
  //!4. 닉네임의 전체 길이는 1자 이상, 20자 미만
  //!5. 결과값은 오름차순으로 정렬
  //!6. 결과값의 중복된 내용은 제거


  const inputForms = forms.slice()

  for(let index in inputForms){

    if(CHECK_INCLUDE_INDEX_IN_DUPLICATED_INDEX_LIST(+index) === false){
      
      const tempWordList = RETURN_SEARCH_WORD_LIST_FROM_NICKNAME(inputForms[index][1]);
      const tempFormSearchList = inputForms.slice(+index+1).map(form => form[1]);
      for(let tempWord of tempWordList){
  
        if(CHECK_INCLUDE_WORD_IN_SEARCHED_WORD_LIST(tempWord) === false){
          
          INPUT_WORD_TO_SEARCHED_WORD_LIST(tempWord)
  
          for(let searchIndex in tempFormSearchList){
            

            if(CHECK_INCLUDE_INDEX_IN_DUPLICATED_INDEX_LIST(+index + +searchIndex) === false){
              if(CHECK_INCLUDE_WORD_IN_NICKNAME(tempWord,tempFormSearchList[searchIndex]) === true){

                INPUT_INDEX_TO_DUPLICATED_INDEX_LIST(+index)
                INPUT_INDEX_TO_DUPLICATED_INDEX_LIST(+index +1 + +searchIndex)
                
              }

            }

          }
        } 
      }
    }
  }

  
  return RETURN_EMAIL_LIST_WITH_INDEX()
}

module.exports = problem6;
