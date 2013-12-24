// This is file which contains self executing slideshow js
$(document).ready(function(){
  

  var currentPosition = 0;
  var slides = $(".slide");

  var slideHeight = $(".slide").height();
  console.log(slideHeight);


  var slideWidth = 560;
  var numberOfSlides = slides.length;
  
  $('#slidesContainer').css('overflow', 'hidden');
 
  slides.wrapAll('<div id="slideInner"></div>').css({
    'float' : 'left',
    'width' : slideWidth
  });
  

  $('#slideInner').css('width', slideWidth * numberOfSlides);

  $('#slideshow').prepend('<span class="control" id="leftControl" >Move left</span>');
  $('#slideshow').append('<span class="control" id="rightControl" >Move right</span>');
  $('#leftControl,#rightControl').height(slideHeight);

  manageControls(currentPosition);

  

  function autoPlayInterval(){
      
      currentPosition = ($('#rightControl').css('display')=='block') ? currentPosition+1 : currentPosition-1;

      manageControls(currentPosition);
     
      $('#slideInner').animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });

      if (currentPosition == numberOfSlides - 1) {
        console.log('last slide');
        currentPosition = 1;
      };
  }
  
  function autoplay(timeInterval){
    setInterval(function(){autoPlayInterval();},timeInterval);
  }
  


  $('.control').bind('click', function(){
    // Determine new position
    currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
  
     
      manageControls(currentPosition);
     
      $('#slideInner').animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });
    });

  function manageControls(position){
    // Hide left arrow if position is first slide
    if(position==0){ 
      $('#leftControl').hide() 
    }else{ 
      $('#leftControl').show() 
    }
    
    if(position==numberOfSlides-1){ 
      $('#rightControl').hide() 
    }else{ 
      $('#rightControl').show() }
    } 

  $('#slideshow').bind('mouseover', function(event) {
    /* Act on the event */
    $('#rightControl,#leftControl').css('visibility', 'visible');
   
  });
  $('#slideshow').bind('mouseout', function(event) {
    /* Act on the event */
    $('#rightControl,#leftControl').css('visibility', 'hidden');
   
  });


});