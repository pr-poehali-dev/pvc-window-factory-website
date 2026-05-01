import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";

const BENEFITS = [
  { icon: "TrendingUp", title: "Скидка до 30%", desc: "Дилерские цены от розничной стоимости" },
  { icon: "Clock", title: "Изготовление от 48 ч", desc: "Приоритетная очередь производства" },
  { icon: "Shield", title: "Гарантия 5 лет", desc: "На всю продукцию завода" },
  { icon: "HeadphonesIcon", title: "Персональный менеджер", desc: "Поддержка в рабочее время 6/7" },
  { icon: "BookOpen", title: "Обучение команды", desc: "Тренинги по продажам и монтажу" },
  { icon: "Megaphone", title: "Маркетинг", desc: "Готовые материалы и совместная реклама" },
];

const TIERS = [
  {
    name: "Партнёр",
    volume: "от 300 000 ₽/мес",
    discount: "15–20%",
    color: "bg-white border-border",
    btnClass: "bg-primary text-white",
    highlight: false,
    features: ["Дилерские цены", "Менеджер поддержки", "Каталоги и прайсы", "Онлайн-заказ"],
  },
  {
    name: "Бизнес",
    volume: "от 800 000 ₽/мес",
    discount: "20–25%",
    color: "bg-primary text-white border-primary",
    btnClass: "bg-white text-primary",
    highlight: true,
    features: ["Расширенная скидка", "Приоритет производства", "Со-финансирование рекламы", "Оборудование шоурума", "Обучение команды"],
  },
  {
    name: "Эксклюзив",
    volume: "от 2 000 000 ₽/мес",
    discount: "до 30%",
    color: "bg-white border-border",
    btnClass: "bg-primary text-white",
    highlight: false,
    features: ["Максимальная скидка", "Эксклюзив на регион", "Персональный менеджер 24/7", "Полная маркетинг-поддержка", "Брендированные материалы"],
  },
];

export default function Dealers() {
  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Дилерам</span>
        </div>
      </div>

      <section className="relative brand-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMG_FACTORY} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <Icon name="Handshake" size={13} />
              Партнёрская программа
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Станьте<br />официальным дилером<br />Донской оконной компании
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-7">
              Выгодные условия, поддержка на каждом этапе и продукт, который уже знают в ЮФО
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="btn-orange">
                <Icon name="FileText" size={16} /> Оставить заявку
              </Link>
              <a href="tel:+78632001234" className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/25 transition-colors">
                Позвонить
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "30%", label: "макс. скидка" },
              { num: "48ч", label: "изготовление" },
              { num: "5 лет", label: "гарантия" },
              { num: "40+", label: "дилеров в сети" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-lg p-5 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">{s.num}</div>
                <div className="text-blue-200 text-xs uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Для дилеров</p>
          <h2 className="text-3xl font-bold">Что вы получаете</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <div key={i} className="bg-white border border-border rounded-lg p-6 card-hover flex gap-4">
              <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={b.icon} size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIERS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Условия сотрудничества</p>
            <h2 className="text-3xl font-bold">Уровни партнёрства</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier, i) => (
              <div key={i} className={`rounded-xl border-2 p-8 relative ${tier.color} ${tier.highlight ? "shadow-2xl scale-[1.02]" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Популярный выбор
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-1 ${tier.highlight ? "text-white" : ""}`}>{tier.name}</h3>
                <p className={`text-sm mb-1 ${tier.highlight ? "text-blue-200" : "text-muted-foreground"}`}>Оборот в месяц</p>
                <p className={`text-2xl font-bold mb-1 ${tier.highlight ? "text-yellow-300" : "text-primary"}`}>{tier.volume}</p>
                <p className={`text-sm mb-7 ${tier.highlight ? "text-blue-100" : "text-muted-foreground"}`}>Скидка {tier.discount}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${tier.highlight ? "text-white/90" : ""}`}>
                      <Icon name="CheckCircle" size={16} className={tier.highlight ? "text-yellow-300" : "text-primary"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contacts" className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded transition-opacity hover:opacity-85 ${tier.btnClass}`}>
                  Выбрать план
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Как стать дилером</p>
          <h2 className="text-3xl font-bold">4 простых шага</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: "FileText", title: "Заявка", desc: "Заполните форму или позвоните нам" },
            { icon: "Phone", title: "Консультация", desc: "Обсудим условия и регион" },
            { icon: "FileCheck", title: "Договор", desc: "Подписываем дилерское соглашение" },
            { icon: "Rocket", title: "Старт", desc: "Начинаем работу и принимаем заказы" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 border border-border rounded-lg p-6 text-center">
              <div className="w-14 h-14 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={s.icon} size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{i + 1}</div>
              <h4 className="font-bold text-base mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Готовы обсудить условия?</h2>
            <p className="text-blue-200">Ответим на все вопросы в течение 2 часов</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacts" className="btn-orange">
              <Icon name="FileText" size={16} /> Оставить заявку
            </Link>
            <a href="tel:+78632001234" className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/25 transition-colors">
              +7 (863) 200-12-34
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
