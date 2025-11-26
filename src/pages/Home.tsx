import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Award, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import FAQSchema from "@/components/FAQSchema";
import heroBg from "@/assets/hero-pipes.png";

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
    <>
      <SEO 
        url="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NDM.uz",
            url: "https://ndm.uz",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://ndm.uz/catalog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ndm.uz",
            name: "NDM.uz",
            image: "https://ndm.uz/favicon.png",
            url: "https://ndm.uz",
            telephone: "+998-90-123-45-67",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tashkent",
              addressLocality: "Tashkent",
              addressRegion: "Tashkent",
              postalCode: "100000",
              addressCountry: "UZ"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.311081,
              longitude: 69.240562
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00"
            },
            sameAs: [
              "https://t.me/ndm_uz",
              "https://instagram.com/ndm.uz"
            ]
          }
        ]}
      />
      <FAQSchema />
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
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-down">
            {t("NDM.uz – Premium maishiy texnika katalogi", "NDM.uz – Каталог премиум бытовой техники")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t(
              "Eng ishonchli, zamonaviy va energiya tejamkor texnika modellari bir joyda.",
              "Современные и надежные решения для вашего дома."
            )}
          </p>
          <Link to="/catalog" className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="btn-premium text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
              {t("Katalogni ko'rish", "Смотреть каталог")}
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary animate-fade-in-up">
              {t("NDM.uz haqida", "О NDM.uz")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
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
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-primary animate-fade-in-up">
            {t("Bizning afzalliklarimiz", "Наши преимущества")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="card-hover group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6">
                    <benefit.icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground transition-colors duration-300 group-hover:text-primary">
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
      <section className="py-20 gradient-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 animate-fade-in-up">
            {t("Katalogni kashf eting", "Исследуйте каталог")}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t(
              "Suv isitgichlar va havoni tortuvchi moslamalarning keng assortimenti bilan tanishing",
              "Ознакомьтесь с широким ассортиментом водонагревателей и вытяжек"
            )}
          </p>
          <Link to="/catalog" className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
              {t("Barcha mahsulotlar", "Все продукты")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
