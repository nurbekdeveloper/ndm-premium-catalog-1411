import { Send, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const TelegramWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  const telegramUsername = "ndmsantexnika";
  const message = t(
    "Assalomu alaykum! Mahsulotlar haqida ma'lumot olmoqchiman.",
    "Здравствуйте! Хочу получить информацию о продуктах."
  );

  const handleTelegramClick = () => {
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Telegram Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <div className="bg-background border border-border rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-[#0088cc] rounded-full p-2">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">NDM.uz</p>
                  <p className="text-xs text-muted-foreground">
                    {t("Onlayn", "Онлайн")}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-foreground/80 mb-3">
              {t(
                "Savol-javob uchun Telegram orqali yozing!",
                "Напишите в Telegram для вопросов!"
              )}
            </p>
            <Button
              onClick={handleTelegramClick}
              className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white"
            >
              {t("Telegram'da yozish", "Написать в Telegram")}
            </Button>
          </div>
        )}
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-[#0088cc] hover:bg-[#0077b3] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Send className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default TelegramWidget;
