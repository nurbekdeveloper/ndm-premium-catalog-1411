import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageLightbox from "@/components/ImageLightbox";
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
  const [selectedThickness, setSelectedThickness] = useState<number>(50);
  const thicknessOptions = [30, 50, 100];

  // Packaging data for each thickness
  const packagingData: Record<number, {
    quantity: number;
    area: number;
    edgeType: string;
  }> = {
    30: {
      quantity: 13,
      area: 9.01,
      edgeType: "T-15"
    },
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
              {t("ПЕНОПЛЭКС СТЕНА", "ПЕНОПЛЭКС СТЕНА")}
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Application Area */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg border p-6">
                <h3 className="font-heading font-semibold text-sm mb-4 text-primary uppercase">
                  {t("Область применения", "Область применения")}
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{t("Shtukaturka fasadlar", "Штукатурные фасады")}</p>
                  <p>{t("Dekorativ plitka bilan fasadlar", "Фасады с декоративной плиткой")}</p>
                  <p>{t("Xususiy uy qurilishi uchun ekstruzion penopolistiroldan issiqlik izolyatsiya plitalari.", "Теплоизоляционные плиты из экструзионного пенополистирола для частного домостроения.")}</p>
                  <p className="text-primary font-medium">
                    {t("Devorlar va fasadlar uchun qo'llaniladi", "Применяются для стен и фасадов")}
                  </p>
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
                <TabsTrigger value="documentation" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
                  {t("Документация", "Документация")}
                </TabsTrigger>
                <TabsTrigger value="packaging" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4">
                  {t("Упаковка", "Упаковка")}
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
                  </div>
                </TabsContent>

                <TabsContent value="specs" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Технические характеристики", "Технические характеристики")}
                  </h3>
                  <div className="space-y-3">
                    {product.specs.map((spec, index) => <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground font-medium">
                          {language === "uz" ? spec.label.uz : spec.label.ru}
                        </span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>)}
                  </div>
                </TabsContent>

                <TabsContent value="documentation" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Документация", "Документация")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("Техническая документация и сертификаты доступны по запросу.", "Техническая документация и сертификаты доступны по запросу.")}
                  </p>
                </TabsContent>

                <TabsContent value="packaging" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Упаковка", "Упаковка")}
                  </h3>
                  <div className="space-y-3">
                    {product.specs
                      .filter(spec => 
                        spec.label.ru.includes("упаковк") || 
                        spec.label.ru.includes("Упаковк") ||
                        spec.label.ru.toLowerCase().includes("упаковк")
                      )
                      .map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                          <span className="text-muted-foreground font-medium">
                            {language === "uz" ? spec.label.uz : spec.label.ru}
                          </span>
                          <span className="font-semibold">{spec.value}</span>
                        </div>
                      ))}
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