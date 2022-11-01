function problem4(word) {
  var answer="";
  for(var i=0; i<word.length;i++){
    answer+=ascii(word[i]);
  }
  return answer;
}
function ascii(w){
  var wnumber=w.charCodeAt(0);
  var big=true;
  if(97<=wnumber&&wnumber<=122){
    big=false;
    wnumber-=32;
  } 
  switch(wnumber){
    case 65: w="Z"; break;
    case 66: w="Y"; break;
    case 67: w="X"; break;
    case 68: w="W"; break;
    case 69: w="V"; break;
    case 70: w="U"; break;
    case 71: w="T"; break;
    case 72: w="S"; break;
    case 73: w="R"; break;
    case 74: w="Q"; break;
    case 75: w="P"; break;
    case 76: w="O"; break;
    case 77: w="N"; break;
    case 78: w="M"; break;
    case 79: w="L"; break;
    case 80: w="K"; break;
    case 81: w="J"; break;
    case 82: w="I"; break;
    case 83: w="H"; break;
    case 84: w="G"; break;
    case 85: w="F"; break;
    case 86: w="E"; break;
    case 87: w="D"; break;
    case 88: w="C"; break;
    case 89: w="B"; break;
    case 90: w="A"; break;
    default: break;
  }
  if(!big) w=w.toLowerCase();
  return w;
}

module.exports = problem4;
