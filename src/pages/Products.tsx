import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/526f4b56-663d-4060-8240-91fca14bf4ab.jpg";
const IMG_WOOD = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/2a83f7a7-3928-4c7f-8db5-60a3a4afadba.jpg";

const PRODUCTS = [
  { id: 1, name: "Классическое ПВХ", type: "pvc", size: "medium", use: "residential", price: "от 12 000 ₽", desc: "Надёжность и теплосбережение для жилых помещений. Профиль VEKA Softline 82.", tag: null, img: IMG_WOOD },
  { id: 2, name: "Панорамное остекление", type: "aluminum", size: "large", use: "commercial", price: "от 45 000 ₽", desc: "Алюминиевая система Schüco, максимальный обзор при минимальной раме.", tag: "Хит", img: IMG_HERO },
  { id: 3, name: "Французский балкон", type: "aluminum", size: "large", use: "residential", price: "от 38 000 ₽", desc: "Безопасное ограждение с фиксированным или открывающимся стеклом.", tag: "Новинка", img: IMG_WOOD },
  { id: 4, name: "Деревянное евроокно", type: "wood", size: "medium", use: "residential", price: "от 28 000 ₽", desc: "Клееный брус из дуба или сосны, трёхконтурное уплотнение.", tag: null, img: IMG_WOOD },
  { id: 5, name: "Окно-портал", type: "aluminum", size: "large", use: "commercial", price: "от 67 000 ₽", desc: "Остекление от пола до потолка, минимальный профиль 40 мм.", tag: "Премиум", img: IMG_HERO },
  { id: 6, name: "Мансардное окно", type: "pvc", size: "small", use: "residential", price: "от 22 000 ₽", desc: "Специальная форма для наклонных кровель, влагозащита класса IP44.", tag: null, img: IMG_WOOD },
  { id: 7, name: "Раздвижная система", type: "aluminum", size: "large", use: "commercial", price: "от 55 000 ₽", desc: "Параллельно-сдвижные створки, плавный ход, минималистичный вид.", tag: null, img: IMG_HERO },
  { id: 8, name: "ПВХ пластиковый балкон", type: "pvc", size: "medium", use: "residential", price: "от 18 000 ₽", desc: "Холодное и тёплое остекление балконов под ключ.", tag: null, img: IMG_WOOD },
  { id: 9, name: "Деревянно-алюминиевое", type: "wood", size: "large", use: "commercial", price: "от 52 000 ₽", desc: "Дерево внутри, алюминий снаружи — лучшее из двух материалов.", tag: "Новинка", img: IMG_HERO },
];

const TYPE_FILTERS = [
  { value: "all", label: "Все" },
  { value: "pvc", label: "ПВХ" },
  { value: "aluminum", label: "Алюминий" },
  { value: "wood", label: "Дерево" },
];
const SIZE_FILTERS = [
  { value: "all", label: "Все размеры" },
  { value: "small", label: "Малые" },
  { value: "medium", label: "Средние" },
  { value: "large", label: "Большие" },
];
const USE_FILTERS = [
  { value: "all", label: "Все" },
  { value: "residential", label: "Жилые" },
  { value: "commercial", label: "Коммерческие" },
];

export default function Products() {
  const [type, setType] = useState("all");
  const [size, setSize] = useState("all");
  const [use, setUse] = useState("all");

  const filtered = PRODUCTS.filter((p) => {
    if (type !== "all" && p.type !== type) return false;
    if (size !== "all" && p.size !== size) return false;
    if (use !== "all" && p.use !== use) return false;
    return true;
  });

  return (
    <div>
      {/* HEADER */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">Каталог</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold uppercase leading-none">
            Продукция
          </h1>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-16 max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Filters */}
        <div className="bg-secondary p-6 mb-10 flex flex-wrap gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Материал</p>
            <div className="flex flex-wrap gap-2">
              {TYPE_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setType(f.value)}
                  className={`text-xs font-medium tracking-wider px-4 py-2 border transition-all ${
                    type === f.value
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Размер</p>
            <div className="flex flex-wrap gap-2">
              {SIZE_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setSize(f.value)}
                  className={`text-xs font-medium tracking-wider px-4 py-2 border transition-all ${
                    size === f.value
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Применение</p>
            <div className="flex flex-wrap gap-2">
              {USE_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setUse(f.value)}
                  className={`text-xs font-medium tracking-wider px-4 py-2 border transition-all ${
                    use === f.value
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-end">
            <span className="text-sm text-muted-foreground">
              Найдено: <span className="font-semibold text-foreground">{filtered.length}</span>
            </span>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
            <p className="font-display text-xl uppercase">Нет подходящих позиций</p>
            <button
              onClick={() => { setType("all"); setSize("all"); setUse("all"); }}
              className="mt-6 text-xs tracking-widest uppercase text-accent underline"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="group border border-border hover:border-accent transition-all cursor-pointer overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                  {p.tag && (
                    <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase px-4 py-2">
                      {p.tag}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-background/80 text-xs">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold uppercase">{p.name}</h3>
                    <span className="font-display text-lg font-bold text-accent whitespace-nowrap">{p.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-5 line-clamp-2">{p.desc}</p>
                  <div className="flex gap-2">
                    <span className="text-xs border border-border px-3 py-1 text-muted-foreground uppercase tracking-wider">
                      {p.type === "pvc" ? "ПВХ" : p.type === "aluminum" ? "Алюминий" : "Дерево"}
                    </span>
                    <span className="text-xs border border-border px-3 py-1 text-muted-foreground uppercase tracking-wider">
                      {p.size === "small" ? "Малый" : p.size === "medium" ? "Средний" : "Большой"}
                    </span>
                  </div>
                </div>
                <div className="border-t border-border p-4 flex items-center justify-between">
                  <Link to="/contacts" className="text-xs font-medium tracking-widest uppercase text-accent hover:text-foreground transition-colors">
                    Заказать
                  </Link>
                  <button className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
                    Подробнее <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase">Не нашли нужную модель?</h2>
            <p className="text-accent-foreground/70 text-sm mt-2">Изготовим по вашим размерам и требованиям</p>
          </div>
          <Link to="/contacts" className="flex-shrink-0 bg-accent-foreground text-accent text-xs font-bold tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity">
            Индивидуальный заказ
          </Link>
        </div>
      </section>
    </div>
  );
}
