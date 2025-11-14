import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import hydroPlastLogo from "@/assets/partners/hydro-plast-logo.png";
import shimgeLogo from "@/assets/partners/shimge-logo.png";
import penopleksLogo from "@/assets/partners/penopleks-logo.png";

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    { name: "Hydro Plast", logo: hydroPlastLogo, description: { uz: "Yuqori sifatli PPR quvurlar va fitinglar", ru: "Высококачественные PPR трубы и фитинги" } },
    { name: "Shimge", logo: shimgeLogo, description: { uz: "Ishonchli nasos uskunalari ishlab chiqaruvchisi", ru: "Надежный производитель насосного оборудования" } },
    { name: "Penoplex", logo: penopleksLogo, description: { uz: "Zamonaviy issiqlik izolyatsiya materiallari", ru: "Современные теплоизоляционные материалы" } }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
            {t("Hamkorlarimiz", "Наши Партнёры")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t(
              "Sizning qurilishingiz uchun ishonchli muhandislik yechimlari",
              "Надежные инженерные решения для вашего строительства"
            )}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "Zamonaviy issiqlik izolyatsiyasi, quvur tizimlari va nasos uskunalari. Biz keng assortimentdagi yuqori sifatli mahsulotlarni taqdim etamiz va cheklanmagan brendlar bilan hamkorlik qilamiz.",
              "Современная теплоизоляция, трубопроводные системы и насосное оборудование. Мы предлагаем широкий ассортимент высококачественной продукции и сотрудничаем с различными брендами."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="aspect-video bg-background rounded-lg mb-4 flex items-center justify-center p-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-center">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  {t(partner.description.uz, partner.description.ru)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
