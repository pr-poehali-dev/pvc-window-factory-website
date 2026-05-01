import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const timeline = [
  { year: "2005", event: "Основание компании, первый цех 500 м²" },
  { year: "2008", event: "Запуск линии алюминиевых систем" },
  { year: "2012", event: "Расширение производства до 4 000 м²" },
  { year: "2016", event: "Партнёрство со Schüco и VEKA" },
  { year: "2020", event: "Запуск собственного производства стеклопакетов" },
  { year: "2024", event: "Площадь завода 8 000 м², дилерская сеть 40+ городов" },
];

const team = [
  { name: "Алексей Волков", role: "Генеральный директор", exp: "20 лет в отрасли" },
  { name: "Марина Степанова", role: "Технический директор", exp: "Инженер-конструктор" },
  { name: "Дмитрий Орлов", role: "Директор производства", exp: "15 лет опыта" },
  { name: "Екатерина Нова", role: "Коммерческий директор", exp: "Развитие дилерской сети" },
];

export default function About() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative py-28 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img src={IMG_FACTORY} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/40" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">О компании</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase leading-none text-background">
            Fenestra<br /><span className="text-background/30">с 2005</span>
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <img src={IMG_FACTORY} alt="Производство" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Наша миссия</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight mb-6">
              Делаем окна,<br />которые служат<br />десятилетиями
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Fenestra — российский производитель полного цикла. Мы не посредники: каждое окно создаётся на нашем заводе площадью 8 000 м² в Московской области.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Работаем с застройщиками, архитекторами, дизайнерами и частными клиентами по всей России. Дилерская сеть охватывает 40+ городов.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "Factory", label: "Собственный завод", val: "8 000 м²" },
                { icon: "Users", label: "Сотрудников", val: "250+" },
                { icon: "MapPin", label: "Городов", val: "40+" },
                { icon: "Award", label: "Сертификатов", val: "12" },
              ].map((item) => (
                <div key={item.label} className="bg-secondary p-5">
                  <Icon name={item.icon} size={18} className="text-accent mb-3" />
                  <div className="font-display text-2xl font-bold">{item.val}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">История</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase">Путь компании</h2>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 80} className="flex gap-8 items-start group">
                  <div className="font-display text-2xl font-bold text-accent w-20 flex-shrink-0 text-right">{item.year}</div>
                  <div className="hidden md:flex w-px flex-col items-center pt-2">
                    <div className="w-3 h-3 rounded-full bg-border group-hover:bg-accent transition-colors border-2 border-background" />
                  </div>
                  <div className="flex-1 bg-background p-5 border border-border group-hover:border-accent transition-colors">
                    <p className="text-sm font-medium">{item.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 max-w-screen-xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Команда</span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase">Руководство</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 80} className="bg-background p-8 group hover:bg-secondary transition-colors">
              <div className="w-16 h-16 bg-secondary group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors">
                <Icon name="User" size={28} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-medium tracking-wider mb-3">{member.role}</p>
              <p className="text-muted-foreground text-xs">{member.exp}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUALITY */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Качество</span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight mb-6">
              12 ступеней<br />контроля
            </h2>
            <p className="text-background/60 text-sm leading-relaxed mb-8">
              Каждое изделие проходит многоступенчатую проверку: от входного контроля материалов до финального тестирования готового окна в сборе.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Входной контроль профиля", "Проверка геометрии", "Качество уплотнений", "Тест на герметичность", "Термоцикл испытание", "Итоговая приёмка"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-background/70">
                  <span className="font-display text-accent font-bold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <img src={IMG_WOOD} alt="Качество" className="w-full aspect-square object-cover" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-3xl font-bold uppercase">Хотите стать частью команды?</h2>
          <Link to="/contacts" className="flex-shrink-0 bg-accent-foreground text-accent text-xs font-bold tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity">
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
