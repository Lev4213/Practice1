# Парсер вакансий с сайта hh.ru
Данный сервис осуществляет парсинг вакансий работодателей с сайта hh.ru по параметрам и выводит их в виде последовательности блоков. Также присутствует возможность фильтрации выведенных вакансий по названию.
Вы сможете получить общее представление об актуальных требованиях рынка труда и проанализировать рынок вакансий.

# Запуск 
1) Откройте командную строку
2) Введите последовательность команд:
   <br/>git clone https://github.com/Lev4213/Practice1 && cd Practice1
   <br/>docker compose build
   <br/>docker compose up
   <br/>Если выдаёт ошибку,то введите эту команду вместо первой: git clone https://github.com/Lev4213/Practice1.git && cd Practice1
   
4) Откройте браузер и введите в адресную строку http://localhost:3000
5) Перейдите на страницу "Загрузить вакансии", введите параметры для парсинга и нажмите "Загрузка вакансий"
6) Подождите некоторое время, а затем перейдите на страницу "Фильтр вакансий".На ней вы увидите список подходящих под ваши параметры вакансий.
