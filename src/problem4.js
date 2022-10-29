function problem4(word) {
  var result = [];
  let array_word = [];
  
  let change_alphabet = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];//치환 할 알파벳
  array_word.push(word.toUpperCase());//대문자로 담기 
  array_word = array_word.toString().split("");
  let origin_alphabet = [...change_alphabet];
  origin_alphabet = origin_alphabet.reverse();//원래 알파벳순
  
  
  return convertUpOrLower(//대소문자 올바르게
    afterCovert(
      alpabetIndex(array_word,origin_alphabet),change_alphabet
    ),
    upOrLowerValidate(word)//대소문자검사기
  );
  
}
function alpabetIndex(array_word,origin_alphabet){//alphabet순서대로 담기
  let array_word_index = [];
  let count=0;
  for ( let j=0; j <array_word.length;j++ ){
    if(array_word[j] == " " ){//공백일경우
      array_word_index[count++] = -1;
      continue;
    }
    for (let i = 0; i<origin_alphabet.length;i++) {//알파벳순서대로담는 경우
      if(origin_alphabet[i] == array_word[j]){
        array_word_index[count++] = i;
      }
    }
  }
  return array_word_index;
}
function afterCovert(beforeIndex,change_alphabet){//담은 index를 역순으로 
  result = [];
  count=0;
  for (let i = 0; i < beforeIndex.length; i++){
    if(beforeIndex[i] == -1 ){//공백일경우
      result[count++] = " ";
      continue;
    }
    for(let j = 0; j < change_alphabet.length; j++){
      if(beforeIndex[i]== j){ //전에담은순서 == 알파벳역순서
        result[count++] = change_alphabet[j];//알파벳역순으로 컨버트
      }
    }
  }
  // console.log("afterCovert : ",result);
  return result;
}
function upOrLowerValidate(str){//대소문자 판별
  let answer = [];
  let count = 0;
  for(let x of str){
    if(x == " " ){//공백일경우
      answer[count++] = -1
      continue;
    }
    if(x === x.toUpperCase()){//대문자일경우
      answer[count++] = 1
    }else {//소문자일경우
      answer[count++] = 0
    }
  }
  return answer;
}

function convertUpOrLower(alpabet,apindex){
    let result = [];
    let count = 0;
    console.log("1",alpabet);
    console.log("2",apindex);

    for(let i=0; i < alpabet.length;i++ ){
      if(apindex[i] == 1 ){ //공백 -1, 대문자 1, 소문자 0
        result[count++] = alpabet[i].toUpperCase();
      }else if(apindex[i] == 0 ){ 
        result[count++] = alpabet[i].toLowerCase();
      }else if(apindex[i] == -1 ){
        result[count++] = " ";
      } 
    }
    result = result.join("");
    return result;
}
// let input = [
//   "I love you"
// ];
// for (let i = 0; i < input.length; i++) {
//   console.log(`#${i + 1} ${problem4(input[i])}`);
// }
module.exports = problem4;