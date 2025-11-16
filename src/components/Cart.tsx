import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalItems } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t("Savat", "Корзина")} ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {t("Savat bo'sh", "Корзина пуста")}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {t("Mahsulotlarni katalogdan tanlang", "Выберите товары из каталога")}
            </p>
            <Button onClick={() => { onClose(); navigate("/catalog"); }}>
              {t("Katalogga o'tish", "Перейти в каталог")}
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-220px)] pr-4 mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-secondary/30 rounded-lg border"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleProductClick(item.product.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 
                        className="font-medium text-sm mb-1 cursor-pointer hover:text-primary transition-colors truncate"
                        onClick={() => handleProductClick(item.product.id)}
                      >
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {language === "uz"
                          ? item.product.description.uz
                          : item.product.description.ru}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="mt-6 space-y-3">
              <div className="w-full flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  {t("Jami mahsulotlar:", "Всего товаров:")}
                </span>
                <span className="font-semibold">{getTotalItems()}</span>
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={clearCart} className="w-full">
                  {t("Tozalash", "Очистить")}
                </Button>
                <Button 
                  className="w-full btn-premium" 
                  onClick={() => {
                    onClose();
                    navigate("/contact");
                  }}
                >
                  {t("Buyurtma berish", "Оформить заказ")}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
