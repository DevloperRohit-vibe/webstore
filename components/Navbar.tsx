'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowMenuItems(false);
  }, [pathname]);

  // Handle menu opening animation
  const handleMenuToggle = () => {
    if (!isMobileMenuOpen) {
      // Opening menu
      setIsMobileMenuOpen(true);
      setTimeout(() => {
        setShowMenuItems(true);
      }, 300); // Delay before showing items
    } else {
      // Closing menu
      setShowMenuItems(false);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 400); // Wait for items to fade out
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  // Apply glass effect if scrolled OR mobile menu is open
  const shouldShowGlassEffect = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowGlassEffect
          ? 'backdrop-blur-xl bg-white/70 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            growkit
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={handleMenuToggle}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-0 rotate-90 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex justify-center bg-purple-100 py-2 mb-2 rounded-xl transition-all duration-500 ${
                  pathname === link.href
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-700'
                } ${
                  showMenuItems
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  transitionDelay: showMenuItems ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => {
                  setShowMenuItems(false);
                  setTimeout(() => setIsMobileMenuOpen(false), 400);
                }}
              >
                {link.label}
              </Link>
            ))}
            <button 
              className={`w-full mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full transition-all duration-500 ${
                showMenuItems
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: showMenuItems ? `${navLinks.length * 100}ms` : '0ms'
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}