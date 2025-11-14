import { useLanguage } from "@/contexts/LanguageContext";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Catalog = () => {
  const { language, t } = useLanguage();

  const hydroPlastProducts = products.filter((p) => p.category === "hydro-plast");
  const shimgeProducts = products.filter((p) => p.category === "shimge");
  const penopleksProducts = products.filter((p) => p.category === "penopleks");

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
            {t("Bizning Katalog", "Наш Каталог")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Premium maishiy texnika to'plami. Har bir mahsulot ehtiyotkorlik bilan tanlab olingan.",
              "Коллекция премиум бытовой техники. Каждый продукт тщательно отобран."
            )}
          </p>
        </div>

        <Tabs defaultValue="hydro-plast" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="hydro-plast" className="text-sm md:text-base">
              {language === "uz" ? categories[0].name.uz : categories[0].name.ru}
            </TabsTrigger>
            <TabsTrigger value="shimge" className="text-sm md:text-base">
              {language === "uz" ? categories[1].name.uz : categories[1].name.ru}
            </TabsTrigger>
            <TabsTrigger value="penopleks" className="text-sm md:text-base">
              {language === "uz" ? categories[2].name.uz : categories[2].name.ru}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hydro-plast" className="mt-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-3 text-foreground">
                {language === "uz" ? categories[0].name.uz : categories[0].name.ru}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "uz" ? categories[0].description.uz : categories[0].description.ru}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hydroPlastProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shimge" className="mt-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-3 text-foreground">
                {language === "uz" ? categories[1].name.uz : categories[1].name.ru}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "uz" ? categories[1].description.uz : categories[1].description.ru}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shimgeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="penopleks" className="mt-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-heading font-bold mb-3 text-foreground">
                {language === "uz" ? categories[2].name.uz : categories[2].name.ru}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "uz" ? categories[2].description.uz : categories[2].description.ru}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {penopleksProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Catalog;
