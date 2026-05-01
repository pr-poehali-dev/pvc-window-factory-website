import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_A = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/88b9bec3-a545-4881-b7ed-71b7c3502611.jpg";
const IMG_B = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/6f168601-0146-4668-b6f2-754fc64a947c.jpg";
const IMG_C = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";
const IMG_D = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/12317182-b294-45e9-9c32-11fd45ece646.jpg";

const GALLERY = [
  { id: 1, img: IMG_A, title: "ЖК «Звёздный»", loc: "Ростов-на-Дону, 2024", cat: "residential", type: "Пластиковые окна" },
  { id: 2, img: IMG_B, title: "Семья Кузнецовых", loc: "Аксай, 2024", cat: "residential", type: "Замена окон" },
  { id: 3, img: IMG_C, title: "Офисный центр «Дон-плаза»", loc: "Ростов-на-Дону, 2023", cat: "commercial", type: "Алюминий" },
  { id: 4, img: IMG_D, title: "Монтаж квартиры", loc: "Батайск, 2024", cat: "residential", type: "Монтаж" },
  { id: 5, img: IMG_A, title: "Коттедж в Красном Аксае", loc: "Ростовская обл., 2023", cat: "residential", type: "Пластиковые окна" },
  { id: 6, img: IMG_B, title: "Торговый центр", loc: "Новочеркасск, 2023", cat: "commercial", type: "Витражи" },
  { id: 7, img: IMG_C, title: "Производственный цех ДОК", loc: "Ростов-на-Дону", cat: "production", type: "Производство" },
  { id: 8, img: IMG_D, title: "Таунхаус «Берёзки»", loc: "Аксайский район, 2024", cat: "residential", type: "Остекление" },
  { id: 9, img: IMG_A, title: "Бизнес-центр «Горизонт»", loc: "Ростов-на-Дону, 2023", cat: "commercial", type: "Алюминий" },
  { id: 10, img: IMG_B, title: "ЖК «Южный»", loc: "Ростов-на-Дону, 2024", cat: "residential", type: "Балконы" },
  { id: 11, img: IMG_C, title: "Завод ДОК — цех сборки", loc: "Ростов-на-Дону", cat: "production", type: "Производство" },
  { id: 12, img: IMG_D, title: "Семья Поповых", loc: "Ростов-на-Дону, 2024", cat: "residential", type: "Замена окон" },
];

const CATS = [
  { v: "all", l: "Все работы" },
  { v: "residential", l: "Жилые" },
  { v: "commercial", l: "Коммерческие" },
  { v: "production", l: "Производство" },
];

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [active, setActive] = useState<typeof GALLERY[0] | null>(null);

  const filtered = cat === "all" ? GALLERY : GALLERY.filter((i) => i.cat === cat);

  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Галерея</span>
        </div>
      </div>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Галерея наших работ</h1>
          <p className="text-blue-200 text-lg">Более 12 000 выполненных объектов по всему ЮФО</p>
        </div>
      </section>

      <section className="py-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c.v}
              onClick={() => setCat(c.v)}
              className={`px-5 py-2 rounded-full border font-medium text-sm transition-all ${
                cat === c.v ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c.l}
            </button>
          ))}
          <span className="ml-auto flex items-center text-sm text-muted-foreground">
            {filtered.length} объектов
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer border border-border"
              onClick={() => setActive(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex flex-col items-start justify-end p-4">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white/70 text-xs mb-0.5">{item.type}</p>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.loc}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="ZoomIn" size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {active && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-2 text-sm">
              Закрыть <Icon name="X" size={18} />
            </button>
            <img src={active.img} alt={active.title} className="w-full rounded-t-lg max-h-[70vh] object-cover" />
            <div className="bg-white rounded-b-lg p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{active.title}</h3>
                <p className="text-muted-foreground text-sm">{active.loc} · {active.type}</p>
              </div>
              <Link to="/contacts" onClick={() => setActive(null)} className="btn-orange text-sm">
                Хочу так же
              </Link>
            </div>
          </div>
        </div>
      )}

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Хотите стать нашим клиентом?</h2>
            <p className="text-blue-200">Замер и расчёт — бесплатно</p>
          </div>
          <Link to="/contacts" className="btn-orange flex-shrink-0">
            <Icon name="Phone" size={16} /> Заказать замер
          </Link>
        </div>
      </section>
    </div>
  );
}
