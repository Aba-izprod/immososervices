$(document).ready(function () {  
  $('.btn1, #iconsearch').click(function() {
     $('form').addClass('active-popup');
  });
  $('.fa-xmark').click(function() {
    $('form').removeClass('active-popup');
  });
  // $('#load-less').click(function() {
  //   $('.profile-card:nth-child(n+7)').hide();
  //   $(this).hide();
  //   $('#load-more').css('transform', 'scale(1)');
  // })
  // $('#load-more').click(function() {
  //   $('.listtof').onload('.listtof');
  // })

  // let currentItem = 3;
  //   $('#load-more').click(function() {
        //  $('.product').replaceWith('Bonjour');
        // for(var i = currentItem; i < currentItem + 3; i++) {
          // $('.product:nth-child(-n+6)').
          // product.css('border','1px solid red');
        // }
    // });
});

