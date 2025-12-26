import { Card } from "@/components/ui/card"

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-balance">Our finest work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/Custom.jpg"
                alt="Custom tailored suit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">Custom Tailoring</h3>
                <p className="font-mono text-sm text-white/90">Bespoke three-piece suit</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/trial-court.jpg"
                alt="Embroidery work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">Embroidery</h3>
                <p className="font-mono text-sm text-white/90">Hand-stitched floral design</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/Embroidery.jpg"
                alt="Wedding dress alteration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">Special Occasions</h3>
                <p className="font-mono text-sm text-white/90">Bridal gown customization</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/Tailoring.jpg"
                alt="Monogram work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">Monogramming</h3>
                <p className="font-mono text-sm text-white/90">Personalized details</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/embroidered-shirt.jpg"
                alt="Embroidered Shirt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">Embroidered Shirt</h3>
                <p className="font-mono text-sm text-white/90">Elegant embroidery design</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer">
            <div className="aspect-[4/5] relative bg-muted">
              <img
                src="/white-coat.jpg"
                alt="White Coat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-medium mb-2">White Coat</h3>
                <p className="font-mono text-sm text-white/90">Tailored professional attire</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
