//無限にループ
$(function(){
$("body").height($(document).height());　$(window).scroll(function() {
if
($(window).scrollTop() >= ($("body").height() - $(window).height())) {　$(window).scrollTop(1);}
else if
($(window).scrollTop() == 0) {　$(window).scrollTop($("body").height() - $(window).height() - 1);}});
});
