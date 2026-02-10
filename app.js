/**
 * ============================
 *  NEURORUZ WebApp Form (FULL JS)
 * ============================
 */

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycU0oBbi-TKzrrFWxSa6AK2qgdghawCti91yNeXm5WUFj7zT5V2xf4RjHgSRjlu7fphw/exec";

const FORM_SCHEMA = [{"title":"I Общие сведения","desc":"","fields":[{"code":"GEN_1","label":"Email","type":"email","required":true},{"code":"GEN_2","label":"ФИО родителя","type":"text","required":false},{"code":"GEN_3","label":"Место работы и должность родителей","type":"text","required":false},{"code":"GEN_4","label":"ФИО ребенка","type":"text","required":false},{"code":"GEN_5","label":"Дата рождения ребенка","type":"date","required":true},{"code":"GEN_6","label":"Полный возраст ребенка (лет и месяцев)","type":"text","required":true},{"code":"GEN_7","label":"Дата заполнения анкеты","type":"date","required":true},{"code":"GEN_8","label":"Номер телефона","type":"tel","required":true},{"code":"GEN_9","label":"Страна, город проживания","type":"text","required":true},{"code":"GEN_10","label":"Жалобы","type":"textarea","required":false},{"code":"GEN_11","label":"Что посещает","type":"radio","required":false,"options":["детский сад","школу","домашнее обучение"]},{"code":"GEN_12","label":"Братья и сестры ребенка, их возраст","type":"textarea","required":false}]},{"title":"II Беременность и планирование","desc":"","fields":[{"code":"PREG_PLAN_13","label":"Беременность была по счету","type":"radio","required":false,"options":["первая","вторая","третья","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"PREG_PLAN_14","label":"Беременность планировалась","type":"radio","required":false,"options":["да","нет"]},{"code":"PREG_PLAN_15","label":"Беременность наступила с помощью ЭКО/стимуляции","type":"radio","required":false,"options":["да","нет"]},{"code":"PREG_PLAN_16","label":"Возраст матери на момент беременности","type":"number","required":false},{"code":"PREG_PLAN_17","label":"Возраст отца на момент беременности","type":"number","required":false}]},{"title":"III Течение беременности","desc":"","fields":[{"code":"PREG_COURSE_a19","label":"Первая половина беременности","type":"checkbox","required":false,"options":["токсикоз","анемия","кровотечение","орз орви грипп","угроза выкидыша","ничего","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"PREG_COURSE_a20","label":"Какие инфекции перенесла мама во время беременности?","type":"checkbox","required":false,"options":["орви или орз","уточненные вирусы (герпес грипп ковид цитомегаловирус)","урогенетальные инфекции (цистит пиелонефрит)","интоксикации (отравления) (ротовирусная инф)","употребление алкоголя курение наркотические вещества","анемия","какая-либо диета во время беременности (веганство и прочее)","токсикоз беременной","употребление кофеина в большом количестве","малоподвижный образ жизни","отеки","колебания АД","набор веса более 11 кг","патологии положения плаценты","ранняя отслойка плаценты","гестоз","эклампсия / преэклампсия","сахарный диабет","ничего"]},{"code":"PREG_COURSE_a21","label":"Была ли госпитализация во время беременности?","type":"radio","required":false,"options":["гипертонус матки","отслойка плаценты","Другое (указать)","нет"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"PREG_COURSE_a22","label":"Вторая половина беременности","type":"checkbox","required":false,"options":["отеки","белок в моче","быстрый набор веса","повышенное давление","пониженное давление","ничего","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"PREG_COURSE_a23","label":"Было ли проявление острых заболеваний во время беременности (хронических) (холецистит гастрит и тд? (да\\нет и каких)","type":"textarea","required":false},{"code":"PREG_COURSE_a24","label":"Психологическое состояние во время беременности","type":"checkbox","required":false,"options":["спокойная","плаксивость","тревожность","депрессия","часто нервничала","частые стрессы","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."}]},{"title":"IV Роды","desc":"","fields":[{"code":"BIRTH_a25","label":"Роды по счету","type":"radio","required":false,"options":["первые","вторые","третьи","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"BIRTH_a26","label":"На каком сроке родов (сколько недель)","type":"number","required":false},{"code":"BIRTH_a27","label":"Особенности родов","type":"checkbox","required":false,"options":["разрыв тканей во время родов","нарушение при кардиомониторном контроле","вакуумная экстракция","рассечения промежности","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"BIRTH_a28","label":"Ребенок родился","type":"radio","required":false,"options":["в головном предлежании","ягодичном предлежании","ножном предлежании"]},{"code":"BIRTH_a29","label":"Длительность родов (от начала регулярных схваток)","type":"textarea","required":false},{"code":"BIRTH_a30","label":"Вес ребенка при рождении","type":"number","required":false},{"code":"BIRTH_a31","label":"Рост ребенка при рождении","type":"number","required":false},{"code":"BIRTH_a32","label":"Оценка по шкале Апгар (например 8\\8)","type":"text","required":false},{"code":"BIRTH_a33","label":"Ребенок закричал","type":"radio","required":false,"options":["сразу","после похлопывания","после отсасывания слизи","проводилась реанимация ИВЛ","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"BIRTH_a34","label":"Первое кормление на какие сутки","type":"number","required":false},{"code":"BIRTH_a35","label":"Диагноз при рождении","type":"checkbox","required":false,"options":["внутриутробная гипоксия","внутриутробная инфекция","ВУЗР (внутриутробная задержка развития)","асфиксия в родах","гипотрофия","малая морфофункциональная незрелость","крупный плод","вывих","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"BIRTH_a36","label":"Было ли стационарное лечение","type":"radio","required":false},{"code":"BIRTH_a37","label":"Диагноз при выписке","type":"text","required":false},{"code":"BIRTH_a38","label":"Выписали на какие сутки","type":"number","required":false}]},{"title":"V Развитие до 1 года","desc":"","fields":[{"code":"DEV_0_12_a39","label":"Развитие ребенка до года","type":"checkbox","required":false,"options":["двигательное беспокойство","гипертонус","гипотонус","вздрагивания","нарушение режима сна (путал день с ночью / пропускал сон)","тремор ручек\\подбородка","тянул головку назад","судороги при повышении температуры","закатывался\\сильно краснел при плаче","отчетливо синел\\бледнел носогубный треугольник","незрелость ЖКТ (срыгивания понос запор кишечная колика)","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"DEV_0_12_a40","label":"В каком возрасте отлучен от груди","type":"textarea","required":false},{"code":"DEV_0_12_a41","label":"Голову начал держать с … месяцев","type":"text","required":false},{"code":"DEV_0_12_a42","label":"Хватал игрушки с … месяцев","type":"text","required":false},{"code":"DEV_0_12_a43","label":"Начал переворачиваться на живот с … месяцев","type":"text","required":false},{"code":"DEV_0_12_a44","label":"Самостоятельно садился с … месяцев","type":"text","required":false},{"code":"DEV_0_12_a45","label":"Ходил без помощи и без опоры с … месяцев","type":"text","required":false},{"code":"DEV_0_12_a46","label":"Особенности ползания","type":"checkbox","required":false,"options":["ползал активно","мало","сразу на четвереньках","сначала попластунски","подволакивал ногу","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"DEV_0_12_a47","label":"Какие были проблемы с грудью","type":"checkbox","required":false,"options":["беспокойство у груди","мало ел","часто срыгивал","не было проблем","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"DEV_0_12_a48","label":"С какого возраста ребенок принимал пищу прикорм?","type":"text","required":false},{"code":"DEV_0_12_a49","label":"Переход на общий стол?","type":"text","required":false},{"code":"DEV_0_12_a50","label":"Проблемы с введением прикорма","type":"checkbox","required":false,"options":["не принимал определенные продукты","давился","плохой аппетит","перебирал едой","не было","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"DEV_0_12_a51","label":"С рождения был беспокойный?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"DEV_0_12_a52","label":"Часто ли плакал?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"DEV_0_12_a53","label":"Любил ли быть на руках?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"DEV_0_12_a54","label":"Проблемы со сном (до года)","type":"checkbox","required":false,"options":["путал день с ночью","пропускал сон","часто просыпался","не было","Другое (указать)"],"note":"Если выбран пункт «Другое» — показать поле «уточните» (текст)."},{"code":"DEV_0_12_a55","label":"Гуление (с какого возраста)","type":"text","required":false},{"code":"DEV_0_12_a56","label":"Лепет (с какого возраста)","type":"text","required":false},{"code":"DEV_0_12_a57","label":"Первые слова (с какого возраста)","type":"text","required":false},{"code":"DEV_0_12_a58","label":"Фразовая речь (с какого возраста)","type":"text","required":false},{"code":"DEV_0_12_a59","label":"Отмечали ли откат в развитии (потеря навыков)","type":"radio","required":false,"options":["да","нет","не знаю"]}]},{"title":"VI Болезни прививки лечение","desc":"","fields":[{"code":"HEALTH_a60","label":"Хронические заболевания","type":"textarea","required":false},{"code":"HEALTH_a61","label":"Частота ОРВИ (примерно)","type":"text","required":false},{"code":"HEALTH_a62","label":"Аллергии","type":"radio","required":false,"options":["нет","да (указать)"]},{"code":"HEALTH_a63","label":"Если да — на что","type":"textarea","required":false},{"code":"HEALTH_a64","label":"Прививки по календарю","type":"radio","required":false,"options":["да","нет","частично"]},{"code":"HEALTH_a65","label":"Если частично/нет — почему","type":"textarea","required":false},{"code":"HEALTH_a66","label":"Принимает ли лекарства сейчас","type":"radio","required":false,"options":["нет","да (указать)"]},{"code":"HEALTH_a67","label":"Бывают ли у ребенка эпизоды смеха “невпопад”?","type":"radio","required":false},{"code":"HEALTH_a68","label":"Были ли травмы головы/сотрясения","type":"radio","required":false,"options":["да","нет","не знаю"]}]},{"title":"VII Поведение режим навыки","desc":"","fields":[{"code":"BEHAV_a69","label":"Особенности сна сейчас","type":"textarea","required":false},{"code":"BEHAV_a70","label":"Режим дня (кратко)","type":"textarea","required":false},{"code":"BEHAV_a71","label":"Есть ли истерики","type":"radio","required":false,"options":["нет","да","редко","часто"]},{"code":"BEHAV_a72","label":"Триггеры истерик (когда/из-за чего)","type":"textarea","required":false},{"code":"BEHAV_a73","label":"Как успокаивается","type":"textarea","required":false},{"code":"BEHAV_a74","label":"Есть ли агрессия","type":"radio","required":false,"options":["нет","да (к кому/как)"]},{"code":"BEHAV_a75","label":"Если да — к кому/как проявляется","type":"textarea","required":false},{"code":"BEHAV_a76","label":"Есть ли самоповреждение","type":"radio","required":false,"options":["нет","да (описать)"]},{"code":"BEHAV_a77","label":"Если да — описать","type":"textarea","required":false},{"code":"BEHAV_a78","label":"Умеет ли высмаркиваться?","type":"radio","required":false},{"code":"BEHAV_a79","label":"Самостоятельность в быту (одевание, туалет и т.д.)","type":"textarea","required":false},{"code":"BEHAV_a80","label":"Есть ли избирательность в еде","type":"radio","required":false,"options":["нет","да"]},{"code":"BEHAV_a81","label":"Ребенок принимает пищу совместно с просмотром ТВ/мультфильмов?","type":"radio","required":false},{"code":"BEHAV_a82","label":"Отношения со сверстниками","type":"textarea","required":false},{"code":"BEHAV_a83","label":"Отношения со взрослыми","type":"textarea","required":false},{"code":"BEHAV_a84","label":"Страхи","type":"textarea","required":false},{"code":"BEHAV_a85","label":"Есть ли повторяющиеся движения/стереотипии","type":"radio","required":false,"options":["нет","да (описать)"]},{"code":"BEHAV_a86","label":"Если да — описать","type":"textarea","required":false},{"code":"BEHAV_a87","label":"Понимает обращенную речь","type":"radio","required":false,"options":["да","частично","нет"]},{"code":"BEHAV_a88","label":"Использует ли речь/жесты для просьб","type":"radio","required":false,"options":["да","частично","нет"]},{"code":"BEHAV_a89","label":"Применяются ли к ребенку физические наказания?","type":"radio","required":false},{"code":"BEHAV_a90","label":"Если да — какие","type":"textarea","required":false}]},{"title":"I Зрительномоторная координация / праксис / ориентация (1–9)","desc":"","fields":[{"code":"SENS_VIS_1","label":"Неловко двигается, часто спотыкается/падает","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_2","label":"Сложно копировать формы/узоры","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_3","label":"Сложно собирать пазлы/конструкторы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_4","label":"Трудно ориентируется в пространстве","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_5","label":"Плохо ловит/бросает мяч","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_6","label":"Сложно застёгивать пуговицы/молнии","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_7","label":"Сложно завязывать шнурки","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_8","label":"Сложно вырезать ножницами по линии","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_VIS_9","label":"Сложно повторять движения по образцу","type":"radio","required":false,"options":["Да","Нет"]}]},{"title":"II Слуховая обработка и коммуникация (10–18)","desc":"","fields":[{"code":"SENS_AUD_10","label":"Плохо реагирует на обращение/имя","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_11","label":"Пугается громких звуков","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_12","label":"Закрывает уши от звуков","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_13","label":"Раздражается от шума/толпы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_14","label":"В групповых занятиях отстранен / избегает?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_15","label":"Странно отвечает на вопросы, неправильно их понимая?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_16","label":"Разговаривает монотонно или очень громко?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_17","label":"Высокая чувствительность к шуму… слышит то, чего не слышат другие?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_AUD_18","label":"Рассеян/ошарашен при общем шуме (в кафе, тц и тд)?","type":"radio","required":false,"options":["Да","Нет"]}]},{"title":"III Тактильная чувствительность","desc":"","fields":[{"code":"SENS_TAC_19","label":"Избегает чужих прикосновений…?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_20","label":"Не любит мыть лицо и голову?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_22","label":"Не любит стричь волосы/ногти?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_23","label":"Избегает объятий/похлопываний… избегает физического контакта?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_24","label":"Каждый раз реагирует на прикосновения по-разному и странным образом?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_25","label":"Негативно реагирует на одевание/особенности одежды (швы, манжеты…)?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_26","label":"Сильнее тревожится если подходят сзади или не видит происходящего?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_27","label":"Беспокоится, когда люди близко (очередь/толпа)?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_28","label":"Необычная потребность трогать или избегать определенные текстуры?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_29","label":"Не любит песок/краски/клей и тп?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_30","label":"Не любит ходить босиком, особенно по песку/траве?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TAC_31","label":"Придирчив к консистенции или температуре пищи?","type":"radio","required":false,"options":["Да","Нет"]}]},{"title":"IV Учебные навыки / координация / моторное планирование","desc":"","fields":[{"code":"PREG_PLAN_32","label":"В целом развивается типично, но трудности обучения читать или считать?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_33","label":"Долго играет","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_34","label":"Трудно усидеть на месте","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_35","label":"Не переносит групповых игр","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_36","label":"Сложно копировать формы/узоры (письмо, рисование)?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_37","label":"Сложно делать поделки, конструктора, пазлы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_38","label":"Сложно выполнять физические упражнения/спорт","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_39","label":"Сложно вырезать ножницами по линии","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_40","label":"Сложно застегивать молнии/пуговицы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_41","label":"Сложно завязывать шнурки","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_42","label":"Плохо держит равновесие, боится качелей/высоты","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_43","label":"Наоборот: ищет сильные ощущения (крутится/прыгает)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_44","label":"Часто падает/натыкается на предметы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_45","label":"Дольше осваивает навыки (шнурки, письмо, мяч и тд)?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_46","label":"Сложно следовать устным инструкциям","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_47","label":"Избирательно «не слышит» просьбы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_48","label":"Сложно воспринимать речь на фоне шума","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_49","label":"Речь невнятная/трудно понять","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_50","label":"Повторяет услышанные слова/фразы (эхолалия)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_51","label":"Действует неэффективно… пропускает шаги/делает ненужные действия?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_52","label":"Трудно переключаться с одного вида деятельности на другой?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_53","label":"Не может навести порядок в комнате и на столе?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_54","label":"Часто натыкается/спотыкается о предметы?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_55","label":"Дольше осваивает навыки (шнурки, письмо, мяч и тд)?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"PREG_PLAN_56","label":"Пытается верховодить сверстниками, направлять игру ради контроля?","type":"radio","required":false,"options":["Да","Нет"]}]},{"title":"V Обоняние","desc":"","fields":[{"code":"SENS_SMELL_57","label":"Не различает сильный и слабый запахи?","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_58","label":"Убегает от запахов","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_59","label":"Нюхает себя/людей/предметы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_60","label":"Ищет сильные запахи","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_61","label":"Не переносит некоторые запахи (а именно ____)","type":"text","required":false},{"code":"SENS_SMELL_62","label":"Заворожен некоторыми запахами (а именно ____)","type":"text","required":false},{"code":"SENS_SMELL_63","label":"Остро реагирует на запах некоторых кусочков пищи игнорируя остальные","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_64","label":"Избегает прямых запахов (“бьет в нос”) духи, освежители, пот…","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_65","label":"Иногда вообще не реагирует на запах","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_66","label":"Проверяет еду перед тем как съесть (разглядывает/нюхает/ощупывает)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_67","label":"Кажется, что заворожен запахами","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_SMELL_68","label":"Жалуется/говорит о несуществующих запахах","type":"radio","required":false,"options":["Да","Нет"]}]},{"title":"VI Вкус и оральная сенсорика","desc":"","fields":[{"code":"SENS_TASTE_69","label":"Не различает сильный и слабый вкус","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_70","label":"Плохо ест","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_71","label":"Использует кончик языка, чтобы пробовать вкус","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_72","label":"Часто давится пищей, тошнит, легко возникает рвота","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_73","label":"Очень хочет определенные продукты (простую пищу-макароны, рис, мясо и тд)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_74","label":"Ест несъедобное","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_75","label":"Берет в рот и облизывает предметы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_76","label":"Ест смешанную еду (сладкую и кислую)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_77","label":"Частая отрыжка","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_78","label":"Не переносит некоторые продукты (а именно ____)","type":"textarea","required":false},{"code":"SENS_TASTE_79","label":"Заворожен некоторыми вкусовыми ощущениями (а именно ____)","type":"textarea","required":false},{"code":"SENS_TASTE_80","label":"Не узнает/жалуется на еду, которую обычно любит","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_81","label":"Плохо различает вкусы","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_82","label":"Внезапные вспышки аутоагрессии/ярости или убегание в ответ на вкус/еду/запах","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_83","label":"Не чувствует вкуса еды, если смотрит на что-то или что-то слушает","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_84","label":"Очень аккуратно ест","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_85","label":"Не любит некоторые продукты из-за текстуры/температуры","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_86","label":"Чрезмерно чувствителен к боли во рту (зубы/язвочки/стоматит)","type":"radio","required":false,"options":["Да","Нет"]},{"code":"SENS_TASTE_87","label":"Сложно жевать/глотать","type":"radio","required":false,"options":["Да","Нет"]}]}];

FORM_SCHEMA.push({
  title: "VIII Дополнительные вопросы",
  desc: "",
  fields: [
    { code: "ADD_SLEEP_PROBLEMS_0_12", label: "Проблемы со сном (до года)", type: "checkbox", required: false, options: ["путал день с ночью", "пропускал сон", "часто просыпался", "не было", "Другое (указать)"], note: "Если выбран пункт «Другое» — показать поле «уточните» (текст)." },
    { code: "ADD_SLEEP_FEATURES_0_12", label: "Особенности сна ребенка до года (если были)", type: "checkbox", required: true, options: ["засыпал с укачиванием долго", "засыпал на груди", "быстрое засыпание", "часто просыпался", "ночной крик/плач", "храп"] },
    { code: "ADD_FIRST_SMILE", label: "Возраст первой улыбки? Всегда ли улыбка была ответной? Попробуйте восстановить по домашним видео или личному дневнику", type: "text", required: true },
    { code: "ADD_HAD_PLACE", label: "Имело место", type: "checkbox", required: true, options: ["логоневроз", "энурез", "энкопрез", "страхи", "вегетативные расстройства", "обмороки", "апноэ", "нет"] },
    { code: "ADD_REACH_ARMS", label: "Всегда ли ребенок тянул ручки к вам, когда был в кроватке, манеже?", type: "radio", required: true, options: ["да, часто или всегда", "нет, редко или никогда", "Другое (указать)"], note: "Если выбран пункт «Другое» — показать поле «уточните» (текст)." },
    { code: "ADD_BYE_GESTURE", label: "Показывал жестом пока-пока", type: "radio", required: true, options: ["да", "редко", "нет"] },
    { code: "ADD_HIDE_IMMITATION_AGE", label: "В каком возрасте стала доступна имитация в игре в прятки", type: "text", required: true },
    { code: "ADD_CHILD_MED", label: "Было ли у ребенка", type: "checkbox", required: true, options: ["судороги", "потеря сознания", "необъяснимое повышение температуры", "признаки интоксикации до 3 лет", "астма", "экзема", "утопический дерматит", "ничего"] },
    { code: "ADD_PARENT_NOTE", label: "Что вы считаете нужным добавить по поводу вашего ребенка?", type: "textarea", required: true },
    { code: "ADD_WALK_FEATURES", label: "Особенности ходьбы", type: "checkbox", required: true, options: ["часто падал", "боялся самостоятельно ходить", "ходил боком", "ходил на носочках", "на пяточках", "косолапил", "часто оступался", "сразу побежал", "Другое (указать)"], note: "Если выбран пункт «Другое» — показать поле «уточните» (текст)." }
  ]
});

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function show(el){ el?.classList.remove("nwHidden"); }
function hide(el){ el?.classList.add("nwHidden"); }

function toast(msg, ms = 2600){
  const t = $("#nwToast");
  if(!t) return;
  t.textContent = msg;
  t.classList.remove("nwHidden");
  clearTimeout(toast._tm);
  toast._tm = setTimeout(() => t.classList.add("nwHidden"), ms);
}

function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function getSidFromUrl(){
  const u = new URL(window.location.href);
  return (u.searchParams.get("sid") || "").trim();
}

function todayISO(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

function getTG(){
  return (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
}

function tgInit(){
  try{
    const tg = getTG();
    if(tg){
      tg.ready();
      tg.expand();
    }
  }catch(_e){}
}

function tgClose(){
  try{
    const tg = getTG();
    if(tg && typeof tg.close === "function"){
      tg.close();
      return;
    }
  }catch(_e){}

  try{
    window.open("", "_self");
    window.close();
  }catch(_e){}

  try{
    if(window.history.length > 1) window.history.back();
    else window.location.replace("about:blank");
  }catch(_e){
    window.location.href = "about:blank";
  }
}

function getTgMeta(){
  const meta = {};
  try{
    const tg = getTG();
    if(tg){
      const u = tg.initDataUnsafe?.user;
      meta.tg_platform = tg.platform || "";
      meta.tg_version = tg.version || "";
      meta.tg_colorScheme = tg.colorScheme || "";
      meta.tg_user_id = u?.id ?? "";
      meta.tg_username = u?.username ?? "";
      meta.tg_first_name = u?.first_name ?? "";
      meta.tg_last_name = u?.last_name ?? "";
      meta.tg_init_data = tg.initData || "";
    }
  }catch(_e){}
  return meta;
}

const state = { sid: "", step: 0, sections: FORM_SCHEMA.filter(s => (s.fields || []).length > 0), answers: {}, overwriteAllowed: false };

function normalizeType(t){
  const normalized = String(t || "text").toLowerCase();
  return normalized === "checkboxes" ? "checkbox" : normalized;
}

function optionNeedsOther(opt){
  const s = String(opt || "").toLowerCase();
  return s.includes("указать") || s.includes("другое");
}

function setHeaderStep(){
  const total = state.sections.length;
  const st = Math.min(state.step + 1, total);
  $("#nwStepText").textContent = `${st}/${total}`;
  $("#nwProgressBar").style.width = `${Math.round((st / total) * 100)}%`;
}

function renderStep(){
  const sec = state.sections[state.step];
  if(!sec) return;

  $("#nwSectionTitle").textContent = sec.title || `Шаг ${state.step+1}`;
  $("#nwSectionDesc").textContent = sec.desc || "";

  const wrap = $("#nwFields");
  wrap.innerHTML = "";

  sec.fields.forEach(f => {
    const type = normalizeType(f.type);
    const code = f.code;
    const required = !!f.required;

    const field = document.createElement("div");
    field.className = "nwField";
    field.dataset.code = code;

    const lbl = document.createElement("div");
    lbl.className = "nwField__label";
    lbl.innerHTML = `<span>${escapeHtml(f.label || code)}</span>${required ? `<span class="nwReq">обяз.</span>` : ``}`;
    field.appendChild(lbl);

    if(f.note){
      const note = document.createElement("div");
      note.className = "nwNote";
      note.textContent = f.note;
      field.appendChild(note);
    }

    if(type === "textarea"){
      const ta = document.createElement("textarea");
      ta.className = "nwTextarea";
      ta.id = code;
      ta.name = code;
      ta.placeholder = "Введите ответ…";
      ta.value = state.answers[code] ?? "";
      ta.addEventListener("input", () => { state.answers[code] = ta.value.trim(); });
      field.appendChild(ta);
    } else if(type === "radio"){
      const opts = Array.isArray(f.options) && f.options.length ? f.options : ["Да","Нет"];
      const grp = document.createElement("div");
      grp.className = "nwGroup";

      opts.forEach((opt, idx) => {
        const id = `${code}__r${idx}`;
        const row = document.createElement("label");
        row.className = "nwOpt";
        row.innerHTML = `<input type="radio" name="${escapeHtml(code)}" id="${escapeHtml(id)}" value="${escapeHtml(opt)}"><span>${escapeHtml(opt)}</span>`;
        grp.appendChild(row);
      });
      field.appendChild(grp);

      const val = state.answers[code];
      if(val != null){
        const r = $(`input[type="radio"][name="${CSS.escape(code)}"][value="${CSS.escape(String(val))}"]`, field);
        if(r) r.checked = true;
      }

      const needsOther = opts.some(optionNeedsOther);
      let otherInput = null;
      if(needsOther){
        otherInput = document.createElement("input");
        otherInput.type = "text";
        otherInput.className = "nwInput nwOther nwHidden";
        otherInput.placeholder = "Уточните…";
        otherInput.id = `${code}__other`;
        otherInput.name = `${code}__other`;
        otherInput.value = state.answers[`${code}__other`] ?? "";
        otherInput.addEventListener("input", () => { state.answers[`${code}__other`] = otherInput.value.trim(); });
        field.appendChild(otherInput);
      }

      grp.addEventListener("change", () => {
        const picked = $(`input[type="radio"][name="${CSS.escape(code)}"]:checked`, field)?.value ?? "";
        state.answers[code] = picked;
        if(otherInput){
          const showOther = optionNeedsOther(picked);
          otherInput.classList.toggle("nwHidden", !showOther);
          if(!showOther){ delete state.answers[`${code}__other`]; otherInput.value = ""; }
        }
      });

      if(otherInput){
        const picked = state.answers[code] || "";
        otherInput.classList.toggle("nwHidden", !optionNeedsOther(picked));
      }
    } else if(type === "checkbox"){
      const opts = Array.isArray(f.options) && f.options.length ? f.options : ["Да"];
      const grp = document.createElement("div");
      grp.className = "nwGroup";

      opts.forEach((opt, idx) => {
        const id = `${code}__c${idx}`;
        const row = document.createElement("label");
        row.className = "nwOpt";
        row.innerHTML = `<input type="checkbox" name="${escapeHtml(code)}" id="${escapeHtml(id)}" value="${escapeHtml(opt)}"><span>${escapeHtml(opt)}</span>`;
        grp.appendChild(row);
      });
      field.appendChild(grp);

      const saved = Array.isArray(state.answers[code]) ? state.answers[code] : [];
      saved.forEach(v => {
        const cb = $(`input[type="checkbox"][name="${CSS.escape(code)}"][value="${CSS.escape(String(v))}"]`, field);
        if(cb) cb.checked = true;
      });

      const needsOther = opts.some(optionNeedsOther);
      let otherInput = null;
      if(needsOther){
        otherInput = document.createElement("input");
        otherInput.type = "text";
        otherInput.className = "nwInput nwOther nwHidden";
        otherInput.placeholder = "Уточните…";
        otherInput.id = `${code}__other`;
        otherInput.name = `${code}__other`;
        otherInput.value = state.answers[`${code}__other`] ?? "";
        otherInput.addEventListener("input", () => { state.answers[`${code}__other`] = otherInput.value.trim(); });
        field.appendChild(otherInput);
      }

      grp.addEventListener("change", () => {
        const picked = $$(`input[type="checkbox"][name="${CSS.escape(code)}"]:checked`, field).map(x => x.value);
        state.answers[code] = picked;
        if(otherInput){
          const showOther = picked.some(optionNeedsOther);
          otherInput.classList.toggle("nwHidden", !showOther);
          if(!showOther){ delete state.answers[`${code}__other`]; otherInput.value = ""; }
        }
      });

      if(otherInput){
        const picked = Array.isArray(state.answers[code]) ? state.answers[code] : [];
        otherInput.classList.toggle("nwHidden", !picked.some(optionNeedsOther));
      }
    } else {
      const inp = document.createElement("input");
      inp.className = "nwInput";
      inp.id = code;
      inp.name = code;
      const t = normalizeType(type);
      inp.type = ["text","email","tel","number","date"].includes(t) ? t : "text";

      if(inp.type === "date" && !state.answers[code] && code === "GEN_7") state.answers[code] = todayISO();

      inp.value = state.answers[code] ?? "";
      inp.placeholder = inp.type === "date" ? "" : "Введите ответ…";
      inp.addEventListener("input", () => {
        const val = inp.value;
        state.answers[code] = inp.type === "number" ? (val === "" ? "" : Number(val)) : val.trim();
      });

      field.appendChild(inp);
    }

    wrap.appendChild(field);
  });

  const prev = $("#nwPrevBtn");
  const next = $("#nwNextBtn");
  const submit = $("#nwSubmitBtn");
  prev.disabled = (state.step === 0);

  const isLast = (state.step === state.sections.length - 1);
  submit.classList.toggle("nwHidden", !isLast);
  next.classList.toggle("nwHidden", isLast);

  setHeaderStep();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function hasMissingRequired(field){
  if(!field.required) return false;
  const type = normalizeType(field.type);
  const v = state.answers[field.code];
  if(type === "checkbox") return !(Array.isArray(v) && v.length);
  return v == null || String(v).trim() === "";
}

function validateStep(){
  const sec = state.sections[state.step];
  if(!sec) return true;
  const missing = sec.fields.filter(hasMissingRequired);
  if(missing.length){
    toast("Заполните обязательные поля на этом шаге.");
    return false;
  }
  return true;
}

async function apiCheck(sid){
  const url = `${SCRIPT_URL}?action=check&sid=${encodeURIComponent(sid)}`;
  const r = await fetch(url, { method: "GET" });
  const txt = await r.text();
  if(!r.ok) throw new Error(`HTTP ${r.status}: ${txt.slice(0, 200)}`);
  try { return JSON.parse(txt); }
  catch { throw new Error("Non-JSON response: " + txt.slice(0, 200)); }
}

async function apiSubmit(payload){
  const r = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  const txt = await r.text();
  if(!r.ok) throw new Error(`HTTP ${r.status}: ${txt.slice(0, 200)}`);
  try { return JSON.parse(txt); }
  catch { throw new Error("Non-JSON response: " + txt.slice(0, 200)); }
}

function showError(msg){
  hide($("#nwLoading"));
  hide($("#nwFormCard"));
  hide($("#nwSuccess"));
  $("#nwErrorText").textContent = msg;
  show($("#nwError"));
}

function openForm(){
  hide($("#nwLoading"));
  hide($("#nwError"));
  hide($("#nwSuccess"));
  show($("#nwFormCard"));
  if(!state.answers.GEN_7) state.answers.GEN_7 = todayISO();
  renderStep();
}

async function init(){
  tgInit();

  if(!SCRIPT_URL || SCRIPT_URL.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL_HERE")){
    showError("Не задан SCRIPT_URL (URL веб-приложения Apps Script).");
    return;
  }

  state.sid = getSidFromUrl();
  $("#nwSid").textContent = state.sid || "—";
  if(!state.sid){
    showError("В ссылке нет параметра sid. Откройте страницу в формате ?sid=708866932");
    return;
  }

  $("#nwCloseBtn")?.addEventListener("click", tgClose);
  $("#nwDoneBtn")?.addEventListener("click", tgClose);

  try{
    const res = await apiCheck(state.sid);
    if(res?.exists){
      hide($("#nwLoading"));
      const overlay = $("#nwExistsOverlay");
      $("#nwExistsText").textContent = "В таблице уже есть запись с вашим sid. Хотите заполнить заново?";
      show(overlay);

      $("#nwCancelRefillBtn").onclick = () => { toast("Анкета уже заполнена. Закрываю…"); setTimeout(tgClose, 800); };
      $("#nwRefillBtn").onclick = () => { state.overwriteAllowed = true; hide(overlay); openForm(); };
    } else {
      state.overwriteAllowed = false;
      openForm();
    }
  }catch(err){
    console.error(err);
    showError("Не удалось проверить запись в таблице. Проверьте доступ к Apps Script и URL.");
  }

  $("#nwPrevBtn").addEventListener("click", () => {
    if(state.step > 0){
      state.step--;
      renderStep();
    }
  });

  $("#nwNextBtn").addEventListener("click", () => {
    if(!validateStep()) return;
    if(state.step < state.sections.length - 1){
      state.step++;
      renderStep();
    }
  });

  $("#nwForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    if(!validateStep()) return;

    const firstMissingSection = state.sections.findIndex(sec => sec.fields.some(hasMissingRequired));
    if(firstMissingSection !== -1){
      toast("Есть незаполненные обязательные поля. Проверьте шаги.");
      state.step = firstMissingSection;
      renderStep();
      return;
    }

    $("#nwPrevBtn").disabled = true;
    $("#nwNextBtn").disabled = true;
    $("#nwSubmitBtn").disabled = true;
    toast("Отправка анкеты…");

    const payload = {
      action: "submit",
      sid: state.sid,
      overwrite: state.overwriteAllowed,
      meta: {
        sid: state.sid,
        submitted_at: new Date().toISOString(),
        user_agent: navigator.userAgent,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        lang: navigator.language || "",
        ...getTgMeta()
      },
      answers: state.answers
    };

    try{
      const res = await apiSubmit(payload);
      if(res?.ok){
        hide($("#nwFormCard"));
        show($("#nwSuccess"));
      } else {
        throw new Error(res?.message || "SUBMIT_FAILED");
      }
    }catch(err){
      console.error(err);
      toast("Ошибка отправки. Попробуйте ещё раз.");
      $("#nwPrevBtn").disabled = (state.step === 0);
      $("#nwNextBtn").disabled = false;
      $("#nwSubmitBtn").disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
