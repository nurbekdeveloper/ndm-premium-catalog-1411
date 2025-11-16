import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Home, Building2, Warehouse } from "lucide-react";

const Solutions = () => {
  const { language, t } = useLanguage();

  const solutions = [
    {
      icon: Home,
      title: { uz: "Xususiy uylar uchun", ru: "Для частных домов" },
      description: {
        uz: "Energiya tejovchi isitish va ventilyatsiya tizimlari. Uyingizni qulay va ekologik toza qiling.",
        ru: "Энергосберегающие системы отопления и вентиляции. Сделайте свой дом комфортным и экологичным."
      },
      solutions: [
        {
          uz: "100-120L sig'imli suv isitgichlar katta oilalar uchun",
          ru: "Водонагреватели объемом 100-120л для больших семей"
        },
        {
          uz: "Wi-Fi boshqaruv bilan aqlli suv isitgichlar",
          ru: "Умные водонагреватели с Wi-Fi управлением"
        },
        {
          uz: "Sokin ishlash bilan premium davoni tortgichlar",
          ru: "Премиум вытяжки с тихой работой"
        }
      ]
    },
    {
      icon: Building2,
      title: { uz: "Ko'p qavatli uylar uchun", ru: "Для многоквартирных домов" },
      description: {
        uz: "Ixcham va samarali yechimlar. Kichik joylar uchun ideal.",
        ru: "Компактные и эффективные решения. Идеально для небольших пространств."
      },
      solutions: [
        {
          uz: "50-60L sig'imli ixcham suv isitgichlar",
          ru: "Компактные водонагреватели объемом 50-60л"
        },
        {
          uz: "UltraSlim dizayn - minimal joy egallaydi",
          ru: "UltraSlim дизайн - занимает минимум места"
        },
        {
          uz: "60-80cm kenglikdagi havoni tortgichlar",
          ru: "Вытяжки шириной 60-80см"
        }
      ]
    },
    {
      icon: Warehouse,
      title: { uz: "Professional oshxonalar", ru: "Профессиональные кухни" },
      description: {
        uz: "Restoran darajasidagi texnika. Yuqori quvvat va ishonchlilik.",
        ru: "Техника ресторанного уровня. Высокая мощность и надежность."
      },
      solutions: [
        {
          uz: "400 m³/h gacha unumdorlikdagi havoni tortgichlar",
          ru: "Вытяжки производительностью до 400 м³/ч"
        },
        {
          uz: "Turbo rejimli suv isitgichlar",
          ru: "Водонагреватели с турбо режимом"
        },
        {
          uz: "3 yilgacha uzaytirilgan kafolat",
          ru: "Расширенная гарантия до 3 лет"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={language === "uz" 
          ? "Yechimlar - Sizning Uyingiz uchun | NDM.uz" 
          : "Решения - Для Вашего Дома | NDM.uz"}
        description={language === "uz"
          ? "Xususiy uylar, ko'p qavatli uylar va professional oshxonalar uchun yechimlar. Energiya tejovchi va samarali tizimlар."
          : "Решения для частных домов, многоквартирных домов и профессиональных кухонь. Энергосберегающие и эффективные системы."}
        url="/solutions"
      />
      <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
            {t("Yechimlar", "Решения")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Har xil ehtiyojlar uchun moslashtirilgan yechimlar. Uyingiz yoki biznesingiz uchun ideal tanlov.",
              "Решения, адаптированные для различных потребностей. Идеальный выбор для вашего дома или бизнеса."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <solution.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-heading">
                  {t(solution.title.uz, solution.title.ru)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(solution.description.uz, solution.description.ru)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.solutions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{t(item.uz, item.ru)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Solutions;
