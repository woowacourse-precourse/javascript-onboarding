function problem2(cryptogram) {
  var answer;
  var check=true;
  var str;
  var list = cryptogram;

  while(check) {
    check = false;
    str = [...list];
    for (let i=0; list.length-1>i; i++) {
      if (list[i] === list[i+1]) {
        str.splice(i, 2);
        list = [...str];
        check = true;
        continue;
      }
    }
    list = [...str];
  }
  answer = list.toString().replace(/,/g, "");

  return answer;
}

module.exports = problem2;
