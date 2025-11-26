import { Search, X } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductSearchProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const ProductSearch = ({ onSearch, searchQuery }: ProductSearchProps) => {
  const { t } = useLanguage();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearch = (value: string) => {
    setLocalQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setLocalQuery("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t(
            "Mahsulot qidirish... (masalan: Shimge, Penopleks, suv isitgich)",
            "Поиск продуктов... (например: Shimge, Пеноплекс, водонагреватель)"
          )}
          value={localQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
        />
        {localQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {localQuery && (
        <p className="text-sm text-muted-foreground mt-2">
          {t(
            `"${localQuery}" bo'yicha qidiruv natijalari`,
            `Результаты поиска по "${localQuery}"`
          )}
        </p>
      )}
    </div>
  );
};

export default ProductSearch;
