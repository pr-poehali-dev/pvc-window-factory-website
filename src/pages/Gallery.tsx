import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/526f4b56-663d-4060-8240-91fca14bf4ab.jpg";
const IMG_FACTORY = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";
const IMG_WOOD = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/2a83f7a7-3928-4c7f-8db5-60a3a4afadba.jpg";

const ITEMS = [
  { id: 1, img: IMG_HERO, title: "ЖК Северная звезда", loc: "Москва, 2023", cat: "residential", span: "col-span-2 row-span-2" },
  { id: 2, img: IMG_FACTORY, title: "БЦ Горизонт", loc: "Санкт-Петербург, 2023", cat: "commercial", span: "" },
  { id: 3, img: IMG_WOOD, title: "Коттедж в Подмосковье", loc: "Одинцово, 2022", cat: "residential", span: "" },
  { id: 4, img: IMG_HERO, title: "ТРЦ Атлас", loc: "Казань, 2023", cat: "commercial", span: "col-span-2" },
  { id: 5, img: IMG_WOOD, title: "Таунхаус Берёзовая роща", loc: "Новосибирск, 2022", cat: "residential", span: "" },
  { id: 6, img: IMG_FACTORY, title: "Офис IT-парка", loc: "Иннополис, 2023", cat: "commercial", span: "" },
  { id: 7, img: IMG_HERO, title: "Пентхаус на Патриарших", loc: "Москва, 2024", cat: "residential", span: "" },
  { id: 8, img: IMG_WOOD, title: "Загородный дом", loc: "Рублёвка, 2024", cat: "residential", span: "col-span-2" },
];

const CATS = [
  { value: "all", label: "Все проекты" },
  { value: "residential", label: "Жилые" },
  { value: "commercial", label: "Коммерческие" },
];

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [active, setActive] = useState<null | typeof ITEMS[0]>(null);

  const filtered = cat === "all" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <div>
      {/* HEADER */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Проекты</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold uppercase">Галерея</h1>
        </div>
      </section>

      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATS.map((c) => (
            <button
              key={c.value}
              onClick={() => setCat(c.value)}
              className={`text-xs font-medium tracking-widest uppercase px-6 py-3 border transition-all ${
                cat === c.value
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden cursor-pointer border border-border hover:border-accent transition-colors`}
              onClick={() => setActive(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex flex-col items-start justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-background/60 text-xs uppercase tracking-widest mb-1">{item.loc}</p>
                  <h3 className="font-display text-xl font-semibold uppercase text-background">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-12 right-0 text-background/60 hover:text-background transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
            >
              Закрыть <Icon name="X" size={18} />
            </button>
            <img src={active.img} alt={active.title} className="w-full max-h-[75vh] object-cover" />
            <div className="bg-background p-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase">{active.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{active.loc}</p>
              </div>
              <span className="text-xs border border-border px-4 py-2 uppercase tracking-wider text-muted-foreground">
                {active.cat === "residential" ? "Жилой" : "Коммерческий"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
