"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-semibold tracking-tight text-balance">
              M4 Tailoring
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Appointment
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Book Appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
