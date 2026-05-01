import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";
const IMG_INSTALL = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/12317182-b294-45e9-9c32-11fd45ece646.jpg";
const LOGO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/bucket/5cdd2881-2cf5-46fc-b4b4-a58a0d868c05.jpg";

const CERTS = ["ГОСТ Р 23166-99", "ISO 9001:2015", "VEKA Сертифицированный партнёр", "Rehau Authorized Dealer", "Сертификат ВНИИС", "Свидетельство СРО"];

const NUMBERS = [
  { icon: "Calendar", num: "2005", label: "год основания" },
  { icon: "Users", num: "250+", label: "сотрудников" },
  { icon: "Home", num: "12 000+", label: "объектов сдано" },
  { icon: "Factory", num: "5 000 м²", label: "завод" },
  { icon: "MapPin", num: "25+", label: "городов" },
  { icon: "Shield", num: "5 лет", label: "гарантия" },
];

const TEAM = [
  { name: "Владимир Петров", role: "Генеральный директор", years: "В отрасли 22 года" },
  { name: "Татьяна Орлова", role: "Технический директор", years: "Инженер-конструктор" },
  { name: "Алексей Донской", role: "Директор производства", years: "В компании с 2006 г." },
  { name: "Наталья Иванова", role: "Коммерческий директор", years: "Развитие продаж" },
];

export default function About() {
  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">О компании</span>
        </div>
      </div>

      <section className="relative brand-gradient text-white py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMG_FACTORY} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">О компании</h1>
          <p className="text-blue-200 text-lg max-w-2xl">Донская оконная компания — производитель пластиковых окон в Ростове-на-Дону с 2005 года</p>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Наша история</p>
            <h2 className="text-3xl font-bold mb-5">Производим окна для Юга России</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Донская оконная компания была основана в 2005 году группой инженеров-строителей. За 19 лет мы стали одним из ведущих производителей оконных конструкций в ЮФО.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Сегодня наш завод площадью 5 000 м² оснащён современным немецким оборудованием. Полный производственный цикл: от нарезки профиля до установки с отделкой откосов.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы выполнили более 12 000 заказов — от замены единственного окна в квартире до остекления многоэтажных жилых комплексов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="btn-orange">
                <Icon name="Phone" size={16} /> Связаться с нами
              </Link>
              <Link to="/products" className="flex items-center gap-2 border-2 border-primary text-primary font-semibold px-6 py-3 rounded hover:bg-primary hover:text-white transition-all">
                Каталог продукции
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={IMG_FACTORY} alt="Завод" className="rounded-lg w-full shadow-lg" />
            <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-lg p-3 shadow-lg">
              <img src={LOGO} alt="ДОК" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Компания в цифрах</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NUMBERS.map((n, i) => (
              <div key={i} className="bg-white rounded-lg border border-border p-5 text-center card-hover">
                <div className="w-10 h-10 brand-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={n.icon} size={18} className="text-white" />
                </div>
                <div className="font-bold text-xl text-primary mb-1">{n.num}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={IMG_INSTALL} alt="Монтаж" className="rounded-lg shadow-lg w-full" />
          </div>
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Производство</p>
            <h2 className="text-3xl font-bold mb-5">Собственный завод в Ростове-на-Дону</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Производственный комплекс оснащён немецким оборудованием Sturtz и Elumatec. Полный контроль качества на каждом этапе.
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Автоматическая нарезка профиля по размерам",
                "Сварочные центры немецкого производства",
                "Собственный цех по производству стеклопакетов",
                "Контроль термального коэффициента каждого изделия",
                "Склад готовой продукции на 500+ позиций",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Команда</p>
            <h2 className="text-3xl font-bold">Руководство компании</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white rounded-lg border border-border p-6 text-center card-hover">
                <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Документы</p>
          <h2 className="text-3xl font-bold">Сертификаты и лицензии</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <div key={i} className="flex items-center gap-4 bg-gray-50 border border-border rounded-lg p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={20} className="text-primary" />
              </div>
              <span className="font-medium text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Готовы заказать окна?</h2>
            <p className="text-blue-200">Бесплатный замер в день обращения</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacts" className="btn-orange">
              <Icon name="Phone" size={16} /> Заказать замер
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
