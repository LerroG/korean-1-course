"use strict";

const lessonWords = new Set("안녕|안녕하세요|안녕하십니까|자기소개|저|이름|사람|나라|어느|친구|씨|여러분|이름이 뭐예요?|어느 나라 사람이에요?|만나서 반가워요|직업이 뭐예요?|한국|미국|러시아|중국|베트남|멕시코|우즈베키스탄|학생|선생님|영어|동생".split("|"));
const familyWords = new Set("가족|부모님|아버지|어머니|동생|남동생|여동생|형|누나|오빠|언니|남자|여자|회사원|가수|배우|의사|직업|학생|대학생|선생님|사진|그리고|우리|제|가족 사진|우리 가족이에요|이 사람|누구예요?|이름이 뭐예요?|직업이 뭐예요?|만나서 반갑습니다|네|아니요|아니에요|소개하다|여기".split("|"));
const preferencesWords = new Set([
  "일상생활", "노래", "드라마", "음식", "전화", "하다", "가다", "듣다", "먹다", "좋아하다",
  "크다", "작다", "예쁘다", "좋다", "많다", "재미있다", "개", "꽃", "색", "야채", "영화", "여행",
  "밥", "빵", "과자", "김치", "비빔밥", "불고기", "한국 음식", "한국 드라마", "한국 노래",
  "지금", "무엇", "무슨", "그것", "또", "아주", "제일", "자주", "그리고", "그래서",
  "노래하다", "수영하다", "밥을 먹다", "노래를 듣다", "전화를 하다", "여행을 가다",
  "무슨 노래를 듣습니까?", "지금 무엇을 합니까?", "무슨 음식을 좋아합니까?", "저도 드라마를 좋아합니다.",
]);
const schoolWords = new Set([
  "학교", "교실", "도서관", "식당", "건물", "공원", "장소", "책상", "의자", "칠판", "시계", "지도",
  "컴퓨터", "가방", "책", "공책", "연필", "한국어", "영어", "학생", "선생님", "친구", "공부하다", "만나다",
  "있다", "없다", "많다", "넓다", "귀엽다", "소개하다", "모르다", "질문", "따라 하세요", "질문이 있어요",
  "잘 모르겠어요", "우리", "제", "여기", "어디", "누구", "이것", "저것", "같이", "그리고", "하지만",
  "한국어를 공부하다", "우리 교실", "제 책상", "여기는 어디입니까?", "누구의 가방입니까?",
  "학교에 무엇이 있습니까?", "여기가 지훈 씨의 학교입니까?",
]);
const weatherWords = new Set([
  "계절", "사계절", "봄", "여름", "가을", "겨울", "날씨", "하늘", "비", "눈", "바람", "꽃",
  "맑다", "흐리다", "덥다", "춥다", "따뜻하다", "시원하다", "좋다", "나쁘다", "어떻다",
  "오다", "내리다", "불다", "피다", "좋아하다", "오늘", "지금", "요즘", "자주", "가끔", "많이",
  "제일", "아주", "하지만", "고향", "우즈베키스탄", "러시아", "한국", "비가 오다", "비가 내리다",
  "눈이 오다", "눈이 내리다", "바람이 불다", "꽃이 피다", "오늘 날씨가 어때요?", "무슨 계절을 좋아해요?",
  "날씨가 좋지 않아요.", "저는 봄을 좋아해요.",
]);
const letterWords = new Set([
  "친구", "고향", "동생", "편지", "선물", "카드", "사진", "책", "생일", "생일 선물", "서울",
  "주다", "보내다", "쓰다", "전화하다", "연락하다", "축하하다", "편지를 쓰다", "편지를 보내다", "선물을 주다",
  "인사", "인사하다", "반갑다", "실례하다", "고맙다", "감사하다", "미안하다", "죄송하다", "괜찮다",
  "만나서 반갑습니다", "실례합니다", "고마워요", "감사합니다", "미안해요", "죄송합니다", "괜찮아요",
  "아니에요", "천만에요", "별 말씀을요", "안녕히 가세요", "안녕히 계세요", "또 봐요", "요즘 잘 지내요?",
  "생일 축하해요", "보통", "자주", "건강", "생활", "도와주다", "힘들다", "이번에는", "그럼", "드림", "뭘",
]);
const locationWords = new Set([
  "장소", "위치", "사물", "어디", "여기", "거기", "집", "방", "기숙사", "학교", "도서관", "서점",
  "회사", "은행", "마트", "우체국", "공원", "식당", "운동장", "나무",
  "책", "공책", "연필", "책상", "의자", "컴퓨터", "휴대 전화", "가방", "컵", "침대", "시계",
  "앞", "뒤", "옆", "위", "아래 / 밑", "사이", "가운데", "왼쪽", "오른쪽",
  "있다", "없다", "공부하다", "읽다", "쉬다", "살다", "사다", "일하다", "운동하다",
  "지금 어디에 있어요?", "어디에서 공부해요?", "책상 위에", "책상 아래에", "책과 공책 사이에",
]);
const weekWords = new Set([
  "일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십", "십일", "십이", "십삼", "이십", "이십칠", "이십구", "팔십육",
  "날짜", "언제", "며칠", "월", "요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일", "주말",
  "어제", "오늘", "내일", "지난주", "오전", "오후", "늦게", "일찍", "생일", "수업", "콘서트", "시험",
  "가다", "먹다", "쓰다", "만나다", "전화하다", "공부하다", "청소하다", "일어나다", "쉬다", "바쁘다", "피곤하다", "있다", "없다",
  "생일이 언제예요?", "오늘이 며칠이에요?", "오늘이 무슨 요일이에요?", "주말 잘 보냈어요?", "지난주에 뭘 했어요?",
]);
const sportWords = new Set([
  "운동", "수영", "축구", "농구", "야구", "운동하다", "수영하다", "농구를 하다", "축구를 하다", "야구를 하다", "수영을 하다",
  "잘하다", "못하다", "연습", "연습하다", "수영을 연습하다", "시작하다", "배우다", "가르치다", "기다리다", "만들다",
  "운동장", "수영장", "학교", "초등학교", "산", "고향", "친구", "선수", "아프다", "다리", "괜찮다", "기분", "시간", "쉬다",
  "자주", "매일", "다시", "하지만", "그때", "요즘", "오늘", "어제", "지난달", "지난주", "다음 주", "아침", "잘", "못", "부터",
  "저는 수영을 못해요.", "무슨 운동을 잘해요?", "언제부터 시작했어요?", "밥을 먹지 못해요.", "오늘부터 운동해요.",
]);
const meetingWords = new Set([
  "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열", "열하나", "열둘",
  "한 시", "두 시", "세 시", "네 시", "열두 시", "시", "분", "십이", "삼십", "몇", "시간",
  "오전", "오후", "아침", "점심", "저녁", "밤", "어제", "내일", "모레", "그날", "주말", "일과",
  "약속", "한가하다", "시간이 있다", "시간이 없다", "약속이 있다", "방학", "다녀오다", "아르바이트",
  "숙제", "숙제를 하다", "이야기하다", "맛있다", "비싸다", "정문", "선물", "같이", "듣다", "쓰다",
  "만나다", "먹다", "일어나다", "자다", "공부하다", "지금 몇 시예요?", "몇 시에 만날까요?",
  "같이 점심을 먹을까요?", "네, 좋아요.", "일곱 시에 만납시다.",
]);
const words = vocabularyDecks.flatMap(deck => deck.entries.map(([ko, ru]) => ({ ko, ru })));
const decks = [
  { title: "Все слова", words },
  { title: "Урок 1. Знакомство", words: words.filter(word => lessonWords.has(word.ko)) },
  { title: "Урок 2. Семья и профессии", words: words.filter(word => familyWords.has(word.ko)) },
  { title: "Урок 3. Я тоже люблю сериалы", words: words.filter(word => preferencesWords.has(word.ko)) },
  { title: "Урок 4. Это школа Чжихуна?", words: words.filter(word => schoolWords.has(word.ko)) },
  { title: "Урок 5. Погода плохая", words: words.filter(word => weatherWords.has(word.ko)) },
  { title: "Урок 6. Я пишу письмо другу", words: words.filter(word => letterWords.has(word.ko)) },
  { title: "Урок 7. Где вы сейчас?", words: words.filter(word => locationWords.has(word.ko)) },
  { title: "Урок 8. Я встретился с другом в субботу", words: words.filter(word => weekWords.has(word.ko)) },
  { title: "Урок 9. Я не умею плавать", words: words.filter(word => sportWords.has(word.ko)) },
  { title: "Урок 10. Может, вместе пообедаем?", words: words.filter(word => meetingWords.has(word.ko)) },
  ...vocabularyDecks.map(deck => ({
    title: deck.title,
    words: deck.entries.map(([ko, ru]) => ({ ko, ru })),
  })),
];
const lessonQuestions = [
  ["Какая форма подходит к 저?", "저는", ["저은", "저이에요", "저예요"], "У слога 저 нет конечной согласной, поэтому частица 는."],
  ["Добавь частицу темы к 선생님.", "선생님은", ["선생님는", "선생님예요", "선생님이에요"], "Последний слог 님 заканчивается на ㅁ, поэтому частица 은."],
  ["Закончи предложение.\n저는 학생___.", "이에요", ["예요", "은", "는"], "Последний слог 생 заканчивается на ㅇ, поэтому нужна форма 이에요."],
  ["Закончи предложение.\n저는 리사___.", "예요", ["이에요", "은", "는"], "У слога 사 нет конечной согласной, поэтому нужна форма 예요."],
  ["Как спросить «Как вас зовут?»", "이름이 뭐예요?", ["어느 나라 사람이에요?", "직업이 뭐예요?", "학생이에요?"], "이름 — имя. 직업 — профессия."],
  ["Как сказать «Я из Вьетнама»?", "저는 베트남 사람이에요.", ["저는 중국 사람이에요.", "저는 베트남 사람예요.", "저은 베트남 사람이에요."], "베트남 — Вьетнам. После 사람 стоит 이에요, после 저 — 는."],
  ["Прочитай и определи, откуда Мари.\n저는 마리예요. 프랑스 사람이에요. 저는 선생님이에요.", "Из Франции", ["Из Китая", "Из Мексики", "Из США"], "프랑스 — Франция."],
  ["В какой фразе Лиза названа преподавателем английского?", "리사 씨는 영어 선생님이에요.", ["리사 씨는 학생이에요.", "리사 씨는 미국 사람이에요.", "리사 씨는 친구예요."], "영어 — английский, 선생님 — учитель или преподаватель."],
];
const familyQuestions = [
  ["Выбери 이 или 가.\n동생___ 학생이에요.", "이", ["가"], "Слог 생 заканчивается на ㅇ. Получается 동생이 학생이에요."],
  ["Выбери 이 или 가.\n어머니___ 의사예요.", "가", ["이"], "У последнего слога 니 нет 받침. Получается 어머니가 의사예요."],
  ["Закончи фразу «Я не офисный работник».\n저는 회사원___ 아니에요.", "이", ["가"], "Слог 원 заканчивается на ㄴ. После 회사원 нужно 이."],
  ["Как сказать «Она не певица»?", "가수가 아니에요.", ["가수이 아니에요.", "가수예요.", "가수이에요."], "После 가수 ставим 가, потому что 수 без 받침. 아니에요 пишем отдельно."],
  ["Девушка говорит о своём старшем брате. Как она его назовёт?", "오빠", ["형", "누나", "언니"], "Девушка говорит 오빠 о старшем брате. Парень в этом случае говорит 형."],
  ["Парень представляет свою старшую сестру. Как он её назовёт?", "누나", ["언니", "오빠", "형"], "Парень говорит 누나 о старшей сестре. Девушка в этом случае говорит 언니."],
  ["Как спросить «Кем вы работаете?»", "직업이 뭐예요?", ["이름이 뭐예요?", "이 사람이 누구예요?", "어느 나라 사람이에요?"], "직업 — профессия. 직업이 뭐예요? буквально спрашивает, какая у человека профессия."],
  ["Ответь «Нет, он не врач. Он актёр».\n아버지가 의사예요?", "아니요. 의사가 아니에요. 배우예요.", ["네, 의사예요.", "아니요. 배우가 아니에요. 의사예요.", "아니요. 가수가 아니에요. 회사원이에요."], "의사 — врач, 배우 — актёр. В начале ответа можно отдельно сказать 아니요."],
  ["Кем работает мать рассказчика?\n어머니는 배우예요. 가수가 아니에요.", "Актрисой", ["Певицей", "Врачом", "Учителем"], "배우예요 означает «она актриса». 가수가 아니에요 означает «она не певица»."],
  ["Что о себе говорит рассказчик?\n저는 대학생이에요. 회사원이 아니에요.", "Учится в университете", ["Работает в компании", "Работает врачом", "Играет в кино"], "대학생 — студент вуза. 회사원이 아니에요 отрицает, что он сотрудник компании."],
];
const preferencesQuestions = [
  ["Выбери официально-вежливую форму настоящего времени для 가다.", "갑니다", ["가습니다", "갔습니다", "가요"], "Основа 가 заканчивается на гласную. Вписываем ㅂ в слог 가 и добавляем 니다."],
  ["Выбери вопросительную форму глагола 듣다.", "듣습니까?", ["듣ㅂ니까?", "들습니까?", "듣습니다."], "Основа 듣 заканчивается на ㄷ. Перед -습니까? эта согласная сохраняется."],
  ["Заполни пропуск.\n저는 빵___ 먹습니다.", "을", ["를"], "У 빵 есть конечная согласная ㅇ, поэтому ставим 을."],
  ["Заполни пропуск.\n한국 노래___ 듣습니다.", "를", ["을"], "Последний слог 래 заканчивается на гласную, поэтому ставим 를."],
  ["Какая частица подходит к 음식 перед 좋습니다?\n저는 한국 음식___ 좋습니다.", "이", ["가", "을", "를"], "С 좋다 используем 이/가. У слога 식 есть конечная согласная ㄱ, поэтому ставим 이."],
  ["Друг говорит, что любит сериалы. Как ответить «Я тоже люблю сериалы»?", "저도 드라마를 좋아합니다.", ["저는 드라마도 좋아합니다.", "저는 드라마를 좋아합니까?", "저는 노래도 좋아합니다."], "도 стоит после 저. Друг любит сериалы, и я тоже."],
  ["Ты уже сказал, что любишь песни. Добавь «Я люблю и сериалы тоже».", "저는 드라마도 좋아합니다.", ["저도 드라마를 좋아합니다.", "저는 노래도 좋아합니다.", "저는 드라마를 좋아합니까?"], "도 после 드라마 добавляет сериалы к тому, что ты уже назвал."],
  ["Как спросить «Какую песню вы слушаете?»", "무슨 노래를 듣습니까?", ["무슨 음식을 먹습니까?", "한국 노래를 좋아합니까?", "지금 무엇을 합니까?"], "무슨 значит «какой, что за» и стоит перед существительным 노래."],
  ["Выбери форму прилагательного 예쁘다.\n꽃이 ___.", "예쁩니다", ["예쁘습니다", "예쁩니까?", "예뻐요"], "Основа 예쁘 заканчивается на гласную. Для утверждения в официально-вежливом стиле добавляем -ㅂ니다."],
  ["Как часто рассказчик ест пибимпап?\n비빔밥을 제일 좋아합니다. 그래서 비빔밥을 자주 먹습니다.", "Часто", ["Редко", "Каждый день", "Только по выходным"], "자주 означает «часто». 제일 좋아합니다 означает «любит больше всего»."],
];
const schoolQuestions = [
  ["Выбери 와 или 과.\n한국어___ 영어를 공부합니다.", "와", ["과"], "После гласной в слоге 어 ставим 와. 한국어와 영어 — корейский и английский."],
  ["Выбери 와 или 과.\n도서관___ 식당이 있습니다.", "과", ["와"], "После конечной ㄴ в слоге 관 ставим 과. 도서관과 식당 — библиотека и столовая."],
  ["Как сказать «парта и стул» с 하고?", "책상하고 의자", ["책상와 의자", "책상의 의자", "책상 하고의자"], "하고 пишется слитно с первым существительным. Второе существительное пишется отдельно."],
  ["Заполни пропуск в выражении «школа Чжихуна».\n지훈 씨___ 학교", "의", ["하고", "와", "를"], "의 присоединяется к слову, которое обозначает владельца. Получается 지훈 씨의 학교."],
  ["Как сказать «Это моя парта»?", "이것은 제 책상입니다.", ["이것은 저와 책상입니다.", "이것은 리사 씨의 책상입니다.", "이것은 제 의자입니다."], "제 — короткая форма 저의. 책상 — парта или письменный стол."],
  ["Как сказать «Я учу корейский вместе с другом»?", "저는 친구와 같이 한국어를 공부합니다.", ["저는 친구의 책을 읽습니다.", "저는 친구하고 영어를 공부합니다.", "저는 한국어하고 영어를 공부합니다."], "친구와 같이 означает «вместе с другом». 한국어를 공부합니다 — «учу корейский»."],
  ["Как сказать «В классе нет компьютера»?", "교실에 컴퓨터가 없습니다.", ["교실에 컴퓨터가 있습니다.", "교실에 시계가 없습니다.", "교실에 컴퓨터가 많습니다."], "교실에 значит «в классе». 없습니다 говорит об отсутствии компьютера."],
  ["Что значит 질문이 있어요?", "У меня есть вопрос", ["Повторяйте за мной", "Я не совсем понимаю", "Это библиотека"], "질문 — «вопрос», 있어요 — вежливая форма 있다 («есть»)."],
  ["Как спросить «Чья это сумка?»", "누구의 가방입니까?", ["여기는 어디입니까?", "누구와 공부합니까?", "학교에 가방이 있습니까?"], "누구 значит «кто», 누구의 — «чей». 가방 — «сумка, рюкзак»."],
  ["Что есть в классе?\n칠판이 있습니다. 그리고 시계하고 지도도 있습니다. 하지만 컴퓨터는 없습니다.", "Доска, часы и карта", ["Компьютер и карта", "Только доска", "Компьютер, часы и доска"], "칠판, 시계 и 지도 — доска, часы и карта. 컴퓨터는 없습니다 значит «компьютера нет»."],
];
const weatherQuestions = [
  ["Выбери форму 맑다 в повседневной вежливой речи.\n하늘이 ___.", "맑아요", ["맑어요", "맑해요", "맑습니다"], "В основе 맑 последняя гласная ㅏ, поэтому добавляем -아요."],
  ["Выбери форму 먹다 в повседневной вежливой речи.\n밥을 ___.", "먹어요", ["먹아요", "먹해요", "먹습니다"], "В основе 먹 гласная ㅓ, поэтому добавляем -어요."],
  ["Как сказать «Я люблю весну» в повседневной вежливой речи?", "저는 봄을 좋아해요.", ["저는 봄을 좋아하아요.", "저는 봄을 안 좋아해요.", "저는 가을을 좋아해요."], "좋아하다 переходит в 좋아해요. 봄 — весна."],
  ["Выбери форму 춥다 в повседневной вежливой речи.\n겨울에는 ___.", "추워요", ["춥어요", "춥아요", "추와요"], "В форме 추워요 конечная ㅂ меняется на ㅜ. Гласные ㅜ и ㅓ сливаются в ㅝ."],
  ["Закончи фразу «Идёт дождь». Употреби 오다.\n비가 ___.", "와요", ["오아요", "와어요", "내려요"], "Окончание -아요 соединяется с основой 오, и две гласные сливаются в ㅘ."],
  ["Скажи «Снег не идёт», используя 안.", "눈이 안 와요.", ["눈이 안와요.", "눈이 와요 안.", "비가 안 와요."], "안 пишется отдельно перед 와요. 눈 — снег, 비 — дождь."],
  ["Скажи «Погода плохая», используя -지 않아요.", "날씨가 좋지 않아요.", ["날씨가 좋아요 않아요.", "날씨가 좋지않아요.", "날씨가 안 좋아요."], "Добавляем -지 к основе 좋 и пишем 않아요 отдельно. Фраза 날씨가 안 좋아요 передаёт то же значение с помощью 안."],
  ["Как спросить «Какая сегодня погода?»", "오늘 날씨가 어때요?", ["무슨 계절을 좋아해요?", "오늘 눈이 와요?", "요즘 고향 날씨가 좋아요?"], "오늘 — сегодня. 날씨가 어때요? — Какая погода?"],
  ["Как по-корейски «осень»?", "가을", ["봄", "여름", "겨울"], "봄 — весна, 여름 — лето, 가을 — осень, 겨울 — зима."],
  ["Как описано лето в тексте?\n여름은 아주 더워요. 자주 비가 와요.", "Очень жарко, часто идёт дождь", ["Тепло и ветрено", "Прохладно и ясно", "Холодно, идёт снег"], "아주 더워요 означает «очень жарко». 자주 비가 와요 означает «часто идёт дождь»."],
];
const letterQuestions = [
  ["Заполни пропуск.\n저는 친구___ 편지를 써요.", "에게", ["가", "를", "의"], "친구에게 отвечает на вопрос «кому?». 편지를 означает «письмо» и отвечает на вопрос «что?»."],
  ["В какой фразе получатель обозначен разговорной частицей?", "동생한테 책을 줘요.", ["동생에게 책을 줘요.", "동생이 책을 줘요.", "동생도 책을 줘요."], "한테 часто употребляют в разговоре. 동생한테 означает «младшему брату или младшей сестре»."],
  ["Кто получает подарок?\n리사 씨가 지훈 씨에게 선물을 줘요.", "Чжихун", ["Лиза", "Оба", "Получатель не указан"], "가 отмечает того, кто дарит. 에게 стоит после имени того, кто получает подарок."],
  ["Как сказать «Я отправляю только письмо»?", "저는 편지만 보내요.", ["저는 편지도 보내요.", "저는 편지를 써요.", "저는 선물만 보내요."], "만 присоединяется к 편지. 편지만 значит «только письмо»."],
  ["Что означает это предложение?\n동생만 학생이에요.", "Только младший брат или младшая сестра учится", ["Младший брат или младшая сестра тоже учится", "У студента есть младший брат или младшая сестра", "Младший брат или младшая сестра работает"], "만 стоит после 동생 и выделяет того, кто учится."],
  ["Выбери вежливую форму настоящего времени для 쓰다.\n친구한테 편지를 ___.", "써요", ["쓰어요", "쓰아요", "썼어요"], "В форме 써요 гласная ㅡ выпадает. 썼어요 — форма прошедшего времени."],
  ["Выбери вежливую форму настоящего времени для 주다.\n친구에게 선물을 ___.", "줘요", ["주아요", "줘어요", "줬어요"], "В форме 줘요 гласные ㅜ и ㅓ сливаются в ㅝ. 줬어요 — форма прошедшего времени."],
  ["Друг уходит, а ты остаёшься. Что сказать ему на прощание?", "안녕히 가세요.", ["안녕히 계세요.", "실례합니다.", "만나서 반갑습니다."], "안녕히 가세요 говорят тому, кто уходит. 가다 означает «идти, уходить»."],
  ["Что можно ответить на 고마워요?", "아니에요.", ["고마워요?", "어디에 있어요?", "생일 축하해요."], "В ответ на благодарность 아니에요 означает «Не за что»."],
  ["Какие фотографии отправляет Лиза?\n이번에는 서울 사진만 있어요.", "Только фотографии Сеула", ["Фотографии Сеула и родного города", "Только семейные фотографии", "Фотографии друзей"], "서울 사진 — фотографии Сеула. 만 показывает, что в этот раз есть только они."],
];
const locationQuestions = [
  ["Заполни пропуск.\n저는 지금 학교___ 있어요.", "에", ["에서", "에게", "를"], "에 показывает, где находится человек. Получается 학교에 있어요 — «нахожусь в школе»."],
  ["Заполни пропуск.\n도서관___ 한국어를 공부해요.", "에서", ["에", "한테", "가"], "공부해요 обозначает действие. 도서관에서 — «в библиотеке», где занимаются."],
  ["Заполни пропуск.\n준영 씨가 공원___ 운동해요.", "에서", ["에", "에게", "를"], "운동해요 — «занимается спортом». 에서 обозначает место этого действия."],
  ["Заполни пропуск.\n언니가 방___ 없어요.", "에", ["에서", "를", "한테"], "С 없다 для обозначения места употребляем 에. 언니가 방에 없어요 — «старшей сестры нет в комнате»."],
  ["Как сказать «Книга на столе»?", "책이 책상 위에 있어요.", ["책이 책상 아래에 있어요.", "책이 책상 옆에 있어요.", "책이 책상 뒤에 있어요."], "위에 означает «на, сверху». 아래에 — «под», 옆에 — «рядом», 뒤에 — «за»."],
  ["Сумка стоит слева от стола. Заполни пропуск.\n책상 ___에 가방이 있어요.", "왼쪽", ["오른쪽", "위", "가운데"], "왼쪽 — левая сторона. 책상 왼쪽에 — «слева от стола»."],
  ["Выбери перевод «Карандаш между книгой и тетрадью».", "책과 공책 사이에 연필이 있어요.", ["책 위에 연필과 공책이 있어요.", "공책 아래에 책과 연필이 있어요.", "연필 옆에 책과 공책이 있어요."], "책과 공책 사이에 — «между книгой и тетрадью». 사이 пишется отдельно, 에 присоединяется к 사이."],
  ["Как спросить «Где вы учитесь?»", "어디에서 공부해요?", ["어디에 있어요?", "무엇을 공부해요?", "누구와 공부해요?"], "어디에서 спрашивает о месте действия. 공부해요 — «учитесь, занимаетесь»."],
  ["Что делает Наташа?\n나타샤 씨는 서점에서 책을 사요.", "Покупает книгу в книжном магазине", ["Читает книгу дома", "Покупает тетрадь в супермаркете", "Учится в библиотеке"], "서점에서 — «в книжном магазине», 책을 사요 — «покупает книгу»."],
  ["Где находится тетрадь?\n컴퓨터 앞에 공책과 연필이 있습니다. 공책은 연필과 컵 사이에 있습니다.", "Перед компьютером, между карандашом и чашкой", ["Под компьютером", "За компьютером, рядом с сумкой", "Между компьютером и сумкой"], "컴퓨터 앞에 — «перед компьютером». 연필과 컵 사이에 — «между карандашом и чашкой»."],
];
const weekQuestions = [
  ["Выбери повседневную вежливую форму прошедшего времени.\n어제 빵을 ___. (먹다)", "먹었어요", ["먹어요", "먹았어요", "먹을 거예요"], "В основе 먹 гласная ㅓ, поэтому 먹다 → 먹었어요: «ел(а)»."],
  ["Скажи «В субботу я занимался корейским».\n토요일에 한국어를 ___. (공부하다)", "공부했어요", ["공부해요", "공부하었어요", "공부핬어요"], "하다 в прошедшем времени становится 했어요. 공부하다 → 공부했어요."],
  ["Выбери повседневную вежливую форму прошедшего времени.\n친구한테 편지를 ___. (쓰다)", "썼어요", ["써요", "쓰었어요", "쌌어요"], "У 쓰다 гласная ㅡ выпадает: 써요 → 썼어요."],
  ["Заполни пропуск в повседневной вежливой форме прошедшего времени.\n지난주에 정말 ___. (바쁘다)", "바빴어요", ["바쁘었어요", "바뻤어요", "바빠요"], "ㅡ выпадает. Предыдущая гласная ㅏ определяет форму 바빴어요 — «был(а) занят(а)»."],
  ["Заполни пропуск: «В понедельник я встретился с другом».\n월요일___ 친구를 만났어요.", "에", ["에서", "에게", "를"], "에 после названия дня недели обозначает время: 월요일에 — «в понедельник»."],
  ["Как записать число 27 китайско-корейскими числительными?", "이십칠", ["십칠", "이십구", "스물일곱"], "이십 — 20, 칠 — 7. 스물일곱 относится к исконно корейской системе числительных."],
  ["Какое число записано словом 팔십육?", "86", ["68", "18", "76"], "팔십 — восемь десятков, 육 — шесть. Получается 86."],
  ["Как спросить «Какой сегодня день недели?»", "오늘이 무슨 요일이에요?", ["오늘이 며칠이에요?", "생일이 언제예요?", "주말에 뭘 했어요?"], "무슨 요일 спрашивает о дне недели. 며칠 — о числе месяца или количестве дней."],
  ["В какой день был экзамен?\n금요일에 한국어 시험이 있었습니다. 그래서 목요일에 도서관에서 공부했습니다.", "В пятницу", ["В четверг", "В среду", "В субботу"], "금요일 — пятница. В четверг (목요일) рассказчик готовился в библиотеке."],
  ["Что рассказчик делал в субботу утром?\n토요일 오전에는 집에서 청소했습니다. 오후에 고향 집에 전화했습니다.", "Убирался дома", ["Звонил домой в родной город", "Сдавал экзамен", "Был на концерте"], "오전에는 집에서 청소했습니다 — «утром убирался дома». Звонок был 오후에, во второй половине дня."],
];
const sportQuestions = [
  ["Заполни пропуск: «Я учу корейский с января».\n1월___ 한국어를 공부했어요.", "부터", ["에서", "에게", "를"], "부터 обозначает начало: 1월부터 — «с января». Частица присоединяется к существительному."],
  ["Как спросить «С какого времени вы начали плавать?»", "언제부터 수영을 시작했어요?", ["어디에서 수영을 시작했어요?", "누구와 수영을 시작했어요?", "왜 수영을 시작했어요?"], "언제부터 — «с какого времени?», 어디에서 — «где?», 누구와 — «с кем?», 왜 — «почему?»."],
  ["Выбери короткую форму со словом 못: «Я не могу поесть».", "밥을 못 먹어요.", ["밥을 먹어요 못.", "밥을 안 먹어요.", "밥을 잘 먹어요."], "못 стоит отдельно перед 먹어요 и показывает невозможность. 안 먹어요 значит «не ем», 잘 먹어요 — «хорошо ем»."],
  ["Допиши длинную форму невозможности действия.\n수영을 하___ 못해요.", "지", ["고", "는", "에"], "К основе глагола добавляется -지 못해요: 하다 → 하지 못해요."],
  ["Какая фраза передаёт «Я плохо плаваю»?", "저는 수영을 잘 못해요.", ["저는 수영을 잘해요.", "저는 수영을 좋아해요.", "저는 수영을 시작했어요."], "잘 못해요 означает, что действие получается плохо. 잘해요 — «хорошо умею», 좋아해요 — «люблю»."],
  ["Выбери равнозначную краткую фразу.\n저는 농구를 해요.", "저는 농구해요.", ["저는 야구해요.", "저는 농구를 좋아해요.", "저는 농구를 못해요."], "농구를 하다 и 농구하다 означают «играть в баскетбол»."],
  ["Как сказать «Я тренируюсь в футболе»?", "축구를 연습해요.", ["축구를 시작해요.", "축구를 가르쳐요.", "축구를 못해요."], "연습하다 — «тренироваться, практиковаться». 시작하다 — «начинать», 가르치다 — «учить кого-то»."],
  ["Как часто друзья играют в баскетбол?\n우리는 자주 학교 운동장에서 농구를 합니다.", "Часто", ["Каждый день", "Редко", "Только по воскресеньям"], "자주 — «часто». 매일 — «каждый день». В тексте говорится 자주."],
  ["Кто учил рассказчика баскетболу?\n저는 나타샤 씨한테 농구를 많이 배웠습니다.", "Наташа", ["Чжихун", "Учитель корейского", "Рассказчик учил Наташу"], "배웠습니다 — «учился». 나타샤 씨한테 здесь указывает, у кого рассказчик учился."],
  ["Почему рассказчик сейчас не играет с Наташей?\n지난주부터 제 다리가 조금 아팠습니다. 그런데 지금은 다리가 괜찮습니다.", "Нога болела с прошлой недели; сейчас уже в порядке", ["Наташа перестала любить баскетбол", "Рассказчик уехал в Россию", "На площадке каждый день идёт дождь"], "다리가 아팠습니다 — «нога болела». 지금은 괜찮습니다 — «сейчас в порядке»."],
];
const meetingQuestions = [
  ["Как прочитать время 12:02?", "열두 시 이 분", ["십이 시 둘 분", "열둘 시 이 분", "열두 시 두 분"], "Часы — корейские числа: 열둘 перед 시 меняется на 열두. Минуты — китайско-корейские: 이 분."],
  ["Как прочитать время 7:12?", "일곱 시 십이 분", ["칠 시 열두 분", "일곱 시 열둘 분", "칠 시 십이 분"], "Для часов нужно 일곱, для минут — 십이."],
  ["Как сказать «Встретимся в четыре часа дня»?", "오후 네 시에 만나요.", ["오전 네 시에 만나요.", "오후 넷 시에 만나요.", "오후 사 시에 만나요."], "После полудня — 오후. 넷 перед 시 сокращается до 네. 에 показывает время встречи."],
  ["Предложи вместе пообедать.\n같이 점심을 ___?", "먹을까요", ["먹ㄹ까요", "먹읍시다", "먹었어요"], "Вопрос-предложение: основа 먹 с 받침 + 을까요? 먹읍시다 — предложение «давайте поедим», без вопроса."],
  ["Выбери форму 듣다 с -(으)ㄹ까요.", "들을까요?", ["듣을까요?", "듣ㄹ까요?", "들까요?"], "듣다 — исключение: перед гласной ㄷ меняется на ㄹ. 듣 + 을까요 → 들을까요."],
  ["Предложи: «Давайте встретимся в семь».\n일곱 시에 ___.", "만납시다", ["만나읍시다", "만날까요", "만났어요"], "Основа 만나 без 받침 получает -ㅂ시다: 만납시다."],
  ["Соедини: 우리 학교는 커요. + 우리 학교는 좋아요.", "우리 학교는 크고 좋아요.", ["우리 학교는 커고 좋아요.", "우리 학교는 크하고 좋아요.", "우리 학교는 크고 좋고."], "-고 присоединяется к основе 크, а не к форме 커요. Получается 크고 좋아요."],
  ["Как сказать «Вчера сделал(а) домашнее задание и почитал(а) книгу»?", "어제 숙제를 하고 책을 읽었어요.", ["어제 숙제를 하고 책을 읽어요.", "내일 숙제를 하고 책을 읽었어요.", "어제 숙제를 하고 책을 읽을까요?"], "어제 — вчера. В цепочке действий прошедшее время можно выразить последним глаголом: 읽었어요."],
  ["Почему Чжихун не может встретиться завтра?\n내일은 아르바이트도 있고 오후에 친구도 만나요. 그래서 못 만나요.", "У него подработка и встреча с другом", ["Он едет в Россию", "У него болит нога", "Он каждый день работает ночью"], "아르바이트 — подработка. 오후에 친구도 만나요 — после обеда он также встречается с другом."],
  ["На какой день Чжихун предлагает встречу?\n우리 모레 만날까요? 일요일에 러시아 여행 이야기도 많이 합시다.", "На воскресенье, послезавтра", ["На субботу, завтра", "На среду утром", "На сегодняшний вечер"], "모레 — послезавтра. 일요일 — воскресенье. Конкретная календарная дата в переписке не указана."],
];
const testsByLesson = {
  lesson: lessonQuestions,
  "lesson-02": familyQuestions,
  "lesson-03": preferencesQuestions,
  "lesson-04": schoolQuestions,
  "lesson-05": weatherQuestions,
  "lesson-06": letterQuestions,
  "lesson-07": locationQuestions,
  "lesson-08": weekQuestions,
  "lesson-09": sportQuestions,
  "lesson-10": meetingQuestions,
};

