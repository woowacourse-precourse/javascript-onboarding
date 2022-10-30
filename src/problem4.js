function problem4(word) {
  //단어를 배열로 변환
  let words = word.split("")

  //ascii_A = 65;
  //ascii_Z = 90;
  //ascii_a = 97;
  //ascii_z = 122;
  //ascii_spacebar = 32;   

  //배열의 해당 문자를 순회하면서 바꾼 후 반환하는 함수
  for(let i=0; i<words.length; i++){
    let ascii = words[i].charCodeAt();
    if(ascii === 32){
      words[i] = String.fromCharCode(ascii);
    }else if(ascii >=65 && ascii <=90){
      words[i] = String.fromCharCode((90 - (ascii - 65)));
    }else{
      words[i] = String.fromCharCode((122 - (ascii - 97)));
    }
  }
  return words.join("");

}

module.exports = problem4;
