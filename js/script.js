//スティッキーヘッダー
// $(function(){
//     var $win = $(window),
//         $fv = $('.fv'),
//         $header = $('header'),
//         fvHeight = $fv.outerHeight();
//         fixedClass = 'fixed';
    
//     $win.on('load scroll',function(){
//         var value = $(this).scrollTop();
//         if($win.width() > 768){
//             if(value > fvHeight){
//                 $header.addClass(fixedClass);
//             }else{
//                 $header.removeClass(fixedClass);
//             }
//         }
//     });
// });


var _window = $(window),
    _header = $('.header-inner'),
    _headerMain = $('.header-ttl-tx'),
    _headerNav = $('.nav-item-tx'),
    _headerNavLi = $('.nav-item-text'),
    _headerTtl = $('.header-ttl'),
    _navItem = $('.nav-item'),
    fvBottom;
 
_window.on('scroll',function(){
    fvBottom = $('.fv').height() -100;
    if(_window.scrollTop() > fvBottom){
        _header.addClass('transform');
        _headerMain.addClass('nt'); 
        _headerNav.addClass('nt');
        _headerNavLi.addClass('tf');
        _headerTtl.addClass('tf');
        _navItem.addClass('cha');
    }
    else{
        _header.removeClass('transform');
        _headerMain.removeClass('nt');
        _headerNav.removeClass('nt');
        _headerNavLi.removeClass('tf');
        _headerTtl.removeClass('tf');
        _navItem.removeClass('cha');
    }
});
 
_window.trigger('scroll');




// $(function(){
//     $("a[href^=#]").click(function(){
//         var target = $($(this).attr("href")).offset().top;
//         target -= 40;
//         $("html, body").animate({scrollTop: target}, 500);
//         return false;
//     });
// });

// イージング関数
var Ease = {
    easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
  }
  
  // アニメーションの Duration の設定
  var duration = 500;
  
  window.addEventListener('DOMContentLoaded', () => {
  
    // スムーススクロールのトリガーを取得
    var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
  
    smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
  
      // トリガーをクリックした時に実行
      smoothScrollTrigger.addEventListener('click', function (e) {
  
        // href属性の値を取得
        var href = smoothScrollTrigger.getAttribute('href');
  
        // 現在のスクロール位置を取得（クロスブラウザに対応）
        var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
  
        // スクロール先の要素を取得
        var targetElement = document.getElementById(href.replace('#', ''));
  
        // スクロール先の要素が存在する場合はスムーススクロールを実行
        if (targetElement) {
  
          // デフォルトのイベントアクションをキャンセル
          e.preventDefault();
          e.stopPropagation();
  
          // スクロール先の要素の位置を取得
          var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 80; // headerと余白の分だけずらす
  
          // スタート時点の時間を取得
          var startTime = performance.now();
  
          // アニメーションのループを定義
          var loop = function (nowTime) {
  
            // スタートからの経過時間を取得
            var time = nowTime - startTime;
  
            // duration を1とした場合の経過時間を計算
            var normalizedTime = time / duration;
  
            // duration に経過時間が達していない場合はアニメーションを実行
            if (normalizedTime < 1) {
  
              // 経過時間とイージングに応じてスクロール位置を変更
              window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
  
              // アニメーションを継続
              requestAnimationFrame(loop);
  
            // duration に経過時間が達したら、アニメーションを終了
            } else {
              window.scrollTo(0, targetPosition);
            }
  
          }
  
          // アニメーションをスタート
          requestAnimationFrame(loop);
        }
      });
  
    });
  
  });


  $(function(){
      $("button").click(function(){
          var target = $(this).attr("value");
          $(".works-contents-item").each(function(){
              $(this).animate({"opacity": 0}, 300, function(){
                  $(this).hide();
                  if($(this).hasClass(target) || target == "all"){
                      $(this).show();
                      $(this).animate({"opacity": 1}, 300);
                  }
              });
          });
      });
  });


$(function(){
    $('button').click(function(e){
        $('button').each(function(i){
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }
            $(e.target).addClass('selected');
        });
    });
});


  