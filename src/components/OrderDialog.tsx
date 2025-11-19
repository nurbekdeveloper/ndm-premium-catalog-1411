import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

interface OrderDialogProps {
  productName?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const OrderDialog = ({ productName, className, variant = "default", size = "default" }: OrderDialogProps) => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: productName || "",
    quantity: "1",
    comment: ""
  });

  const orderSchema = z.object({
    name: z.string().trim().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }).max(100),
    phone: z.string().trim().regex(/^(\+998)?[0-9]{9,12}$/, { message: "Telefon raqami noto'g'ri formatda" }),
    product: z.string().trim().min(1, { message: "Mahsulot nomi kiritilishi shart" }).max(200),
    quantity: z.string().regex(/^[1-9][0-9]*$/, { message: "Miqdor musbat son bo'lishi kerak" }),
    comment: z.string().max(500).optional()
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      orderSchema.parse(formData);
      
      const { error } = await supabase.functions.invoke('send-to-telegram', {
        body: {
          type: 'order',
          data: formData
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
      
      setFormData({
        name: "",
        phone: "",
        product: productName || "",
        quantity: "1",
        comment: ""
      });
      setOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: t("Xatolik", "Ошибка"),
          description: language === "uz" 
            ? firstError.message 
            : firstError.message === "Ism kamida 2 ta belgidan iborat bo'lishi kerak"
              ? "Имя должно содержать минимум 2 символа"
              : firstError.message === "Telefon raqami noto'g'ri formatda"
                ? "Неверный формат телефона"
                : firstError.message === "Mahsulot nomi kiritilishi shart"
                  ? "Необходимо указать название товара"
                  : firstError.message === "Miqdor musbat son bo'lishi kerak"
                    ? "Количество должно быть положительным числом"
                    : "Пожалуйста, заполните все поля правильно",
          variant: "destructive",
        });
      } else {
        toast({
          title: t("Xatolik", "Ошибка"),
          description: t(
            "Buyurtma yuborishda xatolik yuz berdi",
            "Произошла ошибка при отправке заказа"
          ),
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className={className}
          variant={variant}
          size={size}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {t("Buyurtma berish", "Оформить заказ")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">
            {t("Buyurtma berish", "Оформить заказ")}
          </DialogTitle>
          <DialogDescription>
            {t(
              "Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz",
              "Оставьте свои данные, мы свяжемся с вами"
            )}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              {t("Ismingiz", "Ваше имя")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={t("Ismingizni kiriting", "Введите ваше имя")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              {t("Telefon raqam", "Номер телефона")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              maxLength={20}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="product">
              {t("Mahsulot", "Товар")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="product"
              type="text"
              placeholder={t("Mahsulot nomini kiriting", "Введите название товара")}
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              required
              maxLength={200}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">
              {t("Miqdor", "Количество")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              placeholder="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">
              {t("Izoh (ixtiyoriy)", "Комментарий (необязательно)")}
            </Label>
            <Textarea
              id="comment"
              placeholder={t(
                "Qo'shimcha ma'lumot yoki savollar...",
                "Дополнительная информация или вопросы..."
              )}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              maxLength={500}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              {t("Bekor qilish", "Отмена")}
            </Button>
            <Button type="submit" className="flex-1 btn-premium">
              {t("Yuborish", "Отправить")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
