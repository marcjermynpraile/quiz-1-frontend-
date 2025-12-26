export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <p className="text-sm font-mono text-primary uppercase tracking-wider">About Us</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-balance">
            Craftsmanship since generations
          </h2>
          <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-2xl mx-auto">
            With decades of combined experience, our master craftsmen bring unparalleled expertise to every project.
            From traditional techniques to modern innovations, we honor the art of tailoring while embracing
            contemporary style.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <div className="text-4xl font-light text-primary">25+</div>
              <div className="font-mono text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-primary">5000+</div>
              <div className="font-mono text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-primary">100%</div>
              <div className="font-mono text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
