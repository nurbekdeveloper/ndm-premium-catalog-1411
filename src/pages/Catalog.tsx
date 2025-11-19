import { useLanguage } from "@/contexts/LanguageContext";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Catalog = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryProducts = selectedCategory 
    ? products.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <>
      <SEO
        title={language === "uz" 
          ? "Katalog - Maishiy Texnika | NDM.uz" 
          : "Каталог - Бытовая Техника | NDM.uz"}
        description={language === "uz"
          ? "PPR quvurlar, nasos qurilmalari, issiqlik izolyatsiya materiallari. Hydro Plast, Shimge, Penopleks. O'zbekistonda eng yaxshi narxlar."
          : "ППР трубы, насосное оборудование, теплоизоляционные материалы. Hydro Plast, Shimge, Пеноплэкс. Лучшие цены в Узбекистане."}
        url="/catalog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: language === "uz" ? "Mahsulotlar katalogi" : "Каталог продукции",
          description: language === "uz" 
            ? "Premium maishiy texnika to'plami" 
            : "Коллекция премиум бытовой техники",
        }}
      />
      <div className="min-h-screen py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold mb-4 text-primary animate-fade-in-up">
              {t("Bizning Katalog", "Наш Каталог")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t(
                "Premium mahsulotlar to'plami. Eng yaxshi brendlar va sifatli mahsulotlar.",
                "Коллекция премиум продукции. Лучшие бренды и качественные товары."
              )}
            </p>
          </div>

          {!selectedCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {categories.map((category, index) => (
                <Card
                  key={category.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                      <img 
                        src={category.logo} 
                        alt={language === "uz" ? category.name.uz : category.name.ru}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {language === "uz" ? category.name.uz : category.name.ru}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "uz" ? category.description.uz : category.description.ru}
                    </p>
                    <div className="mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("Ko'rish →", "Смотреть →")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in">
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-8 text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors"
              >
                ← {t("Orqaga", "Назад")}
              </button>
              
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
                  {language === "uz" 
                    ? categories.find(c => c.id === selectedCategory)?.name.uz 
                    : categories.find(c => c.id === selectedCategory)?.name.ru}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {language === "uz" 
                    ? categories.find(c => c.id === selectedCategory)?.description.uz 
                    : categories.find(c => c.id === selectedCategory)?.description.ru}
                </p>
              </div>

              {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-32 h-32 mx-auto mb-6 opacity-30">
                    <img 
                      src={categories.find(c => c.id === selectedCategory)?.logo} 
                      alt="No products"
                      className="w-full h-full object-contain grayscale"
                    />
                  </div>
                  <p className="text-xl text-muted-foreground">
                    {t(
                      "Bu kategoriyada hozircha mahsulotlar yo'q",
                      "В этой категории пока нет товаров"
                    )}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
