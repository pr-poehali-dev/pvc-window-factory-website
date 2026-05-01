import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/bucket/5cdd2881-2cf5-46fc-b4b4-a58a0d868c05.jpg";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/about", label: "О компании" },
  { path: "/products", label: "Продукция" },
  { path: "/gallery", label: "Галерея" },
  { path: "/services", label: "Услуги" },
  { path: "/dealers", label: "Дилерам" },
  { path: "/contacts", label: "Контакты" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* TOP BAR */}
      <div className="brand-gradient text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+78632001234" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="Phone" size={13} />
              +7 (863) 200-12-34
            </a>
            <a href="mailto:info@don-okna.ru" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Icon name="Mail" size={13} />
              info@don-okna.ru
            </a>
            <span className="flex items-center gap-1.5 text-white/80">
              <Icon name="Clock" size={13} />
              Пн–Пт 8:00–19:00, Сб 9:00–17:00
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/80 text-xs">
            <span>г. Ростов-на-Дону</span>
            <span className="flex items-center gap-1 text-yellow-300 text-sm">★★★★★ <span className="text-white/60 ml-1">4.9 (812 отзывов)</span></span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-border"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[72px]">

          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={LOGO} alt="Донская оконная компания" className="h-14 w-auto object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-bold text-[15px] text-primary leading-none tracking-wide">ДОНСКАЯ</div>
              <div className="text-[11px] text-muted-foreground tracking-widest uppercase">оконная компания</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-[13.5px] font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <a href="tel:+78632001234" className="font-bold text-xl text-primary block leading-none hover:underline">
                +7 (863) 200-12-34
              </a>
              <span className="text-xs text-muted-foreground">Бесплатный звонок</span>
            </div>
            <Link to="/contacts" className="btn-orange text-[13px]">
              Замер бесплатно
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:+78632001234" className="text-primary">
              <Icon name="Phone" size={22} />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 text-gray-700">
              <Icon name={menuOpen ? "X" : "Menu"} size={26} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-sm font-medium border-b border-border/50 ${
                    location.pathname === link.path ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+78632001234" className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Icon name="Phone" size={18} />
                  +7 (863) 200-12-34
                </a>
                <Link to="/contacts" className="btn-orange justify-center">
                  Заказать бесплатный замер
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LOGO} alt="ДОК" className="h-14 w-auto brightness-0 invert opacity-70 object-contain mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Производство и установка пластиковых окон в Ростове-на-Дону с 2005 года.
            </p>
            <div className="text-yellow-400 text-sm">★★★★★ <span className="text-gray-400 ml-1 text-xs">4.9 / 5 (812 отзывов)</span></div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Разделы сайта</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-primary text-xs">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Продукция</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Пластиковые окна", "Балконы и лоджии", "Алюминиевые конструкции", "Входные двери", "Мансардные окна", "Стеклопакеты"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-primary text-xs">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Контакты</h4>
            <div className="space-y-3 text-sm mb-5">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">г. Ростов-на-Дону,<br />ул. Станиславского, 8</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={15} className="text-primary flex-shrink-0" />
                <a href="tel:+78632001234" className="text-gray-400 hover:text-white transition-colors font-medium">+7 (863) 200-12-34</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={15} className="text-primary flex-shrink-0" />
                <a href="mailto:info@don-okna.ru" className="text-gray-400 hover:text-white transition-colors">info@don-okna.ru</a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Clock" size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Пн–Пт 8:00–19:00, Сб 9:00–17:00</span>
              </div>
            </div>
            <Link to="/contacts" className="btn-orange text-xs w-full justify-center">
              <Icon name="Phone" size={14} /> Заказать замер
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <span>© 2024 Донская оконная компания. Все права защищены.</span>
            <span>Производство пластиковых окон в Ростове-на-Дону</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
