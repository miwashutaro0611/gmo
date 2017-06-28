/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro
---------------------------------------- */

$(function(){

  // diagnosis.html
  // headerから各問題へスムーズスクロール
  $('a[href^="#"]').on('click', function(){
    // ナビゲーションの色を変える
    $(".question_list").find('li.question_list__item').removeClass('active')
    $(this).parent().addClass('active');

    // 速度
    var speed = 500;
    var $href= $(this).attr("href");
    var target = $($href == "#" || $href == "" ? 'html' : $href);

    // 固定ヘッダーの高さ
    var fixedHeaderHeight = 210;
    var position = target.offset().top - fixedHeaderHeight;

    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false
  });
});
