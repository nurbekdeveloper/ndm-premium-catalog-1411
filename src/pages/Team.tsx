import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SEO from "@/components/SEO";

const Team = () => {
  const { language, t } = useLanguage();

  const team = [
    {
      name: "Alisher Karimov",
      position: { uz: "Bosh direktor", ru: "Генеральный директор" },
      bio: {
        uz: "15 yillik tajribaga ega texnika savdo sohasida. NDM.uz kompaniyasini asos solgan.",
        ru: "15 лет опыта в сфере торговли техникой. Основатель компании NDM.uz."
      },
      initials: "AK"
    },
    {
      name: "Dilnoza Uzbekova",
      position: { uz: "Mahsulot menejeri", ru: "Менеджер по продукту" },
      bio: {
        uz: "Premium texnika bo'yicha mutaxassis. Mahsulotlar tanlovini boshqaradi.",
        ru: "Специалист по премиум технике. Управляет подбором продукции."
      },
      initials: "DU"
    },
    {
      name: "Rustam Tashkentov",
      position: { uz: "Texnik direktor", ru: "Технический директор" },
      bio: {
        uz: "Energiya samaradorligi bo'yicha sertifikatlangan mutaxassis.",
        ru: "Сертифицированный специалист по энергоэффективности."
      },
      initials: "RT"
    },
    {
      name: "Madina Samarkandova",
      position: { uz: "Mijozlar xizmati menejeri", ru: "Менеджер по работе с клиентами" },
      bio: {
        uz: "Mijozlarga eng yaxshi xizmat ko'rsatishni ta'minlaydi.",
        ru: "Обеспечивает высочайший уровень обслуживания клиентов."
      },
      initials: "MS"
    }
  ];

  return (
    <>
      <SEO
        title={language === "uz" 
          ? "Jamoa - Mutaxassislar | NDM.uz" 
          : "Команда - Специалисты | NDM.uz"}
        description={language === "uz"
          ? "NDM.uz professional jamoasi. Tajribali mutaxassislar bilan tanishing."
          : "Профессиональная команда NDM.uz. Познакомьтесь с опытными специалистами."}
        url="/team"
      />
      <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-primary">
            {t("Bizning Jamoa", "Наша Команда")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Professional mutaxassislar jamoasi. Biz sizga eng yaxshi mahsulotlarni taqdim etishga intilamiz.",
              "Команда профессиональных специалистов. Мы стремимся предоставить вам лучшие продукты."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="card-hover text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-heading">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                <CardDescription className="font-medium">
                  {t(member.position.uz, member.position.ru)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t(member.bio.uz, member.bio.ru)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
