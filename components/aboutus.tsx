// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Award, Users, Building, Leaf, Shield, Star, ArrowRight } from "lucide-react"

// export default function AboutUsSection() {
//   return (
//     <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.1),transparent_50%)]"></div>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//           <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//             About NYRA SUNTERRA
//           </Badge>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//             Building Dreams with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Purpose</span>
//           </h2>
//           <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//           <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
//             {/* Content will be updated based on the image you provide */}
//             At NYRA SUNTERRA, we believe luxury and sustainability can coexist beautifully. Our vision is to create
//             homes that not only provide unparalleled comfort but also contribute to a greener future.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
//           <div className="space-y-6 sm:space-y-8">
//             <div className="space-y-4 sm:space-y-6">
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Our Story & Vision</h3>
//               <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
//                 {/* This content will be updated based on your image */}
//                 Founded with a commitment to excellence and sustainability, NYRA SUNTERRA represents the future of
//                 luxury living. We combine cutting-edge solar technology with premium construction to deliver homes that
//                 are both environmentally responsible and exceptionally beautiful.
//               </p>
//               <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
//                 Every villa is designed with meticulous attention to detail, ensuring that our residents enjoy zero
//                 electricity bills while living in spaces that reflect their success and values.
//               </p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//               {[
//                 { icon: Award, label: "15+ Years", desc: "Industry Experience" },
//                 { icon: Building, label: "500+", desc: "Homes Delivered" },
//                 { icon: Users, label: "1000+", desc: "Happy Families" },
//                 { icon: Leaf, label: "100%", desc: "Green Living" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-4 sm:p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-orange-100"
//                 >
//                   <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-4 mx-auto w-fit">
//                     <stat.icon className="h-6 w-6 text-orange-600" />
//                   </div>
//                   <div className="text-2xl font-bold text-slate-900 mb-1">{stat.label}</div>
//                   <div className="text-sm text-slate-600 font-medium">{stat.desc}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             {/* Placeholder for the image you'll provide */}
//             <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
//               <img src="/building1.webp" alt="About NYRA SUNTERRA" className="w-full h-full object-cover" />
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
//             <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
//           {[
//             {
//               icon: Leaf,
//               title: "Sustainability First",
//               description:
//                 "Every decision we make prioritizes environmental responsibility without compromising on luxury or comfort.",
//               color: "green",
//             },
//             {
//               icon: Shield,
//               title: "Quality Assurance",
//               description:
//                 "We maintain the highest standards in construction, materials, and craftsmanship to ensure lasting value.",
//               color: "blue",
//             },
//             {
//               icon: Star,
//               title: "Customer Excellence",
//               description:
//                 "Our commitment extends beyond construction to creating lasting relationships with our residents.",
//               color: "purple",
//             },
//           ].map((value, index) => (
//             <Card
//               key={index}
//               className="border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//             >
//               <CardContent className="p-6 sm:p-8 text-center">
//                 <div
//                   className={`p-4 bg-gradient-to-br from-${value.color}-100 to-${value.color}-50 rounded-2xl mb-6 mx-auto w-fit`}
//                 >
//                   <value.icon className={`h-8 w-8 text-${value.color}-600`} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
//                 <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12 sm:mt-16">
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-lg font-semibold shadow-2xl"
//           >
//             Enquire Now!
//             <ArrowRight className="h-5 w-5 ml-3" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building,
  Leaf,
  Shield,
  Star,
  ArrowRight,
  Sun,
  Home,
  MapPin,
  TreePine,
  Play,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  MessageSquare,
} from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function AboutUsSection() {
  const [currentFloorPlan, setCurrentFloorPlan] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const { toast } = useToast()

  const floorPlans = [
    {
      title: "Villa Plan - West Facing (SBA 3200 SQ.FT.)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYRA-SUNTERRA-Brochure_page-0009.jpg-3L5AULfPiA6Z6GnIwB9OZFmkAVwZkX.jpeg",
      description: "Perfect plan for your forever home with optimal west-facing orientation",
    },
    {
      title: "Villa Plan - East Facing (SBA 3200 SQ.FT.)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYRA-SUNTERRA-Brochure_page-0008.jpg-ivtxEbKvTvw29jhKATxJaTlelUixPt.jpeg",
      description: "Perfect plan for your forever home with optimal east-facing orientation",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll contact you soon!",
      duration: 5000,
    })

    // Reset form and close dialog
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsDialogOpen(false)
  }

  const nextFloorPlan = () => {
    setCurrentFloorPlan((prev) => (prev + 1) % floorPlans.length)
  }

  const prevFloorPlan = () => {
    setCurrentFloorPlan((prev) => (prev - 1 + floorPlans.length) % floorPlans.length)
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
            About NYRA SUNTERRA
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Building Dreams with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Purpose</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4 sm:mb-6"></div>
        </div>

        {/* Solar Energy Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center">
                <Sun className="h-8 w-8 text-orange-600 mr-3" />
                Solar Energy at the Heart of Your Home
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                <strong>Enjoy substantial savings on your power bills with solar energy.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                Imagine a home where the sun powers your life, providing a sustainable lifestyle that grows with you. At
                Nyra Sunterra, cutting-edge solar technology drives every villa, reducing your carbon footprint and
                slashing electricity bills. As the sun rises, your home thrives, offering comfort, efficiency, and a
                brighter, greener future.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                Imagine an evening where your terrace transforms into a vast open space, perfect for stargazing,
                gatherings, or simply unwinding under the night sky. This grand terrace is more than just an outdoor
                area—it's a playground for your imagination, where every star-filled night becomes an opportunity to
                create cherished memories.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Home, label: "Large 4 BHKs", desc: "with Home Theatre" },
                { icon: Building, label: "58 Villas", desc: "exquisitely crafted premium" },
                { icon: Shield, label: "Vaastu Compliant", desc: "villas with covered parking" },
                { icon: MapPin, label: "Just 15 mins", desc: "from upcoming Sarjapur Metro" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-orange-100"
                >
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-4 mx-auto w-fit">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
              <img
                // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYRA-SUNTERRA-Brochure_page-0010.jpg-UcPqqGB5M5fAvhMAZeVSPLhWGov5P2.jpeg"
                src="/aboutus.png"
                alt="Right where you need to be - Location Connectivity"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
          </div> */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-orange-200">
              <img
                src="/aboutus.png"
                alt="Right where you need to be - Location Connectivity"
                className="w-full h-full object-contain bg-gradient-to-br from-orange-100 via-white to-red-100"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
          </div>

        </div>

        {/* Location Connectivity Details */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Right Where You Need to Be
            </h3>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
              Strategically located with excellent connectivity to all major landmarks, schools, offices, and healthcare
              facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Building className="h-5 w-5 text-blue-600 mr-2" />
                Education
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1. GEAR Innovative Intl. School - 5 mins</li>
                <li>2. Gurukul High School - 5 mins</li>
                <li>3. BRS Global School - 5 mins</li>
                <li>4. Indus International School - 6 mins</li>
                <li>5. Azim Premji University - 10 mins</li>
                <li>6. Harvest International School - 10 mins</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-purple-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Building className="h-5 w-5 text-purple-600 mr-2" />
                Office
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1. Upcoming Infosys Campus - 10 mins</li>
                <li>2. Wipro Kodathi - 30 mins</li>
                <li>3. Biocon Campus - 30 mins</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-red-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Building className="h-5 w-5 text-red-600 mr-2" />
                Hospitals
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1. Oxford Hospital - 15 mins</li>
                <li>2. Sri Sai Hospital - 18 mins</li>
                <li>3. Narayana Hrudayalaya - 20 mins</li>
                <li>4. Manipal Hospital - 45 mins</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-green-100">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-green-600 mr-2" />
                Other Landmarks
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1. Sarjapur - 10 mins</li>
                <li>2. Attibele - 12 mins</li>
                <li>3. Electronic City - 30 mins</li>
                <li>4. Bommasandra Industrial Area - 30 mins</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Large Spaces Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-slate-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-18%20121835-coY4AGlR0Uvw7O3Efgikii5MS9X3rC.png"
                src="/building1.webp"
                alt="Large Spaces - Villa Exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Large Spaces, Even Larger Comfort
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                Step into a world of expansive comfort where every detail is designed to impress. With large windows
                that flood your home with natural light, grand double-doors that make an entrance unforgettable, and
                generously sized bedrooms that offer endless possibilities, these living spaces redefine luxury and
                elevate your everyday living experience.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-light">
                Transform your villa into a cinematic experience with a personal home theatre. Whether it's a team
                building movie night or a blockbuster with friends, this space is designed to comfortably accommodate
                everyone, offering an immersive viewing experience that makes every seat the best in the house.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: TreePine, text: "Grand double-door entrance made of teak wood" },
                { icon: Play, text: "Miniplex that can accommodate 10 people" },
                { icon: Star, text: "Sitout gazebo" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                    <feature.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floor Plans Carousel Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Perfect Plan for Your Forever Home
            </h3>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
              Each villa is meticulously planned across three levels to maximize space, natural light, and functionality
              with both East and West facing options
            </p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-50 via-white to-slate-50">
                  <img
                    src={floorPlans[currentFloorPlan].image || "/placeholder.svg"}
                    alt={floorPlans[currentFloorPlan].title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevFloorPlan}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-slate-700" />
                </button>

                <button
                  onClick={nextFloorPlan}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-slate-700" />
                </button>

                {/* Plan Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{floorPlans[currentFloorPlan].title}</h4>
                  <p className="text-sm text-slate-600">{floorPlans[currentFloorPlan].description}</p>
                </div>
              </div>
            </Card>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {floorPlans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFloorPlan(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentFloorPlan ? "bg-orange-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {[
              {
                title: "Ground Floor",
                features: ["Living Room", "Kitchen/Dining", "Bedroom", "Toilet", "Car Parking"],
                sqft: "1,600 sq.ft",
              },
              {
                title: "First Floor",
                features: ["Family Room", "Master Bedroom", "2 Bedrooms", "Balcony", "Toilets"],
                sqft: "1,400 sq.ft",
              },
              {
                title: "Second Floor",
                features: ["Home Theatre", "Gym", "Study Room", "Bar Counter", "Utility"],
                sqft: "200 sq.ft",
              },
            ].map((floor, index) => (
              <Card
                key={index}
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-100"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">{floor.title}</h4>
                <div className="text-sm text-orange-600 font-semibold mb-4">{floor.sqft}</div>
                <ul className="space-y-2">
                  {floor.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Master Plan Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Map Your Dream Home</h3>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
              58 premium villas thoughtfully arranged with world-class amenities and green spaces
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
            <div className="aspect-video bg-gradient-to-br from-green-50 via-white to-green-50 relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYRA-SUNTERRA-Brochure_page-0007.jpg-5aadOWDbyWtKdoSmCCneMpwtdJc1nE.jpeg"
                alt="Map your dream home - Master Plan"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { num: "01", name: "Main Entrance" },
              { num: "02", name: "Zen Garden" },
              { num: "03", name: "Semi Public Pergola" },
              { num: "04", name: "Children Play Area" },
              { num: "05", name: "Barbeque Area" },
              { num: "06", name: "Transform/DG Yard" },
              { num: "07", name: "Club House" },
              { num: "08", name: "Garden Area" },
              { num: "09", name: "Cricket Pitch" },
              { num: "10", name: "Senior Citizen Kiosk" },
              { num: "11", name: "Multipurpose Court" },
              { num: "12", name: "Badminton Court" },
            ].map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {amenity.num}
                </div>
                <span className="text-sm text-slate-700 font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              icon: Leaf,
              title: "Sustainability First",
              description:
                "At Nyra, we craft luxurious, sustainable homes that blend elegance with eco-consciousness. Our mission is to create energy-efficient residences that elevate your lifestyle while respecting the planet.",
              color: "green",
            },
            {
              icon: Shield,
              title: "Quality & Innovation",
              description:
                "From design to delivery, we ensure a seamless home-buying experience, guided by our core values of sustainability, innovation, quality, integrity, and community.",
              color: "blue",
            },
            {
              icon: Star,
              title: "Responsible Living",
              description:
                "More than just builders, we are passionate about merging opulence with responsible living, creating homes that contribute to a greener future.",
              color: "purple",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div
                  className={`p-4 bg-gradient-to-br from-${value.color}-100 to-${value.color}-50 rounded-2xl mb-6 mx-auto w-fit`}
                >
                  <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enquire Now Button with Popup */}
        <div className="text-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-lg font-semibold shadow-2xl"
              >
                Enquire Now!
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900 text-center">Get in Touch</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <Textarea
                      name="message"
                      placeholder="Your Message (Optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="pl-10 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl"
                >
                  Submit Enquiry
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

