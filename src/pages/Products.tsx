import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const IMG_A = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/88b9bec3-a545-4881-b7ed-71b7c3502611.jpg";
const IMG_B = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/6f168601-0146-4668-b6f2-754fc64a947c.jpg";
const IMG_C = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/09e86d2c-1ebc-4be7-a065-1cc2ab402c09.jpg";
const IMG_D = "https://cdn.poehali.dev/projects/1b01901c-70fd-4c51-bb39-94cd4186ef14/files/12317182-b294-45e9-9c32-11fd45ece646.jpg";

const PRODUCTS = [
  { id: 1, name: "Одностворчатое окно", type: "pvc", material: "veka", size: "small", price: "от 4 200 ₽", img: IMG_A, badge: null, features: ["Профиль VEKA 5-камерный", "Двухкамерный стеклопакет", "Гарантия 5 лет"] },
  { id: 2, name: "Двустворчатое окно", type: "pvc", material: "kbe", size: "medium", price: "от 7 500 ₽", img: IMG_B, badge: "Хит", features: ["Профиль KBE 70", "Поворотно-откидная фурнитура", "Москитная сетка в комплекте"] },
  { id: 3, name: "Трёхстворчатое окно", type: "pvc", material: "rehau", size: "large", price: "от 14 800 ₽", img: IMG_C, badge: null, features: ["Профиль Rehau Grazio", "Тройной стеклопакет", "Энергосберегающее стекло"] },
  { id: 4, name: "Французский балкон", type: "balcony", material: "kbe", size: "large", price: "от 18 000 ₽", img: IMG_D, badge: "Новинка", features: ["Остекление от пола", "Безопасное закалённое стекло", "Дизайнерская фурнитура"] },
  { id: 5, name: "Балкон холодное", type: "balcony", material: "aluminum", size: "medium", price: "от 8 500 ₽", img: IMG_A, badge: null, features: ["Алюминиевый профиль", "Раздвижная система", "Быстрый монтаж"] },
  { id: 6, name: "Балкон тёплое", type: "balcony", material: "veka", size: "medium", price: "от 16 200 ₽", img: IMG_B, badge: null, features: ["Профиль VEKA", "Утеплитель в комплекте", "Подоконник и откосы"] },
  { id: 7, name: "Алюминиевый витраж", type: "aluminum", material: "aluminum", size: "large", price: "от 22 000 ₽", img: IMG_C, badge: "Премиум", features: ["Системы Schüco", "Любой цвет RAL", "Панорамное остекление"] },
  { id: 8, name: "Мансардное окно", type: "mansard", material: "veka", size: "small", price: "от 7 200 ₽", img: IMG_D, badge: null, features: ["Fakro / Velux", "Влагозащита IP44", "Монтаж в кровлю"] },
  { id: 9, name: "Входная дверь ПВХ", type: "door", material: "kbe", size: "medium", price: "от 9 800 ₽", img: IMG_A, badge: null, features: ["Сэндвич-панель", "Многоточечный замок", "Утеплённый порог"] },
];

const TYPE_OPTS = [
  { v: "all", l: "Все" },
  { v: "pvc", l: "Пластиковые окна" },
  { v: "balcony", l: "Балконы" },
  { v: "aluminum", l: "Алюминий" },
  { v: "mansard", l: "Мансардные" },
  { v: "door", l: "Двери" },
];

const MAT_OPTS = [
  { v: "all", l: "Все профили" },
  { v: "veka", l: "VEKA" },
  { v: "kbe", l: "KBE" },
  { v: "rehau", l: "Rehau" },
  { v: "aluminum", l: "Алюминий" },
];

const SIZE_OPTS = [
  { v: "all", l: "Все размеры" },
  { v: "small", l: "Маленькие" },
  { v: "medium", l: "Средние" },
  { v: "large", l: "Большие" },
];

export default function Products() {
  const [type, setType] = useState("all");
  const [mat, setMat] = useState("all");
  const [size, setSize] = useState("all");

  const filtered = PRODUCTS.filter((p) => {
    if (type !== "all" && p.type !== type) return false;
    if (mat !== "all" && p.material !== mat) return false;
    if (size !== "all" && p.size !== size) return false;
    return true;
  });

  return (
    <div>
      <div className="bg-gray-50 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Продукция</span>
        </div>
      </div>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Каталог продукции</h1>
          <p className="text-blue-200 text-lg">Пластиковые окна, балконы, алюминиевые конструкции собственного производства</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-border shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-end">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Тип конструкции</label>
            <div className="flex flex-wrap gap-1.5">
              {TYPE_OPTS.map((o) => (
                <button key={o.v} onClick={() => setType(o.v)} className={`text-xs px-3 py-1.5 rounded border font-medium transition-all ${type === o.v ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Профиль</label>
            <div className="flex flex-wrap gap-1.5">
              {MAT_OPTS.map((o) => (
                <button key={o.v} onClick={() => setMat(o.v)} className={`text-xs px-3 py-1.5 rounded border font-medium transition-all ${mat === o.v ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Размер</label>
            <div className="flex flex-wrap gap-1.5">
              {SIZE_OPTS.map((o) => (
                <button key={o.v} onClick={() => setSize(o.v)} className={`text-xs px-3 py-1.5 rounded border font-medium transition-all ${size === o.v ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            Найдено: <span className="font-bold text-foreground">{filtered.length}</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground opacity-40" />
            <p className="text-xl font-bold mb-2">Ничего не найдено</p>
            <button onClick={() => { setType("all"); setMat("all"); setSize("all"); }} className="mt-3 text-primary text-sm underline">
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-lg border border-border overflow-hidden card-hover group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {p.badge && (
                    <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded">
                      {p.badge}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-3 group-hover:text-primary transition-colors">{p.name}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Check" size={12} className="text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-primary font-bold text-xl">{p.price}</span>
                    <Link to="/contacts" className="btn-orange text-xs py-2 px-4">
                      Заказать
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="brand-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Не нашли нужную модель?</h2>
            <p className="text-blue-200">Изготовим по вашим размерам и требованиям</p>
          </div>
          <Link to="/contacts" className="btn-orange flex-shrink-0">
            <Icon name="MessageSquare" size={16} /> Индивидуальный заказ
          </Link>
        </div>
      </section>
    </div>
  );
}
