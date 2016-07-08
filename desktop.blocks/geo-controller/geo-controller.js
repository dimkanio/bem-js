modules.define('geo-controller', ['i-bem__dom'], function(provide, BEMDOM, GEO) {

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
            }
        }
    },

    onMenuItemClick: function (e, data) {
        this.itemToggle(data.group);
    },

    onMenuGroupClick: function (e, data) {
        this.groupToggle(data.group);
    },

    onMapInited: function (e, data) {
        this.map = data.map;
    },

    onSubmitSearch: function (e, data) {
        this._data = data.textdata;
        console.log('Address:' + this._data);
    },

    /**
     * Поиск нужной группы и добавление/удаление её с карты.
     * @param {String} id Идентификатор группы.
     */
    groupToggle: function (id) {
        var it, group;

        // Сначала ищем в видимой коллекции.
        it = this.map.geoObjects.getIterator();
        while (group = it.getNext()) {
            if (group.properties.get('collection') && group.properties.get('id') === id) {
                this._hidden.add(group);
                return;
            }
        }

        // Если мы сюда попали, значит, коллекция уже скрыта.
        it = this._hidden.getIterator();
        while (group = it.getNext()) {
            if (group.properties.get('id') === id) {
                this.map.geoObjects.add(group);
                return;
            }
        }
    },

    /**
     * Поиск нужной метки и открытие/закрыте её балуна.
     * @param {String} id Идентификатор метки.
     */
    itemToggle: function (id) {
        var it = this.map.geoObjects.getIterator(),
            group;

        while(group = it.getNext()) {
            if (group.properties.get('collection')) {
                for (var i = 0, len = group.getLength(); i < len; i++) {
                    var placemark = group.get(i);

                    if (placemark.properties.get('id') === id) {
                        if (placemark.balloon.isOpen()) {
                            placemark.balloon.close();
                        }
                        else {
                            this.map.panTo(placemark.geometry.getCoordinates(), {
                                delay: 0,
                                callback: function () {
                                    placemark.balloon.open();
                                }
                            });
                        }
                        return;
                    }
                }
            }
        }
    }
}));
});
