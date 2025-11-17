import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Cart from "./Cart";
import ndmLogo from "@/assets/ndm-logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { getTotalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { to: "/", label: t("Bosh sahifa", "Главная") },
    { to: "/catalog", label: t("Katalog", "Каталог") },
    { to: "/solutions", label: t("Yechimlar", "Решения") },
    { to: "/partners", label: t("Hamkorlar", "Партнёры") },
    { to: "/team", label: t("Jamoa", "Команда") },
    { to: "/contact", label: t("Aloqa", "Контакты") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in-down">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-3 group">
          <img src={ndmLogo} alt="NDM" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart and Language Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative group"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            {getTotalItems() > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-bounce-subtle"
              >
                {getTotalItems()}
              </Badge>
            )}
          </Button>
          
          <Select value={language} onValueChange={(value: "uz" | "ru") => setLanguage(value)}>
            <SelectTrigger className="w-[100px] h-9">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uz">O'zbek</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
