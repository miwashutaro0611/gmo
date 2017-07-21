/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro

-- トップページ用(index.html)js
---------------------------------------- */
//変数
//横幅
var width=window.innerWidth;

$(function(){
  //スクロールしたら
  $(window).scroll(function (){
        //要素の高さ
        var imgPos = $("#description").offset().top;
        //スクロールした量
        var scroll = $(window).scrollTop();
        //高さ
        var windowHeight = $(window).height();
        if (scroll > imgPos + windowHeight * 0.42 && scroll < imgPos + windowHeight * 2.42) {
          //クラスを付加
          $("#description").find(".text").addClass('back_move');
          //クラスを消去
          $("#description").find(".text").removeClass('back_remove');
        }else{
          //クラスを付加
          $("#description").find(".text").addClass('back_remove');
          //クラスを消去
          $("#description").find(".text").removeClass('back_move');
        }
    });
    //スクロールアニメーション1
    $('.list-mv').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('mv');
    	}
    });
    //スクロールアニメーション2
    $('.buruburu_start').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('buruburu');
    	}else{
        $(this).removeClass('buruburu');
      }
    });
    //スクロールアニメーション3
    $('.enlargeme_start').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('enlargeme');
    	}else{
        $(this).removeClass('enlargeme');
      }
    });
    //スクロールアニメーション4
    $('.conoha_down_start').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('conoha_down');
    	}else{
        $(this).removeClass('conoha_down');
      }
    });
    //スクロールアニメーション5
    $('.yurayura_start').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('yurayura');
    	}else{
        $(this).removeClass('yurayura');
      }
    });
    //スクロールアニメーション6
    $('.conoha_up_start').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    	if(isInView){
    		$(this).stop().addClass('conoha_up');
    	}else{
        $(this).removeClass('conoha_up');
      }
    });
});
