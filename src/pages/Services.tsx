import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_INSTALL = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/12317182-b294-45e9-9c32-11fd45ece646.jpg";

const SERVICES = [
  { icon: "Ruler", title: "Бесплатный замер", price: "Бесплатно", desc: "Выезд в день обращения. Специалист проведёт точные замеры, оценит проёмы и подберёт оптимальное решение.", list: ["Москва и область — бесплатно", "Замер в день обращения", "Точность до 1 мм"] },
  { icon: "Settings2", title: "Проектирование", price: "Бесплатно", desc: "Разрабатываем конструктивное решение с учётом особенностей здания. Для сложных проектов — 3D-визуализация.", list: ["Индивидуальные решения", "3D-визуализация", "Технический расчёт"] },
  { icon: "Package", title: "Производство", price: "от 3 дней", desc: "Полный цикл на собственном заводе. Стандартные размеры — от 3 рабочих дней. Нестандарт — по согласованию.", list: ["Завод площадью 5 000 м²", "Немецкое оборудование", "12-ступенчатый контроль"] },
  { icon: "Truck", title: "Доставка", price: "Бесплатно*", desc: "Собственный автопарк. Доставка по Ростову-на-Дону и области. *При заказе от 3 блоков.", list: ["Собственный автопарк", "По городу бесплатно*", "Страхование груза"] },
  { icon: "Hammer", title: "Монтаж", price: "от 2 500 ₽", desc: "Сертифицированные бригады. Монтаж по ГОСТ. Уборка после работ. Гарантия на монтаж 5 лет.", list: ["Сертифицированные монтажники", "По ГОСТ 30971-2012", "Гарантия 5 лет"] },
  { icon: "Layers", title: "Откосы и подоконники", price: "от 800 ₽", desc: "Отделка откосов пластиком или штукатуркой, установка подоконников из ПВХ или камня.", list: ["ПВХ и штукатурные откосы", "Подоконники любых размеров", "Под ключ"] },
  { icon: "Wind", title: "Москитные сетки", price: "от 650 ₽", desc: "Стандартные, плиссе, антикошка, рулонные. Изготовление на заказ в день обращения.", list: ["Любые размеры", "Антикошка", "Рулонные сетки"] },
  { icon: "RefreshCw", title: "Регулировка и сервис", price: "от 300 ₽", desc: "Регулировка фурнитуры, замена уплотнителей, замена стеклопакетов, ремонт рам.", list: ["Гарантийный сервис", "Замена уплотнителей", "Ремонт любой сложности"] },
];

const PRICES = [
  { item: "Замер и расчёт", price: "Бесплатно" },
  { item: "Монтаж стандартного окна", price: "от 2 500 ₽" },
  { item: "Демонтаж старого окна", price: "от 800 ₽" },
  { item: "Откосы ПВХ (комплект)", price: "от 2 200 ₽" },
  { item: "Подоконник (пог. м)", price: "от 1 200 ₽" },
  { item: "Москитная сетка", price: "от 650 ₽" },
  { item: "Регулировка фурнитуры", price: "от 300 ₽" },
  { item: "Доставка по Ростову", price: "Бесплатно*" },
];

export default function Services() {
  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Услуги</span>
        </div>
      </div>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Наши услуги</h1>
          <p className="text-blue-200 text-lg">Полный цикл — от замера до сдачи объекта под ключ</p>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-white border border-border rounded-lg p-6 card-hover group">
              <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={s.icon} size={22} className="text-white" />
              </div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-base">{s.title}</h3>
                <span className="text-primary font-semibold text-sm whitespace-nowrap">{s.price}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.list.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Check" size={11} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Как работаем</p>
            <h2 className="text-3xl font-bold">Порядок работы</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary/20" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {[
                { icon: "Phone", label: "Звонок или заявка" },
                { icon: "Ruler", label: "Бесплатный замер" },
                { icon: "FileText", label: "Расчёт стоимости" },
                { icon: "Factory", label: "Производство" },
                { icon: "CheckCircle", label: "Монтаж и сдача" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Icon name={step.icon} size={24} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold text-primary mb-1">{i + 1}</span>
                  <p className="text-sm font-semibold">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Стоимость</p>
            <h2 className="text-3xl font-bold mb-8">Прайс-лист на услуги</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              {PRICES.map((row, i) => (
                <div key={i} className={`flex items-center justify-between px-5 py-4 ${i < PRICES.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <span className="text-sm">{row.item}</span>
                  <span className="text-primary font-bold text-sm">{row.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">* При заказе от 3 оконных блоков. Окончательная стоимость после замера.</p>
          </div>
          <div>
            <img src={IMG_INSTALL} alt="Монтаж" className="rounded-lg shadow-lg w-full mb-6" />
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Рассчитать стоимость</h3>
              <p className="text-blue-200 text-sm mb-5">Звоните или оставьте заявку — рассчитаем бесплатно</p>
              <Link to="/contacts" className="btn-orange w-full justify-center">
                <Icon name="Phone" size={16} /> Заказать замер
              </Link>
              <a href="tel:+78632001234" className="flex items-center justify-center gap-2 mt-3 text-white/80 text-sm hover:text-white transition-colors">
                +7 (863) 200-12-34
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
