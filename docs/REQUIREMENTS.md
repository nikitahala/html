# Соответствие доступным требованиям

Основание: README из `references/practice-01`, `practice-02`, `practice-03`. Полные методические задания отсутствовали в архивах.

| Требование | Реализация |
| --- | --- |
| Смысловые блоки HTML | header, nav, main, section, article, footer; один h1 на странице |
| Навигация связана с id | about, tracks, schedule, signup из navigation.json |
| Повторяющиеся карточки | 6 направлений из content.csv |
| Таблица с заголовками и телом | caption, thead, tbody, th scope |
| Форма с label и ограничениями | required, minlength, maxlength, type=email |
| Flexbox и адаптивность | Общая шапка, медиазапрос 760px |
| Разделение SCSS | tokens, components, main; переменные, @use, mixin, вложенность |
| Grid и локальный компонент | Сетка 3/2/1 колонки; catalog-card и catalog-badge |
| Компиляция SCSS | npm run build, собранный styles.css включён |
| Bootstrap CSS и JS | Локальные файлы версии 5.3.8; без CDN |
| container/row/col | Сетка метрик панели |
| Modal через data-атрибуты | Кнопка добавления операции |
| Собственный обработчик и toast | Добавление и смена статуса; уведомление успеха/ошибки |
| Ошибочные состояния | Невалидная форма, пустой поиск, сбой загрузки уведомлений |
| Доступность | lang=ru, viewport, skip links, label, focus-visible, live regions, клавиатурный Bootstrap modal |

Данные преобразуются во время сборки в scripts/build.mjs; отображение задают шаблоны и CSS/SCSS. Поведение отделено в app.js, чистые функции — в assets/logic.js. Проект не требует сервера с бизнес-логикой.
