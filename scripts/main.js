$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $("[id^=nav-]").click(function() {
        const targetHero = $(this).attr("id").split("-")[1];
        const scrollOffset = $("#hero-"+targetHero).offset().top - $(".navbar").height();
        $("html, body").css("scroll-snap-type", "none");
        $("html, body").animate({scrollTop:scrollOffset}, 
        500, 
        () => $("html, body").css("scroll-snap-type", "y mandatory"));
        
        console.log(targetHero);
        console.log($("#hero-"+targetHero));
    });
  });