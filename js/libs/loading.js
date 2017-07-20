/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro

-- ローディングアニメーションjs
---------------------------------------- */

//文字タイピング
var id = ['typing1','typing2']; //指定するidを全て配列で渡す
var tx = [];
var txCount = [];
var txSp = 100; // テキストの表示速度
var dly = 500; // 次の文章までの待ち時間
var count = 0;

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
    $('h1').css('opacity','0');
    setTimeout(typing_animetion,1500);
  });
});

function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

//h1タイピングアニメーション
function typing_animetion(){
  $('h1').css('opacity','1');
  kamikakushi();
  countSet();
  itimozi();
  setTimeout(content_animetion,4000);
}

//メインビジュアルアニメーション
function content_animetion() {
  $(".header__image").animate({
    right:"1%",
    opacity:1
  },1500,"easeInOutQuint");
  setTimeout(start_btn_animetion,1000);
}

//診断ボタンアニメーション
function start_btn_animetion() {
  $(".diagnosis_start").addClass('start_btn_active');
}

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}


function kamikakushi(){ // 要素を取得して非表示（opacity:0;）にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
    id[i].innerHTML = '';
  }
}

function itimozi(){ //　一文字ずつ表示
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] )+"_"; // テキストの指定した数の間の要素を表示
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout("itimozi()",txSp); // 次の文字へ進む
  }else{
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count] ); // テキストの指定した数の間の要素を表示
    count++; // 次の段落に進む為のカウントアップ
    if(count != id.length){ // id数が最後なら終了
    setTimeout("itimozi()",dly); // 次の段落へ進む
    }
  }
}
