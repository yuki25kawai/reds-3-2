$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".header-nav").toggleClass('panelactive');
});
$(".header-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});