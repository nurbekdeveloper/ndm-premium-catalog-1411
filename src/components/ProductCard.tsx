import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import OrderDialog from "@/components/OrderDialog";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: t("Savatga qo'shildi", "Добавлено в корзину"),
      description: `${product.name} - 1 ${t("dona", "шт")}`
    });
  };
  
  // Get description and truncate to first line or 100 characters
  const getShortDescription = () => {
    const fullDesc = language === "uz" ? product.description.uz : product.description.ru;
    // Get only the first line before \n\n or first 100 chars
    const firstLine = fullDesc.split('\n\n')[0];
    return firstLine.length > 100 ? firstLine.slice(0, 100) + '...' : firstLine;
  };

  return (
    <Card className="card-hover h-full flex flex-col group animate-fade-in-up">
      <CardHeader>
        <div 
          className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer relative"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
        </div>
        <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {getShortDescription()}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-2">
        <Button 
          className="w-full btn-premium transform transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {t("Batafsil", "Подробнее")}
        </Button>
        <div className="flex gap-2">
          <Button 
            className="flex-1 transform transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={handleAddToCart}
            variant="secondary"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t("Savatga", "В корзину")}
          </Button>
          <OrderDialog 
            productName={product.name}
            className="flex-1"
            variant="outline"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
