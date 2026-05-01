import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/88b9bec3-a545-4881-b7ed-71b7c3502611.jpg";
const IMG_FAMILY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/6f168601-0146-4668-b6f2-754fc64a947c.jpg";
const IMG_INSTALL = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/12317182-b294-45e9-9c32-11fd45ece646.jpg";
const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";

const CATALOG = [
  { id: 1, title: "Пластиковые окна", sub: "Профиль VEKA, KBE, Rehau", img: IMG_HERO, price: "от 4 200 ₽" },
  { id: 2, title: "Балконы и лоджии", sub: "Холодное и тёплое остекление", img: IMG_FAMILY, price: "от 8 500 ₽" },
  { id: 3, title: "Алюминиевые конструкции", sub: "Офисы, фасады, витражи", img: IMG_FACTORY, price: "от 12 000 ₽" },
  { id: 4, title: "Входные двери", sub: "ПВХ и металлопластик", img: IMG_INSTALL, price: "от 9 800 ₽" },
  { id: 5, title: "Мансардные окна", sub: "Velux, Fakro, собственное пр-во", img: IMG_HERO, price: "от 7 200 ₽" },
  { id: 6, title: "Стеклопакеты", sub: "Однокамерные, двухкамерные, триплекс", img: IMG_FACTORY, price: "от 1 800 ₽" },
];

const WHY = [
  { icon: "Factory", title: "Собственное производство", desc: "Завод площадью 5 000 м² в Ростове-на-Дону. Не перекупщики." },
  { icon: "BadgeCheck", title: "Гарантия 5 лет", desc: "Официальная гарантия на все изделия и монтажные работы." },
  { icon: "Timer", title: "Срок от 3 дней", desc: "Стандартные размеры — за 3 дня. Нестандарт — по договору." },
  { icon: "Percent", title: "Скидки до 40%", desc: "Акции, сезонные предложения и скидки постоянным клиентам." },
  { icon: "ThumbsUp", title: "12 000 клиентов", desc: "С нами уже работали тысячи семей и организаций в ЮФО." },
  { icon: "Wrench", title: "Монтаж под ключ", desc: "Замер, доставка, установка, отделка откосов — всё включено." },
];

const STEPS = [
  { num: "1", icon: "Phone", title: "Звонок или заявка", desc: "Позвоните нам или оставьте заявку на сайте" },
  { num: "2", icon: "Ruler", title: "Бесплатный замер", desc: "Выезд специалиста в день обращения" },
  { num: "3", icon: "FileText", title: "Расчёт и договор", desc: "Точный расчёт, заключаем договор" },
  { num: "4", icon: "Hammer", title: "Производство", desc: "Изготовление на нашем заводе" },
  { num: "5", icon: "CheckCircle", title: "Монтаж и сдача", desc: "Установка и проверка качества" },
];

const REVIEWS = [
  { name: "Ирина К.", rating: 5, text: "Заменили все окна в квартире. Очень довольны качеством и скоростью работы. Мастера аккуратные, убрали за собой. Рекомендую!", date: "15 марта 2024" },
  { name: "Сергей М.", rating: 5, text: "Застеклили балкон. Сделали быстро, цена вышла ниже, чем у конкурентов. Качество хорошее, тепло держит отлично.", date: "2 февраля 2024" },
  { name: "Людмила Н.", rating: 5, text: "Обращаюсь уже второй раз. В первый раз ставили пластиковые окна, теперь входную дверь. Всё чётко, без накладок.", date: "10 января 2024" },
];

const BRANDS = ["VEKA", "KBE", "Rehau", "Schüco", "Fakro", "Velux", "AGC", "Guardian"];

const FORM_TOPICS = ["Пластиковые окна", "Балкон/лоджия", "Алюминий", "Входная дверь", "Другое"];

