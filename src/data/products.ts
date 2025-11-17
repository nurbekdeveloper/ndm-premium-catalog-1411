// Product images - Hydro Plast
import hydroPlastPpr1 from "@/assets/products/hydro-plast-ppr-pipe-1.jpg";
import hydroPlastPpr2 from "@/assets/products/hydro-plast-ppr-pipe-2.jpg";
import hydroPlastCoupling from "@/assets/products/hydro-plast-coupling.jpg";
import hydroPlastElbow90 from "@/assets/products/hydro-plast-elbow-90.jpg";
import hydroPlastCompositePn20 from "@/assets/products/hydro-plast-composite-pn20.jpg";
import hydroPlastPprPn10 from "@/assets/products/hydro-plast-ppr-pn10.jpg";
import hydroPlastPprPn16 from "@/assets/products/hydro-plast-ppr-pn16.jpg";
import hydroPlastHalfElbow45 from "@/assets/products/hydro-plast-half-elbow-45.jpg";
import hydroPlastTee from "@/assets/products/hydro-plast-tee.jpg";

// Product images - Shimge
import shimgeXps20 from "@/assets/products/shimge-xps20-4-130b.jpg";
import shimgeJet750l1 from "@/assets/products/shimge-jet750l1.png";
import shimgeQb60l from "@/assets/products/shimge-qb60l.png";
import shimgeCpm130 from "@/assets/products/shimge-cpm130.png";
import shimge50wq15qg from "@/assets/products/shimge-50wq15qg.png";

// Product images - Penopleks
import penoplexComfort from "@/assets/products/penoplex-comfort.png";
import penoplexWall from "@/assets/products/penoplex-wall.png";
import penoplexFastfixStandard from "@/assets/products/penoplex-fastfix-standard.png";
import plastfoilMembrane from "@/assets/products/plastfoil-membrane.png";
import plastfoilVortexParapet from "@/assets/products/plastfoil-vortex-parapet.png";
import plastfoilVortexRoof from "@/assets/products/plastfoil-vortex-roof.png";
import plastfoilVortexHeated from "@/assets/products/plastfoil-vortex-heated.png";
import penoplexFoundation from "@/assets/products/penoplex-foundation.png";
import penoplexExtreme from "@/assets/products/penoplex-extreme.png";
import penoplexOsnova from "@/assets/products/penoplex-osnova.png";
import penoplexGeo from "@/assets/products/penoplex-geo.png";
import penoplexRoofPackage from "@/assets/products/penoplex-roof-package.png";
import penoplex45Package from "@/assets/products/penoplex-45-package.png";
import penoplexSlopePackage from "@/assets/products/penoplex-slope-package.png";
import penoplexFloorPackage from "@/assets/products/penoplex-floor-package.png";
import plastfoilTestD from "@/assets/products/plastfoil-test-d.png";
import plastfoilAero from "@/assets/products/plastfoil-aero.png";
import terraisolGeotextile from "@/assets/products/terraisol-geotextile.png";
import terraisolEco from "@/assets/products/terraisol-eco.png";
import fireProtectFabric from "@/assets/products/fire-protect-fabric.png";
import plastfoilCanvas from "@/assets/products/plastfoil-canvas.png";
import plastfoilFerroplast from "@/assets/products/plastfoil-ferroplast.png";
import penoplexSegments from "@/assets/products/penoplex-segments.png";

// Product images - Kitchen Hoods
import aeroluxSilent90 from "@/assets/products/aerolux-silent-90.jpg";
import aeroluxSilent90Detail from "@/assets/products/aerolux-silent-90-detail.jpg";
import aeroluxSilent90Side from "@/assets/products/aerolux-silent-90-side.jpg";
import aeroluxSilent90Installed from "@/assets/products/aerolux-silent-90-installed.jpg";

export interface Product {
  id: string;
  name: string;
  category: "hydro-plast" | "shimge" | "penopleks";
  images: string[];
  description: {
    uz: string;
    ru: string;
  };
  specs: {
    label: { uz: string; ru: string };
    value: string;
    method?: string;
  }[];
}

