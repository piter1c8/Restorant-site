export const siteConfig = {
  name: "ТехноРемонт",
  tagline: "Ремонт компьютеров и ноутбуков любой сложности",
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "info@technoremont.ru",
  address: "г. Москва, ул. Технологическая, д. 12",
  workHours: "Пн–Сб: 9:00–20:00, Вс: 11:00–18:00",
  whatsapp: "https://wa.me/74951234567",
  telegram: "https://t.me/technoremont",
};

export const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Цены", href: "#pricing" },
  { label: "Этапы", href: "#process" },
  { label: "Бронирование", href: "#booking" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const images = {
  hero: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  repair: "https://images.pexels.com/photos/10558599/pexels-photo-10558599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  motherboard: "https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  motherboardClose: "https://images.pexels.com/photos/7639374/pexels-photo-7639374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  circuit: "https://images.pexels.com/photos/7639360/pexels-photo-7639360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  thermal: "https://images.pexels.com/photos/10558600/pexels-photo-10558600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  laptop: "https://images.pexels.com/photos/34514242/pexels-photo-34514242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  laptopInternals: "https://images.pexels.com/photos/15554492/pexels-photo-15554492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  tablet: "https://images.pexels.com/photos/11715244/pexels-photo-11715244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  workshop: "https://images.pexels.com/photos/5506058/pexels-photo-5506058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  workshopWide: "https://images.pexels.com/photos/5506050/pexels-photo-5506050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  hardDrive: "https://images.pexels.com/photos/32892856/pexels-photo-32892856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  hardDriveParts: "https://images.pexels.com/photos/32920312/pexels-photo-32920312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  platters: "https://images.pexels.com/photos/6429123/pexels-photo-6429123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  server: "https://images.pexels.com/photos/37605910/pexels-photo-37605910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  gaming: "https://images.pexels.com/photos/30469973/pexels-photo-30469973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  gamingAlt: "https://images.pexels.com/photos/4317157/pexels-photo-4317157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  team: "https://images.pexels.com/photos/12741849/pexels-photo-12741849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

export const services = [
  { id: "laptop", title: "Ремонт ноутбуков", description: "Диагностика, замена матриц, клавиатур и аккумуляторов.", icon: "Laptop", price: "от 990 ₽", duration: "1–3 дня", image: images.laptop, features: ["Замена дисплея", "Ремонт после залития", "Замена клавиатуры", "Чистка охлаждения"] },
  { id: "pc", title: "Ремонт ПК", description: "Ремонт, апгрейд и сборка стационарных компьютеров.", icon: "Monitor", price: "от 1 200 ₽", duration: "1–2 дня", image: images.repair, features: ["Замена комплектующих", "Чистка от пыли", "Сборка ПК", "Диагностика"] },
  { id: "data", title: "Восстановление данных", description: "Возвращаем файлы с повреждённых HDD, SSD и флешек.", icon: "HardDrive", price: "от 2 500 ₽", duration: "2–5 дней", image: images.hardDrive, features: ["После форматирования", "Битые сектора", "RAW-накопители", "SSD и NVMe"] },
  { id: "upgrade", title: "Апгрейд и сборка", description: "Игровые и рабочие станции под задачи и бюджет.", icon: "Cpu", price: "от 1 500 ₽", duration: "1–3 дня", image: images.gaming, features: ["Игровые сборки", "Рабочие станции", "Тестирование", "Установка ОС"] },
  { id: "board", title: "Компонентный ремонт", description: "BGA-пайка, замена чипов и ремонт материнских плат.", icon: "CircuitBoard", price: "от 2 000 ₽", duration: "2–5 дней", image: images.motherboard, features: ["BGA-реболл", "Замена чипов", "Микропайка", "Дорожки платы"] },
  { id: "network", title: "Настройка сетей", description: "Роутеры, Wi-Fi mesh, серверы и видеонаблюдение.", icon: "Network", price: "от 800 ₽", duration: "1 день", image: images.server, features: ["Wi-Fi mesh", "Прокладка кабеля", "NAS и бэкапы", "IP-видеонаблюдение"] },
];

export const advantages = [
  { icon: "ShieldCheck", title: "Гарантия до 2 лет", description: "Официальная гарантия на все работы и запчасти." },
  { icon: "Clock3", title: "Срочный выезд", description: "Мастер приедет в течение часа в пределах МКАД." },
  { icon: "BadgeCheck", title: "Опытные инженеры", description: "Сертифицированные специалисты с опытом до 12 лет." },
  { icon: "Wallet", title: "Прозрачные цены", description: "Смета согласуется заранее, без скрытых платежей." },
  { icon: "Truck", title: "Бесплатная диагностика", description: "Не платите за диагностику при ремонте у нас." },
  { icon: "Headphones", title: "Поддержка 24/7", description: "Отвечаем в мессенджерах в любое время." },
];

export const priceList = [
  ["Диагностика ноутбука", "Бесплатно", "30 мин"], ["Замена матрицы", "от 2 500 ₽", "1–2 дня"], ["Замена клавиатуры", "от 1 500 ₽", "1 день"], ["Чистка охлаждения", "от 1 200 ₽", "2 часа"], ["Замена термопасты", "от 800 ₽", "1 час"], ["Ремонт после залития", "от 3 000 ₽", "2–5 дней"], ["BGA-пайка чипа", "от 4 500 ₽", "3–5 дней"], ["Восстановление данных", "от 2 500 ₽", "2–5 дней"], ["Сборка ПК на заказ", "от 1 500 ₽", "1–3 дня"], ["Установка Windows", "от 700 ₽", "1–2 часа"], ["Настройка роутера", "от 800 ₽", "1 час"], ["Выезд мастера", "от 500 ₽", "1 час"],
];

export const processSteps = [
  ["01", "Заявка", "Оставляете заявку — мы перезваниваем за 15 минут.", "PhoneCall"],
  ["02", "Диагностика", "Определяем причину поломки и согласовываем стоимость.", "Stethoscope"],
  ["03", "Ремонт", "Чиним в лаборатории с профессиональным оборудованием.", "Wrench"],
  ["04", "Контроль качества", "Тестируем устройство по 50+ параметрам.", "ClipboardCheck"],
  ["05", "Выдача", "Отдаём устройство с документами и гарантией.", "BadgeCheck"],
];

export const gallery = [
  [images.workshop, "Наша лаборатория", "Рабочее пространство"], [images.motherboardClose, "Компонентный ремонт", "Сложные случаи"], [images.thermal, "Профилактика", "Обслуживание"], [images.gamingAlt, "Игровые сборки", "Апгрейд"], [images.platters, "Восстановление данных", "Лаборатория"], [images.laptopInternals, "Система охлаждения", "Обслуживание"],
];

export const team = [
  ["Алексей Воронов", "Главный инженер", "12 лет опыта", images.team], ["Дмитрий Соколов", "Инженер по ноутбукам", "8 лет опыта", images.motherboard], ["Игорь Лебедев", "Специалист по данным", "10 лет опыта", images.hardDrive], ["Максим Петров", "Сборщик ПК", "6 лет опыта", images.gaming],
];

export const reviews = [
  ["Сергей М.", "Ремонт ноутбука", "Залил ноутбук кофе. Ребята за два дня всё починили — работает как новый!", "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"],
  ["Анна К.", "Восстановление данных", "Сломался диск с семейными фото. Восстановили абсолютно всё! Очень благодарна.", "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"],
  ["Виктор П.", "Сборка ПК", "Собрали игровой ПК под бюджет. Отдельное спасибо за кабель-менеджмент.", "https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"],
  ["Елена С.", "Замена матрицы", "Заменили экран за один день и дали гарантию на год. Рекомендую!", "https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"],
];

export const faqItems = [
  ["Сколько стоит диагностика?", "Диагностика бесплатна при согласии на ремонт. При отказе от ремонта — 500 ₽."],
  ["Даёте ли вы гарантию?", "На все работы предоставляется официальная гарантия от 6 месяцев до 2 лет."],
  ["Можно ли вызвать мастера на дом?", "Да, выезжаем по Москве и области. Стоимость выезда — от 500 ₽ в пределах МКАД."],
  ["Как быстро вы чините устройства?", "Простые работы выполняем за 1–2 часа, сложный ремонт — до 5 дней."],
  ["Используете ли оригинальные запчасти?", "Используем оригинальные комплектующие или сертифицированные аналоги."],
];

export const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
export const deviceTypes = ["Ноутбук", "Компьютер", "MacBook / iMac", "Планшет", "Другое устройство"];
export const bookingTypes = ["В сервисном центре", "Выезд мастера на дом", "Удалённая консультация"];
export const brandLogos = ["Apple", "ASUS", "HP", "Dell", "Lenovo", "Acer", "MSI", "Samsung"];
