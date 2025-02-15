const compliments = [ 
    "ты у меня самая красивая) <3",
    "солнышко я всегда буду с тобой)",
    "у тя такая милая улыбка, улыбайся чаще солнышко))",
    "я тя оч сильно люблю киса <3",
    "ты у мя самая лучшая))",
    "я всегда буду рядом солнце)",
    "с тобой мир становится ярче) ты у мя лучшая)",
    "твоё тепло — это всё, что мне нужно",
    "люблю тебя так сильно, что слов даже мало))",
    "твоё тепло — это всё, что мне нужно)",
    "с тобой любой день — как праздник))",
    "ты — моя радость, киса <3",
    "я без тебя не смогу солнце",
    "ты для меня — всё) <3",
    "ты у меня самая идеальная, солнышко <3",
    "ты как светлый лучик в моём сером мире)",
    "я всегда буду рядом, ты моя опора)",
    "тебя мне не хватает всегда, киса <3",
    "ты — моя прелесть) <3",
    "я хочу дарить тебе счастье каждый день)",
    "ты для меня самый важный человек в мире <3",
    "ты как самый красивый момент, который не хочу отпускать)",
    "ты делаешь меня счастливым каждым твоим словом)",
    "когда ты рядом, весь мир становится ярче) <3",
    "ты у меня как звезда на небе, сияешь ярко)",
    "твоя доброта согревает даже в самый холодный день) <3",
    "ты всегда умеешь поднять настроение)",
    "с тобой каждый день — как новый приключенческий фильм))",
    "ты как лучик света, всегда в моём сердце)",
    "мне без тебя не хватает воздуха, киса <3",
    "ты — мой источник вдохновения) <3",
    "в твоих глазах светится всё, что мне нужно для счастья)",
    "ты как будто пришла с небес и осветила мою жизнь) <3",
    "ты у меня как самый красивый сон, который стал реальностью)",
    "когда ты улыбаешься, мир становится лучше) <3",
    "ты — моя сила и поддержка) <3",
    "весь мир теряет смысл без тебя, киса)",
    "ты — моя радость и счастье) <3",
    "с тобой каждый день — это что-то необычное) <3",
    "ты как самая красивая картина, которой восхищаюсь каждый день)",
    "ты у меня как самая красивая звезда в ночном небе) <3",
    "твоя душа такая чистая, как светлый день)",
    "ты — самая прекрасная вещь, которая случилась в моей жизни) <3",
    "ты у меня самая умная, киса) <3",
    "твоя улыбка — это мой день) <3",
    "я всегда буду ценить твои слова и поступки)",
    "ты — мой идеал, солнышко) <3",
    "твой смех — это как музыка для моих ушей)",
    "с тобой легко, как в лёгком ветре) <3",
    "ты как самая сильная звезда, которая не боится тьмы) <3",
    "ты как самая красивая жемчужина в океане)",
    "ты — моя любовь и смысл всего) <3",
    "ты — моё вдохновение каждый день) <3",
    "ты у меня самая необыкновенная) <3",
    "с тобой не бывает скучно) <3",
    "ты — лучшая версия самой себя) <3",
    "ты — невероятная, моя неповторимая) <3",
    "я просто не могу без тебя, киса <3"
];

function showCompliment() {
    const complimentElement = document.getElementById("compliment");
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.textContent = compliments[randomIndex];
    complimentElement.style.zIndex = "2";

    createEmojiHearts();
}

function createEmojiHearts() {
    const emojiContainer = document.getElementById("emoji-hearts");

    if (!emojiContainer) {
        console.error("Ошибка: элемент 'emoji-hearts' не найден!");
        return;
    }

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-emoji");
        heart.textContent = "❤️";
        heart.style.left = `${Math.random() * 80 + 10}%`;
        heart.style.bottom = "100px";
        heart.style.zIndex = "1";

        emojiContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}