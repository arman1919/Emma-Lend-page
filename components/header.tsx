"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("ARM")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { arm: "Ծառայություններ", rus: "Услуги", eng: "Services", href: "#services" },
    { arm: "Պորտֆոլիո", rus: "Портфолио", eng: "Portfolio", href: "#portfolio" },
    { arm: "Փարթներներ", rus: "Партнеры", eng: "Partners", href: "#partners" },
    { arm: "Մեր մասին", rus: "О нас", eng: "About Us", href: "#about" },
    { arm: "Կոնտակներ", rus: "Контакты", eng: "Contact", href: "#contact" },
  ]

  const languages = [
    { code: "ARM", label: "ARM" },
    { code: "RUS", label: "RUS" },
    { code: "ENG", label: "ENG" },
  ]

  const getNavText = (item: any) => {
    switch (currentLanguage) {
      case "RUS":
        return item.rus
      case "ENG":
        return item.eng
      default:
        return item.arm
    }
  }

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black"
      }`}
    >
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="transition-transform duration-300 hover:scale-105">
              <Image src="/geometric-red-green-logo.png" alt="Logo" width={120} height={45} className="h-11 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSmoothScroll(item.href)}
                  className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 group"
                >
                  {getNavText(item)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <div className="flex items-center space-x-1 ml-6 pl-6 border-l border-gray-700">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className={`px-3 py-1 text-sm font-medium transition-colors duration-300 ${
                      currentLanguage === lang.code ? "text-red-500" : "text-gray-300 hover:text-green-500"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex space-x-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-medium transition-colors duration-300 ${
                    currentLanguage === lang.code ? "text-red-500" : "text-gray-300 hover:text-green-500"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-gray-800">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSmoothScroll(item.href)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
            >
              {getNavText(item)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}
