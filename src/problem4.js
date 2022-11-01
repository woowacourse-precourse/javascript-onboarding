function problem4(word) {
  var answer;

  var word_list=word.split("")

  for(var i=0;i<word.length;i++){
    var asci=word.charCodeAt([i]);
    
    if(asci<=90&&asci>=65){
      if(asci<=77){
        asci=asci+(78-asci)*2-1
        word_list[i]=String.fromCharCode([asci]);
      }
      else if(asci>=78){
        asci=asci-(asci-77)*2+1
        word_list[i]=String.fromCharCode([asci]);
      }

    }
    else if(asci>=97&&asci<=122){
      if(asci<=109){
        asci=asci+(110-asci)*2-1
        word_list[i]=String.fromCharCode([asci]);
      }
      else if(asci>=110){
        asci=asci-(asci-109)*2+1
        word_list[i]=String.fromCharCode([asci]);
      }

    }
  }
  answer=word_list.join('')
  return answer;
}

console.log(problem4('I love you'))
module.exports = problem4;