export default function Home() {
  const [formTopic, setFormTopic] = useState("Пластиковые окна");
  const [formSent, setFormSent] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gray-900 overflow-hidden">
        <img src={IMG_HERO} alt="Окна" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <Icon name="MapPin" size={12} />
              Ростов-на-Дону • Завод-производитель
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
              Пластиковые окна<br />
              <span className="text-blue-400">прямо с завода</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-7 max-w-lg">
              Донская оконная компания — производство и установка окон с 2005 года. Собственный завод, гарантия 5 лет, монтаж под ключ.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/products" className="btn-orange">
                <Icon name="Package" size={16} />
                Выбрать окна
              </Link>
              <Link to="/contacts" className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
                <Icon name="Phone" size={16} />
                Заказать замер
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: "Shield", text: "Гарантия 5 лет" },
                { icon: "Star", text: "4.9 / 5 рейтинг" },
                { icon: "Users", text: "12 000+ клиентов" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon name={item.icon} size={15} className="text-blue-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK FORM */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
            {formSent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-muted-foreground text-sm">Перезвоним в течение 30 минут</p>
                <button onClick={() => setFormSent(false)} className="mt-5 text-primary text-sm underline">
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-1">Рассчитать стоимость</h3>
                <p className="text-muted-foreground text-sm mb-5">Бесплатный замер и точный расчёт</p>

                <div className="mb-4">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Что вас интересует?</label>
                  <div className="flex flex-wrap gap-2">
                    {FORM_TOPICS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormTopic(t)}
                        className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                          formTopic === t
                            ? "bg-primary text-white border-primary"
                            : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Ваш адрес (для замера)"
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <button type="submit" className="btn-orange w-full justify-center text-sm py-3.5">
                    <Icon name="Send" size={16} />
                    Получить расчёт бесплатно
                  </button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* PROMO STRIP */}
      <div className="brand-gradient text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-medium">
          {["🎁 Скидка 15% при заказе от 3 окон", "⚡ Замер в день обращения", "🚚 Доставка бесплатно", "🛡 Гарантия 5 лет"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      {/* CATALOG */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Ассортимент</p>
              <h2 className="text-3xl font-bold">Каталог продукции</h2>
            </div>
            <Link to="/products" className="text-primary text-sm font-medium hover:underline flex items-center gap-1 flex-shrink-0">
              Весь каталог <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATALOG.map((item) => (
              <Link
                key={item.id}
                to="/products"
                className="bg-white rounded-lg overflow-hidden border border-border card-hover group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.sub}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                    <span className="text-xs text-primary font-medium border border-primary/30 px-3 py-1 rounded-full">Подробнее</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Преимущества</p>
            <h2 className="text-3xl font-bold">Почему выбирают нас</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-6 card-hover">
                <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="brand-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "19", unit: "лет", label: "на рынке" },
            { num: "12 000", unit: "+", label: "выполненных заказов" },
            { num: "5 000", unit: "м²", label: "площадь завода" },
            { num: "5", unit: "лет", label: "гарантия" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{s.num}<span className="text-2xl text-blue-200">{s.unit}</span></div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Процесс</p>
            <h2 className="text-3xl font-bold">Как мы работаем</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-primary/20" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Icon name={step.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{step.num}</div>
                  <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Отзывы</p>
              <h2 className="text-3xl font-bold">Что говорят клиенты</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="font-bold text-foreground text-base">4.9</span>
              <span>/ 5 (812 отзывов)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.date}</div>
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">{"★".repeat(r.rating)}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-10 border-t border-b border-border bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm mb-6 uppercase tracking-wider font-medium">Работаем с ведущими брендами</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-gray-400 font-bold text-lg hover:text-primary transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">Наши работы</p>
              <h2 className="text-3xl font-bold">Выполненные проекты</h2>
            </div>
            <Link to="/gallery" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              Смотреть все <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[IMG_HERO, IMG_FAMILY, IMG_INSTALL, IMG_FACTORY].map((img, i) => (
              <Link key={i} to="/gallery" className="group relative overflow-hidden rounded-lg aspect-square">
                <img src={img} alt="Проект" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Хотите узнать стоимость окон для вашей квартиры?
            </h2>
            <p className="text-blue-200 leading-relaxed mb-6">
              Оставьте заявку — замерщик приедет бесплатно, сделает точные замеры и рассчитает итоговую стоимость. Никаких обязательств!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="btn-orange">
                <Icon name="Phone" size={16} />
                Заказать замер
              </Link>
              <a href="tel:+78632001234" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/20 transition-colors">
                <Icon name="PhoneCall" size={16} />
                +7 (863) 200-12-34
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={IMG_FAMILY} alt="Довольные клиенты" className="rounded-xl shadow-xl w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
