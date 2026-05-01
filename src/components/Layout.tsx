import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/96 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[70px]">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-background" />
            </div>
            <span className="font-display text-xl font-semibold tracking-widest uppercase text-foreground">
              Fenestra
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-xs font-body font-medium tracking-widest uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contacts"
            className="hidden lg:flex items-center gap-2 bg-accent text-accent-foreground text-xs font-medium tracking-widest uppercase px-6 py-3 hover:opacity-90 transition-opacity"
          >
            <Icon name="PhoneCall" size={14} />
            Заказать замер
          </Link>

          {/* BURGER */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-sm font-medium tracking-wider uppercase border-b border-border/50 ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacts"
                className="mt-4 bg-accent text-accent-foreground text-center text-xs font-medium tracking-widest uppercase px-6 py-4"
              >
                Заказать бесплатный замер
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-[70px]">{children}</main>

      {/* FOOTER */}
      <footer className="bg-foreground text-background">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-background flex items-center justify-center">
                <div className="w-2.5 h-2.5 border-2 border-foreground" />
              </div>
              <span className="font-display text-lg font-semibold tracking-widest uppercase">Fenestra</span>
            </div>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Российский производитель премиальных оконных систем с 2005 года. Полный цикл — от производства до монтажа.
            </p>
            <div className="flex gap-3 mt-6">
              {["Phone", "Mail", "MapPin"].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 border border-background/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors cursor-pointer"
                >
                  <Icon name={icon} size={15} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-background/40 mb-5 font-medium">Разделы</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-background/40 mb-5 font-medium">Контакты</p>
            <div className="flex flex-col gap-4 text-sm text-background/60">
              <div>
                <p className="text-background/30 text-xs uppercase tracking-wider mb-1">Телефон</p>
                <p>+7 (495) 123-45-67</p>
              </div>
              <div>
                <p className="text-background/30 text-xs uppercase tracking-wider mb-1">Email</p>
                <p>info@fenestra.ru</p>
              </div>
              <div>
                <p className="text-background/30 text-xs uppercase tracking-wider mb-1">Режим</p>
                <p>Пн–Пт, 9:00–18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 max-w-screen-xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-background/30 text-xs tracking-wide">© 2024 Fenestra. Все права защищены</p>
          <p className="text-background/20 text-xs">Производитель оконных систем</p>
        </div>
      </footer>
    </div>
  );
}
