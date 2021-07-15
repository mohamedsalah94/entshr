$("#toTop").click(function() {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 1500);
});

let aboutheight = $("#about").offset().top;

$("#scroll-down").click(() => {
    $("html, body").animate({ scrollTop: aboutheight + 250 }, 1500);
});


$('#carouselExample').on('slide.bs.carousel', function(e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

$('#carouselExample').carousel({
    interval: 5000
});


// let disabledScrollbar = $("#ourservices").offset().top;
// let enableScrollbar = $("#ourprocess").offset().top;

// $("#showScrollBar").click(() => {
//     $("html, body").animate({ scrollTop: disabledScrollbar }, 1500);
//     $("#ourservices ,.startup ,.enterprise ,.ourwork,.contact-us,.img-top-footer,footer").show();

// });



// $(window).scroll(() => {

//      $(window).scroll(() => {

//     if (windowScroll > enableScrollbar) {
//         // document.body.classList.add("remove-scrolling");
//         // $("body").css("backgroundColor", "rgba(0,0,0,.1)");
//         $("#ourservices ,.startup ,.enterprise ,.ourwork,.contact-us,.img-top-footer,footer,.ourprocess").hide();
//     }
//     if (windowScroll > ourservices) {
//         $("#ourservices ,.startup ,.enterprise ,.ourwork,.contact-us,.img-top-footer,footer.ourprocess").show();
//     }
//     // document.body.classList.remove("remove-scrolling");
// });

// document.body.classList.add("remove-scrolling");
// document.body.classList.remove("remove-scrolling");



// Start Custome Image Hover

$(".hover-img").hover(function() {
    $(".customer-paragraph").toggle();
});


// StartProgress
// $(".ourprocess .circle").hover(function() {

// });


// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" active", "");
//         }
//         this.className += " active";
//     });
// }
// var element = document.querySelectorAll(".ourprocess .Container-progessbar li");


// $(".ourprocess .Container-progessbar li").hover(function() {
//     $(".ourprocess .Container-progessbar li").addClass("active");

// });

$('.ourprocess .Container-progessbar li:nth-child(1)').on('mouseover', function() {
    // $(this).parent().toggleClass('active');
    // $(this).addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(1)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(2)").removeClass("disabled");
});
$('.ourprocess .Container-progessbar li:nth-child(2)').on('mouseover', function() {
    // $(this).parent().toggleClass('active');
    // $(this).addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(2)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(3)").removeClass("disabled");
});
$('.ourprocess .Container-progessbar li:nth-child(3)').on('mouseover', function() {
    // $(this).parent().toggleClass('active');
    // $(this).addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(3)").addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(4)").removeClass("disabled");
});
$('.ourprocess .Container-progessbar li:nth-child(4)').on('mouseover', function() {
    // $(this).parent().toggleClass('active');
    // $(this).addClass("active");
    $(".ourprocess .Container-progessbar li:nth-child(4)").addClass("active");
});

// let serviceHeight = $("#ourservices").offset().top;

// var sm = window.matchMedia("(max-width: 768px)")

// $("#last-item").mouseover(() => {
//     $("html, body").animate({ scrollTop: serviceHeight + 150 }, 1500);
// });




$(document).ready(function() {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".nav-tabs").hover(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});