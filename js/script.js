$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});

$(document).ready(function(){

    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }


    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })


    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        setTimeout(function(){
            $('#search form input[type="text"]').focus();
        },100);
    });

    $('.search_close').on('click', function(event) {
            $('#search').removeClass('open');
    });


    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });


    /*open menu*/
    $(".btn_openFilter").click(function(){
        $("body,html").addClass('filter-toggle');
        $(".btn_openFilter").addClass('active');
    });
    $(".m-overlay_filter").click(function(){
        $("body,html").removeClass('filter-toggle');
        $(".btn_openFilter").removeClass('active');
    });
    $(".btn_close_filter").click(function(){
        $("body,html").removeClass('filter-toggle');
        $(".btn_openFilter").removeClass('active');
    });
    
    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });
    
    /*upload image*/
     var readURL = function(input) {
         if (input.files && input.files[0]) {
             var reader = new FileReader();

             reader.onload = function (e) {
                 $('.pers_thumb').attr('src', e.target.result);
             }
    
             reader.readAsDataURL(input.files[0]);
         }
     }
     $(".btn_upload_pic").on('change', function(){
         readURL(this);
     });

     /*upload image*/
     var readURL2 = function(input) {
         if (input.files && input.files[0]) {
             var reader = new FileReader();

             reader.onload = function (e) {
                 $('#photo_uploaded_sell').attr('src', e.target.result);
             }
    
             reader.readAsDataURL(input.files[0]);
         }
     }
     $("#file_photos_sell").on('change', function(){
         readURL2(this);
     });


     /*upload image*/
     var readURL3 = function(input) {
         if (input.files && input.files[0]) {
             var reader = new FileReader();

             reader.onload = function (e) {
                 $('#photo_uploaded_swap').attr('src', e.target.result);
             }
    
             reader.readAsDataURL(input.files[0]);
         }
     }
     $("#file_photos_swap").on('change', function(){
         readURL3(this);
     });

    $(".show_pass").click(function() {
        var eye_icon = $(this).find('i');
        eye_icon.removeClass("fa-eye-slash");
        eye_icon.addClass("fa-eye");

        var input = $(this).closest('div.password_input').find('.pwd');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
            eye_icon.removeClass("fa-eye");
            eye_icon.addClass("fa-eye-slash");
        }
    });
    
    /*header-fixed*/
    // $(window).scroll(function(){
            
    //     if ($(window).scrollTop() >= 200) {
    //         $('body').addClass('fixed-header');
    //     }
    //     else {
    //         $('body').removeClass('fixed-header');
    //     }
              
    // });


	$(".products_slider").owlCarousel({
        loop:true,
        margin:5,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                stagePadding: 20,
            },
            375:{
                items:1,
                stagePadding: 50,
            },
            575:{
                items:2,
                stagePadding: 50,
            },
            768:{
                items:2,
                stagePadding: 80,
            },
            992:{
                items:3,
                stagePadding: 50,
            },
            1200:{
                items:4,
                stagePadding: 30,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'],
    })

    $(".swap_slider").owlCarousel({
        loop:true,
        margin:20,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:1,
            },
            575:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'],
    })

    $(".swap_slider_pro").owlCarousel({
        loop:true,
        margin:20,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:1,
            },
            575:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'],
    })

    $("#testmonials_slider").owlCarousel({
        loop:true,
        margin:0,
        items:1,
        rtl:rtl,
        responsiveClass:true,
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'],
    })


    $("#partners_slider").owlCarousel({
        loop:true,
        margin:20,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:2,
            },
            575:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            },
            1200:{
                items:6,
            }

        },
        dots:true,
        nav:false,
        autoplay:false,
        navText:['<i class="far fa-long-arrow-left"></i>',
            '<i class="far fa-long-arrow-right"></i>'],
    })


    $(".slide_welcome").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        items:1,
        responsiveClass:true,
        dots:true,
        nav:false,
        autoplay:true,
    })


    $("#slide_tabs").owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        rtl:rtl,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            575:{
                items:2,
                autoWidth:true,
            },
            768:{
                items:2,
                autoWidth:true,
            },
            992:{
                items:4,
                autoWidth:true,
            }

        },
        dots:false,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-chevron-right"></i>',
            '<i class="fal fa-chevron-left"></i>'],

    })

    $('#slide_tabs a').on('click', function (e) {
        // e.preventDefault()
        // $(this).tab('show')
        // $('#slide_tabs a.nav-link').removeClass('active');
        // $(this).addClass('active')
    })
})