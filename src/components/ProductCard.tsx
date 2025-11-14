import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div 
          className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardTitle className="text-xl font-heading">{product.name}</CardTitle>
        <CardDescription>
          {language === "uz" ? product.description.uz : product.description.ru}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button 
          className="w-full btn-premium"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {t("Batafsil", "Подробнее")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
