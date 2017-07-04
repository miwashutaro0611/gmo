/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro
---------------------------------------- */
// //トップページheaderの高さ
// var $header__height = $('.header_wrapp').outerWidth(true);
// //ウィンドウの高さ
// var $window__height=window.innerHeight;
//
// alert($header__height);
$(function(){

  // $("body").height($(document).height() -  + $window__height);　$(window).scroll(function() {
  // if
  // ($(window).scrollTop() >= ($("body").height() - $(window).height())) {　$(window).scrollTop(1);}
  // else if
  // ($(window).scrollTop() == 0) {　$(window).scrollTop($("body").height() - $(window).height() - 1);}});

  // diagnosis.html
  // headerから各問題へスムーズスクロール
  $('a[href^="#"]').on('click', function(){
    // ナビゲーションの色を変える
    $(".question_list").find('li.question_list__item').removeClass('active')
    $(this).parent().addClass('active');

    // 速度
    var speed = 1000;
    var $href= $(this).attr("href");
    var target = $($href == "#" || $href == "" ? 'html' : $href);

    // 固定ヘッダーの高さ
    var fixedHeaderHeight = 210;
    var position = target.offset().top - fixedHeaderHeight;

    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false
  });
});
