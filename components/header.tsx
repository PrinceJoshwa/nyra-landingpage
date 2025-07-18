// "use client"

// import { Button } from "@/components/ui/button"
// import { Phone, Menu, X, ArrowUpRight } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const navigationItems = [
//     { name: "Home", href: "/" },
//     { name: "Overview", href: "/#overview" },
//     { name: "Floor Plans", href: "/#floor-plans" },
//     { name: "Features", href: "/#features" },
//     { name: "Amenities", href: "/#amenities" },
//     { name: "Gallery", href: "/#gallery" },
//     { name: "Location", href: "/#location" },
//     { name: "FAQ", href: "/#faq" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header className="fixed top-0 w-full bg-white/95 backdrop-blur-2xl border-b border-orange-200/60 z-50 shadow-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
//         <div className="flex items-center justify-between">
//           {/* Enhanced Logo Section */}
//           <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
//             <div className="relative">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
//                 <img src="/nyra-logo.png" alt="Nyra" className="w-7 h-7 sm:w-10 sm:h-10 brightness-0 invert" />
//               </div>
//               <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
//             </div>
//             <div className="hidden sm:block">
//               <div className="font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight group-hover:text-orange-700 transition-colors">
//                 NYRA
//               </div>
//               <div className="text-xs text-orange-600 font-semibold tracking-widest -mt-1 uppercase">SUNTERRA</div>
//             </div>
//           </Link>

//           {/* Enhanced Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
//             {navigationItems.slice(1).map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-slate-700 hover:text-orange-600 font-semibold text-sm tracking-wide transition-all duration-300 relative group py-2 px-1"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
//               </Link>
//             ))}
//           </nav>

//           {/* Enhanced CTA Section */}
//           <div className="flex items-center space-x-3 sm:space-x-4">
//             {/* Phone Badge */}
//             <div className="hidden md:flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 <Phone className="h-4 w-4 text-orange-600" />
//               </div>
//               <div className="text-right">
//                 <div className="font-bold text-slate-900 text-sm">+91 7022 433 001</div>
//                 <div className="text-xs text-orange-600 font-medium">Call Now</div>
//               </div>
//             </div>

//             {/* Primary CTA Button */}
//             <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105">
//               <span className="hidden sm:inline">Schedule Visit</span>
//               <span className="sm:hidden">Visit</span>
//               <ArrowUpRight className="h-4 w-4 ml-2 group-hover:rotate-45 transition-transform" />
//             </Button>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden p-3 rounded-2xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-colors"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-5 w-5 text-orange-600" />
//               ) : (
//                 <Menu className="h-5 w-5 text-orange-600" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Enhanced Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-6 pb-6 border-t border-orange-200">
//             <nav className="flex flex-col space-y-1 pt-6">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-slate-700 hover:text-orange-600 hover:bg-orange-50 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 text-base"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="pt-4 px-6">
//                 <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 rounded-2xl border border-orange-200">
//                   <Phone className="h-4 w-4 text-orange-600" />
//                   <div>
//                     <div className="font-bold text-slate-900 text-sm">+91 7022 433 001</div>
//                     <div className="text-xs text-orange-600">Call for best prices</div>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Overview", href: "/#overview" },
    { name: "Floor Plans", href: "/#floor-plans" },
    { name: "Features", href: "/#features" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Location", href: "/#location" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-2xl border-b border-orange-200/60 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img src="/logo.jpg" alt="Nyra" className="w-6 h-6 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight group-hover:text-orange-700 transition-colors">
                NYRA
              </div>
              <div className="text-xs text-orange-600 font-semibold tracking-widest -mt-1 uppercase">SUNTERRA</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-orange-600 font-medium text-sm tracking-wide transition-all duration-300 relative group py-2 px-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Section - Phone & CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Phone Numbers - Vertical Stack */}
            <div className="hidden md:flex flex-col items-end bg-gradient-to-r from-orange-50 to-red-50 px-3 lg:px-4 py-2 lg:py-3 rounded-xl border border-orange-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-3 w-3 text-orange-600" />
              </div>
              <div className="text-right">
                <div className="font-bold text-slate-900 text-xs leading-tight">+91 7022 433 001</div>
                <div className="font-bold text-slate-900 text-xs leading-tight">+91 7760 777 992</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105">
              <span className="hidden sm:inline">Schedule Visit</span>
              <span className="sm:hidden">Visit</span>
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:rotate-45 transition-transform" />
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-orange-600" />
              ) : (
                <Menu className="h-5 w-5 text-orange-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-orange-200">
            <nav className="flex flex-col space-y-1 pt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-orange-600 hover:bg-orange-50 font-medium py-3 px-4 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 rounded-xl border border-orange-200">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">+91 7022 433 001</div>
                    <div className="font-bold text-slate-900 text-sm">+91 7760 777 992</div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
