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

const BENEFITS = [
  { num: "30%", label: "Дилерская скидка от розничной цены", icon: "TrendingUp" },
  { num: "48ч", label: "Стандартный срок изготовления", icon: "Clock" },
  { num: "5 лет", label: "Гарантия на всю продукцию", icon: "Shield" },
  { num: "40+", label: "Городов в дилерской сети", icon: "MapPin" },
];

const CONDITIONS = [
  {
    title: "Стандарт",
    min: "от 500 000 ₽",
    discount: "15–20%",
    features: ["Дилерские цены", "Менеджер поддержки", "Маркетинговые материалы", "Обучение команды"],
  },
  {
    title: "Бизнес",
    min: "от 1 500 000 ₽",
    discount: "20–27%",
    features: ["Расширенная скидка", "Приоритетное производство", "Со-финансирование рекламы", "Оборудование шоурума"],
    highlight: true,
  },
  {
    title: "Премиум",
    min: "от 3 000 000 ₽",
    discount: "до 30%",
    features: ["Максимальная скидка", "Эксклюзив на регион", "Персональный менеджер 24/7", "Полная маркетинговая поддержка"],
  },
];

const STEPS = [
  { icon: "FileText", title: "Оставьте заявку", desc: "Заполните форму или позвоните нам" },
  { icon: "PhoneCall", title: "Консультация", desc: "Обсудим условия и ваш регион" },
  { icon: "FileCheck", title: "Договор", desc: "Подписываем дилерское соглашение" },
  { icon: "Rocket", title: "Старт работы", desc: "Начинаем сотрудничество" },
];

export default function Dealers() {
  return (
    <div>
      {/* HEADER */}
      <section className="relative py-28 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <img src={IMG_FACTORY} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/50" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Партнёрская программа</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-6">
            Станьте<br />дилером<br /><span className="text-accent">Fenestra</span>
          </h1>
          <p className="text-background/60 max-w-md text-base leading-relaxed mb-8">
            Выгодные условия, поддержка на каждом этапе и продукт, который продаёт себя сам
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Стать дилером <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {BENEFITS.map((b, i) => (
            <Reveal key={i} delay={i * 80} className="bg-background p-10 group hover:bg-secondary transition-colors text-center">
              <Icon name={b.icon} size={24} className="text-accent mx-auto mb-4" />
              <div className="font-display text-4xl font-bold mb-2">{b.num}</div>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIERS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Условия</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase">Уровни сотрудничества</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {CONDITIONS.map((tier, i) => (
              <Reveal key={i} delay={i * 100} className={`relative border-2 ${tier.highlight ? "border-accent bg-foreground text-background" : "border-border bg-background"} p-8`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-8 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5">
                    Популярный
                  </div>
                )}
                <h3 className={`font-display text-3xl font-bold uppercase mb-2 ${tier.highlight ? "text-background" : ""}`}>{tier.title}</h3>
                <p className={`text-xs uppercase tracking-widest mb-1 ${tier.highlight ? "text-background/50" : "text-muted-foreground"}`}>Оборот в месяц</p>
                <p className={`font-display text-2xl font-bold mb-1 ${tier.highlight ? "text-accent" : "text-accent"}`}>{tier.min}</p>
                <p className={`text-sm mb-8 ${tier.highlight ? "text-background/60" : "text-muted-foreground"}`}>Скидка {tier.discount}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${tier.highlight ? "text-background/80" : ""}`}>
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${tier.highlight ? "bg-accent/20" : "bg-accent/10"}`}>
                        <Icon name="Check" size={11} className="text-accent" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className={`w-full flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase py-4 transition-opacity hover:opacity-80 ${
                    tier.highlight ? "bg-accent text-accent-foreground" : "bg-foreground text-background"
                  }`}
                >
                  Выбрать план
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Как стать дилером</span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase">4 простых шага</h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-px bg-border">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 100} className="bg-background p-8 group hover:bg-secondary transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-4xl font-bold text-border group-hover:text-accent transition-colors">{String(i + 1).padStart(2, "0")}</span>
                <div className="w-10 h-10 border-2 border-border group-hover:border-accent flex items-center justify-center transition-colors">
                  <Icon name={s.icon} size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold uppercase mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
            Готовы начать?
          </h2>
          <p className="text-accent-foreground/70 text-sm mb-10 max-w-md mx-auto">
            Оставьте заявку — наш менеджер свяжется в течение 2 часов и ответит на все вопросы
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 bg-accent-foreground text-accent text-sm font-bold tracking-widest uppercase px-10 py-5 hover:opacity-90 transition-opacity"
          >
            Оставить заявку <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
