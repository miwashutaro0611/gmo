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


  // checkboxを複数選択不可に
  $('.checkbox').on('click', function(){
    // クリックした要素のname属性を取得し格納
    var attr_name = $(this).attr('name');
    $('.checkbox[name="'+attr_name+'"]').prop('checked', false);
    $(this).prop('checked', true);
  });
});
