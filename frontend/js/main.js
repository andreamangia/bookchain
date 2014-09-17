jQuery.noConflict();
(function($) {
  $(function() {

        router = function ( url ) {
          var source = url;
          var pageStart = source.search('#');
          var optStart = source.search(';');
          if(optStart>=1){
            var pageRange = optStart-(pageStart+1);
            var pageId = source.substr(pageStart+1,pageRange);        
            var options = source.substr(optStart+1).replace(/=/g,'":"');
            options = '{"'+options+'"}';
          } else {
            var pageId = source.substr(pageStart+1);
          }

          console.log(options);
          $('#maincontainer').load( 'views/'+pageId+'.html', function(){
            $('a.bcpage').on('click', function(){
              router($(this).attr('href'));
            })
          });
          return pageId;
        };
        
        router(window.location.href);

  });
})(jQuery);
