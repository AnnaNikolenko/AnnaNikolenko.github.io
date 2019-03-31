$(document).ready(function() {

	/*МАГНИФИК ПОПАП НАЧАЛО*/

$(".item_library").magnificPopup({ /*Выбрали наши ссылочки и назначили им функцию Магнифик Попап*/
		type : 'image',			 /*Обязательно надо обозначить тип контента*/
		gallery  :  {
			enabled  :  true	/*Включили галерею (перелистывание картинок)*/
		},
		removalDelay: 300,  /*Включили анимацию при добавлении окон. Документация-анимате*/
		mainClass: 'mfp-fade' /*Включили анимацию при добавлении окон. Документация-анимате*/
	}); 

  /*МАГНИФИК ПОПАП КОНЕЦ*/  
  /*СЛАЙДЕР НАЧАЛО*/

var jssor_1_SlideshowTransitions = [
    {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
    {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
  ];
            
var jssor_1_options = {
    $AutoPlay: true,
    $SlideshowOptions: {
    $Class: $JssorSlideshowRunner$,
    $Transitions: jssor_1_SlideshowTransitions,
    $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
    $Class: $JssorBulletNavigator$
    },
    $ThumbnailNavigatorOptions: {
    $Class: $JssorThumbnailNavigator$,
    $Cols: 1,
    $Align: 0,
    $NoDrag: true
    }
  };
            
var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
//responsive code begin
//you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
        refSize = Math.min(refSize, 505);
        jssor_1_slider.$ScaleWidth(refSize);
    }
    else {
        window.setTimeout(ScaleSlider, 30);
          }
       }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end

  /*СЛАЙДЕР ПОПАП КОНЕЦ*/          

	
});