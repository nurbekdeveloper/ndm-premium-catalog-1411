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
import { ArrowLeft, Expand, Minus, Plus, ShoppingCart, Facebook, Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  // All products now use the same layout
  if (product.category === "penopleks") {
    return <PenopleksProductDetail product={product} />;
  }

  const productImages = product.images.map((img, index) => ({
    src: img,
    alt: `${product.name} - ${index + 1}`
  }));

  return (
    <>
      <SEO
        title={`${product.name} | NDM.uz`}
        description={language === "uz" ? product.description.uz : product.description.ru}
        url={`/product/${product.id}`}
        image={product.images[0]}
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: language === "uz" ? product.description.uz : product.description.ru,
          image: product.images,
          brand: {
            "@type": "Brand",
            name: product.category === "hydro-plast" ? "Hydro Plast" : 
                  product.category === "shimge" ? "Shimge" : "Penopleks"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "UZS",
            seller: {
              "@type": "Organization",
              name: "NDM.uz"
            }
          }
        }}
      />
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
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              {language === "uz" ? product.description.uz : product.description.ru}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Images */}
            <div className="lg:col-span-8">
              {/* Main Image */}
              <div 
                className="aspect-video bg-secondary rounded-lg overflow-hidden relative group cursor-pointer mb-4"
                onClick={() => {
                  setIsLightboxOpen(true);
                }}
              >
                <img
                  src={product.images[selectedImageIndex]}
                  alt={`${product.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 rounded-full p-3">
                    <Expand className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-primary"
                        : "opacity-70 hover:opacity-100"
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

            {/* Right Side - Actions */}
            <div className="lg:col-span-4">
              <div className="bg-card rounded-lg border p-6 sticky top-8">
                <div className="space-y-6">
                  {/* Quantity Selector */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("Miqdori", "Количество")}
                    </label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(-1)}
                        className="h-10 w-10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-xl font-semibold w-16 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(1)}
                        className="h-10 w-10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      className="w-full"
                      onClick={handleAddToCart}
                      size="lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {t("Savatga qo'shish", "Добавить в корзину")}
                    </Button>

                    <OrderDialog 
                      productName={product.name}
                      className="w-full"
                      variant="outline"
                    />
                  </div>

                  {/* Share */}
                  <div className="border-t pt-6">
                    <p className="text-sm font-medium mb-3">
                      {t("Ulashish", "Поделиться")}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShare('facebook')}
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShare('whatsapp')}
                        aria-label="Share on WhatsApp"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShare('telegram')}
                        aria-label="Share on Telegram"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleShare('email')}
                        aria-label="Share via Email"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
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