modules.define('homecard', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    //this.setMod('nobase');
                });
            }
        },
        'inbase' : function() {
            this.domElem.append(' 11');
        },
        'nobase' : function() {
            this.domElem.append(' 22 ');
            this.setMod('inbase');
        }
    }
}));

});



