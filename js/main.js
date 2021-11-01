$(document).ready(function(){
  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });

  $(window).on('scroll resize', function(){
    // approach
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    var approachTop = $('.approach').offset().top;
    var approachImageList = $('.approach .img_list li');
    var approachImageHeight = $('.approach .img_list img').height();
    var sectorsTop = $('.sectors').offset().top;
    var serviceTop = $('.service').offset().top;
    var journalTop = $('.journal').offset().top;
    var approachText = $('.approach .txt_wrap');
  
    fixHeader();
    positionFix();
    fixImageText();
    sectorsSection();
    serviceSection();
    journalSection();
  
    // fixHeader
    function fixHeader(){
      if(scrollPos > 70){
        $('.header').addClass('on');
      } else {
        $('.header').removeClass('on');
      }
    }
  
    // positionFix
    function positionFix(){
      if(scrollPos > approachTop - 150){
        approachText.addClass('on');
      } else {
        approachText.removeClass('on');
      }
      if(scrollPos > sectorsTop - 605){
        approachText.removeClass('on');
      }
    }
  
    // fixImageText 
    function fixImageText(){
      approachImageList.removeClass('on');
      if(scrollPos > approachTop){
        approachImageList.removeClass('on');
        approachImageList.eq(0).addClass('on');
      }
      if(scrollPos > approachTop + approachImageHeight * 1){
        approachImageList.removeClass('on');
        approachImageList.eq(1).addClass('on');
      }
      if(scrollPos > approachTop + approachImageHeight * 2){
        approachImageList.removeClass('on');
        approachImageList.eq(2).addClass('on');
      }
      if(scrollPos > approachTop + approachImageHeight * 3){
        approachImageList.removeClass('on');
        approachImageList.eq(3).addClass('on');
      }
      if(scrollPos > sectorsTop - 250){
        approachImageList.removeClass('on');
      }
    }
  
    // sectors section
    function sectorsSection(){
      if(scrollPos > sectorsTop - 150){
        $('.sectors .img_list').addClass('on');
      } else {
        $('.sectors .img_list').removeClass('on');
      }
    }
  
    // service section
    function serviceSection(){
      if(scrollPos > serviceTop - 150){
        $('.service .img_wrap').addClass('on');
      } else {
        $('.service .img_wrap').removeClass('on');
      }
    }
  
    // journal section
    function journalSection(){
      if(scrollPos > journalTop - 150){
        $('.journal .list').addClass('on');
      } else {
        $('.journal .list').removeClass('on');
      }
    }
  });

  // header nav click event
  $('.header .gnb_btn').on('click', function(){
    $('.header .gnb').toggleClass('on');
  });
  $('.contents').on('click', function(){
    $('.header .gnb').removeClass('on');
  });
});
