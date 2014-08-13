var isMobile = true;
var transitionRange = 600;
var heightDelta = 36;
var headerHeight = 90;
var logo_width;
var logo;
var logo_max_width = 220;

jQuery( document ).ready(function( $ ) {

  logo = $(".site-logo");
  var wStr = logo.css("width");
  //logo_width = parseInt(wStr.substring(0,wStr.length-2)); 
  logo_width = logo_max_width;

  var col = $("#header-bar").css("background-color");
  isMobile = (col != "rgb(255, 255, 255)");

  // track scrolling and modify the header accordingly
  $(window).scroll(function(){

    var col = $("#header-bar").css("background-color");
    isMobile = (col != "rgb(255, 255, 255)");

    // only do this on desktop/tablet versions
    if (isMobile == true) {
        return;
    }

    var scrollValue = $(this).scrollTop();
    var headerBar = $("#header-bar");
    var newHeight = "";
    
    var pct = scrollValue/transitionRange;
    

    if (scrollValue > 0 && scrollValue <= transitionRange) {



        var newTop = pct * heightDelta;
        var heightOffset = pct * heightDelta;
        var newHeight = (headerHeight-heightOffset) + "px";
        headerBar.css("height",newHeight);

        
        //var w = parseInt(wStr.substring(0,wStr.length-2));
        var logoWidth = logo_width - (pct*logo_width) + "px";
        //console.log("pct: "+pct);
        //logo.css("width", logoWidth);
        logo.css("width", logoWidth);
        var mTop = 15 - (pct * 15) + "px";
        $("#block-system-main-menu ul li").css("margin-top",mTop);

 
    } else if (scrollValue > transitionRange) {

        newHeight = (headerHeight - heightDelta) + "px";
        headerBar.css("height",newHeight);

        logo.css("width", "50%");
        

    } else { 

        var heightVal = "90px";
        headerBar.css("height",heightVal);

        logo.css("width", "80%");

    }


    //var aTop = $('.ad').height();
    //if($(this).scrollTop()>=aTop){
        //alert('header just passed.');
        // instead of alert you can use to show your ad
        // something like $('#footAd').slideup();
    //}






    /* we're going to use this sweet little example to detect if we're in the mobile menu

    var is_mobile = false;

    if( $('#some-element').css('display')=='none' {
        is_mobile = true;       
    }

    */











  });



});