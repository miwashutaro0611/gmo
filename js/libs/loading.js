/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro

-- ローディングアニメーションjs
---------------------------------------- */

$(function(){
  //10秒たったら強制的にロード画面を非表示
  setTimeout('stopload()',10000);
  //コンテンツ非表示・ローディング画面表示
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').css('display','block');

  $(window).load(function () { //全ての読み込みが完了したら実行
    //フェードアウトしていくようにする
    $('#loader-bg').delay(1200).fadeOut(1800);
    $('#loader').delay(900).fadeOut(1500);
    //コンテンツの表示
    $('#wrap').css('display', 'block');
  });
});

function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
