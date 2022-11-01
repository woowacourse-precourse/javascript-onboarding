function problem4(word) {
  var answer="";
  for (let i = 0; i < word.length; i++) {
    if(word[i]==" "){
      answer+=" ";
      continue;
    }
    let temp1 = word.charAt(i);
    if (temp1 == temp1.toUpperCase()) {
      let num = word.charCodeAt(i) - 65;
      //console.log(num);
      num = 25-num;
      let changednum = 65 +num;
      let strnum = String.fromCharCode(changednum);
     // console.log("changed : " +num + " " + strnum);
      answer+=strnum;
    }
    else if(temp1 == temp1.toLowerCase()){
      let num = word.charCodeAt(i) - 97;
     // console.log(num);
      num = 25-num;
      let changednum = 97 +num;
      let strnum = String.fromCharCode(changednum);
     // console.log("changed : " +num + " " + strnum);
      answer+=strnum;
    }
  }
 // console.log(answer);
  return answer;
}

module.exports = problem4;
