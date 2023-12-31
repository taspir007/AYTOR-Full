$(function(){
    $("#src_show_btn").on("click", function(){
        $("#search").addClass("show");
    });
    $("#src_close_btn").on("click", function(){
        $("#search").removeClass("show");
    });
    // cart bars
   $("#cart_show_btn").on("click", function(){
    $("#cart").addClass("cart_show");
   });
   $("#cart_close_btn").on("click", function(){
    $("#cart").removeClass("cart_show");
   });
    //sub popup
   $("#popup_close").on("click",function(){
    $("#sub_popup").hide(300)
   });
    //mobile nav
    $("#mbl_nav_show").on("click", function(){
        $("#respon_nav").addClass("nav_show");
    });
    $("#mbl_nav_hide").on("click", function(){
        $("#respon_nav").removeClass("nav_show");
    });

   //banner slick slider  start
   $('#banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    fade: true,
    dots:true,
    appendDots: $('.banner_btn_dots'),
});
//banner slick slider  end

//   product slider
$('.pro_slider').slick({
    slidesToShow:4,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow:'<i class="fa-solid fa-chevron-left slider_arrow"></i>',
    prevArrow:'<i class="fa-solid fa-chevron-right slider_arrow"></i>',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 1000, 
            settings: {
                slidesToShow: 2,
            }
        } 
      ]
    });
});

    //preloder start
    $(window).on("load", function () {
    $(".preload").fadeOut();
   });
   //preloder start


  $('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    console.log(finalDate);
    $this.countdown(finalDate, function(event) {
        $(this).html(event.strftime(''
        + ' <li><h3>%D</h3><small class="timer_titel">Days</small></li><li class="timer_bracker"><h4>:</h4></li> '
        + ' <li><h3>%H</h3><small class="timer_titel">Hour</small></li><li class="timer_bracker"><h4>:</h4></li></li>'
        + ' <li><h3>%M</h3><small class="timer_titel">Minute</small></li><li class="timer_bracker"><h4>:</h4></li> '
        + '<li><li><h3>%S</h3><small class="timer_titel">Sec</small></li></li>'
        ));
    });
  });

  //deals slider
  $('.offer_slider').slick({
    arrows: false,
    slidesToShow:2,
    appendDots: $('.deals_box_dots'),
    autoplaySpeed: 4000,
    dots:true,
    responsive:[
        {
            breakpoint: 1000,
            settings:{
                slidesToShow:1,
            }
        }
    ]
});
// vanoobox video
    new VenoBox({});

//news slider
$('.news_slider').slick({
    arrows: false,
    slidesToShow:4,
    autoplaySpeed: 4000,
    dots: true,
    appendDots: $('.news_slider_dots'),
    responsive:[
        {
            breakpoint: 1000,
            settings:{
                 slidesToShow:2,
            }
        }
    ]
    
});

// team slider
$('.team_slider').slick({
    arrows: false,
    slidesToShow:4,
    autoplaySpeed: 4000,
    responsive:[
        {
            breakpoint: 1100,
            settings:{
                 slidesToShow:3,
            }
        },

    ]

});
//insta slider
$('.insta_slider').slick({
    arrows: false,
    slidesToShow:4,
    autoplaySpeed: 4000,
    dots: true,
    appendDots: $('.insta_dots'),
    responsive:[
        {
            breakpoint: 1300,
            settings:{
                 slidesToShow:3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Feedback_slider
$('.Feedback_slider').slick({
    arrows: false,
    slidesToShow:1,
    autoplaySpeed: 4000,
    fade: true,
    dots:true,
    appendDots: $('.Feedback_slider_dots'),

});

// cart section
let plus = document.querySelector('#plus_btn');
let minus = document.querySelector('#minus_btn');
let input = document. querySelector('#inp');

plus.addEventListener('click', function(){
    input.value++;
});
minus.addEventListener('click', function(){
    // input.value--;
    if(input.value>1){
        input.value--
    }
});

