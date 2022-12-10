var curcontent = new Array();
//#region contents
curcontent["rules"] = {
    xhead: 'Правила',
    xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Основная информация</span></p>\
<p><liПри заходе на наш сервер вы автоматически соглашаетесь с правилами..</li></p>\
<p><li>апрещено использовать/хранить/распространять стороннее программное обеспечение или любые другие средства (например читы или макросы), позволяющие получить преимущество над другими игроками. Наличие покупки/подписки приравнивается к хранению; Наказание: Бан.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан на одном - Вы получите его и на других.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом проекте и на вас есть доказательства - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>ЗАПРЕЩЕНО модифицировать файлы и папки клиента игры: переименовывать файлы и папки, менять их содержимое, отключать текстуры и т.д. При обнаружении данных модификаций; Наказание: Бан..</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Администрация сервера в праве ограничить доступ с вашего аккаунта, если возникли подозрения на использование читов.</li></p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить/распространять Читы/Макросы или любое другое ПО, позволяющие получить преимущество над другими игроками. Наличие покупки или подписки приравнивается к хранению стороннего ПО.</li></p>\
<p><li>Союз с читером/прикрытие/игра с читером - бан на 7 дней.</li></p>\
<p><li>Запрещено использование багов с целью или без цели получения преимущества над другими игроками(бан 7 дней) .</li></p>\
<p><li>Запрещено рейдить/антирейдить или убивать в 3+ и т.д., а так-же нельзя в целом каким-либо образом кооперироваться с игроками, если Ваша команда полная.</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещено написание сообщений с использованием Caps Lock. Наказание: Мут 15мин.</li></p>\
<p><li>Запрещено продавать или делать вид, что Вы продаёте Читы/Макросы.</li></p>\
<p><li>Запрещено употребление нецензурных выражений в большом количестве. Наказание: Мут 30мин (RMT).</li></p>\
<p><li>Модерация оставляет за собой право выдать мут игроку в чате, если тот нарушает правила чата.</li></p>\<br>\
<p><li>Запрещено оскорбление администрации в любых формах. Наказание: Мут 40мин/Кик / ban. </li></p>\
<p><li>Запрещено оскорбление сервера,группы и проекта в целом. Наказание: Мут навсегда. </li></p>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Проверки проходят только через программу «Discord». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём ПК.</li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае Вы будете заблокированы.</li></p>\
<p><li>Так же отказом от проверки будет считаться выход с сервера или предоставление некорректных контактных данных.</li></p>\
<p><li>Игнорирование вызова на проверку увенчается блокировкой.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего ПК.</li></p>\
<p><li>Выход с сервера во время вызова на проверку закончится блокировкой.</li></p>\
<p><li>Запрещено чистить ПК перед проверкой.</li></p>\
<p><li>За отказ показывать нужную для проверки информацию или неадекватное поведение — Вы будете заблокированы.</li></p>\
<p><li>Если по итогам проверки игрок получает бан за читы — вся его команда блокируется вместе с ним.</li></p><br>\
<p class="MsoNormal"><span>Причины банов</span></li></p>\
<p><li>Батники и все иные программы для чистки пк строго запрещены - бан на 30 дней.</li></p>\
<p><li>Использование услуг просвета - Бан навсегда.</li></p>\
<p><li>Отказ от проверки - Бан навсегда.</li></p>\
<p><li>Использование макросов/читов - Бан навсегда.</li></p>\
<p><li>Игра сверх разрешенного лимита - Бан на 7 дней.</li></p><br>\
</ul></div>'
};

curcontent["kit-prem"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary active">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x50</div></div></div>\
</div></div></div>'
};

curcontent["kit-elite"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary active">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x25</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x125</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x75</div></div></div>\
</div></div></div>'
};


curcontent["kit-life"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary active">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x40</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x75000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x75000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x3</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x100</div></div></div>\
</div></div></div>'
};


curcontent["kit-rusty"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary active">RUSTY</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://www.rustedit.io/images/imagelibrary/hmlmg.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x50</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x100000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x100000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x75000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x7500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x65000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x65000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x200</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дополнительный" - <span>1 Раз в вайп</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/mining.quarry.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/surveycharge.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/autoturret.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/18792a460ae3f80eff76f080043173e6.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/black.raspberries.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x50</div></div></div>\
</div></div></div>'
};