const byId = id => document.getElementById(id);
const views = [...document.querySelectorAll("[data-view]")];
const reviewForm = byId("card-setup");
const reviewOutput = byId("card-session");
const testForm = byId("test-setup");
const testOutput = byId("test-session");
const drafts = document.querySelectorAll("[data-draft]");
const prefix = "korean-exam:";
const memory = new Map();
let persistent = true;
const minute = 60_000;
const day = 24 * 60 * minute;
const ratings = [
  { label: "Снова", interval: () => 10 * minute },
  { label: "Трудно", interval: previous => Math.max(day, previous * 1.2) },
  { label: "Хорошо", interval: previous => Math.max(3 * day, previous * 2) },
  { label: "Легко", interval: previous => Math.max(7 * day, previous * 3) },
];

function markStorageUnavailable() {
  persistent = false;
  byId("storage-status").textContent = "Хранилище браузера недоступно. Прогресс действует до закрытия страницы.";
  for (const status of document.querySelectorAll("[data-draft-status]")) {
    status.textContent = "Черновик доступен до закрытия страницы.";
  }
}

function read(key, fallback) {
  if (persistent) {
    try {
      const value = localStorage.getItem(prefix + key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      markStorageUnavailable();
    }
  }
  return memory.get(key) ?? fallback;
}

function write(key, value) {
  memory.set(key, value);
  if (persistent) {
    try {
      localStorage.setItem(prefix + key, JSON.stringify(value));
    } catch {
      markStorageUnavailable();
    }
  }
}

function element(tag, content, className = "") {
  const node = document.createElement(tag);
  node.textContent = content;
  node.className = className;
  return node;
}

function button(text, onClick, className = "button secondary") {
  const node = element("button", text, className);
  node.type = "button";
  node.addEventListener("click", onClick);
  return node;
}

function panel(title, message, action) {
  const box = element("div", "", "panel");
  box.append(element("h2", title));
  if (message) box.append(element("p", message, "feedback"));
  if (action) {
    const actions = element("div", "", "actions");
    actions.append(action);
    box.append(actions);
  }
  return box;
}

function plural(count, forms) {
  const last = count % 10;
  const lastTwo = count % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return forms[2];
  if (last === 1) return forms[0];
  if (last >= 2 && last <= 4) return forms[1];
  return forms[2];
}

function shuffled(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function deckAt(id) {
  return decks[Number(byId(id).value)];
}

function showView() {
  const route = location.hash.slice(1);
  const next = views.find(view => view.id === route) ?? views[0];
  const sectionId = next.id.startsWith("lesson") ? "lesson" : next.id;
  for (const view of views) view.hidden = view !== next;
  for (const link of document.querySelectorAll(".top nav a")) {
    if (link.hash === "#" + sectionId) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  }
  updateAvailability();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function cardId(word, direction) {
  return direction + ":" + word.ko;
}

function reviewQueue() {
  const progress = read("reviews", {});
  const direction = byId("card-direction").value;
  const now = Date.now();
  const due = [];
  const fresh = [];
  for (const word of deckAt("card-deck").words) {
    const id = cardId(word, direction);
    const previous = progress[id];
    const card = { word, id, previous };
    if (!previous) fresh.push(card);
    else if (previous.due <= now) due.push(card);
  }
  due.sort((a, b) => a.previous.due - b.previous.due);
  return { direction, due, fresh };
}

function updateAvailability() {
  const queue = reviewQueue();
  byId("card-availability").textContent = "К повторению: " + queue.due.length + " · Новые: " + queue.fresh.length;
  const now = Date.now();
  const due = Object.values(read("reviews", {})).filter(record => record.due <= now).length;
  byId("home-review").textContent = due ? "К повторению: " + due : "До 20 карточек за занятие";
}

function intervalLabel(interval) {
  if (interval < day) return "10 мин";
  const days = Math.round(interval / day);
  return days + " " + plural(days, ["день", "дня", "дней"]);
}

function sessionHeader(current, total, stop) {
  const head = element("div", "", "study-head");
  head.append(element("p", current + " из " + total, "muted"), button("Закончить", stop));
  const progress = document.createElement("progress");
  progress.max = total;
  progress.value = current - 1;
  progress.setAttribute("aria-label", "Выполнено в этом занятии");
  return [head, progress];
}

function closeReview() {
  reviewOutput.hidden = true;
  reviewForm.hidden = false;
  updateAvailability();
  byId("card-deck").focus();
}

function startReview(event) {
  event.preventDefault();
  const { direction, due, fresh } = reviewQueue();
  const session = {
    direction,
    queue: due.concat(shuffled(fresh)).slice(0, 20),
    index: 0,
  };
  reviewForm.hidden = true;
  reviewOutput.hidden = false;
  renderCard(session);
}

function renderCard(session) {
  const card = session.queue[session.index];
  if (!card) {
    const finishMessage = session.index
      ? "Оценено карточек: " + session.index + ". Они появятся снова в назначенное время."
      : "Карточки в этой теме и направлении ещё не подошли к повторению.";
    const close = button("К выбору темы", closeReview, "button primary");
    reviewOutput.replaceChildren(panel(session.index ? "Занятие завершено" : "На сейчас всё", finishMessage, close));
    close.focus();
    return;
  }

  const box = element("article", "", "panel");
  box.append(...sessionHeader(session.index + 1, session.queue.length, closeReview));
  const flash = element("div", "", "flash");
  const prompt = element("h2", card.word[session.direction], "prompt");
  prompt.lang = session.direction;
  const other = session.direction === "ko" ? "ru" : "ko";
  const answer = element("p", card.word[other], "answer");
  answer.lang = other;
  answer.hidden = true;
  flash.append(prompt, answer);

  const options = element("div", "", "ratings");
  options.hidden = true;
  for (const rating of ratings) {
    const previous = card.previous?.interval >= day ? card.previous.interval : 0;
    const interval = Math.min(90 * day, rating.interval(previous));
    const control = button(rating.label, () => {
      const progress = read("reviews", {});
      progress[card.id] = { due: Date.now() + interval, interval };
      write("reviews", progress);
      updateAvailability();
      session.index++;
      renderCard(session);
    }, "button rating");
    control.append(element("small", intervalLabel(interval)));
    options.append(control);
  }
  const reveal = button("Показать ответ", () => {
    answer.hidden = false;
    options.hidden = false;
    reveal.hidden = true;
    options.firstElementChild.focus();
  }, "button primary");
  box.append(flash, reveal, options);
  reviewOutput.replaceChildren(box);
  reveal.focus();
}

function wordsQuestions(selectedDeck) {
  const pool = selectedDeck.words;
  const allMeanings = [...new Set(pool.map(word => word.ru))];
  return shuffled(pool).slice(0, 10).map(word => {
    const meaningParts = text => text.toLowerCase().replace(/\([^)]*\)/g, "").split(/[,/]/).map(part => part.trim());
    const correctParts = meaningParts(word.ru);
    const poolMeanings = shuffled(allMeanings).filter(meaning => meaning !== word.ru
      && !meaningParts(meaning).some(part => correctParts.includes(part)));
    return ["Что означает это слово или выражение?\n" + word.ko, word.ru, poolMeanings.slice(0, 3), ""];
  });
}

function closeTest() {
  testOutput.hidden = true;
  testForm.hidden = false;
  byId("test-type").focus();
}

function startTest(questions) {
  testForm.hidden = true;
  testOutput.hidden = false;
  renderQuestion({ questions, index: 0, missed: [] });
}

function renderQuestion(session) {
  const question = session.questions[session.index];
  if (!question) {
    showResult(session);
    return;
  }
  const [prompt, correct, alternatives, explanation] = question;
  const box = element("article", "", "panel");
  box.append(...sessionHeader(session.index + 1, session.questions.length, closeTest));
  const heading = element("h2", prompt, "test-question");
  heading.tabIndex = -1;
  const choices = element("div", "", "choices");
  const feedback = element("p", "", "feedback");
  feedback.setAttribute("role", "status");
  const next = button(session.index + 1 === session.questions.length ? "Посмотреть результат" : "Следующий вопрос", () => {
    session.index++;
    renderQuestion(session);
  }, "button primary");
  next.hidden = true;
  for (const value of shuffled([correct, ...alternatives])) {
    const choice = button(value, () => {
      for (const option of choices.children) {
        option.disabled = true;
        if (option.textContent === correct) option.classList.add("correct");
      }
      if (value !== correct) {
        session.missed.push({ question, value });
        choice.classList.add("incorrect");
      }
      feedback.classList.add(value === correct ? "right" : "wrong");
      const result = value === correct ? "Верно!" : "Правильный ответ — " + correct;
      feedback.textContent = explanation ? result + " " + explanation : result;
      next.hidden = false;
      next.focus();
    }, "choice");
    if (/^[가-힣]/u.test(value)) choice.lang = "ko";
    choices.append(choice);
  }
  box.append(heading, choices, feedback, next);
  testOutput.replaceChildren(box);
  heading.focus();
}

function showResult(session) {
  const score = session.questions.length - session.missed.length;
  const close = button("К выбору теста", closeTest);
  const result = panel("Верных ответов: " + score + " из " + session.questions.length, "", close);
  if (session.missed.length) {
    const missed = element("ul", "", "results");
    for (const { question, value } of session.missed) {
      missed.append(element("li", question[0] + "\nТвой ответ: " + value + "\nВерно: " + question[1]));
    }
    const retry = button("Повторить ошибки", () => startTest(session.missed.map(item => item.question)), "button primary");
    result.querySelector(".actions").prepend(retry);
    result.insertBefore(missed, result.querySelector(".actions"));
  }
  testOutput.replaceChildren(result);
  result.querySelector("button").focus();
}

function renderDictionary() {
  const query = byId("word-search").value.trim().toLowerCase().normalize("NFC");
  const found = deckAt("word-deck").words.filter(word => word.ko.includes(query) || word.ru.toLowerCase().includes(query));
  byId("word-count").textContent = found.length ? "Найдено: " + found.length : "По этому запросу ничего не найдено.";
  const entries = found.map(word => {
    const item = document.createElement("li");
    const ko = element("b", word.ko);
    ko.lang = "ko";
    item.append(ko, element("span", word.ru));
    return item;
  });
  byId("word-list").replaceChildren(...entries);
}

for (const select of document.querySelectorAll("[data-decks]")) {
  decks.forEach((deck, index) => select.add(new Option(deck.title, index)));
}
for (const jump of document.querySelectorAll("[data-jump]")) {
  jump.addEventListener("click", () => byId(jump.dataset.jump).scrollIntoView());
}
for (const draft of drafts) {
  const key = draft.dataset.draft;
  draft.value = read(key, "");
  draft.addEventListener("input", () => write(key, draft.value));
}
reviewForm.addEventListener("submit", startReview);
reviewForm.addEventListener("change", updateAvailability);
const testType = byId("test-type");
function updateTestOptions() {
  byId("test-deck-label").hidden = testType.value !== "words";
}
testType.addEventListener("change", updateTestOptions);
for (const link of document.querySelectorAll("[data-test]")) {
  link.addEventListener("click", () => {
    testType.value = link.dataset.test;
    updateTestOptions();
    testOutput.hidden = true;
    testForm.hidden = false;
  });
}
for (const link of document.querySelectorAll("[data-card-deck]")) {
  link.addEventListener("click", () => {
    byId("card-deck").value = decks.findIndex(deck => deck.title === link.dataset.cardDeck);
    reviewOutput.hidden = true;
    reviewForm.hidden = false;
    updateAvailability();
  });
}
testForm.addEventListener("submit", event => {
  event.preventDefault();
  const questions = testsByLesson[testType.value];
  startTest(questions ? shuffled(questions) : wordsQuestions(deckAt("test-deck")));
});
byId("word-deck").addEventListener("change", renderDictionary);
byId("word-search").addEventListener("input", renderDictionary);
window.addEventListener("hashchange", showView);
window.addEventListener("storage", updateAvailability);
document.addEventListener("visibilitychange", updateAvailability);
window.setInterval(updateAvailability, minute);
renderDictionary();
showView();
