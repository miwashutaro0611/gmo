/* ----------------------------------------
fileName : result.js
writer   : Daichi Seki, Miwa Shuntaro

-- 結果表示用(result.html)js
---------------------------------------- */

$(function(){
  var sessionArr = getSessionStorage();
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
