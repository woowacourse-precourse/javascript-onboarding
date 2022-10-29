function problem5(money) {



  //특이사항
  //!1. money는 1이상 1,000,000 이하인 자연수

  function CHECK_NUMBER_BETWEEN_ONE_TO_MILLION (number){
    if(number < 1 || number > 1000000){
      return false;
    } return true;
  }

  if(CHECK_NUMBER_BETWEEN_ONE_TO_MILLION(money) === false){
    return "money가 1미만, 1,000,000초과 입니다."
  }


  //필요변수
  //&1. 돈이 저장될 객체(지갑)

  const WALLET_OBJ = {
    "50000":0,
    "10000":0,
    "5000":0,
    "1000":0,
    "500":0,
    "100":0,
    "50":0,
    "10":0,
    "1":0
  }

  //필요함수
  //#1. 주어진 돈을 금액별로 지갑에 넣는 함수

  function INPUT_MONEY_TO_WALLET_OBJ(number) {

    let temp_money = number;

    WALLET_OBJ[50000] = Math.floor(temp_money/50000);
    temp_money = temp_money%50000;

    WALLET_OBJ[10000] = Math.floor(temp_money/10000);
    temp_money = temp_money%10000;

    WALLET_OBJ[5000] = Math.floor(temp_money/5000);
    temp_money = temp_money%5000;
    
    WALLET_OBJ[1000] = Math.floor(temp_money/1000);
    temp_money = temp_money%1000;

    WALLET_OBJ[500] = Math.floor(temp_money/500);
    temp_money = temp_money%500;

    WALLET_OBJ[100] = Math.floor(temp_money/100);
    temp_money = temp_money%100;

    WALLET_OBJ[50] = Math.floor(temp_money/50);
    temp_money = temp_money%50;

    WALLET_OBJ[10] = Math.floor(temp_money/10);
    temp_money = temp_money%10;

    WALLET_OBJ[1] = Math.floor(temp_money/1);
    temp_money = temp_money%1;
  }

  //#2. 지갑을 배열로 반환하는 함수

  function RETURN_WALLET_MONEY_LIST(walletObj) {
    return (Object.values(walletObj)).reverse()

  }


  INPUT_MONEY_TO_WALLET_OBJ(money)
  return RETURN_WALLET_MONEY_LIST(WALLET_OBJ)

}

module.exports = problem5;
