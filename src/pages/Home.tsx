import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Award, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Award,
      title: { uz: "Sertifikatlangan sifat", ru: "Сертифицированное качество" },
      description: {
        uz: "Barcha mahsulotlar xalqaro standartlarga javob beradi",
        ru: "Все продукты соответствуют международным стандартам"
      }
    },
    {
      icon: Zap,
      title: { uz: "Energiya tejamkor", ru: "Энергоэффективность" },
      description: {
        uz: "Yuqori A+ va A++ energiya samaradorlik sinfi",
        ru: "Высокий класс энергоэффективности A+ и A++"
      }
    },
    {
      icon: CheckCircle2,
      title: { uz: "Ishonchli ishlab chiqaruvchilar", ru: "Надежные производители" },
      description: {
        uz: "Faqat isbotlangan brendlar va yetkazib beruvchilar",
        ru: "Только проверенные бренды и поставщики"
      }
    },
    {
      icon: FileText,
      title: { uz: "To'liq xususiyatlar", ru: "Полные характеристики" },
      description: {
        uz: "Har bir model uchun batafsil tavsif va texnik ma'lumotlar",
        ru: "Подробное описание и технические данные для каждой модели"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {t("NDM.uz – Premium maishiy texnika katalogi", "NDM.uz – Каталог премиум бытовой техники")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {t(
              "Eng ishonchli, zamonaviy va energiya tejamkor texnika modellari bir joyda.",
              "Современные и надежные решения для вашего дома."
            )}
          </p>
          <Link to="/catalog">
            <Button size="lg" className="btn-premium text-lg px-8 py-6">
              {t("Katalogni ko'rish", "Смотреть каталог")}
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
              {t("NDM.uz haqida", "О NDM.uz")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "NDM.uz - bu premium maishiy elektronika va texnika katalogi. Biz energiya samaradorligi, dizayn va innovatsiyaga alohida e'tibor beramiz. Har bir mahsulot puxta tanlab olingan va eng yuqori standartlarga javob beradi. Bizning maqsadimiz - sizning uyingizni zamonaviy va ishonchli texnika bilan ta'minlash.",
                "NDM.uz - это кураторский каталог премиум бытовой электроники и техники. Мы уделяем особое внимание энергоэффективности, дизайну и инновациям. Каждый продукт тщательно отобран и соответствует высочайшим стандартам. Наша цель - обеспечить ваш дом современной и надежной техникой."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-primary">
            {t("Bizning afzalliklarimiz", "Наши преимущества")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">
                    {t(benefit.title.uz, benefit.title.ru)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(benefit.description.uz, benefit.description.ru)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            {t("Katalogni kashf eting", "Исследуйте каталог")}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t(
              "Suv isitgichlar va havoni tortuvchi moslamalarning keng assortimenti bilan tanishing",
              "Ознакомьтесь с широким ассортиментом водонагревателей и вытяжек"
            )}
          </p>
          <Link to="/catalog">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              {t("Barcha mahsulotlar", "Все продукты")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
