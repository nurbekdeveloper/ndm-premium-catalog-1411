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

// Product images - Penopleks
import penoplexComfort from "@/assets/products/penoplex-comfort.png";

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
  // Shimge - Circulation Pumps (only 1 product)
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
  // Penopleks - Insulation Materials
  {
    id: "penoplex-comfort",
    name: "ПЕНОПЛЭКС КОМФОРТ",
    category: "penopleks",
    images: [penoplexComfort],
    description: {
      uz: "ПЕНОПЛЭКС КОМФОРТ — yuqori samarali issiqlik izolyatsiya materiali (XPS oxirgi avlod), ekstruziya usulida umumiy maqsadli polistiroldan ishlab chiqarilgan. Universal tur, xususiy uy qurilishi uchun mo'ljallangan. Balkon va lodjiyalar, devorlar, qiyshiq tomlar, yassi foydalanilmaydigan tom yopiqlar, tsokol izolyatsiyasi uchun tavsiya etiladi.",
      ru: "ПЕНОПЛЭКС КОМФОРТ — высокоэффективный теплоизоляционный материал (XPS последнего поколения), изготавливаемый методом экструзии из полистирола общего назначения. Универсальный тип, предназначенный для частного домостроения. Рекомендуется для применения в строительных конструкциях: для теплоизоляции цоколей, стен, скатных крыш, плоских неэксплуатируемых кровель, балконов и лоджий."
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
  // Kitchen Hoods (only 1 product)
  {
    id: "aerolux-silent-90",
    name: "AeroLux SilentTouch 90",
    category: "penopleks",
    images: [aeroluxSilent90, aeroluxSilent90Detail, aeroluxSilent90Side, aeroluxSilent90Installed],
    description: {
      uz: "Sokin ishlash va zamonaviy dizayn. LED yoritgich bilan.",
      ru: "Тихая работа и стильный дизайн. Со светодиодной подсветкой."
    },
    specs: [
      { label: { uz: "Kenglik", ru: "Ширина" }, value: "90cm" },
      { label: { uz: "Filtr", ru: "Фильтр" }, value: "Carbon" },
      { label: { uz: "Shovqin", ru: "Шум" }, value: "42dB" },
      { label: { uz: "Yoritish", ru: "Освещение" }, value: "LED" },
      { label: { uz: "Boshqarish", ru: "Управление" }, value: "Touch" }
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
