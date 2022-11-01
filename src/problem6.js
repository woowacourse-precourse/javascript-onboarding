function problem6(forms) {
  var answer;
  return answer;
}
function mailName(mail) {
  var answer;
  var m = mail.join().split(",");
  var name = [];
  var ma = [];
  for(var x of m) {
    if(String(x).includes('@') === false) {
      name.push(x);
    }else {
      ma.push(x);
    }
  }
  console.log(name, ma);
  return name;
}

function vs(n) {
  
}

//console.log(problem6(F));
console.log(mailName([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]));
//module.exports = problem6;