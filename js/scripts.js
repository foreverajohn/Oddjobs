
$(function() {
  $(".needCarousel, .offerCarousel").flickity({
    // options
    cellAlign: 'right',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    autoPlay: true
  });


  $("#toggle, #toggleMd").click(function(){
    var toggle;
    var right = $("#smrect, #smrectMd").css('right')
    if (right == '115px'){
      $("#smrect, #smrectMd").css({right: "60px"});
      $("#need, #needMd").attr("src","img/Need_alt.svg")
      $("#offer, #offerMd").attr("src","img/Offer_alt.svg")
    } else {
      $("#smrect, #smrectMd").css({right: "115px"});
      $("#need, #needMd").attr("src","img/Need.svg")
      $("#offer, #offerMd").attr("src","img/Offer.svg")
    };
  });

});


