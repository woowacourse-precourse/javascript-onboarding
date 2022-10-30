//문제 2 기능 목록
//1. 문자열에서 '모든' 중복 문자 제거 
//   -> 반복문 이용, 문자열의 어디 부분이 중복인지 알아야 함
//새로운 문자열에 하나씩 저장, 탐색하는 문자가 이전 문자와 같다면 skip!

function deleteDuplicateIndex (string, array) {
  //console.log(string,array);
  const stringArr = Array.from(string);
  //console.log("string to arr: ", stringArr);
  
  for (var i=array.length-1; i>0; i--){
    stringArr.splice(array[i], 1);
    console.log(stringArr);
  }
 
  const deletedStr = stringArr.join("");
  return deletedStr;
}

function checkDuplicate (string){
   var newString = "";
   var indexArray = [];
   for (var i=0; i < string.length; i++){
      if (i==0){
        newString += string[i]
      } else {
        var index = newString.length - 1; // 현재 newString의 맨 마지막 인덱스
        var last = newString[index]; //마지막 원소의 값
        if (last == string[i]){
          indexArray.push(parseInt(index)); 
          continue
        }
        else {
          newString += string[i];
        }
      }
      console.log(newString, indexArray);
      
  }
   newString = deleteDuplicateIndex(newString,indexArray);
   return newString
}

function problem2(cryptogram) {
  var answer;

  answer = checkDuplicate(cryptogram);
  
  return answer;
}
console.log(problem2("browoanoommnaon"))
module.exports = problem2;
