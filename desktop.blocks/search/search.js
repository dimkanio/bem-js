modules.define(
    'search', // имя блока
    ['i-bem__dom', 'jquery'], // подключение зависимости

    // функция, в которую передаются имена используемых модулей
    function(provide, BEMDOM, $) {

        provide(BEMDOM.decl(this.name, { // декларация блока
            onSetMod: { // конструктор для описания реакции на события
                'js': {
                    'inited': function() {
                        this._input = this.findBlockInside('input');

                        // событие, на которое будет реакция
                        this.bindTo('submit', function(e) {
                            // предотвращение срабатывания события по умолчанию:
                            // отправка формы на сервер с перезагрузкой страницы
                            e.preventDefault();

                            // Блок поделится информацией (событием) о том, что ввели что-то в поиске
                            this.emit('search-submit', {
                                textdata: this._input.getVal()
                            });

                            $( '.homecard__text' ).append('<li>Адрес: ' + this._input.getVal() + '</li>');
                        });

                        }
                }
            }

        }));
    });