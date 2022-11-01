String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function problem2(cryptogram) {
  var answer = "";
  let Size = cryptogram.length;
  //console.log(cryptogram + " " + Size);
  let cnt = 0;
  let before = '';
  let beforeCnt = 0;
  while (cnt != Size) {
    if (cnt >= Size  ) {
      break;
    }
    else {
     // console.log(before + " " + cryptogram[cnt] + " " + cnt +" "+Size +" : " + cryptogram);
      if (before == cryptogram[cnt] && cnt != Size) {
        let tempcnt=0;
        while (before == cryptogram[cnt]) {
          //console.log("need to delete!");
          tempcnt++;
          cryptogram = cryptogram.replaceAt(cnt, "");
          Size--; 
        //  console.log("After : " + before + " " + cryptogram[cnt] + " " + cnt +" "+ Size + " : " + cryptogram);
          
        }

        cryptogram = cryptogram.replaceAt(cnt-tempcnt, "");
        cnt--;
        Size--;
        before = cryptogram[cnt-tempcnt];

      }
      else {
        before = cryptogram[cnt];
        beforeCnt = cnt;
        cnt++;
      }
    }
  }
  //console.log(cryptogram + " " + Size);
  answer = cryptogram;
  return answer;
}

module.exports = problem2;