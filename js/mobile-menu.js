// script that opens the mobile menu from the left side

  var isOpen = false;

      //jQuery(document).ready(function ($) {

      //});
      

      function toggleMenu() {

        var $ = window.jQuery;
        var $div = $("#page-wrapper");
        $div.css("min-width", $div.width());
        
        if (isOpen) {
          $div.removeClass("mobile-animate-in");
          $div.addClass("mobile-animate-out");
        } else {

          $div.removeClass("mobile-animate-out");
          $div.addClass("mobile-animate-in");
        }
        
                isOpen = !isOpen;
      }
      

      /***
 * mobile menu hide/show layers 
 ***/ 
//$(document).ready(function() {
    
    
    //$("#mobile-menu-button").click(function(){
        //$("#mobile-main-menu").slideToggle( "fast");
        // $("#page").animate( {"left": "+=50px" }, "slow");
        // $("#mobile-search-form").hide();
        // $("#mobile-member-login-box").hide(); 
        
    //});

    //     $("#mobile-search-button").click(function(){
    //     $("#mobile-main-menu").hide();
    //     $("#mobile-search-form").slideToggle( "fast");
    //     $("#mobile-member-login-box").hide(); 
        
    // });

    //     $("#mobile-member-button").click(function(){
    //     $("#mobile-main-menu").hide();
    //     $("#mobile-search-form").hide();
    //     $("#mobile-member-login-box").slideToggle( "fast"); 
        
    // });


//});

//<script src="http://code.jquery.com/jquery-1.10.2.js"></script>