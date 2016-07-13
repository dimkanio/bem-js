var MultiGeocoder = require('multi-geocoder'),
    geocoder = new MultiGeocoder({ provider: 'yandex', coordorder: 'latlong' });


function getCoords(address, func_callback) {
    geocoder.geocode([address])
	    .then(function (data) {

	        //Координаты передаем в колбэк
	        func_callback(data.result.features[0].geometry.coordinates);
	    })
        .fail(function (err) {
        	//ошибку выводим в консоль
            console.log('error', err);
            return err;
        });

}	    


// вызываем функцию
getCoords('Курск, ул. Александра Невского, д.23', function (coords) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log(coords);
});