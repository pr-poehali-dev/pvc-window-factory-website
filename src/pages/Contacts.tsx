import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const TOPICS = ["Заказать замер", "Расчёт стоимости", "Дилерство", "Жалоба/Претензия", "Другое"];

export default function Contacts() {
  const [topic, setTopic] = useState("Заказать замер");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Контакты</span>
        </div>
      </div>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Контакты</h1>
          <p className="text-blue-200 text-lg">Свяжитесь с нами удобным способом</p>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* INFO */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <h2 className="text-2xl font-bold mb-5">Наши контакты</h2>
            </div>

            {[
              { icon: "Phone", label: "Телефон", value: "+7 (863) 200-12-34", sub: "Бесплатный звонок", href: "tel:+78632001234" },
              { icon: "Phone", label: "Дополнительный", value: "+7 (863) 200-12-35", sub: "", href: "tel:+78632001235" },
              { icon: "Mail", label: "Email", value: "info@don-okna.ru", sub: "Ответим за 1 час", href: "mailto:info@don-okna.ru" },
              { icon: "MapPin", label: "Офис и шоурум", value: "Ростов-на-Дону, ул. Станиславского, 8", sub: "Показываем образцы", href: undefined },
              { icon: "Factory", label: "Производство", value: "г. Ростов-на-Дону, ул. Нансена, 40/34", sub: "Экскурсии по записи", href: undefined },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 p-4 bg-gray-50 border border-border rounded-lg">
                <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-sm hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-semibold text-sm">{c.value}</p>
                  )}
                  {c.sub && <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>}
                </div>
              </div>
            ))}

            <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                Режим работы
              </h4>
              {[
                { day: "Понедельник–Пятница", time: "8:00–19:00" },
                { day: "Суббота", time: "9:00–17:00" },
                { day: "Воскресенье", time: "Выходной" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-border/60 last:border-0 last:pb-0">
                  <span>{row.day}</span>
                  <span className={row.time === "Выходной" ? "text-muted-foreground" : "text-primary font-semibold"}>{row.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 bg-white border border-border rounded-xl p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCircle" size={36} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Заявка принята!</h3>
                <p className="text-muted-foreground mb-2">Мы получили вашу заявку и свяжемся</p>
                <p className="text-muted-foreground font-semibold">в течение 30 минут в рабочее время</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-primary text-sm font-medium underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">Оставьте заявку</h2>
                <p className="text-muted-foreground text-sm mb-7">Перезвоним в течение 30 минут</p>

                <div className="mb-6">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-3">Тема обращения</label>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`text-sm px-4 py-2 rounded-full border font-medium transition-all ${
                          topic === t ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Имя *</label>
                      <input required type="text" placeholder="Иван Иванов" className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Телефон *</label>
                      <input required type="tel" placeholder="+7 (863) ___-__-__" className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Email</label>
                    <input type="email" placeholder="ivan@example.ru" className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Адрес объекта</label>
                    <input type="text" placeholder="г. Ростов-на-Дону, ул. ..." className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-2">Сообщение</label>
                    <textarea rows={4} placeholder="Опишите ваш запрос..." className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-orange w-full justify-center text-base py-4">
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с <span className="underline cursor-pointer">политикой конфиденциальности</span>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-64 bg-gray-100 border-t border-border flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,#bcd 0,#bcd 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#bcd 0,#bcd 1px,transparent 1px,transparent 60px)" }} />
        <div className="relative text-center z-10">
          <Icon name="MapPin" size={40} className="text-primary mx-auto mb-3" />
          <p className="font-bold text-xl">г. Ростов-на-Дону, ул. Станиславского, 8</p>
          <p className="text-muted-foreground text-sm mt-1">Шоурум и офис компании • рядом с центром города</p>
          <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 btn-orange text-sm">
            <Icon name="Navigation" size={14} />
            Открыть на карте
          </a>
        </div>
      </section>
    </div>
  );
}