curcontent["kit-free"] = {
    xhead: 'Стандартные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 12ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/door.hinged.metal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rug.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pookie.bear.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Охотник" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/spear.stone.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="serverheader">Кит "Медицина" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div>\
<div class="serverheader">Кит "Еда" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bearmeat.cooked.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smallwaterbottle.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="serverheader">Кит за "#rustylife" в нике - <span>1 раз в вайп</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};

var BlockListArrays = [
    ['shotgun.waterpipe', 'pistol.revolver'],
    ['pistol.python', 'pistol.semiauto', 'pistol.prototype17', 'pistol.m92', 'shotgun.double', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'],
    ['shotgun.pump', 'shotgun.spas12', 'smg.2', 'smg.thompson', 'smg.mp5', 'rifle.semiauto', 'rifle.m39'],
    ['rifle.ak', 'rifle.ak.ice', 'rifle.lr300', 'rifle.bolt', 'rifle.l96', 'hmlmg', 'metal.facemask', 'metal.plate.torso', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'],
    ['lmg.m249', 'grenade.f1', 'grenade.beancan'],
    ['explosive.satchel', 'ammo.rifle.explosive', 'multiplegrenadelauncher'],
    ['rocket.launcher', 'explosive.timed']];

//#endregion
curcontent["Oplata"] = {
    xcon: '\
    	<div class="refill-window__header">\
    		<div class="refill-window__title">Пополнение баланса</div>\
    		<button class="refill-window__close">×</button>\
    	</div>\
    	<div class="refill-window__footer"><div class="refill-window__content">\
    		<div class="refill-window__payments">\
    			<ul class="refill-window__payments-list">\
    				<li class="refill-window__payment" onclick="OnClickElement1(this)">\
    					<button class="refill-window__payment-btn" id="element1">\
    						<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 47"><g clip-path="url(#clip0)"><path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/><path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/><path d="M34.2388 16.9481v-.3246h-.1245v-.0847h.3459v.0847h-.1384v.3246h-.083zm.6643 0v-.2823l-.0969.2399h-.0968l-.0969-.2399v.2823h-.0969v-.4093h.1384l.0969.2681.0969-.2681h.1383v.4093h-.083zM24.1778 0c-2.5326 0-4.8577.889-6.6983 2.3708 2.4911 2.018 4.0965 5.1225 4.0965 8.6221 0 3.4997-1.6054 6.6043-4.0965 8.6222 1.8406 1.4818 4.1657 2.3708 6.6983 2.3708 5.9648 0 10.7948-4.925 10.7948-11.0071C34.9726 4.8968 30.1288 0 24.1778 0z" fill="#F69F00"/></g><g clip-path="url(#clip1)"><path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/><path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7"/><stop offset="1" stop-color="#02AEFF"/></linearGradient></defs></svg>\
    						<div class="refill-window__payment-label">#1</div>\
    					</button>\
    				</li>\
    			<li class="refill-window__payment" onclick="OnClickElement2(this)">\
    				<button class="refill-window__payment-btn" id="element2">\
    					<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 47"><g clip-path="url(#clip0)"><path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/><path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/><path d="M34.2388 16.9481v-.3246h-.1245v-.0847h.3459v.0847h-.1384v.3246h-.083zm.6643 0v-.2823l-.0969.2399h-.0968l-.0969-.2399v.2823h-.0969v-.4093h.1384l.0969.2681.0969-.2681h.1383v.4093h-.083zM24.1778 0c-2.5326 0-4.8577.889-6.6983 2.3708 2.4911 2.018 4.0965 5.1225 4.0965 8.6221 0 3.4997-1.6054 6.6043-4.0965 8.6222 1.8406 1.4818 4.1657 2.3708 6.6983 2.3708 5.9648 0 10.7948-4.925 10.7948-11.0071C34.9726 4.8968 30.1288 0 24.1778 0z" fill="#F69F00"/></g><g clip-path="url(#clip1)"><path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/><path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7"/><stop offset="1" stop-color="#02AEFF"/></linearGradient></defs></svg>\
    					<div class="refill-window__payment-label">#2</div>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement3(this)">\
    				<button class="refill-window__payment-btn" id="element3">\
    					<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 47"><g clip-path="url(#clip0)"><path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/><path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/><path d="M34.2388 16.9481v-.3246h-.1245v-.0847h.3459v.0847h-.1384v.3246h-.083zm.6643 0v-.2823l-.0969.2399h-.0968l-.0969-.2399v.2823h-.0969v-.4093h.1384l.0969.2681.0969-.2681h.1383v.4093h-.083zM24.1778 0c-2.5326 0-4.8577.889-6.6983 2.3708 2.4911 2.018 4.0965 5.1225 4.0965 8.6221 0 3.4997-1.6054 6.6043-4.0965 8.6222 1.8406 1.4818 4.1657 2.3708 6.6983 2.3708 5.9648 0 10.7948-4.925 10.7948-11.0071C34.9726 4.8968 30.1288 0 24.1778 0z" fill="#F69F00"/></g><g clip-path="url(#clip1)"><path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/><path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7"/><stop offset="1" stop-color="#02AEFF"/></linearGradient></defs></svg>\
    					<div class="refill-window__payment-label">#3</div>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement4(this)">\
    				<button class="refill-window__payment-btn" id="element4">\
    					<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 47"><g clip-path="url(#clip0)"><path d="M13.3828 11.0071c0-3.4997 1.6053-6.6043 4.0964-8.6222C15.6386.889 13.3136 0 10.7948 0 4.83 0 0 4.925 0 11.0071s4.83 11.007 10.7948 11.007c2.5326 0 4.8576-.889 6.6983-2.3707-2.505-2.0321-4.1103-5.1508-4.1103-8.6363z" fill="#E30D17"/><path d="M13.3828 11.0072c0 3.4997 1.6054 6.6042 4.0965 8.6222 2.4911-2.018 4.0965-5.1225 4.0965-8.6222S19.9704 4.403 17.4793 2.385c-2.4911 2.0039-4.0965 5.1225-4.0965 8.6222z" fill="#EB610A"/><path d="M34.2388 16.9481v-.3246h-.1245v-.0847h.3459v.0847h-.1384v.3246h-.083zm.6643 0v-.2823l-.0969.2399h-.0968l-.0969-.2399v.2823h-.0969v-.4093h.1384l.0969.2681.0969-.2681h.1383v.4093h-.083zM24.1778 0c-2.5326 0-4.8577.889-6.6983 2.3708 2.4911 2.018 4.0965 5.1225 4.0965 8.6221 0 3.4997-1.6054 6.6043-4.0965 8.6222 1.8406 1.4818 4.1657 2.3708 6.6983 2.3708 5.9648 0 10.7948-4.925 10.7948-11.0071C34.9726 4.8968 30.1288 0 24.1778 0z" fill="#F69F00"/></g><g clip-path="url(#clip1)"><path d="M62.2341 17.7826H58.25l2.5054-13.5297h3.9841l-2.5054 13.5297zM54.8826 4.253L51.0629 13.55l-.4518-1.9896-1.3554-6.1137s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s1.9304.3618 4.1894 1.5556l3.4912 11.7571h4.1484L59.1953 4.253h-4.3127zM86.3028 17.7826h3.6554L86.7546 4.2529h-3.2037c-1.4787 0-1.8483 1.013-1.8483 1.013l-5.9145 12.5167h4.1484l.8214-2.0258h5.0931l.4518 2.0258zm-4.3948-4.8113l2.0947-5.0646 1.1911 5.0646H81.908zM76.0764 7.509l.575-2.894s-1.7661-.5789-3.6144-.5789c-1.9715 0-6.6949.7597-6.6949 4.4858 0 3.5091 5.5449 3.5452 5.5449 5.3902 0 1.845-4.9698 1.5194-6.6128.3618l-.575 3.0387s1.7662.7597 4.518.7597c2.7108 0 6.8592-1.23 6.8592-4.6305 0-3.509-5.5859-3.8346-5.5859-5.3902 0-1.5917 3.9019-1.3746 5.5859-.5426z" fill="#fff"/><path d="M50.6111 11.5243l-1.3554-6.0775s-.1643-1.23-1.8894-1.23h-6.2842L41 4.47s3.0394.5427 5.9145 2.6409c2.793 1.9534 3.6966 4.4134 3.6966 4.4134z" fill="#F7A823"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6915 30.0609c.4796-.0029 1.9048-.1362 2.5085 1.9793.4067 1.425 1.0545 3.7592 1.9434 7.0026h.362c.9533-3.4195 1.6082-5.7537 1.9646-7.0026.61-2.1375 2.135-1.9792 2.745-1.9792h4.7063v15.2h-4.7967v-8.9576h-.3217l-2.674 8.9576H24.52l-2.674-8.9643h-.3217v8.9643h-4.7968v-15.2l4.964-.0001zm21.1179.0001v8.9643h.3827l3.2526-7.3713c.6314-1.4669 1.9771-1.593 1.9771-1.593h4.6419v15.2h-4.897v-8.9643h-.3826l-3.1889 7.3713c-.6314 1.4602-2.0409 1.593-2.0409 1.593h-4.6418v-15.2h4.8969zm27.1804 7.2231c-.6831 2.0097-2.8282 3.449-5.2032 3.449h-5.1354v4.5279h-4.6567v-7.9769h14.9953z" fill="#67C09E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M65.0109 30.061H54.75c.2442 3.3841 3.0511 6.281 5.9568 6.281h9.6063c.5543-2.8125-1.3541-6.281-5.3022-6.281z" fill="url(#paint0_linear)"/><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z"/></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7"/><stop offset="1" stop-color="#02AEFF"/></linearGradient></defs></svg>\
    					<div class="refill-window__payment-label">#4</div>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement5(this)">\
    				<button class="refill-window__payment-btn" id="element5">\
    					<svg fill="none" class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"><path d="M206.665 34.254v29.338h-10.476v-20.58h-10.087v20.58h-10.476v-29.34h31.039z" style="fill:#fff"/><path d="M154.11 64.64c9.379 0 16.343-5.75 16.343-14.466 0-8.437-5.138-13.915-13.725-13.915-3.963 0-7.233 1.395-9.696 3.802.588-4.975 4.795-8.607 9.427-8.607 1.069 0 9.117-.017 9.117-.017l4.55-8.71s-10.103.23-14.8.23c-10.732.188-17.981 9.943-17.981 21.79 0 13.804 7.07 19.894 16.766 19.894zm.058-20.667c3.482 0 5.896 2.288 5.896 6.2 0 3.52-2.145 6.422-5.896 6.43-3.588 0-6.002-2.688-6.002-6.37 0-3.913 2.414-6.26 6.002-6.26z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M128.818 53.77s-2.474 1.426-6.17 1.696c-4.247.126-8.032-2.557-8.032-7.324 0-4.65 3.34-7.315 7.926-7.315 2.812 0 6.532 1.949 6.532 1.949s2.722-4.995 4.132-7.493c-2.582-1.957-6.021-3.03-10.021-3.03-10.095 0-17.914 6.582-17.914 15.83 0 9.366 7.349 15.795 17.914 15.6 2.953-.11 7.027-1.146 9.51-2.741z" style="fill:#fff"/><path d="m0 26.12 14.532 25.975v15.844L.017 93.863 0 26.12z" fill="#5B57A2"/><path d="m55.797 42.643 13.617-8.346 27.868-.026-41.485 25.414V42.643z" fill="#D90751"/><path d="m55.72 25.967.077 34.39-14.566-8.95V0l14.49 25.967z" fill="#FAB718"/><path d="m97.282 34.271-27.869.026-13.693-8.33L41.231 0l56.05 34.271z" fill="#ED6F26"/><path d="M55.797 94.007V77.322l-14.566-8.78.008 51.458 14.558-25.993z" fill="#63B22F"/><path d="M69.38 85.737 14.531 52.095 0 26.12l97.223 59.583-27.844.034z" fill="#1487C9"/><path d="m41.24 120 14.556-25.993 13.583-8.27 27.843-.034L41.24 120z" fill="#017F36"/><path d="m.017 93.863 41.333-25.32-13.896-8.526-12.922 7.922L.017 93.863z" fill="#984995"/><path d="M114.619 83.337c-.32.408-.741.716-1.246.924a4.282 4.282 0 0 1-1.632.316 4.63 4.63 0 0 1-1.633-.274 3.623 3.623 0 0 1-1.262-.782 3.539 3.539 0 0 1-.824-1.224 4.173 4.173 0 0 1-.295-1.59c0-.54.093-1.04.286-1.513a3.58 3.58 0 0 1 .79-1.224 3.88 3.88 0 0 1 1.196-.823c.463-.2.968-.308 1.523-.308.598 0 1.153.075 1.658.224.505.15.934.4 1.287.75l-.614 1.04a2.886 2.886 0 0 0-1.027-.6 3.612 3.612 0 0 0-1.12-.174c-.335 0-.655.066-.966.19a2.591 2.591 0 0 0-.825.534 2.438 2.438 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.075.775.218 1.09.144.326.337.6.58.833.245.234.53.408.859.525a2.9 2.9 0 0 0 1.044.183c.454 0 .867-.092 1.22-.267a3.05 3.05 0 0 0 .926-.69zm1.733 1.065v-7.405h1.33v5.517l4.325-5.517h1.33v7.406h-1.33v-5.517l-4.325 5.517h-1.33zm15.795-1.065a3.01 3.01 0 0 1-1.245.924 4.291 4.291 0 0 1-1.633.316 4.628 4.628 0 0 1-1.632-.274 3.627 3.627 0 0 1-1.263-.782 3.539 3.539 0 0 1-.824-1.224 4.173 4.173 0 0 1-.295-1.59c0-.54.093-1.04.286-1.513.186-.475.455-.882.79-1.224a3.88 3.88 0 0 1 1.196-.823 3.637 3.637 0 0 1 1.523-.308c.598 0 1.153.075 1.658.224.505.15.934.4 1.288.75l-.615 1.04a2.874 2.874 0 0 0-1.026-.6 3.616 3.616 0 0 0-1.12-.174 2.603 2.603 0 0 0-1.792.724 2.536 2.536 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.076.775.219 1.09.143.326.336.6.58.833.244.234.53.408.859.525.328.116.673.183 1.043.183.455 0 .859-.092 1.22-.267a3.05 3.05 0 0 0 .926-.69zm.682-6.34h6.824v1.315h-2.743v6.09h-1.33v-6.09h-2.743v-1.315z" style="fill:#fff"/><path d="M145.864 84.328c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.967.55-.396.15-.842.224-1.33.224-.732 0-1.338-.191-1.818-.582-.48-.392-.74-.94-.8-1.64h5.757a4 4 0 0 0 .084-.89 3.35 3.35 0 0 0-.278-1.381 3.277 3.277 0 0 0-.74-1.074 3.295 3.295 0 0 0-1.111-.69 3.692 3.692 0 0 0-1.355-.25c-.623 0-1.17.108-1.65.308a3.637 3.637 0 0 0-1.203.824 3.477 3.477 0 0 0-.748 1.223 4.272 4.272 0 0 0-.261 1.514c0 .583.1 1.115.286 1.59a3.5 3.5 0 0 0 .808 1.223c.345.34.765.599 1.262.782a4.772 4.772 0 0 0 1.658.274 5.04 5.04 0 0 0 1.506-.24zm-3.366-5.7c.412-.374.959-.557 1.649-.557.648 0 1.17.175 1.549.525.379.349.58.832.614 1.447h-4.544a2.26 2.26 0 0 1 .732-1.414z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M149.499 76.997h1.212l2.878 3.67 2.726-3.67h1.178v7.406h-1.33v-5.4l-2.591 3.436h-.051l-2.692-3.437v5.4h-1.33z" style="fill:#fff"/><path d="M161.11 77.022a4.187 4.187 0 0 0-1.143.49l.353 1.05c.303-.15.606-.275.909-.383.303-.11.69-.16 1.153-.16.37 0 .665.06.892.176.227.108.395.275.513.475.118.2.194.449.236.74.042.29.059.607.059.949a2.28 2.28 0 0 0-.91-.375 5.229 5.229 0 0 0-.958-.1c-.396 0-.766.059-1.12.158-.353.1-.656.25-.9.45a2.14 2.14 0 0 0-.59.74 2.3 2.3 0 0 0-.218 1.007c0 .724.21 1.29.63 1.69.422.399.977.598 1.667.598.623 0 1.12-.108 1.498-.324.379-.217.682-.466.9-.75v.958h1.246v-4.543c0-.966-.21-1.714-.64-2.24-.42-.523-1.17-.79-2.23-.79-.471 0-.917.067-1.346.184zm2.224 6c-.303.216-.7.315-1.187.315-.43 0-.766-.108-1.001-.316-.236-.216-.354-.5-.354-.85 0-.206.042-.381.135-.54a1.23 1.23 0 0 1 .362-.382 1.6 1.6 0 0 1 .513-.225c.194-.05.387-.075.589-.075.657 0 1.22.158 1.683.49v.94a3.824 3.824 0 0 1-.74.642zm13.733-8.63c.269-.124.52-.332.757-.64l-.724-1.04c-.185.25-.395.424-.631.516a4.007 4.007 0 0 1-.774.216l-.252.045c-.22.038-.454.08-.707.122a5.224 5.224 0 0 0-1.178.366c-.598.258-1.077.607-1.44 1.048-.361.44-.647.94-.841 1.49a7.793 7.793 0 0 0-.395 1.722c-.068.6-.101 1.173-.101 1.722 0 .708.092 1.348.277 1.922.186.575.446 1.057.79 1.448.346.4.759.7 1.247.916.488.216 1.035.324 1.649.324.564 0 1.086-.108 1.557-.308a3.758 3.758 0 0 0 1.212-.823c.336-.342.606-.75.79-1.207a3.74 3.74 0 0 0 .287-1.465c0-.557-.084-1.064-.244-1.514a3.271 3.271 0 0 0-.69-1.156 3.072 3.072 0 0 0-1.103-.75 3.827 3.827 0 0 0-1.447-.266c-.32 0-.631.042-.934.125a3.604 3.604 0 0 0-.842.358 3.2 3.2 0 0 0-.698.54c-.202.209-.37.442-.488.708h-.034a8.07 8.07 0 0 1 .143-1.048c.076-.358.185-.7.329-1.024.143-.324.328-.616.555-.882a2.52 2.52 0 0 1 .875-.624 4.646 4.646 0 0 1 1.153-.374l.264-.048c.263-.048.514-.094.754-.144.32-.066.614-.15.884-.274zm-4.68 7.115a4.146 4.146 0 0 1-.184-1.298 2.09 2.09 0 0 1 .303-.707 2.48 2.48 0 0 1 .547-.6 2.773 2.773 0 0 1 1.733-.59c.783 0 1.372.24 1.784.716.413.482.615 1.08.615 1.805 0 .358-.068.683-.185.982a2.36 2.36 0 0 1-1.28 1.323 2.45 2.45 0 0 1-1.001.2c-.37 0-.707-.075-1.018-.225a2.34 2.34 0 0 1-.8-.624 3.129 3.129 0 0 1-.513-.982zm16.402-4.51h-1.33v7.406h1.33zm-8.281 0h1.33v2.222h1.229c.58 0 1.05.075 1.43.216.379.142.682.333.909.566.227.233.387.508.48.815.092.308.143.624.143.957 0 .333-.051.65-.16.966-.101.316-.278.59-.514.84-.235.25-.555.45-.96.6-.403.149-.891.232-1.48.232H180.5v-7.414zm1.33 3.46v2.714h.968c.665 0 1.136-.116 1.405-.35.27-.233.404-.565.404-1.006 0-.45-.143-.79-.412-1.024-.278-.233-.741-.35-1.38-.35h-.985z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M197.583 83.337c-.32.408-.741.716-1.246.924a4.286 4.286 0 0 1-1.632.316 4.63 4.63 0 0 1-1.633-.274 3.613 3.613 0 0 1-1.262-.782 3.555 3.555 0 0 1-.825-1.224 4.192 4.192 0 0 1-.294-1.59c0-.54.092-1.04.286-1.513a3.58 3.58 0 0 1 .79-1.224c.338-.35.74-.615 1.196-.823a3.634 3.634 0 0 1 1.523-.308c.597 0 1.153.075 1.658.224.505.15.934.4 1.287.75l-.614 1.04a2.886 2.886 0 0 0-1.027-.6 3.612 3.612 0 0 0-1.12-.174c-.335 0-.655.066-.967.19a2.587 2.587 0 0 0-.824.534 2.52 2.52 0 0 0-.564.832 2.64 2.64 0 0 0-.21 1.08c0 .409.075.775.218 1.09.143.326.337.6.58.833.245.234.53.408.859.525.329.116.674.183 1.044.183a2.76 2.76 0 0 0 1.22-.267 3.05 3.05 0 0 0 .926-.69zm.68-6.34h6.826v1.315h-2.744v6.09h-1.33v-6.09h-2.742v-1.315z" style="fill:#fff"/><path d="M207.866 76.998h-1.33v10.7h1.33v-3.636c.269.175.589.3.959.383.37.083.757.124 1.153.124.589 0 1.119-.108 1.599-.307a3.825 3.825 0 0 0 1.228-.84 3.65 3.65 0 0 0 .79-1.266c.186-.49.279-1.015.279-1.572 0-.55-.084-1.057-.244-1.515a3.524 3.524 0 0 0-.69-1.181 2.996 2.996 0 0 0-1.086-.774 3.49 3.49 0 0 0-1.44-.283c-.52 0-1.008.1-1.471.3-.463.2-.825.44-1.077.74zm.926 1.373c.379-.2.79-.3 1.237-.3.387 0 .732.058 1.044.183.303.125.555.3.766.533.21.233.37.5.47.815.11.316.16.658.16 1.032 0 .4-.067.757-.184 1.09a2.4 2.4 0 0 1-.514.849 2.36 2.36 0 0 1-.816.557 2.685 2.685 0 0 1-1.086.208c-.361 0-.698-.041-1.018-.124a3.328 3.328 0 0 1-.984-.45v-3.67c.235-.282.547-.523.925-.723zm15.28-1.374h-1.33v7.406h1.33zm-8.288 0h1.33v2.222h1.228c.58 0 1.052.075 1.43.216.38.142.683.333.91.566.227.233.387.508.479.815.093.308.143.624.143.957 0 .333-.05.65-.16.966-.1.316-.277.59-.513.84-.235.25-.555.45-.96.6-.403.149-.891.232-1.48.232h-2.415v-7.414zm1.339 3.46v2.714h.968c.664 0 1.136-.116 1.405-.35.269-.233.404-.565.404-1.006 0-.45-.143-.79-.412-1.024-.278-.233-.741-.35-1.38-.35h-.985z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="m230.452 80.567 2.844 3.836h-1.632l-2.197-2.996-2.23 2.996h-1.548l2.827-3.77-2.66-3.636h1.634l2.028 2.796 2.06-2.796h1.55zM113.635 93.556h-4.081v6.174h-1.33v-7.405h6.74v7.405h-1.33zm8.877.083h-2.625l-.085 1.248c-.092 1.057-.218 1.906-.395 2.554-.177.65-.396 1.149-.648 1.498-.252.35-.547.59-.884.708a3.06 3.06 0 0 1-1.085.183l-.101-1.282a1.08 1.08 0 0 0 .496-.108c.186-.083.37-.266.547-.54.177-.284.337-.683.48-1.2.143-.523.236-1.205.286-2.063l.135-2.305h5.209v7.406h-1.33v-6.1z" style="fill:#fff"/><path d="M127.427 92.342c-.43.116-.817.282-1.145.49l.354 1.049c.303-.15.606-.275.908-.383.303-.108.69-.158 1.153-.158.37 0 .665.058.892.174.228.109.396.275.514.475.117.2.193.45.235.74.042.292.059.608.059.949a2.277 2.277 0 0 0-.91-.374 5.22 5.22 0 0 0-.958-.1c-.395 0-.766.058-1.12.158-.353.1-.656.25-.9.45a2.14 2.14 0 0 0-.59.74 2.3 2.3 0 0 0-.217 1.007c0 .723.21 1.29.63 1.689.42.399.977.599 1.667.599.623 0 1.119-.108 1.498-.325.378-.216.68-.466.9-.75v.958h1.246v-4.543c0-.965-.211-1.714-.64-2.238-.421-.525-1.17-.79-2.23-.79a5.1 5.1 0 0 0-1.346.182zm2.23 5.998c-.302.217-.698.317-1.186.317-.438 0-.766-.108-1.001-.317-.236-.216-.354-.5-.354-.848 0-.208.042-.383.135-.541.092-.158.219-.283.362-.383.143-.1.319-.175.513-.225a2.33 2.33 0 0 1 .589-.074c.656 0 1.22.158 1.683.49v.94a3.83 3.83 0 0 1-.741.64z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/><path d="M132.946 92.325h6.825v1.314h-2.744v6.09h-1.33v-6.09h-2.742v-1.314z" style="fill:#fff"/><path d="M145.982 99.655c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.968.55-.395.15-.841.224-1.33.224-.731 0-1.337-.191-1.817-.582-.48-.391-.74-.94-.8-1.64h5.757c.058-.257.084-.55.084-.89 0-.507-.093-.965-.278-1.381a3.264 3.264 0 0 0-.741-1.073 3.28 3.28 0 0 0-1.11-.691 3.696 3.696 0 0 0-1.355-.25c-.623 0-1.17.108-1.65.308a3.618 3.618 0 0 0-1.203.824 3.494 3.494 0 0 0-.75 1.223 4.294 4.294 0 0 0-.26 1.514c0 .583.1 1.115.286 1.59.186.474.463.882.808 1.223a3.47 3.47 0 0 0 1.263.782 4.766 4.766 0 0 0 1.657.275c.497 0 1.002-.084 1.507-.242zm-3.374-5.708c.412-.374.959-.557 1.649-.557.657 0 1.17.183 1.549.524.378.35.58.832.614 1.448h-4.544a2.26 2.26 0 0 1 .732-1.415zm5.848-1.622h1.683l2.566 3.57-2.743 3.835h-1.632l2.877-3.836-2.751-3.57zm4.577 0h1.33v7.405h-1.33zm6.084 7.405-2.928-3.836 2.735-3.57h-1.65l-2.583 3.57 2.777 3.836zm6.076-.075c.505-.158.934-.4 1.304-.732l-.404-1.032c-.244.217-.572.4-.967.55-.396.15-.842.224-1.33.224-.732 0-1.338-.191-1.818-.582-.48-.391-.74-.94-.8-1.64h5.757c.059-.257.084-.55.084-.89 0-.507-.092-.965-.278-1.381a3.276 3.276 0 0 0-.74-1.073 3.284 3.284 0 0 0-1.111-.691 3.692 3.692 0 0 0-1.355-.25c-.622 0-1.17.108-1.65.308a3.624 3.624 0 0 0-1.202.824 3.465 3.465 0 0 0-.75 1.223 4.272 4.272 0 0 0-.26 1.514c0 .583.1 1.115.286 1.59.185.474.463.882.808 1.223.345.34.765.599 1.262.782a4.772 4.772 0 0 0 1.658.275 5.04 5.04 0 0 0 1.506-.242zm-3.374-5.708c.413-.374.96-.557 1.65-.557.648 0 1.169.183 1.548.524.379.35.58.832.614 1.448h-4.544a2.26 2.26 0 0 1 .732-1.415zm10.595-4.11c-.783 0-1.212-.433-1.28-1.298h-1.253c0 .332.059.632.168.915.11.283.27.524.48.724.21.2.48.358.79.482.312.125.674.183 1.086.183a2.64 2.64 0 0 0 1.019-.183c.303-.116.555-.282.774-.482a2.1 2.1 0 0 0 .496-.724c.118-.283.177-.583.177-.915h-1.245c-.06.865-.472 1.298-1.212 1.298zm-3.594 2.487v7.406h1.33l4.325-5.517v5.517h1.33v-7.406h-1.33l-4.325 5.517v-5.517z" style="clip-rule:evenodd;fill:#fff;fill-rule:evenodd"/></svg>\
    				</button>\
    			</li>\
    			</ul>\
    			</div>\
    		<div class="refill-window__bonus"><span class="refill-window__bonus-text" id="bonus-text"></span></div>\
    		<div class="refill-window__content__pay">\
    			<div class="refill-window__payment-info">\
    				<div class="refill-window__amount-wrapper">\
    					<div class="refill-window__amount-input-wrapper">\
    						<div class="refill-window__pre-input">₽</div>\
    							<input class="refill-window__amount-input" placeholder="Введите сумму" type="number" id="refill-window__amount-input" value="500">\
    						</div>\
    					</div>\
    				<div class="refill-window__button-wrapper" id="buybtnwrap" onclick="OnClickBuyBtn(this)">\
    					<a class="refill-window__button--disabled" id="buybtn" target="_blank">пополнить</a>\
    				</div>\
    			</div>\
    		</div>\
    	</div></div>'
};

let btn_unlocked = 0;

function ResetBtns() {
    let btn1 = document.getElementById('element1');
    let btn2 = document.getElementById('element2');
    let btn3 = document.getElementById('element3');
    let btn4 = document.getElementById('element4');
    let btn5 = document.getElementById('element5');
    let btn6 = document.getElementById('element6');
    let btn7 = document.getElementById('element7');
    let btn8 = document.getElementById('element8');
    let btn9 = document.getElementById('element9');
    let btn10 = document.getElementById('element10');

    btn1.style.backgroundColor = "#1d1d26";
    btn2.style.backgroundColor = "#1d1d26";
    btn3.style.backgroundColor = "#1d1d26";
    btn4.style.backgroundColor = "#1d1d26";
    btn5.style.backgroundColor = "#1d1d26";
    btn6.style.backgroundColor = "#1d1d26";
    btn7.style.backgroundColor = "#1d1d26";
    btn8.style.backgroundColor = "#1d1d26";
    btn9.style.backgroundColor = "#1d1d26";
    btn10.style.backgroundColor = "#1d1d26";
}

function UnLockBuyBtn() {
    let btn_buy = document.getElementById('buybtn');
    btn_buy.classList.remove('refill-window__button--disabled');
    btn_buy.classList.add('refill-window__button--enable');
}

/**
 * Генерируем ссылку на оплату только при нажатии на оплатить
 * @param event
 * @constructor
 */
function OnClickBuyBtn(event)
{
    if (btn_unlocked == 1) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 30 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlQiwi());
        }
    }
    if (btn_unlocked == 2) {
        appcentHandler();
    }
    if (btn_unlocked == 3) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 4) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 10 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 10 RUB.";
            document.getElementById('buybtn').removeAttribute("href");
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            document.getElementById('buybtn').setAttribute("href", OvhPayUrl);
        }
    }
    if (btn_unlocked == 5) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 6) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 30 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlQiwi());
        }
    }
    if (btn_unlocked == 7) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 50 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 8) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 1500 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 1500 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 9) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 1500 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 1500 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
    if (btn_unlocked == 10) {
        var inputval = document.getElementById('refill-window__amount-input').value;
        var inputfloat = parseFloat(inputval);
        if (inputfloat < 100 || isNaN(inputfloat)) {
            document.getElementById('bonus-text').innerText = "Минимальная сумма - 100 RUB.";
            return false;
        }
        else {
            document.getElementById('bonus-text').innerText = "";
            window.open(generateUrlEnot());
        }
    }
}
var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

