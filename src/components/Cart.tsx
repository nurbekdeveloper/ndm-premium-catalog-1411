import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalItems } = useCart();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleProductClick = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  const handleCheckoutClick = () => {
    setIsCheckoutDialogOpen(true);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName.trim() || !customerPhone.trim()) {
      toast({
        title: t("Xatolik", "Ошибка"),
        description: t(
          "Iltimos, barcha maydonlarni to'ldiring",
          "Пожалуйста, заполните все поля"
        ),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-to-telegram', {
        body: {
          type: 'cart',
          data: {
            name: customerName,
            phone: customerPhone,
            items: items.map(item => ({
              name: item.product.name,
              quantity: item.quantity
            })),
            totalItems: getTotalItems()
          }
        }
      });

      if (error) throw error;

      toast({
        title: t("Buyurtma qabul qilindi!", "Заказ принят!"),
        description: t(
          "Tez orada siz bilan bog'lanamiz",
          "Мы свяжемся с вами в ближайшее время"
        ),
      });

      clearCart();
      setCustomerName("");
      setCustomerPhone("");
      setIsCheckoutDialogOpen(false);
      onClose();
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: t("Xatolik", "Ошибка"),
        description: t(
          "Buyurtma yuborishda xatolik yuz berdi",
          "Произошла ошибка при отправке заказа"
        ),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {t("Savat", "Корзина")} ({getTotalItems()})
            </SheetTitle>
          </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
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
            <ScrollArea className="flex-1 pr-4 mt-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleProductClick(item.product.id)}
                      onError={handleImageError}
                    />
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-medium mb-1 cursor-pointer hover:text-primary transition-colors line-clamp-1"
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
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
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

            <SheetFooter className="mt-6 space-y-3 flex-shrink-0">
              <div className="w-full flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium">
                  {t("Jami mahsulotlar:", "Всего товаров:")}
                </span>
                <span className="text-lg font-bold">{getTotalItems()}</span>
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={clearCart} 
                  className="w-full"
                  disabled={items.length === 0}
                >
                  {t("Tozalash", "Очистить")}
                </Button>
                <Button 
                  className="w-full" 
                  onClick={handleCheckoutClick}
                  disabled={items.length === 0}
                >
                  {t("Buyurtma berish", "Оформить заказ")}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
        </SheetContent>
      </Sheet>

      <Dialog open={isCheckoutDialogOpen} onOpenChange={setIsCheckoutDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {t("Buyurtma berish", "Оформление заказа")}
            </DialogTitle>
            <DialogDescription>
              {t(
                "Iltimos, ma'lumotlaringizni kiriting va biz tez orada siz bilan bog'lanamiz",
                "Пожалуйста, введите ваши данные и мы свяжемся с вами в ближайшее время"
              )}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCheckoutSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                {t("Ismingiz", "Ваше имя")} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder={t("Ismingizni kiriting", "Введите ваше имя")}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                {t("Telefon raqamingiz", "Ваш телефон")} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+998 XX XXX XX XX"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-medium mb-2">
                {t("Buyurtma tafsilotlari:", "Детали заказа:")}
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="line-clamp-1 flex-1">{item.product.name}</span>
                    <span className="ml-2 flex-shrink-0">x {item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t flex justify-between font-medium">
                <span>{t("Jami:", "Всего:")}</span>
                <span>{getTotalItems()} {t("dona", "шт")}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCheckoutDialogOpen(false)}
                disabled={isSubmitting}
                className="flex-1"
              >
                {t("Bekor qilish", "Отмена")}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("Yuborilmoqda...", "Отправка...")}
                  </>
                ) : (
                  t("Tasdiqlash", "Подтвердить")
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cart;
