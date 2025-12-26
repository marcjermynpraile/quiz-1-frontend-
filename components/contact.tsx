"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-balance">Visit our atelier</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-sm">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" className="font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-sm">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" className="font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-mono text-sm">
                      Phone
                    </label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" className="font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-mono text-sm">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={4} className="font-mono" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="font-mono text-sm text-muted-foreground">
                  123 Fashion Avenue
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="font-mono text-sm text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="font-mono text-sm text-muted-foreground">info@elitethreads.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Hours</h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
