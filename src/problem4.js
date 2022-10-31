function problem4(word) {


var answer = ''

for(let i of word){
if(i == " "){
  answer += " "

}
else if(i == i.toUpperCase()){
 answer += String.fromCharCode(155 - i.charCodeAt(0))
}
else if(i == i.toLowerCase()){
  answer += String.fromCharCode(219 - i.charCodeAt(0))
}



}
return answer
}
module.exports = problem4;

console.log(problem4("I love you"))