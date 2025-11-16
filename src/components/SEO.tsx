import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url,
  type = "website",
  structuredData,
}: SEOProps) => {
  const { language } = useLanguage();
  const baseUrl = "https://ndm.uz";
  const currentUrl = url ? `${baseUrl}${url}` : baseUrl;

  const defaultTitle = language === "uz" 
    ? "NDM.uz – Premium Maishiy Texnika | Suv Isitgichlar, Ventilyatsiya, Issiqlik Izolyatsiya"
    : "NDM.uz – Премиум Бытовая Техника | Водонагреватели, Вентиляция, Теплоизоляция";

  const defaultDescription = language === "uz"
    ? "O'zbekistonda eng yaxshi maishiy texnika: suv isitgichlar, havoni tortuvchilar, ventilyatsiya tizimlari, PPR quvurlar, issiqlik izolyatsiya materiallari. Rasmiy narxlar, kafolat, tez yetkazib berish. Hydro Plast, Shimge, Penopleks."
    : "Лучшая бытовая техника в Узбекистане: водонагреватели, вытяжки, вентиляция, PPR трубы, теплоизоляция. Официальные цены, гарантия, быстрая доставка. Hydro Plast, Shimge, Пеноплэкс.";

  const defaultKeywords = language === "uz"
    ? "suv isitgich, vodonagrevateli, havoni tortuvchi, vytyazhka, ventilyatsiya, PPR quvurlar, issiqlik izolyatsiya, penopleks, hydro plast, shimge, maishiy texnika, O'zbekiston, Toshkent, texnika katalogi"
    : "водонагреватели, бойлеры, вытяжки, вентиляция, ППР трубы, теплоизоляция, пеноплэкс, гидро пласт, шимге, бытовая техника, Узбекистан, Ташкент, каталог техники";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NDM.uz",
    url: baseUrl,
    logo: `${baseUrl}/ndm-logo.png`,
    description: finalDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressLocality: "Tashkent",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+998-90-123-45-67",
      contactType: "Customer Service",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language === "uz" ? "uz" : "ru"} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="NDM.uz" />
      <link rel="canonical" href={currentUrl} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="uz" href={`${baseUrl}${url || ""}`} />
      <link rel="alternate" hrefLang="ru" href={`${baseUrl}${url || ""}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${url || ""}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === "uz" ? "uz_UZ" : "ru_RU"} />
      <meta property="og:site_name" content="NDM.uz" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@NDM_uz" />

      {/* Yandex Verification */}
      <meta name="yandex-verification" content="your-yandex-verification-code" />

      {/* Google Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />

      {/* Geographic Meta Tags for Uzbekistan */}
      <meta name="geo.region" content="UZ" />
      <meta name="geo.placename" content="Tashkent" />
      <meta name="geo.position" content="41.2995;69.2401" />
      <meta name="ICBM" content="41.2995, 69.2401" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
