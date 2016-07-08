var MultiGeocoder = require('multi-geocoder'),
    geocoder = new MultiGeocoder({ provider: 'yandex', coordorder: 'latlong' });





geocoder.geocode(['Курск, ул. Александра Невского, д.23'])
    .then(function (res) {
        console.log(res.result.features[0].geometry.coordinates);

    });