export const products: Product[] = [
  // Hydro Plast - PP-R Pipes (only 1 product)
  {
    id: "ppr-pn10-20",
    name: "PP-R труба PN 10 Ø20",
    category: "hydro-plast",
    images: [hydroPlastPpr1, hydroPlastPpr2],
    description: {
      uz: "Hydro Plast PPR TYPE-3 trubasi PN 10, diametri 20mm. Yuqori sifatli polipropilen quvurlar.",
      ru: "Труба Hydro Plast PPR TYPE-3 PN 10, диаметр 20мм. Высококачественные полипропиленовые трубы."
    },
    specs: [
      { label: { uz: "Diametr", ru: "Диаметр" }, value: "Ø20" },
      { label: { uz: "Bosim", ru: "Давление" }, value: "PN 10" },
      { label: { uz: "Qadoq", ru: "Упаковка" }, value: "100 metr" },
      { label: { uz: "Mahsulot kodi", ru: "Код товара" }, value: "HP1001" },
      { label: { uz: "Turi", ru: "Тип" }, value: "PPR TYPE-3" }
    ]
  },
  {
    id: "ppr-coupling",
    name: "Муфта",
    category: "hydro-plast",
    images: [hydroPlastCoupling],
    description: {
      uz: "Polipropilen mufta. Quvurlarni ulash uchun ishlatiladi.",
      ru: "Муфта из полипропилена. Используется для соединения труб."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "600m / HPF0101" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "300m / HPF0102" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "200m / HPF0103" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "125m / HPF0104" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "75m / HPF0105" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "40m / HPF0106" }
    ]
  },
  {
    id: "ppr-elbow-90",
    name: "Отвод 90 градусов",
    category: "hydro-plast",
    images: [hydroPlastElbow90],
    description: {
      uz: "Polipropilen 90 graduslik burilish. Quvur tizimlarini buklash uchun.",
      ru: "Отвод 90 градусов из полипропилена. Для изгиба трубопроводных систем."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "400m / HPF0201" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "250m / HPF0202" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "100m / HPF0203" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "60m / HPF0204" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "40m / HPF0205" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "20m / HPF0206" }
    ]
  },
  {
    id: "ppr-composite-pn20",
    name: "PP-R Труба Композит PN 20 ГВС",
    category: "hydro-plast",
    images: [hydroPlastCompositePn20],
    description: {
      uz: "Kompozit PP-R quvuri PN 20. Issiq suv ta'minoti uchun yuqori bosimga chidamli.",
      ru: "Композитная труба PP-R PN 20. Высокое давление для горячего водоснабжения."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "100m / HPK2001" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "100m / HPK2002" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "60m / HPK2003" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "40m / HPK2004" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "24m / HPK2005" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "16m / HPK2006" },
      { label: { uz: "Bosim", ru: "Давление" }, value: "PN 20" },
      { label: { uz: "Turi", ru: "Тип" }, value: "Композит ГВС" }
    ]
  },
  {
    id: "ppr-pn10-hvs",
    name: "PP-R труба PN 10 ХВС",
    category: "hydro-plast",
    images: [hydroPlastPprPn10],
    description: {
      uz: "PP-R quvuri PN 10 sovuq suv ta'minoti uchun. Yuqori sifatli polipropilen.",
      ru: "Труба PP-R PN 10 для холодного водоснабжения. Высококачественный полипропилен."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "100m / HP1001" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "100m / HP1002" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "60m / HP1003" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "40m / HP1004" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "24m / HP1005" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "16m / HP1006" },
      { label: { uz: "Diametr Ø110", ru: "Диаметр Ø110" }, value: "4m / HP1007" },
      { label: { uz: "Bosim", ru: "Давление" }, value: "PN 10" },
      { label: { uz: "Turi", ru: "Тип" }, value: "ХВС" }
    ]
  },
  {
    id: "ppr-pn16-hvs",
    name: "PP-R труба PN 16 ХВС",
    category: "hydro-plast",
    images: [hydroPlastPprPn16],
    description: {
      uz: "PP-R quvuri PN 16 sovuq suv ta'minoti uchun. Yuqori bosimga chidamli.",
      ru: "Труба PP-R PN 16 для холодного водоснабжения. Устойчивость к высокому давлению."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "100m / HP1601" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "100m / HP1602" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "60m / HP1603" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "40m / HP1604" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "24m / HP1605" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "16m / HP1606" },
      { label: { uz: "Bosim", ru: "Давление" }, value: "PN 16" },
      { label: { uz: "Turi", ru: "Тип" }, value: "ХВС" }
    ]
  },
  {
    id: "ppr-half-elbow-45",
    name: "Полуотвод 45 градусов",
    category: "hydro-plast",
    images: [hydroPlastHalfElbow45],
    description: {
      uz: "Polipropilen 45 graduslik yarim burilish. Quvur tizimlarini buklash uchun.",
      ru: "Полуотвод 45 градусов из полипропилена. Для изгиба трубопроводных систем."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "500m / HPF0301" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "250m / HPF0302" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "160m / HPF0303" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "80m / HPF0304" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "50m / HPF0305" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "30m / HPF0306" }
    ]
  },
  {
    id: "ppr-tee",
    name: "Тройник",
    category: "hydro-plast",
    images: [hydroPlastTee],
    description: {
      uz: "Polipropilen uchburchak (tee) fitting. Quvurlarni tarmoqlash uchun.",
      ru: "Тройник из полипропилена. Для ответвления трубопроводов."
    },
    specs: [
      { label: { uz: "Diametr Ø20", ru: "Диаметр Ø20" }, value: "100m / HP1601" },
      { label: { uz: "Diametr Ø25", ru: "Диаметр Ø25" }, value: "100m / HP1602" },
      { label: { uz: "Diametr Ø32", ru: "Диаметр Ø32" }, value: "60m / HP1603" },
      { label: { uz: "Diametr Ø40", ru: "Диаметр Ø40" }, value: "40m / HP1604" },
      { label: { uz: "Diametr Ø50", ru: "Диаметр Ø50" }, value: "24m / HP1605" },
      { label: { uz: "Diametr Ø63", ru: "Диаметр Ø63" }, value: "16m / HP1606" }
    ]
  },
  // Shimge - Pumps
  {
    id: "shimge-xps20-4-130b",
    name: "SHIMGE XPS 20-4-130B",
    category: "shimge",
    images: [shimgeXps20],
    description: {
      uz: "Sirtqi aylanma nasos, cho'yan korpusli, 0.07kVt quvvatli. Isitish va suv ta'minoti tizimlari uchun professional yechim.",
      ru: "Поверхностный циркуляционный насос, корпус чугунный, мощность 0.07кВт. Профессиональное решение для систем отопления и водоснабжения."
    },
    specs: [
      { label: { uz: "Quvvat", ru: "Мощность" }, value: "70 Вт" },
      { label: { uz: "Napor", ru: "Напор" }, value: "4 m" },
      { label: { uz: "Unumdorlik", ru: "Производительность" }, value: "50 л/мин" },
      { label: { uz: "Kuchlanish", ru: "Напряжение" }, value: "220 В" },
      { label: { uz: "Korpus", ru: "Корпус" }, value: "Чугун" },
      { label: { uz: "Harorat", ru: "Температура" }, value: "2-110°C" },
      { label: { uz: "Og'irligi", ru: "Вес" }, value: "2.6 кг" },
      { label: { uz: "Himoya darajasi", ru: "Степень защиты" }, value: "IP44" }
    ]
  },
  {
    id: "shimge-jet750l1",
    name: "SHIMGE JET750L1",
    category: "shimge",
    images: [shimgeJet750l1],
    description: {
      uz: "Sirtqi markazdan qochma o'z-o'zidan so'ruvchi nasos 750 Vt quvvat bilan, 4.5 kub.m/soat unumdorlik, 41 m napor, 9 metr so'rish chuqurligi. Quduqlar, qudiqlar va suv ta'minoti uchun.",
      ru: "Поверхностный центробежный самовсасывающий насос мощностью 750 Вт, расходом до 4,5 куб.м/час, напором до 41 м, глубиной всасывания до 9 метров. Для колодцев, скважин и водоснабжения."
    },
    specs: [
      { label: { uz: "Quvvat", ru: "Мощность" }, value: "750 Вт" },
      { label: { uz: "Kuchlanish", ru: "Питание" }, value: "220В/50Гц" },
      { label: { uz: "Maksimal unumdorlik", ru: "Максимальный расход" }, value: "4.5 м³/ч (75 л/мин)" },
      { label: { uz: "Maksimal napor", ru: "Максимальный напор" }, value: "41 m" },
      { label: { uz: "So'rish chuqurligi", ru: "Глубина всасывания" }, value: "9 m" },
      { label: { uz: "Maksimal bosim", ru: "Максимальное давление" }, value: "5 bar" },
      { label: { uz: "Harorat", ru: "Температура жидкости" }, value: "1°C - 40°C" },
      { label: { uz: "Himoya darajasi", ru: "Степень защиты" }, value: "IP44" },
      { label: { uz: "Izolyatsiya klassi", ru: "Класс изоляции" }, value: "B" },
      { label: { uz: "Korpus", ru: "Корпус" }, value: "Чугун" },
      { label: { uz: "Val materiali", ru: "Материал вала" }, value: "Нержавеющая сталь" },
      { label: { uz: "Yong'inga chidamlik", ru: "Группа горючести" }, value: "Г2" }
    ]
  },
  {
    id: "shimge-qb60l",
    name: "SHIMGE QB60L",
    category: "shimge",
    images: [shimgeQb60l],
    description: {
      uz: "Vixrli nasos QB60L, 40 L/min unumdorlik bilan, 33 mm napor, 8 metr so'rish chuqurligi. Suv ta'minoti va sug'orish tizimlari uchun ishonchli yechim.",
      ru: "Вихревой насос QB60L, производительностью 40 л/мин, напором 33 м, глубиной всасывания до 8 метров. Надежное решение для водоснабжения и полива."
    },
    specs: [
      { label: { uz: "Model", ru: "Модель" }, value: "QB60L" },
      { label: { uz: "Maksimal unumdorlik", ru: "Максимальный расход" }, value: "40 л/мин" },
      { label: { uz: "Maksimal napor", ru: "Максимальный напор" }, value: "33 m" },
      { label: { uz: "So'rish chuqurligi", ru: "Глубина всасывания" }, value: "8 m" },
      { label: { uz: "Ulash o'lchami", ru: "Размер подключения" }, value: "1\" x 1\"" },
      { label: { uz: "Kuchlanish", ru: "Напряжение" }, value: "220В/60Гц" },
      { label: { uz: "Tok kuchi", ru: "Ток" }, value: "2.7A" },
      { label: { uz: "Quvvat", ru: "Мощность" }, value: "0.37 кВт (0.5 л.с.)" },
      { label: { uz: "Kirish", ru: "Вход" }, value: "0.47 м" },
      { label: { uz: "Himoya darajasi", ru: "Степень защиты" }, value: "IPX4" },
      { label: { uz: "Tezlik", ru: "Скорость" }, value: "3450 об/мин" },
      { label: { uz: "Ishlash rejimi", ru: "Режим работы" }, value: "Непрерывный" },
      { label: { uz: "Himoya", ru: "Защита" }, value: "Термозащита" },
      { label: { uz: "Qo'llanilish", ru: "Применение" }, value: "Чистая вода без абразива" }
    ]
  },
  {
    id: "shimge-cpm130",
    name: "SHIMGE CPm130",
    category: "shimge",
    images: [shimgeCpm130],
    description: {
      uz: "Markazdan qochma nasos CPm130, bog' sug'orish, issiqxona suv ta'minoti va chorvachilik uchun ideal. 7 metr so'rish chuqurligi, +40°C gacha harorat.",
      ru: "Центробежный насос CPm130, идеален для садовой ирригации, тепличного водоснабжения и животноводства. Глубина всасывания до 7 м, температура до +40°С."
    },
    specs: [
      { label: { uz: "Quvvat", ru: "Мощность" }, value: "0.37 кВт" },
      { label: { uz: "Turi", ru: "Тип" }, value: "Центробежный" },
      { label: { uz: "Unumdorlik", ru: "Пропускная способность" }, value: "6 м³/ч" },
      { label: { uz: "Diametr", ru: "Диаметр резьбы" }, value: "25 мм" },
      { label: { uz: "So'rish chuqurligi", ru: "Глубина всасывания" }, value: "7 m" },
      { label: { uz: "Harorat", ru: "Температура жидкости" }, value: "+40°C gacha" },
      { label: { uz: "Atrof-muhit harorati", ru: "Температура окружающей среды" }, value: "+40°C gacha" },
      { label: { uz: "Maksimal bosim", ru: "Максимальное давление" }, value: "6 bar" },
      { label: { uz: "pH", ru: "pH" }, value: "6.5 - 8.5" },
      { label: { uz: "Kafolat", ru: "Гарантия" }, value: "6 oy" },
      { label: { uz: "Ishlab chiqaruvchi", ru: "Производитель" }, value: "Shimge (Китай)" },
      { label: { uz: "Qo'llanilish", ru: "Применение" }, value: "Bog' sug'orish, issiqxona, chorvachilik" }
    ]
  },
  {
    id: "shimge-50wq15qg",
    name: "SHIMGE 50WQ1.5QG",
    category: "shimge",
    images: [shimge50wq15qg],
    description: {
      uz: "Chuqur cho'kish nasosi 50WQ1.5QG, 1.5 kW quvvat bilan, 25 m³/soat unumdorlik, 16 m napor. Kanalizatsiya va iflos suvlar uchun.",
      ru: "Погружной канализационный насос 50WQ1.5QG, мощностью 1.5 кВт, производительностью 25 м³/ч, напором 16 м. Для канализации и сточных вод."
    },
    specs: [
      { label: { uz: "Quvvat", ru: "Мощность" }, value: "1.5 кВт" },
      { label: { uz: "Turi", ru: "Тип насоса" }, value: "Канализационный" },
      { label: { uz: "Napor", ru: "Напор" }, value: "16 m" },
      { label: { uz: "Unumdorlik", ru: "Производительность" }, value: "25 м³/ч" },
      { label: { uz: "Cho'kish chuqurligi", ru: "Глубина погружения" }, value: "5 m" },
      { label: { uz: "Mator g'altagi", ru: "Обмотка мотора" }, value: "Mis" },
      { label: { uz: "Ishlab chiqaruvchi", ru: "Производитель" }, value: "Shimge (Китай)" },
      { label: { uz: "Qo'llanilish", ru: "Применение" }, value: "Kanalizatsiya, iflos suvlar" }
    ]
  },
  // Penopleks - Insulation Materials
  {
    id: "penoplex-comfort",
    name: "ПЕНОПЛЭКС КОМФОРТ",
    category: "penopleks",
    images: [penoplexComfort],
    description: {
      uz: "ПЕНОПЛЭКС КОМФОРТ — yuqori samarali issiqlik izolyatsiya materiali (XPS), ekstruziya usulida ishlab chiqarilgan. Universal tur, balkon, lodjiya, devor, qiyshiq tom va tsokol izolyatsiyasi uchun.",
      ru: "ПЕНОПЛЭКС КОМФОРТ — высокоэффективный теплоизоляционный материал (XPS), изготавливаемый методом экструзии. Универсальный тип для теплоизоляции цоколей, стен, скатных крыш, балконов и лоджий."
    },
    specs: [
      { 
        label: { uz: "Qalinlik 20mm - qadoq", ru: "Толщина 20мм - упаковка" }, 
        value: "20 dona, 2.77m², 585×1185×20mm, Tip C" 
      },
      { 
        label: { uz: "Qalinlik 30mm - qadoq", ru: "Толщина 30мм - упаковка" }, 
        value: "13 dona, 9.01m², 585×1185×30mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 40mm - qadoq", ru: "Толщина 40мм - упаковка" }, 
        value: "10 dona, 6.94m², 585×1185×40mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 50mm - qadoq", ru: "Толщина 50мм - упаковка" }, 
        value: "7 dona, 4.85m², 585×1185×50mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 100mm - qadoq", ru: "Толщина 100мм - упаковка" }, 
        value: "4 dona, 2.77m², 585×1185×100mm, Tip T-15" 
      },
      { 
        label: { uz: "Siqilishdagi mustahkamlik", ru: "Прочность на сжатие" }, 
        value: "120-140 kPa (12-14 т/м²)" 
      },
      { 
        label: { uz: "Issiqlik o'tkazuvchanligi λD", ru: "Теплопроводность λD" }, 
        value: "≤0.034 Вт/(м⋅K)" 
      },
      { 
        label: { uz: "Suv shimishi 24 soat", ru: "Водопоглощение за 24 часа" }, 
        value: "≤0.4% hajm bo'yicha" 
      },
      { 
        label: { uz: "Harorat oralig'i", ru: "Температура эксплуатации" }, 
        value: "-70°C dan +75°C gacha" 
      },
      { 
        label: { uz: "Yong'inga qarshilik guruhi", ru: "Группа горючести" }, 
        value: "Г4" 
      },
      { 
        label: { uz: "Qo'llanish sohalari", ru: "Область применения" }, 
        value: "Balkon/lodjiya, devorlar, fasadlar, tsokol, tom, qiyshiq tom" 
      },
      { 
        label: { uz: "Standart", ru: "Стандарт" }, 
        value: "ТУ 5767-006-54349294-2014" 
      },
      { 
        label: { uz: "Tashqi ko'rinish", ru: "Внешний вид" }, 
        value: "Silliq sirt, to'q sariq rang" 
      },
      { 
        label: { uz: "Biologik barqarorlik", ru: "Биостойкость" }, 
        value: "Yuqori, tasdiqlangan" 
      },
      { 
        label: { uz: "Chidamlilik", ru: "Долговечность" }, 
        value: "50+ yil, tasdiqlangan" 
      },
      { 
        label: { uz: "Ekologik xavfsizlik", ru: "Экологичность" }, 
        value: "Xavfsiz, sertifikatlangan" 
      }
    ]
  },
  {
    id: "penoplex-wall",
    name: "ПЕНОПЛЭКС СТЕНА",
    category: "penopleks",
    images: [penoplexWall],
    description: {
      uz: "ПЕНОПЛЭКС СТЕНА — yuqori samarali issiqlik izolyatsiya materiali (XPS oxirgi avlod), ekstruziya usulida umumiy maqsadli polistiroldan ishlab chiqarilgan.",
      ru: "ПЕНОПЛЭКС СТЕНА — высокоэффективный теплоизоляционный материал (XPS последнего поколения), изготавливаемый методом экструзии из полистирола общего назначения"
    },
    specs: [
      { 
        label: { uz: "Qalinlik 30mm - qadoq", ru: "Толщина 30мм - упаковка" }, 
        value: "13 dona, 9.01m², 585×1185×30mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 50mm - qadoq", ru: "Толщина 50мм - упаковка" }, 
        value: "7 dona, 4.85m², 585×1185×50mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 100mm - qadoq", ru: "Толщина 100мм - упаковка" }, 
        value: "4 dona, 2.77m², 585×1185×100mm, Tip T-15" 
      },
      { 
        label: { uz: "Siqilishdagi mustahkamlik", ru: "Прочность на сжатие" }, 
        value: "100 kPa (10 т/м²)" 
      },
      { 
        label: { uz: "Issiqlik o'tkazuvchanligi λD", ru: "Теплопроводность λD" }, 
        value: "≤0.034 Вт/(м⋅K)" 
      },
      { 
        label: { uz: "Suv shimishi 24 soat", ru: "Водопоглощение за 24 часа" }, 
        value: "≤0.6% hajm bo'yicha" 
      },
      { 
        label: { uz: "Harorat oralig'i", ru: "Температура эксплуатации" }, 
        value: "-70°C dan +75°C gacha" 
      },
      { 
        label: { uz: "Yong'inga qarshilik guruhi", ru: "Группа горючести" }, 
        value: "Г4" 
      },
      { 
        label: { uz: "Qo'llanish sohalari", ru: "Область применения" }, 
        value: "Shtukaturka fasadlar, plitka fasadlar, devorlar" 
      },
      { 
        label: { uz: "Standart", ru: "Стандарт" }, 
        value: "ТУ 5767-006-54349294-2014" 
      },
      { 
        label: { uz: "Tashqi ko'rinish", ru: "Внешний вид" }, 
        value: "Sirt: dag'al, Rang: to'q sariq" 
      },
      { 
        label: { uz: "Biologik barqarorlik", ru: "Биостойкость" }, 
        value: "Yuqori, tasdiqlangan" 
      },
      { 
        label: { uz: "Chidamlilik", ru: "Долговечность" }, 
        value: "50+ yil, tasdiqlangan" 
      },
      { 
        label: { uz: "Ekologik xavfsizlik", ru: "Экологичность" }, 
        value: "Xavfsiz, sertifikatlangan" 
      },
      { 
        label: { uz: "Global isish potensiali", ru: "Потенциал глобального потепления" }, 
        value: "от 2,22 кг CO₂ эквивалент" 
      }
    ]
  },
  {
    id: "penoplex-fastfix-standard",
    name: "PENOPLEX FASTFIX STANDARD",
    category: "penopleks",
    images: [penoplexFastfixStandard],
    description: {
      uz: "Professional bir komponentli poliuretan elim-ko'pik. Penopolistirol plitalar va issiqlik izolyatsiya turlarini ko'pchilik qurilish materiallari bilan tez va mustahkam elim qilish uchun. 50 m.p. gacha chiqish, -50°C dan +90°C gacha harorat diapazonida foydalanish.",
      ru: "Профессиональный однокомпонентный полиуретановый клей-пена. Для быстрого и прочного склеивания пенополистирольных плит с большинством строительных материалов. Выход до 50 п.м., температурный диапазон эксплуатации от -50 до +90 °С."
    },
    specs: [
      { 
        label: { uz: "Ballon og'irligi, g", ru: "Вес баллона, г" }, 
        value: "700" 
      },
      { 
        label: { uz: "Qotish mexanizmi", ru: "Механизм отверждения" }, 
        value: "За счет влаги, содержащейся в воздухе" 
      },
      { 
        label: { uz: "Ochiq vaqt, daq., gacha", ru: "Открытое время, мин, до" }, 
        value: "2" 
      },
      { 
        label: { uz: "Tuzatish vaqti, daq., gacha", ru: "Время коррекции, мин, до" }, 
        value: "10" 
      },
      { 
        label: { uz: "Елим-кўпик чиқиши, м.p. (змейка диаметри 30 мм)", ru: "Выход клея-пены из баллона, м.п., (при диаметре змейки 30 мм)" }, 
        value: "до 50" 
      },
      { 
        label: { uz: "Кейинги мехишлов вақти, соат", ru: "Время последующей мехобработки, час" }, 
        value: "1,5" 
      },
      { 
        label: { uz: "Структур мустаҳкамлиги 1 соатдан кейин, кам эмас, кг/м²", ru: "Структурная прочность через 1 час, не менее, кг/м²" }, 
        value: "850" 
      },
      { 
        label: { uz: "Тўлиқ полимерлашув вақти, соат", ru: "Время полной полимеризации, час" }, 
        value: "24" 
      },
      { 
        label: { uz: "Экструзион пенополистиролга (XPS) адгезия, кПа", ru: "Адгезия к экструзионному пенополистиролу (XPS), кПа" }, 
        value: "≥215" 
      },
      { 
        label: { uz: "Гипсокартонга адгезия, кПа", ru: "Адгезия к гипсокартону, кПа" }, 
        value: "≥110" 
      },
      { 
        label: { uz: "Бетонга адгезия, кПа", ru: "Адгезия к бетону, кПа" }, 
        value: "≥320" 
      },
      { 
        label: { uz: "Газобетонга адгезия, кПа", ru: "Адгезия к газобетону, кПа" }, 
        value: "≥160" 
      },
      { 
        label: { uz: "Ёғочга адгезия, кПа", ru: "Адгезия к дереву, кПа" }, 
        value: "≥750" 
      },
      { 
        label: { uz: "Полимерлашувда кенгайиш, кўп эмас %", ru: "Расширение в ходе полимеризации, не более %" }, 
        value: "12" 
      },
      { 
        label: { uz: "Упаковка узунлиги, мм", ru: "Длина упаковки, мм" }, 
        value: "277" 
      },
      { 
        label: { uz: "Упаковка эни, мм", ru: "Ширина упаковки, мм" }, 
        value: "207" 
      },
      { 
        label: { uz: "Упаковка баландлиги, мм", ru: "Высота упаковки, мм" }, 
        value: "330" 
      },
      { 
        label: { uz: "Упаковка майдони, м²", ru: "Площадь упаковки, м²" }, 
        value: "0,057" 
      },
      { 
        label: { uz: "Упаковка ҳажми, м³", ru: "Объем упаковки, м³" }, 
        value: "0,019" 
      },
      { 
        label: { uz: "Упаковка оғирлиги, кг", ru: "Вес упаковки, кг" }, 
        value: "8,68" 
      },
      { 
        label: { uz: "Упаковкадаги товар миқдори, дона", ru: "Количество товара в упаковке, шт." }, 
        value: "12" 
      }
    ]
  },
  {
    id: "plastfoil-membrane",
    name: "PLASTFOIL",
    category: "penopleks",
    images: [plastfoilMembrane],
    description: {
      uz: "Yuqori sifatli elastik PVX asosida ishlab chiqarilgan gidroizolyatsiya membranasi. Tom, poydevor va yer osti konstruksiyalari uchun. Armaturalangan va armaturasiz variantlarda mavjud. Yuqori mustahkamlik, UV nurlanishiga chidamlilik va 300% gacha cho'zilish.",
      ru: "Гидроизоляционная мембрана на основе высококачественного эластичного ПВХ. Для кровель, фундаментов и подземных конструкций. Доступна в армированном и неармированном вариантах. Высокая прочность, стойкость к УФ-излучению и удлинение до 300%."
    },
    specs: [
      // PLASTFOIL CLASSIC
      {
        label: { uz: "CLASSIC - Chiziqli o'lchamlar, mm", ru: "CLASSIC - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "CLASSIC - Armaturalash", ru: "CLASSIC - Тип армирования" },
        value: "Синтетическая сетка"
      },
      {
        label: { uz: "CLASSIC - Egilish, °C, ko'pi bilan", ru: "CLASSIC - Гибкость на брусе радиусом 5 мм, °C, не более" },
        value: "-50 (для 1,2 мм) / -45"
      },
      {
        label: { uz: "CLASSIC - Suv shimishi, %", ru: "CLASSIC - Водопоглощение, %, не более" },
        value: "0,2"
      },
      {
        label: { uz: "CLASSIC - Zarbaga chidamlik 1,2mm", ru: "CLASSIC - Ударная прочность для 1,2 мм, мм" },
        value: "400 (700)"
      },
      {
        label: { uz: "CLASSIC - Zarbaga chidamlik 1,5mm", ru: "CLASSIC - Ударная прочность для 1,5 мм, мм" },
        value: "700 (1000)"
      },
      {
        label: { uz: "CLASSIC - Tortilishdagi mustahkamlik", ru: "CLASSIC - Прочность при растяжении, Н/50 мм" },
        value: "1200/1000"
      },
      {
        label: { uz: "CLASSIC - Cho'zilish, %", ru: "CLASSIC - Удлинение при нагрузке, %" },
        value: "20/20"
      },
      {
        label: { uz: "CLASSIC - Yirtilishga chidamlik", ru: "CLASSIC - Сопротивление раздиру, Н" },
        value: "≥200"
      },
      {
        label: { uz: "CLASSIC - Yonuvchanlik guruhi", ru: "CLASSIC - Группа горючести" },
        value: "Г2"
      },
      // PLASTFOIL POLAR
      {
        label: { uz: "POLAR - Chiziqli o'lchamlar, mm", ru: "POLAR - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "POLAR - Armaturalash", ru: "POLAR - Тип армирования" },
        value: "Синтетическая сетка"
      },
      {
        label: { uz: "POLAR - Egilish, °C", ru: "POLAR - Гибкость на брусе, °C" },
        value: "-55"
      },
      {
        label: { uz: "POLAR - Tortilishdagi mustahkamlik", ru: "POLAR - Прочность при растяжении, Н/50 мм" },
        value: "1100/900"
      },
      {
        label: { uz: "POLAR - Cho'zilish, %", ru: "POLAR - Удлинение, %" },
        value: "17/19"
      },
      {
        label: { uz: "POLAR - Yonuvchanlik guruhi", ru: "POLAR - Группа горючести" },
        value: "Г2"
      },
      // PLASTFOIL FL
      {
        label: { uz: "FL - Chiziqli o'lchamlar, mm", ru: "FL - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000"
      },
      {
        label: { uz: "FL - Armaturalash", ru: "FL - Тип армирования" },
        value: "Синтетическая сетка"
      },
      {
        label: { uz: "FL - Egilish, °C", ru: "FL - Гибкость на брусе, °C" },
        value: "-50"
      },
      {
        label: { uz: "FL - Tortilishdagi mustahkamlik", ru: "FL - Прочность при растяжении, Н/50 мм" },
        value: "1100/900"
      },
      {
        label: { uz: "FL - Yonuvchanlik guruhi", ru: "FL - Группа горючести" },
        value: "Г1"
      },
      // PLASTFOIL ECO
      {
        label: { uz: "ECO - Chiziqli o'lchamlar, mm", ru: "ECO - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "ECO - Egilish, °C", ru: "ECO - Гибкость на брусе, °C" },
        value: "-45"
      },
      {
        label: { uz: "ECO - Tortilishdagi mustahkamlik", ru: "ECO - Прочность при растяжении, Н/50 мм" },
        value: "1100/900"
      },
      {
        label: { uz: "ECO - Cho'zilish, %", ru: "ECO - Удлинение, %" },
        value: "15/15"
      },
      // PLASTFOIL LAY
      {
        label: { uz: "LAY - Chiziqli o'lchamlar, mm", ru: "LAY - Линейные размеры рулона, мм" },
        value: "1,5×2100×20000"
      },
      {
        label: { uz: "LAY - Armaturalash", ru: "LAY - Тип армирования" },
        value: "Синтетическая сетка"
      },
      {
        label: { uz: "LAY - Egilish, °C", ru: "LAY - Гибкость на брусе, °C" },
        value: "-40"
      },
      {
        label: { uz: "LAY - Tortilishdagi mustahkamlik", ru: "LAY - Прочность при растяжении, Н/50 мм" },
        value: "1100/900"
      },
      {
        label: { uz: "LAY - Cho'zilish, %", ru: "LAY - Удлинение, %" },
        value: "15/15"
      },
      // PLASTFOIL ART
      {
        label: { uz: "ART - Chiziqli o'lchamlar, mm", ru: "ART - Линейные размеры рулона, мм" },
        value: "1,5×2000×10000"
      },
      {
        label: { uz: "ART - Armaturalash", ru: "ART - Тип армирования" },
        value: "Без армирования"
      },
      {
        label: { uz: "ART - Egilish, °C", ru: "ART - Гибкость на брусе, °C" },
        value: "-55"
      },
      {
        label: { uz: "ART - Suv shimishi, %", ru: "ART - Водопоглощение, %" },
        value: "0,1"
      },
      {
        label: { uz: "ART - Tortilishdagi mustahkamlik, MPa", ru: "ART - Прочность при растяжении, МПа" },
        value: "15/15"
      },
      {
        label: { uz: "ART - Cho'zilish, %", ru: "ART - Удлинение, %" },
        value: "250/250"
      },
      {
        label: { uz: "ART - Yonuvchanlik guruhi", ru: "ART - Группа горючести" },
        value: "Г4"
      },
      // PLASTFOIL GEO
      {
        label: { uz: "GEO - Chiziqli o'lchamlar, mm", ru: "GEO - Линейные размеры рулона, мм" },
        value: "1,5×2000×20000 / 2,0×2000×20000"
      },
      {
        label: { uz: "GEO - Armaturalash", ru: "GEO - Тип армирования" },
        value: "Без армирования"
      },
      {
        label: { uz: "GEO - Egilish, °C", ru: "GEO - Гибкость на брусе, °C" },
        value: "-45"
      },
      {
        label: { uz: "GEO - Suv shimishi, %", ru: "GEO - Водопоглощение, %" },
        value: "0,1"
      },
      {
        label: { uz: "GEO - Tortilishdagi mustahkamlik, MPa", ru: "GEO - Прочность при растяжении, МПа" },
        value: "17/17"
      },
      {
        label: { uz: "GEO - Cho'zilish, %", ru: "GEO - Удлинение, %" },
        value: "300/300"
      },
      {
        label: { uz: "GEO - Zarbaga chidamlik 2,0mm", ru: "GEO - Ударная прочность для 2,0 мм, мм" },
        value: "1500 (2000)"
      },
      {
        label: { uz: "GEO - Yonuvchanlik guruhi", ru: "GEO - Группа горючести" },
        value: "Г4"
      },
      // Umumiy xususiyatlar / Общие характеристики
      {
        label: { uz: "Umumiy - Suv o'tkazmasligi", ru: "Общие - Водонепроницаемость" },
        value: "Соответствует"
      },
      {
        label: { uz: "Umumiy - Payvand chokining yirtilishga chidamligi", ru: "Общие - Прочность сварного шва на раздир, Н/50 мм" },
        value: "300-350"
      },
      {
        label: { uz: "Umumiy - Payvand chokining uzilishga chidamligi", ru: "Общие - Прочность сварного шва на разрыв, Н/50 мм" },
        value: "600-700"
      },
      {
        label: { uz: "Qo'llanish - An'anaviy tomlar", ru: "Применение - Кровли традиционные" },
        value: "CLASSIC, POLAR, FL, ECO, LAY, ART"
      },
      {
        label: { uz: "Qo'llanish - Inversiya tomlari", ru: "Применение - Кровли инверсионные" },
        value: "ART, GEO"
      },
      {
        label: { uz: "Qo'llanish - Poydevorlar, tunnellar", ru: "Применение - Фундаменты, тоннели" },
        value: "ART, GEO"
      }
    ]
  },
  {
    id: "plastfoil-test-d",
    name: "PLASTFOIL TEST D",
    category: "penopleks",
    images: [plastfoilTestD],
    description: {
      uz: "PLASTFOIL TEST D — elektr o'tkazuvchan material, polipropilen asosidagi to'qilmagan mato, polietilen bog'lovchi va metallangan qoplamadan tashkil topgan kombinatsiyalangan material.\n\n**Qo'llanilishi:**\nTomning oqish nuqtasini buzilmaydigan elektrofizik usullar bilan o'ta aniq diagnostika qilish imkoniyati bilan ajratuvchi qatlam sifatida qo'llaniladi.\n\nPLASTFOIL TEST D o'rnatish issiqlik izolyatsiya materiallarining, xususan, ekstruzion penopolistirol ПЕНОПЛЭКС yuzasida amalga oshiriladi. Temir-beton (sement-qum qoplama) yuzasiga o'rnatish istisno etiladi.\n\nPLASTFOIL TEST D himoya qatlamida tom pirogining ventilyatsiyasini ta'minlash uchun mo'ljallangan maxsus teshiklar mavjud.\n\n**Afzalliklari:**\n• Oqish nuqtalarini o'ta aniq diagnostika qilish imkoniyati\n• Elektr o'tkazuvchan va ajratuvchi qatlam sifatida universal qo'llash\n• Suvsiz diagnostika\n• Yuqori tezlikda oqish diagnostikasi",
      ru: "PLASTFOIL TEST D — комбинированный материал, состоящий из нетканого полотна на основе полипропилена, полиэтиленового связующего и металлизированного покрытия.\n\n**Применение:**\nПрименяется в качестве разделительного слоя с возможностью сверхточной диагностики протечек кровли неразрушающими электрофизическими методами.\n\nМонтаж ПЛАСТФОИЛ ТЕСТ D производится на поверхности теплоизоляционных материалов, в частности, экструзионного пенополистирола ПЕНОПЛЭКС. Исключается монтаж на поверхность железобетона (цементно-песчаной стяжки).\n\nВ защитном слое ПЛАСТФОИЛ ТЕСТ D предусмотрены специальные отверстия, предназначенные для обеспечения вентиляции кровельного пирога.\n\n**Преимущества:**\n• Позволяет выполнять сверхточную диагностику протечек\n• Универсальное применение в качестве электропроводящего и разделительного слоя\n• Диагностика без использования воды\n• Высокая скорость диагностики протечек"
    },
    specs: [
      {
        label: { uz: "Uzunligi, m", ru: "Длина, м" },
        value: "100",
        method: "ГОСТ 2678"
      },
      {
        label: { uz: "Eni, m", ru: "Ширина, м" },
        value: "1",
        method: "ГОСТ 2678"
      },
      {
        label: { uz: "Qalinligi, mm", ru: "Толщина, мм" },
        value: "0,05–0,1",
        method: "справочное значение"
      },
      {
        label: { uz: "Maksimal tortilish kuchi, N/50 mm: uzunlik bo'yicha", ru: "Максимальная сила растяжения, Н/50 мм: по длине" },
        value: "100",
        method: "ГОСТ 31899-2-2011 Метод А"
      },
      {
        label: { uz: "Maksimal tortilish kuchi, N/50 mm: eni bo'yicha", ru: "Максимальная сила растяжения, Н/50 мм: по ширине" },
        value: "50",
        method: "ГОСТ 31899-2-2011 Метод А"
      },
      {
        label: { uz: "Maksimal tortilish kuchida nisbiy cho'zilish: uzunlik bo'yicha", ru: "Относительное удлинение при максимальной силе растяжения: по длине" },
        value: "20–70",
        method: "ГОСТ 31899-2-2011 Метод А"
      },
      {
        label: { uz: "Maksimal tortilish kuchida nisbiy cho'zilish: eni bo'yicha", ru: "Относительное удлинение при максимальной силе растяжения: по ширине" },
        value: "10–60",
        method: "ГОСТ 31899-2-2011 Метод А"
      },
      {
        label: { uz: "Yong'inga qarshi texnik xususiyatlar, guruh", ru: "Пожарно-технические характеристики, группа" },
        value: "Г4/В1/РП1",
        method: "ГОСТ 30244/ГОСТ 30402/ГОСТ 30444"
      }
    ]
  },
  {
    id: "plastfoil-vortex-parapet",
    name: "ВОРОНКА ПАРАПЕТНАЯ PLASTFOIL VORTEX",
    category: "penopleks",
    images: [plastfoilVortexParapet],
    description: {
      uz: "Yassi tomlarda balkon va parapetlar orqali suvni oqizish uchun mo'ljallangan. Voronka ob-havo ta'siriga va ultrabinafsha nurlanishiga chidamli yuqori sifatli polivinilxloriddan ishlab chiqariladi. To'plamdagi tarkibiy qismlar: PVX voronka korpusi, barglar ushlagichi, polipropilen burchak quvuri va alyuminiy qattiqlik elementi. Voronkaning burchak quvuri 100 mm diametrli suv oqizish quvurlari bilan birlashish uchun mo'ljallangan. Konstruksiya mustahkamligini oshirish uchun parapet voronkasining oqizish quvuriga alyuminiy qattiqlik elementi kiritiladi.\n\nAfzalliklari:\n• UZOQ MUDDATLILIK - Xizmat muddati kamida 50 yil\n• OB-HAVO QARSHILIGI - Past va yuqori haroratlar, yog'ingarchilik va ultrabinafsha nurlanishiga yuqori chidamlilik\n• O'RNATISH - Tez o'rnatish, oddiylik va texnologiklik",
      ru: "Предназначена для отвода воды через балконы и парапеты на плоской кровле. Воронка изготавливается из высококачественного поливинилхлорида, устойчивого к атмосферному воздействию и УФ-излучению. В состав комплекта входит: корпус воронки из ПВХ, листвоуловитель, угловой отвод из полипропилена и элемент жесткости из алюминия. Угловой отвод воронки предназначен для соединения с водосточными трубами диаметром 100 мм. Элемент жесткости из алюминия вставляется внутрь отводящей трубы парапетной воронки для усиления жесткости конструкции.\n\nПреимущества:\n• ДОЛГОВЕЧНОСТЬ - Срок службы не менее 50 лет\n• АТМОСФЕРОСТОЙКОСТЬ - Высокая устойчивость к воздействию низких и высоких температур, осадков и ультрафиолета\n• МОНТАЖ - Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "Chiqish kesimi", ru: "Выходное сечение" }, 
        value: "110×110 мм" 
      },
      { 
        label: { uz: "Flanets o'lchamlari", ru: "Габариты фланца" }, 
        value: "310×190 мм" 
      },
      { 
        label: { uz: "Chiqarish patrubok uzunligi", ru: "Длина выпускного патрубка" }, 
        value: "450 мм" 
      },
      { 
        label: { uz: "O'tkazuvchanlik qobiliyati", ru: "Пропускная способность" }, 
        value: "8 л/с" 
      },
      { 
        label: { uz: "Material", ru: "Материал" }, 
        value: "ПВХ-композиция" 
      }
    ]
  },
  {
    id: "plastfoil-vortex-roof",
    name: "ВОРОНКА КРОВЕЛЬНАЯ PLASTFOIL VORTEX",
    category: "penopleks",
    images: [plastfoilVortexRoof],
    description: {
      uz: "PLASTFOIL VORTEX — polipropilen korpusli va zanglamaydigan po'latdan ishlab chiqarilgan prижимли flanets, shuningdek barglari yig'uvchi bilan jihozlangan tom voronkasi. Turli diametrli voronkalar isitish tizimi bilan va isitishsiz taqdim etiladi.\n\nTom voronkasi kapital qurilishda yoki yassi ekspluatatsiya qilinadigan ko'p darajali, shu jumladan inversiya tomlarda qisman ta'mirlashda qo'llaniladi. Har qanday gidro-, paro- va issiqlik izolyatsion materiallar, har qanday qalinlik va to'ldirishli \"pirog\" uchun mo'ljallangan. To'g'ridan-to'g'ri po'lat, cho'yan yoki plastik quvurlar bilan o'rnatish uchun ishlatiladi.\n\n**Afzalliklari:**\n• UZOQ XIZMAT MUDDATI - Xizmat muddati kamida 50 yil\n• ATMOSFERAGA CHIDAMLILIK - Past va yuqori haroratlar, yog'ingarchilik va ultrabinafsha nurlariga yuqori chidamlilik\n• O'RNATISH - Yuqori o'rnatish tezligi, soddalik va texnologiklik",
      ru: "PLASTFOIL VORTEX — кровельная воронка с корпусом из полипропилена и прижимным фланцем из нержавеющей стали, а также с листвоуловителем. Представлены воронки разных диаметров с обогревом и без.\n\nКровельная воронка применяется при капитальном строительстве или частичном ремонте плоских эксплуатируемых многоуровневых, в том числе инверсионных кровель. Предназначена для кровель с любыми гидро-, паро- и теплоизоляционными материалами, с «пирогом» любой толщины и наполнения. Используется для непосредственного монтажа со стальными, чугунными или пластиковыми трубами.\n\n**Преимущества:**\n• ДОЛГОВЕЧНОСТЬ - Срок службы не менее 50 лет\n• АТМОСФЕРОСТОЙКОСТЬ - Высокая устойчивость к воздействию низких и высоких температур, осадков и ультрафиолета\n• МОНТАЖ - Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "Mahsulot nomi", ru: "Наименование" }, 
        value: "PLASTFOIL VORTEX D=110 мм / D=160 мм" 
      },
      { 
        label: { uz: "Ichki yuza harorati, °C", ru: "Максимальная температура внутренней поверхности воронки, °C" }, 
        value: "+55" 
      },
      { 
        label: { uz: "Qabul qiluvchi voronka diametri, mm", ru: "Диаметр приемной воронки, мм" }, 
        value: "360 (D=110) / 444 (D=160)" 
      },
      { 
        label: { uz: "Chiqish diametri, mm", ru: "Выходной диаметр, мм" }, 
        value: "110 / 160" 
      },
      { 
        label: { uz: "Shartli chiqish shtuser balandligi, mm", ru: "Условная высота выпускного патрубка, мм" }, 
        value: "170" 
      },
      { 
        label: { uz: "O'tkazish qobiliyati, kamida, l/s", ru: "Пропускная способность, не менее, л/с" }, 
        value: "8 (D=110) / 12 (D=160)" 
      },
      { 
        label: { uz: "Atrof-muhit harorati, °C", ru: "Температура окружающей среды, °C" }, 
        value: "от -50 до +90" 
      },
      { 
        label: { uz: "Oqim suvi harorati, ko'pi bilan, °C", ru: "Температура отводящей жидкости, не более, °C" }, 
        value: "+85" 
      },
      { 
        label: { uz: "Netto og'irligi, ko'pi bilan, kg", ru: "Масса нетто, не более, кг" }, 
        value: "1,55 (D=110) / 2,0 (D=160)" 
      },
      { 
        label: { uz: "Maksimal ruxsat etilgan yuk, ko'pi bilan, kg", ru: "Максимальная разрешенная нагрузка, не более, кг" }, 
        value: "150" 
      },
      { 
        label: { uz: "Chiqish shtuser balandligi, mm", ru: "Высота выпускного патрубка, мм" }, 
        value: "450" 
      }
    ]
  },
  {
    id: "plastfoil-vortex-heated",
    name: "ВОРОНКА КРОВЕЛЬНАЯ С ОБОГРЕВОМ PLASTFOIL VORTEX",
    category: "penopleks",
    images: [plastfoilVortexHeated],
    description: {
      uz: "Voronka suv qabul qilish kosasini isitish uchun termokabel bilan jihozlanishi mumkin. O'rnatilgan isitgich voronkaning ishlashini ta'minlaydi va atrofdagi havo harorati manfiy bo'lganda muzlashdan himoya qiladi. Voronka isitishini ulash termostat yoki qo'shish tugmasi yordamida termokabel orqali amalga oshiriladi.\n\nAfzalliklar:\n• CHIDAMLILIK - Xizmat muddati kamida 50 yil\n• IQLIMGA CHIDAMLIK - Past va yuqori haroratga, yog'ingarchilikkka va ultrabinafsha nuriga yuqori chidamlilik\n• KIMYOVIY BARQARORLIK - Kislotalarga va qum bilan abraziv aşınmaga yuqori chidamlilik\n• MONTAJ - Yuqori montaj tezligi, oddiy va texnologik",
      ru: "Воронка может комплектоваться термокабелем для обогрева водоприемной чаши. Встроенный обогреватель обеспечит работоспособность воронки и защитит от обледенения при отрицательных температурах окружающего воздуха. Подключение обогрева воронки осуществляется через термокабель с помощью термостата или кнопки включения.\n\nПреимущества:\n• ДОЛГОВЕЧНОСТЬ - Срок службы не менее 50 лет\n• АТМОСФЕРОСТОЙКОСТЬ - Высокая устойчивость к воздействию низких и высоких температур, осадков и ультрафиолета\n• ХИМИЧЕСКАЯ УСТОЙЧИВОСТЬ - Высокая устойчивость к кислотам, абразивному истиранию песком\n• МОНТАЖ - Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "Kuchlanish, V / maksimal iste'mol qilinadigan tok, A", ru: "Напряжение, В / максимальный потребляемый ток, А" }, 
        value: "220-230 / 0,16" 
      },
      { 
        label: { uz: "Kabelning issiqlik berishi, ko'pi bilan, Vt/(m²•K)", ru: "Теплоотдача кабеля, не более, Вт/(м²•K)" }, 
        value: "30" 
      },
      { 
        label: { uz: "Ulanish kabelining uzunligi, kamida, m", ru: "Длина соединительного кабеля, не менее, м" }, 
        value: "1,5 (3 х 1,5)" 
      },
      { 
        label: { uz: "Kabelning eng kichik bukish radiusi, mm", ru: "Наименьший радиус изгиба кабеля, мм" }, 
        value: "10" 
      },
      { 
        label: { uz: "Kabel yuzasining maksimal harorati, °С", ru: "Максимальная температура поверхности кабеля, °С" }, 
        value: "+65" 
      },
      { 
        label: { uz: "Voronka ichki yuzasining maksimal harorati, °C (D=110/160mm)", ru: "Максимальная температура внутренней поверхности воронки, °C (D=110/160mm)" }, 
        value: "+55 / +55" 
      },
      { 
        label: { uz: "Qabul qiluvchi voronka diametri, mm (D=110/160mm)", ru: "Диаметр приемной воронки, мм (D=110/160mm)" }, 
        value: "360 / 444" 
      },
      { 
        label: { uz: "Chiqish diametri, mm (D=110/160mm)", ru: "Выходной диаметр, мм (D=110/160mm)" }, 
        value: "110 / 160" 
      },
      { 
        label: { uz: "Chiqarish shtutserining shartli balandligi, mm", ru: "Условная высота выпускного патрубка, мм" }, 
        value: "170" 
      },
      { 
        label: { uz: "O'tkazish qobiliyati, kamida, l/s (D=110/160mm)", ru: "Пропускная способность, не менее, л/с (D=110/160mm)" }, 
        value: "8 / 12" 
      },
      { 
        label: { uz: "Atrof-muhit harorati, °C", ru: "Температура окружающей среды, °C" }, 
        value: "от -50 до +90" 
      },
      { 
        label: { uz: "Chiqariladigan suyuqlik harorati, ko'pi bilan, °C", ru: "Температура отводящей жидкости, не более, °C" }, 
        value: "+85" 
      },
      { 
        label: { uz: "Netto massasi, ko'pi bilan, kg (D=110/160mm)", ru: "Масса нетто, не более, кг (D=110/160mm)" }, 
        value: "1,55 / 2,0" 
      },
      { 
        label: { uz: "Maksimal ruxsat etilgan yuk, ko'pi bilan, kg", ru: "Максимальная разрешенная нагрузка, не более, кг" }, 
        value: "150" 
      },
      { 
        label: { uz: "Chiqarish shtutserining balandligi, mm", ru: "Высота выпускного патрубка, мм" }, 
        value: "450" 
      }
    ]
  },
  {
    id: "plastfoil-aero",
    name: "АЭРАТОР PLASTFOIL AERO",
    category: "penopleks",
    images: [plastfoilAero],
    description: {
      uz: "PLASTFOIL AERO tom aeratori 'nafas oladigan' tekis tomlarni qurishda yoki sanatsiya qilishda qo'llaniladi, gidroizolyatsiya ostiga kirib boradigan suv bug'larini chiqarish uchun mo'ljallangan.\n\n**Afzalliklari:**\n\n**ATMOSFERAGA CHIDAMLILIK** — Past va yuqori haroratlar, yog'ingarchilik va ultrabinafsha nurlariga yuqori chidamlilik\n\n**BIOLOGIK BARQARORLIK** — Agressiv muhit va mikroorganizmlar ta'siriga chidamlilik",
      ru: "Кровельный аэратор PLASTFOIL AERO применяется при устройстве либо санации «дышащих» плоских кровель, предназначенных для отвода водяных паров, проникающих под гидроизоляцию.\n\n**Преимущества:**\n\n**АТМОСФЕРОСТОЙКОСТЬ** — Высокая устойчивость к воздействию низких и высоких температур, осадков и ультрафиолета\n\n**БИОСТОЙКОСТЬ** — Стойкость к воздействию агрессивных сред и микроорганизмов"
    },
    specs: [
      { 
        label: { uz: "Korpus va qopqoq xom ashyosi", ru: "Cырье корпуса и колпака аэратора" }, 
        value: "морозостойкий полипропилен" 
      },
      { 
        label: { uz: "Chiqaruvchi quvur diametri, mm", ru: "Диаметр отводящей трубы, мм" }, 
        value: "110" 
      },
      { 
        label: { uz: "Aerator 'yubkasi' diametri, mm", ru: "Диаметр «юбки» аэратора, мм" }, 
        value: "360" 
      },
      { 
        label: { uz: "Aerator balandligi, mm", ru: "Высота аэратора, мм" }, 
        value: "450" 
      },
      { 
        label: { uz: "Sof og'irlik, maksimal, kg", ru: "Масса нетто, макс., кг" }, 
        value: "1,7" 
      },
      { 
        label: { uz: "Ishchi muhitni (havo) berish yo'nalishi", ru: "Направление подачи рабочей среды (воздушной)" }, 
        value: "любое" 
      },
      { 
        label: { uz: "Foydalanish harorati: doimiy / vaqtinchalik, °C", ru: "Температура использования: постоянная / временная, °С" }, 
        value: "от -40 до +80 / от -55 до +120" 
      },
      { 
        label: { uz: "Chiqarilayotgan suyuqlik harorati, ko'pi bilan, °C", ru: "Температура отводящей жидкости, не более, °C" }, 
        value: "+85" 
      }
    ]
  },
  {
    id: "terraisol-geotextile",
    name: "ГЕОТЕКСТИЛЬ TERRAISOL",
    category: "penopleks",
    images: [terraisolGeotextile],
    description: {
      uz: "To'qilmagan termal mahkamlangan TERRAISOL geotekstili poliefir va polipropilen tolalar aralashmasidan ishlab chiqariladi. Fuqarolik qurilishida kimyoviy jihatdan bir-biriga mos kelmaydigan materiallar, masalan, PVX va XPS uchun ajratuvchi qatlam sifatida va gidroizolyatsiyani yig'ma yoki tsement-qum qoplamasi, beton asos bo'ylab o'rnatishda, shuningdek, mavjud bitum gidroizolyatsiya qatlami bo'ylab tomlarni rekonstruksiya qilishda himoya qatlami sifatida keng qo'llaniladi.\n\nTERRAISOL geotekstilini ishlab chiqarish jarayonida xom ashyo yorug'lik ta'siriga chidamlilik va namlikka chidamlilikni ta'minlaydigan maxsus qo'shimchalar bilan boyitiladi.\n\nGeotekstil tolalarining termal ishlov berish va ularning qisqa uzunligi materialni osongina burg'ulash yoki vintlarni burab kiritish imkonini beradi. Natijada, igna teshilgan geotekstilga xos bo'lgan tolalarning burgu yoki vint ustiga o'ralishi sodir bo'lmaydi.\n\nO'rnatish jarayonida material polosalari issiq havo bilan payvandlanishi mumkin.\n\nGeotekstil rulonining kengligi PLASTFOIL polimer membranasi ostiga ajratuvchi va himoya qatlami sifatida yotqizish uchun ideal.\n\n**Afzalliklari:**\n\n**MEXANIK MUSTAHKAMLIK** — Siqilish va yirtilishga yuqori mexanik mustahkamlik\n\n**KIMYOVIY BARQARORLIK** — Kimyoviy moddalar ta'siriga yuqori chidamlilik\n\n**BIOLOGIK BARQARORLIK** — Agressiv muhit va mikroorganizmlar ta'siriga chidamlilik\n\n**NOL SUV SHIMISHI** — Suvni shimirmaydi, nam havoda ishlatganda materialning massasi o'zgarmaydi\n\n**UV NURLANISHIGA CHIDAMLILIK** — Yorug'lik ta'siriga yuqori chidamlilik\n\n**O'RNATISH QULAYLIGI** — Yuqori o'rnatish tezligi, soddaligi va texnologikligi",
      ru: "Нетканый термоскрепленный геотекстиль TERRAISOL производится из смеси полиэфирного и полипропиленового волокна. Широко используется в гражданском строительстве как разделительный слой для химически несовместимых между собой материалов, например, ПВХ и XPS, так и защитный — при устройстве гидроизоляции по сборной или ЦПС стяжке, бетонному основанию, а также при реконструкции кровель по существующему слою битумной гидроизоляции.\n\nВ процессе производства геотекстиля TERRAISOL исходное сырье обогащается специальными добавками, которые придают материалу стойкость к световому воздействию и влагоустойчивость.\n\nТермообработка волокон геотекстиля и их малая длина позволяют легко просверлить материал или закрутить саморезы. В результате не происходит наматывание волокон на сверло самореза, что характерно для иглопробивного геотекстиля.\n\nВ процессе монтажа полотна материала можно сваривать между собой горячим воздухом.\n\nШирина рулона геотекстиля идеально подходит для укладки под полимерную мембрану PLASTFOIL в качестве разделительного и защитного слоя.\n\n**Преимущества:**\n\n**МЕХАНИЧЕСКАЯ ПРОЧНОСТЬ** — Высокая механическая прочность на сжатие и разрыв\n\n**ХИМИЧЕСКАЯ СТОЙКОСТЬ** — Высокая стойкость к воздействию химических веществ\n\n**БИОСТОЙКОСТЬ** — Стойкость к воздействию агрессивных сред и микроорганизмов\n\n**НУЛЕВОЕ ВОДОПОГЛОЩЕНИЕ** — Не впитывает воду, при использовании в сырую погоду масса материала остается неизменной\n\n**УСТОЙЧИВОСТЬ К УФ-ИЗЛУЧЕНИЮ** — Высокая устойчивость к воздействию света\n\n**УДОБСТВО МОНТАЖА** — Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "Model", ru: "Наименование" }, 
        value: "Геотекстиль TERRAISOL 150" 
      },
      { 
        label: { uz: "Sirt zichligi, g/m²", ru: "Поверхностная плотность, г/м²" }, 
        value: "150 ± 10" 
      },
      { 
        label: { uz: "Uzunlik/kenglik bo'yicha yirtilish yuki, kamida, kN/m", ru: "Разрывная нагрузка, по длине/ширине, не менее, кН/м" }, 
        value: "4,0/5,0" 
      },
      { 
        label: { uz: "Yirtilishdagi cho'zilish, ko'pi bilan, %", ru: "Удлинение при разрыве, не более, %" }, 
        value: "80" 
      },
      { 
        label: { uz: "Shar bilan bosishda mustahkamlik, kamida, kN", ru: "Прочность при продавливании шариком, не менее, кН" }, 
        value: "0,4" 
      },
      { 
        label: { uz: "200 kPa yukda filtratsiya koeffitsienti, ko'pi bilan, m/kun (sm/s)", ru: "Коэффициент фильтрации при нагрузке 200 кПа, не более, м/сут (см/с)" }, 
        value: "4,0 (4•10⁻³)" 
      },
      { 
        label: { uz: "Model", ru: "Наименование" }, 
        value: "Геотекстиль TERRAISOL 300" 
      },
      { 
        label: { uz: "Sirt zichligi, g/m²", ru: "Поверхностная плотность, г/м²" }, 
        value: "300 ± 10" 
      },
      { 
        label: { uz: "Uzunlik/kenglik bo'yicha yirtilish yuki, kamida, kN/m", ru: "Разрывная нагрузка, по длине/ширине, не менее, кН/м" }, 
        value: "6,0/8,0" 
      },
      { 
        label: { uz: "Yirtilishdagi cho'zilish, ko'pi bilan, %", ru: "Удлинение при разрыве, не более, %" }, 
        value: "70" 
      },
      { 
        label: { uz: "Shar bilan bosishda mustahkamlik, kamida, kN", ru: "Прочность при продавливании шариком, не менее, кН" }, 
        value: "2,0" 
      },
      { 
        label: { uz: "200 kPa yukda filtratsiya koeffitsienti, ko'pi bilan, m/kun (sm/s)", ru: "Коэффициент фильтрации при нагрузке 200 кПа, не более, м/сут (см/с)" }, 
        value: "4,0 (4•10⁻³)" 
      }
    ]
  },
  {
    id: "terraisol-eco",
    name: "ГЕОТЕКСТИЛЬ TERRAISOL ЭКО",
    category: "penopleks",
    images: [terraisolEco],
    description: {
      uz: "PLASTFOIL TERRAISOL EKO geotekstil – poliefir tolalaridan ignalash usuli bilan ishlab chiqarilgan to'qilmagan material. Bu ekologik toza material bo'lib, termooksidlanish qarishi, yuqori kimyoviy barqarorlik, chirish, mog'or, zamburug'lar, hasharotlar, kemiruvchilar va ildizlarning o'sishiga chidamlidir.\n\nPLASTFOIL TERRAISOL EKO geotekstil poydevor konstruksiyalarida, avtomobil, temir yo'l va piyoda yo'llarida, shuningdek, tuproq ishlari paytida himoya va drenaj funksiyalarini bajaradi.\n\nO'rnatish jarayonida material qatlamlari issiq havo bilan bir-biriga payvandlanishi mumkin.",
      ru: "Геотекстиль PLASTFOIL TERRAISOL ЭКО – нетканый материал из полиэфирных волокон, скрепленных иглопробивным способом. Это экологически чистый материал, который при этом обладает устойчивостью к термоокислительному старению. Имеет высокий уровень химстойкости, не подвержен гниению и воздействию плесени, грибков, насекомых, грызунов, прорастанию корней.\n\nГеотекстиль PLASTFOIL TERRAISOL ЭКО выполняет функции защиты и дренажа в конструкциях фундаментов, автомобильных, железных и пешеходных дорог, а также при производстве земляных работ.\n\nВ процессе монтажа полотна материала можно сваривать между собой горячим воздухом."
    },
    specs: [
      { 
        label: { uz: "Nomi", ru: "Наименование" }, 
        value: "Геотекстиль TERRAISOL ЭКО 100 | Геотекстиль TERRAISOL ЭКО 150 | Геотекстиль TERRAISOL ЭКО 200 | Геотекстиль TERRAISOL ЭКО 250"
      },
      { 
        label: { uz: "Sirt zichligi, g/m²", ru: "Поверхностная плотность, г/м²" }, 
        value: "100 ±10 | 150 ±10 | 200 ±10 | 250 ±10" 
      },
      { 
        label: { uz: "Cho'zilishda mustahkamlik uzunligi/eni bo'yicha, kN/m", ru: "Прочность при растяжении по длине/по ширине, кН/м" }, 
        value: "2,5/2,5 | 3,3/3,5 | 4,5/4,5 | 5,8/6,0" 
      },
      { 
        label: { uz: "Uzilishda cho'zilish uzunligi/eni bo'yicha, %", ru: "Удлинение при разрыве по длине/по ширине, %" }, 
        value: "20/20 | 70/90 | 70/90 | 70/90" 
      },
      { 
        label: { uz: "Ochiq teshiklar o'lchami, mkm", ru: "Размер открытых пор, мкм" }, 
        value: "130 | 130 | 130 | 130" 
      },
      { 
        label: { uz: "Filtratsiya koeffitsienti, m/kun", ru: "Коэффициент фильтрации, м/сут" }, 
        value: "15 | 15 | 15 | 15" 
      }
    ]
  },
  {
    id: "fire-protect-fabric",
    name: "ПРОТИВОПОЖАРНАЯ ТКАНЬ FIRE PROTECT PVC",
    category: "penopleks",
    images: [fireProtectFabric],
    description: {
      uz: "FIRE PROTECT PVC yong'inga qarshi materialining asosi shisha toladan yasalgan yonmaydigan mato hisoblanadi. Matoning pastki tomoni PVX membrana bilan ishonchli birikma ta'minlaydigan maxsus tarkib bilan ishlov berilgan.\n\n**Afzalliklari:**\n\n**CHIDAMLILIK** — Tom ekspluatatsiya muddatini uzaytiradi\n\n**MUSTAHKAMLIK** — Matoning maxsus to'qilishi tufayli yuqori mexanik mustahkamlik, shu jumladan teshilishlarga chidamlilik\n\n**ATMOSFERAGA CHIDAMLILIK** — Ultrabinafsha nurlanishiga yuqori chidamlilik\n\n**O'RNATISH QULAYLIGI** — Yuqori o'rnatish tezligi, soddalik va texnologiklik",
      ru: "Основой противопожарного материала Fire Protect PVC служит негорючая ткань из стекловолокна. Нижняя сторона полотна обработана специальным составом, обеспечивающим надежное соединение с ПВХ мембраной.\n\n**Преимущества:**\n\n**ДОЛГОВЕЧНОСТЬ** — Увеличение срока эксплуатации кровли\n\n**ПРОЧНОСТЬ** — Высокая механическая прочность, в том числе к проколам, благодаря специальному плетению ткани\n\n**АТМОСФЕРОСТОЙКОСТЬ** — Высокая устойчивость к воздействию ультрафиолета\n\n**УДОБСТВО МОНТАЖА** — Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "PO sinfi", ru: "Класс ПО" }, 
        value: "КП0" 
      },
      { 
        label: { uz: "Olov tarqalish guruhi", ru: "Группа распространения пламени" }, 
        value: "РП1 (нераспространяющие огонь)" 
      },
      { 
        label: { uz: "Yonish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2 (трудновоспламеняемые материалы)" 
      },
      { 
        label: { uz: "Yonuvchanlik guruhi (asos)", ru: "Группа горючести (основы)" }, 
        value: "НГ" 
      },
      { 
        label: { uz: "Sirt zichligi, g/m²", ru: "Поверхностная плотность, г/м²" }, 
        value: "500 ±25" 
      },
      { 
        label: { uz: "Uzilish yuklamasi, kamida, N", ru: "Разрывная нагрузка, не менее, Н" }, 
        value: "1000" 
      },
      { 
        label: { uz: "Payvand chokining mustahkamligi, N/50mm, H", ru: "Прочность сварного шва, Н/50мм, H" }, 
        value: "140" 
      },
      { 
        label: { uz: "To'qilish turi", ru: "Тип переплетения" }, 
        value: "сатин" 
      },
      { 
        label: { uz: "Rulon eni, mm", ru: "Ширина рулона, мм" }, 
        value: "1000 ±5" 
      }
    ]
  },
  {
    id: "plastfoil-canvas",
    name: "СТЕКЛОХОЛСТ PLASTFOIL CANVAS",
    category: "penopleks",
    images: [plastfoilCanvas],
    description: {
      uz: "PLASTFOIL CANVAS rulonli materiali tartibsiz joylashgan shisha tolalari va sintetik bog'lovchi moddadan iborat. Material chirishga chidamli va har qanday ob-havo sharoitlariga bardoshli.\n\n**Afzalliklar:**\n\n**BIOBARQARORLIK** - Aggressiv muhitlar, mikroorganizmlar ta'siriga chidamli, chirishga moyil emas\n\n**OB-HAVO BARQARORLIGI** - Past va yuqori haroratlar, yog'ingarchilik va ultrabinafsha nurlariga yuqori bardoshlilik\n\n**O'RNATISH QULAYLIGI** - Yuqori o'rnatish tezligi, soddaligi va texnologikligi",
      ru: "Рулонный материал PLASTFOIL CANVAS состоит из беспорядочно расположенных волокон стекла и синтетического связующего. Материал не подвержен гниению и устойчив к любым погодным условиям.\n\n**Преимущества:**\n\n**БИОСТОЙКОСТЬ** - Стойкость к воздействию агрессивных сред, микроорганизмов, не подвержен гниению\n\n**АТМОСФЕРОСТОЙКОСТЬ** - Высокая устойчость к воздействию низких и высоких температур, осадков и ультрафиолета\n\n**УДОБСТВО МОНТАЖА** - Высокая скорость монтажа, простота и технологичность"
    },
    specs: [
      { 
        label: { uz: "O'ziga xos og'irlik, g/m²", ru: "Удельный вес, г/м²" }, 
        value: "100 ±15" 
      },
      { 
        label: { uz: "Rulon eni, mm", ru: "Ширина рулона, мм" }, 
        value: "1000 ±10" 
      },
      { 
        label: { uz: "Qalinligi, mm", ru: "Толщина, мм" }, 
        value: "0,82 ±0,08" 
      },
      { 
        label: { uz: "Namlik miqdori, kamida, %", ru: "Содержание влажности, не менее, %" }, 
        value: "1" 
      },
      { 
        label: { uz: "Rang", ru: "Цвет" }, 
        value: "Oq / Белый" 
      }
    ]
  },
  {
    id: "plastfoil-ferroplast",
    name: "ПВХ-МЕТАЛЛ PLASTFOIL FERROPLAST",
    category: "penopleks",
    images: [plastfoilFerroplast],
    description: {
      uz: "PLASTFOIL FERROPLAST — bir tomonida polimer qoplama bilan metall list. Metallning yuqori yuzasidagi polimer qoplama mexanik mahkamlash, germetik yoki yopishtiruvchi moddalardan foydalanmasdan, germetik birikma ta'minlab, polimer membranani metall profilga payvandlash imkonini beradi. Polimer qoplamaning qalinligi kamida 0,6 mm bo'lib, bu issiq havo yordamida polimer membranalar bilan sifatli va bir jinsli payvandlash imkonini beradi.\n\nPVX-metall PLASTFOIL FERROPLAST PVX membrana yordamida tom qurish paytida tutashish reykalarini va boshqa detallarni tayyorlash uchun ishlatiladi.\n\n**Afzalliklar:**\n\n**KORROZIYAGA CHIDAMLILIK** - Har ikki tomondan ko'p qatlamli metall qoplama tufayli yuqori korroziyaga chidamlilik\n\n**ISHLOV BERISH SODDALIGI** - Metall uchun qaychi bilan kesish imkoniyati\n\n**OB-HAVO BARQARORLIGI** - Ultrabinafsha nurlariga yuqori bardoshlilik",
      ru: "PLASTFOIL FERROPLAST — металлический лист с полимерным покрытием на одной из сторон. Полимерное покрытие на верхней поверхности металла позволяет приварить полимерную мембрану к металлическому профилю, обеспечив герметичное соединение без механического крепления, герметика или клея. Толщина полимерного покрытия составляет не менее 0,6 мм, что позволяет добиться качественной и гомогенной сварки с полимерными мембранами при помощи горячего воздуха.\n\nПВХ-металл PLASTFOIL FERROPLAST применяют для изготовления планок примыканий и других деталей при устройстве кровли с применением ПВХ мембраны.\n\n**Преимущества:**\n\n**КОРРОЗИОННАЯ СТОЙКОСТЬ** — Высокая коррозионная стойкость, благодаря многослойному покрытию металла с обеих сторон\n\n**ПРОСТОТА ОБРАБОТКИ** — Возможность раскроя ножницами по металлу\n\n**АТМОСФЕРОСТОЙКОСТЬ** — Высокая устойчивость к воздействию ультрафиолета"
    },
    specs: [
      { 
        label: { uz: "Uzunligi, mm", ru: "Длина, мм" }, 
        value: "2000 ±6" 
      },
      { 
        label: { uz: "Eni, mm", ru: "Ширина, мм" }, 
        value: "1000 ±5" 
      },
      { 
        label: { uz: "Asos materiali", ru: "Материал основы" }, 
        value: "Оцинкованная сталь 0,6 мм" 
      },
      { 
        label: { uz: "Qoplama materiali", ru: "Материал покрытия" }, 
        value: "Поливинилхлорид 0,6 мм" 
      },
      { 
        label: { uz: "Og'irligi, kg", ru: "Вес, кг" }, 
        value: "10,5" 
      },
      { 
        label: { uz: "UV nurlariga chidamlilik, %", ru: "Стойкость к УФ излучению, %" }, 
        value: "90" 
      }
    ]
  },
  {
    id: "penoplex-foundation",
    name: "ПЕНОПЛЭКС ФУНДАМЕНТ",
    category: "penopleks",
    images: [penoplexFoundation],
    description: {
      uz: "ПЕНОПЛЭКС ФУНДАМЕНТ — yuqori samarali, yuqori mustahkamlikdagi issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.",
      ru: "ПЕНОПЛЭКС ФУНДАМЕНТ — высокоэффективный теплоизоляционный материал повышенной прочности (XPS последнего поколения), изготавливаемый из полистирола общего назначения."
    },
    specs: [
      { 
        label: { uz: "Qalinlik 50mm - qadoq", ru: "Толщина 50мм - упаковка" }, 
        value: "7 dona, 4.85 m², 585×1185×50 mm, Tip T-15" 
      },
      { 
        label: { uz: "Qalinlik 100mm - qadoq", ru: "Толщина 100мм - упаковка" }, 
        value: "7 dona, 585×1185×100 mm, Tip T-15" 
      },
      { 
        label: { uz: "Qo'llanish sohasi", ru: "Область применения" }, 
        value: "Фундаменты, Полы, Плоские крыши, Ландшафт, Хозяйственные постройки, Инженерные системы" 
      },
      { 
        label: { uz: "Siqilishdagi mustahkamlik (10% chiziqli deformatsiyada) / Sinish chegarasi, kam emas", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии*, не менее" }, 
        value: "250 кПа (25 т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "Suv shimishi 24 soat ichida, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4% hajm bo'yicha",
        method: "ГОСТ EN 12087"
      },
      { 
        label: { uz: "Deklaratsiyalangan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" }, 
        value: "0,034 Вт/(м⋅K)",
        method: "ГОСТ 7076"
      },
      { 
        label: { uz: "A sharoitida foydalanishdagi issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "B sharoitida foydalanishdagi issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "50; 100 мм",
        method: "ГОСТ EN 823"
      },
      { 
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С",
        method: "ТУ"
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4",
        method: "ГОСТ 30244"
      },
      { 
        label: { uz: "Alangalanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2",
        method: "ГОСТ 30402"
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, 
        value: "Т2",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 5,54 кг CO₂ эквивалент",
        method: "ISO 14025 BS EN 15804"
      }
    ]
  },
  {
    id: "penoplex-osnova",
    name: "ПЕНОПЛЭКС ОСНОВА",
    category: "penopleks",
    images: [penoplexOsnova],
    description: {
      uz: "ПЕНОПЛЭКС ОСНОВА — yuqori samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.\n\n**Qo'llanilishi:**\nKasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan universal issiqlik izolyatsiya plitalari turi. Tsokollar, devorlar, pollar, tomlar, plitali qoplamalar (termoqo'shimchalar), deformatsion tikuvlarning to'ldirgichi sifatida issiqlik izolyatsiya qilish uchun tavsiya etiladi.\n\n**Afzalliklari:**\n• Ekologik xavfsizlik\n• Xavfsizlik\n• Isbotlangan biologik barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanligi\n• Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)\n• Yuqori siqilishdagi mustahkamlik\n• Tasdiqlangan uzoq xizmat muddati\n\n**Normolar / standartlar:**\nТУ 5767-006-54349294-2014\nNazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\nSirt: silliq\nRang: to'q sariq",
      ru: "ПЕНОПЛЭКС ОСНОВА — высокоэффективный теплоизоляционный материал (XPS последнего поколения), изготавливаемый из полистирола общего назначения.\n\n**Применение:**\nУниверсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции цоколей, стен, полов, крыш, плит перекрытий (термовкладыши), в качестве заполнителя деформационных швов.\n\n**Преимущества:**\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\nПоверхность: гладкая\nЦвет: оранжевый"
    },
    specs: [
      { 
        label: { uz: "20-30 mm qalinlik uchun 10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщин 20-30 мм), не менее" }, 
        value: "130 (13) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "40-90 mm qalinlik uchun 10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщин 40-90 мм), не менее" }, 
        value: "150 (15) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "≥ 100 mm qalinlik uchun 10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщин ≥ 100 мм), не менее" }, 
        value: "200 (20) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4 % по объему",
        method: "ГОСТ EN 12087"
      },
      { 
        label: { uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°С da, ko'pi bilan", ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" }, 
        value: "0,034 Вт/(м⋅K)",
        method: "ГОСТ 7076"
      },
      { 
        label: { uz: "A ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "B ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "20; 30; 40; 50; 60; 80; 100; 120; 150 мм",
        method: "ГОСТ EN 823"
      },
      { 
        label: { uz: "70°C harorat va 90% nisbiy havo namligida o'lcham barqarorligi", ru: "Стабильность размеров при температуре 70°С и относительной влажности воздуха 90%" }, 
        value: "DS(70,90)",
        method: "ГОСТ EN 1604"
      },
      { 
        label: { uz: "Ekspluatatsiya harorati diapazoni", ru: "Температурный диапазон эксплуатации" }, 
        value: "от -70 до +75 °С",
        method: "ТУ"
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4",
        method: "ГОСТ 30244"
      },
      { 
        label: { uz: "Alovlanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2",
        method: "ГОСТ 30402"
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, 
        value: "Т2",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 1,48 кг CO₂ эквивалент",
        method: "ISO 14025 BS EN 15804"
      }
    ]
  },
  {
    id: "penoplex-extreme",
    name: "ПЕНОПЛЭКС ЭКСТРИМ",
    category: "penopleks",
    images: [penoplexExtreme],
    description: {
      uz: "ПЕНОПЛЭКС ЭКСТРИМ — yuqori samarali oxirgi avlod issiqlik izolyatsiya materiali, umumiy maqsadli polistiroldan ekstruziya usuli bilan ishlab chiqarilgan. Tayyor holda bu qattiq ko'pikli termoplastdir.",
      ru: "ПЕНОПЛЭКС ЭКСТРИМ — высокоэффективный теплоизоляционный материал последнего поколения, изготавливаемый методом экструзии из полистирола общего назначения. В готовом виде это жесткий вспененный термопласт."
    },
    specs: [
      { 
        label: { uz: "10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии, не менее" }, 
        value: "350 (450*) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4 % по объему",
        method: "ГОСТ EN 12087"
      },
      { 
        label: { uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°С da, ko'pi bilan", ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" }, 
        value: "0,034 Вт/(м⋅K)",
        method: "ГОСТ 7076"
      },
      { 
        label: { uz: "A ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "B ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "50; 100 мм",
        method: "ГОСТ EN 823"
      },
      { 
        label: { uz: "Ekspluatatsiya harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С",
        method: "ТУ"
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4",
        method: "ГОСТ 30244"
      },
      { 
        label: { uz: "Alovlanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2",
        method: "ГОСТ 30402"
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, 
        value: "Т2",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 5,54 кг CO₂ эквивалент",
        method: "ISO 14025 BS EN 15804"
      }
    ]
  },
  {
    id: "penoplex-geo",
    name: "ПЕНОПЛЭКС ГЕО С",
    category: "penopleks",
    images: [penoplexGeo],
    description: {
      uz: "ПЕНОПЛЭКС ГЕО С — yuqori samarali issiqlik izolyatsiya materiali yuqori mustahkamlikda (oxirgi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.",
      ru: "ПЕНОПЛЭКС ГЕО С — высокоэффективный теплоизоляционный материал повышенной прочности (XPS последнего поколения), изготавливаемый из полистирола общего назначения."
    },
    specs: [
      { 
        label: { uz: "10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kam emas", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии*, не менее" }, 
        value: "250 кПа (25 т/м²)", 
        method: "ГОСТ EN 826" 
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4% hajm bo'yicha", 
        method: "ГОСТ EN 12087" 
      },
      { 
        label: { uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" }, 
        value: "0,034 Вт/(м⋅K)", 
        method: "ГОСТ 7076" 
      },
      { 
        label: { uz: "A foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "B foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "40; 50; 60; 80; 100 мм", 
        method: "ГОСТ EN 823" 
      },
      { 
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75°С", 
        method: "ТУ" 
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4", 
        method: "ГОСТ 30244" 
      },
      { 
        label: { uz: "Alangalanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2", 
        method: "ГОСТ 30402" 
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, 
        value: "Т2", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 4,43 кг CO₂ эквивалент", 
        method: "ISO 14025 BS EN 15804" 
      }
    ]
  },
  {
    id: "penoplex-slope",
    name: "ПЕНОПЛЭКС ГЕО",
    category: "penopleks",
    images: [penoplexSlopePackage],
    description: {
      uz: "ПЕНОПЛЭКС ГЕО — yuqori mustahkamlikka ega yuqori samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.\n\n**Qo'llanilishi:**\nKasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan universal issiqlik izolyatsiya plitalari turi. Yuklanuvchi konstruksiyalarni issiqlik izolyatsiya qilish uchun tavsiya etiladi: poydevorlar, pollar, stilobatlar, foydalaniladigan tomlar, qoplama tizimlari va hududni obodonlashtirish.\n\n**Afzalliklari:**\n• Ekologik xavfsizlik\n• Xavfsizlik\n• Isbotlangan biologik barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanligi\n• Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)\n• Yuqori siqilishdagi mustahkamlik\n• Tasdiqlangan uzoq xizmat muddati\n\n**Normalar / standartlar:**\nТУ 5767-006-54349294-2014\nNazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\nSirt: silliq\nRang: to'q sariq",
      ru: "ПЕНОПЛЭКС ГЕО — высокоэффективный теплоизоляционный материал повышенной прочности (XPS последнего поколения), изготавливаемый из полистирола общего назначения.\n\n**Применение:**\nУниверсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции нагружаемых конструкций: фундаментов, полов, стилобатов, эксплуатируемых крыш, систем мощения и благоустройства территории.\n\n**Преимущества:**\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\nПоверхность: гладкая\nЦвет: оранжевый"
    },
    specs: [
      { 
        label: { 
          uz: "Siqilishdagi mustahkamlik 10% chiziqli deformatsiyada yoki siqilishdagi mustahkamlik chegarasi*, kamida", 
          ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии*, не менее" 
        }, 
        value: "300 кПа (30 т/м²)", 
        method: "ГОСТ EN 826" 
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4% hajm bo'yicha", 
        method: "ГОСТ EN 12087" 
      },
      { 
        label: { 
          uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", 
          ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" 
        }, 
        value: "0,034 Вт/(м⋅K)", 
        method: "ГОСТ 7076" 
      },
      { 
        label: { 
          uz: "A foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации А, не более" 
        }, 
        value: "0,035 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { 
          uz: "B foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации Б, не более" 
        }, 
        value: "0,036 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "40; 50; 60; 80; 100 мм", 
        method: "ГОСТ EN 823" 
      },
      { 
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С", 
        method: "ТУ" 
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4", 
        method: "ГОСТ 30244" 
      },
      { 
        label: { uz: "Alangalanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2", 
        method: "ГОСТ 30402" 
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Zaharlilik guruhi", ru: "Группа токсичности" }, 
        value: "Т2", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 4,43 кг CO₂ эквивалент", 
        method: "ISO 14025, BS EN 15804" 
      }
    ]
  },
  {
    id: "penoplex-45",
    name: "ПЕНОПЛЭКС 45",
    category: "penopleks",
    images: [penoplex45Package],
    description: {
      uz: "ПЕНОПЛЭКС 45 — yuqori mustahkamlikka ega samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.\n\n**Qo'llanilishi:**\nAyniqsa mustahkam issiqlik izolyatsiya plitalari turi, kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladi. Yuqori mustahkamlikdagi material yuklarga alohida talablar qo'yiladigan konstruksiyalarda, shu jumladan yo'l qurilishida qo'llash uchun tavsiya etiladi.\n\n**Afzalliklari:**\n• Ekologik xavfsizlik\n• Xavfsizlik\n• Isbotlangan biologik barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanligi\n• Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)\n• Yuqori siqilishdagi mustahkamlik\n• Tasdiqlangan uzoq xizmat muddati\n\n**Normalar / standartlar:**\nТУ 5767-006-56925804-2007\nNazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\nSirt: silliq\nRang: to'q sariq",
      ru: "ПЕНОПЛЭКС 45 — эффективный теплоизоляционный материал с высокой прочностью (XPS последнего поколения), изготавливаемый из полистирола общего назначения.\n\n**Применение:**\nОсобо прочный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Высокопрочный материал рекомендуется для применения в конструкциях, где предъявляются специальные требования к конструктиву по нагрузкам, в том числе для дорожного строительства.\n\n**Преимущества:**\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\nТУ 5767-006-56925804-2007\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\nПоверхность: гладкая\nЦвет: оранжевый"
    },
    specs: [
      { 
        label: { 
          uz: "Siqilishdagi mustahkamlik 10% chiziqli deformatsiyada yoki siqilishdagi mustahkamlik chegarasi*, kamida", 
          ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии*, не менее" 
        }, 
        value: "530 кПа (53 т/м²)", 
        method: "ГОСТ EN 826" 
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,2% hajm bo'yicha", 
        method: "ГОСТ EN 12087" 
      },
      { 
        label: { 
          uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", 
          ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" 
        }, 
        value: "0,034 Вт/(м⋅K)", 
        method: "ГОСТ 7076" 
      },
      { 
        label: { 
          uz: "A foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации А, не более" 
        }, 
        value: "0,035 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { 
          uz: "B foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации Б, не более" 
        }, 
        value: "0,036 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "600 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "2400 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "40; 50; 60; 80; 100 мм", 
        method: "ГОСТ EN 823" 
      },
      { 
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С", 
        method: "ТУ" 
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4", 
        method: "ГОСТ 30244" 
      },
      { 
        label: { uz: "Alangalanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2", 
        method: "ГОСТ 30402" 
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Zaharlilik guruhi", ru: "Группа токсичности" }, 
        value: "Т2", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 5,45 кг CO₂ эквивалент", 
        method: "ISO 14025, BS EN 15804" 
      }
    ]
  },
  {
    id: "penoplex-roof",
    name: "ПЕНОПЛЭКС КРОВЛЯ",
    category: "penopleks",
    images: [penoplexRoofPackage],
    description: {
      uz: "ПЕНОПЛЭКС КРОВЛЯ — yuqori mustahkamlikka ega yuqori samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.\n\n**Qo'llanilishi:**\nTomlar va yopiqlar. Har qanday turdagi tomlar uchun ekstruzion penopolistiroldan issiqlik izolyatsiya, jumladan, yong'inga qarshi xavfsizlik talablari yuqori bo'lgan tomlar.\n\n**Afzalliklari:**\n• Ekologik xavfsizlik\n• Xavfsizlik\n• Isbotlangan biologik barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanligi\n• Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)\n• Yuqori siqilishdagi mustahkamlik\n• Tasdiqlangan uzoq xizmat muddati\n\n**Normalar / standartlar:**\nТУ 5767-006-54349294-2014\nNazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\nSirt: silliq\nRang: to'q sariq",
      ru: "ПЕНОПЛЭКС КРОВЛЯ — высокоэффективный теплоизоляционный материал повышенной прочности (XPS последнего поколения), изготавливаемый из полистирола общего назначения.\n\n**Применение:**\nКрыши и покрытия. Теплоизоляция из экструзионного пенополистирола для кровель любых типов, в том числе кровель с повышенными требованиями по пожарной безопасности.\n\n**Преимущества:**\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\nПоверхность: гладкая\nЦвет: оранжевый"
    },
    specs: [
      { 
        label: { 
          uz: "30 mm qalinlik uchun siqilishdagi mustahkamlik 10% chiziqli deformatsiyada yoki siqilishdagi mustahkamlik chegarasi*, kamida", 
          ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщины 30 мм), не менее" 
        }, 
        value: "220 кПа (22 т/м²)", 
        method: "ГОСТ EN 826" 
      },
      { 
        label: { 
          uz: "≥ 40 mm qalinlik uchun siqilishdagi mustahkamlik 10% chiziqli deformatsiyada yoki siqilishdagi mustahkamlik chegarasi*, kamida", 
          ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщины ≥ 40 мм), не менее" 
        }, 
        value: "250 кПа (25 т/м²)", 
        method: "ГОСТ EN 826" 
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4% hajm bo'yicha", 
        method: "ГОСТ EN 12087" 
      },
      { 
        label: { 
          uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", 
          ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" 
        }, 
        value: "0,034 Вт/(м⋅K)", 
        method: "ГОСТ 7076" 
      },
      { 
        label: { uz: "А foydalanish sharoitida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "Б foydalanish sharoitida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { label: { uz: "Eni", ru: "Ширина" }, value: "585 мм", method: "ГОСТ EN 822" },
      { label: { uz: "Uzunligi", ru: "Длина" }, value: "1185 мм", method: "ГОСТ EN 822" },
      { label: { uz: "Qalinligi", ru: "Толщина" }, value: "30; 40; 50; 60; 80; 100 мм", method: "ГОСТ EN 823" },
      { label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, value: "-70 dan +75°C gacha", method: "ТУ" },
      { label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, value: "Г3", method: "ГОСТ 30244" },
      { label: { uz: "Alovlanish guruhi", ru: "Группа воспламеняемости" }, value: "В2", method: "ГОСТ 30402" },
      { label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, value: "Д3", method: "ГОСТ 12.1.044" },
      { label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, value: "Т2", method: "ГОСТ 12.1.044" },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "3,32 dan kg CO2 ekvivalent", 
        method: "ISO 14025, BS EN 15804" 
      }
    ]
  },
  {
    id: "penoplex-floor",
    name: "ПЕНОПЛЭКС УКЛОН",
    category: "penopleks",
    images: [penoplexFloorPackage],
    description: {
      uz: "ПЕНОПЛЭКС УКЛОН — yuqori samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS), umumiy maqsadli polistiroldan ishlab chiqarilgan.\n\n**Qo'llanilishi:**\nKasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan issiqlik izolyatsiya plitalari turi. Plitalar tekis tomlarda suv qabul qiluvchi voronkalarga qiyalik / qarshi qiyalik yaratish, shuningdek, parapet va ko'tarilgan konstruksiyalardan - zenith chiroqlari, ventilyatsiya shaftlaridan qo'shimcha suv oqizish uchun mo'ljallangan.\n\n**Afzalliklari:**\n• Ekologik xavfsizlik\n• Xavfsizlik\n• Isbotlangan biologik barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanligi\n• Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)\n• Yuqori siqilishdagi mustahkamlik\n• Tasdiqlangan uzoq xizmat muddati\n\n**Normalar / standartlar:**\nТУ 5767-006-54349294-2014\nNazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\nSirt: silliq\nRang: to'q sariq",
      ru: "ПЕНОПЛЭКС УКЛОН — высокоэффективный теплоизоляционный материал (XPS последнего поколения), изготавливаемый из полистирола общего назначения.\n\n**Применение:**\nТип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Плиты предназначены для создания на плоских кровлях уклона / контруклона к водоприемным воронкам, а также для дополнительного водоотведения от парапета и выступающих конструкций — зенитных фонарей, вентиляционных шахт.\n\n**Преимущества:**\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\nПоверхность: гладкая\nЦвет: оранжевый"
    },
    specs: [
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,4% hajm bo'yicha", 
        method: "ГОСТ EN 12087" 
      },
      { 
        label: { 
          uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°C da, ko'pi bilan", 
          ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" 
        }, 
        value: "0,034 Вт/(м⋅K)", 
        method: "ГОСТ 7076" 
      },
      { 
        label: { 
          uz: "A foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации А, не более" 
        }, 
        value: "0,035 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { 
          uz: "B foydalanish sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", 
          ru: "Теплопроводность при условиях эксплуатации Б, не более" 
        }, 
        value: "0,036 Вт/(м⋅K)", 
        method: "ГОСТ Р 59985" 
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм", 
        method: "ГОСТ EN 822" 
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "10-30; 30-50 мм", 
        method: "ГОСТ EN 823" 
      },
      { 
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С", 
        method: "ТУ" 
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4", 
        method: "ГОСТ 30244" 
      },
      { 
        label: { uz: "Alangalanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2", 
        method: "ГОСТ 30402" 
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3", 
        method: "ГОСТ 12.1.044" 
      },
      { 
        label: { uz: "Zaharlilik guruhi", ru: "Группа токсичности" }, 
        value: "Т2", 
        method: "ГОСТ 12.1.044" 
      }
    ]
  },
  {
    id: "penoplex-segments",
    name: "ПЕНОПЛЭКС СЕГМЕНТЫ",
    category: "penopleks",
    images: [penoplexSegments],
    description: {
      uz: "Issiqlik izolyatsiya segmentlari ПЕНОПЛЭКС — bu ishonchli, mustahkam va uzoq xizmat qiladigan material bo'lib, quvur liniyalari, gaz-neft quvurlari uchun issiqlik izolyatsiyalash uchun maxsus ishlab chiqilgan, shu jumladan Uzoq Shimol sharoitlarida. Quvur liniyalarini issiqlik izolyatsiyalashning asosiy maqsadi maksimal xavfsizlik, ekspluatatsiya samaradorligi va ishonchliligini ta'minlash, tashiladigan modda (neft, gaz) va atrof-muhit o'rtasidagi issiqlik o'zaro ta'siri intensivligini kamaytirish.\n\nIssiqlik izolyatsiya segmentlari ПЕНОПЛЭКС past issiqlik o'tkazuvchanlik koeffitsiyenti, minimal suv shimishi, uzoq ekspluatatsiya muddati bilan ajralib turadi. Ekstruzion penopolistirol ПЕНОПЛЭКС — ekologik toza material, tabiatan kimyoviy inert, chirishga moyil emas. Penopolistirol ПЕНОПЛЭКС mahsulotlari qurilishda qo'llaniladigan ko'pchilik materiallarga va moddalarga nisbatan etarlicha yuqori kimyoviy barqarorlikka ega: bitum aralashmalari, ohak, tsement, erituvchi o'z ichiga olmagan yelimlar, bo'yoqlar, kislotalar va ishqorlar. Ekstruzion penopolistirol ПЕНОПЛЭКС 35 va 45 tipidagi segmentlari ishlab chiqariladi.\n\n**Normalar / standartlar:**\n\nSegmentlar va yarim silindrlar TU 5767-003-54349294-2013 bo'yicha ishlab chiqariladi.\n\n**Qo'llanish sohalari:**\n\nIssiqlik izolyatsiya segmentlari ПЕНОПЛЭКС 57÷1420 mm tashqi diametrli quvur liniyalarini issiqlik izolyatsiyalash uchun qo'llaniladi, tashiladigan moddalarning harorati -40°C dan 75°C gacha, ochiq havoda, xonalarda, o'tib bo'lmaydigan kanallarda joylashgan, shuningdek kanalsiz usulda o'tkaziladigan, shu jumladan abadiy muzlagan tuproqli hududlarda.\n\nTexnologik quvur liniyalari va +115°C gacha haroratli yer usti quvur liniyalarini issiqlik izolyatsiyalash uchun mahsulotlarni qo'llash, tolali haroratga chidamli materiallardan oraliq (ichki) himoya qatlami bilan ruxsat etiladi. Ichki himoya qatlami va yarim silindrlar yoki ПЕНОПЛЭКС segmentlaridan tashqi issiqlik izolyatsiya qatlami chegarasidagi harorat 75°C dan oshmasligi kerak.\n\n35 tipidagi ПЕНОПЛЭКС segmentlari kanalsiz usuldan tashqari har qanday usulda o'tkaziladigan quvur liniyalarini issiqlik izolyatsiyalash uchun tavsiya etiladi.\n\nTuproqda kanalsiz o'tkazishda, issiqlik izolyatsiya materialining siqilishga yuqori mustahkamligi talab qilinadigan joylarda 45 tipidagi mahsulotlardan foydalanish tavsiya etiladi.\n\nPENOPLEKS mahsulotlari bilan issiqlik izolyatsiyalangan yer osti kanalsiz quvur liniyalari amaldagi me'yoriy hujjatlarga muvofiq ishonchli korroziyaga qarshi qoplamaga ega bo'lishi kerak.\n\nOchiq havoda joylashgan quvur liniyalari konstruksiyalaridagi ПЕНОПЛЭКС segmentlari qoplama qatlami bilan ultrabinafsha nurlanish ta'siridan himoyalangan bo'lishi kerak.",
      ru: "Теплоизоляционные сегменты ПЕНОПЛЭКС — это надежный, прочный и долговечный материал, специально разработанный для теплоизоляции трубопроводов, газо-нефтепроводов, в том числе в условиях Крайнего Севера. Основным назначением теплоизоляции трубопроводов является обеспечение максимальной безопасности, эксплуатационной эффективности и надежности, снижение интенсивности теплового взаимодействия между транспортируемым веществом (нефтью, газом) и окружающей средой.\n\nТеплоизоляционные сегменты ПЕНОПЛЭКС отличаются низким коэффициентом теплопроводности, минимальным водопоглощением, продолжительным сроком эксплуатации. Экструзионный пенополистирол ПЕНОПЛЭКС — экологически чистый материал, по природе химически инертный, не подвержен гниению. Изделия из пенополистирола ПЕНОПЛЭКС обладают достаточно высокой химической стойкостью по отношению к большинству используемых в строительстве материалов и веществ: битумным смесям, извести, цементу, не содержащим растворителей клеям, краскам, кислотам и щелочам. Выпускаются сегменты из экструзионного пенополистирола ПЕНОПЛЭКС типов 35 и 45.\n\n**Нормы / стандарты:**\n\nСегменты и полуцилиндры производятся по ТУ 5767-003-54349294-2013.\n\n**Области применения:**\n\nТеплоизоляционные сегменты ПЕНОПЛЭКС применяются для теплоизоляции трубопроводов наружным диаметром 57÷1420 мм с температурой транспортируемых веществ от -40°С до 75°С, расположенных на открытом воздухе, в помещении, непроходных каналах, а также прокладываемых бесканальным способом, в том числе в районах с вечномерзлыми грунтами.\n\nДопускается применение изделий для теплоизоляции технологических трубопроводов и трубопроводов надземной прокладки с температурой до плюс 115°С с устройством промежуточного (внутреннего) предохранительного слоя из волокнистых температуростойких материалов. Температура на границе внутреннего предохранительного слоя и наружного теплоизоляционного слоя из полуцилиндров или сегментов ПЕНОПЛЭКС не должна превышать 75°С.\n\nСегменты ПЕНОПЛЭКС типа 35 рекомендуется применять для теплоизоляции трубопроводов, прокладываемых любым способом, кроме бесканального.\n\nПри бесканальной прокладке трубопроводов в грунте, где требуется высокая прочность теплоизоляционного материала на сжатие, рекомендуется использовать изделия типа 45.\n\nТрубопроводы подземной бесканальной прокладки, теплоизолируемые изделиями ПЕНОПЛЭКС, должны иметь надежное антикоррозионное покрытие в соответствии с действующей нормативной документацией.\n\nСегменты ПЕНОПЛЭКС в конструкциях трубопроводов, расположенных на открытом воздухе, должны быть защищены от воздействия ультрафиолетового излучения покровным слоем."
    },
    specs: [
      {
        label: { uz: "Nomi", ru: "Наименование" },
        value: "Тип 35 | Тип 45"
      },
      {
        label: { uz: "Siqilishdagi mustahkamlik, kPa, kamida", ru: "Прочность на сжатие, кПа, не менее" },
        value: "250 | 500"
      },
      {
        label: { uz: "24 soat ichida suv shimishi, hajm bo'yicha %, ko'pi bilan", ru: "Водопоглощение за 24 часа, % по объему, не более" },
        value: "0,4 | 0,2"
      },
      {
        label: { uz: "(10±0,3) °C da issiqlik o'tkazuvchanlik, Vt/(m⋅K), ko'pi bilan", ru: "Теплопроводность при (10±0,3) °С, Вт/(м⋅K), не более" },
        value: "0,034 | 0,034"
      },
      {
        label: { uz: "(25±5) °C da issiqlik o'tkazuvchanlik, Vt/(m⋅K), ko'pi bilan", ru: "Теплопроводность при (25±5) °С, Вт/(м⋅K), не более" },
        value: "0,035 | 0,035"
      },
      {
        label: { uz: "Bug' o'tkazuvchanlik koeffitsiyenti, mg/(m⋅soat⋅Pa)", ru: "Коэффициент паропроницаемости, мг/(м⋅ч⋅Па)" },
        value: "0,005 | 0,005"
      },
      {
        label: { uz: "Qo'llanish harorati, °C", ru: "Температура применения, °С" },
        value: "от -70 до 75 | от -70 до 75"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "Г4 | Г4"
      }
    ]
  },
  {
    id: "penoplex-facade",
    name: "ПЕНОПЛЭКС ФАСАД",
    category: "penopleks",
    images: [penoplexWall],
    description: {
      uz: "ПЕНОПЛЭКС ФАСАД — umumiy maqsadli polistiroldan tayyorlangan yuqori samarali issiqlik izolyatsiya materiali (so'nggi avlod XPS). Professional sanoat va fuqaro qurilishi segmentida ishlatiladigan maxsus issiqlik izolyatsiya plitalari turi. Platalar gips yoki kafel fasadini qoplash uchun ishlatiladi. Plitalar frezerlangan shilimshiq yuzaga ega, bu esa gips-yelimlash aralashmalarining materialga yopishish qobiliyatini sezilarli darajada yaxshilaydi.",
      ru: "ПЕНОПЛЭКС ФАСАД — высокоэффективный теплоизоляционный материал (XPS последнего поколения), изготавливаемый из полистирола общего назначения. Специальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Плиты разработаны для применения под штукатурную или плиточную отделку фасада. Плиты имеют фрезерованную шероховатую поверхность, что существенно улучшает адгезию штукатурно-клеевых составов к поверхности материала."
    },
    specs: [
      { 
        label: { uz: "30 mm qalinlik uchun 10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщины 30 мм), не менее" }, 
        value: "130 (13) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "≥ 40 mm qalinlik uchun 10% chiziqli deformatsiyada siqilishdagi mustahkamlik yoki siqilishdagi mustahkamlik chegarasi*, kamida", ru: "Прочность на сжатие при 10% линейной деформации или предел прочности при сжатии* (для толщин ≥ 40 мм), не менее" }, 
        value: "150 (15) кПа (т/м²)",
        method: "ГОСТ EN 826"
      },
      { 
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" }, 
        value: "0,6 % по объему",
        method: "ГОСТ EN 12087"
      },
      { 
        label: { uz: "E'lon qilingan issiqlik o'tkazuvchanligi λD (10±0,3)°С da, ko'pi bilan", ru: "Декларируемая теплопроводность λD при (10±0,3)°С, не более" }, 
        value: "0,034 Вт/(м⋅K)",
        method: "ГОСТ 7076"
      },
      { 
        label: { uz: "A ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации А, не более" }, 
        value: "0,035 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "B ekspluatatsiya sharoitlarida issiqlik o'tkazuvchanligi, ko'pi bilan", ru: "Теплопроводность при условиях эксплуатации Б, не более" }, 
        value: "0,036 Вт/(м⋅K)",
        method: "ГОСТ Р 59985"
      },
      { 
        label: { uz: "Eni", ru: "Ширина" }, 
        value: "585 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Uzunligi", ru: "Длина" }, 
        value: "1185 мм",
        method: "ГОСТ EN 822"
      },
      { 
        label: { uz: "Qalinligi", ru: "Толщина" }, 
        value: "30; 40; 50; 60; 80; 100; 120; 150 мм",
        method: "ГОСТ EN 823"
      },
      { 
        label: { uz: "70°C harorat va 90% nisbiy havo namligida o'lcham barqarorligi", ru: "Стабильность размеров при температуре 70°С и относительной влажности воздуха 90%" }, 
        value: "DS(70,90)",
        method: "ГОСТ EN 1604"
      },
      { 
        label: { uz: "Ekspluatatsiya harorati", ru: "Температура эксплуатации" }, 
        value: "от -70 до +75 °С",
        method: "ТУ"
      },
      { 
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" }, 
        value: "Г4",
        method: "ГОСТ 30244"
      },
      { 
        label: { uz: "Alovlanish guruhi", ru: "Группа воспламеняемости" }, 
        value: "В2",
        method: "ГОСТ 30402"
      },
      { 
        label: { uz: "Tutun hosil qilish qobiliyati guruhi", ru: "Группа дымообразующей способности" }, 
        value: "Д3",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Toksiklik guruhi", ru: "Группа токсичности" }, 
        value: "Т2",
        method: "ГОСТ 12.1.044"
      },
      { 
        label: { uz: "Global isish potentsiali**", ru: "Потенциал глобального потепления**" }, 
        value: "от 2,22 кг CO₂ эквивалент",
        method: "ISO 14025 BS EN 15804"
      }
    ]
  }
];

export const categories = [
  {
    id: "hydro-plast",
    name: { uz: "Hydro Plast", ru: "Hydro Plast" },
    description: {
      uz: "Yuqori sifatli PPR quvurlar va fitinglar. Ishonchli suv ta'minoti tizimlari uchun.",
      ru: "Высококачественные PPR трубы и фитинги. Для надежных систем водоснабжения."
    }
  },
  {
    id: "shimge",
    name: { uz: "Shimge", ru: "Shimge" },
    description: {
      uz: "Professional nasos uskunalari. Suv ta'minoti va havzalar uchun kuchli yechimlar.",
      ru: "Профессиональное насосное оборудование. Мощные решения для водоснабжения и бассейнов."
    }
  },
  {
    id: "penopleks",
    name: { uz: "Penopleks", ru: "Пеноплэкс" },
    description: {
      uz: "Zamonaviy issiqlik izolyatsiya materiallari. Energiya tejash va qulay muhit.",
      ru: "Современные теплоизоляционные материалы. Энергосбережение и комфорт."
    }
  }
];
