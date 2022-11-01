class Decoder {
  constructor(string) {
    this.input = string
    let strArr = [...string];

    let decodeLog = [];
    strArr.forEach((x, i, a) => {
      let n = a.length - i;
      if (n > 1) {
        strArr.forEach((y, j, b) => {
          string = string.replace(y.repeat(n), '');
          decodeLog.push(string)
        })
      }
    })
    this.log = [...new Set(decodeLog)];
    // console.log(this.log)
    this.result = this.log[this.log.length - 1];
  }
  lengthChecker(arr, min, max) {
    if (arr.length >= min && arr.length <= max) {
      return true
    }
    else {
      // alert(`'${a}' length error: only ${min}~${max} characters allowed.`);
      return false
    }
  }
  lngChecker(str, lng) {
    let regExp;
    if (lng === 'ko' || lng === 'KO') {
      regExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi;
    }
    else if (lng === 'eN' || lng === 'En') {
      regExp = /[a-z]/gi;
    }
    else if (lng === 'en') {
      regExp = /[a-z]/g;
    }
    else if (lng === 'EN') {
      regExp = /[A-Z]/g;
    }

    if (str.replace(regExp, '').length === 0) {
      return true
    }
    else {
      // alert(`'${str}' language error: only '${lng}' allowed.`)
      return false
    }
  }
  get valid() {
    let length = this.lengthChecker(this.input, 1, 1000);
    let lng = this.lngChecker(this.input, 'en');
    if (length && lng) {
      return true
    }
    else {
      return false
    }
  }
}

function problem2(cryptogram) {
  var answer;

  const decodeInfo = new Decoder(cryptogram);
  if (decodeInfo.valid) {
    answer = decodeInfo.result;
  }
  else {
    answer = 'invalid input';
  }

  return answer;
}

module.exports = problem2;
