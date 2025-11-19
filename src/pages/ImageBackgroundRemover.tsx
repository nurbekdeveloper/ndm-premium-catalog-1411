import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, Loader2 } from "lucide-react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import SEO from "@/components/SEO";

const ImageBackgroundRemover = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: t("Xatolik", "Ошибка"),
        description: t("Faqat rasm fayllari qabul qilinadi", "Принимаются только файлы изображений"),
        variant: "destructive"
      });
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveBackground = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    try {
      // Convert base64 to blob
      const response = await fetch(originalImage);
      const blob = await response.blob();
      
      // Load image
      const img = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(img);
      
      // Convert to base64 for display
      const reader = new FileReader();
      reader.onload = (e) => {
        setProcessedImage(e.target?.result as string);
        toast({
          title: t("Muvaffaqiyatli", "Успешно"),
          description: t("Orqa fon olib tashlandi", "Фон удален")
        });
      };
      reader.readAsDataURL(resultBlob);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t("Xatolik", "Ошибка"),
        description: t("Orqa fonni olib tashlashda xatolik yuz berdi", "Произошла ошибка при удалении фона"),
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `no-bg-${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO 
        title={t("Orqa fonni olib tashlash", "Удаление фона")}
        description={t("Mahsulot rasmlarining orqa fonini avtomatik ravishda olib tashlash vositasi", "Инструмент для автоматического удаления фона с изображений продуктов")}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t("Orqa fonni olib tashlash", "Удаление фона")}
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("Mahsulot rasmlarini oq fon bilan qayta ishlang", "Обработайте изображения продуктов с белым фоном")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("Asl rasm", "Оригинальное изображение")}</CardTitle>
                <CardDescription>
                  {t("Qayta ishlash uchun rasm yuklang", "Загрузите изображение для обработки")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    {originalImage ? (
                      <img 
                        src={originalImage} 
                        alt="Original" 
                        className="max-h-96 mx-auto object-contain"
                      />
                    ) : (
                      <div className="py-12">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">
                          {t("Rasm yuklash uchun bosing", "Нажмите для загрузки изображения")}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <label className="block">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <Button className="w-full" variant="outline" asChild>
                      <span>
                        <Upload className="mr-2 h-4 w-4" />
                        {t("Rasm yuklash", "Загрузить изображение")}
                      </span>
                    </Button>
                  </label>

                  <Button 
                    className="w-full btn-premium"
                    onClick={handleRemoveBackground}
                    disabled={!originalImage || isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("Qayta ishlanmoqda...", "Обработка...")}
                      </>
                    ) : (
                      t("Orqa fonni olib tashlash", "Удалить фон")
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("Natija", "Результат")}</CardTitle>
                <CardDescription>
                  {t("Oq fon bilan qayta ishlangan rasm", "Обработанное изображение с белым фоном")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-border rounded-lg p-8 bg-white min-h-[400px] flex items-center justify-center">
                    {processedImage ? (
                      <img 
                        src={processedImage} 
                        alt="Processed" 
                        className="max-h-96 mx-auto object-contain"
                      />
                    ) : (
                      <p className="text-muted-foreground">
                        {t("Natija bu yerda ko'rsatiladi", "Результат будет показан здесь")}
                      </p>
                    )}
                  </div>

                  <Button 
                    className="w-full"
                    onClick={handleDownload}
                    disabled={!processedImage}
                    variant="secondary"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("Yuklab olish", "Скачать")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>{t("Qanday foydalanish", "Как использовать")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>1. {t("Qayta ishlash uchun mahsulot rasmini yuklang", "Загрузите изображение продукта для обработки")}</p>
              <p>2. {t("'Orqa fonni olib tashlash' tugmasini bosing", "Нажмите кнопку 'Удалить фон'")}</p>
              <p>3. {t("Jarayon tugaguncha kuting (30-60 soniya)", "Дождитесь завершения процесса (30-60 секунд)")}</p>
              <p>4. {t("Natijani yuklab oling", "Скачайте результат")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ImageBackgroundRemover;
