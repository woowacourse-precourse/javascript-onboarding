function problem4(word) {
  var answer="";
  // var word = convertUL(word); -> 나중에 나오는거임
  console.log(word);
  for (let i=0;i<word.length;i++){
    let ascii = word.charCodeAt(i);
    let cov_ascii;
    let cov_str;
    if ((ascii>=65 && ascii<=90)){ //대문자라면
      if (ascii<78){
        cov_ascii=ascii+25-((ascii-65)*2);
      }else{
        cov_ascii=ascii-((ascii-78)*2+1);
      }
      cov_str=String.fromCharCode(cov_ascii);
      answer+=cov_str;
    }
    else if ((ascii>=97 && ascii<=122)){ //소문자라면
      if (ascii<110){
        cov_ascii=ascii+25-((ascii-97)*2);
      }else{
        cov_ascii=ascii-((ascii-110)*2+1);
      }
      cov_str=String.fromCharCode(cov_ascii);
      answer+=cov_str;
    }
    else{
      answer+=" ";
    }
    console.log(cov_ascii);
  }
  
  console.log(answer);
  return answer;
}


module.exports = problem4;
