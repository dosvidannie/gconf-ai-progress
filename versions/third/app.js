const categoryLabels = {
      all: "Все",
      product: "Продукты",
      work: "Работа",
      visual: "Визуал",
      learning: "Обучение"
    };

    const results = [
      {
        number: "01", date: "8–9 августа", category: "product", status: "готово · приватно",
        title: "Дашборд здоровья",
        summary: "Пять PDF с анализами за 2016–2026 годы превращены в локальную систему динамики и актуальности — без передачи медицинских данных в интернет.",
        details: ["187 результатов, 106 показателей, 9 категорий", "Поиск, фильтры, карточки динамики и годовой контроль свежести", "Обнаруженный сбой локального сценария исправлен после проверки", "Следующая идея — отдельные режимы «для меня» и «для врача»"]
      },
      {
        number: "02", date: "10 августа", category: "product", status: "готово · публично",
        title: "Sense the Tense",
        summary: "Карточная браузерная игра для практики английских времён: от разгона идеи и ТЗ до тестирования, итераций и публичной ссылки.",
        details: ["Выбор времён и тем", "Колода от 5 до 99 карточек", "Прогресс и сохранение карточек для повторения в браузере", "Публичная версия без отдельного Railway или GitHub-процесса"],
        link: "https://sense-the-tense.galkina-a-97.chatgpt.site", linkLabel: "Открыть игру ↗"
      },
      {
        number: "03", date: "12–17 августа", category: "work", status: "протестировано",
        title: "Помощник планирования съёмок",
        summary: "Реальная проблема продюсера превращена в систему, которая проверяет данные, строит три расписания, объясняет компромиссы и готовит финал.",
        details: ["18 взаимосвязанных вкладок", "Контракт расширен до 26 правил", "Три варианта расписания и отдельный удобный просмотр", "Финал, персональное время прихода и общий анонс", "Проверка на реальной съёмке и обезличенная версия для демо"]
      },
      {
        number: "04", date: "17 августа", category: "work", status: "готово",
        title: "Скилл plan-fitness-shoots",
        summary: "Проверенная логика планировщика вынесена из одного длинного чата в постоянную инструкцию, доступную для следующих проектов.",
        details: ["Четыре режима: проверка, варианты, утверждение, пересборка", "Работа с основной таблицей и её структурными копиями", "Два безопасных теста без изменения рабочих данных", "Главный переход: память процесса отделена от памяти конкретного чата"]
      },
      {
        number: "05", date: "17–18 августа", category: "product", status: "готово · локально",
        title: "Сайт фотографа",
        summary: "Отдельная кликабельная HTML-версия сайта собрана из реального контента и визуального референса — без изменения действующего сайта.",
        details: ["Анализ 20-страничного PDF-референса Zenrixa", "Адаптивный первый экран, меню и анимации", "11 карточек галереи, фильтры и увеличение фотографий", "Цены, отзывы, контакты и архив переносимой версии"]
      },
      {
        number: "06", date: "18–21 августа", category: "visual", status: "развивается",
        title: "Цифровой аватар и AI-фотосессии",
        summary: "175 фотографий превращены в систему референсов и цифровую модель, которую я применила для генерации спортивных образов с разными позами и визуальными референсами.",
        details: ["Пять типов референсных листов и контроль исходников", "Утверждённая внешность и итоговый 18-кадровый коллаж", "Спортивные образы, новые позы и разные визуальные референсы", "Человеческая проверка сходства перед выбором результата", "Лимиты генерации стали частью планирования, а не неожиданностью"]
      },
      {
        number: "07", date: "18 августа", category: "work", status: "спроектировано",
        title: "ТЗ для снэпбордов тренеров",
        summary: "Личный эксперимент переведён в рабочий процесс #sekta: минимальный набор фотографий, лёгкое сообщение участнику, согласие и границы допустимых изменений.",
        details: ["Снизить число препятствий: отдельно запросить только лицо и мимику", "Остальные данные брать из уже имеющихся фотографий", "Зафиксировать цели использования и каналы публикации", "Собрать от человека запреты на изменения внешности", "Начать с пилота, а не со всей команды"]
      },
      {
        number: "08", date: "6–21 августа", category: "learning", status: "ведётся",
        title: "AI-дневник и GPT-коуч",
        summary: "Веду дневник работы с AI: фиксирую новые навыки, решения и ограничения, проверяю реальную пользу и превращаю записи в наглядную динамику прогресса.",
        details: ["Новые навыки и выводы зафиксированы по датам", "Визуальные отчёты формируются по записям дневника", "Холодные тесты вместо преждевременной полировки", "Правило остановки после двух безрезультатных циклов", "AI как честное зеркало, а не генератор поддержки"]
      },
      {
        number: "09", date: "11–12 августа", category: "learning", status: "зафиксировано в чатах",
        title: "Словарь и 15 идей продюсера",
        summary: "Непонятные термины вайбкодинга собраны в карту знаний, а рабочие боли продюсера — в портфель возможных инструментов с приоритетами.",
        details: ["Простые объяснения Git, GitHub, deploy, API, MCP и баз данных", "Связи между терминами вместо разрозненного списка", "15 идей инструментов с пользой и приоритетом", "Файлы упоминаются в истории, но сейчас отсутствуют в доступных папках"]
      },
      {
        number: "10", date: "20 августа", category: "work", status: "представлено команде",
        title: "Два выступления о работе с AI",
        summary: "На демо-дне GConf представила помощника планирования съёмок, а на тематическом командном звонке показала рабочую таблицу и другие созданные AI-инструменты.",
        details: ["Демо-день GConf: понятная история и живая демонстрация помощника", "Командный звонок: Codex, рабочие инструменты, наблюдения и идеи", "Коллеги отметили, что мои проекты и подход вдохновили их на собственные эксперименты", "Опыт представлен через реальные рабочие результаты, а не абстрактный рассказ"]
      },
      {
        number: "11", date: "21 августа", category: "visual", status: "готово · переиспользуемо",
        title: "Скилл фиксации внешности",
        summary: "Создала собственный AI-скилл, который сохраняет утверждённые черты лица и внешность цифрового аватара при генерации новых фотографий.",
        details: ["Утверждённая внешность зафиксирована как постоянное правило", "Новые позы, спортивные образы и ракурсы создаются без полного переизобретения модели", "Один и тот же процесс можно применять в следующих AI-фотосессиях", "Итоговое сходство всё равно проверяется человеком"]
      }
    ];

    const methods = [
      ["Кастомные инструкции", "Один раз зафиксировать правила взаимодействия, чтобы не объяснять базовые предпочтения заново."],
      ["Папка проекта", "Давать AI устойчивый рабочий контекст: файлы, история, инструкции и результаты рядом."],
      ["Внешний контекст", "Подключать документы и сервисы, а не пересказывать их вручную в сообщениях."],
      ["AI как оператор", "Поручать действия в Gmail и Google Drive с явной проверкой результата."],
      ["Разгон перед решением", "Сначала выяснить цель, механику и ограничения; только потом формировать ТЗ."],
      ["Концепция → ТЗ → сборка", "Разделять творческое прояснение и реализацию — как в Sense the Tense."],
      ["Режим планирования", "До реализации описывать систему, интерфейс и критерии готовности целиком."],
      ["Узкий MVP", "Не строить Production OS; сначала решить одну дорогую и повторяемую проблему."],
      ["Контракт помощника", "Фиксировать входы, правила, выходы, ошибки и приоритеты компромиссов."],
      ["Разделение логик", "AI — для текстов и вариантов; расписание, статусы и проверки — по строгим правилам."],
      ["Сценарное тестирование", "Проверять конфликты, отмены, пустые данные и отсутствие допустимого решения."],
      ["Человек в контуре", "Не доверять слову «готово»: сравнивать с реальностью и принимать финальное решение самой."],
      ["Итерации с остановкой", "Доводить результат малыми правками, но останавливаться после двух циклов без прогресса."],
      ["Privacy by design", "Медицинские данные и исходные фото держать локально; наружу выносить только безопасные производные."],
      ["Процесс → скилл", "Упаковывать повторяемую успешную работу в инструкцию, доступную новым чатам и проектам."]
    ];

    const timeline = [
      {date:"06 авг", source:"GCONF · основа", category:"learning", title:"Настроила персональный способ работы", text:"Кастомные инструкции, первые операции с PDF и безопасное подключение двух почтовых ящиков для сбора файлов."},
      {date:"07 авг", source:"GCONF · контекст", category:"learning", title:"AI получил рабочую среду", text:"Папка проекта, внешний контекст, Google Drive, подключённые сервисы и старт ежедневной рефлексии с GPT-коучем."},
      {date:"08 авг", source:"Здоровье", category:"product", title:"Из писем — в структурированный набор данных", text:"Нужные письма найдены в двух почтах, полные PDF отобраны без дублей и собраны в единый безопасный поток."},
      {date:"08 авг", source:"GCONF · коуч", category:"learning", title:"Освоила разгон и новое распределение ролей", text:"AI не делает всё магически: пользователь задаёт результат, контекст и критерии; агент выполняет, человек проверяет."},
      {date:"08 авг", source:"Здоровье", category:"product", title:"187 результатов извлечены из пяти PDF", text:"Данные 2016–2026 годов нормализованы в 106 показателей и девять категорий; подготовлены таблица и CSV."},
      {date:"09 авг", source:"Здоровье", category:"product", title:"Собран локальный health-дашборд", text:"Динамика, карточки показателей, поиск, фильтры и контроль свежести. После обнаружения пустой оболочки логика была переделана и проверена заново."},
      {date:"09 авг", source:"GCONF · действие", category:"learning", title:"Первое действие в Gmail через агента", text:"AI перешёл от ответов к выполнению внешней операции; результат был отдельно проверен."},
      {date:"10 авг", source:"GCONF · продукт", category:"product", title:"Идея игры превратилась в публичный сайт", text:"Разгон концепции, выбор механики, подробное ТЗ, реализация в Codex, серия мелких правок и публикация Sense the Tense."},
      {date:"10 авг", source:"GCONF · итерации", category:"learning", title:"Научилась доводить AI-результат", text:"Не ждать идеального первого ответа: тестировать, точно описывать расхождение и улучшать маленькими шагами."},
      {date:"11 авг", source:"GCONF · знания", category:"learning", title:"Непонятные термины стали картой", text:"Словарь вайбкодинга связал Git, GitHub, деплой, базы данных, API, MCP, AGENTS.md и мультиагентов простым языком."},
      {date:"11 авг", source:"GCONF · коуч", category:"learning", title:"Контент перестал считаться результатом сам по себе", text:"Один микроквест и один ограниченный блок времени оказались полезнее попытки «догнать всё» и накопить ещё видео."},
      {date:"12 авг", source:"Работа продюсера", category:"work", title:"15 рабочих болей превращены в идеи инструментов", text:"Появился портфель направлений для разработки — с пользой, способом разгрузки продюсера и приоритетом."},
      {date:"12 авг", source:"GCONF · план", category:"work", title:"Спроектирован MVP помощника съёмок", text:"Входные данные, ограничения, три варианта, конфликты, финал, анонс и частичная пересборка описаны до реализации."},
      {date:"12 авг", source:"GCONF · визуал", category:"visual", title:"Протестирован скилл презентаций", text:"Мудборд из Figma был переведён в презентацию; слабое визуальное качество потребовало ручной доработки и показало границу автоматизации."},
      {date:"13 авг", source:"Работа продюсера", category:"work", title:"Помощник прошёл холодный тест", text:"Реальные данные выявили несогласованные имена, пустые назначения и конфликты доступности — система не скрыла ошибки, а остановила построение."},
      {date:"13 авг", source:"Работа продюсера", category:"work", title:"Собраны три расписания и финал", text:"Контракт вырос до 26 правил, появился удобный лист сравнения, утверждённый график и общий анонс с персональным временем прихода."},
      {date:"13 авг", source:"#sekta · коммуникация", category:"work", title:"AI помог разобрать сбой рабочей коммуникации", text:"Подготовлены сообщения и вопросы по несостоявшейся записи, студийному оборудованию и организации подкастов — без лишней агрессии и с ясным следующим действием."},
      {date:"14–17 авг", source:"GCONF · демо-день", category:"work", title:"Выступила на демо-дне GConf", text:"Представила проверенный на реальной съёмке помощник планирования: показала логику рабочей таблицы и провела живую демонстрацию инструмента."},
      {date:"17 авг", source:"GCONF · скилл", category:"work", title:"Процесс отделён от длинного чата", text:"Планировщик упакован в plan-fitness-shoots с четырьмя режимами и протестирован без изменения рабочей таблицы."},
      {date:"17–18 авг", source:"Фотография", category:"product", title:"Собрана отдельная версия сайта фотографа", text:"Референс проанализирован как дизайн-система, контент перенесён из PDF, создана адаптивная HTML-страница с интерактивной галереей."},
      {date:"18 авг", source:"Личное развитие", category:"visual", title:"Начался системный сбор визуальной идентичности", text:"175 фотографий проиндексированы без изменения оригиналов; лицо, тело, волосы, мимика и детали разнесены по отдельным референсным листам."},
      {date:"18 авг", source:"#sekta · перенос опыта", category:"work", title:"Личный прототип превращён в рабочее ТЗ", text:"Для тренеров выбран достаточный минимум фотографий, лёгкий тон сообщения, информированное согласие и список запрещённых изменений внешности."},
      {date:"19 авг", source:"Личное развитие", category:"visual", title:"Собран 18-кадровый AI-снэпборд", text:"После многочисленных проверок получен финальный коллаж 3000×3000. Главный урок — идентичность требует ручного отбора, а лимит генераций нужно закладывать заранее."},
      {date:"20 авг", source:"GCONF · персонализация", category:"learning", title:"Разобралась с памятью и настройками", text:"Поняла, где хранятся память и персонализация, и перенесла свои настройки в приложение на компьютере."},
      {date:"20 авг", source:"GCONF · публикация", category:"product", title:"Опубликовала первый HTML-проект на GitHub", text:"Дайджест получил постоянную публичную ссылку, возможность обновлять текст голосовыми правками и отдельные адреса для предыдущих версий."},
      {date:"20 авг", source:"GCONF · режим целей", category:"learning", title:"Попробовала режим целей", text:"Протестировала отдельный формат долгой работы с AI; пока фиксирую его как эксперимент, а не как постоянную практику."},
      {date:"20 авг", source:"Команда · обмен опытом", category:"work", title:"Во второй раз выступила перед коллегами", text:"Рассказала, как использую Codex в работе, показала созданные инструменты и поделилась своими наблюдениями."},
      {date:"20 авг", source:"Ретроспектива", category:"learning", title:"Разрозненные результаты собраны в одну систему", text:"История из нескольких проектов и папок превратилась в карту новых практик, продуктов, провалов, ограничений и следующих проверок."},
      {date:"21 авг", source:"Личное развитие · визуал", category:"visual", title:"Цифровая модель перешла к спортивным образам", text:"Утверждённый аватар применён для генерации фотографий с разными спортивными образами, позами и визуальными референсами."},
      {date:"21 авг", source:"GCONF · собственный скилл", category:"visual", title:"Создала скилл фиксации внешности", text:"Утверждённые черты лица и внешность цифрового аватара вынесены в отдельный переиспользуемый процесс для следующих генераций."}
    ];

    const compareData = {
      before: {
        label: "Старт", number: "01", title: "AI как отдельный помощник",
        items: [
          ["Запрос", "Нужно подробно объяснять задачу в каждом новом чате"],
          ["Результат", "Ответ, текст или разовая красивая картинка"],
          ["Контроль", "Исправлять по ощущению, без формальных критериев"],
          ["Роль", "Пользователь просит — AI отвечает"]
        ]
      },
      after: {
        label: "Сейчас", number: "06", title: "AI как рабочая инфраструктура",
        items: [
          ["Запрос", "Контекст, входы, правила, ошибки и критерии готовности"],
          ["Результат", "Продукт, система, внешний action или переиспользуемый скилл"],
          ["Контроль", "Тест-сценарии, холодный прогон и человек в финальном решении"],
          ["Роль", "Пользователь проектирует и проверяет — агент выполняет"]
        ]
      }
    };

    const resultsGrid = document.getElementById("resultsGrid");
    const resultFilters = document.getElementById("resultFilters");
    const methodsGrid = document.getElementById("methodsGrid");
    const timelineList = document.getElementById("timelineList");
    const timelineFilters = document.getElementById("timelineFilters");
    const timelineCount = document.getElementById("timelineCount");

    function renderFilters(container, onChange) {
      Object.entries(categoryLabels).forEach(([key, label], index) => {
        const button = document.createElement("button");
        button.className = `chip${index === 0 ? " active" : ""}`;
        button.type = "button";
        button.dataset.filter = key;
        button.textContent = label;
        button.addEventListener("click", () => {
          container.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip === button));
          onChange(key);
        });
        container.appendChild(button);
      });
    }

    function renderResults(filter = "all") {
      resultsGrid.innerHTML = "";
      results.forEach(item => {
        const card = document.createElement("article");
        card.className = `result-card${filter !== "all" && item.category !== filter ? " hidden" : ""}`;
        card.dataset.category = item.category;
        const details = item.details.map(detail => `<li>${detail}</li>`).join("");
        const link = item.link ? `<a class="public-link" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel}</a>` : "";
        card.innerHTML = `
          <div class="result-accent"></div>
          <div class="result-body">
            <div class="result-meta"><span>${item.date}</span><span>${item.status}</span></div>
            <div class="result-number">${item.number}</div>
            <h3 class="result-title">${item.title}</h3>
            <p class="result-summary">${item.summary}</p>
            <div class="result-detail"><div><ul>${details}</ul></div></div>
            <div class="result-actions">
              <button class="toggle-detail" type="button" aria-expanded="false">Подробнее +</button>
              ${link}
            </div>
          </div>`;
        const toggle = card.querySelector(".toggle-detail");
        toggle.addEventListener("click", () => {
          const isOpen = card.classList.toggle("open");
          toggle.setAttribute("aria-expanded", String(isOpen));
          toggle.textContent = isOpen ? "Свернуть −" : "Подробнее +";
        });
        resultsGrid.appendChild(card);
      });
    }

    methods.forEach((method, index) => {
      const article = document.createElement("article");
      article.className = "method";
      article.innerHTML = `<span class="method-index">${String(index + 1).padStart(2, "0")}</span><h3>${method[0]}</h3><p>${method[1]}</p>`;
      methodsGrid.appendChild(article);
    });

    function renderTimeline(filter = "all") {
      timelineList.innerHTML = "";
      const visible = timeline.filter(item => filter === "all" || item.category === filter);
      timelineCount.textContent = String(visible.length).padStart(2, "0");
      visible.forEach(item => {
        const article = document.createElement("article");
        article.className = "timeline-event";
        article.dataset.category = item.category;
        article.innerHTML = `
          <div class="event-date">${item.date}</div>
          <div class="event-source">${item.source}</div>
          <div class="event-copy"><h3>${item.title}</h3><p>${item.text}</p></div>
          <div class="event-dot" aria-hidden="true"></div>`;
        timelineList.appendChild(article);
      });
    }

    function renderCompare(key) {
      const data = compareData[key];
      document.getElementById("comparePanel").innerHTML = `
        <div class="compare-side"><p>${data.label}</p><strong>${data.number}</strong></div>
        <div class="compare-content">
          <h3>${data.title}</h3>
          <div class="compare-list">
            ${data.items.map(item => `<div class="compare-item"><b>${item[0]}</b><span>${item[1]}</span></div>`).join("")}
          </div>
        </div>`;
    }

    renderFilters(resultFilters, renderResults);
    renderFilters(timelineFilters, renderTimeline);
    renderResults();
    renderTimeline();
    renderCompare("before");

    document.querySelectorAll(".compare-btn").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".compare-btn").forEach(btn => {
          const active = btn === button;
          btn.classList.toggle("active", active);
          btn.setAttribute("aria-selected", String(active));
        });
        renderCompare(button.dataset.compare);
      });
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    let lastLightboxTrigger = null;

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      document.body.style.overflow = "";
      if (lastLightboxTrigger) lastLightboxTrigger.focus();
    }

    document.querySelectorAll(".report-card").forEach(card => {
      card.addEventListener("click", () => {
        lastLightboxTrigger = card;
        lightboxImage.src = card.querySelector("img").src;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        lightboxClose.focus();
      });
    });
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox(); });

    const scrollProgress = document.getElementById("scrollProgress");
    function updateScrollProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    window.addEventListener("scroll", updateScrollProgress, {passive: true});
    updateScrollProgress();
