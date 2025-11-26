import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ImageLightbox from "@/components/ImageLightbox";
import PenopleksProductDetail from "@/components/PenopleksProductDetail";
import OrderDialog from "@/components/OrderDialog";
import { ArrowLeft, Expand, Minus, Plus, ShoppingCart, Heart, Facebook, Send, Mail, Home, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: t("Savatga qo'shildi", "Добавлено в корзину"),
        description: `${product.name} (${quantity} ${t("dona", "шт")})`,
      });
    }
  };

  const handleAddToOrder = () => {
    toast({
      title: t("Buyurtmaga qo'shildi", "Добавлено в заказ"),
      description: product?.name,
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = product?.name || "";
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
    }
  };

  const product = products.find((p) => p.id === id);

  const handleBackToCatalog = () => {
    if (product?.category) {
      navigate("/catalog", { state: { selectedCategory: product.category } });
    } else {
      navigate("/catalog");
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-heading mb-4">{t("Mahsulot topilmadi", "Товар не найден")}</h1>
        <Button onClick={() => navigate("/catalog")}>
          {t("Katalogga qaytish", "Вернуться в каталог")}
        </Button>
      </div>
    );
  }

  // Use custom layout for Penopleks products
  if (product.category === "penopleks") {
    return <PenopleksProductDetail product={product} />;
  }

  // Get category name for breadcrumb
  const categoryNames = {
    "hydro-plast": { uz: "Hydro Plast", ru: "Hydro Plast" },
    "shimge": { uz: "SHIMGE", ru: "SHIMGE" },
    "penopleks": { uz: "ПЕНОПЛЕХ", ru: "ПЕНОПЛЕХ" },
    "blesk": { uz: "BLESK", ru: "BLESK" },
    "plastfoil": { uz: "PLASTFOIL", ru: "PLASTFOIL" },
    "tetra-plast": { uz: "TETRA PLAST", ru: "TETRA PLAST" },
  };
  
  const categoryName = categoryNames[product.category as keyof typeof categoryNames] || 
    { uz: product.category, ru: product.category };

  // Generate SEO-optimized keywords
  const generateKeywords = () => {
    const baseKeywords = language === "uz" 
      ? `${product.name}, ${categoryName.uz}, NDM.uz, sotib olish, narx, O'zbekiston, Toshkent`
      : `${product.name}, ${categoryName.ru}, NDM.uz, купить, цена, Узбекистан, Ташкент`;
    
    const specKeywords = product.specs
      .map(spec => language === "uz" ? spec.label.uz : spec.label.ru)
      .join(", ");
    
    return `${baseKeywords}, ${specKeywords}`;
  };

  const productImages = product.images.map((img, index) => ({
    src: img,
    alt: `${product.name} - ${index === 0 ? 'Main' : index === 1 ? 'Detail' : index === 2 ? 'Side' : 'Installation'}`
  }));

  const imageLabels = [
    { uz: "Asosiy", ru: "Основной" },
    { uz: "Tafsilotlar", ru: "Детали" },
    { uz: "Yon ko'rinish", ru: "Боковой вид" },
    { uz: "O'rnatilgan holat", ru: "Установка" }
  ];

  return (
    <>
      <SEO
        title={`${product.name} - ${language === "uz" ? categoryName.uz : categoryName.ru} | NDM.uz`}
        description={`${language === "uz" ? product.description.uz : product.description.ru} ✓ ${language === "uz" ? "Rasmiy narxlar" : "Официальные цены"} ✓ ${language === "uz" ? "Kafolat" : "Гарантия"} ✓ ${language === "uz" ? "Tez yetkazib berish O'zbekiston bo'ylab" : "Быстрая доставка по Узбекистану"}`}
        keywords={generateKeywords()}
        url={`/product/${product.id}`}
        image={product.images[0]}
        type="product"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: language === "uz" ? product.description.uz : product.description.ru,
            image: product.images,
            brand: {
              "@type": "Brand",
              name: language === "uz" ? categoryName.uz : categoryName.ru
            },
            category: language === "uz" ? categoryName.uz : categoryName.ru,
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "UZS",
              url: `https://ndm.uz/product/${product.id}`,
              seller: {
                "@type": "Organization",
                name: "NDM.uz",
                url: "https://ndm.uz"
              }
            },
            additionalProperty: product.specs.map(spec => ({
              "@type": "PropertyValue",
              name: language === "uz" ? spec.label.uz : spec.label.ru,
              value: spec.value
            }))
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: language === "uz" ? "Bosh sahifa" : "Главная",
                item: "https://ndm.uz"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: language === "uz" ? "Katalog" : "Каталог",
                item: "https://ndm.uz/catalog"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: language === "uz" ? categoryName.uz : categoryName.ru,
                item: `https://ndm.uz/catalog?category=${product.category}`
              },
              {
                "@type": "ListItem",
                position: 4,
                name: product.name,
                item: `https://ndm.uz/product/${product.id}`
              }
            ]
          }
        ]}
      />
      <ImageLightbox
        images={productImages}
        initialIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  {t("Bosh sahifa", "Главная")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/catalog">
                  {t("Katalog", "Каталог")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  href="/catalog"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBackToCatalog();
                  }}
                >
                  {language === "uz" ? categoryName.uz : categoryName.ru}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-heading mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {language === "uz" ? product.description.uz : product.description.ru}
                </p>
              </div>
              
              {/* Action buttons section */}
              <div className="space-y-4">
                {/* Quantity Selector */}
                <div className="flex items-center gap-2">
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

                {/* Add to Cart and Like */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {t("Savatga", "В корзину")}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                </div>

                {/* Add to Order */}
                <OrderDialog 
                  productName={product.name}
                  className="w-full btn-premium"
                />

                {/* Categories */}
                <div className="pt-2">
                  <p className="text-sm font-semibold mb-2">Categories</p>
                  <p className="text-sm text-muted-foreground">
                    {t("Polipropilen quvurlar", "Трубы из полипропилена")}
                  </p>
                </div>

                {/* Share buttons */}
                <div className="border-t pt-4">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare('whatsapp')}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Share on WhatsApp"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare('telegram')}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Share on Telegram"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 mt-8">
              {/* Main Image Display */}
              <div 
                className="aspect-video bg-secondary rounded-lg flex items-center justify-center overflow-hidden relative group cursor-pointer"
                onClick={() => {
                  setIsLightboxOpen(true);
                }}
              >
                <img
                  src={product.images[selectedImageIndex]}
                  alt={`${product.name} - ${language === "uz" ? imageLabels[selectedImageIndex].uz : imageLabels[selectedImageIndex].ru} | ${language === "uz" ? categoryName.uz : categoryName.ru} | NDM.uz`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 rounded-full p-3">
                    <Expand className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-center">
                    {language === "uz" ? imageLabels[selectedImageIndex].uz : imageLabels[selectedImageIndex].ru}
                  </p>
                </div>
              </div>

              {/* Image Thumbnails Gallery */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                      alt={`${product.name} - ${language === "uz" ? imageLabels[index].uz : imageLabels[index].ru} | ${language === "uz" ? categoryName.uz : categoryName.ru} | NDM.uz`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <p className="text-xs text-white font-medium text-center">
                        {language === "uz" ? imageLabels[index].uz : imageLabels[index].ru}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div>
                <h2 className="font-heading font-semibold text-2xl mb-4">
                  {t("Texnik xususiyatlar", "Технические характеристики")}
                </h2>
                <div className="space-y-3 bg-muted/30 rounded-lg p-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
