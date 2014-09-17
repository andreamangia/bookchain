jQuery.noConflict();
(function($) {
  $(function() {



    loadPage = function ( url ) {
        $('#maincontainer').load( url, function(){
          $('a').on('click', function(event){
            event.preventDefault();
            loadPage($(this).attr('href'));
          });
        })
    }

    loadPage('./views/home.html');

    $('a').on('click', function(event){
      event.preventDefault();
      loadPage($(this).attr('href'));
    });

  });
})(jQuery);
