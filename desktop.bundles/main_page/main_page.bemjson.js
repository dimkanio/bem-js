module.exports = {
    block: 'page',
    title: 'HomePassport.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'HomePassport.ru' }},
        { elem : 'meta', attrs : { name : 'keywords', content : 'HomePassport' } },
        { elem: 'css', url: 'main_page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'main_page.min.js' }],
    content: [
        {
            block: 'head',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: [
                        {
                            block: 'logo',
                            content: [
                                {
                                    block: 'link',
                                    url: 'http://localhost:8080/desktop.bundles/main_page/main_page.html',
                                    content: [
                                        {
                                            block: 'image',
                                            attrs: { src: 'http://localhost:8080/desktop.blocks/logo/logo.png' }
                                        },
                                        {
                                            elem: 'slogan',
                                            content: '\nНародный паспорт для каждого дома!'
                                        }
                                    ]
                                }
                            ]
                        }
                        
                        ]
                    },
                    {
                        elem: 'right',
                        content: ''
                        
                    }

                ]
            }
        },
        {
          block : 'menu',
          mods : { theme : 'islands', size : 'm', focused: 'true' },
          content : [
                {
                  block : 'menu-item',
                  mods : { type : 'link' },
                  content : 
                  {
                    block : 'link',
                    url : 'http://localhost:8080/desktop.bundles/main_page/main_page.html',
                    title : 'Главная',
                    content : 'Главная'
                    }
                },
                {
                  block : 'menu-item',
                  mods : { type : 'link' },
                  content : 
                  {
                    block : 'link',
                    url : 'http://localhost:8080/desktop.bundles/main_page/main_page.html',
                    content : 'Войти'
                    }
                },
                {
                  block : 'menu-item',
                  mods : { type : 'link' },
                  content : 
                  {
                    block : 'link',
                    url : 'http://localhost:8080/desktop.bundles/main_page/main_page.html',
                    content : 'Контакты'
                    }
                }
            ]
        },
        {
            block: 'search',
            mix: [{ block: 'geo-controller'}],
            js: true,
            content: {
                tag: 'form',
                //attrs: { action: 'http://yandex.ru/yandsearch' },
                content: [
                    {
                        block: 'input',
                        mods : { theme : 'lands', size : 'm', type : 'search', 'has-clear' : true, focused : true },
                        name: 'address',
                        maxLength : 100,
                        placeholder: 'Город, Улица, Дом'
                    },
                    {
                        block: 'button',
                        text : 'Поиск',
                        mods : { theme : 'lands', size : 'm', type: 'submit'},
                        icon : {
                            block: 'icon',
                            url: 'http://localhost:8080/desktop.bundles/main_page/search.png',
                        }
                    }
                ]
            }
        },

        {
            block: 'info',
            content: [
            {
                elem: 'left',
                content: [
                 {
                    block: 'homecard',
                    content: 'Тут описание дома из базы данных:\n',
                    elem: 'text'
                    

                 },

                 {

                    block: 'map-content',
                    mix: [{ block: 'geo-controller', js: true }],
                    content: [
                    {
                        block: 'map',
                        mods: { 'api': 'ymaps' },
                        mix: [{ block: 'geo-controller', elem: 'map' }],
                        // Параметры для загрузки АПИ Яндекс.Карт.
                        js: {

                            'lang': 'ru-RU',
                            'center': [51.728255, 36.192475],
                            'zoom': 16,
                            // Добавляем геообъект на карту.
                            // 'geoObjects': [
                            //     //Массив геообъектов можно, но пока один
                            //     {
                            //         // координаты метки
                            //         coords: [51.723228, 36.188892],  
                            //         // опции метки
                            //         options: {
                            //             //preset: 'islands#redIcon',

                            //             iconLayout: 'default#image',
                            //             iconImageHref: './Arrow.png',
                            //             iconImageSize: [64, 64],
                            //             iconImageOffset: [-30, -50]
                            //         },
                            //         // данные метки
                            //         properties: {
                            //             balloonContentHeader: 'г.Курск, ул. Александра Невского, д.23'

                            //         }
                            //     }
                                
                            // ],
                            // Устанавливать ли bounds карты по области,
                            // охватывающей все геообъекты.
                            'setupBoundsByGeoObjects': true,
                            // Включить / выключить слой OSM тайлов.
                            'setupOSMTiles': false
                        }

                    }

                    ]

                    
                 }
                ]
            },
            {
                elem: 'right',
                content: [
                {
                    block: 'news',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    elem: 'title',
                                    tag: 'span',
                                    content: 'Актуальные новости'
                                }

                            ]
                        },
                        {
                            elem: 'content'
                        }

           
                    ]
                }

                ]
            }

            ]
        },
        {
            block: 'comment',
            content: 'Comment1'
        },

        {
            block: 'footer',
            content: [
                {
                    block: 'copyright',
                    content: '© HomePassport.ru. All rights reserved.'
                }

            ]
        }
    ]
};