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
        <CardDescription>
          {language === "uz" ? product.description.uz : product.description.ru}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button 
          className="w-full btn-premium transform transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {t("Batafsil", "Подробнее")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
