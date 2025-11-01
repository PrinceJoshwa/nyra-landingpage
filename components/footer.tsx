import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1 space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                <img src="/logo.jpg" alt="Nyra" className="w-6 h-6 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl" />
              </div>
              <div>
                <div className="font-bold text-xl sm:text-2xl tracking-tight">NYRA</div>
                <div className="text-xs text-orange-400 font-medium tracking-widest -mt-1">SUNTERRA</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
              Crafting luxurious, sustainable homes that blend elegance with eco-consciousness for the discerning
              homeowner who values both luxury and responsibility.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight text-orange-400">Quick Links</h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                { name: "Overview", href: "/#overview" },
                { name: "Floor Plans", href: "/#floor-plans" },
                { name: "Features", href: "/#features" },
                { name: "Amenities", href: "/#amenities" },
                { name: "Location", href: "/#location" },
                { name: "Gallery", href: "/#gallery" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-300 hover:text-orange-400 transition-colors font-medium text-sm sm:text-base hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

{/* Contact Info */}
<div>
  <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight text-orange-400">
    Contact Info
  </h4>

  <div className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base">
    <a
      href="tel:+917760777992"
      className="block font-medium hover:text-orange-400 transition-colors"
    >
      +91 7760 777 992
    </a>
    <a
      href="tel:+917090407090"
      className="block font-medium hover:text-orange-400 transition-colors"
    >
      +91 7090 407 090
    </a>
    <a
      href="https://www.nyrasunterra.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block font-medium hover:text-orange-400 transition-colors"
    >
      www.nyrasunterra.com
    </a>
    <a
      href="mailto:info@nyrasunterra.com"
      className="block font-medium hover:text-orange-400 transition-colors"
    >
      info@nyrasunterra.com
    </a>
  </div>
</div>


          {/* Legal & Compliance */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8 tracking-tight text-orange-400">
              Legal & Compliance
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {["Privacy Policy", "Terms of Service", "RERA Details", "Disclaimer", "Refund Policy"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="block text-slate-300 hover:text-orange-400 transition-colors font-medium text-sm sm:text-base hover:translate-x-1 transform duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
<div className="border-t border-slate-700/50 py-2 sm:py-3">
  <div className="flex justify-end">
    <div className="flex flex-col items-start max-w-xs">
      {/* Heading aligned to card start */}
      <h3 className="text-lg font-bold text-white mb-2">
        Marketing Partner
      </h3>

      {/* Card */}
      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 w-full text-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketly.jpg-94neXTeblJa0erHKRPtdZjHIclIscG.jpeg"
          alt="Marketly - Your Marketing Partner"
          className="h-12 w-auto mx-auto mb-2 object-contain"
        />
        <p className="text-slate-300 text-xs">
          Powered by professional marketing excellence
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 sm:pt-12 text-center">
          <div className="mb-4 sm:mb-6">
            <p className="text-slate-300 mb-2 font-medium text-sm sm:text-base">
              &copy; 2024 Nyra Projects Pvt Ltd. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-4xl mx-auto">
              All images, amenities, specifications, and features shown are indicative and for representational purposes
              only. Actual construction may vary. Please refer to the final agreement for binding terms and conditions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <span className="hover:text-orange-400 transition-colors">RERA Approved</span>
            <span>•</span>
            <span className="hover:text-orange-400 transition-colors">ISO Certified</span>
            <span>•</span>
            <span className="hover:text-orange-400 transition-colors">Green Building</span>
            <span>•</span>
            <span className="hover:text-orange-400 transition-colors">Vaastu Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
