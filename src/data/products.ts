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
import penoplexBlock from "@/assets/products/penoplex-block.png";
import penoplexTrak from "@/assets/products/penoplex-trak.png";
import proplugScrew from "@/assets/products/proplug-screw.png";
import proplugDowel from "@/assets/products/proplug-dowel.png";
import proplugAnchorSleeve from "@/assets/products/proplug-anchor-sleeve.png";
import plastfoilStepway from "@/assets/products/plastfoil-stepway.png";
import plastfoilStepwayPvc from "@/assets/products/plastfoil-stepway-pvc.png";
import plastfoilAluminumRail1 from "@/assets/products/plastfoil-aluminum-rail-1.png";
import plastfoilAluminumRail2 from "@/assets/products/plastfoil-aluminum-rail-2.png";
import plastfoilUniversalTie from "@/assets/products/plastfoil-universal-tie.png";
import plastfoilRoofWasher from "@/assets/products/plastfoil-roof-washer.png";
import plastfoilPvcCleaner from "@/assets/products/plastfoil-pvc-cleaner.png";
import plastfoilPvcActivator from "@/assets/products/plastfoil-pvc-activator.png";
import plastfoilRoofAerator from "@/assets/products/plastfoil-roof-aerator.png";
import plastfoilTestFix from "@/assets/products/plastfoil-test-fix.png";
import plastguardTape from "@/assets/products/plastguard-tape.png";
import penoplexFastmix from "@/assets/products/penoplex-fastmix.png";
import penoplexFastmixScreed from "@/assets/products/penoplex-fastmix-screed.png";
import penoplexXpsUnderlay from "@/assets/products/penoplex-xps-underlay.png";
import plastguardMembraneRoll from "@/assets/products/plastguard-membrane-roll.png";
import penoplexFastmixFacadePro from "@/assets/products/penoplex-fastmix-facade-pro.png";
import penoplexFastmixFacade from "@/assets/products/penoplex-fastmix-facade.png";
import penoplexFastfix from "@/assets/products/penoplex-fastfix.png";

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
    id: "penoplex-block",
    name: "ПЕНОПЛЭКС БЛОК",
    category: "penopleks",
    images: [penoplexBlock],
    description: {
      uz: "ПЕНОПЛЭКС БЛОК — bu ishonchli, mustahkam va uzoq xizmat qiladigan material bo'lib, yo'l qurilishida keng qo'llaniladi. Penopolistirol ПЕНОПЛЭКС plitalarning ma'lum miqdorini press ostida yopishtirish yo'li bilan ishlab chiqariladi. Bloklar o'ralmasdan yoki polietilen plyonkaga o'ralib yetkazib beriladi.\n\nHar bir blokning old tomonida (yoki tortsidagi qirrida) ishlab chiqaruvchi haqida ma'lumot, mahsulot nomi va partiya raqami, shuningdek ishlab chiqarish sanasi va TU bo'lgan yorliq mavjud.\n\n**Normalar / standartlar:**\n\nПЕНОПЛЭКС БЛОК ТУ 5767-002-54349294-2012 bo'yicha ishlab chiqariladi.\n\n**Qo'llanish sohalari:**\n\nПЕНОПЛЭКС БЛОК avtomobil va temir yo'llar, ko'priklar, yo'l o'tishlari va beqaror tuproqlardagi (qirg'oq hududlari, botqoq joylar, yer osti suvlari yuqori bo'lgan hududlar) boshqa muhandislik inshootlarini qurish jarayonida faol qo'llaniladi.\n\nYengil, mustahkam va uzoq xizmat qiladigan ekstruzion penopolistiroldan tayyorlangan bloklar qurilish ishlari jarayonida yo'l to'ldirishning asosiy qismini almashtiruvchi \"yengil to'ldirish\" qurilishi uchun material bo'lib xizmat qiladi. Ushbu texnologiya zaif poydevorga, shuningdek to'ldirish ostida qurilgan inshootlarga yukni sezilarli darajada kamaytirish imkonini beradi.\n\nПЕНОПЛЭКС БЛОК ko'p qatlamli devor panellari va tosiqlar konstruksiyalarini tayyorlashda ham qo'llanilishi mumkin.",
      ru: "ПЕНОПЛЭКС БЛОК — это надежный, прочный и долговечный материал, который находит широкое применение в дорожном строительстве. Изготавливается путем склеивания под прессом определенного количества пенополистирольных плит ПЕНОПЛЭКС. Блоки поставляются в неупакованном виде, либо упаковывают в полиэтиленовую пленку.\n\nНа лицевой стороне (либо на торцевой грани) каждого блока находится этикетка, которая содержит информацию об изготовителе, наименование продукта и номер партии, а также дату изготовления и ТУ.\n\n**Нормы / стандарты:**\n\nПЕНОПЛЭКС БЛОК производятся по ТУ 5767-002-54349294-2012.\n\n**Области применения:**\n\nПЕНОПЛЭКС БЛОК активно применяется в ходе строительства автомобильных и железных дорог, мостов, путепроводов и других инженерных сооружений на нестабильных грунтах (прибрежные районы, болотистая местность, территории с высоким уровнем залегания грунтовых вод).\n\nЛегкие, прочные и долговечные блоки из экструдированного пенополистирола служат материалом для сооружения «легкой насыпи», которая замещает основную часть дорожной насыпи в ходе строительных работ. Данная технология позволяет значительно уменьшить нагрузку на слабое основание, а также на сооружения, построенные под насыпью.\n\nПЕНОПЛЭКС БЛОК также могут применяться при изготовлении многослойных стеновых панелей и ограждающих конструкций."
    },
    specs: [
      {
        label: { uz: "Qalinligi", ru: "Толщина" },
        value: "от 120 до 1 000 мм"
      },
      {
        label: { uz: "Eni", ru: "Ширина" },
        value: "600 мм"
      },
      {
        label: { uz: "Uzunligi", ru: "Длина" },
        value: "от 1 200 до 3 000 мм"
      }
    ]
  },
  {
    id: "penoplex-trak",
    name: "ПЕНОПЛЭКС ТРАК",
    category: "penopleks",
    images: [penoplexTrak],
    description: {
      uz: "Termoizolyatsion plitalar ПЕНОПЛЭКС® ТРАК — izotermik furgonlar, modulli vagonchalar va boshqa inshootlarni qoplashda foydalanish uchun frezalanish va bo'shliqlar bilan maxsus ishlab chiqilgan plitalar.\n\n**Tavsif:**\n\nТерmoizolyatsion plitalar ПЕНОПЛЭКС ТРАК izotermik furgonlarni qoplashda foydalanish uchun korxonalarga yetkazib beriladi. Plitalar yonuvchanlikka, o'lchamlar aniqligi va geometriyasiga yuqori talablar qo'yilgan, shuningdek yopishqoq moddalar sarfini optimallashtiruvchi maxsus frezerovkaga ega.\n\n**Afzalliklari:**\n\n• O'lchamlarni nazorat qilishning yuqori darajasi\n• Barcha sanitariya-gigiena talablarini bajarish\n• Yopishqoq mahsulotlar sarfini minimallashtirish\n• Yonuvchanlik bo'yicha yuqori talablar\n• Deyarli nol suv shimishi (yopiq mustaqil hujayralardan bir xil tuzilma)\n• Siqishda yuqori mustahkamlik\n• Tasdiqlangan bardoshliligi\n\n**Normalar / standartlar:**\n\nТУ 5767-006-54349294-2014\nIshlab chiqarishni nazorat qilish va baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\n\nYuza: frezalangan/uzunlamasına chuqurchalar bilan frezalangan\nRang: oq yoki ko'k\n\n**Qadoqlash to'g'risida ma'lumot:**\n\nПЕНОПЛЭКС plitalari termo-siqiluvchi UV-stabillashtirilgan plyonkaga o'raladi. Ishlab chiqarish korxonalariga yetkazib beriladi. Yetkazib berish shartlarini aniqlashtirish uchun ПЕНОПЛЭКС ning Sendvichlar va JBI bo'limiga murojaat qiling.",
      ru: "Теплоизоляционные плиты ПЕНОПЛЭКС® ТРАК — специально разработанные плиты с фрезеровкой и канавками для использования при обшивке изотермических фургонов, модульных вагончиков и других сооружений.\n\n**Описание:**\n\nТеплоизоляционные плиты ПЕНОПЛЭКС ТРАК поставляются на предприятия для использования в обшивке изотермических фургонов. У плит повышены требования к горючести, точности габаритов и геометрии, а также специальная фрезеровка, позволяющая оптимизировать расход клеевых составов.\n\n**Преимущества:**\n\n• Высокий уровень контроля габаритов\n• Выполнение всех санитарно-гигиенических требований\n• Минимизация расхода клеевых продуктов\n• Повышенные требования по горючести\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\n\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\n\nПоверхность: фрезерованная/фрезерованная с продольными канавками\nЦвет: белый или голубой\n\n**Сведения об упаковке:**\n\nПлиты ПЕНОПЛЭКС упаковывают в термоусадочную УФ-стабилизированную пленку. Поставляются на производственные предприятия. Для уточнения условий поставки обращайтесь в отдел Сэндвичи и ЖБИ ПЕНОПЛЭКС."
    },
    specs: [
      {
        label: { uz: "10% chiziqli deformatsiyada siqilish mustahkamligi (ТРАК 200)", ru: "Прочность на сжатие при 10% линейной деформации (ТРАК 200)" },
        value: "200 кПа",
        method: "GOST EN 826"
      },
      {
        label: { uz: "10% chiziqli deformatsiyada siqilish mustahkamligi (ТРАК 250)", ru: "Прочность на сжатие при 10% линейной деформации (ТРАК 250)" },
        value: "250 кПа",
        method: "GOST EN 826"
      },
      {
        label: { uz: "10% chiziqli deformatsiyada siqilish mustahkamligi (ТРАК 400)", ru: "Прочность на сжатие при 10% линейной деформации (ТРАК 400)" },
        value: "400 кПа",
        method: "GOST EN 826"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "Г3",
        method: "GOST 30244"
      },
      {
        label: { uz: "24 soatda suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" },
        value: "0,6% hajm bo'yicha | 0,6% по объему",
        method: "GOST EN 12087"
      },
      {
        label: { uz: "Issiqlik o'tkazuvchanligi (10±0,3)°C da, ko'pi bilan", ru: "Теплопроводность при (10±0,3)°C, не более" },
        value: "0,034 Вт/(м·К)",
        method: "GOST 7076"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "от -70 до +75°С"
      }
    ]
  },
  {
    id: "penoplex-osnova-jbi",
    name: "ПЕНОПЛЭКС ОСНОВА (ЖБИ)",
    category: "penopleks",
    images: [penoplexOsnova],
    description: {
      uz: "ПЕНОПЛЭКС ОСНОВА (ЖБИ) — sanoat sektori uchun plitalar turi.\n\n**Tavsif:**\n\nПЕНОПЛЭКС ОСНОВА (ЖБИ) uch qatlamli temir-beton buyumlarini ishlab chiqarishda qo'llaniladi.\n\n**Qo'llanish:**\n\nUch qatlamli temir-beton buyumlarini ishlab chiqarishda qo'llaniladi.\n\n**Afzalliklari:**\n\n• Ekologik jihatdan xavfsizligi\n• Xavfsizlik\n• Isbotlangan bio-barqarorlik\n• O'zgarmas past issiqlik o'tkazuvchanlik\n• Deyarli nol suv shimishi (yopiq mustaqil hujayralardan bir xil tuzilma)\n• Siqishda yuqori mustahkamlik\n• Tasdiqlangan bardoshliligi\n\n**Normalar / standartlar:**\n\nТУ 5767-006-54349294-2014\nIshlab chiqarishni nazorat qilish va baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi.\n\n**Tashqi ko'rinish / rang:**\n\nYuza: silliq\nRang: to'q sariq\nChekka turi: to'g'ri\n\n**Qadoqlash to'g'risida ma'lumot:**\n\nПЕНОПЛЭКС plitalari termo-siqiluvchi UV-stabillashtirilgan plyonkaga o'raladi.\n\n**Qo'llanish sohalari:**\n\nUch qatlamli temir-beton buyumlar",
      ru: "ПЕНОПЛЭКС ОСНОВА (ЖБИ) — тип плит для индустриального сектора.\n\n**Описание:**\n\nПЕНОПЛЭКС ОСНОВА (ЖБИ) применяется в производстве трехслойных железобетонных изделий.\n\n**Применение:**\n\nПрименяется в производстве трехслойных железобетонных изделий.\n\n**Преимущества:**\n\n• Экологичность\n• Безопасность\n• Доказанная биостойкость\n• Неизменно низкая теплопроводность\n• Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)\n• Высокая прочность на сжатие\n• Подтвержденная долговечность\n\n**Нормы / стандарты:**\n\nТУ 5767-006-54349294-2014\nКонтроль и оценка производства проводится аккредитованными лабораториями.\n\n**Внешний вид / цвет:**\n\nПоверхность: гладкая\nЦвет: оранжевый\nТип кромки: прямой\n\n**Сведения об упаковке:**\n\nПлиты ПЕНОПЛЭКС упаковывают в термоусадочную УФ-стабилизированную пленку.\n\n**Области применения:**\n\nТрехслойные железобетонные изделия"
    },
    specs: [
      {
        label: { uz: "10% chiziqli deformatsiyada siqilish mustahkamligi (qalinligi >100 mm uchun), ko'pi bilan", ru: "Прочность на сжатие при 10% линейной деформации (для толщин >100 мм), не менее" },
        value: "150 кПа",
        method: "GOST EN 826"
      },
      {
        label: { uz: "10% chiziqli deformatsiyada siqilish mustahkamligi (qalinligi 100-150 mm uchun), ko'pi bilan", ru: "Прочность на сжатие при 10% линейной деформации (для толщин 100-150 мм), не менее" },
        value: "200 кПа",
        method: "GOST EN 826"
      },
      {
        label: { uz: "24 soatda suv shimishi, ko'pi bilan", ru: "Водопоглощение за 24 часа, не более" },
        value: "0,4% hajm bo'yicha | 0,4% по объему",
        method: "GOST EN 12087"
      },
      {
        label: { uz: "Issiqlik o'tkazuvchanligi (10±0,3)°C da", ru: "Теплопроводность при (10±0,3)°C" },
        value: "0,034 Вт/(м⋅K)",
        method: "GOST 7076"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "Г4",
        method: "GOST 30244"
      },
      {
        label: { uz: "Eni", ru: "Ширина" },
        value: "600 мм"
      },
      {
        label: { uz: "Uzunligi", ru: "Длина" },
        value: "1200 мм"
      },
      {
        label: { uz: "Qalinligi", ru: "Толщина" },
        value: "80; 100; 120; 140; 150 мм",
        method: "GOST EN 823"
      },
      {
        label: { uz: "Foydalanish harorat oralig'i", ru: "Температурный диапазон эксплуатации" },
        value: "от -70 до +75°С"
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
  },
  {
    id: "proplug-screw",
    name: "САМОРЕЗ ДЛЯ АНКЕР-ВТУЛКИ PROPLUG",
    category: "penopleks",
    images: [proplugScrew],
    description: {
      uz: "Tom mahkamlash elementi — samorез PROPLUG — issiqlik va gidroizolyatsiyani mahkamlashda teleskopik effektni ta'minlash uchun mo'ljallangan. Anker-vtulka PROPLUG bilan birgalikda qo'llaniladi.\n\n**Tavsif:**\n\nAnker-vtulka PROPLUG uchun samorез bino tomida issiqlik va gidroizolyatsiya materiallarini ishonchli mahkamlash uchun ishlatiladi. Profillangan qoplama asosiga, shuningdek yog'och (fanera, taxta, OSP) va beton yuzalarga (shu jumladan TSPS estrikasi) PROPLUG yoyiluvchi dubel bilan mahkamlash uchun keng qo'llaniladi. Yuqori sifatli himoya korroziyaga qarshi qoplama Kestenih iqlim kamerasida 15 tsiklga mos keladigan barqarorlikni ta'minlaydi. Samorез tig'idan kichikroq diametrli reduksiyalangan burg metall listlar va PROPLUG teleskopik vtulkalarida teshik o'lchamlarining buzilishining oldini oladi.\n\nSamorез prizma, chekka reykalar, shayba, shuningdek boshqa tom elementlarini sink bilan qoplangan profillangan list, yog'och va sendvich-panellardan tayyorlangan tayanch asosiga mahkamlash uchun ishlatiladi.\n\n**Afzalliklari:**\n\n• **KORROZIYAGA QARSHILIK** - Sifatli himoya qoplamasi tufayli yuqori korroziyaga qarshilik\n• **KUCHAYTIRILGAN YUZALI TIG'** - 4 mm gacha qalinlikdagi profillangan listdan tayyorlangan asosga mahkamlash imkoniyati\n• **O'Z-O'ZIDAN BURILISHGA CHIDAMLILIK** - Samorезlarning shakli mahkamlash ishonchliligini ta'minlaydi\n\n*Kestenih kamerasi galvanik va bo'yoq qoplamalari bilan himoyalangan namunalarni sinovdan o'tkazish uchun qurilmadir.",
      ru: "Кровельный крепежный элемент — саморез PROPLUG — предназначен для обеспечения телескопического эффекта при креплении тепло- и гидроизоляции. Применяется совместно с анкер-втулкой PROPLUG.\n\n**Описание:**\n\nСаморез для анкер-втулки PROPLUG используется для надежного крепления тепло- и гидроизоляционных материалов на кровле зданий. Широко применяется для крепления к несущему основанию из профилированного настила, а также к деревянным (фанера, доска, ОСП) и бетонным поверхностям (в том числе стяжка из ЦПС) с применением распорного дюбеля PROPLUG. Высококачественное защитное антикоррозийное покрытие обеспечивает стойкость, соответствующую показателям 15 циклов в климатической камере Кестерниха. Редуцированное сверло диаметром меньше резьбы самореза предотвращает нарушение размеров отверстий в тонких листах металла и в телескопических втулках PROPLUG.\n\nСаморез используется для крепления прижимных, краевых реек, шайб, а так же иных кровельных элементов к несущему основанию из оцинкованного профилированного листа, дерева и сэндвич-панелей.\n\n**Преимущества:**\n\n• **КОРРОЗИОННАЯ СТОЙКОСТЬ** - Высокая коррозионная стойкость благодаря качественному защитному покрытию\n• **РЕЗЬБА С УСИЛЕННОЙ ПОВЕРХНОСТЬЮ** - Возможность крепления к основанию из профилированного листа толщиной до 4 мм\n• **УСТОЙЧИВОСТЬ К САМОВЫКРУЧИВАНИЮ** - Форма саморезов обеспечивает надежность крепления\n\n*камера Кестерниха является установкой для проведения испытаний образцов, защищенных гальваническими и лакокрасочными покрытиями."
    },
    specs: [
      {
        label: { uz: "Uzunligi", ru: "Длина, мм" },
        value: "50-300 мм"
      },
      {
        label: { uz: "Buzuvchi tortib oluvchi yuk", ru: "Разрушающая вытягивающая нагрузка" },
        value: "от 0,96 до 7,27 кН"
      },
      {
        label: { uz: "Cho'zilishdagi mustahkamlik chegarasi", ru: "Предел прочности на растяжение" },
        value: "12,2 кН"
      },
      {
        label: { uz: "Kesishdagi mustahkamlik chegarasi", ru: "Предел прочности на срез" },
        value: "8 кН"
      },
      {
        label: { uz: "Po'lat markasi", ru: "Марка стали" },
        value: "SAE 1022"
      },
      {
        label: { uz: "SO2 dagi korroziyaga qarshilik", ru: "Коррозионная стойкость в SO2" },
        value: "15 циклов"
      },
      {
        label: { uz: "Tuzli tumandagi korroziyaga qarshilik, soat", ru: "Коррозионная стойкость в солевом тумане, ч" },
        value: "от 1200 до 1500"
      }
    ]
  },
  {
    id: "proplug-dowel",
    name: "ДЮБЕЛЬ РАСПОРНЫЙ PROPLUG",
    category: "penopleks",
    images: [proplugDowel],
    description: {
      uz: "Mahkamlash elementi. Anker-vtulkalar PROPLUG, metall reykalar va boshqa tom elementlarini beton asosiga mahkamlash uchun mo'ljallangan.\n\n**Tavsif:**\n\nYoyiluvchi dubel PROPLUG anker-vtulkalar PROPLUG, metall reykalar va boshqa tom elementlarini beton asosiga mahkamlash uchun mahkamlash elementidir. Dubel yuqori mustahkamlik xususiyatlariga ega yuqori sifatli polimerdan tayyorlangan. Turar-joy, jamoat, sanoat binolarida qo'llaniladi.\n\n**Afzalliklari:**\n\n• **YUQORI MUSTAHKAMLIK** — Dubel mexanik ta'sirlarga yuqori mustahkamlikka ega\n• **\"SOVUQ KO'PRIKLARI\"NING YO'QLIGI** — Dubel materialining xususiyatlari tufayli \"sovuq ko'priklari\"ning paydo bo'lishi istisno qilingan, shuningdek nuqtaviy yukda qoplamaning buzilishi\n\n**Qo'llanish sohasi:**\n\nTomlar va qoplamalar, Stilobatlar\n\n**Normalar / standartlar:**\n\nMahkamlash elementi. Anker-vtulkalar PROPLUG, metall reykalar va boshqa tom elementlarini beton asosiga mahkamlash uchun mo'ljallangan.",
      ru: "Распорный дюбель PROPLUG — крепежный элемент для анкер-втулок PROPLUG, металлических реек и других кровельных элементов к бетонному основанию.\n\n**Описание:**\n\nРаспорный дюбель PROPLUG используется для крепления анкер-втулок PROPLUG, металлических реек и других кровельных элементов к бетонному основанию. Дюбель выполнен из высококачественного полимера, обладающего высокими прочностными характеристиками. Применяется в жилых, общественных, промышленных зданиях.\n\n**Преимущества:**\n\n• **ВЫСОКАЯ ПРОЧНОСТЬ** — Дюбель обладает высокой прочностью к механическим воздействиям\n• **ОТСУТСТВИЕ «МОСТИКОВ ХОЛОДА»** — Благодаря свойствам материала дюбеля исключено возникновение «мостиков холода», а также разрушение покрытия при точечной нагрузке\n\n**Область применения:**\n\nКрыши и покрытия, Стилобаты\n\n**Нормы / стандарты:**\n\nКрепежный элемент. Предназначен для анкер-втулок PROPLUG, металлических реек и других кровельных элементов к бетонному основанию."
    },
    specs: [
      {
        label: { uz: "Asosning minimal qalinligi", ru: "Минимальная толщина основания" },
        value: "50 мм"
      },
      {
        label: { uz: "Asosning maksimal qalinligi", ru: "Максимальная толщина основания" },
        value: "не ограничена"
      },
      {
        label: { uz: "Diametr", ru: "Диаметр" },
        value: "8 мм"
      },
      {
        label: { uz: "Uzunligi", ru: "Длина" },
        value: "40 мм"
      },
      {
        label: { uz: "Chiqarib olishga qarshilik (beton asosi)", ru: "Усилие на вырыв (бетонное основание)" },
        value: "1,1 кН (110 кг)"
      },
      {
        label: { uz: "Foydalanish harorat oralig'i", ru: "Температурный диапазон эксплуатации" },
        value: "от -50 до +90°C"
      }
    ]
  },
  {
    id: "proplug-anchor-sleeve",
    name: "Анкер-втулка PROPLUG",
    category: "penopleks",
    images: [proplugAnchorSleeve],
    description: {
      uz: "PROPLUG anker-vtulka metall proflist va temir-beton tom konstruksiyalariga issiqlik, gidro va tovush izolyatsiya materiallarini PROPLUG vint yordamida mahkamlash uchun ishlatiladi. Noyob boshcha tuzilishi membranaga bo'shliqsiz tekis mahkamlashni ta'minlaydi, kuchaytirilgan burun konstruksiyasi esa vintning chiqib ketish ehtimolini bartaraf etadi.\n\n**Afzalliklari:** Yuqori mustahkamlik, chiqib ketishga chidamlilik, sovuqqa chidamlilik.",
      ru: "Анкер-втулка PROPLUG используется для крепления однослойных или многослойных теплоизоляционных, гидроизоляционных и звукоизоляционных материалов к несущей конструкции с помощью самореза PROPLUG. Уникальная конструкция шляпки обеспечивает равномерное, без зазоров крепление к мембране, а усиленная конструкция носика исключает возможность вырыва самореза.\n\n**Преимущества:** Высокая прочность, устойчивость к вырыванию, морозостойкость."
    },
    specs: [
      {
        label: { uz: "Uzunligi", ru: "Длина" },
        value: "30-260 мм"
      },
      {
        label: { uz: "Foydalanish harorat oralig'i", ru: "Температурный диапазон применения" },
        value: "от -50 до +90°C"
      },
      {
        label: { uz: "Qo'llash", ru: "Применение" },
        value: "во всех ветровых районах"
      },
      {
        label: { uz: "Siljishga (kesishga) mustahkamlik, kamida", ru: "Прочность на сдвиг (срез), не менее" },
        value: "1100 Н"
      },
      {
        label: { uz: "Chiqib ketishga mustahkamlik, kamida", ru: "Прочность на вырыв, не менее" },
        value: "1700 Н"
      }
    ]
  },
  {
    id: "plastfoil-stepway",
    name: "PLASTFOIL STEPWAY - Пешеходные ПВХ дорожки",
    category: "penopleks",
    images: [plastfoilStepway],
    description: {
      uz: "PLASTFOIL STEPWAY PVX qoplama bilan membrana tomlarda xavfsiz harakatlanish uchun mo'ljallangan. Qalinligi 8 mm va ish yuzasi o'lchamlari 600 x 600 mm bo'lgan elementlar 'tig'tig'ga' ulanib, yagona piyodalar makonini hosil qiladi.\n\n**Afzalliklari:** Eskirishga chidamlilik - ishqalanishga yuqori chidamlilik. Atmosfera ta'siriga chidamlilik - ultrabinafsha nurlanishiga chidamlilik.",
      ru: "PLASTFOIL STEPWAY предназначены для организации безопасного перемещения по поверхности мембранных кровель с ПВХ покрытием. Кровельные пешеходные ПВХ дорожки PLASTFOIL STEPWAY применяются в составе кровельных систем в промышленном и гражданском строительстве. Пешеходные дорожки укладываются на участках, где планируется место прохода для обслуживания кровли и технологического оборудования. Пешеходная нагрузка распределяется, обеспечивая целостность гидроизоляции и сохранность теплоизоляционного слоя. Элементы кровельных пешеходных ПВХ дорожек PLASTFOIL STEPWAY толщиной 8 мм и размерами рабочей поверхности 600 x 600 мм, соединяются между собой «шип в шип», образуя единое пешеходное пространство. Для этого предусмотрены специальные замки, которые позволяют соединять штучные элементы как паззлы. Края готовой дорожки привариваются к поверхности полимерной мембраны PLASTFOIL при помощи автоматического сварочного оборудования, для чего на каждом элементе предусмотрена специальная полоса без тиснения шириной 80 мм. Кровельные пешеходные дорожки предназначены для организации безопасного перемещения по поверхности мембранных кровель с мембранным покрытием.\n\n**Преимущества:**\n\n**ИЗНОСОСТОЙКОСТЬ** — Высокая устойчивость к истиранию\n\n**АТМОСФЕРОСТОЙКОСТЬ** — Устойчивость к УФ-излучению"
    },
    specs: [
      {
        label: { uz: "Uzunlik x Kenglik x Qalinlik (ishchi qism)", ru: "Длина х Ширина х Толщина (рабочая часть)" },
        value: "600 х 600 х 8,0 мм"
      },
      {
        label: { uz: "Cho'zilganda mustahkamlik (B usuli)", ru: "Прочность при растяжении (Метод В)" },
        value: "8,0 МПа"
      },
      {
        label: { uz: "Maksimal yuklashda cho'zilish, kamida", ru: "Удлинение при максимальной нагрузке, не менее" },
        value: "100%"
      },
      {
        label: { uz: "Statik teshilishga qarshilik, kamida", ru: "Сопротивление статическому продавливанию, не менее" },
        value: "20 кг"
      },
      {
        label: { uz: "Dinamik teshilishga qarshilik (zarba beruvchi mustahkamlik)", ru: "Сопротивление динамическому продавливанию (ударная стойкость)" },
        value: "2000 мм"
      }
    ]
  },
  {
    id: "plastfoil-stepway-pvc",
    name: "PLASTFOIL STEPWAY PVC",
    category: "penopleks",
    images: [plastfoilStepwayPvc],
    description: {
      uz: "PLASTFOIL STEPWAY PVC tom yo'lkasi PVX asosidagi polimer materialdan tayyorlangan.\n\nAlohida tayyor elementlardan pazvl kabi yig'iladi. O'rnatilgandan so'ng tayyor yo'lakchaning qirralari asosiy tom yuzasiga issiq havo avtomati yordamida payvandlanadi, buning uchun elementlar qirralarida 80 mm kenglikdagi maxsus chiziqsiz chiziq mavjud. Payvandlash chizig'i bo'ylab harorat o'zgarishi paytida gidroizolyatsiya matosining harakatini kompensatsiya qiluvchi va yo'lakchaning ham, gidroizolyatsiyaning ham yaxlitligini saqlaydigan demfer o'rnatilgan. Piyoda yo'lakchasi orqali suvni oqizish uchun elementlarning orqa tomonida maxsus kanalilar yasalgan, shuning uchun yo'lakchada uzilishlar qilish talab qilinmaydi.\n\n**Afzalliklari:**\n\nMahsulot qattiq issiqlik izolyatori bo'lgan tomga piyodalar yukini qat'iylikni ta'minlash uchun qo'shimcha materiallar qo'llamasdan samarali taqsimlash imkonini beradi. Tom yo'lakchasining ish tomonidagi zonaning sirpanishga qarshi yuzasi xodimlarning tom bo'ylab xavfsiz harakatlanishini ta'minlaydi. Demferlar harorat o'zgarishi paytida yo'lakcha va gidroizolyatsiya matosini yirtilishdan himoya qiladi.",
      ru: "Кровельная дорожка PLASTFOIL STEPWAY PVC выполнена из полимерного материала на основе ПВХ.\n\nСобирается из отдельных готовых элементов, как паззл. После укладки края готовой дорожки привариваются к поверхности основной кровли при помощи автомата горячего воздуха, для этого по краям элементов предусмотрена специальная полоса шириной 80 мм без тиснения. Вдоль полосы для приварки предусмотрен демпфер, компенсирующий подвижки гидроизоляционного полотна во время перепада температур и сохраняющий целостность как самой дорожки, так и гидроизоляции. Для отвода воды через пешеходную дорожку на обратной стороне элементов сделаны специальные канавки, поэтому делать разрывы в дорожке не требуется.\n\n**Преимущества:**\n\nИзделие позволяет эффективно распределить пешеходные нагрузки на кровлю с жёстким утеплителем без применения дополнительных материалов для придания жёсткости. Противоскользящая поверхность зоны на рабочей стороне кровельной дорожки обеспечивает безопасное передвижение персонала по кровле. Демпферы предохраняют дорожку и гидроизоляционное полотно от разрывов во время перепада температур."
    },
    specs: [
      {
        label: { uz: "Uzunlik", ru: "Длина" },
        value: "600 мм"
      },
      {
        label: { uz: "Kenglik", ru: "Ширина" },
        value: "600 мм"
      },
      {
        label: { uz: "Qalinlik", ru: "Толщина" },
        value: "8,0 мм"
      },
      {
        label: { uz: "Cho'zilganda mustahkamlik bo'ylab/ko'ndalang (B usuli)", ru: "Прочность при растяжении вдоль/поперек (метод В)" },
        value: "8,0 МПа"
      },
      {
        label: { uz: "Maksimal yuklashda cho'zilish, kamida", ru: "Удлинение при максимальной нагрузке, не менее" },
        value: "100%"
      },
      {
        label: { uz: "Statik teshilishga qarshilik, kamida", ru: "Сопротивление статическому продавливанию, не менее" },
        value: "20 кг"
      },
      {
        label: { uz: "Dinamik teshilishga qarshilik (qattiq asos bo'yicha zarba mustahkamligi)", ru: "Сопротивление динамическому продавливанию (ударная стойкость) по твердому основанию" },
        value: "2000 мм"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "От -60 до +80°С"
      },
      {
        label: { uz: "Xizmat qilish muddati, yillar, kamida", ru: "Срок эксплуатации, лет, не менее" },
        value: "50"
      },
      {
        label: { uz: "Yonish guruhi", ru: "Группа горючести" },
        value: "Г4"
      }
    ]
  },
  {
    id: "plastfoil-aluminum-rail-clamp",
    name: "ПРИЖИМНЫЕ АЛЮМИНИЕВЫЕ РЕЙКИ",
    category: "penopleks",
    images: [plastfoilAluminumRail1],
    description: {
      uz: "Alyuminiy-magniy qotishmasidan tayyorlangan reyка. Tom perimetri bo'ylab va barcha chiqib turgan konstruksiyalar atrofida membranani mahkamlash uchun ishlatiladi.\n\nDobornyy tom elementi PVX-membranani vertikal yuzalarda, gorizontaldan vertikalga o'tish joylarida mahkamlash uchun mo'ljallangan.\n\n**Afzalliklari:**\n\n**MUSTAHKAMLIK** — Egilish va buralishga yuqori mustahkamlik\n\n**HARORAT O'ZGARISHLARIGA CHIDAMLILIK** — O'zgaruvchan harorat ta'siriga chidamlilik\n\n**KORROZIYAGA CHIDAMLILIK** — Yuqori korroziyaga qarshilik",
      ru: "Рейка из алюминиево-магниевого сплава. Используется для фиксации мембраны по периметру кровли и вокруг всех выступающих конструкций.\n\nДоборный кровельный элемент предназначен для фиксации ПВХ-мембраны на вертикальных поверхностях в местах перехода с горизонтальной на вертикальную поверхность.\n\n**Преимущества:**\n\n**ПРОЧНОСТЬ** — Повышенная прочность на изгиб и кручение\n\n**СТОЙКОСТЬ К ПЕРЕПАДАМ ТЕМПЕРАТУР** — Устойчивость к знакопеременным воздействиям температур\n\n**КОРРОЗИОННАЯ СТОЙКОСТЬ** — Высокая коррозионная стойкость"
    },
    specs: [
      {
        label: { uz: "Uzunligi, mm", ru: "Длина, мм" },
        value: "2000"
      },
      {
        label: { uz: "Kengligi, mm", ru: "Ширина, мм" },
        value: "30,5"
      },
      {
        label: { uz: "Qalinligi, mm", ru: "Толщина, мм" },
        value: "1,8"
      }
    ]
  },
  {
    id: "plastfoil-aluminum-rail-edge",
    name: "КРАЕВЫЕ АЛЮМИНИЕВЫЕ РЕЙКИ",
    category: "penopleks",
    images: [plastfoilAluminumRail2],
    description: {
      uz: "Alyuminiy-magniy qotishmasidan tayyorlangan reyка. Membrananing yuqori chetini vertikal yuzalarga mahkamlash uchun qo'llaniladi.\n\nDobornyy tom elementi vertikal yuzalarda gidroizolyatsiyani yakunlash uchun PVX-membranani mahkamlash uchun mo'ljallangan. PU germetikni qo'llash uchun egiluvchan chetga ega.\n\n**Afzalliklari:**\n\n**MUSTAHKAMLIK** — Egilish va buralishga yuqori mustahkamlik\n\n**HARORAT O'ZGARISHLARIGA CHIDAMLILIK** — O'zgaruvchan harorat ta'siriga chidamlilik\n\n**KORROZIYAGA CHIDAMLILIK** — Yuqori korroziyaga qarshilik",
      ru: "Рейка из алюминиево-магниевого сплава. Применяется для крепления верхнего края мембраны к вертикальным поверхностям.\n\nДоборный кровельный элемент предназначен для фиксации ПВХ-мембраны для завершения гидроизоляции на вертикальных поверхностях. Имеет отгибной край для нанесения ПУ герметика.\n\n**Преимущества:**\n\n**ПРОЧНОСТЬ** — Повышенная прочность на изгиб и кручение\n\n**СТОЙКОСТЬ К ПЕРЕПАДАМ ТЕМПЕРАТУР** — Устойчивость к знакопеременным воздействиям температур\n\n**КОРРОЗИОННАЯ СТОЙКОСТЬ** — Высокая коррозионная стойкость"
    },
    specs: [
      {
        label: { uz: "Uzunligi, mm", ru: "Длина, мм" },
        value: "2000"
      },
      {
        label: { uz: "Kengligi, mm", ru: "Ширина, мм" },
        value: "30,5"
      },
      {
        label: { uz: "Qalinligi, mm", ru: "Толщина, мм" },
        value: "1,8"
      }
    ]
  },
  {
    id: "plastfoil-universal-tie",
    name: "УНИВЕРСАЛЬНАЯ СТЯЖКА ДЛЯ НЕСЪЕМНОЙ ОПАЛУБКИ",
    category: "penopleks",
    images: [plastfoilUniversalTie],
    description: {
      uz: "Universal tortma ko'chmas qolip uchun tez quriladigan monolit fundament, devor va boshqa murakkab elementlarni qurish uchun ishlatiladi.\n\nUniversal tortma fundament, devor va boshqa elementlarning tez quriladigan monolit konstruksiyalarini qurish uchun ko'chmas qolipni o'rnatish uchun ishlatiladi. Tortma ikki element va ikki ushlagichni o'z ichiga oladi. Tortma yordamida beton konstruksiyalarning qalinligini 150 dan 250 mm gacha belgilash mumkin; uzaytiruvchi ishlatilganda - 25 mm qadam bilan 400 mm gacha. Tortmalarda armatura uchun fiksatorni mahkamlash ko'zda tutilgan.",
      ru: "Универсальная стяжка используется для монтажа несъемной опалубки при устройстве быстровозводимых монолитных фундаментов, стен и других элементов любой сложности.\n\nУниверсальная стяжка используется для монтажа несъемной опалубки при устройстве быстровозводимых монолитных фундаментов, стен и других элементов любой сложности. Стяжка включает два элемента и два держателя. При помощи стяжки можно задать толщину бетонных конструкций от 150 до 250 мм; при использовании удлинителя — до 400 мм с шагом 25 мм. На стяжках предусмотрено крепление для фиксатора под арматуру."
    },
    specs: [
      {
        label: { uz: "Uzunligi, mm", ru: "Длина, мм" },
        value: "260"
      },
      {
        label: { uz: "Kengligi, mm", ru: "Ширина, мм" },
        value: "30"
      },
      {
        label: { uz: "Balandligi, mm", ru: "Высота, мм" },
        value: "25"
      },
      {
        label: { uz: "Zichligi, g/sm³", ru: "Плотность, г/см³" },
        value: "1,4"
      },
      {
        label: { uz: "Yirtilishga mustahkamlik, kg", ru: "Прочность на разрыв, кг" },
        value: "300"
      }
    ]
  },
  {
    id: "plastfoil-vapor-barrier",
    name: "ПАРОИЗОЛЯЦИОННАЯ ПЛЕНКА",
    category: "penopleks",
    images: [plastfoilMembrane],
    description: {
      uz: "Paro izolyatsion plyonka - yuqori bosimli polietilen (PVD) dan tayyorlangan rulon material. Mukammal suv va paro o'tkazmaslikka ega bo'lib, ichki ortiqcha namlikning himoya konstruksiyalariga kirishini minimallashtiradi.\n\nTom tizimlarida paro izolyatsiyasini qurishda qo'llaniladi va issiqlik izolyatorini xonalar ichida hosil bo'ladigan suv bug'idan himoya qiladi. Paro izolyatsiya binolar himoya konstruksiyalarida namlikning kondensatsiyalanish imkoniyatini sezilarli darajada kamaytiradi.\n\nParo izolyatsion plyonka izolyatsiya qatlami va issiqlik izolyatsiya qilingan tomning ichki elementlarini, karkas asosidagi devorlar va pollarni xona ichidagi suv bug'larining kirishidan himoya qilish sifatida ishlatiladi.\n\n**Afzalliklari:**\n\n**BARCHA MAVSUMLAR VA UNIVERSAL** — -40°C dan +80°C gacha haroratda barcha iqlim zonalarida yil davomida qo'llash\n\n**BIOLOGIK BARQARORLIK** — Agressiv muhit va mikroorganizmlarning ta'siriga chidamlilik",
      ru: "Пароизоляционная пленка — рулонный материал, выполненный из полиэтилена высокого давления (ПВД). Обладает превосходной водо- и паронепроницаемостью, что минимизирует проникновение внутренней избыточной влаги в ограждающие конструкции.\n\nПрименяется для устройства пароизоляции в кровельных системах и защищает утеплитель от водяного пара, образующегося внутри помещений. Пароизоляция значительно снижает возможность конденсации влаги в ограждающих конструкциях зданий.\n\nПароизоляционная пленка используется к качестве защиты слоя теплоизоляции и внутренних элементов конструкции утепленной кровли, стен по каркасным основаниям и перекрытий от проникновения водяных паров изнутри помещения.\n\n**Преимущества:**\n\n**ВСЕСЕЗОННОСТЬ И УНИВЕРСАЛЬНОСТЬ** — круглогодичное применение во всех климатических зонах при температуре от -40°C до +80°C\n\n**БИОСТОЙКОСТЬ** — стойкость к воздействию агрессивных сред и микроорганизмов"
    },
    specs: [
      {
        label: { uz: "Bug' o'tkazmaslik qarshiligi, m²·h·Pa/mg", ru: "Сопротивление паропроницанию, м²·ч·Па/мг" },
        value: "7,2"
      },
      {
        label: { uz: "Qo'llash harorat oralig'i, °C", ru: "Температурный диапазон применения, °C" },
        value: "-40 dan +80 gacha"
      },
      {
        label: { uz: "Yirtilishda nisbiy cho'zilish bo'ylab/ko'ndalang, %", ru: "Относительное удлинение при разрыве вдоль/поперек, %" },
        value: "240/240"
      }
    ]
  },
  {
    id: "plastfoil-roof-washer",
    name: "ШАЙБА КРОВЕЛЬНАЯ",
    category: "penopleks",
    images: [plastfoilRoofWasher],
    description: {
      uz: "Sinklanmis po'latdan yasalgan tom shayba rulon gidro izolyatsiya materiallarini metall proflist, beton va yog'ochdan yasalgan ko'taruvchi va himoya asoslariga mexanik mahkamlashda bosim yukini taqsimlash uchun qo'llaniladi.\n\nBosish yukini mahkamlanadigan materialga bir xilda taqsimlaydi. Shayba o'ylangan geometriyasi tufayli membranani deformatsiyadan ishonchli himoya qiladi. Beton yuzalar va tsement-qum estrikalariga mahkamlashda 8 mm diametrli PROPLUG kengayuvchi dyubel bilan 4,8 mm diametrli vintlarni ishlatish kerak, metall yuzalarga mahkamlashda esa 4,8 va 5,5 mm diametrli PROPLUG vintlari ishlatiladi.\n\n**Afzalliklari:**\n\n**KORROZIYAGA CHIDAMLILIK** — Rux qoplamasi tufayli yuqori korroziyaga chidamlilik\n\n**UZOQ MUDDATLILIK** — Yuqori mexanik mustahkamlik\n\n**ATMOSFERA BARDOSHLILIGI** — Past va yuqori harorat, yog'ingarchilik va ultrabinafsha nurlariga yuqori chidamlilik",
      ru: "Шайба кровельная из оцинкованной стали применяется для распределения прижимной нагрузки при механической фиксации рулонных гидроизоляционных материалов к несущим и ограждающим основаниям из металлического профлиста, бетона и дерева.\n\nРавномерно распределяет прижимную нагрузку на закрепляемый материал. Надежно защищает мембрану от деформации благодаря продуманной геометрии шайбы. При креплении к бетонным поверхностям и цементно-песчаным стяжкам необходимо использовать саморезы диаметром 4,8 мм с распорным дюбелем PROPLUG диаметром 8 мм, при креплении к металлическим поверхностям – саморезы PROPLUG диаметром 4,8 и 5,5 мм.\n\n**Преимущества:**\n\n**КОРРОЗИОННАЯ СТОЙКОСТЬ** — Высокая коррозионная стойкость благодаря цинковому покрытию\n\n**ДОЛГОВЕЧНОСТЬ** — Высокая механическая прочность\n\n**АТМОСФЕРОСТОЙКОСТЬ** — Высокая устойчивость к воздействию низких и высоких температур, осадков и ультрафиолета"
    },
    specs: [
      {
        label: { uz: "Tashqi diametri, mm", ru: "Диаметр внешний, мм" },
        value: "50 ±0,1"
      },
      {
        label: { uz: "Ichki diametri (teshik), mm", ru: "Диаметр внутренний (отверстия), мм" },
        value: "6,2 ±0,1"
      },
      {
        label: { uz: "Qalinligi, mm", ru: "Толщина, мм" },
        value: "0,65 ±0,1"
      }
    ]
  },
  {
    id: "plastfoil-pvc-cleaner",
    name: "Очиститель для ПВХ мембран, 3 л",
    category: "penopleks",
    images: [plastfoilPvcCleaner],
    description: {
      uz: "PVX membranalarning iflos va/yoki eski yuzasini mahalliy tozalash uchun maxsus ishlab chiqilgan tarkib. Issiq havo bilan payvandlashdan oldin yopishqoqlikni yaxshilash, shuningdek asbobni tozalash uchun qo'llaniladi.\n\nKuchaytirilgan va kuchaytrilmagan PVX membranalarning yuzasini issiq havo bilan payvandlashdan oldin (masalan, yamash ta'mirida) yoki suyuq PVX qo'llashdan oldin mahalliy tozalash uchun maxsus ishlab chiqilgan tarkib. Asbobni tozalash uchun ham qo'llaniladi. Konsentrlangan tarkib organik kelib chiqishli (yog'lar, bitum, moy izlari) va polimer tom qurilishi va foydalanishda paydo bo'ladigan noorganik ifloslanishlarni olib tashlaydi.",
      ru: "Специально разработанный состав для локальной очистки поверхности армированных и неармированных ПВХ мембран перед сваркой горячим воздухом (например, при латочном ремонте) или нанесением жидкого ПВХ. Также применим для очистки инструмента.\n\nКонцентрированный состав удаляет загрязнения как органического происхождения (жиры, битум, следы масла), так и неорганического, возникающие при устройстве и эксплуатации полимерной кровли."
    },
    specs: [
      {
        label: { uz: "O'rash uzunligi, mm", ru: "Длина упаковки, мм" },
        value: "1200"
      },
      {
        label: { uz: "O'rash eni, mm", ru: "Ширина упаковки, мм" },
        value: "800"
      },
      {
        label: { uz: "O'rash balandligi, mm", ru: "Высота упаковки, мм" },
        value: "870"
      },
      {
        label: { uz: "O'rash maydoni, m²", ru: "Площадь упаковки, м²" },
        value: "0,96"
      },
      {
        label: { uz: "O'rash hajmi, m³", ru: "Объем упаковки, м³" },
        value: "0,835"
      },
      {
        label: { uz: "O'rash og'irligi, kg", ru: "Вес упаковки, кг" },
        value: "3,15"
      },
      {
        label: { uz: "O'rashdagi mahsulot miqdori, dona", ru: "Количество товара в упаковке, шт." },
        value: "1"
      }
    ]
  },
  {
    id: "plastfoil-pvc-activator",
    name: "Активатор для ПВХ мембран, 3 л",
    category: "penopleks",
    images: [plastfoilPvcActivator],
    description: {
      uz: "Armaturalangan va armaturasiz PVX membranalarning yuzasini qayta ishlash uchun maxsus ishlab chiqilgan tarkib. Issiq havo bilan payvandlashdan yoki suyuq PVX qo'llashdan oldin ishlatiladi.\n\nQo'lda va avtomatik payvandlashda tom membranalarini o'rnatishni boshlashdan oldin har doim ishlatish tavsiya etiladi. Aktivator bilan qayta ishlash PVX materiallarni uzoq muddat saqlashda hosil bo'ladigan plastifikator plyonkasini yuzadan olib tashlaydi, bu esa sifatli payvand tikishni olish imkonini beradi.",
      ru: "Специально разработанный состав для обработки поверхности армированных и неармированных ПВХ мембран перед сваркой горячим воздухом или нанесением жидкого ПВХ.\n\nРекомендуется использовать всегда перед началом монтажа кровельных мембран при ручной и автоматической сварке. Обработка активатором удаляет с поверхности пленку пластификатора, образующуюся при длительном хранении ПВХ материалов, что позволяет получить качественных сварной шов."
    },
    specs: [
      {
        label: { uz: "Hajmi, l", ru: "Объем, л" },
        value: "3,0"
      },
      {
        label: { uz: "Massasi, kg", ru: "Масса, кг" },
        value: "3,0"
      },
      {
        label: { uz: "Quritish vaqti, daq., ko'pi bilan", ru: "Время высыхания, мин, не более" },
        value: "10"
      },
      {
        label: { uz: "1 mm² ga sarfi, l", ru: "Расход на 1 мм2, л" },
        value: "0,25"
      }
    ]
  },
  {
    id: "plastfoil-roof-aerator",
    name: "Аэратор кровельный ПВХ",
    category: "penopleks",
    images: [plastfoilRoofAerator],
    description: {
      uz: "Qattiq PVX kompozitsiyasidan yasalgan, bu tomda tashqi muhit ta'siriga yuqori ishonchlilik va chidamlilikni ta'minlaydi, shuningdek PVX membranalardan yasalgan tomlar uchun ideal variantdir. Ikki qismdan iborat — PVX stoykaси va polipropilen qalpoqchasidan.\n\n**Afzalliklari:**\n\nPVX korpusi tufayli qulay va tez o'rnatish, bu gidro izolyatsiya bilan issiq havo yordamida ulanish imkonini beradi.\n\nO'rnatish bosqichida va keyingi foydalanishda aeratorning gidro izolyatsiya bilan ulanishining germetikligini nazorat qilish imkoniyati.",
      ru: "Изготовлен из жесткой ПВХ-композиции, которая обеспечивает высокую надежность и стойкость к воздействиям внешней среды на кровле, а также является идеальным вариантом для кровель из ПВХ мембран. Состоит из двух частей — стойки из ПВХ и колпака из полипропилена.\n\n**Преимущества:**\n\nУдобный и быстрый монтаж благодаря корпусу из ПВХ, позволяющему производить соединение с гидроизоляцией с помощью горячего воздуха.\n\nВозможность контроля герметичности соединения аэратора с гидроизоляцией на этапе монтажа и последующей эксплуатации."
    },
    specs: [
      {
        label: { uz: "O'rash uzunligi, mm", ru: "Длина упаковки, мм" },
        value: "285"
      },
      {
        label: { uz: "O'rash eni, mm", ru: "Ширина упаковки, мм" },
        value: "285"
      },
      {
        label: { uz: "O'rash balandligi, mm", ru: "Высота упаковки, мм" },
        value: "325"
      },
      {
        label: { uz: "O'rash maydoni, m²", ru: "Площадь упаковки, м²" },
        value: "0,081"
      },
      {
        label: { uz: "O'rash hajmi, m³", ru: "Объем упаковки, м³" },
        value: "0,027"
      },
      {
        label: { uz: "O'rash og'irligi, kg", ru: "Вес упаковки, кг" },
        value: "2"
      },
      {
        label: { uz: "O'rashdagi mahsulot miqdori, dona", ru: "Количество товара в упаковке, шт." },
        value: "1"
      }
    ]
  },
  {
    id: "plastfoil-test-fix",
    name: "Скотч алюминиевый PLASTFOIL TEST FIX",
    category: "penopleks",
    images: [plastfoilTestFix],
    description: {
      uz: "PLASTFOIL TEST FIX — 25 mkm qalinlikdagi alyuminiy folga asosidagi lenta, sintetik kauchuk asosidagi yopishqoq qatlam va qog'ozli antiadeziyon qoplama bilan.\n\n150 mm enlik va 40 metr uzunlikda rulon shaklida ishlab chiqariladi.\n\n**Xususiyatlari / Afzalliklari:**\n\nPayvand tikuvlar joylarida oqish joylarini o'ta aniq diagnostika qilish imkonini beradi;\n\nPayvand tikuv zonasida mexanik mahkamlagichni yopish uchun optimal enlik;\n\nO'rnatish bosqichida elektr o'tkazuvchi qatlam qismlarining siljishini oldini olish.",
      ru: "PLASTFOIL TEST FIX – лента на основе алюминиевой фольги толщиной 25 мкм с клеевым слоем на основе синтетического каучука, с бумажным антиадгезионным покрытием.\n\nВыпускается в виде ролика шириной 150 мм, длиной 40 метров.\n\n**ХАРАКТЕРИСТИКИ / ПРЕИМУЩЕСТВА:**\n\nПозволяет выполнять сверхточную диагностику протечек в местах сварных швов;\n\nОптимальная ширина для перекрытия механического крепежа в зоне сварного шва;\n\nПредотвращение смещения полотен электропроводящего слоя на этапе монтажа."
    },
    specs: [
      {
        label: { uz: "Uzunlik, m", ru: "Длина, м" },
        value: "40"
      },
      {
        label: { uz: "Enlik, mm", ru: "Ширина, мм" },
        value: "150"
      },
      {
        label: { uz: "Asos qalinligi, mm", ru: "Толщина основы, мм" },
        value: "0,025"
      },
      {
        label: { uz: "Asos materiali", ru: "Материал основы" },
        value: "Alyuminiy folga / Алюминиевая фольга"
      },
      {
        label: { uz: "Po'latga 180° burchak ostida yopishish, N/sm", ru: "Адгезия к стали под углом 180°, Н/см" },
        value: "8"
      },
      {
        label: { uz: "Yopishqoqlik, N", ru: "Липкость, Н" },
        value: "17,5"
      },
      {
        label: { uz: "Statik siljishga qarshilik kuchi, daq.", ru: "Сила сопротивления статическому сдвигу, мин" },
        value: "400"
      },
      {
        label: { uz: "Qo'llash harorati, °C", ru: "Температура применения, °С" },
        value: "+2…+60"
      },
      {
        label: { uz: "Foydalanish harorati, °C", ru: "Температура эксплуатации, °С" },
        value: "-30…+75"
      }
    ]
  },
  {
    id: "plastguard-tape",
    name: "ДВУСТОРОННЯЯ СОЕДИНИТЕЛЬНАЯ ЛЕНТА PLASTGUARD",
    category: "penopleks",
    images: [plastguardTape],
    description: {
      uz: "Profillangan membranani ulash uchun yopishqoq lenta. Butilpolimer asosidagi ikki tomonlama o'z-o'zidan yopishqoq lenta, ikki tomondan antiadeziyon plyonka bilan qoplangan.\n\n**Qo'llanilish sohasi:**\n• Tomlar va qoplamalar\n• Stilobatlar\n• Pollar va qoplamalar\n• Poydevorlar\n• Tunnellar\n\n**Afzalliklari:**\n\n**UNIVERSALLIK** — PLASTGUARD profillangan membranasining bo'ylama va ko'ndalang tikuvlarini ulash imkoniyati.\n\n**O'RNATISH QULAYLIGI** — yuqori o'rnatish tezligi va PLASTGUARD bilan turli konstruksiyalarda qo'llash imkoniyati.",
      ru: "Клеевая лента для соединения профилированной мембраны. Двусторонняя самоклеящаяся соединительная лента на основе бутилполимера, с обеих сторон покрытая антиадгезионными пленками.\n\n**Область применения:**\n• Крыши и покрытия\n• Стилобаты\n• Полы и перекрытия\n• Фундаменты\n• Тоннели\n\n**Преимущества:**\n\n**УНИВЕРСАЛЬНОСТЬ** – возможность соединения как продольных, так и поперечных швов профилированной мембраны PLASTGUARD.\n\n**УДОБСТВО МОНТАЖА** – высокая скорость монтажа и возможность применения в различных конструктивах с PLASTGUARD."
    },
    specs: [
      {
        label: { uz: "Uzunlik, m", ru: "Длина, м" },
        value: "10,0 ± 1%"
      },
      {
        label: { uz: "Enlik, mm", ru: "Ширина, мм" },
        value: "50,0 ± 1%"
      },
      {
        label: { uz: "Qalinlik, mm", ru: "Толщина, мм" },
        value: "1,0 ± 5%",
        method: "GOST 2678-94"
      },
      {
        label: { uz: "24 soat ichida suv shimishi, ko'pi bilan, %", ru: "Водопоглощение в течении 24 часов, не более, %" },
        value: "1",
        method: "GOST 2678-94"
      },
      {
        label: { uz: "Bog'lovchi yumshatish harorati, kamida, °C", ru: "Температура размягчения вяжущего, не менее, °C" },
        value: "+95",
        method: "GOST 2678-94"
      },
      {
        label: { uz: "R=5 mm bo'lgan balka ustida egilish harorati, ko'pi bilan, °C", ru: "Температура гибкости на брусе R=5 мм, не более, °C" },
        value: "-40",
        method: "GOST 2678-94"
      },
      {
        label: { uz: "Beton bilan adgesiya, kamida, H/sm", ru: "Адгезия с бетоном, не менее, H/см" },
        value: "3,0",
        method: "GOST 10174"
      },
      {
        label: { uz: "Metall bilan adgesiya, kamida, H/sm", ru: "Адгезия с металлом, не менее, H/см" },
        value: "3,0",
        method: "GOST 10174"
      },
      {
        label: { uz: "Himoya qoplama turi (yuqori/past)", ru: "Тип защитного покрытия (верх/низ)" },
        value: "antiadeziyon plyonka / антиадгезионная пленка"
      },
      {
        label: { uz: "Xizmat muddati, kamida, yil", ru: "Срок эксплуатации, не менее, лет" },
        value: "10"
      }
    ]
  },
  {
    id: "penoplex-fastmix",
    name: "Наливной пол PENOPLEX FASTMIX",
    category: "penopleks",
    images: [penoplexFastmix],
    description: {
      uz: "PENOPLEX FASTMIX NALIVNOY POL — pol qoplamalarini o'rnatishdan oldin tekislovchi qatlamlar yaratish uchun quruq o'z-o'zidan tekislovchi pol aralashmasi. Maxsus tsementlar asosida yuqori samarali modifikatsiyalovchi qo'shimchalar bilan tayyorlangan.\n\n**Qo'llanilish:**\n• Keramik va keramogranit plitka\n• To'qimachilik gilamlari\n• Linoleum, parket, laminat, parket taxtasi\n\nQo'lda va mashinada qo'llash uchun mo'ljallangan. Turar joy va jamoat binolarida qo'llaniladi: monolit beton, tsement, tsement-qum va gips-qum asoslarda.\n\nQuruq xonalar, o'rtacha namlik darajasiga ega xonalar va harorat tebranishlariga duchor bo'lgan xonalar (hammom xonalari, yopiq teraslar, verandalar, balkonlar) uchun mos.\n\n\"Issiq pol\" tizimida foydalanish uchun tavsiya etiladi.",
      ru: "Смесь сухая напольная самовыравнивающаяся PENOPLEX FASTMIX НАЛИВНОЙ ПОЛ предназначена для устройства выравнивающих слоев под дальнейшую укладку напольных покрытий (керамическая и керамогранитная плитка, текстильные ковры, линолеум, паркет, ламинат, паркетная доска и т.п.).\n\nИзготовлена на основе специальных цементов с использованием высокоэффективных модифицирующих добавок. Предназначена для нанесения ручным и машинным способом.\n\nПрименяется в жилых и общественных зданиях по основаниям: монолитный бетон, цементные, цементо-песчаные и гипсопесчаные основания.\n\nПодходит для сухих помещений, помещений с умеренным уровнем влажности и подверженных температурным колебаниям (ванные комнаты, крытые террасы, веранды, балконы).\n\nРекомендуется для применения в системе «теплый пол»."
    },
    specs: [
      {
        label: { uz: "Rang", ru: "Цвет" },
        value: "Kulrang / Серый"
      },
      {
        label: { uz: "1 kg quruq aralashmaga suv miqdori", ru: "Количество воды на 1 кг сухой смеси" },
        value: "0,29-0,32 l / л"
      },
      {
        label: { uz: "Qotgan eritmaning zichligi", ru: "Плотность затвердевшего раствора" },
        value: "Kamida 2000 kg/m³ / Не менее 2000 кг/м³"
      },
      {
        label: { uz: "Qo'llaniladigan qatlam qalinligi", ru: "Толщина наносимого слоя" },
        value: "5-100 mm / мм"
      },
      {
        label: { uz: "10 mm qalinlikda sarfi", ru: "Расход при толщине слоя 10 мм" },
        value: "18 kg/m² / кг/м²"
      },
      {
        label: { uz: "Eritmaning ishga yaroqlik vaqti", ru: "Время пригодности раствора к работе" },
        value: "30 daqiqa / минут"
      },
      {
        label: { uz: "Yurish imkoniyati", ru: "Возможность хождения" },
        value: "5-6 soatdan keyin / через 5-6 часов"
      },
      {
        label: { uz: "28 kundan keyin asosga yopishish", ru: "Адгезия к основанию через 28 суток" },
        value: "Kamida 0.8 MPa / не менее 0.8 МПа"
      },
      {
        label: { uz: "28 kundan keyin egilishda tortishish mustahkamligi", ru: "Прочность на растяжение при изгибе через 28 суток" },
        value: "Kamida 4 MPa / не менее 4 МПа"
      },
      {
        label: { uz: "28 kundan keyin siqilishdagi mustahkamlik", ru: "Прочность при сжатии через 28 суток" },
        value: "Kamida 20 MPa / не менее 20 МПа"
      },
      {
        label: { uz: "Harakatchanlik (oqish qobiliyati)", ru: "Подвижность (растекаемость) растворной смеси" },
        value: "260-300 mm / мм"
      },
      {
        label: { uz: "Qisqarish deformatsiyasi", ru: "Деформация усадки" },
        value: "Ko'pi bilan 1,5 mm/m / Не более 1,5 мм/м"
      },
      {
        label: { uz: "Kengayish deformatsiyasi", ru: "Деформация расширения" },
        value: "Ko'pi bilan 0,5 mm/m / Не более 0,5 мм/м"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "NG (yonmaydigan) / НГ (не горючая)"
      },
      {
        label: { uz: "Ish harorati", ru: "Температура проведения работ" },
        value: "+5°C...+30°C"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "-40°C...+70°C"
      },
      {
        label: { uz: "Kafolat saqlash muddati", ru: "Гарантийный срок хранения" },
        value: "12 oy / месяцев"
      }
    ]
  },
  {
    id: "penoplex-fastmix-screed",
    name: "Стяжка для пола PENOPLEX FASTMIX",
    category: "penopleks",
    images: [penoplexFastmixScreed],
    description: {
      uz: "PENOPLEX FASTMIX STЯЖKA DLЯ POLA quruq dispers aralashma sirtlarni asosiy tekislash va nishab yaratish uchun mo'ljallangan, 10 dan 100 mm gacha qatlamda o'z-o'zidan tekislovchi aralashmalarni keyingi qo'llash va pol qoplamalarini mahkamlash ostida, sirtga yuklama 200 kg/sm2 dan oshmasligi kerak.\n\n**Qo'llanilish sohasi:**\n• Pollar\n• Asoslar\n\n**Xususiyatlari:**\n• Monolit qoplamalarni yaratish uchun ishlatiladi\n• «Suzuvchi» styajkalarni o'rnatish\n• Ajratish qatlami ustidagi styajkalar\n• Har qanday namlik darajasiga ega bo'lgan ichki xonalar uchun\n• Sezilarli harorat o'zgarishlariga duchor bo'lgan asoslar uchun (isitilmaydigan yopiq terrasalar va balkonlar, isitish bilan pollar)\n• Yuqori ekspluatatsion yuklarga duchor bo'lgan joylar uchun (omborlar, garajlar, sanoat binolari)\n\n**AFZALLIKLARI:**\n\n**YUQORI MUSTAHKAMLIK** – Siqilishda 20 MPa gacha mustahkamlik, og'ir yuklarga bardoshlilik\n\n**QULAY MONTAJ** – Qo'lda usulda qo'llash, 30 daqiqa ichida ishga tayyor\n\n**KENG HARORAT ORALIG'I** – -40°C dan +70°C gacha foydalanish mumkin\n\n**EKOLOGIK XAVFSIZ** – Yonmaydigan material (NG guruhi)",
      ru: "Смесь сухая дисперсная PENOPLEX FASTMIX СТЯЖКА ДЛЯ ПОЛА предназначена для базового выравнивания поверхностей и создания уклонов слоем от 10 до 100 мм под последующее нанесения самовыравнивающихся смесей и крепление напольных покрытий с нагрузкой на поверхность не более 200 кг/см2.\n\n**Область применения:**\n• Полы\n• Основания\n\n**Используется для:**\n• Создания монолитных покрытий\n• Устройства «плавающих» стяжек\n• Стяжек на разделительном слое\n• Внутри помещений с любым уровнем влажности\n• Для оснований, подверженных значительным температурным колебаниям (неотапливаемые крытые террасы и балконы, полы с подогревом)\n• Для повышенных эксплуатационных нагрузок (склады, гаражи, промышленные помещения)\n\n**ПРЕИМУЩЕСТВА:**\n\n**ВЫСОКАЯ ПРОЧНОСТЬ** – Прочность при сжатии до 20 МПа, выдерживает значительные нагрузки\n\n**УДОБСТВО МОНТАЖА** – Применяется для заливки полов ручным способом, пригодность раствора 30 минут\n\n**ШИРОКИЙ ТЕМПЕРАТУРНЫЙ ДИАПАЗОН** – Эксплуатация от -40°C до +70°C\n\n**ЭКОЛОГИЧЕСКИ БЕЗОПАСЕН** – Не горючий материал (группа НГ)\n\n**МОРОЗОСТОЙКОСТЬ** – Не менее 50 циклов замораживания/оттаивания"
    },
    specs: [
      {
        label: { uz: "Rang", ru: "Цвет" },
        value: "Kulrang / Серый"
      },
      {
        label: { uz: "1 kg quruq aralashmaga suv miqdori, l", ru: "Количество воды на 1 кг сухой смеси, л" },
        value: "0,13-0,16"
      },
      {
        label: { uz: "Qotgan eritmaning zichligi", ru: "Плотность затвердевшего раствора" },
        value: "2200 kg/m³ / кг/см³"
      },
      {
        label: { uz: "Qo'llaniladigan qatlam qalinligi, mm", ru: "Толщина наносимого слоя, мм" },
        value: "10-100"
      },
      {
        label: { uz: "10 mm qatlam qalinligida sarfi, kg/m²", ru: "Расход при толщине слоя 10 мм, кг/м²" },
        value: "18"
      },
      {
        label: { uz: "Eritmaning ishga yaroqlik vaqti", ru: "Время пригодности раствора к работе" },
        value: "30 daqiqa / минут"
      },
      {
        label: { uz: "Yurish imkoniyati", ru: "Возможность хождения" },
        value: "24 soatdan keyin / через 24 часа"
      },
      {
        label: { uz: "Tekislovchi aralashmalarni qo'llash", ru: "Нанесение выравнивающих смесей" },
        value: "7-14 kundan keyin / через 7-14 суток"
      },
      {
        label: { uz: "Pol qoplamalarini yotqizish", ru: "Укладка напольного покрытия" },
        value: "14-28 kundan keyin / через 14-28 суток"
      },
      {
        label: { uz: "28 kundan keyin asosga yopishish", ru: "Адгезия к основанию через 28 суток" },
        value: "Kamida 0.75 MPa / не менее 0,75 МПа"
      },
      {
        label: { uz: "28 kundan keyin siqilishdagi mustahkamlik", ru: "Прочность при сжатии через 28 суток" },
        value: "Kamida 20 MPa / не менее 20 МПа"
      },
      {
        label: { uz: "28 kundan keyin egilishdagi mustahkamlik", ru: "Прочность на изгибе через 28 суток" },
        value: "Kamida 4 MPa / не менее 4 МПа"
      },
      {
        label: { uz: "Harakatchanlik (oqish qobiliyati), mm", ru: "Подвижность (растекаемость) растворной смеси, мм" },
        value: "100-120"
      },
      {
        label: { uz: "Sovuqqa chidamlilik", ru: "Морозостойкость" },
        value: "Kamida 50 tsikl / Не менее 50 циклов"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "NG (yonmaydigan) / НГ (не горючая)"
      },
      {
        label: { uz: "Ish harorati", ru: "Температура проведения работ" },
        value: "+5°C...+30°C"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "-40°C...+70°C"
      },
      {
        label: { uz: "Kafolat saqlash muddati", ru: "Гарантийный срок хранения" },
        value: "12 oy / месяцев"
      }
    ]
  },
  {
    id: "penoplex-xps-underlay",
    name: "Подложка из XPS под ламинат и паркет",
    category: "penopleks",
    images: [penoplexXpsUnderlay],
    description: {
      uz: "PENOPLЭKS kompaniyasining XPS PODLOJKA — bu laminat va muhandislik taxtasi ostiga o'rnatish uchun maxsus ishlab chiqilgan yuqori sifatli va ishonchli pol qoplamasi elementi. Mahsulotning asosi — ekstruzion penopolistirol (XPS), eng mustahkam va uzoq muddatli issiqlik izolyatsiya materiallari sifatida o'zini isbotlagan.\n\n**Qo'llanilish sohasi:**\n• Laminat ostida\n• Parket taxtasi ostida\n• Muhandislik taxtasi ostida\n\n**O'lchamlar:**\n• Qalinligi: 3 mm va 5 mm\n• List o'lchami: 600 × 1200 mm\n• Qadoqda: 7 list (5,04 m²)\n\n**AFZALLIKLARI:**\n\n**YUKLARGA BARDOSHLILIK** – Vaqt o'tishi bilan siqilmaydi, doimiy xususiyatlarni saqlaydi\n\n**SIRTNI TEKISLASH** – Styajkaning notekisliklarini tekislaydi\n\n**SHOVQINNI PASAYTIRISH** – Zarba shovqini va tebranish darajasini pasaytiradi\n\n**OSON MONTAJ** – O'rnatishni soddalashtiradi va tezlashtiradi\n\n**PROFESSIONAL VA SHAXSIY FOYDALANISH** – Ham professional, ham shaxsiy foydalanish uchun mos keladi",
      ru: "XPS ПОДЛОЖКА от компании ПЕНОПЛЭКС — это качественный и надёжный элемент для финишной отделки пола, специально разработанный для укладки под ламинат и инженерную доску. Основа изделия — экструзионный пенополистирол (XPS), зарекомендовавший себя как один из самых прочных и долговечных теплоизоляционных материалов.\n\n**Область применения:**\n• Финишная отделка полов\n• Под ламинат\n• Под паркетную доску\n• Под инженерную доску\n\n**Размеры:**\n• Толщина: 3 мм и 5 мм\n• Размер листа: 600 × 1200 мм\n• В упаковке: 7 листов (5,04 м²)\n\n**ПРЕИМУЩЕСТВА:**\n\n**ПОВЫШАЕТ УСТОЙЧИВОСТЬ К НАГРУЗКАМ** – Не сминается со временем, сохраняет постоянные характеристики\n\n**ВЫРАВНИВАЕТ НЕРОВНОСТИ** – Компенсирует неровности стяжки до 2-3,5 мм\n\n**СНИЖАЕТ УРОВЕНЬ ШУМА** – Уменьшает ударный шум и вибрацию\n\n**УПРОЩАЕТ МОНТАЖ** – Легко укладывается, ускоряет процесс монтажа\n\n**УНИВЕРСАЛЬНОСТЬ** – Подходит как для профессионального, так и для частного использования"
    },
    specs: [
      {
        label: { uz: "Nominal qalinlik, mm", ru: "Номинальная толщина, мм" },
        value: "3 / 5"
      },
      {
        label: { uz: "Qadoqdagi listlar soni, dona", ru: "Количество листов в упаковке, шт." },
        value: "7"
      },
      {
        label: { uz: "Qadoqdagi maydon, m²", ru: "Площадь в упаковке, м²" },
        value: "5,04"
      },
      {
        label: { uz: "O'rtacha zichlik, kg/m³", ru: "Средняя плотность, кг/м³" },
        value: "28 ± 7"
      },
      {
        label: { uz: "0,5 mm deformatsiyada siqilish mustahkamligi (3mm), kPa", ru: "Прочность на сжатие при деформации на 0,5 мм (3мм), кПа, не менее" },
        value: "200"
      },
      {
        label: { uz: "0,5 mm deformatsiyada siqilish mustahkamligi (5mm), kPa", ru: "Прочность на сжатие при деформации на 0,5 мм (5мм), кПа, не менее" },
        value: "190"
      },
      {
        label: { uz: "Nuqtaviy notekisliklarni tekislash qobiliyati (3mm), mm", ru: "Способность к выравниванию точечных неровностей (3мм), мм, не менее" },
        value: "2"
      },
      {
        label: { uz: "Nuqtaviy notekisliklarni tekislash qobiliyati (5mm), mm", ru: "Способность к выравниванию точечных неровностей (5мм), мм, не менее" },
        value: "3,5"
      },
      {
        label: { uz: "1,0 mm deformatsiyada siqilish mustahkamligi, kPa", ru: "Прочность на сжатие при деформации на 1,0 мм, кПа, не менее" },
        value: "250"
      },
      {
        label: { uz: "24 soat ichida hajm bo'yicha suv shimishi, %", ru: "Водопоглощение по объему за 24 ч, %, не более" },
        value: "1"
      },
      {
        label: { uz: "Issiqlik o'tkazuvchanligi, Vt/(m·K)", ru: "Теплопроводность, Вт/(м·К), не более" },
        value: "0,033"
      }
    ]
  },
  {
    id: "plastguard-membrane",
    name: "ПРОФИЛИРОВАННАЯ МЕМБРАНА PLASTGUARD",
    category: "penopleks",
    images: [plastguardMembraneRoll],
    description: {
      uz: "PLASTGUARD profillangan membranasi — yuqori zichlikdagi polietilen (HDPE) dan yasalgan matoda, sirtida tekis taqsimlangan kesik konus shaklidagi chiqintilar bor. Material sanoat, fuqarolik, yo'l qurilishida va ob'ektlarni rekonstruksiya qilishda keng ko'lamda qo'llaniladi.\n\n**Qo'llanilish sohasi:**\n• Yumshoq va yashil otmostkalar\n• Poydevor izolyatsiyasini himoya qilish\n• Poydevorlar ostidagi asoslar\n• Tomlarda gidroizolyatsiyani himoya qilish\n• Piyoda va bog' yo'laklari\n\n**Turi bo'yicha:**\n\n**HIMOYA MEMBRANALARI (PLASTGUARD 400, 500)** — ballastli tomlarning gidroizolyatsiyasini himoya qilish, poydevor devorlarini himoyalash, poydevor plitasi ostidagi beton tayyorgarligini almashtirish, otmostkalar va piyoda yo'laklarini qurishda qo'llaniladi.\n\n**DRENAJ-HIMOYA MEMBRANALARI GEOTEKSTIL BILAN (PLASTGUARD GEO, 900, 900G)** — ikki qavatli rulon materiali, geotekstil termik usul bilan chiqintilar uchlariga biriktirilgan. Profillangan asos drenaj va himoyani ta'minlaydi.\n\n**AFZALLIKLARI:**\n\n**BARCHA MAVSUMDA** — Barcha iqlim zonalarida yil davomida qo'llash mumkin\n\n**MUSTAHKAMLIK** — Siqilish va yirtilishga yuqori mexanik mustahkamlik\n\n**BIOSTOYLIK** — Agressiv muhit va mikroorganizmlarga chidamlilik\n\n**MONTAJ** — Yuqori montaj tezligi, oddiy va texnologik\n\n**KO'P FUNKSIONALLIK** — Turli xil vazifalarni hal qilish imkoniyati",
      ru: "Профилированная мембрана PLASTGUARD — это полотно из полиэтилена высокой плотности (HDPE) с равномерно расположенными на поверхности полотна выступами в форме усеченных конусов. Материал имеет широкий спектр применения в промышленном, гражданском, дорожном строительстве и при реконструкции объектов.\n\n**Область применения:**\n• Мягкие и зеленые отмостки\n• Защита изоляции фундаментов\n• Основания под фундаменты\n• Защита гидроизоляции в кровлях\n• Пешеходные и садовые дорожки\n\n**По типу:**\n\n**ЗАЩИТНЫЕ МЕМБРАНЫ (PLASTGUARD 400, 500)** — применяются для защиты гидроизоляции балластных кровель, стен фундамента, замены бетонной подготовки под фундаментную плиту, устройства отмосток и пешеходных дорожек.\n\n**ДРЕНАЖНО-ЗАЩИТНЫЕ МЕМБРАНЫ С ГЕОТЕКСТИЛЕМ (PLASTGUARD GEO, 900, 900G)** — двухслойный рулонный материал с равномерно размещенными выступами, к вершинам которых термически прикреплен геотекстиль. Профилированное основание обеспечивает дренаж и защиту.\n\n**ПРЕИМУЩЕСТВА:**\n\n**ВСЕСЕЗОННОСТЬ** — Круглогодичное применение во всех климатических зонах\n\n**ПРОЧНОСТЬ** — Высокая механическая прочность на сжатие и разрыв\n\n**БИОСТОЙКОСТЬ** — Стойкость к воздействию агрессивных сред и микроорганизмов\n\n**МОНТАЖ** — Высокая скорость монтажа, простота и технологичность\n\n**МНОГОФУНКЦИОНАЛЬНОСТЬ** — Возможность решения различных задач"
    },
    specs: [
      {
        label: { uz: "Mahsulot turi / Tip", ru: "Наименование / Тип" },
        value: "PLASTGUARD 400 / 500 / GEO / 900 / 900G"
      },
      {
        label: { uz: "Rulon o'lchamlari (400/500), m", ru: "Размеры рулона (400/500), м" },
        value: "1,0×20,0 / 2,0×20,0"
      },
      {
        label: { uz: "Rulon o'lchamlari (GEO), m", ru: "Размеры рулона (GEO), м" },
        value: "2,0×20,0"
      },
      {
        label: { uz: "Rulon o'lchamlari (900/900G), m", ru: "Размеры рулона (900/900G), м" },
        value: "2,0×10,0 / 2,0×20,0"
      },
      {
        label: { uz: "Konus shaklidagi chiqinti balandligi, mm", ru: "Высота конусообразного выступа, мм" },
        value: "8"
      },
      {
        label: { uz: "Siqilish mustahkamligi (400), kPa", ru: "Прочность на сжатие (400), кПа" },
        value: "100"
      },
      {
        label: { uz: "Siqilish mustahkamligi (500), kPa", ru: "Прочность на сжатие (500), кПа" },
        value: "130"
      },
      {
        label: { uz: "Siqilish mustahkamligi (GEO), kPa", ru: "Прочность на сжатие (GEO), кПа" },
        value: "150"
      },
      {
        label: { uz: "Siqilish mustahkamligi (900), kPa", ru: "Прочность на сжатие (900), кПа" },
        value: "320"
      },
      {
        label: { uz: "Siqilish mustahkamligi (900G), kPa", ru: "Прочность на сжатие (900G), кПа" },
        value: "340"
      },
      {
        label: { uz: "Siqilish mustahkamligining chegarasi (400), kPa", ru: "Предел прочности на сжатие (400), кПа" },
        value: "200"
      },
      {
        label: { uz: "Siqilish mustahkamligining chegarasi (500), kPa", ru: "Предел прочности на сжатие (500), кПа" },
        value: "280"
      },
      {
        label: { uz: "Siqilish mustahkamligining chegarasi (GEO), kPa", ru: "Предел прочности на сжатие (GEO), кПа" },
        value: "350"
      },
      {
        label: { uz: "1 m² mahsulot massasi (400), g", ru: "Масса 1м² изделия (400), г" },
        value: "400"
      },
      {
        label: { uz: "1 m² mahsulot massasi (500), g", ru: "Масса 1м² изделия (500), г" },
        value: "500"
      },
      {
        label: { uz: "1 m² mahsulot massasi (GEO), g", ru: "Масса 1м² изделия (GEO), г" },
        value: "600"
      },
      {
        label: { uz: "Maksimal tortish kuchi (400), N/50mm", ru: "Максимальная сила растяжения (400), Н/50мм" },
        value: "200 (bo'ylama) / 190 (ko'ndalang)"
      },
      {
        label: { uz: "Maksimal tortish kuchi (500), N/50mm", ru: "Максимальная сила растяжения (500), Н/50мм" },
        value: "280 (bo'ylama) / 270 (ko'ndalang)"
      },
      {
        label: { uz: "Nisbiy cho'zilish, %", ru: "Относительное удлинение при максимальной силе растяжения, %" },
        value: "30"
      }
    ]
  },
  {
    id: "penoplex-fastmix-facade-pro",
    name: "PENOPLEX FASTMIX ФАСАД ПРО",
    category: "penopleks",
    images: [penoplexFastmixFacadePro],
    description: {
      uz: "PENOPLEX FASTMIX FASAD PRO quruq dispers aralashmasi penopolistirol va mineral yung plitalarini mineral asosgga (g'isht, tosh, beton va gazobeton sirtlari) mahkamlash va ularda shishali to'r bilan mustahkamlangan asosiy shtukatur qatlamini qurishda qo'llaniladi.\n\n**Qo'llanilish sohasi:**\n• Devorlar (SFTK - Fasad Issiqlik Izolyatsiya Kompozitsion Tizimi)\n• Tashqi fasad ishlari\n• Ichki ishlar\n\n**Xususiyatlari:**\n• Penopolistirol plitalarini mahkamlash\n• Mineral yung plitalarini mahkamlash\n• Shishali to'r bilan mustahkamlangan asosiy shtukatur qatlami\n• Yuqori yoriqlarga chidamlilik\n• Zarba bardoshlilik\n• Issiqlik izolyatsiya materiallariga va asosgga yuqori adgesiya\n• Namlikning issiqlik izolyatsiyasi sirtiga kirishiga to'sqinlik qiladi\n• Kerakli bug' o'tkazuvchanligini ta'minlaydi\n\n**AFZALLIKLARI:**\n\n**2 IN 1 TARKIB** — Yopishtiruvchi va shtukatur funktsiyalarini birlashtiradi\n\n**YUQORI MUSTAHKAMLIK** — Zarba bardoshliligi kamida 6 J, siqilishda 10 MPa gacha\n\n**SOVUQQA CHIDAMLILIK** — 100 tsiklgacha muzlash/eritish bardosh beradi\n\n**UZOQ ISHLASH VAQTI** — Eritmaning yaroqlilik muddati 3 soatdan kam emas\n\n**EKOLOGIK XAVFSIZ** — Yonmaydigan material (NG guruhi)\n\n**YUQORI ADGESIYA** — Beton bilan 1,0 MPa, penopolistirol bilan 0,12 MPa",
      ru: "Штукатурно-клеевой состав для систем фасадных теплоизоляционных композиционных с наружными штукатурными слоями (СФТК) PENOPLEX FASTMIX ФАСАД ПРО применяется для крепления плит из экструзионного полистирола, пенополистирольных и минераловатных плит к минеральным основаниям и устройства на них базового штукатурного слоя.\n\n**Область применения:**\n• Стены (СФТК - Системы Фасадные Теплоизоляционные Композиционные)\n• Наружные фасадные работы\n• Внутренние работы\n\n**Характеристики:**\n• Крепление пенополистирольных плит\n• Крепление минераловатных плит\n• Устройство базового штукатурного слоя, армированного стеклотканевой сеткой\n• Высокая трещиностойкость\n• Ударопрочность\n• Высокая адгезия к теплоизоляционным материалам и основаниям\n• Препятствует проникновению влаги к поверхности теплоизоляции\n• Обеспечивает необходимую паропроницаемость\n\n**ПРЕИМУЩЕСТВА:**\n\n**СОСТАВ 2 В 1** — Совмещает клеевую и штукатурную функции\n\n**ВЫСОКАЯ ПРОЧНОСТЬ** — Ударная прочность не менее 6 Дж, прочность при сжатии до 10 МПа\n\n**МОРОЗОСТОЙКОСТЬ** — Выдерживает до 100 циклов замораживания/оттаивания\n\n**ДЛИТЕЛЬНОЕ ВРЕМЯ РАБОТЫ** — Время пригодности раствора не менее 3 часов\n\n**ЭКОЛОГИЧЕСКИ БЕЗОПАСЕН** — Не горючий материал (группа НГ)\n\n**ВЫСОКАЯ АДГЕЗИЯ** — С бетоном 1,0 МПа, с пенополистиролом 0,12 МПа"
    },
    specs: [
      {
        label: { uz: "Rang", ru: "Цвет" },
        value: "Kulrang / Серый"
      },
      {
        label: { uz: "1 kg quruq aralashmaga suv miqdori, l", ru: "Количество воды на 1 кг сухой смеси, л" },
        value: "0,18-0,22"
      },
      {
        label: { uz: "Qotgan eritmaning zichligi", ru: "Плотность затвердевшего раствора" },
        value: "1500-1600 g/sm³ / г/см³"
      },
      {
        label: { uz: "Issiqlik izolyatsiyasini yopishtirishda aralashma sarfi, kg/m²", ru: "Расход смеси при приклеивании теплоизоляции, кг/м²" },
        value: "5,0-6,0"
      },
      {
        label: { uz: "Mustahkamlash qatlamida aralashma sarfi (3mm), kg/m²", ru: "Расход смеси при выполнении армирующего слоя (при толщине 3 мм), кг/м²" },
        value: "3,0-4,0"
      },
      {
        label: { uz: "Eritmaning ishga yaroqlik vaqti", ru: "Время пригодности раствора к работе" },
        value: "Kamida 3 soat / не менее 3 часов"
      },
      {
        label: { uz: "Quritish vaqti", ru: "Время высыхания" },
        value: "24 soatdan keyin / через 24 часа"
      },
      {
        label: { uz: "28 kundan keyin beton asos bilan adgesiya", ru: "Адгезия к бетонному основанию через 28 суток" },
        value: "Kamida 1,0 MPa / не менее 1,0 МПа"
      },
      {
        label: { uz: "28 kundan keyin penopolistirol bilan adgesiya", ru: "Адгезия к пенополистиролу через 28 суток" },
        value: "Kamida 0,12 MPa / не менее 0,12 МПа"
      },
      {
        label: { uz: "28 kundan keyin va 48 soat suvda ushlab turganidan keyin penopolistirol bilan adgesiya", ru: "Адгезия к пенополистирольному основанию через 28 суток и после выдержки в воде в течение 48 часов" },
        value: "Kamida 0,08 MPa / не менее 0,08 МПа"
      },
      {
        label: { uz: "28 kundan keyin siqilishdagi mustahkamlik", ru: "Прочность при сжатии через 28 суток" },
        value: "Kamida 10 MPa / не менее 10 МПа"
      },
      {
        label: { uz: "28 kundan keyin egilishda tortishish mustahkamligi", ru: "Прочность на растяжение при изгибе через 28 суток" },
        value: "Kamida 4 MPa / не менее 4 МПа"
      },
      {
        label: { uz: "28 kunlik yoshida suv shimishi", ru: "Водопоглощение в возрасте 28 суток" },
        value: "Ko'pi bilan 15% / не более 15%"
      },
      {
        label: { uz: "Bug' o'tkazuvchanlik koeffitsienti", ru: "Коэффициент паропроницаемости" },
        value: "0,08 mg/(m·h·Pa) / мг/(м·ч·Па)"
      },
      {
        label: { uz: "Qisqarish deformatsiyasi", ru: "Деформация усадки" },
        value: "Ko'pi bilan 0,5 mm/m / не более 0,5 мм/м"
      },
      {
        label: { uz: "Sovuqqa chidamlilik", ru: "Морозостойкость" },
        value: "100 tsikl / циклов"
      },
      {
        label: { uz: "Zarba mustahkamligi", ru: "Ударная прочность" },
        value: "Kamida 6 J / не менее 6 Дж"
      },
      {
        label: { uz: "Yonuvchanlik guruhi", ru: "Группа горючести" },
        value: "NG (yonmaydigan) / НГ (не горючая)"
      },
      {
        label: { uz: "Ish harorati", ru: "Температура проведения работ" },
        value: "+5°C...+30°C"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "-40°C...+70°C"
      },
      {
        label: { uz: "Kafolat saqlash muddati", ru: "Гарантийный срок хранения" },
        value: "12 oy / месяцев"
      }
    ]
  },
  {
    id: "penoplex-fastmix-facade",
    name: "PENOPLEX FASTMIX ФАСАД",
    category: "penopleks",
    images: [penoplexFastmixFacade],
    description: {
      uz: "PENOPLEX FASTMIX FASAD quruq dispersli aralashma penopolistirol va mineral yung plitalarini mineral asoslarga mahkamlash va ularning ustiga shisha to'qima to'r bilan kuchaytirilgan bazis shtukaturka qatlamini o'rnatish uchun mo'ljallangan. Yuqori yorilishga chidamlilik va issiqlik izolyatsiya materiallariga yuqori adheziyaga ega.",
      ru: "Смесь сухая дисперсная PENOPLEX FASTMIX ФАСАД предназначена для крепления пенополистирольных и минераловатных плит к минеральным основаниям и устройства на них базового штукатурного слоя, армированного стеклотканевой сеткой. Обладает высокой трещиностойкостью и высокой адгезией к теплоизоляционным материалам.",
    },
    specs: [
      {
        label: { uz: "Rang", ru: "Цвет" },
        value: "Kulrang / Серый"
      },
      {
        label: { uz: "1 kg quruq aralashma uchun suv miqdori", ru: "Количество воды на 1 кг сухой смеси" },
        value: "0,18-0,22 l / л"
      },
      {
        label: { uz: "Qotgan eritmaning zichligi", ru: "Плотность затвердевшего раствора" },
        value: "1450-1550 g/sm3 / г/см3"
      },
      {
        label: { uz: "Issiqlik izolyatsiyani yopishtirishda aralashma sarfi", ru: "Расход смеси при приклеивании теплоизоляции" },
        value: "5,0-6,0 kg/m2 / кг/м2"
      },
      {
        label: { uz: "Armaturlash qatlamida aralashma sarfi (3 mm qalinlikda)", ru: "Расход смеси при выполнении армирующего слоя (при толщине 3 мм)" },
        value: "3,0-4,0 kg/m2 / кг/м2"
      },
      {
        label: { uz: "Eritmaning ishga yaroqlilik vaqti", ru: "Время пригодности раствора к работе" },
        value: "kamida 3 soat / не менее 3 часов"
      },
      {
        label: { uz: "Quritish vaqti", ru: "Время высыхания" },
        value: "24 soatdan keyin / через 24 часа"
      },
      {
        label: { uz: "Beton asosga adheziya (28 sutka)", ru: "Адгезия к бетонному основанию через 28 суток" },
        value: "kamida 0,8 MPa / не менее 0,8 МПа"
      },
      {
        label: { uz: "Penopolistirolga adheziya (28 sutka)", ru: "Адгезия к пенополистиролу через 28 суток" },
        value: "kamida 0,12 MPa / не менее 0,12 МПа"
      },
      {
        label: { uz: "Penopolistirol asosga adheziya (28 sutka, 48 soat suvda)", ru: "Адгезия к пенополистирольному основанию через 28 суток и после выдержки в воде в течение 48 часов" },
        value: "kamida 0,08 MPa / не менее 0.08 МПа"
      },
      {
        label: { uz: "Siqishda mustahkamlik (28 sutka)", ru: "Прочность при сжатии через 28 суток" },
        value: "kamida 10 MPa / не менее 10 МПа"
      },
      {
        label: { uz: "Egilishda cho'zilishda mustahkamlik (28 sutka)", ru: "Прочность на растяжение при изгибе через 28 суток" },
        value: "kamida 4 MPa / не менее 4 МПа"
      },
      {
        label: { uz: "Suv yutilishi (28 kunlikda)", ru: "Водопоглощение в возрасте 28 суток" },
        value: "15% dan ortiq emas / не более 15%"
      },
      {
        label: { uz: "Bug' o'tkazuvchanlik koeffitsienti", ru: "Коэффициент паропроницаемости" },
        value: "0,08 mg/m*soat*Pa / мг/м*ч*Па"
      },
      {
        label: { uz: "Qisqarish deformatsiyasi", ru: "Деформация усадки" },
        value: "0,5 mm/m dan ortiq emas / не более 0,5 мм/м"
      },
      {
        label: { uz: "Sovuqqa chidamlilik", ru: "Морозостойкость" },
        value: "100 tsikl / циклов"
      },
      {
        label: { uz: "Zarba mustahkamligi", ru: "Ударная прочность" },
        value: "kamida 4 J / не менее 4 Дж"
      },
      {
        label: { uz: "Yonish guruhi", ru: "Группа горючести" },
        value: "NG (yonmaydigan) / НГ (не горючая)"
      },
      {
        label: { uz: "Ish harorati", ru: "Температура проведения работ" },
        value: "+5°C...+30°C"
      },
      {
        label: { uz: "Foydalanish harorati", ru: "Температура эксплуатации" },
        value: "-40°C...+70°C"
      },
      {
        label: { uz: "Kafolat saqlash muddati", ru: "Гарантийный срок хранения" },
        value: "12 oy / месяцев"
      }
    ],
    images: [penoplexFastmixFacade],
    category: "penopleks",
  },
  {
    id: "penoplex-fastfix",
    name: "PENOPLEX FASTFIX",
    category: "penopleks",
    images: [penoplexFastfix],
    description: {
      uz: "PENOPLEX FASTFIX - gibrid polimerlar asosida universal qurilish germetik. Gidroizolyatsiya membranasini tom o'tkazgichlari bilan bog'lash joylarini germetizatsiya qilish uchun qo'llaniladi. Atmosferaga chidamli, yuqori elastik va ko'pchilik qurilish materiallariga yaxshi yopishadi.",
      ru: "Однокомпонентный универсальный строительный клей-герметик на основе гибридных полимеров. Применяется для герметизации мест соединения гидроизоляционной ПВХ мембраны c кровельными проходками. Атмосферостойкий, высокоэластичный с отличной адгезией к большинству строительных материалов.",
    },
    specs: [
      {
        label: { uz: "Qadoq uzunligi", ru: "Длина упаковки" },
        value: "380 mm / мм"
      },
      {
        label: { uz: "Qadoq kengligi", ru: "Ширина упаковки" },
        value: "220 mm / мм"
      },
      {
        label: { uz: "Qadoq balandligi", ru: "Высота упаковки" },
        value: "160 mm / мм"
      },
      {
        label: { uz: "Qadoq maydoni", ru: "Площадь упаковки" },
        value: "0,0836 m² / м²"
      },
      {
        label: { uz: "Qadoq hajmi", ru: "Объем упаковки" },
        value: "0,01338 m³ / м³"
      },
      {
        label: { uz: "Qadoq og'irligi", ru: "Вес упаковки" },
        value: "11,3 kg / кг"
      },
      {
        label: { uz: "Qadoqdagi mahsulot soni", ru: "Количество товара в упаковке" },
        value: "12 dona / шт."
      },
      {
        label: { uz: "Kafolat saqlash muddati", ru: "Гарантийный срок хранения" },
        value: "12 oy / месяцев"
      }
    ],
    images: [penoplexFastfix],
    category: "penopleks",
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
