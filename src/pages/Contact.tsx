import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }).max(100),
    email: z.string().trim().email({ message: "Invalid email" }).max(255),
    message: z.string().trim().min(1, { message: "Message is required" }).max(1000)
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      toast({
        title: t("Xabar yuborildi", "Сообщение отправлено"),
        description: t(
          "Tez orada siz bilan bog'lanamiz",
          "Мы свяжемся с вами в ближайшее время"
        ),
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t("Xatolik", "Ошибка"),
          description: t(
            "Iltimos, barcha maydonlarni to'g'ri to'ldiring",
            "Пожалуйста, заполните все поля правильно"
          ),
          variant: "destructive",
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ndmbusines@gmail.com",
      href: "mailto:ndmbusines@gmail.com"
    },
    {
      icon: Phone,
      title: t("Telefon", "Телефон"),
      value: "+998 90 821 20 00",
      href: "tel:+998908212000"
    },
    {
      icon: MapPin,
      title: t("Manzil", "Адрес"),
      value: t("Toshkent, O'zbekiston", "Ташкент, Узбекистан"),
      href: null
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
            {t("Bog'lanish", "Контакты")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Savollaringiz bormi? Biz bilan bog'laning. Biz har doim yordam berishga tayyormiz.",
              "Есть вопросы? Свяжитесь с нами. Мы всегда готовы помочь."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {t("Xabar yuboring", "Отправить сообщение")}
              </CardTitle>
              <CardDescription>
                {t(
                  "Formani to'ldiring va biz tez orada javob beramiz",
                  "Заполните форму, и мы ответим в ближайшее время"
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t("Ism", "Имя")}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("Ismingizni kiriting", "Введите ваше имя")}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("Email manzilingiz", "Ваш email адрес")}
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("Xabar", "Сообщение")}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("Xabaringizni yozing", "Напишите ваше сообщение")}
                    rows={5}
                    required
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" className="w-full btn-premium">
                  {t("Yuborish", "Отправить")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-semibold mb-4">
                  {t("Ijtimoiy tarmoqlar", "Социальные сети")}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ndm.business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://t.me/ndmsantexnika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
