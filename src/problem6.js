/* 기능 목록
* 1. forms에서 닉네임을 두 글자씩 나눠서 이차원 배열(nameTwo)에 저장
* 2. 맵(cntWord)에 나눈 단어의 개수 저장
* 3. 개수가 1인 단어는 cntWord에서 삭제
* 4. 개수가 2이상인 단어가 nameTwo 각 요소에 포함되어 있으면 더이상 없을 때까지 포함된 단어 지우기, 개수 -1
* 5. 다 지웠을 때, cntWord에 저장된 개수값이 1보다 크면 중복문자 배열(duName)에 추가
* 6. nameTwo 요소에 포함된 단어 개수가 요소의 길이보다 길면 duName에 추가
* 7. duName에 있는 닉네임을 가진 크루의 이메일을 찾아서 정렬하기
* 8. 결과 출력
* 9. 코드 정리
*/


function problem6(forms) {
  var nameTwo = [];
  for(var i = 0; i<forms.length; i++){
    var info = forms[i];
    for (var j = 0; j<info[1].length-1; j++){
      if(j == 0){
        nameTwo.push([info[1][j]+info[1][j+1]]);
      }else{
        nameTwo[i].push(info[1][j]+info[1][j+1]);
      }
    }
  }

  var cntWord = new Map();
  
  for (var item of nameTwo){
    for(let i =0; i<item.length; i++){
      if(!cntWord.has(item[i])){
        cntWord.set(item[i],1);
      }else{
        cntWord.set(item[i], cntWord.get(item[i])+1);
      }
    }
  }
  
  for(let [key, value] of cntWord){
    if(value == 1){
      cntWord.delete(key);
    }
  }

  var duName = [];

  for(let [key, value] of cntWord){
    for (var item of nameTwo){
      if (item.includes(key)){
        if(item.includes(key) && item.length< value){
          duName.push(key);
          break;
        }
        let i = 0;
        while(item.includes(key)){
          if(item[i] == key)  {
            item.splice(i, 1);
            value--;
          }else{
            i++;
          }
        }if(value != 0){
          duName.push(key);
          break;
        }
      }
    }
  }

  console.log(duName);
}

module.exports = problem6;
