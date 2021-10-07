$(document).ready(function (){
  $(window).scroll(function (){
    if (this.scrollY>20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scroll > 500){
      $('.scroll-top-btn').addClass("show");
    } else {
      $('.scroll-top-btn').removeClass("show");
    }
  });
  // Slide up script
  $('.scroll-top-btn').click(function (){
    $('html').animate({
      scrollTop:0,
    });
  });
  // toggle menu button/navbar
  $('.menu-btn').click(function (){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    console.log("clicked.");
  });
  // typing animation script
  let typed = new Typed(".typing",{
    strings: ["Network Engineer.","Android Developer.","Web Designer.","Technical Supporter."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  let typed2 = new Typed(".typing-2",{
    strings: ["Network Engineer.","Android Developer.","Web Designer.","Technical Supporter."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });
});
