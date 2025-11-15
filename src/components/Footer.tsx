import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: "/", label: t("Bosh sahifa", "Главная") },
    { to: "/catalog", label: t("Katalog", "Каталог") },
    { to: "/solutions", label: t("Yechimlar", "Решения") },
    { to: "/partners", label: t("Hamkorlar", "Партнёры") },
    { to: "/team", label: t("Jamoa", "Команда") },
    { to: "/contact", label: t("Aloqa", "Контакты") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">NDM.uz</h3>
            <p className="text-sm text-primary-foreground/80">
              {t(
                "Premium maishiy texnika katalogi. Eng ishonchli va zamonaviy yechimlar.",
                "Каталог премиум бытовой техники. Современные и надежные решения."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              {t("Tezkor havolalar", "Быстрые ссылки")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              {t("Bog'lanish", "Контакты")}
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/80 mb-4">
              <p>
                <a href="mailto:ndmbusines@gmail.com" className="hover:text-accent transition-colors">
                  Email: ndmbusines@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+998908212000" className="hover:text-accent transition-colors">
                  Tel: +998 90 821 20 00
                </a>
              </p>
              <p>{t("Toshkent, O'zbekiston", "Ташкент, Узбекистан")}</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ndm.business" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/ndmsantexnika" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 NDM.uz – {t("Premium maishiy texnika katalogi", "Каталог премиум бытовой техники")}</p>
          <p className="mt-1">
            {t(
              "Suv isitgichlar, havoni tortuvchilar, premium texnika katalogi",
              "Водонагреватели, вытяжки, премиум каталог бытовой техники"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
