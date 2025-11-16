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
