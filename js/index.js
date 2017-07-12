/* ----------------------------------------
fileName : main.js
writer   : Daichi Seki, Miwa Shuntaro

-- トップページ用(index.html)js
---------------------------------------- */
//変数
//横幅
var width=window.innerWidth;
//縦幅

$(function(){
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
        //テスト
        console.log('imgPosの出力 : %s', imgPos);
        console.log('scrollの出力 : %s', scroll);
        console.log('windowHeightの出力 : %s', windowHeight);
        console.log('計算結果の出力s : %s', imgPos + windowHeight * 0.42);
        console.log('計算結果の出力g : %s', imgPos + windowHeight * 2.8);
    });
});
