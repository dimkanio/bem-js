module.exports = {
    block: 'page',
    title: 'Моя торговая точка',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Моя торговая точка' }},
        { elem : 'meta', attrs : { name : 'keywords', content : 'POS' } },
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
                                            content: 'Зарабатывать \n   просто!'
                                        }
                                    ]
                                }
                            ]
                        }
                        
                        ]
                    },
                    {
                        elem: 'right',
                        content: 
                        {
                            block: 'search',
                            content: {
                                tag: 'form',
                                attrs: { action: 'http://yandex.ru/yandsearch' },
                                content: [
                                    {
                                        block: 'input',
                                        name: 'text',
                                        val: 'Найти'
                                    },
                                    {
                                        block: 'button',
                                        type: 'submit',
                                        content: 'Поиск'
                                    }
                                ]
                            }
                        }
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
            block: 'info',
            content: [
            {
                elem: 'left',
                content: [
                 {
                    elem: 'l_text',
                    content: 'ЕГАИС (Единая государственная автоматизированная информационная система) — автоматизированная система, предназначенная для государственного контроля над объёмом производства и оборота этилового спирта, алкогольной и спиртосодержащей продукции. Основное функциональное предназначение системы ЕГАИС заключается в обеспечении информационно-технологической поддержки задач, закреплённых в Федеральном законе № 171-ФЗ от 22 ноября 1999 года «О государственном регулировании производства и оборота этилового спирта, алкогольной и спиртосодержащей продукции»:'
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
            block: 'footer',
            content: [
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
                    block: 'copyright',
                    content: '© POS server. All rights reserved.'
                }

            ]
        }
    ]
};