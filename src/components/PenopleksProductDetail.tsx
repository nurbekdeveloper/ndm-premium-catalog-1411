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

const PenopleksProductDetail = ({ product }: PenopleksProductDetailProps) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedThickness, setSelectedThickness] = useState<number>(50);

  const thicknessOptions = [30, 50, 100];

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleBuy = () => {
    toast({
      title: t("Savatga qo'shildi", "Добавлено в корзину"),
      description: `${product.name} - ${selectedThickness}mm (${quantity} ${t("dona", "шт")})`,
    });
  };

  const productImages = product.images.map((img, index) => ({
    src: img,
    alt: `${product.name} - ${index + 1}`
  }));

  return (
    <>
      <ImageLightbox
        images={productImages}
        initialIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/catalog")}
            className="mb-6"
          >
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
                  <p>{t("Штукатурные фасады", "Штукатурные фасады")}</p>
                  <p>{t("Фасады с декоративной облицовкой", "Фасады с декоративной облицовкой")}</p>
                  <p className="text-primary font-medium">
                    {t("Применяется для стен и фасадов", "Применяется для стен и фасадов")}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Main Image */}
            <div className="lg:col-span-6">
              <div 
                className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 rounded-full p-3">
                    <Expand className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-primary scale-105"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Purchase Options */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg border p-6 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-sm mb-4 uppercase">
                    {t("Выберите толщину материала", "Выберите толщину материала")}
                  </h3>
                  <div className="flex gap-2">
                    {thicknessOptions.map((thickness) => (
                      <button
                        key={thickness}
                        onClick={() => setSelectedThickness(thickness)}
                        className={`flex-1 py-2 px-3 rounded-md border-2 transition-all ${
                          selectedThickness === thickness
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-bold">{thickness}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("Количество в упаковке", "Количество в упаковке")}</span>
                    <span className="font-semibold">13 {t("шт", "шт")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("Площадь", "Площадь")}</span>
                    <span className="font-semibold">9.21 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("Размер", "Размер")}</span>
                    <span className="font-semibold">585 x 1185 x {selectedThickness} {t("мм", "мм")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("Тип кромки", "Тип кромки")}</span>
                    <span className="font-semibold">Г-15</span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                    onClick={handleBuy}
                  >
                    {t("КУПИТЬ", "КУПИТЬ")}
                  </Button>
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
                <TabsTrigger 
                  value="description" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  <span className="text-4xl font-light text-muted-foreground mr-3">01</span>
                  {t("Описание", "Описание")}
                </TabsTrigger>
                <TabsTrigger 
                  value="specs"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  {t("Технические характеристики", "Технические характеристики")}
                </TabsTrigger>
                <TabsTrigger 
                  value="documentation"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  {t("Документация", "Документация")}
                </TabsTrigger>
                <TabsTrigger 
                  value="packaging"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
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
                        {t("Применение материала", "Применение материала")}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(
                          "Специальный тип плит разработанный для применения под штукатурку или легкодоступную облицовку стены. Правильно-фасонные кромки частного домостроения. Плиты имеют оранжевую шероховатую поверхность, что улучшает адгезию штукатурно-клеевых составов к поверхности материала и сокращает сроки выполнения работ.",
                          "Специальный тип плит разработанный для применения под штукатурку или легкодоступную облицовку стены. Правильно-фасонные кромки частного домостроения. Плиты имеют оранжевую шероховатую поверхность, что улучшает адгезию штукатурно-клеевых составов к поверхности материала и сокращает сроки выполнения работ."
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-3 uppercase">
                        {t("Характеристики теплоизоляции", "Характеристики теплоизоляции")}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {t("невысокая теплопроводность", "невысокая теплопроводность")}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {t("повышенная нулевая водопоглощение (закрыто-ячеистая структура не вбирает влагу извне)", "повышенная нулевая водопоглощение (закрыто-ячеистая структура не вбирает влагу извне)")}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {t("высокая прочность на сжатие", "высокая прочность на сжатие")}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {t("долговечная биостойкость", "долговечная биостойкость")}
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {t("подтвержденная долговечность", "подтвержденная долговечность")}
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
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground font-medium">
                          {language === "uz" ? spec.label.uz : spec.label.ru}
                        </span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="documentation" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Документация", "Документация")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "Техническая документация и сертификаты доступны по запросу.",
                      "Техническая документация и сертификаты доступны по запросу."
                    )}
                  </p>
                </TabsContent>

                <TabsContent value="packaging" className="mt-0">
                  <h3 className="font-heading font-semibold text-lg mb-4 uppercase">
                    {t("Упаковка", "Упаковка")}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{t("Количество в упаковке", "Количество в упаковке")}</span>
                      <span className="font-semibold">13 {t("шт", "шт")}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{t("Площадь упаковки", "Площадь упаковки")}</span>
                      <span className="font-semibold">9.21 m²</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">{t("Размер плиты", "Размер плиты")}</span>
                      <span className="font-semibold">585 x 1185 x {selectedThickness} {t("мм", "мм")}</span>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PenopleksProductDetail;
