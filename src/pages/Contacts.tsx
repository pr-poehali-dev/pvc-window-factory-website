import { useState } from "react";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "MapPin", label: "Адрес офиса", value: "г. Москва, ул. Производственная, д. 12", sub: "Ближайшее метро: Шоссе Энтузиастов" },
  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", sub: "Пн–Пт 9:00–18:00" },
  { icon: "Mail", label: "Электронная почта", value: "info@fenestra.ru", sub: "Ответим в течение часа" },
  { icon: "Factory", label: "Производство", value: "Московская обл., г. Химки, пр-т Мельникова, 8", sub: "Экскурсии по записи" },
];

const TOPICS = ["Заказать замер", "Расчёт стоимости", "Дилерство", "Индивидуальный заказ", "Другое"];

export default function Contacts() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* HEADER */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Связь</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold uppercase">Контакты</h1>
        </div>
      </section>

      <section className="py-20 max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACTS INFO */}
          <div>
            <div className="space-y-6 mb-12">
              {contacts.map((c, i) => (
                <div key={i} className="flex gap-5 p-6 border border-border hover:border-accent transition-colors group">
                  <div className="w-12 h-12 border-2 border-border group-hover:border-accent flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon name={c.icon} size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                    <p className="font-medium text-sm">{c.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WORKING HOURS */}
            <div className="bg-secondary p-8">
              <h3 className="font-display text-xl font-bold uppercase mb-6">Режим работы</h3>
              <div className="space-y-3">
                {[
                  { day: "Пн–Пт", time: "09:00 – 18:00" },
                  { day: "Суббота", time: "10:00 – 15:00" },
                  { day: "Воскресенье", time: "Выходной" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="font-medium">{row.day}</span>
                    <span className={row.time === "Выходной" ? "text-muted-foreground" : "text-accent font-medium"}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border-2 border-accent">
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="CheckCircle" size={32} className="text-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase mb-3">Заявка отправлена</h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-8">
                  Мы получили вашу заявку и перезвоним в течение 30 минут в рабочее время
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-medium tracking-widest uppercase text-accent border border-accent px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-border pb-6 mb-2">
                  <h2 className="font-display text-3xl font-bold uppercase mb-2">Оставьте заявку</h2>
                  <p className="text-muted-foreground text-sm">Ответим в течение 30 минут в рабочее время</p>
                </div>

                {/* TOPIC SELECT */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Тема обращения</p>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTopic(t)}
                        className={`text-xs px-4 py-2 border font-medium transition-all ${
                          topic === t
                            ? "bg-foreground text-background border-foreground"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Имя *</label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full border border-border focus:border-foreground bg-transparent px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Телефон *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border focus:border-foreground bg-transparent px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@company.ru"
                    className="w-full border border-border focus:border-foreground bg-transparent px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш запрос подробнее..."
                    className="w-full border border-border focus:border-foreground bg-transparent px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase py-5 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Отправить заявку <Icon name="ArrowRight" size={14} />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <span className="underline cursor-pointer hover:text-foreground">политикой конфиденциальности</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-72 bg-secondary flex items-center justify-center border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative z-10 text-center">
          <Icon name="MapPin" size={32} className="text-accent mx-auto mb-3" />
          <p className="font-display text-xl font-bold uppercase">Москва, ул. Производственная, 12</p>
          <p className="text-muted-foreground text-sm mt-2">Карта загрузится после интеграции</p>
        </div>
      </section>
    </div>
  );
}
