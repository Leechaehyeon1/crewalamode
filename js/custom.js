$(document).ready(function(){
  // a default event remove
  $('a[href="#"]').on('click',function(e) {
		e.preventDefault();
    $('.explore').css({background: 'transparent'});
	});

  // scroll event
  $(window).on('scroll resize',function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    var approachTop = $('.approach').offset().top;
    var sectorsTop = $('.sectors').offset().top;

    if($(window).innerWidth() > 768){
      fixApproach();
    } else {
      fixApproachSmall();
    }
    fixHeader();

    function fixApproach(){
      if(scrollPos > approachTop - 79){
        $('.approach .right .txt_wrap').addClass('on');
      } else {
        $('.approach .right .txt_wrap').removeClass('on');
      }

      if(scrollPos > sectorsTop - 495){
        $('.approach .right .txt_wrap').removeClass('on');
      }
    }

    function fixApproachSmall(){
      if(scrollPos > approachTop - 129){
        $('.approach .right .txt_wrap').addClass('on');
      } else {
        $('.approach .right .txt_wrap').removeClass('on');
      }

      if(scrollPos > sectorsTop - 495){
        $('.approach .right .txt_wrap').removeClass('on');
      }
    }


    function fixHeader(){
      if(scrollPos > 79){
        $('.header').addClass('on');
      } else {
        $('.header').removeClass('on');
      }
    }


    // sector
    var sectorTop = $('.sectors').offset().top;
    var sectorLists = $('.sectors .list');
    if( scrollPos > sectorTop - 70 ){
      sectorLists.addClass('on');
    } else {
      sectorLists.removeClass('on');
    }


    // service
    var serviceTop = $('.service').offset().top;
    var serviceImg = $('.service .left');
    if( scrollPos > serviceTop - 150 ){
      serviceImg.addClass('on');
    } else {
      serviceImg.removeClass('on');
    }

    //journal
    var journalTop = $('.journal').offset().top;
    var journalList = $('.journal .list');
    if( scrollPos > journalTop - 90 ){
      journalList.addClass('on');
    } else {
      journalList.removeClass('on');
    }
  });

  // gnb
  $('.header .menu_btn').on('click', function(){
    $('.header nav.gnb').toggleClass('on');
  });
  $('.contents').on('click', function(){
    $('.header nav.gnb').removeClass('on');
  });

});
