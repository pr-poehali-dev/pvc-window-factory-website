import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const IMG_HERO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/526f4b56-663d-4060-8240-91fca14bf4ab.jpg";
const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";
const IMG_WOOD = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/2a83f7a7-3928-4c7f-8db5-60a3a4afadba.jpg";

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
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const stats = [
  { value: "19", label: "лет на рынке" },
  { value: "12K+", label: "объектов" },
  { value: "48ч", label: "изготовление" },
  { value: "5 лет", label: "гарантия" },
];

const highlights = [
  { icon: "Layers", title: "ПВХ системы", desc: "Профили VEKA и KBE — тепло, тишина, долговечность" },
  { icon: "Box", title: "Алюминий", desc: "Системы Schüco и ALUTECH для больших проёмов" },
  { icon: "TreePine", title: "Дерево", desc: "Евроокна из массива дуба, сосны, лиственницы" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-70px)] flex items-end overflow-hidden grid-lines">
        <div className="absolute inset-0 z-0">
          <img src={IMG_HERO} alt="Fenestra" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-1/3 w-px h-full bg-border/60 z-0" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 pt-20 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">Производитель с 2005 года</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none mb-6 text-foreground">
              Окна,<br />
              <span className="text-stroke" style={{ WebkitTextStroke: "2px hsl(var(--foreground))" }}>которые</span><br />
              <span className="text-accent">живут</span><br />
              в деталях
            </h1>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed mb-10">
              Производим оконные системы, которые сочетают инженерную точность с эстетикой
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="flex items-center gap-2 bg-foreground text-background text-xs font-medium tracking-widest uppercase px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Каталог продукции
                <Icon name="ArrowRight" size={14} />
              </Link>
              <Link
                to="/contacts"
                className="flex items-center gap-2 border border-foreground/30 text-foreground text-xs font-medium tracking-widest uppercase px-8 py-4 hover:border-foreground transition-colors"
              >
                Бесплатный замер
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-foreground/95 backdrop-blur-sm">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-background/10">
            {stats.map((s) => (
              <div key={s.value} className="py-5 px-6 text-background">
                <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-background/50 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Материалы</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-16">
            Три линейки <br />продукции
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={i * 100} className="bg-background p-10 group hover:bg-secondary transition-colors">
              <div className="w-12 h-12 border-2 border-border group-hover:border-accent flex items-center justify-center mb-8 transition-colors">
                <Icon name={h.icon} size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-semibold uppercase mb-3">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{h.desc}</p>
              <Link to="/products" className="text-xs font-medium tracking-widest uppercase text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                Смотреть <Icon name="ArrowRight" size={13} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FACTORY SECTION */}
      <section className="bg-foreground text-background overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-0">
          <Reveal className="py-20 flex flex-col justify-center pr-0 md:pr-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Производство</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
              8 000 м²<br />
              <span className="text-background/40">собственного</span><br />
              завода
            </h2>
            <p className="text-background/60 text-sm leading-relaxed mb-8 max-w-sm">
              Полный производственный цикл — от нарезки профиля до финального контроля качества. 12 ступеней проверки каждого изделия.
            </p>
            <Link
              to="/about"
              className="flex items-center gap-2 text-accent text-xs font-medium tracking-widest uppercase hover:gap-4 transition-all w-fit"
            >
              О компании <Icon name="ArrowRight" size={14} />
            </Link>
          </Reveal>
          <div className="relative min-h-[400px] overflow-hidden">
            <img src={IMG_FACTORY} alt="Производство" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/20" />
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={IMG_WOOD} alt="Качество профиля" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Качество</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight mb-6">
              Каждый профиль —<br />инженерное решение
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Используем только сертифицированные профильные системы ведущих европейских производителей. Собственное производство стеклопакетов позволяет контролировать качество на каждом этапе.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {["ГОСТ Р 23166", "ISO 9001:2015", "VEKA Партнёр", "Schüco Dealer"].map((cert) => (
                <div key={cert} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={11} className="text-accent" />
                  </div>
                  {cert}
                </div>
              ))}
            </div>
            <Link
              to="/products"
              className="bg-accent text-accent-foreground text-xs font-medium tracking-widest uppercase px-8 py-4 inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Весь каталог <Icon name="ArrowRight" size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Бесплатный замер<br />в течение 24 часов
            </h2>
            <p className="text-accent-foreground/70 mt-3 text-sm">Выезд специалиста, расчёт стоимости, консультация</p>
          </div>
          <Link
            to="/contacts"
            className="flex-shrink-0 bg-accent-foreground text-accent text-sm font-semibold tracking-widest uppercase px-10 py-5 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Записаться
          </Link>
        </div>
      </section>
    </div>
  );
}
