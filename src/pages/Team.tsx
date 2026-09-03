import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SEO from "@/components/SEO";
import { Phone } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const team = [
    {
      name: "Mansurxon Gapurov Bositovich",
      position: { uz: "Bosh direktor", ru: "Генеральный директор" },
      bio: {
        uz: "NDM.uz kompaniyasining asoschisi va bosh direktori. Kompaniya rivojlanishiga rahbarlik qiladi.",
        ru: "Основатель и генеральный директор компании NDM.uz. Руководит развитием компании."
      },
      initials: "MG",
      phone: "+998 91 361 28 82"
    },
    {
      name: "Komiljon Domlajanov Karimjanovich",
      position: { uz: "Texnik direktor", ru: "Технический директор" },
      bio: {
        uz: "Texnik yo'nalish bo'yicha mutaxassis. Mahsulot sifatini nazorat qiladi.",
        ru: "Специалист по техническому направлению. Контролирует качество продукции."
      },
      initials: "KD",
      phone: "+998 97 231 05 05"
    },
    {
      name: "Abdulaziz Alixanov Muhammadjon o'g'li",
      position: { uz: "Savdo menejeri", ru: "Менеджер по продажам" },
      bio: {
        uz: "Savdo bo'limi menejeri. Mijozlar bilan ishlash va savdoni tashkil etish.",
        ru: "Менеджер отдела продаж. Работа с клиентами и организация продаж."
      },
      initials: "AA",
      phone: "+998 92 001 01 01"
    },
    {
      name: "Mirsaid Sadriddinov Dilmurod o'g'li",
      position: { uz: "Marketing menejeri", ru: "Менеджер по маркетингу" },
      bio: {
        uz: "Marketing strategiyalarini ishlab chiqish va amalga oshirish.",
        ru: "Разработка и реализация маркетинговых стратегий."
      },
      initials: "MS",
      phone: "+998 88 260 77 77"
    },
    {
      name: "Akbarjon Jo'rayev Akmal o'g'li",
      position: { uz: "Mijozlar xizmati menejeri", ru: "Менеджер по работе с клиентами" },
      bio: {
        uz: "Mijozlarga yuqori darajadagi xizmat ko'rsatish va qo'llab-quvvatlash.",
        ru: "Высокий уровень обслуживания клиентов и поддержка."
      },
      initials: "AJ",
      phone: "+998 90 641 00 00"
    },
    {
      name: "Akmalxon Ahmadjonov Shuhrat o'g'li",
      position: { uz: "WaterPRO bosh menejeri", ru: "Главный менеджер WaterPRO" },
      bio: {
        uz: "WaterPRO brendi bo'yicha bosh menejer. Mahsulotlar va mijozlar bilan ishlashga mas'ul.",
        ru: "Главный менеджер бренда WaterPRO. Отвечает за продукцию и работу с клиентами."
      },
      initials: "AX",
      phone: "+998 97 008 40 40"
    },
    {
      name: "Akmal Ibrohimov Ahmadillo o'g'li",
      position: { uz: "TermoTech bosh menejeri", ru: "Главный менеджер TermoTech" },
      bio: {
        uz: "TermoTech brendi bo'yicha bosh menejer. Mahsulotlar va mijozlar bilan ishlashga mas'ul.",
        ru: "Главный менеджер бренда TermoTech. Отвечает за продукцию и работу с клиентами."
      },
      initials: "AI",
      phone: "+998 50 440 06 00"
    },
    {
      name: "MuxtorAli Yusupov Mutalli o'g'li",
      position: { uz: "TETRA PLAST bosh menejeri", ru: "Главный менеджер TETRA PLAST" },
      bio: {
        uz: "TETRA PLAST brendi bo'yicha bosh menejer. Mahsulotlar va mijozlar bilan ishlashga mas'ul.",
        ru: "Главный менеджер бренда TETRA PLAST. Отвечает за продукцию и работу с клиентами."
      },
      initials: "MY",
      phone: "+998 87 736 66 46"
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
            <Card
              key={index}
              className={`card-hover text-center cursor-pointer transition-all ${selected === index ? "ring-2 ring-accent" : ""}`}
              onClick={() => setSelected(selected === index ? null : index)}
            >
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
                <p className="text-sm text-muted-foreground mb-3">
                  {t(member.bio.uz, member.bio.ru)}
                </p>
                {selected === index && (
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline animate-fade-in"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                )}
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
