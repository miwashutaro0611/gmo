/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro

-- 質問用(diagnosis.html)js
---------------------------------------- */

$(function(){
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
    if(count === 0){
      return false;
    }else{
      if($('.checked_count').length !== 0){
        $('.checked_count').text(8-count);
      }else{
        var str = '<div class="checked_count">'+(8-count)+'</div>';
        $('.diagnosis_wrap').append(str);
      }
    }
  }
});
