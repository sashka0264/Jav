Общая теория
=====================

**Область видимости** - это пространство имен переменных с определенным доступом к ним.

**ООП** - наследование, полиморфизм, инкапсуляция, абстракция. ФП - чистая функция, функция высшего порядка (может принимать функцию как аргумент, возвращать фукцию как аргумент или все это вместе).

**Flux** - методология, идея которой в отделении состояния компонентов от UI. 
Любой компонент может взаимодействовать с этим состоянием. Flux - это VIEW, STORE, DISPATCHER - ACTION. Все это составляет один поток.

**Структуры данных** - связные списки, массивы, очереди, стэк (первый зашел, последний вышел), хэш таблицы, деревья, графы. 

**Agile**
* Люди и взаимодействие важнее процессов и инструментов разработки.
* Работающий продукт важнее хорошей документации.
* Общение с заказчиком важнее договора с ним.
* Готовность вносить изменения в продукт важнее, чем следование заранее установленному плану.

**Императивное программирование** - описываю порядок действий.
**Деклоративное программирование** - описываю процесс (пример, function declaration).


**Паттерны проектирования - MVC, MVVM, MVP.**

**This** — это обьект, зависящий от контекста в котором оно применяется. Он может динамически изменяться.

**ES5 методы** -  reduce, map, filter, find, reverse

**Функция** — это какой-то отдельный блок кода, который можно, один раз объявив, вызывать столько раз, сколько нужно
Все переменные внутри функции – это свойства специального скрытого внутреннего объекта "лексическое окружение" который создаётся при её запуске.

**Повтори Swagger, всплытие событий, GraphQL**

**Прототип** - каждый обьект в JS ссылкается на другой обьект или на null через прототип.

Network Interaction
=====================

**Интернет** - глобальная сеть передачи данных. В нем работает множество протоколов, образующих стэк.

**OSI** - сетевая модель и имеет 7 уровней. Но, если максимально упростить, можно выделить основные протоколы:

1. IP => 
2. TCP (надежная доставка данных) =>
4. HTTP (основной протокол для потоковой передачи данных).

При HTTP запросе браузер сначала извелкает доменное имя и определяет адрес машины, к которой нужно подключиться (с помощью системы имен DNS доменное имя преобразуется в IP-адрес), затем устанавливается TCP (если HTTPS, то сначала TLS) соединение, а потом IP соединение. При получении данных идет обратный процесс - через IP => TCP => HTTP пришедшие данные расшифровываются, и в итоге мы видим результат.

**DNS** - база данных, которая хранит домены с их IP-адресами.

**REST** - архитектура, описывающая взаимодействие клиент-сервер. Имеет 5 обязательных ограничений:
* Каждый из клиент-сервер занимается исключительно своей работой.
* Отсутствие состояния на сервере (все, что нужно - в запросе или в базе данных).
* Кэширование ответов от сервера.
* Единообразный интерфейс (есть 4 правила).
* Возможность внедрить промежуточный прокси-сервер.

> Также стоит повторить 1xx-5xx ответы от сервера, HTTP (определение, методы запросов и заголовки) и CORS.

Patterns / Principles
=====================

[Основные принципы](./answers/principles.md)

[Основные паттерны проектирования](./answers/patterns.md)
