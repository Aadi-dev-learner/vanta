
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white/80 dark:bg-crypto-dark/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 bg-gradient-to-br from-crypto-blue to-crypto-purple rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">W3</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">PayPilot</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-crypto-purple transition-colors">
            Home
          </Link>
          <Link to="/#features" className="font-medium hover:text-crypto-purple transition-colors">
            Features
          </Link>
          <Link to="/#pricing" className="font-medium hover:text-crypto-purple transition-colors">
            Pricing
          </Link>
          <Link to="/#docs" className="font-medium hover:text-crypto-purple transition-colors">
            Documentation
          </Link>
        </nav>

        {/* Call to action buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Log In</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-crypto-dark shadow-lg absolute top-16 right-4 left-4 rounded-lg z-50 overflow-hidden">
          <nav className="flex flex-col py-4">
            <Link
              to="/"
              className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#features"
              className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#pricing"
              className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/#docs"
              className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <div className="flex flex-col gap-2 mt-4 px-6">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
