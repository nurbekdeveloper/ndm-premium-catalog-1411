import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageLightbox from "@/components/ImageLightbox";
import OrderDialog from "@/components/OrderDialog";
import { ArrowLeft, Expand, Minus, Plus, BarChart3, Edit, Package, Box } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
interface PenopleksProductDetailProps {
  product: Product;
}
const PenopleksProductDetail = ({
  product
}: PenopleksProductDetailProps) => {
  const navigate = useNavigate();
  const {
    language,
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedThickness, setSelectedThickness] = useState<number>(product.id === "penoplex-geo" ? 40 : product.id === "penoplex-facade" ? 40 : product.id === "penoplex-roof" ? 50 : product.id === "penoplex-45" ? 50 : product.id === "penoplex-slope" ? 50 : 50);

  // Thickness options based on product
  const thicknessOptions = product.id === "penoplex-geo" ? [40, 50, 60, 80, 100] : product.id === "penoplex-facade" ? [30, 40, 50, 60, 80, 100, 120, 150] : product.id === "penoplex-roof" ? [30, 40, 50, 60, 80, 100] : product.id === "penoplex-45" ? [40, 50, 60, 80, 100] : product.id === "penoplex-slope" ? [40, 50, 60, 80, 100] : [50, 100];

  // Packaging data for each thickness
  const packagingData: Record<number, {
    quantity: number;
    area: number;
    edgeType: string;
  }> = product.id === "penoplex-geo" ? {
    40: {
      quantity: 10,
      area: 6.93,
      edgeType: "T-15"
    },
    50: {
      quantity: 8,
      area: 5.55,
      edgeType: "T-15"
    },
    60: {
      quantity: 5,
      area: 3.47,
      edgeType: "T-15"
    },
    80: {
      quantity: 5,
      area: 3.47,
      edgeType: "T-15"
    },
    100: {
      quantity: 4,
      area: 2.77,
      edgeType: "T-15"
    }
  } : {
    50: {
      quantity: 7,
      area: 4.85,
      edgeType: "T-15"
    },
    100: {
      quantity: 4,
      area: 2.77,
      edgeType: "T-15"
    }
  };
  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };
  const handleBuy = () => {
    toast({
      title: t("Savatga qo'shildi", "Добавлено в корзину"),
      description: `${product.name} - ${selectedThickness}mm (${quantity} ${t("dona", "шт")})`
    });
  };
  const productImages = product.images.map((img, index) => ({
    src: img,
    alt: `${product.name} - ${index + 1}`
  }));
  return <>
      <ImageLightbox images={productImages} initialIndex={selectedImageIndex} isOpen={isLightboxOpen} onClose={() => setIsLightboxOpen(false)} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => navigate("/catalog")} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Katalogga qaytish", "Вернуться в каталог")}
          </Button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
              {product.id === "plastfoil-membrane" ? t("ГИДРОИЗОЛЯЦИОННАЯ МЕМБРАНА PLASTFOIL", "ГИДРОИЗОЛЯЦИОННАЯ МЕМБРАНА PLASTFOIL") : product.name}
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Application Area */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-heading font-semibold text-sm mb-4 text-primary uppercase">
                  {t("Qo'llanish sohasi", "Область применения")}
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {product.id === "plastfoil-membrane" ? <>
                      <p>{t("Tom va qoplamalar", "Крыши и покрытия")}</p>
                      <p>{t("Poydevorlar", "Фундаменты")}</p>
                      <p>{t("Obodonlashtirish", "Благоустройство")}</p>
                      <p>{t("Transport infratuzilmasi ob'ektlari, quvurlar", "Объекты транспортной инфраструктуры, трубопроводы")}</p>
                      <p className="text-primary font-medium mt-4">
                        {t("Polimer membrana PLASTFOIL PGSda gidroizolyatsiya uchun keng qo'llaniladi", "Полимерная мембрана PLASTFOIL широко применяется в ПГС для гидроизоляции ограждающих конструкций, емкостных сооружений и резервуаров, а также на объектах транспортной инфраструктуры")}
                      </p>
                    </> : product.id === "penoplex-extreme" ? <>
                      <p>{t("Poydevorlar", "Фундаменты")}</p>
                      <p>{t("Parkovka asoslari", "Основания парковок")}</p>
                      <p>{t("Yuqori yuklamadagi pollar", "Полы под высокой нагрузкой")}</p>
                      <p className="text-primary font-medium mt-4">
                        {t("Xususiy uy qurilishi uchun ekstruzion penopolistiroldan yuqori mustahkamlikdagi issiqlik izolyatsiyasi. Yuklamalar ostidagi konstruksiyalar uchun mo'ljallangan: poydevorlar, asoslar.", "Теплоизоляция высокой прочности из экструзионного пенополистирола для частного домостроения. Предназначен для конструкций, находящихся под нагрузками: фундаменты, основания.")}
                      </p>
                    </> : product.id === "penoplex-geo" ? <>
                      <p>{t("Pollar", "Полы")}</p>
                      <p>{t("Ishlatilayotgan tomlar", "Эксплуатируемые крыши")}</p>
                      <p>{t("Poydevorlar", "Фундаменты")}</p>
                      <p>{t("Tsokollar", "Цоколи")}</p>
                      <p>{t("Qavat plitalari (termoqo'shimchalar)", "Плиты перекрытий (термовкладыши)")}</p>
                      <p className="text-primary font-medium mt-4">
                        {t("Professional sanoat va fuqarolik qurilishi segmentida foydalaniladigan universal issiqlik izolyatsiya plitalari turi. Nisbatan yuqori yuklarga duchor bo'lgan konstruksiyalar uchun tavsiya etiladi.", "Универсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для конструкций, подверженных относительно высоким нагрузкам.")}
                      </p>
                    </> : product.id === "penoplex-osnova" ? <>
                      <p>{t("Tomlar va qoplamalar", "Крыши и покрытия")}</p>
                      <p>{t("G'isht qoplamali devorlar", "Стены с кирпичной облицовкой")}</p>
                      <p>{t("Pollar va qavat yopmalari", "Полы и перекрытия")}</p>
                      <p>{t("Tsokollar", "Цоколи")}</p>
                      <p>{t("Termoqo'shimchalar", "Термовкладыши")}</p>
                      <p>{t("Deformatsion tikuvlar", "Деформационные швы")}</p>
                      <p className="text-primary font-medium mt-4">
                        {t("Yuklamadagi konstruksiyalarda qo'llash oldindan bajarilgan hisob-kitoblar asosida ruxsat etiladi", "Применение в нагружаемых конструкциях допускается на основании предварительно выполненных расчетов")}
                      </p>
                    </> : product.id === "penoplex-foundation" ? <>
                      <p>{t("Poydevorlar", "Фундаменты")}</p>
                      <p>{t("Pollar", "Полы")}</p>
                      <p>{t("Tekis tomlar", "Плоские крыши")}</p>
                      <p>{t("Landshaft", "Ландшафт")}</p>
                      <p>{t("Xo'jalik binolari", "Хозяйственные постройки")}</p>
                      <p>{t("Muhandislik tizimlari", "Инженерные системы")}</p>
                      <p className="text-primary font-medium mt-4">
                        {t("Xususiy uy qurilishi uchun ekstruzion penopolistiroldan issiqlik izolyatsiya plitalari. Yuklangan konstruksiyalarda foydalanish uchun", "Теплоизоляционные плиты из экструзионного пенополистирола для частного домостроения. Для использования в нагружаемых конструкциях")}
                      </p>
                    </> : <>
                      <p>{t("Shtukaturka fasadlar", "Штукатурные фасады")}</p>
                      <p>{t("Dekorativ plitka bilan fasadlar", "Фасады с декоративной плиткой")}</p>
                      <p>{t("Xususiy uy qurilishi uchun ekstruzion penopolistiroldan issiqlik izolyatsiya plitalari.", "Теплоизоляционные плиты из экструзионного пенополистирола для частного домостроения.")}</p>
                      <p className="text-primary font-medium">
                        {t("Devorlar va fasadlar uchun qo'llaniladi", "Применяются для стен и фасадов")}
                      </p>
                    </>}
                </div>
              </div>
            </div>

            {/* Center Column - Main Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                <img src={product.images[selectedImageIndex]} alt={product.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 rounded-full p-3">
                    <Expand className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {product.images.map((img, index) => <div key={index} className={`relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${selectedImageIndex === index ? "ring-2 ring-primary scale-105" : "hover:scale-105 opacity-70 hover:opacity-100"}`} onClick={() => setSelectedImageIndex(index)}>
                    <img src={img} alt={`${product.name} - ${index + 1}`} className="w-full h-full object-cover" />
                  </div>)}
              </div>
            </div>

            {/* Right Column - Purchase Options */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg border p-6 space-y-4">
                <h3 className="font-heading font-semibold text-sm mb-4 text-primary uppercase">
                  {t("Buyurtma berish", "Оформление заказа")}
                </h3>
                
                {/* Quantity Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t("Miqdor", "Количество")}
                  </label>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} className="h-10 w-10">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)} className="h-10 w-10">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Thickness Selector for Penopleks */}
                {product.id !== "plastfoil-membrane"}

                {/* Packaging Information */}
                {product.id !== "plastfoil-membrane" && packagingData[selectedThickness] && (
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground">{t("Qadoq ma'lumotlari", "Информация об упаковке")}</h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">{t("Miqdori", "Количество")}</p>
                        <p className="font-semibold">{packagingData[selectedThickness].quantity} {t("dona", "шт")}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t("Maydon", "Площадь")}</p>
                        <p className="font-semibold">{packagingData[selectedThickness].area} м²</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">{t("Qirra turi", "Тип кромки")}</p>
                        <p className="font-semibold">{packagingData[selectedThickness].edgeType}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Order Button */}
                <OrderDialog productName={`${product.name}${product.id !== "plastfoil-membrane" ? ` - ${selectedThickness}mm` : ""}`} className="w-full btn-premium" />

                {/* Product Info */}
                <div className="pt-4 border-t">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex justify-between">
                      <span>{t("Kategoriya", "Категория")}:</span>
                      <span className="font-medium">
                        {product.category === "penopleks" ? t("Izolyatsiya", "Изоляция") : t("Membrana", "Мембрана")}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span>{t("Mavjud", "В наличии")}:</span>
                      <span className="font-medium text-green-600">{t("Ha", "Да")}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground uppercase">{t("Характеристики", "Характеристики")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Edit className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground uppercase">{t("Подборка", "Подборка")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground uppercase">{t("Доставка", "Доставка")}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <Box className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground uppercase">{t("Калькулятор", "Калькулятор")}</p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-card rounded-lg border">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent h-auto p-0">
                <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
                  <span className="text-4xl font-light text-muted-foreground mr-3">01</span>
                  {t("Описание", "Описание")}
                </TabsTrigger>
                <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
                  {t("Технические характеристики", "Технические характеристики")}
                </TabsTrigger>
              </TabsList>

              <div className="p-8">
                <TabsContent value="description" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                        {t("Описание", "Описание")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === "uz" ? product.description.uz : product.description.ru}
                      </p>
                    </div>
                    
                    {product.id === "plastfoil-membrane" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("ARMATURALANGAN PVX MEMBRANALAR", "АРМИРОВАННЫЕ ПВХ МЕМБРАНЫ")}
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL CLASSIC</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Mexanik mahkamlash usuli bilan tekis tomlarni gidroizolyatsiya qilish uchun qo'llaniladi. Sement-qum styajka bo'yicha tom qurilishida ajoyib tanlov. Uzluksiz bo'lmagan ballastli tomlar uchun ham qo'llanilishi mumkin.", "Применяется для гидроизоляции плоских кровель с механическим способом фиксации. Отличный выбор при устройстве кровли по цементно-песчаной стяжке (сборной стяжке). Возможно применение для балластных кровель с несплошным балластом.")}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL POLAR</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Mexanik mahkamlash bilan tom konstruksiyalarini gidroizolyatsiya qilish uchun ishlab chiqilgan. Kuchaytirilgan sovuqqa chidamlikka ega va qish mavsumida sovuq hududlarda montaj qilish uchun ideal (brusdagi egiluvchanlik -55°C).", "Разработана для гидроизоляции конструкций кровель с механическим креплением. Обладает усиленной морозостойкостью и идеально подходит для монтажа в зимний период в холодных регионах (гибкость на брусе -55°С).")}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL ECO</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Mexanik mahkamlash usuli bilan tekis tomlarni gidroizolyatsiya qilish uchun mo'ljallangan. Janubiy hududlarda qo'llash uchun ideal, chunki UV nurlanishiga kuchaytirilgan chidamlikka va oq rang (RAL 9001) tufayli quyosh nurlarini qaytarish qobiliyatiga ega.", "Предназначена для гидроизоляции плоских кровель с механическим способом фиксации. Идеально подходит для применения в южных регионах, так как обладает усиленной стойкостью к УФ-излучению и отражательной способностью солнечных лучей за счет белого цвета (RAL 9001).")}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL FL</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Yong'in xavfsizligiga oshirilgan talablar bilan mexanik mahkamlash usuli bilan tomlarni qurishda tavsiya etiladi. Yonuvchanlik guruhi G1.", "Рекомендована для устройства кровель с механическим способом фиксации с повышенными требованиями к пожарной безопасности. Группа горючести Г1.")}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL LAY</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Foydalanilmaydigan tomda piyodalar yo'laklarini qurishda foydalanish uchun ideal yechim. Membrananing teksturalangan sirti yomg'ir va qor paytida tomda harakat qilishda sirpanishni kamaytiradi.", "Идеальное решение при использовании в качестве устройства пешеходных дорожек на неэксплуатируемой кровле. Текстурированная поверхность мембраны снижает скольжение при передвижении по кровле в период осадков (дождь, снег).")}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("ARMATURASIZ PVX MEMBRANALAR", "НЕАРМИРОВАННЫЕ ПВХ МЕМБРАНЫ")}
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL ART</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Turli xil tom konstruksiyalari (quvurlar, voronkalar, ustunlar) bilan birlashtirish hamda mustahkamlash elementlarini ishlab chiqarish uchun qo'llaniladi. Ballastli tomlar yoki sun'iy suv havzalarini qurishda ham qo'llanilishi mumkin.", "Применяется для сопряжения с различными кровельными конструкциями (трубы, воронки, мачты), а также для изготовления элементов усиления. Возможно применение для устройства балластных кровель или искусственных водоемов.")}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">PLASTFOIL GEO</h4>
                              <p className="text-muted-foreground text-sm">
                                {t("Binolar va inshootlarning poydevorlarini, parkinglarni, foydalaniladigan tomlarni gidroizolyatsiya qilish uchun mo'ljallangan. Sariq rangli signal qatlamli ishlab chiqariladi, bu gidroizolyatsiya gilamining shikastlanishini tez aniqlash imkonini beradi. Optimal egiluvchanlik va elastiklikka ega, bu montajni qulay qiladi va konstruksiya va tuproqning mumkin bo'lgan harakatlari yoki deformatsiyalari bilan bog'liq gidroizolyatsiya qatlamining yirtilish xavfini qoplaydi.", "Предназначена для гидроизоляции фундаментов зданий и сооружений, паркингов, эксплуатируемых кровель. Производится с сигнальным слоем желтого цвета, что позволяет быстро обнаружить повреждения гидроизоляционного ковра. Обладает оптимальной гибкостью и эластичностью, что делает монтаж удобным и компенсирует риски разрывов гидроизоляционного слоя, связанные с возможными подвижками или деформациями конструкции и грунта.")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </> : product.id === "penoplex-foundation" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС ФУНДАМЕНТ", "Применение ПЕНОПЛЭКС ФУНДАМЕНТ")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Yuqori mustahkamlikdagi plitalar turi, xususiy uy qurilishi uchun mo'ljallangan. Yuklama ostidagi konstruksiyalarda qo'llash tavsiya etiladi: poydevorlar, pollar, tsokol, bog' yo'llari, foydalaniladigan tomlar.", "Тип плит повышенной прочности, предназначенный для частного домостроения. Рекомендуется для применения в конструкциях под нагрузкой: фундаментов, полов, цоколей, садовых дорожек, эксплуатируемых кровель.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС ФУНДАМЕНТ", "Характеристики ПЕНОПЛЭКС ФУНДАМЕНТ")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm mt-2">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <p className="text-muted-foreground">
                            {t("Sirt: silliq", "Поверхность: гладкая")}
                          </p>
                          <p className="text-muted-foreground">
                            {t("Rang: to'q sariq", "Цвет: оранжевый")}
                          </p>
                        </div>
                      </> : product.id === "penoplex-extreme" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС ЭКСТРИМ", "Применение ПЕНОПЛЭКС ЭКСТРИМ")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Plitalar markasi, xususiy uy qurilishida chuqur o'rnatiladigan va katta yuklamalar ostida bo'ladigan konstruksiyalar uchun mo'ljallangan (masalan, poydevorlar, chuqur tsokol, yopiq basseynlar asoslari). Ushbu turdagi plitalar yuqori mustahkamlikka ega va butun foydalanish muddati davomida (50 yildan ortiq) katta yuklarga dosh bera oladi.", "Марка плит, предназначенная для применения в частном домостроении для заглубленных конструкций, находящихся под большими нагрузками (например, фундаменты, заглубленные цоколи, основания бассейнов крытого типа). Плиты данного типа отличаются повышенной прочностью и способны выдерживать существенные нагрузки в течение всего срока эксплуатации (более 50 лет).")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС ЭКСТРИМ", "Характеристики ПЕНОПЛЭКС ЭКСТРИМ")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Yong'in xavfsizligi talablari to'g'risidagi texnik reglament №123-FZ", "Технический регламент о требованиях пожарной безопасности №123-ФЗ")}
                          </p>
                          <p className="text-muted-foreground text-sm mt-2">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <p className="text-muted-foreground">
                            {t("Sirt: silliq", "Поверхность: гладкая")}
                          </p>
                          <p className="text-muted-foreground">
                            {t("Rang: to'q sariq", "Цвет: оранжевый")}
                          </p>
                        </div>
                      </> : product.id === "penoplex-geo" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение", "Применение")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Professional sanoat va fuqarolik qurilishi segmentida foydalaniladigan universal issiqlik izolyatsiya plitalari turi. Pollar, ishlatilayotgan tomlar, poydevorlar, tsokollar, qavat plitalari (termoqo'shimchalar) issiqlik izolyatsiyasi uchun tavsiya etiladi, shu jumladan nisbatan yuqori yuklarga duchor bo'lgan konstruksiyalar uchun.", "Универсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции полов, эксплуатируемых крыш, фундаментов, цоколей, плит перекрытий (термовкладыши), в том числе конструкций, подверженных относительно высоким нагрузкам.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Преимущества", "Преимущества")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Ekologiklik", "Экологичность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Xavfsizlik", "Безопасность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Isbotlangan bio-chidamlilik", "Доказанная биостойкость")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("O'zgarmas past issiqlik o'tkazuvchanligi", "Неизменно низкая теплопроводность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan bir xil tuzilma)", "Практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Yuqori siqilishdagi mustahkamlik", "Высокая прочность на сжатие")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Tasdiqlangan uzoq umr", "Подтвержденная долговечность")}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Нормы / стандарты", "Нормы / стандарты")}
                          </h3>
                          <div className="space-y-2 text-muted-foreground">
                            <p>{t("ТУ 5767-006-54349294-2014", "ТУ 5767-006-54349294-2014")}</p>
                            <p className="text-sm">{t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}</p>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Внешний вид / цвет", "Внешний вид / цвет")}
                          </h3>
                          <div className="space-y-1 text-muted-foreground">
                            <p>{t("Sirt: silliq", "Поверхность: гладкая")}</p>
                            <p>{t("Rang: to'q sariq", "Цвет: оранжевый")}</p>
                          </div>
                        </div>
                      </> : product.id === "penoplex-osnova" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС ОСНОВА", "Применение ПЕНОПЛЭКС ОСНОВА")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan universal issiqlik izolyatsiya plitalari turi. Tsokollar, devorlar, pollar, tomlar, plitali qoplamalar (termoqo'shimchalar), deformatsion tikuvlarning to'ldirgichi sifatida issiqlik izolyatsiya qilish uchun tavsiya etiladi.", "Универсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции цоколей, стен, полов, крыш, плит перекрытий (термовкладыши), в качестве заполнителя деформационных швов.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС ОСНОВА", "Характеристики ПЕНОПЛЭКС ОСНОВА")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: silliq", "Поверхность: гладкая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </> : product.id === "penoplex-roof" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС КРОВЛЯ", "Применение ПЕНОПЛЭКС КРОВЛЯ")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan universal issiqlik izolyatsiya plitalari turi. Har qanday turdagi tomlarni, jumladan, yong'inga qarshi xavfsizlik talablari yuqori bo'lgan tomlarni issiqlik izolyatsiya qilish uchun tavsiya etiladi.", "Универсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции кровель любых типов, в том числе кровель с повышенными требованиями по пожарной безопасности.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС КРОВЛЯ", "Характеристики ПЕНОПЛЭКС КРОВЛЯ")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: silliq", "Поверхность: гладкая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </> : product.id === "penoplex-45" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС 45", "Применение ПЕНОПЛЭКС 45")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Ayniqsa mustahkam issiqlik izolyatsiya plitalari turi, kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladi. Yuqori mustahkamlikdagi material yuklarga alohida talablar qo'yiladigan konstruksiyalarda, shu jumladan yo'l qurilishida qo'llash uchun tavsiya etiladi.", "Особо прочный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Высокопрочный материал рекомендуется для применения в конструкциях, где предъявляются специальные требования к конструктиву по нагрузкам, в том числе для дорожного строительства.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС 45", "Характеристики ПЕНОПЛЭКС 45")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-56925804-2007
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: silliq", "Поверхность: гладкая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </> : product.id === "penoplex-slope" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС ГЕО", "Применение ПЕНОПЛЭКС ГЕО")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan universal issiqlik izolyatsiya plitalari turi. Yuklanuvchi konstruksiyalarni issiqlik izolyatsiya qilish uchun tavsiya etiladi: poydevorlar, pollar, stilobatlar, foydalaniladigan tomlar, qoplama tizimlari va hududni obodonlashtirish.", "Универсальный тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Рекомендуется для теплоизоляции нагружаемых конструкций: фундаментов, полов, стилобатов, эксплуатируемых крыш, систем мощения и благоустройства территории.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС ГЕО", "Характеристики ПЕНОПЛЭКС ГЕО")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: silliq", "Поверхность: гладкая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </> : product.id === "penoplex-floor" ? <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС УКЛОН", "Применение ПЕНОПЛЭКС УКЛОН")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Kasb-hunar sanoat va fuqarolik qurilishida qo'llaniladigan issiqlik izolyatsiya plitalari turi. Plitalar tekis tomlarda suv qabul qiluvchi voronkalarga qiyalik / qarshi qiyalik yaratish, shuningdek, parapet va ko'tarilgan konstruksiyalardan - zenith chiroqlari, ventilyatsiya shaftlaridan qo'shimcha suv oqizish uchun mo'ljallangan.", "Тип плит теплоизоляции, используемый в сегменте профессионального промышленного и гражданского строительства. Плиты предназначены для создания на плоских кровлях уклона / контруклона к водоприемным воронкам, а также для дополнительного водоотведения от парапета и выступающих конструкций — зенитных фонарей, вентиляционных шахт.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС УКЛОН", "Характеристики ПЕНОПЛЭКС УКЛОН")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• {t("ekologik xavfsizlik", "экологичность")}</li>
                            <li>• {t("xavfsizlik", "безопасность")}</li>
                            <li>• {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}</li>
                            <li>• {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}</li>
                            <li>• {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}</li>
                            <li>• {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}</li>
                            <li>• {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: silliq", "Поверхность: гладкая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </> : <>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Применение ПЕНОПЛЭКС СТЕНА", "Применение ПЕНОПЛЭКС СТЕНА")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("Maxsus tur plitalar, shtukaturka yoki plitka ostiga qo'llash uchun ishlab chiqilgan. Xususiy uy qurilishi uchun mo'ljallangan. Plitalar frezerlangan dag'al sirtga ega, bu shtukaturka-yopishtiruvchi tarkiblarning materialga yaxshi yopishishini yaxshilaydi va shtukaturka ishlarini tezlashtiradi.", "Специальный тип плит, разработанный для применения под штукатурную или плиточную отделку. Предназначен для частного домостроения. Плиты имеют фрезерованную шероховатую поверхность, что улучшает адгезию штукатурно-клеевых составов к поверхности материала и сокращает сроки выполнения штукатурных работ.")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Характеристики ПЕНОПЛЭКС СТЕНА", "Характеристики ПЕНОПЛЭКС СТЕНА")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("o'zgarmas past issiqlik o'tkazuvchanligi", "неизменно низкая теплопроводность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("amalda nolga teng suv shimishi (yopiq mustaqil hujayralardan iborat bir xil tuzilma)", "практически нулевое водопоглощение (однородная структура из закрытых независимых ячеек)")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("yuqori siqilishdagi mustahkamlik", "высокая прочность на сжатие")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("isbotlangan biologik barqarorlik", "доказанная биостойкость")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("tasdiqlangan uzoq xizmat muddati", "подтвержденная долговечность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("xavfsizlik", "безопасность")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("ekologik xavfsizlik", "экологичность")}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Normalar / standartlar", "Нормы / стандарты")}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-2">
                            ТУ 5767-006-54349294-2014
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t("Nazorat va ishlab chiqarishni baholash akkreditatsiyalangan laboratoriyalar tomonidan amalga oshiriladi", "Контроль и оценка производства проводится аккредитованными лабораториями")}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                            {t("Tashqi ko'rinish / rang", "Внешний вид / цвет")}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Sirt: dag'al", "Поверхность: шероховатая")}
                            </li>
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {t("Rang: to'q sariq", "Цвет: оранжевый")}
                            </li>
                          </ul>
                        </div>
                      </>}
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Технические характеристики", "Технические характеристики")}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-border">
                          <th className="text-left py-3 px-2 font-semibold text-sm">
                            {t("Nomenklatura", "Наименование")}
                          </th>
                          <th className="text-left py-3 px-2 font-semibold text-sm">
                            {t("Sinov usuli", "Метод испытаний")}
                          </th>
                          <th className="text-left py-3 px-2 font-semibold text-sm">
                            {t("O'lchov birligi", "Размерность")}
                          </th>
                          <th className="text-left py-3 px-2 font-semibold text-sm">
                            {t("Ko'rsatkich", "Показатель плит")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((spec, index) => <tr key={index} className="border-b border-border/50 last:border-0">
                            <td className="py-3 px-2 text-muted-foreground text-sm">
                              {language === "uz" ? spec.label.uz : spec.label.ru}
                            </td>
                            <td className="py-3 px-2 text-sm">
                              {spec.method || "-"}
                            </td>
                            <td className="py-3 px-2 text-sm">
                              {spec.value.includes("мм") || spec.value.includes("°С") || spec.value.includes("кПа") || spec.value.includes("Вт") || spec.value.includes("%") || spec.value.includes("кг") ? spec.value.split(" ").slice(-1)[0].replace(/[()]/g, "") : "-"}
                            </td>
                            <td className="py-3 px-2 font-semibold text-sm">
                              {spec.value}
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>;
};
export default PenopleksProductDetail;