export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="text-lg font-semibold">M4 Tailoring</span>
            </div>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Master tailoring and embroidery services crafted with precision and care.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Custom Tailoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Embroidery Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Alterations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Repairs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Follow Us</h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">© 2025 M4 Tailoring. All rights reserved.</p>
          <div className="flex gap-6 font-mono text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
