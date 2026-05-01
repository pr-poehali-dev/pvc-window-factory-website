import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/4facc5eb-2237-47c1-aea4-23894ec5b12e.jpg";
const DETAIL_IMAGE = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/9ab74880-20c4-477b-ba63-159806410141.jpg";
const EXTERIOR_IMAGE = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/e3558a8d-8211-4ace-b129-7c987ef71528.jpg";

const navItems = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "products", label: "Продукция" },
  { id: "gallery", label: "Галерея" },
  { id: "services", label: "Услуги" },
  { id: "dealers", label: "Дилерам" },
  { id: "contacts", label: "Контакты" },
];

const products = [
  {
    id: 1,
    name: "Панорамное остекление",
    type: "panoramic",
    material: "aluminum",
    size: "large",
    desc: "Максимальный обзор, минимальная рама",
    price: "от 45 000 ₽",
    tag: "Популярное",
  },
  {
    id: 2,
    name: "Классическое ПВХ окно",
    type: "classic",
    material: "pvc",
    size: "medium",
    desc: "Надёжность и теплосбережение для жилых помещений",
    price: "от 12 000 ₽",
    tag: null,
  },
  {
    id: 3,
    name: "Французский балкон",
    type: "balcony",
    material: "aluminum",
    size: "large",
    desc: "Изящные линии, безопасное остекление",
    price: "от 38 000 ₽",
    tag: "Новинка",
  },
  {
    id: 4,
    name: "Мансардное окно",
    type: "roof",
    material: "wood",
    size: "small",
    desc: "Дополнительный свет через кровлю",
    price: "от 22 000 ₽",
    tag: null,
  },
  {
    id: 5,
    name: "Окно-портал",
    type: "panoramic",
    material: "aluminum",
    size: "large",
    desc: "Сквозное остекление от пола до потолка",
    price: "от 67 000 ₽",
    tag: "Премиум",
  },
  {
    id: 6,
    name: "Деревянное евроокно",
    type: "classic",
    material: "wood",
    size: "medium",
    desc: "Экологичность и эстетика натурального дерева",
    price: "от 28 000 ₽",
    tag: null,
  },
];

const services = [
  { icon: "Ruler", title: "Замер", desc: "Бесплатный выезд специалиста в удобное время" },
  { icon: "Settings", title: "Производство", desc: "Собственное производство с контролем качества" },
  { icon: "Truck", title: "Доставка", desc: "Доставка по городу и области" },
  { icon: "Hammer", title: "Монтаж", desc: "Профессиональная установка с гарантией 5 лет" },
  { icon: "Shield", title: "Гарантия", desc: "Гарантийное и постгарантийное обслуживание" },
  { icon: "PhoneCall", title: "Поддержка", desc: "Консультации по подбору и эксплуатации" },
];

const dealerBenefits = [
  { num: "30%", label: "Дилерская скидка" },
  { num: "48ч", label: "Срок изготовления" },
  { num: "5 лет", label: "Гарантия продукции" },
  { num: "∞", label: "Техподдержка" },
];

