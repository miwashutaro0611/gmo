/* ----------------------------------------
fileName : diagnosis.js
writer   : Daichi Seki, Miwa Shuntaro

-- 質問用(diagnosis.html)js
---------------------------------------- */

// グローバルに宣言
var setTimeoutId = null;
var sectionTopArray = new Array();

$(function(){

  // 各sectionの位置を格納
  for(var i=1; i<9; i++){
    var str = i+"th";
    var scrollTop = getContentScrollTop("#"+str);
    sectionTopArray.push(scrollTop);
  }


  // diagnosis.html
  // headerから各問題へスムーズスクロール
  $('a[href^="#"]').on('click', function(){
    // ナビゲーションの色を変える
    $(".question_list").find('li.question_list__item').removeClass('active')
    // 親要素のliに.activeを付与
    $(this).parent().addClass('active');
    // このはちゃんの画像を非表示に
    $(".question_list").find('li.question_list__item img.image').removeClass('active');
    // クリックした要素にこのはちゃんを表示
    $(this).find('img.image').addClass('active');

    // 速度
    var speed = 1500;
    var $href= $(this).attr("href");
    var target = $($href == "#" || $href == "" ? 'html' : $href);

    // 固定ヘッダーの高さ
    var fixedHeaderHeight = 210;
    var position = target.offset().top - fixedHeaderHeight;

    $("html, body").animate({scrollTop:position}, speed, "easeInOutCirc");
    return false
  });


  /* -------------------------------------------------- */
  // checkboxを複数選択不可に
  $('.checkbox').on('click', function(){
    // クリックした要素のname属性を取得し格納
    var attrName = $(this).attr('name');
    $('.checkbox[name="'+attrName+'"]').prop('checked', false);
    $(this).prop('checked', true);

    var count = checkedBoxCount();
    checkedBoxCountDisp(count);
  });


  /* -------------------------------------------------- */
  // 残りの診断問数を表示する領域をクリックした際
  $(document).on('click', '.checked_count', function(){
    var count = checkedBoxCount();
    if(count == 8){
      // セッションストレージへ格納
      var sessionArr = setSessionStorage();
      window.location.href = '/result.html';
    }else{
      alert("全て選ばれていませんご！！！！")
    }
  });
});
// onload以上
/* -------------------------------------------------- */



/* -------------------------------------------------- */
// スクロールした際に固定ヘッダーのこのはちゃんを移動
// スクロールイベントを設定
window.addEventListener("scroll",function(){
  // setTimeoutIdの内容がある場合は、setTimeoutをキャンセル
  if(setTimeoutId){
    clearTimeout(setTimeoutId);
  }

  // 新しくsetTimeoutイベントを設定
  setTimeoutId = setTimeout(function(){
    // スクロール終了時の処理内容
    var nowScrollTop = $(this).scrollTop();
    var index = getApproximation(sectionTopArray,nowScrollTop);
    console.log(index);
    moveHeaderConoha(index);
    // setTimeoutIdを空にする
    setTimeoutId = null;
  },100);
});


/* -------------------------------------------------- */
// チェック済みの設問の数を格納する
function checkedBoxCount(){
  var count = 0;
  for(var i=1; i<9; i++){
    count += $('[name="'+i+'th_check"]:checked').length;
  }
  return count;
}


/* -------------------------------------------------- */
// 未チェックの設問数を画面右下に表示
function checkedBoxCountDisp(count){
  if(count == 8){
    //return false;
    $('.checked_count').empty().html('<span class="result_go">診断結果へ</span>');
    $('.checked_count').addClass('animated');

  }else{
    if($('.checked_count').length !== 0){
      $('.checked_count .num').text(8-count);
    }else{
      var str = '<div class="checked_count bound_balloon"><span class="num">'+(8-count)+'</span></div>';
      $('.diagnosis_wrap').append(str);
    }
  }
}


/* -------------------------------------------------- */
// 要素の上部スクロール位置を取得
function getContentScrollTop(content){
  // .scrollTop()が効かない??
  $contentScrollTop = $(content).offset().top;
  return $contentScrollTop;
}


/* -------------------------------------------------- */
// 配列の中から近似値を取得
// 引数 : (配列,現在のスクロール量(任意の数値でも))
function getApproximation (array, target) {
  var l = array.length;
  if (l < 1) {
    return -1;
  }
  var
    i = 0,
    approximationIndex = 0,
    minDiff = Math.abs(array[0] - target),
    diff;

  while (++i < l) {
    diff = Math.abs(array[i] - target);
    if (diff < minDiff) {
      minDiff = diff;
      approximationIndex = i;
    }
  }
  return approximationIndex+1;
}


/* -------------------------------------------------- */
// 固定ヘッダーのこのはちゃんを移動(スクロールに応じて)
function moveHeaderConoha(index){
  // ナビゲーションの色を変える
  $(".question_list").find('li.question_list__item').removeClass('active')
  // 親要素のliに.activeを付与
  $("a[href='#"+index+"th']").parent().addClass('active');
  // このはちゃんの画像を非表示に
  $(".question_list").find('li.question_list__item img.image').removeClass('active');
  // クリックした要素にこのはちゃんを表示
  $("a[href='#"+index+"th']").find('img.image').addClass('active');
}


/* -------------------------------------------------- */
// 選択した選択肢の内容をローカルストレージに格納
function setSessionStorage(){
  var sessionArr = new Array();
  var loopCount = 1;
  $("div.diagnosis_wrap__item").each(function(){
    var value = $(this).find('.question__choice input[name="'+loopCount+'th_check"]:checked').val();
    sessionArr.push(value);
    loopCount++;
  });

  var str = sessionArr.toString();
  sessionStorage.setItem('choice_info', str);

  return true;
}


/* -------------------------------------------------- */
// result.html
// ローカルストレージからデータを取得し配列へ
function getSessionStorage(){
  var sessionArr = new Array();
  sessionArr = sessionStorage.getItem('choice_info').split(',');

  return sessionArr;
}
