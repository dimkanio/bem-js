modules.define('news',  ['i-bem__dom', 'jquery', 'BEMHTML'], 
                 function(provide, BEMDOM, $, BEMHTML) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
                this.newsfeed = this.elem('content');
            	this._sendRequest();
               
            }
        }
    },

    _abortRequest: function() {
        this._xhr && this._xhr.abort();
    },

    _sendRequest: function() {

        this._abortRequest();

        this._xhr = $.ajax({
            type: 'GET',
            url: 'business.rss',
            dataType: 'xml',
            cache: false,
            success: this._onSuccess.bind(this)
        });

    },

     _onSuccess: function(result) {
        this._updateContent(result);
    },

    _updateContent: function(xml) {
        //console.log(xml);
        this._xmlParser(xml);
    },

    _xmlParser: function(xmlnews) {

        var counter = 0;
        var d = new Date();

        var $xml = $(xmlnews);
        $xml.find("item").each(function() {
        var $this = $(this),
        
        item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    pubDate: $this.find("pubDate").text()
        }

        d.setTime(Date.parse(item.pubDate));

        if (counter > 5)
            return;

        $(this.newsfeed).fadeOut(1000);


        // Append "RSS Title"
        $( '.news__content' ).append( 

            '<div class="news__link">' + 
            '<a class="title" href="' + item.link + '" target="_blank">' + item.title + '<span>' +
            d.toLocaleString() + '</span>' + '</a>' + '</div>'
        );

        counter++;
        
        });

        $(this.newsfeed).fadeIn(1000);
   }

}));

});