const galleryImages = [
  { src: HERO_IMAGE, caption: "Панорамное остекление жилого дома" },
  { src: DETAIL_IMAGE, caption: "Алюминиевый профиль премиум-класса" },
  { src: EXTERIOR_IMAGE, caption: "Фасадное остекление" },
  { src: HERO_IMAGE, caption: "Интерьерное решение" },
  { src: EXTERIOR_IMAGE, caption: "Остекление балконов" },
  { src: DETAIL_IMAGE, caption: "Детали профиля" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [filterType, setFilterType] = useState("all");
  const [filterMaterial, setFilterMaterial] = useState("all");
  const [filterSize, setFilterSize] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((n) => n.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filtered = products.filter((p) => {
    if (filterType !== "all" && p.type !== filterType) return false;
    if (filterMaterial !== "all" && p.material !== filterMaterial) return false;
    if (filterSize !== "all" && p.size !== filterSize) return false;
    return true;
  });

  return (
    <div className="bg-white font-body text-neutral-800 min-h-screen">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span
            className="font-display text-2xl font-light tracking-[0.2em] cursor-pointer select-none"
            style={{ color: "#1a1a1a" }}
            onClick={() => scrollTo("home")}
          >
            FENESTRA
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-neutral-900 border-b border-neutral-900 pb-0.5"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className="hidden md:flex items-center gap-2 bg-neutral-900 text-white text-xs tracking-widest px-5 py-2.5 uppercase hover:bg-neutral-700 transition-colors"
            onClick={() => scrollTo("contacts")}
          >
            Заказать замер
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 py-4 px-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm tracking-wider uppercase text-neutral-600 hover:text-neutral-900"
              >
                {item.label}
              </button>
            ))}
            <button
              className="mt-2 bg-neutral-900 text-white text-xs tracking-widest px-5 py-3 uppercase"
              onClick={() => scrollTo("contacts")}
            >
              Заказать замер
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Премиальные окна" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="animate-fade-in">
            <p className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4">Производитель окон с 2005 года</p>
            <h1 className="font-display text-white text-6xl md:text-8xl font-light leading-none mb-6">
              Свет.<br />Пространство.<br />
              <em className="italic">Качество.</em>
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light max-w-md mb-10">
              Мы создаём окна, которые становятся частью архитектуры — не просто заполнение проёма
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-neutral-900 text-xs tracking-widest px-8 py-4 uppercase hover:bg-neutral-100 transition-colors w-fit"
                onClick={() => scrollTo("products")}
              >
                Смотреть каталог
              </button>
              <button
                className="border border-white text-white text-xs tracking-widest px-8 py-4 uppercase hover:bg-white/10 transition-colors w-fit"
                onClick={() => scrollTo("contacts")}
              >
                Бесплатный замер
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/40 z-10">
          <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Прокрутите вниз</span>
          <div className="w-px h-12 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "19", unit: "лет", label: "на рынке" },
            { num: "12 000", unit: "+", label: "объектов сдано" },
            { num: "48", unit: "ч", label: "срок изготовления" },
            { num: "5", unit: "лет", label: "гарантия" },
          ].map((s, i) => (
            <AnimSection key={i} className="text-center">
              <div className="font-display text-5xl font-light">
                {s.num}<span className="text-2xl text-neutral-400">{s.unit}</span>
              </div>
              <div className="text-neutral-400 text-xs tracking-widest uppercase mt-2">{s.label}</div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimSection>
            <img src={DETAIL_IMAGE} alt="Качество производства" className="w-full aspect-square object-cover" />
          </AnimSection>
          <AnimSection>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">О компании</p>
            <h2 className="font-display text-5xl font-light leading-tight mb-8">
              Мы производим<br /><em className="italic">окна будущего</em><br />с 2005 года
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-6">
              FENESTRA — российский производитель оконных систем из ПВХ, алюминия и дерева. Собственное производство площадью 8 000 м², полный цикл от разработки до монтажа.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Мы работаем с застройщиками, архитекторами, дизайнерами и частными заказчиками по всей России. Каждое окно проходит 12-ступенчатый контроль качества.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Алюминиевые системы", val: "Schüco, ALUTECH" },
                { label: "ПВХ профили", val: "VEKA, KBE" },
                { label: "Стеклопакеты", val: "Собственное производство" },
                { label: "Сертификаты", val: "ГОСТ, ISO 9001" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm font-medium">{item.val}</div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">Каталог</p>
            <h2 className="font-display text-5xl font-light">Наша продукция</h2>
          </AnimSection>

          {/* FILTERS */}
          <AnimSection className="mb-12">
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Тип</p>
                <div className="flex gap-2 flex-wrap">
                  {[["all", "Все"], ["classic", "Классика"], ["panoramic", "Панорамные"], ["balcony", "Балкон"], ["roof", "Мансарда"]].map(([v, l]) => (
                    <button
                      key={v}
                      onClick={() => setFilterType(v)}
                      className={`text-xs px-4 py-2 border transition-all ${filterType === v ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-500 hover:border-neutral-400"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Материал</p>
                <div className="flex gap-2 flex-wrap">
                  {[["all", "Все"], ["pvc", "ПВХ"], ["aluminum", "Алюминий"], ["wood", "Дерево"]].map(([v, l]) => (
                    <button
                      key={v}
                      onClick={() => setFilterMaterial(v)}
                      className={`text-xs px-4 py-2 border transition-all ${filterMaterial === v ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-500 hover:border-neutral-400"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Размер</p>
                <div className="flex gap-2 flex-wrap">
                  {[["all", "Все"], ["small", "Малый"], ["medium", "Средний"], ["large", "Большой"]].map(([v, l]) => (
                    <button
                      key={v}
                      onClick={() => setFilterSize(v)}
                      className={`text-xs px-4 py-2 border transition-all ${filterSize === v ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-500 hover:border-neutral-400"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimSection>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-400">
              <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-sm tracking-wider">Нет подходящих позиций</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
              {filtered.map((p) => (
                <div key={p.id} className="bg-white p-8 group hover:bg-neutral-50 transition-colors cursor-pointer relative">
                  {p.tag && (
                    <span className="absolute top-6 right-6 text-xs tracking-widest uppercase bg-neutral-900 text-white px-3 py-1">
                      {p.tag}
                    </span>
                  )}
                  <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors">
                    <Icon name="Square" size={20} className="text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-light mb-3">{p.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{p.price}</span>
                    <button className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 flex items-center gap-2 transition-colors">
                      Подробнее <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 max-w-7xl mx-auto px-6">
        <AnimSection className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">Галерея</p>
          <h2 className="font-display text-5xl font-light">Реализованные проекты</h2>
        </AnimSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <AnimSection key={i} className={`group cursor-pointer overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-white text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.caption}
                  </p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">Услуги</p>
            <h2 className="font-display text-5xl font-light">Полный цикл</h2>
          </AnimSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {services.map((s, i) => (
              <AnimSection key={i} className="bg-neutral-900 p-10 hover:bg-neutral-800 transition-colors">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={18} className="text-white/60" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* DEALERS */}
      <section id="dealers" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimSection>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">Дилерам</p>
            <h2 className="font-display text-5xl font-light leading-tight mb-8">
              Станьте<br /><em className="italic">официальным</em><br />дилером
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Развивайте бизнес вместе с FENESTRA. Мы предлагаем выгодные условия сотрудничества, обучение и полную поддержку на всех этапах работы.
            </p>
            <button
              className="bg-neutral-900 text-white text-xs tracking-widest px-8 py-4 uppercase hover:bg-neutral-700 transition-colors"
              onClick={() => scrollTo("contacts")}
            >
              Оставить заявку
            </button>
          </AnimSection>
          <div className="grid grid-cols-2 gap-px bg-neutral-200">
            {dealerBenefits.map((b, i) => (
              <AnimSection key={i} className="bg-white p-10 text-center">
                <div className="font-display text-5xl font-light mb-3">{b.num}</div>
                <div className="text-xs tracking-widest uppercase text-neutral-400">{b.label}</div>
              </AnimSection>
            ))}
          </div>
        </div>
        <AnimSection className="mt-16 bg-neutral-50 p-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Маркетинговая поддержка", desc: "Готовые материалы, брендинг, рекламные кампании" },
              { title: "Обучение персонала", desc: "Программы для менеджеров и монтажных бригад" },
              { title: "Техническая поддержка", desc: "Горячая линия и выезд специалиста по запросу" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 border border-neutral-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={12} />
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden">
        <img src={EXTERIOR_IMAGE} alt="Остекление" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <AnimSection>
            <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-6">Бесплатно</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              Закажите замер сегодня
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto">
              Наш специалист приедет в удобное время, сделает точные замеры и рассчитает стоимость
            </p>
            <button
              className="bg-white text-neutral-900 text-xs tracking-widest px-10 py-4 uppercase hover:bg-neutral-100 transition-colors"
              onClick={() => scrollTo("contacts")}
            >
              Записаться на замер
            </button>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimSection>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">Контакты</p>
            <h2 className="font-display text-5xl font-light mb-10">Свяжитесь с нами</h2>
            <div className="space-y-8">
              {[
                { icon: "MapPin", label: "Адрес", val: "г. Москва, ул. Производственная, 12" },
                { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67" },
                { icon: "Mail", label: "Email", val: "info@fenestra.ru" },
                { icon: "Clock", label: "Режим работы", val: "Пн–Пт 9:00 – 18:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={16} className="text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{c.label}</p>
                    <p className="text-sm font-medium">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
          <AnimSection>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-display text-2xl font-light mb-6">Оставьте заявку</h3>
              <div>
                <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">Имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">Тема</label>
                <select className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-transparent text-neutral-700">
                  <option>Заказать замер</option>
                  <option>Расчёт стоимости</option>
                  <option>Дилерство</option>
                  <option>Другой вопрос</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-neutral-400 block mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Опишите ваш запрос..."
                  className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white text-xs tracking-widest uppercase py-4 hover:bg-neutral-700 transition-colors"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-neutral-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl font-light tracking-[0.2em]">FENESTRA</span>
          <div className="flex flex-wrap justify-center gap-8">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-neutral-400">© 2024 FENESTRA. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}