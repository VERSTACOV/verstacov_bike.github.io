function ibg(){$.each($(".ibg"),function(t,e){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}$(".wrapper").addClass("loaded"),$(".icon-menu").click(function(t){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")}),ibg(),$(document).ready(function(){0<$(".slider__body").length&&$(".slider__body").slick({dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,slidesToScroll:1,autoplaySpeed:3e3,centerMode:!1,variableWidth:!1,rows:1,slidesPerRow:1,adaptiveHeight:!0,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:768,settings:{}}]})});