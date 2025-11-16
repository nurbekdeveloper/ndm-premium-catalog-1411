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
      uz: "Профессионал бир компонентли полиуретан елим-кўпик PENOPLEX FASTFIX STANDARD пенополистирол плиталарни ва бошқа иссиқлик изоляция турларини кўпгина қурилиш материаллари ва конструкциялари билан тез ва мустаҳкам елимлаш учун қўлланилади (тефлон, полиэтилен, фолга қопламалар, силикон қопламалар ва муз қопламлари бундан мустасно).\n\nАэрозол қадоқдаги бир компонентли полиуретан елим-кўпик PENOPLEX FASTFIX STANDARD монтаж кўпиги учун пистолет билан ишлаш учун мўлжалланган.\n\nҚулай аэрозол қадоқ ва елим-кўпикни қўллаш усули тайёргарлик ишларини минималлаштиради ва монтаж вақтини сезиларли қисқартирadi. PENOPLEX FASTFIX STANDARD қулай ва қўллашда оддий. Елим-кўпикдан фойдаланиш махсус кўникмаларни талаб қилмайди, қадоқдаги кўрсатма билан танишиш етарли.\n\nАфзалликлар:\n• Елим-кўпик чиқиши 50 м.п.гача (змейка диаметри 30 мм)\n• Қўллаш ҳарорати диапазони – +5°C дан +40°C гача (баллон ҳарорати 25°C)\n• Эксплуатация ҳарорати диапазони – -50°C дан +90°C гача\n• Тез полимерлашади — юза пардаси 10 дақиқада шаклланади\n• Махсулотларни кейинги ишлаш вақти (бурғулаш, дублировка, бўяш) – 1,5 соат (+20°C ҳарорат ва 65% нисбий намликда)\n• Полимерлашувдан кейин – кимёвий нейтрал, заҳарли бирикмалар чиқармайди\n• Мог'ор ва замбуруққа чидамли",
      ru: "Профессиональный однокомпонентный полиуретановый клeй-пeнa PENOPLEX FASTFIX STANDARD применяется для быстрого и прочного склеивания пенополистирольных плит и других видов утеплителей c бoльшинcтвoм строительных материалов и конструкций за исключением изделий из тефлона (фторопласта), полиэтилена, фольгированных покрытий, силиконовых покрытий и поверхностей, покрытых льдом.\n\nОднокомпонентный полиуретановый клей-пена в аэрозольной упаковке PENOPLEX FASTFIX STANDARD предназначен для работы с применением пистолета для монтажной пены.\n\nУдобная аэрозольная упаковка и метод нанесения клей-пены минимизируют подготовительные работы и значительно сокращают время монтажа. PENOPLEX FASTFIX STANDARD удобен и прост в применении. Использование клей-пены не требует специальных навыков, достаточно ознакомиться с инструкцией на упаковке.\n\nПреимущества:\n• Выход клея-пены до 50 п.м. (при диаметре змейки 30 мм)\n• Температурный диапазон применения – от +5 до +40 °С (при температуре баллона 25 °С)\n• Температурный диапазон эксплуатации – от -50 до +90 °С\n• Быстро полимеризуется — образование поверхностной пленки до 10 минут\n• Время дальнейшей обработки изделий (сверление, дублирование, окраска) – 1,5 часа (при температуре +20°С и относительной влажности 65%)\n• После полимеризации — химически нейтрален, не выделяет ядовитых соединений\n• Устойчив к плесени и грибам"
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
      {
        label: { uz: "PLASTFOIL CLASSIC - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL CLASSIC - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Armaturalash turi", ru: "PLASTFOIL CLASSIC - Тип армирования" },
        value: "Синтетическая сетка"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Egilish, °C", ru: "PLASTFOIL CLASSIC - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-50 (для 1,2 мм) / -45"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Suv o'tkazmasligi", ru: "PLASTFOIL CLASSIC - Водонепроницаемость" },
        value: "Соответствует"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Suv shimishi, %", ru: "PLASTFOIL CLASSIC - Водопоглощение, %" },
        value: "0,2"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Tortishish mustahkamligi, N/50mm", ru: "PLASTFOIL CLASSIC - Прочность при растяжении, Н/50 мм" },
        value: "1200/1000 (вдоль/поперек)"
      },
      {
        label: { uz: "PLASTFOIL CLASSIC - Yonuvchanlik guruhi", ru: "PLASTFOIL CLASSIC - Группа горючести" },
        value: "Г2"
      },
      {
        label: { uz: "PLASTFOIL POLAR - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL POLAR - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "PLASTFOIL POLAR - Egilish, °C", ru: "PLASTFOIL POLAR - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-55"
      },
      {
        label: { uz: "PLASTFOIL POLAR - Tortishish mustahkamligi, N/50mm", ru: "PLASTFOIL POLAR - Прочность при растяжении, Н/50 мм" },
        value: "1100/900 (вдоль/поперек)"
      },
      {
        label: { uz: "PLASTFOIL FL - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL FL - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000"
      },
      {
        label: { uz: "PLASTFOIL FL - Yonuvchanlik guruhi", ru: "PLASTFOIL FL - Группа горючести" },
        value: "Г1"
      },
      {
        label: { uz: "PLASTFOIL ECO - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL ECO - Линейные размеры рулона, мм" },
        value: "1,2×2100×25000 / 1,5×2100×20000 / 1,8×2100×15000 / 2,0×2100×15000"
      },
      {
        label: { uz: "PLASTFOIL ECO - Egilish, °C", ru: "PLASTFOIL ECO - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-45"
      },
      {
        label: { uz: "PLASTFOIL LAY - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL LAY - Линейные размеры рулона, мм" },
        value: "1,5×2100×20000"
      },
      {
        label: { uz: "PLASTFOIL LAY - Egilish, °C", ru: "PLASTFOIL LAY - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-40"
      },
      {
        label: { uz: "PLASTFOIL ART - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL ART - Линейные размеры рулона, мм" },
        value: "1,5×2000×10000"
      },
      {
        label: { uz: "PLASTFOIL ART - Armaturalash turi", ru: "PLASTFOIL ART - Тип армирования" },
        value: "Без армирования"
      },
      {
        label: { uz: "PLASTFOIL ART - Egilish, °C", ru: "PLASTFOIL ART - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-55"
      },
      {
        label: { uz: "PLASTFOIL ART - Cho'zilish, %", ru: "PLASTFOIL ART - Удлинение при максимальной нагрузке" },
        value: "250/250"
      },
      {
        label: { uz: "PLASTFOIL GEO - Chiziqli o'lchamlar, mm", ru: "PLASTFOIL GEO - Линейные размеры рулона, мм" },
        value: "1,5×2000×20000 / 2,0×2000×20000"
      },
      {
        label: { uz: "PLASTFOIL GEO - Armaturalash turi", ru: "PLASTFOIL GEO - Тип армирования" },
        value: "Без армирования"
      },
      {
        label: { uz: "PLASTFOIL GEO - Egilish, °C", ru: "PLASTFOIL GEO - Гибкость на брусе радиусом 5 мм, °C" },
        value: "-45"
      },
      {
        label: { uz: "PLASTFOIL GEO - Cho'zilish, %", ru: "PLASTFOIL GEO - Удлинение при максимальной нагрузке" },
        value: "300/300"
      },
      {
        label: { uz: "Umumiy - Suv o'tkazmasligi", ru: "Общие - Водонепроницаемость" },
        value: "Соответствует"
      },
      {
        label: { uz: "Umumiy - Payvand choki mustahkamligi, N/50mm", ru: "Общие - Прочность сварного шва на разрыв, Н/50 мм" },
        value: "600-700"
      },
      {
        label: { uz: "Qo'llanish sohasi", ru: "Область применения" },
        value: "Крыши и покрытия, Фундаменты, Благоустройство, Объекты транспортной инфраструктуры, трубопроводы"
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
