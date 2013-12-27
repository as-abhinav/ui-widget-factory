$(document).ready(function() {

  var slideshow = {

    currentPosition : 0,

    myfunc:{},

    slides : $('.slides'),

    numOfSlides : $('.slides').length,

    config : {
      height: 100,
      width: 640,
      autoplay : {

        enable : false,
        timeinterval: 4000
      }
    },

    init : function(config){

            $.extend( this.config, config);
            
            $('#slideshow').css({'width' : this.config.width});

            $('#slideshow ul').wrap('<div id="slideInner"></div>').children('li').css({
              'float': 'left',
              'width': this.config.width ,
              'height': this.config.height 
            });

            $('#slideInner').css('width', this.config.width * this.numOfSlides);
            $('#slides-container,#slideInner,#slideInner ul').css('overflow', 'hidden');

            $('#slideInner').prepend('<span class="control" id="leftControl" ></span>');
            $('#slideInner').append('<span class="control" id="rightControl" ></span>');

            $('.control').css('top',((this.config.height - 60)/2));

            $('.control').on('click', this.moveSlides);

            $('#slideshow').on('mouseover', function() {
                $('#rightControl,#leftControl').css('visibility', 'visible');
            });

            $('#slideshow').on('mouseout', function() {
                $('#rightControl,#leftControl').css('visibility', 'hidden');
            });
              
            this.manageControls(this.currentPosition);
             
            if(this.config.autoplay.enable){
              this.autoPlayStart();
            }

    },

    autoPlayStart :function(){
      
        this.myfunc = setInterval(function(){slideshow.autoPlaySlideShow();},this.config.autoplay.timeinterval );
    },

    autoPlaySlideShow : function(){

      slideshow.currentPosition = ($('#rightControl').css('display')=='block') ? slideshow.currentPosition+1 : slideshow.currentPosition-1;

      slideshow.manageControls(slideshow.currentPosition);
     
      $('#slideInner').animate({
        'marginLeft' : slideshow.config.width*(-slideshow.currentPosition)
      });

      if (slideshow.currentPosition == this.numOfSlides - 1) {
        
        slideshow.currentPosition = 1;
      };

    },
    autoPlayStop : function(){
      
      clearInterval(this.myfunc);
    },

    moveSlides:function(){

      if(slideshow.config.autoplay.enable){
        slideshow.autoPlayStop();
      }
      
      slideshow.currentPosition = ($(this).attr('id')=='rightControl') ? slideshow.currentPosition+1 : slideshow.currentPosition-1;
  
        slideshow.manageControls(slideshow.currentPosition);
         
        $('#slideInner').animate({
            'marginLeft' : slideshow.config.width*(-slideshow.currentPosition)
        });

        if(slideshow.config.autoplay.enable){
          slideshow.autoPlayStart();
        }

    },

    manageControls : function(position){
      
      if(position==0){ 
          $('#leftControl').hide() 
        }else{ 
          $('#leftControl').show() 
        }
    
        if(position==this.numOfSlides-1){ 
          $('#rightControl').hide() 
        }else{ 
          $('#rightControl').show() }
    }
  };

  slideshow.init({
    height:100,
    width:640,
    autoplay:{
      enable:false,
      timeinterval:3000
    }

  });


});