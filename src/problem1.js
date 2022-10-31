function problem1(pobi, crong) {
  var answer;
  var pobiadd_left, pobiadd_right, pobiadd, pobimultiple_left, pobimultiple_right, pobimultiple; 
  var crongadd_left, crongadd_right, crongadd, crongmultiple_left, crongmultiple_right, crongmultiple;
  var pobipoint, crongpoint;


    //pobiadd_left 구하기
     var digits = pobi[0].toString().split('');
     pobiadd_left = 0;
     for(i = 0; i < digits.length ; i++){
        pobiadd_left += parseInt(digits[i]);
     }


     //pobiadd_right 구하기
     digits = pobi[1].toString().split('');
     pobiadd_right =0;
     for(i = 0; i < digits.length ; i++){
      pobiadd_right += parseInt(digits[i]);
     }

     pobiadd = Math.max(pobiadd_left, pobiadd_right)

     //pobimultiple구하기
     digits = pobi[0].toString().split('');
     pobimultiple_left = 1;
     for(i = 0; i < digits.length; i++){
      pobimultiple_left *= parseInt(digits[i]);
     }

     digits = pobi[1].toString().split('');
     pobimultiple_right = 1;
     for(i = 0; i < digits.length; i++){
      pobimultiple_right *= parseInt(digits[i]);
     }

     pobimultiple = Math.max(pobimultiple_left, pobimultiple_right)

     //crongadd구하기
     digits = crong[0].toString().split('');
     crongadd_left = 0;
     for(i = 0; i < digits.length; i++){
        crongadd_left += parseInt(digits[i]);
     }

     digits = crong[1].toString().split('');
     crongadd_right = 0;
     for(i = 0; i < digits.length; i++){
      crongadd_right += parseInt(digits[i]);
     }

     crongadd = Math.max(crongadd_left, crongadd_right);

    //crongmultiple구하기
    digits = crong[0].toString().split('');
    crongmultiple_left = 1;
    for(i = 0; i < digits.length; i++){
      crongmultiple_left *= parseInt(digits[i]);
    }

    digits = crong[1].toString().split('');
    crongmultiple_right = 1;
    for(i = 0; i < digits.length; i++){
      crongmultiple_right *= parseInt(digits[i]);
    }

    crongmultiple = Math.max(crongmultiple_left, crongmultiple_right);

    pobipoint = Math.max(pobiadd, pobimultiple);
    crongpoint = Math.max(crongadd, crongmultiple);

    if (pobipoint>crongpoint){
        answer = 1;
    }
    else if (pobipoint<crongpoint){
        answer = 2;
    }
    else if (pobipoint == crongpoint){
      answer = 0
    }
    
    //예외 체크
    if (pobi[0]+1 != pobi[1]){
      answer = -1 
    }

    if (crong[0]+1 != crong[1]){
      answer = -1 
    }

    if (pobi[1]>400){
      answer = -1 
    }

    if (crong[1]>400){
      answer = -1 
    }

    if (pobi[0]<0){
      answer = -1
    }

    if (crong[0]<0){
      answer = -1
    }

    return answer;
  }

module.exports = problem1;
