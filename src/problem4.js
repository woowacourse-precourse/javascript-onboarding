function problem4(word) {
  var answer;

  let check_eng = /[a-zA-Z]/; //알파벳 확인

  //제한 사항
  if(word < 1 || word > 1000){
    return -1;
  } else if(check_eng.test(word) != true){
    console.log("no");
    return -1;
  }

  //대소문자 배열
  const arr_upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const arr_lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  //대소문자 반대 변환 배열
  const re_arr_upper = [...arr_upper].reverse();
  const re_arr_lower = [...arr_lower].reverse();

  //매개변수 배열 변환
  let arr = [...word];
  
  //문자열 변환 계산
  let str = "";

  for(let i = 0; i < arr.length; i++){  //대문자일 때
    if(arr_upper.includes(arr[i])==true){
      str += re_arr_upper[arr_upper.indexOf(arr[i])];
    
    } else if(arr_lower.includes(arr[i])==true){  //소문자일 때
      str += re_arr_lower[arr_lower.indexOf(arr[i])];

    } else if (arr[i] == ' ') {  //공백일 때
      str += arr[i];
    }
  }

  answer = str;
  console.log(str);

  return answer;
}



//테스트케이스
problem4("I love you");


module.exports = problem4;
