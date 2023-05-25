//ドロワーメニューの利用宣言
$(document).ready(function() {
    $('.drawer').drawer();
});

//wowの初期化
new WOW().init();

//スムーススクロール
$(function() {
    $('a[href^="#"]').click(function() {
      const speed = 600;
      let header = $('.header').innerHeight();
      let href = $(this).attr("href");
      let target = $(href == "#" ? "html" : href);
      // target = $(href);
      let position = target.offset().top - header;
      $('html,body').animate({scrollTop: position }, speed, "swing");
      return false;
    });
});

//Contactフォームボタン
$(function() {
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-form input[type="checkbox"]').prop('checked') === true
    ) {
      $submit.addClass('active')
      $submit.prop('disabled', false)
    } else {
      $submit.removeClass('active')
      $submit.prop('disabled', true)
    }
  })
});










