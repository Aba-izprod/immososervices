$(function () {
  if ($(".home-slider-bis-content").length) {
    $(".home-slider-bis-content").slick({
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      cssEase: "ease-in-out",
      // responsive : [
      // breakpoint : 1024,
      // settings : "unslick"
      // ]
    });
  }
  $(".btn1").click(function () {
    $(".home-slider-bis-content").slick("slickPause");
  });
  $("#iconclose").click(function () {
    $(".home-slider-bis-content").slick("slickPlay");
  });

  $(".gallery").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    // lazyLoad : 'progressive',
    // fade: false,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         rows: 1,
  //         slidesToShow: 1,
          // vertical: true,
    //       fade : true,
    //       cssEase: 'linear',
    //     },
    //   },
    // ],
  });

  // $(".btn2 span:last-child").click(function () {
  //   $(".gallery").slick("slickNext");
  
  // });
  // $(".btn2 span:first-child").click(function () {
  //   $(".gallery").slick("slickPrev");
  // });
});