/**
 * Генерация ссылки для киви
 * @returns {string}
 */
function generateUrlQiwi(){
    var publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPstb71o5WBc81rSxcVSwZGupjxDG2C76qeMK3rnwH3fNeFYggGmJkMrsFtA2TdEoPABE8aAihFaP3FAoqdWRr4hRa4DX5QPihAQ2gioqiB';
    var commentQiwi = `${CustomerSteamId}`;
    var successUrlQiwi = 'http://17582.pay2win.ru/';
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);
    return 'https://oplata.qiwi.com/create?amount='+inputfloat+'&comment='+commentQiwi+'&publicKey='+publicKey+'&account=0&customFields[themeCode]=Konstantyn-K9-lD3vkZl&successUrl='+successUrlQiwi;
}

/**
 * Генерация ссылки для енота
 * @returns {string}
 */
function generateUrlEnot(){
    var inputval = document.getElementById('refill-window__amount-input').value;
    var MERCHANT_ID   = 41751,             // ID магазина
        SECRET_WORD   = '0zxrLSXVbCBB6SBp0Saak8YZhWJelH20',   // Секретный ключ
        ORDER_AMOUNT  = parseFloat(inputval),               // Сумма заказа
        PAYMENT_ID    = new Date().getTime(),        // ID заказа (мы используем time(), чтобы был
        SLUG = MD5(MERCHANT_ID+':'+ORDER_AMOUNT+':'+SECRET_WORD+':'+PAYMENT_ID)
    return 'https://enot.io/pay?c='+`${CustomerSteamId}`+`&cf=`+`${CustomerSteamId}`+'&m='+MERCHANT_ID+'&oa='+ORDER_AMOUNT+'&o='+PAYMENT_ID+'&s='+SLUG;
}
var colorgrayhover = "#272730";
function OnClickElement1(event) { /*QIWI*/
    ResetBtns();

    let element = document.getElementById('element1');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 1;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement2(event) { /*CENT.APP*/
    ResetBtns();

    let element = document.getElementById('element2');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 2;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement3(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element3');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 3;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement4(event) { /*MOSCOW.OVH x TOME*/
    ResetBtns();

    let element = document.getElementById('element4');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 4;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
}

function OnClickElement5(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element5');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 5;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement6(event) { /*QIWI*/
    ResetBtns();

    let element = document.getElementById('element6');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 6;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement7(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element7');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 7;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement8(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element8');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 8;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement9(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element9');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 9;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}

function OnClickElement10(event) { /*ENOT.IO*/
    ResetBtns();

    let element = document.getElementById('element10');
    element.style.backgroundColor = colorgrayhover;
    btn_unlocked = 10;
    UnLockBuyBtn();
    document.getElementById('bonus-text').innerText = "";
    document.getElementById('buybtn').removeAttribute("href");
}



function OpenPay(el, usefade = true, zind = false) {
    closepagePay();
    var div1 = document.createElement("div");
    div1.id = 'ModalPay';
    var div2 = document.createElement("div");
    div2.className = 'modalpay modalpay-service fade';
    if(!usefade) div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modalpay-dialog modalpay-lg";
    var div4 = document.createElement("div");
    div4.className = "modalpay-content";
    var div6 = document.createElement("div");
    div6.className = "modalpay-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    div8.className = "modalpay-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if(el=="Oplata") {div2.style = 'display: flex; place-content: center; align-items: center; z-index: 1051;';}

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div6);
    div1.appendChild(div8);
    if(usefade) setTimeout(()=> div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepagePay() {
    var Modal = document.getElementById('ModalPay');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null) return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
    btn_unlocked = 0;
}

function Open(el, usefade = true, zind = false) {
    closepage();
    var div1 = document.createElement("div");
    div1.id = 'Modal';
    var div2 = document.createElement("div");
    div2.className = 'modal modal-service fade';
    if(!usefade) div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    var div3 = document.createElement("div");
    div3.className = "modal-dialog modal-lg";
    if(el=="block")div3.className+=" modal-lg-block"
    if(el=="block") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}
    var div4 = document.createElement("div");
    div4.className = "modal-content";
    var div5 = document.createElement("div");
    div5.className = "modal-header";
    div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
    var div6 = document.createElement("div");
    div6.className = "modal-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    div7.className = "modal-footer";
    div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
    var div8 = document.createElement("div");
    div8.className = "modal-backdrop fade show";
    div8.style = 'z-index: 1050;';
    if(el=="Oplata") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}

    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);
    div1.appendChild(div8);
    if(usefade) setTimeout(()=> div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepage() {
    var Modal = document.getElementById('Modal');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null) return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
}

function search(e){
    if (e.offsetX < 1) {
        console.log(e.target.innerText + ' | ' + e.clientX);
        if (document.selection) { // IE
            var range = document.body.createTextRange();
            range.moveToElementText(e.target);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(e.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.');
        } catch (err) {
            console.log('Oops, unable to copy' + err);
        }
    }
}

window.onload = function () {
    document.body.onclick=function(event)
    {
        if(event.target.id == 'closer')closepage();
        if(event.target.id == 'closer')closepagePay();
        if(event.target.className == 'refill-window__close')closepagePay();
        if(event.target.className == 'MsoCommand')search(event);
    }

    for (var i = 0; i < BlockListArrays.length; i++) {
        curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
        for (var b = 0; b < BlockListArrays[i].length; b++) {
            if(b == 5 && i == 4)
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
            else
            if (BlockListArrays[i][b] == "pistol.prototype17") {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/11/06/723437cdd667a17816dccdbdd75994c5.png">\
											<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
            }
            else {
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://www.rustedit.io/images/imagelibrary/'+ BlockListArrays[i][b] +'.png">\
											<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
            }
        }
        curcontent["block"].xcon += '</div>';
    }
    curcontent["block"].xcon += '</div>\<br></i></div>';
}

var CustomerSteamId = "0"; // Стандартно 0, для теста указан id
var OvhPayUrl = "";

const appCentForm = document.getElementById('appcent-inp-form');

function appcentHandler() {
    var inputval = document.getElementById('refill-window__amount-input').value;
    var inputfloat = parseFloat(inputval);

    if (inputfloat < 30 || isNaN(inputfloat)) {
        document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
        return false;
    } else {
        document.getElementById('bonus-text').innerText = "";
    }

    if (CustomerSteamId == "0" || CustomerSteamId == "") {
        //document.getElementById('appcent-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";

        //return false;
    }

    fetch('https://cent.app/api/v1/bill/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 13201|BLDmFNXQQOKY9lmyKY96bKZI8jLiv9kXrui6qLmX',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: inputfloat,
            shop_id: 'WG76jKb7xl',
            order_id: `${CustomerSteamId}`,
            payer_pays_commission: '1',
            name: `Пополнение для ${CustomerSteamId}`,
        })
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res.status)
                return Promise.reject(`Ошибка: ${res.status}`);
            };
        })
        .then((res) => {
            window.open(res.link_page_url);
        })
}


