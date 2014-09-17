jQuery.noConflict();
(function($) {
  $(function() {

        router = function ( url ) {
          var source = url;
          var optStart = source.search('#');
          var pageId = source.substr(optStart+1);
          $('#maincontainer').load( 'views/'+pageId+'.html', function(){
            $('a.bcpage').on('click', function(){
              router($(this).attr('href'));
            })
          });
          return pageId;
        };
        
        router('index.html#home');

  });
})(jQuery);
