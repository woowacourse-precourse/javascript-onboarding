function problem1(pobi, crong) {

    var answer;
    
  
    /**예외사항 */
    if(1 != Math.floor(pobi[1]-pobi[0])) {
      return answer = -1;
    }else if (1 != Math.floor(crong[1] - crong[0])) {
      return answer = -1;
    }
  
    /**pobi 점수 구하기 */
  
    /**왼쪽 Page */
  
    var sumLeftP = 0;
    var multiLeftP = 1;
    var sumRightP = 0;
    var multiRightP = 1;
    do {
      sumLeftP += Math.floor(pobi[0]%10);
      multiLeftP *= Math.floor(pobi[0]%10);
      pobi[0] = Math.floor(pobi[0]/10);
    }while(pobi[0] > 0);
  
    /**오른쪽 Page */
  
    do {
      sumRightP += Math.floor(pobi[1]%10);
      multiRightP *= Math.floor(pobi[1]%10);
      pobi[1] = Math.floor(pobi[1]/10);
    }while(pobi[1]>0);
  
    /**pobi 점수 구하기 */
    var scoreLeftPobi = ( sumLeftP > multiLeftP ) ? sumLeftP : multiLeftP;
    var scoreRightPobi = (sumRightP > multiRightP ) ? multiRightP : multiRightP;
    var fScorePobi = (scoreLeftPobi > scoreRightPobi ) ? scoreLeftPobi : scoreRightPobi;
    
  
    /** crong 점수 구하기  */
  
    /**왼쪽 Page */
  
    var sumLeftC;
    var multiLeftC = 1;
    var sumRightC;
    var multiRightC = 1;
    do {
      sumLeftC += Math.floor(crong[0]%10);
      multiLeftC *= Math.floor(crong[0]%10);
      crong[0] = Math.floor(crong[0]/10);
    } while(crong[0] > 0);
  
    /**오른쪽 Page */
  
    do {
      sumRightC += Math.floor(crong[1]%10);
      multiRightC *= Math.floor(crong[1]%10);
      crong[1] = Math.floor(crong[1]/10);
    }while(crong[1] > 0);
    
  
    /**crong 점수 구하기 */
    var scoreLeftCrong = (sumLeftC > multiLeftC ) ? sumLeftC : multiLeftC;
    var scoreRightCrong = (sumRightC > multiRightC ) ? multiRightC : multiRightC;
    var fScoreCrong = (scoreLeftCrong > scoreRightCrong ) ? scoreLeftCrong : scoreRightCrong;
  
  
  
    /** pobi와 crong의 승부 펼치기*/
    if(fScorePobi>fScoreCrong) {
        return answer = 1;
    } else if(fScorePobi < fScoreCrong) { 
        return answer = 2;
    } else if (fScorePobi == fScoreCrong) {
        return answer = 0;
    } 
  
    
  }
  
  
  module.exports = problem1;