(function($){
   $(document).ready(function(){
        var ids = [];
        $('.xo-gallery-html').each(function(){
           ids.push($(this).attr('data-id'));
        });
        if(ids.length){            
            $.post(gallery_get_html_url, {ids:ids}, function(data){
                ids.forEach(function(id, index){
                    if(data && data[id]){
                        $('.xo-gallery-html[data-id=' + id + ']').html(data[id].data);
                    }
                });
            });
        }
   });
})(jQuery);
