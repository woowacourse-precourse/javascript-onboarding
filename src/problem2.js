function problem2(cryptogram) {
  let isRepeat = false
  let char_arr = [...cryptogram]
  let next_arr = []
  do{
    if(char_arr.length == 1){
      return char_arr.join('')
    }
    let prevChar = char_arr[0]
    char_arr = char_arr.slice(1)
    let nowRepeat = false
    isRepeat = false
    
    //반복 제거하며 next 만들기
    char_arr.forEach(element => {
      if(element == prevChar){
        nowRepeat = true
        isRepeat = true
      }
      if(element != prevChar){
        if(!nowRepeat){
          next_arr.push(prevChar)
        }
        else{
          nowRepeat = false
        }
      }      
      prevChar = element
    });

    //마지막 문자 체크 후 추가
    if(! nowRepeat){
      next_arr.push(char_arr[char_arr.length -1])
    }

    //갱신
    char_arr = next_arr
    next_arr = []
  } while(isRepeat)

  return char_arr.join('');
}


module.exports = problem2;
