modules.define('geo-controller', ['i-bem__dom'], function(provide, BEMDOM) {

  provide(BEMDOM.decl(
    this.name,
    {
      onSetMod : {
          'js' : {
              inited: function () {
                  // Слушаем состояние карты (нужно сделать надстройки).
                   this.findBlockOn('map', 'map')
                       .on('map-inited', this.onMapInited, this);


                    BEMDOM.blocks['search']
                    .on('search-submit', this.onSubmitSearch, this);

                    //Сохраним текущий объект
                    _this = this;
            }
        }
    },

    onMapInited: function (e, data) {
        this.map = data.map;
    },

    onSubmitSearch: function (e, data) {
        this._addrerss = data.textdata;

        var myGeocoder = ymaps.geocode(this._addrerss);
        myGeocoder.then(
            function (res) {
                //console.log('Координаты объекта :' + res.geoObjects.get(0).geometry.getCoordinates());

                // Блок поделится информацией (событием) о том, что получены координаты
                _this.emit('object-found', {
                    geo_obj: res
                });
                
            },
            function (err) {
                console.log('Error: geo object was not found!');
            }
        );


    }


}));
});
