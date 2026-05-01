import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const SERVICES = [
  {
    num: "01",
    icon: "Ruler",
    title: "Замер",
    desc: "Выезжаем в удобное время. Специалист проведёт точные замеры, оценит состояние проёмов и порекомендует оптимальное решение.",
    details: ["Бесплатно для Москвы и области", "Выезд в течение 24 часов", "Замер любой сложности"],
  },
  {
    num: "02",
    icon: "Settings2",
    title: "Проектирование",
    desc: "Разрабатываем техническое задание с учётом архитектурных особенностей объекта. Согласовываем с застройщиком и заказчиком.",
    details: ["3D-визуализация", "Инженерные расчёты", "Согласование документации"],
  },
  {
    num: "03",
    icon: "Factory",
    title: "Производство",
    desc: "Изготавливаем на собственном заводе. Стандартный срок — 48 часов, для крупных объектов — по согласованию.",
    details: ["Срок от 48 часов", "12-ступенчатый контроль", "Индивидуальные размеры"],
  },
  {
    num: "04",
    icon: "Truck",
    title: "Доставка",
    desc: "Собственный автопарк для доставки по Москве, области и регионам. Специализированный крепёж для сохранности изделий.",
    details: ["Доставка по всей России", "Страхование груза", "Точно в срок"],
  },
  {
    num: "05",
    icon: "Hammer",
    title: "Монтаж",
    desc: "Профессиональная установка по ГОСТ. Монтажные бригады прошли сертификацию производителей профильных систем.",
    details: ["Гарантия на монтаж 5 лет", "Сертифицированные бригады", "Уборка после работ"],
  },
  {
    num: "06",
    icon: "Shield",
    title: "Обслуживание",
    desc: "Гарантийный и постгарантийный сервис. Регулировка, замена уплотнений, покраска — всё в рамках одного обращения.",
    details: ["Гарантия на изделие 5 лет", "Сервис по договору", "Выезд в течение 3 дней"],
  },
];

const PRICES = [
  { service: "Замер", price: "Бесплатно", note: "Москва и МО" },
  { service: "Монтаж оконного блока", price: "от 3 500 ₽", note: "За блок" },
  { service: "Демонтаж старого окна", price: "от 1 500 ₽", note: "За блок" },
  { service: "Откосы (ПВХ)", price: "от 2 200 ₽", note: "Комплект" },
  { service: "Подоконник", price: "от 1 800 ₽", note: "Пог. метр" },
  { service: "Доставка по Москве", price: "от 2 000 ₽", note: "В зависимости от объёма" },
];

export default function Services() {
  return (
    <div>
      {/* HEADER */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Услуги</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold uppercase leading-none">
            Полный цикл<br /><span className="text-background/30">под ключ</span>
          </h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="bg-background p-10 group hover:bg-secondary transition-colors">
              <div className="flex items-start gap-6">
                <div>
                  <div className="font-display text-4xl font-bold text-border group-hover:text-accent transition-colors">{s.num}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 border-2 border-border group-hover:border-accent flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon name={s.icon} size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold uppercase">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Как работаем</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase">Процесс работы</h2>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-0">
            {["Заявка", "Замер", "Расчёт", "Производство", "Монтаж"].map((step, i) => (
              <Reveal key={i} delay={i * 100} className="relative flex flex-col items-center text-center p-6 group">
                <div className="w-14 h-14 bg-background border-2 border-border group-hover:border-accent flex items-center justify-center mb-4 transition-colors z-10">
                  <span className="font-display text-xl font-bold group-hover:text-accent transition-colors">{i + 1}</span>
                </div>
                {i < 4 && <div className="absolute top-[46px] left-[calc(50%+28px)] right-0 h-0.5 bg-border hidden md:block" />}
                <p className="font-medium text-sm uppercase tracking-wider">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Прайс-лист</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase mb-10">Стоимость услуг</h2>

            <div className="border border-border overflow-hidden">
              {PRICES.map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_auto] gap-4 px-6 py-4 ${i < PRICES.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "" : "bg-secondary"}`}>
                  <div>
                    <p className="text-sm font-medium">{row.service}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{row.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-bold text-accent">{row.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">* Окончательная стоимость определяется после замера</p>
          </Reveal>

          <Reveal delay={150}>
            <img src={IMG_FACTORY} alt="Производство" className="w-full aspect-[4/3] object-cover mb-8" />
            <div className="bg-foreground text-background p-8">
              <h3 className="font-display text-2xl font-bold uppercase mb-4">Заказать расчёт</h3>
              <p className="text-background/60 text-sm mb-6">Оставьте заявку — мы перезвоним в течение 30 минут и рассчитаем точную стоимость</p>
              <Link
                to="/contacts"
                className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase py-4 hover:opacity-90 transition-opacity"
              >
                Получить расчёт <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
