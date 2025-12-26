import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Bespoke suits, alterations, and custom-fit garments crafted to perfection.",
  },
  {
    icon: Sparkles,
    title: "Embroidery Design",
    description: "Intricate embroidery work, monogramming, and decorative stitching.",
  },
  {
    icon: RefreshCw,
    title: "Alterations & Repairs",
    description: "Expert alterations, hemming, and garment restoration services.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-balance">
            Crafted with excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
