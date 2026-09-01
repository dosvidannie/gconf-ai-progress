# Три недели с AI

Интерактивная ретроспектива Анны Галкиной за 6–31 августа 2026 года: новые способы работы с AI, созданные продукты, рабочие системы, выступления и полная хронология обучения.

## Публичная версия

Сайт публикуется через GitHub Pages. Главная страница проекта — `index.html`.

- Текущая версия: https://dosvidannie.github.io/gconf-ai-progress/
- Архив всех версий: https://dosvidannie.github.io/gconf-ai-progress/versions/
- Девятая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/ninth/
- Восьмая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/eighth/
- Седьмая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/seventh/
- Шестая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/sixth/
- Пятая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/fifth/
- Четвёртая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/fourth/
- Третья версия: https://dosvidannie.github.io/gconf-ai-progress/versions/third/
- Вторая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/second/
- Первая версия: https://dosvidannie.github.io/gconf-ai-progress/versions/first/
- Сравнение девятой и актуальной: https://dosvidannie.github.io/gconf-ai-progress/compare/

## Структура проекта

```text
gconf-ai-progress/
├── index.html              # Главная страница сайта
├── README.md               # Описание проекта и инструкция
├── .gitignore              # Файлы, которые не нужно публиковать
├── .nojekyll               # Публиковать статические файлы без обработки Jekyll
├── compare/                # Страница сравнения версий рядом
├── versions/
│   ├── index.html          # Список всех сохранённых версий
│   ├── first/              # Первая версия
│   ├── second/             # Вторая версия
│   ├── third/              # Третья версия
│   ├── fourth/             # Четвёртая версия
│   ├── fifth/              # Пятая версия
│   ├── sixth/              # Шестая версия
│   ├── seventh/            # Седьмая версия
│   ├── eighth/             # Восьмая версия
│   └── ninth/              # Девятая версия
└── assets/
    ├── css/
    │   └── styles.css      # Внешний вид сайта
    ├── js/
    │   └── app.js          # Фильтры, карточки и другие интерактивные элементы
    └── images/             # Изображения, используемые на сайте
```

Такая структура подходит для небольшого статического сайта. Каждый новый самостоятельный сайт лучше хранить в отдельной локальной папке и отдельном GitHub-репозитории.

## Как обновлять опубликованный сайт

1. Изменить нужный файл внутри этой папки.
2. Проверить сайт локально, открыв `index.html`.
3. Сохранить изменения в Git:

   ```bash
   git status
   git add .
   git commit -m "Краткое описание изменений"
   git push
   ```

4. GitHub Pages автоматически обновит публичную страницу после отправки изменений в ветку `main`.

## Приватность

В публичную версию не включены медицинские значения, имена участников съёмок, приватные ссылки, почта, исходные фотографии и локальные пути. В репозитории находятся только файлы, необходимые для работы этой страницы.

## Лицензия

Материалы являются личным проектом автора. Разрешение на повторное использование контента и изображений не предоставляется.
