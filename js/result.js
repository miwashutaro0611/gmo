/* ----------------------------------------
fileName : result.js
writer   : Daichi Seki, Miwa Shuntaro

-- 結果表示用(result.html)js
---------------------------------------- */

$(function(){
  var sessionArr = getSessionStorage();

  // プランの番号を格納
  var planFlag = checkPlan(sessionArr);
  getPlanJson(planFlag);
});
// onload以上
/* -------------------------------------------------- */


/* -------------------------------------------------- */
// result.html
// ローカルストレージからデータを取得し配列へ
function getSessionStorage(){
  var sessionArr = new Array();
  sessionArr = sessionStorage.getItem('choice_info').split(',');

  return sessionArr;
}


/* -------------------------------------------------- */
// 選択した情報からプランを決定する
function checkPlan(sessionArr){
  var planFlag;
  // Q1で「日本(1)」を選択
  if(sessionArr[0] == 1){

    // Q2で「個人(1)」を選択
    if(sessionArr[1] == 1){

      // Q3で「1」を選択
      if(sessionArr[2] == 1){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 2;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 3;

          // Q5で「3」を選択
          }else{
            planFlag = 5;
          }
        // Q4で「2」を選択
        }else{
          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 1;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 3;

          // Q5で「3」を選択
          }else{
            planFlag = 5;
          }
        }

      // Q3で「2」を選択
      }else if(sessionArr[2] == 2){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 4;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 5;

          // Q5で「3」を選択
          }else{
            planFlag = 6;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 4;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 5;

          // Q5で「3」を選択
          }else{
            planFlag = 6;
          }
        }
      // Q3で「3」を選択
      }else{

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 4;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 5;

          // Q5で「3」を選択
          }else{
            planFlag = 6;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 4;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 5;

          // Q5で「3」を選択
          }else{
            planFlag = 6;
          }
        }
      }
    // Q2で「企業(2)」を選択
    }else{

      // Q3で「1」を選択
      if(sessionArr[2] == 1){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 5;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 6;

          // Q5で「3」を選択
          }else{
            planFlag = 7;
          }
        // Q4で「2」を選択
        }else{
          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 5;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 6;

          // Q5で「3」を選択
          }else{
            planFlag = 7;
          }
        }

      // Q3で「2」を選択
      }else if(sessionArr[2] == 2){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 6;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 7;

          // Q5で「3」を選択
          }else{
            planFlag = 8;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 6;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 7;

          // Q5で「3」を選択
          }else{
            planFlag = 8;
          }
        }
      // Q3で「3」を選択
      }else{

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 6;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 7;

          // Q5で「3」を選択
          }else{
            planFlag = 8;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 6;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 7;

          // Q5で「3」を選択
          }else{
            planFlag = 8;
          }
        }
      }
    }

  // Q1で「アメリカ(2)・シンガポール(3)」を選択
  }else{
    // Q2で「個人(1)」を選択
    if(sessionArr[1] == 1){

      // Q3で「1」を選択
      if(sessionArr[2] == 1){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 10;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 11;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        // Q4で「2」を選択
        }else{
          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 10;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 11;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        }

      // Q3で「2」を選択
      }else if(sessionArr[2] == 2){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 11;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 12;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 11;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 12;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        }
      // Q3で「3」を選択
      }else{

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 11;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 12;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 11;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 12;

          // Q5で「3」を選択
          }else{
            planFlag = 13;
          }
        }
      }
    // Q2で「企業(2)」を選択
    }else{

      // Q3で「1」を選択
      if(sessionArr[2] == 1){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 12;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 13;

          // Q5で「3」を選択
          }else{
            planFlag = 14;
          }
        // Q4で「2」を選択
        }else{
          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 12;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 13;

          // Q5で「3」を選択
          }else{
            planFlag = 14;
          }
        }

      // Q3で「2」を選択
      }else if(sessionArr[2] == 2){

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 13;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 14;

          // Q5で「3」を選択
          }else{
            planFlag = 15;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 13;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 14;

          // Q5で「3」を選択
          }else{
            planFlag = 15;
          }
        }
      // Q3で「3」を選択
      }else{

        // Q4で「1」を選択
        if(sessionArr[3] == 1){

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 13;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 14;

          // Q5で「3」を選択
          }else{
            planFlag = 15;
          }
        // Q4で「2」を選択
        }else{

          // Q5で「1」を選択
          if(sessionArr[4] == 1){
            planFlag = 13;

          // Q5で「2」を選択
          }else if(sessionArr[4] == 2){
            planFlag = 14;

          // Q5で「3」を選択
          }else{
            planFlag = 15;
          }
        }
      }
    }
  }

  return planFlag;
}


/* -------------------------------------------------- */
// jsonを読み込みプランを確定
function getPlanJson(flag){
  var planInfoArr = new Array();

  $.getJSON("./js/plan.json", function(data){
    $(data.plan[flag]).each(function(){
      $('.plan__item__main--01').text(data.plan[flag].memory);
      $('.plan__item__main--02').text(data.plan[flag].cpu);
      $('.plan__item__main--03').text(data.plan[flag].ssd);
      $('.plan__item__main--04').text(data.plan[flag].month2 +"円/月");
      $('.plan__item__main--05').text(data.plan[flag].hour2 +"円/時");

      return planInfoArr;
    });
  });
}
