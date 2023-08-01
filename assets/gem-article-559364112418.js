

    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
  
    
    
    
    
    
  
    
    
    
    
    
    
    
    (function(jQuery) {
    var $module = jQuery('#m-1682638757984').children('.module');
    $module.find('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var id;
                        if (url.indexOf('youtu.be/') != -1) {
                            id = url.split('youtu.be/');
                        } else {
                            id = url.split(/watch\?v=/);
                        }
                        if (id && id[1] != undefined) {
                            id = id[1].split(/&/)[0];
                        }
                        return id;
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                youtu: {
                    index: 'youtu.be/',
                    id: function(url) {
                        var id;
                        if (url.indexOf('youtu.be/') != -1) {
                            id = url.split('youtu.be/');
                        } else {
                            id = url.split(/watch\?v=/);
                        }
                        if (id && id[1] != undefined) {
                            id = id[1].split(/&/)[0];
                        }
                        return id;
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });
})(window.GemQuery || jQuery);
  
    
    
    
    
    
    
    
    
    