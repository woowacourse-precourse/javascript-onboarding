function problem5(money) {
  var answer;

  let won50000;
  let won10000;
  let won5000;
  let won1000;
  let won500;
  let won100;
  let won50;
  let won10;
  let won1;
  let temp_change;
  
  won50000 = parseInt(money / 50000);
  temp_change =  money % 50000;

  won10000 = parseInt(temp_change / 10000);
  temp_change =  temp_change % 10000;

  won5000 = parseInt(temp_change / 5000);
  temp_change =  temp_change % 5000;

  won1000 = parseInt(temp_change / 1000);
  temp_change =  temp_change % 1000;

  won500 = parseInt(temp_change / 500);
  temp_change =  temp_change % 500;

  won100 = parseInt(temp_change / 100);
  temp_change =  temp_change % 100;

  won50 = parseInt(temp_change / 50);
  temp_change =  temp_change % 50;

  won10 = parseInt(temp_change / 10);
  temp_change =  temp_change % 10;

  won1 = temp_change;

  answer = [won50000, won10000, won5000, won1000, won500, won100, won50, won10, won1];

  return answer;
}
// document.write(problem5(15000));


module.exports = problem5;
