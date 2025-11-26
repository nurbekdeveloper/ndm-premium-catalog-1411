import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSchema = () => {
  const { language } = useLanguage();

  const faqData = {
    uz: [
      {
        question: "Toshkentga yetkazib berish bormi?",
        answer: "Ha, biz Toshkent va O'zbekistonning barcha hududlariga tez yetkazib beramiz. Yetkazib berish 2-5 ish kuni ichida amalga oshiriladi."
      },
      {
        question: "Mahsulotlarga kafolat berish bormi?",
        answer: "Ha, barcha mahsulotlar rasmiy kafolat bilan ta'minlanadi. Kafolat muddati mahsulot turiga qarab 1 yildan 5 yilgacha."
      },
      {
        question: "Shimge nasos qanday narx?",
        answer: "Shimge nasos narxlari modeliga qarab farq qiladi. To'liq narxlar ro'yxati uchun katalogimizni ko'rib chiqing yoki biz bilan bog'laning."
      },
      {
        question: "Hydro Plast PPR quvurlar O'zbekistonda bormi?",
        answer: "Ha, bizda Hydro Plast brendining turli o'lchamdagi va turlari PPR qudurlari mavjud. PN10, PN16, PN20 bosimli quvurlar."
      },
      {
        question: "ПЕНОПЛЕХ issiqlik izolyatsiya qanday?",
        answer: "ПЕНОПЛЕХ yuqori sifatli XPS issiqlik izolyatsiya materiali. Qurilish, pol, tom uchun. Turli qalinlikda mavjud."
      }
    ],
    ru: [
      {
        question: "Есть ли доставка по Ташкенту?",
        answer: "Да, мы осуществляем быструю доставку по Ташкенту и всем регионам Узбекистана. Доставка занимает 2-5 рабочих дней."
      },
      {
        question: "Предоставляется ли гарантия на товары?",
        answer: "Да, все товары поставляются с официальной гарантией производителя. Срок гарантии от 1 до 5 лет в зависимости от типа продукции."
      },
      {
        question: "Какая цена на насосы Shimge?",
        answer: "Цены на насосы Shimge зависят от модели. Для получения полного прайс-листа просмотрите наш каталог или свяжитесь с нами."
      },
      {
        question: "Есть ли трубы Hydro Plast в Узбекистане?",
        answer: "Да, у нас есть трубы PPR бренда Hydro Plast различных размеров и типов. Трубы под давлением PN10, PN16, PN20."
      },
      {
        question: "Что такое теплоизоляция ПЕНОПЛЕХ?",
        answer: "ПЕНОПЛЕХ - высококачественный материал теплоизоляции XPS. Для строительства, пола, кровли. Доступны различные толщины."
      }
    ]
  };

  const currentFAQ = language === "uz" ? faqData.uz : faqData.ru;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentFAQ.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