function OvhUrlOverrite() {
    var slides = document.getElementsByClassName("nav-link");
    for (var i = 0; i < slides.length; i++) {
        var elelink = slides.item(i);
        var urlelelink = elelink.getAttribute("href");
        if (urlelelink.startsWith('https://pay.moscow.ovh')) {
            OvhPayUrl = urlelelink;
            console.log(OvhPayUrl);
            elelink.setAttribute("href", "javascript:;");
            elelink.setAttribute("onclick", "OpenOplata()");
        }
    }
}

function obtainShopSteamId() {
    if (CustomerSteamId != "0" && CustomerSteamId != "") {
        return;
    }
    var xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null) {
        xmlHttp.open("GET", "/api/index.php?modules=users&action=getData", true);
        xmlHttp.send(null);
    }
    xmlHttp.onload = function (gjson) {
        var gjson = JSON.parse(xmlHttp.response);
        console.log(gjson);
        var preSteam = gjson.data.steamID;
        OvhPayUrl = "https://pay.moscow.ovh/?" + gjson.data.pay;
        if (preSteam > 76561100000000000 || !isNaN(preSteam)) {
            CustomerSteamId = preSteam.toString();
            OvhUrlOverrite();
        } else {
            console.log("error obtainShopSteamId! " + gjson);
        }
    }

}

function OpenOplata() {
    OpenPay('Oplata');
}

var DOMReady = function (a, b, c) { b = document, c = 'addEventListener'; b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a) }
window.addEventListener("load", function () {
    try {
        obtainShopSteamId();
    } catch (e) {
        console.log('element not found ' + e);
    }
});
