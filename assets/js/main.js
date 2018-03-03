(function($) {
    "use strict";

    // backtop functions
    $( '.backtotop' ).on( 'click', function () {
      $( 'html, body' ).animate( { scrollTop: 0 }, 800 );
      return false;
    });

    $( window ).on( 'scroll', function () {
      if ( $( this ).scrollTop() > 100 ) {
        $( '.backtotop' ).fadeIn( 1000, function() {
          $( 'span' , this ).fadeIn( 100 );
        });
      } else {
        $( '.backtotop' ).fadeOut( 1000, function() {
          $( 'span' , this ).fadeOut( 100 );
        });
      }
    });
    

})(jQuery);

