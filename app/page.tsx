// // "use client"
// // import { Button } from "@/components/ui/button"
// // import type React from "react"
// // import { useState } from "react"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Badge } from "@/components/ui/badge"
// // import { useToast } from "@/hooks/use-toast"
// // import {
// //   Phone,
// //   Play,
// //   Sun,
// //   Home,
// //   Award,
// //   TreePine,
// //   Star,
// //   Shield,
// //   Waves,
// //   Dumbbell,
// //   Users,
// //   Building,
// //   MapPin,
// //   Mail,
// //   Calendar,
// //   ChevronRight,
// //   Clock,
// //   CheckCircle2,
// //   Bed,
// //   Bath,
// //   Square,
// //   Car,
// //   Download,
// //   Loader2,
// //   X,
// //   IndianRupee,
// //   MessageSquareQuote,
// // } from "lucide-react"
// // import Header from "@/components/header"
// // import Footer from "@/components/footer"
// // import AboutUsSection from "@/components/aboutus"
// // import GallerySection from "./gallery-section"
// // import FAQSection from "./faq-section"
// // import ContactForm from "@/components/ContactForm"
// // import WhatsAppChat from "@/components/WhatsAppChat"
// // // import EnhancedPricingSection from "./enhanced-pricing"

// // const downloadBrochure = () => {
// //   const link = document.createElement("a")
// //   link.href = "/nyra-sunterra-brochure-1.pdf"
// //   link.download = "NYRA-SUNTERRA-Brochure-1.pdf"
// //   document.body.appendChild(link)
// //   link.click()
// //   document.body.removeChild(link)
// // }

// // export default function LandingPage() {
// //   const [showVideo, setShowVideo] = useState(false)
// //   const [activeFloorPlan, setActiveFloorPlan] = useState(0)
// //   const [isSubmitting, setIsSubmitting] = useState(false)
// //   const [showBrochurePopup, setShowBrochurePopup] = useState(false)
// //   const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false)
// //   const [showBrochureSuccess, setShowBrochureSuccess] = useState(false)
// //   const [showContactSuccess, setShowContactSuccess] = useState(false)
// //   const [showNyraVideo, setShowNyraVideo] = useState(false)
// //   const [showSolarVideo, setShowSolarVideo] = useState(false)
// //   const { toast } = useToast()

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     visitDate: "",
// //     requirements: "",
// //   })

// //   const [brochureFormData, setBrochureFormData] = useState({
// //     name: "",
// //     email: "",
// //     contactNumber: "",
// //   })

// //   // --- States for Brochure OTP Flow ---
// //   const [otp, setOtp] = useState("")
// //   const [showOtpInput, setShowOtpInput] = useState(false) 
// //   const [isSendingOtp, setIsSendingOtp] = useState(false)
// //   const [otpError, setOtpError] = useState("")

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const handleBrochureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target
// //     setBrochureFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   // FIXED: Step 1 - Call your OWN backend API route
// //   const handleSendOtp = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setOtpError("")

// //     if (brochureFormData.contactNumber.length < 10) {
// //       setOtpError("Please enter a valid 10-digit contact number.")
// //       return
// //     }

// //     setIsSendingOtp(true)
// //     try {
// //       const response = await fetch('/api/send-otp', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ contactNumber: brochureFormData.contactNumber }),
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Failed to send OTP.');
// //       }
      
// //       // Store the OTP that the backend generated and sent back
// //       sessionStorage.setItem("brochure_otp", data.otp);

// //       toast({
// //         title: "OTP Sent!",
// //         description: "Please enter the OTP sent to your mobile number.",
// //         duration: 4000,
// //       })
// //       setShowOtpInput(true) // Reveal the rest of the form
// //     } catch (error) {
// //       const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
// //       setOtpError(errorMessage)
// //     } finally {
// //       setIsSendingOtp(false)
// //     }
// //   }

// //   // Step 2: Verify OTP and submit the complete form (This function remains the same)
// //   const handleVerifyAndSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setOtpError("")

// //     if (!brochureFormData.name || !brochureFormData.email || !otp) {
// //         setOtpError("Please fill in all fields.")
// //         return
// //     }

// //     setIsSubmittingBrochure(true)
// //     try {
// //       const savedOtp = sessionStorage.getItem("brochure_otp")

// //       if (otp === savedOtp) {
// //         const formData = new FormData()
// //         formData.append("name", brochureFormData.name)
// //         formData.append("email", brochureFormData.email)
// //         formData.append("phone", brochureFormData.contactNumber)
// //         formData.append("source", "brochure-download-verified")
// //         formData.append("message", "Brochure download request for luxury 5BHK villas (OTP Verified)")

// //         const response = await fetch("https://formspree.io/f/xblkepgl", {
// //           method: "POST",
// //           body: formData,
// //           headers: {
// //             Accept: "application/json",
// //           },
// //         })

// //         if (response.ok) {
// //           toast({
// //             title: "Success!",
// //             description: "Your brochure is downloading now.",
// //             duration: 4000,
// //           })
// //           downloadBrochure()
// //           setShowBrochureSuccess(true)
// //           setTimeout(() => closeBrochurePopup(), 5000)
// //         } else {
// //           throw new Error("Form submission failed after verification.")
// //         }
// //       } else {
// //         throw new Error("Invalid OTP. Please try again.")
// //       }
// //     } catch (error) {
// //       const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
// //       setOtpError(errorMessage)
// //       toast({
// //         title: "Error",
// //         description: errorMessage,
// //         variant: "destructive",
// //         duration: 4000,
// //       })
// //     } finally {
// //       setIsSubmittingBrochure(false)
// //     }
// //   }

// //   const closeBrochurePopup = () => {
// //     setShowBrochurePopup(false)
// //     setShowBrochureSuccess(false)
// //     setShowOtpInput(false)
// //     setOtp("")
// //     setOtpError("")
// //     setBrochureFormData({ name: "", email: "", contactNumber: "" })
// //     sessionStorage.removeItem("brochure_otp")
// //   }
  
// //   const handleFormSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setIsSubmitting(true)
// //     try {
// //       if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
// //         toast({
// //           title: "Error",
// //           description: "Please fill in all required fields.",
// //           variant: "destructive",
// //           duration: 5000,
// //         })
// //         return
// //       }
// //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// //       if (!emailRegex.test(formData.email)) {
// //         toast({
// //           title: "Error",
// //           description: "Please enter a valid email address.",
// //           variant: "destructive",
// //           duration: 5000,
// //         })
// //         return
// //       }
// //       if (formData.phone.length < 10) {
// //         toast({
// //           title: "Error",
// //           description: "Please enter a valid contact number.",
// //           variant: "destructive",
// //           duration: 5000,
// //         })
// //         return
// //       }
// //       const submitData = new FormData()
// //       submitData.append("name", formData.name)
// //       submitData.append("email", formData.email)
// //       submitData.append("phone", formData.phone)
// //       submitData.append("visitDate", formData.visitDate || "Not specified")
// //       submitData.append("requirements", formData.requirements || "Site visit request")
// //       submitData.append("source", "landing-page")
// //       submitData.append("message", "Site visit booking request for luxury 5BHK villas")

// //       const response = await fetch("https://formspree.io/f/xblkepgl", {
// //         method: "POST",
// //         body: submitData,
// //         headers: {
// //           Accept: "application/json",
// //         },
// //       })
// //       if (response.ok) {
// //         setShowContactSuccess(true)
// //         setFormData({
// //           name: "",
// //           email: "",
// //           phone: "",
// //           visitDate: "",
// //           requirements: "",
// //         })
// //         toast({
// //           title: "Success!",
// //           description: "Your tour request has been submitted successfully. We'll contact you soon!",
// //           duration: 5000,
// //         })
// //         setTimeout(() => {
// //           setShowContactSuccess(false)
// //         }, 5000)
// //       } else {
// //         throw new Error("Form submission failed")
// //       }
// //     } catch (error) {
// //       console.error("Form submission error:", error)
// //       toast({
// //         title: "Error",
// //         description: "Something went wrong. Please try again or call us directly.",
// //         variant: "destructive",
// //         duration: 5000,
// //       })
// //     } finally {
// //       setIsSubmitting(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <Header />
      
// //       {showBrochurePopup && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
// //             <div className="p-8">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h3 className="text-2xl font-bold text-slate-900">Download Brochure</h3>
// //                 <button
// //                   onClick={closeBrochurePopup}
// //                   className="p-2 hover:bg-slate-100 rounded-full transition-colors"
// //                 >
// //                   <X className="h-5 w-5 text-slate-500" />
// //                 </button>
// //               </div>

// //               {showBrochureSuccess ? (
// //                 <div className="text-center space-y-6">
// //                   <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
// //                     <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
// //                     <h4 className="text-2xl font-bold text-green-800 mb-2">Success!</h4>
// //                     <p className="text-green-700 mb-4">Your brochure is downloading now!</p>
// //                     <p className="text-sm text-green-600">
// //                       We'll contact you soon with more details about our luxury 5BHK villas.
// //                     </p>
// //                   </div>
// //                   <div className="text-sm text-slate-500">This popup will close automatically...</div>
// //                 </div>
// //               ) : (
// //                 <div className="space-y-6 mb-8">
// //                   <div className="text-center">
// //                     <h4 className="text-xl font-semibold text-slate-900 mb-2">
// //                       Book a site visit to luxury 5BHK villas
// //                     </h4>
// //                     <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200">
// //                       <p className="text-orange-800 font-medium mb-2">🌟 30 flats get FREE solar power connection</p>
// //                       <p className="text-slate-600 text-sm">Know more</p>
// //                     </div>
// //                   </div>

// //                   <div className="text-center">
// //                     <h5 className="text-lg font-semibold text-slate-900 mb-4">
// //                        {showOtpInput ? `Verify to download` : 'First, enter your contact number'}
// //                     </h5>
                    
// //                     <form onSubmit={showOtpInput ? handleVerifyAndSubmit : handleSendOtp} className="space-y-4">
// //                       <Input
// //                         type="tel"
// //                         name="contactNumber"
// //                         placeholder="Contact Number"
// //                         value={brochureFormData.contactNumber}
// //                         onChange={handleBrochureInputChange}
// //                         required
// //                         disabled={showOtpInput}
// //                         className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                       />
                      
// //                       {showOtpInput && (
// //                         <>
// //                           <Input
// //                             name="name"
// //                             placeholder="Full Name"
// //                             value={brochureFormData.name}
// //                             onChange={handleBrochureInputChange}
// //                             required
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                           <Input
// //                             type="email"
// //                             name="email"
// //                             placeholder="Email Address"
// //                             value={brochureFormData.email}
// //                             onChange={handleBrochureInputChange}
// //                             required
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                           <Input
// //                             type="text"
// //                             name="otp"
// //                             placeholder="Enter 6-Digit OTP"
// //                             value={otp}
// //                             onChange={(e) => setOtp(e.target.value)}
// //                             required
// //                             maxLength={6}
// //                             inputMode="numeric"
// //                             className="h-12 text-center tracking-widest font-bold text-lg border-slate-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
// //                           />
// //                         </>
// //                       )}
                      
// //                       {!showOtpInput ? (
// //                          <Button
// //                           type="submit"
// //                           disabled={isSendingOtp}
// //                           className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
// //                         >
// //                           {isSendingOtp ? (<><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending OTP...</>) : (<><MessageSquareQuote className="h-4 w-4 mr-2" />Proceed</>)}
// //                         </Button>
// //                       ) : (
// //                         <Button
// //                           type="submit"
// //                           disabled={isSubmittingBrochure}
// //                           className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg"
// //                         >
// //                           {isSubmittingBrochure ? (<><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Verifying...</>) : (<><Download className="h-4 w-4 mr-2" /> Verify & Download</>)}
// //                         </Button>
// //                       )}

// //                       {otpError && <p className="text-sm text-red-600 mt-2">{otpError}</p>}
// //                     </form>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* REMAINDER OF YOUR PAGE CODE (UNCHANGED) */}
// //       <section
// //         id="overview"
// //         className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden"
// //       >
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
// //             <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
// //               <div className="space-y-6 sm:space-y-8">
// //                 <div className="flex flex-wrap items-center gap-3 sm:gap-4">
// //                   <Badge className="bg-gradient-to-r from-orange-50 to-red-50 text-orange-800 border border-orange-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
// //                     RERA Approved | Home Loan Assistance | Limited Launch Offer
// //                   </Badge>
// //                   <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
// //                     No Pre-EMI till possession
// //                   </Badge>
// //                 </div>
// //                 <div className="space-y-4 sm:space-y-6">
// //                   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
// //                     5BHK villa's in
// //                     <span className="text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-700">
// //                       sarjapura
// //                     </span>
// //                   </h1>
// //                   <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
// //                 </div>
// //                 <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
// //                   Own a luxurious villa at the price of an apartment in Sarjapur.Save big on electricity and experience lifestyle upgradation with gated community accommodating outstanding amenities.
// //                 </p>
// //                 <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
// //                   {[
// //                     { number: "58", label: "Premium Villas", icon: Home, color: "orange" },
// //                     { number: "3200", label: "Build up Area", icon: Building, color: "blue" },
// //                     { number: "5", label: "BHK Luxury", icon: Award, color: "purple" },
// //                   ].map((stat, index) => (
// //                     <div
// //                       key={index}
// //                       className="group bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 text-center shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
// //                     >
// //                       <div
// //                         className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
// //                       >
// //                         <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-8 lg:w-8 text-${stat.color}-600`} />
// //                       </div>
// //                       <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
// //                         {stat.number}
// //                       </div>
// //                       <div className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="flex flex-col gap-4 pt-4 sm:pt-6">
// //                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
// //                     <Button
// //                       size="lg"
// //                       className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 shadow-2xl rounded-xl sm:rounded-2xl font-semibold group"
// //                     >
// //                       <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
// //                       Call Now - Get Best Price
// //                     </Button>
// //                     <div>
// //                       {!showVideo ? (
// //                         <Button
// //                           size="lg"
// //                           variant="outline"
// //                           onClick={() => setShowVideo(true)}
// //                           className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
// //                         >
// //                           <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
// //                           Watch Virtual Tour
// //                         </Button>
// //                       ) : (
// //                         <video
// //                           src="https://res.cloudinary.com/dsj3kcbf4/video/upload/v1752829080/virtual-tour_esxewp.mp4"
// //                           controls
// //                           autoPlay
// //                           className="w-full max-w-4xl mt-8 rounded-xl shadow-xl"
// //                         />
// //                       )}
// //                     </div>
// //                   </div>
// //                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
// //                     <Button
// //                       onClick={() => setShowBrochurePopup(true)}
// //                       size="lg"
// //                       variant="outline"
// //                       className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[280px]"
// //                     >
// //                       <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
// //                       Download Brochure
// //                     </Button>

// //                     <div>
// //                       {!showSolarVideo ? (
// //                         <Button
// //                           size="lg"
// //                           variant="outline"
// //                           onClick={() => setShowSolarVideo(true)}
// //                           className="border-2 border-red-300 text-red-700 hover:bg-red-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
// //                         >
// //                           <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
// //                           Solar Powered Villas
// //                         </Button>
// //                       ) : (
// //                         <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
// //                           <iframe
// //                             src="https://www.youtube.com/embed/yukBi8X8CAU?autoplay=1&mute=1&loop=1&playlist=yukBi8X8CAU"
// //                             title="Solar Powered Villas"
// //                             frameBorder="0"
// //                             allow="autoplay; encrypted-media"
// //                             allowFullScreen
// //                             className="w-full h-full"
// //                           ></iframe>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                   <div>
// //                     {!showNyraVideo ? (
// //                       <Button
// //                         size="lg"
// //                         variant="outline"
// //                         onClick={() => setShowNyraVideo(true)}
// //                         className="border-2 border-red-300 text-red-700 hover:bg-red-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[610px]"
// //                       >
// //                         <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
// //                         Explore Nyra Sunterra
// //                       </Button>
// //                     ) : (
// //                       <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
// //                         <iframe
// //                           src="https://www.youtube.com/embed/OaUVX9GzMhM?autoplay=1&mute=1&loop=1&playlist=OaUVX9GzMhM"
// //                           title="Nyra Sunterra Video"
// //                           frameBorder="0"
// //                           allow="autoplay; encrypted-media"
// //                           allowFullScreen
// //                           className="w-full h-full"
// //                         ></iframe>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="lg:col-span-5 mt-8 lg:mt-0">
// //               <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl border-0 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl">
// //                 <CardContent className="p-0">
// //                   {showContactSuccess ? (
// //                     <div className="text-center space-y-6">
// //                       <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
// //                         <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
// //                         <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
// //                         <p className="text-green-700 mb-4">Your site visit request has been submitted successfully!</p>
// //                         <p className="text-sm text-green-600">
// //                           Our team will contact you within 24 hours to confirm your visit to our luxury 5BHK villas.
// //                         </p>
// //                       </div>
// //                       <Button
// //                         onClick={() => setShowContactSuccess(false)}
// //                         className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl"
// //                       >
// //                         Submit Another Request
// //                       </Button>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <div className="text-center mb-6">
// //                         <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
// //                           Book a site visit to luxury 5BHK villas
// //                         </h3>
// //                         <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200 mb-4">
// //                           <p className="text-orange-800 font-medium mb-1">
// //                             🌟 30 flats get FREE solar power connection
// //                           </p>
// //                           <p className="text-slate-600 text-sm">Know more</p>
// //                         </div>
// //                         <p className="text-lg font-semibold text-slate-900">Get in touch</p>
// //                       </div>

// //                       <form onSubmit={handleFormSubmit} className="space-y-4">
// //                         <div>
// //                           <Input
// //                             name="name"
// //                             placeholder="Full Name"
// //                             value={formData.name}
// //                             onChange={handleInputChange}
// //                             required
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                         </div>
// //                         <div>
// //                           <Input
// //                             type="email"
// //                             name="email"
// //                             placeholder="Email Address"
// //                             value={formData.email}
// //                             onChange={handleInputChange}
// //                             required
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                         </div>
// //                         <div>
// //                           <Input
// //                             type="tel"
// //                             name="phone"
// //                             placeholder="Contact Number"
// //                             value={formData.phone}
// //                             onChange={handleInputChange}
// //                             required
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                         </div>
// //                         <div>
// //                           <Input
// //                             type="date"
// //                             name="visitDate"
// //                             placeholder="Visit Date"
// //                             value={formData.visitDate}
// //                             onChange={handleInputChange}
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                         </div>
// //                         <div>
// //                           <Input
// //                             name="requirements"
// //                             placeholder="Requirements (Optional)"
// //                             value={formData.requirements}
// //                             onChange={handleInputChange}
// //                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
// //                           />
// //                         </div>
// //                         <Button
// //                           type="submit"
// //                           disabled={isSubmitting}
// //                           className="w-full h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
// //                         >
// //                           {isSubmitting ? (
// //                             <>
// //                               <Loader2 className="h-4 w-4 mr-2 animate-spin" />
// //                               Submitting...
// //                             </>
// //                           ) : (
// //                             <>
// //                               <Calendar className="h-4 w-4 mr-2" />
// //                               Book Site Visit
// //                             </>
// //                           )}
// //                         </Button>
// //                       </form>
// //                     </>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <AboutUsSection />

// //       <section
// //         id="floor-plans"
// //         className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative"
// //       >
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.05),transparent_50%)]"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
// //             <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
// //               Floor Plans
// //             </Badge>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
// //               Thoughtfully{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
// //                 Designed
// //               </span>
// //             </h2>
// //             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
// //             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
// //               Each villa is meticulously planned to maximize space, natural light, and functionality while maintaining
// //               the highest standards of luxury living.
// //             </p>
// //           </div>
// //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
// //             <div className="space-y-6 sm:space-y-8">
// //               <div className="grid grid-cols-2 gap-2 sm:gap-4">
// //                 {[
// //                   { name: "Ground Living + Bedroom", sqft: "1,600", active: 0 },
// //                   { name: "First floor Living + 2 Bedrooms", sqft: "1,400", active: 1 },
// //                   { name: "Third floor Living + Bedroom + Cineplex theatre", sqft: "1,800", active: 1 },
// //                   { name: "Terrace", sqft: "200", active: 2 },
// //                 ].map((plan, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => setActiveFloorPlan(index)}
// //                     className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center transition-all duration-300 ${activeFloorPlan === index
// //                       ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105"
// //                       : "bg-white text-slate-700 hover:bg-slate-50 shadow-lg"
// //                       }`}
// //                   >
// //                     <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</div>
// //                   </button>
// //                 ))}
// //               </div>
// //               <Card className="p-6 sm:p-8 lg:p-10 bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl">
// //                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
// //                   {[
// //                     { icon: Bed, label: "5 Bedrooms", desc: "Master + 3 Guest" },
// //                     { icon: Bath, label: "4 Bathrooms", desc: "Attached + Common" },
// //                     { icon: Square, label: "3,200 Sq.Ft", desc: "Built-up Area" },
// //                     { icon: Car, label: "1 Car Parking", desc: "Covered Parking" },
// //                   ].map((spec, index) => (
// //                     <div key={index} className="text-center">
// //                       <div className="p-3 sm:p-4 bg-orange-50 rounded-2xl mb-3 sm:mb-4 mx-auto w-fit">
// //                         <spec.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
// //                       </div>
// //                       <div className="font-bold text-sm sm:text-base text-slate-900 mb-1">{spec.label}</div>
// //                       <div className="text-xs sm:text-sm text-slate-600">{spec.desc}</div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </Card>
// //               <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-orange-100">
// //                 <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6">Premium Inclusions</h3>
// //                 <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
// //                   {[
// //                     "Italian Marble Flooring",
// //                     "Teak Wood Doors",
// //                     "Modular Kitchen",
// //                     "Premium Fixtures",
// //                     "Solar Water Heater",
// //                     "Smart Home Ready",
// //                   ].map((inclusion, index) => (
// //                     <div key={index} className="flex items-center space-x-3">
// //                       <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
// //                       <span className="text-sm sm:text-base text-slate-700 font-medium">{inclusion}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="relative">
// //               <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
// //                 <img src="/Nyra.jpg" alt="Floor Plan" className="w-full h-full object-contain" />
// //               </div>
// //               <div className="absolute top-4 sm:top-6 -right-0 sm:right-13 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-2xl p-4 sm:p-2 shadow-xl">
// //                 <div className="text-center">
// //                   <a
// //                     href="#schedule-visit"
// //                     className="block text-sm sm:text-lg font-bold text-orange-600 mb-1 sm:mb-2 hover:underline cursor-pointer"
// //                   >
// //                     Schedule Site Visit
// //                   </a>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white relative">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

// //           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
// //             <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
// //               Premium Features
// //             </Badge>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
// //               Crafted for the{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
// //                 Extraordinary
// //               </span>
// //             </h2>
// //             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
// //             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
// //               Every detail has been meticulously designed to create spaces that inspire, comfort, and elevate your daily
// //               living experience to unprecedented heights.
// //             </p>
// //           </div>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-20">
// //             {[
// //               {
// //                 title: "SBI approved project",
// //                 description:
// //                   "This project is officially approved by the State Bank of India, ensuring trust, transparency, and hassle-free home loan processing with faster approvals and attractive interest rates.",
// //                 icon: IndianRupee,
// //               },
// //               {
// //                 title: "Easy Home Loan Approvals",
// //                 description:
// //                   "Get hassle-free approvals with partnered banks and financial institutions, making ownership simple and stress-free.",
// //                 icon: Shield,
// //               },
// //               {
// //                 title: "Prime Location – Sarjapura Growth Corridor",
// //                 description:
// //                   "Located in the rapidly developing Sarjapura corridor with excellent connectivity and high appreciation potential.",
// //                 icon: Star,
// //               },
// //               {
// //                 title: "Gated Community with Modern Amenities",
// //                 description:
// //                   "A secure and well-planned gated community featuring landscaped gardens, jogging tracks, and world-class amenities.",
// //                 icon: TreePine,
// //               },
// //             ].map((highlight, index) => (
// //               <div
// //                 key={index}
// //                 className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500"
// //               >
// //                 <div className="mb-6 sm:mb-8">
// //                   <highlight.icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
// //                 </div>
// //                 <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
// //                   {highlight.title}
// //                 </h3>
// //                 <p className="text-slate-600 font-light leading-relaxed">
// //                   {highlight.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
// //             {[
// //               {
// //                 icon: Award,
// //                 title: "Modern Villa Architecture",
// //                 description:
// //                   "Contemporary villa designs with elegant facades, spacious layouts, and premium exterior finishes for a sophisticated living experience.",
// //                 image: "/Italian.jpeg",
// //                 gradient: "from-purple-500 to-pink-600",
// //                 bgGradient: "from-purple-50 to-pink-50",
// //               },
// //               {
// //                 icon: Star,
// //                 title: "Outdoor Gazebo",
// //                 description:
// //                   "Elegant outdoor gazebo with comfortable seating, perfect for relaxation and enjoying the fresh air.",
// //                 image: "/building5.webp",
// //                 gradient: "from-blue-500 to-indigo-600",
// //                 bgGradient: "from-blue-50 to-indigo-50",
// //               },
// //               {
// //                 icon: Play,
// //                 title: "Private Home Theater",
// //                 description:
// //                   "Dedicated miniplex space accommodating 10+ people with premium acoustics and luxury comfort seating.",
// //                 image: "/HomeTheater.jpeg",
// //                 gradient: "from-red-500 to-pink-600",
// //                 bgGradient: "from-red-50 to-pink-50",
// //               },
// //               {
// //                 icon: TreePine,
// //                 title: "Indoor Swimming Pool",
// //                 description:
// //                   "Luxurious indoor swimming pool with ample space for recreation and relaxation, surrounded by natural light.",
// //                 image: "/building4.webp",
// //                 gradient: "from-green-500 to-emerald-600",
// //                 bgGradient: "from-green-50 to-emerald-50",
// //               },
// //               {
// //                 icon: Shield,
// //                 title: "Gourmet Smart Kitchen",
// //                 description:
// //                   "State-of-the-art kitchen equipped with smart appliances, premium finishes, and intelligent lighting for a seamless culinary experience.",
// //                 image: "/SmartHome.jpeg",
// //                 gradient: "from-slate-500 to-gray-600",
// //                 bgGradient: "from-slate-50 to-gray-50",
// //               },
// //               {
// //                 icon: Sun,
// //                 title: "Designer Rooftop Lounge",
// //                 description:
// //                   "Contemporary rooftop retreat with ambient lighting, pergola shade, and serene seating – perfect for relaxation or intimate gatherings with a sunset view.",
// //                 image: "/Rooftop.jpeg",
// //                 gradient: "from-yellow-500 to-orange-600",
// //                 bgGradient: "from-yellow-50 to-orange-50",
// //               },
// //             ].map((feature, index) => (
// //               <Card
// //                 key={index}
// //                 className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-3"
// //               >
// //                 <div className="aspect-[5/4] overflow-hidden relative">
// //                   <img
// //                     src={feature.image || "/placeholder.svg"}
// //                     alt={feature.title}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                   />
// //                   <div
// //                     className={`absolute inset-0 bg-gradient-to-t ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
// //                   ></div>
// //                 </div>
// //                 <CardContent className="p-6 sm:p-8 lg:p-10">
// //                   <div
// //                     className={`p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 w-fit shadow-lg`}
// //                   >
// //                     <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
// //                   </div>
// //                   <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
// //                     {feature.description}
// //                   </p>
// //                   <Button variant="ghost" className="p-0 text-slate-700 hover:text-slate-900 font-medium group/btn">
// //                     Explore Details
// //                     <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-white relative">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
// //             <Badge className="bg-purple-100 text-purple-800 border border-purple-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
// //               World-Class Amenities
// //             </Badge>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
// //               Resort-Style{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Living</span>
// //             </h2>
// //             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
// //             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
// //               Every amenity has been carefully curated to provide you with a lifestyle that's both luxurious and
// //               convenient, setting new standards for premium living.
// //             </p>
// //           </div>
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
// //             {[
// //               {
// //                 icon: Waves,
// //                 name: "Infinity Pool",
// //                 desc: "Temperature controlled with poolside lounge and cabanas",
// //                 color: "blue",
// //                 bgColor: "blue-50",
// //               },
// //               {
// //                 icon: Dumbbell,
// //                 name: "Premium Gym",
// //                 desc: "State-of-the-art fitness equipment with personal trainers",
// //                 color: "red",
// //                 bgColor: "red-50",
// //               },
// //               {
// //                 icon: Users,
// //                 name: "Grand Banquet",
// //                 desc: "Elegant venue for celebrations and corporate events",
// //                 color: "purple",
// //                 bgColor: "purple-50",
// //               },
// //               {
// //                 icon: TreePine,
// //                 name: "Zen Gardens",
// //                 desc: "Professionally landscaped meditation and yoga spaces",
// //                 color: "green",
// //                 bgColor: "green-50",
// //               },
// //               {
// //                 icon: Star,
// //                 name: "Sports Complex",
// //                 desc: "Multi-sport indoor facilities with professional courts",
// //                 color: "orange",
// //                 bgColor: "orange-50",
// //               },
// //               {
// //                 icon: Building,
// //                 name: "Kids Wonderland",
// //                 desc: "Safe and creative play areas with supervised activities",
// //                 color: "pink",
// //                 bgColor: "pink-50",
// //               },
// //               {
// //                 icon: Award,
// //                 name: "Business Center",
// //                 desc: "Co-working spaces and meeting rooms with high-speed internet",
// //                 color: "indigo",
// //                 bgColor: "indigo-50",
// //               },
// //               {
// //                 icon: Shield,
// //                 name: "24/7 Security",
// //                 desc: "Advanced surveillance systems with trained security personnel",
// //                 color: "slate",
// //                 bgColor: "slate-50",
// //               },
// //             ].map((amenity, index) => (
// //               <Card
// //                 key={index}
// //                 className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:-translate-y-2"
// //               >
// //                 <CardContent className="p-0 text-center">
// //                   <div
// //                     className={`p-4 sm:p-5 lg:p-6 bg-${amenity.bgColor} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 lg:mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
// //                   >
// //                     <amenity.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-${amenity.color}-600`} />
// //                   </div>
// //                   <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-slate-900 tracking-tight">
// //                     {amenity.name}
// //                   </h3>
// //                   <p className="text-slate-600 leading-relaxed font-light text-xs sm:text-sm lg:text-base">
// //                     {amenity.desc}
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <GallerySection />

// //       <FAQSection />

// //       <section id="location" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50 relative">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
// //             <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
// //               Prime Location
// //             </Badge>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
// //               Connected to{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
// //                 Everything
// //               </span>
// //             </h2>
// //             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
// //             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
// //               Strategically positioned with seamless connectivity to Bangalore's key destinations, ensuring convenience
// //               without compromise
// //             </p>
// //           </div>
// //           <div className="mb-16 sm:mb-20 lg:mb-24">
// //             <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
// //               <div className="aspect-video sm:aspect-[21/9] bg-gradient-to-br from-orange-100 via-white to-red-100 relative">
// //                 <iframe
// //                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7395.70200170143!2d77.778238!3d12.821171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73582de78713%3A0x3081835771771805!2sNyra%20Sunterra!5e1!3m2!1sen!2sin!4v1751714705778!5m2!1sen!2sin"
// //                   width="100%"
// //                   height="100%"
// //                   style={{ border: 0 }}
// //                   allowFullScreen
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                   className="rounded-2xl sm:rounded-3xl"
// //                 ></iframe>
// //               </div>
// //             </Card>
// //           </div>
// //           <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
// //             <div className="space-y-8 sm:space-y-10">
// //               {[
// //                 {
// //                   category: "Education Hub",
// //                   icon: Building,
// //                   color: "blue",
// //                   bgColor: "blue-50",
// //                   places: [
// //                     { name: "GEAR Innovative International School", time: "5 mins", rating: "★★★★★" },
// //                     { name: "Indus International School", time: "6 mins", rating: "★★★★★" },
// //                     { name: "Azim Premji University", time: "10 mins", rating: "★★★★★" },
// //                   ],
// //                 },
// //                 {
// //                   category: "IT Corridor",
// //                   icon: Building,
// //                   color: "purple",
// //                   bgColor: "purple-50",
// //                   places: [
// //                     { name: "Upcoming Infosys Campus", time: "10 mins", rating: "★★★★★" },
// //                     { name: "Wipro Kodathi", time: "30 mins", rating: "★★★★★" },
// //                     { name: "Electronic City", time: "30 mins", rating: "★★★★★" },
// //                   ],
// //                 },
// //                 {
// //                   category: "Healthcare",
// //                   icon: Building,
// //                   color: "red",
// //                   bgColor: "red-50",
// //                   places: [
// //                     { name: "Oxford Hospital", time: "15 mins", rating: "★★★★★" },
// //                     { name: "Narayana Hrudayalaya", time: "20 mins", rating: "★★★★★" },
// //                     { name: "Manipal Hospital", time: "45 mins", rating: "★★★★★" },
// //                   ],
// //                 },
// //               ].map((category, index) => (
// //                 <Card
// //                   key={index}
// //                   className="p-6 sm:p-8 lg:p-10 border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl"
// //                 >
// //                   <div className="flex items-center mb-6 sm:mb-8">
// //                     <div
// //                       className={`p-3 sm:p-4 bg-${category.bgColor} rounded-xl sm:rounded-2xl mr-4 sm:mr-6 shadow-lg`}
// //                     >
// //                       <category.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${category.color}-600`} />
// //                     </div>
// //                     <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{category.category}</h3>
// //                   </div>
// //                   <div className="space-y-3 sm:space-y-4">
// //                     {category.places.map((place, placeIndex) => (
// //                       <div
// //                         key={placeIndex}
// //                         className="flex justify-between items-center py-3 sm:py-4 border-b border-slate-100 last:border-b-0"
// //                       >
// //                         <div>
// //                           <span className="text-slate-800 font-medium text-sm sm:text-base">{place.name}</span>
// //                           <div className="text-xs sm:text-sm text-slate-500 mt-1">{place.rating}</div>
// //                         </div>
// //                         <Badge
// //                           className={`bg-${category.color}-100 text-${category.color}-800 border-${category.color}-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm`}
// //                         >
// //                           <Clock className="h-3 w-3 mr-1" />
// //                           {place.time}
// //                         </Badge>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </Card>
// //               ))}
// //             </div>
// //             <div className="relative">
// //               <div className="aspect-square bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
// //                 <img
// //                   src="/building1.webp?height=600&width=600"
// //                   alt="Location Highlights"
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
// //                 <div className="text-center">
// //                   <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">15</div>
// //                   <div className="text-sm text-slate-600 font-medium">Min to Metro</div>
// //                   <div className="flex items-center justify-center mt-3">
// //                     <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
// //                     <span className="text-xs text-slate-500">Upcoming</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
// //               <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
// //             <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
// //               Get In Touch
// //             </Badge>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
// //               Your Dream Home{" "}
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Awaits</span>
// //             </h2>
// //             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
// //             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
// //               Schedule a personalized site visit and experience luxury living firsthand with our expert consultants
// //             </p>
// //           </div>
// //           <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
// //             <div className="space-y-8 sm:space-y-10 lg:space-y-12">
// //               <div className="space-y-8 sm:space-y-10">
// //                 {[
// //                   {
// //                     icon: Phone,
// //                     title: "Call Us",
// //                     subtitle: "Speak with our luxury home consultants",
// //                     details: ["+91 7760 777 992", "+91 7090 407 090"],
// //                     color: "orange",
// //                     bgColor: "orange-50",
// //                   },
// //                   {
// //                     icon: Mail,
// //                     title: "Email",
// //                     subtitle: "Get detailed information and brochures",
// //                     details: ["info@nyrasunterra.in", "sales@nyrasunterra.com"],
// //                     color: "blue",
// //                     bgColor: "blue-50",
// //                   },
// //                   {
// //                     icon: MapPin,
// //                     title: "Visit Us",
// //                     subtitle: "Experience center and model villa",
// //                     details: [
// //                       "BEML Cooperative Society Layout",
// //                       "S.Medihalli, Sarjapur-Attibele Road",
// //                       "Bengaluru - 562125",
// //                     ],
// //                     color: "purple",
// //                     bgColor: "purple-50",
// //                   },
// //                 ].map((contact, index) => (
// //                   <div key={index} className="flex items-start space-x-4 sm:space-x-6">
// //                     <div
// //                       className={`p-4 sm:p-5 bg-${contact.bgColor} rounded-2xl sm:rounded-3xl shadow-lg flex-shrink-0`}
// //                     >
// //                       <contact.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${contact.color}-600`} />
// //                     </div>
// //                     <div className="flex-1">
// //                       <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-900 tracking-tight">
// //                         {contact.title}
// //                       </h3>
// //                       <p className="text-slate-500 mb-3 sm:mb-4 font-medium text-sm sm:text-base">{contact.subtitle}</p>
// //                       {contact.details.map((detail, detailIndex) => (
// //                         <p
// //                           key={detailIndex}
// //                           className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base"
// //                         >
// //                           {detail}
// //                         </p>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
// //                 <div className="text-center">
// //                   <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900">RERA Registration</h3>
// //                   <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-orange-100">
// //                     <p className="font-mono text-xs sm:text-sm text-slate-700 font-medium break-all">
// //                       PRM/KA/RERA/1251/308/PR110124/007750
// //                     </p>
// //                   </div>
// //                   <p className="text-xs sm:text-sm text-slate-600 mt-3 sm:mt-4">
// //                     Fully compliant and government approved project
// //                   </p>
// //                 </div>
// //               </Card>
// //             </div>
// //             <Card className="p-6 sm:p-8 lg:p-12 shadow-2xl border-0 bg-white rounded-2xl sm:rounded-3xl">
// //               <CardContent className="p-0">
// //                 <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight">
// //                   Schedule Your Private Tour
// //                 </h3>
// //                 <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Name</label>
// //                     <Input
// //                       name="name"
// //                       value={formData.name}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Email Address</label>
// //                     <Input
// //                       type="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Phone Number</label>
// //                     <Input
// //                       type="tel"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleInputChange}
// //                       required
// //                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
// //                       Preferred Visit Date
// //                     </label>
// //                     <Input
// //                       type="date"
// //                       name="visitDate"
// //                       value={formData.visitDate}
// //                       onChange={handleInputChange}
// //                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
// //                       Special Requirements (Optional)
// //                     </label>
// //                     <Textarea
// //                       rows={4}
// //                       name="requirements"
// //                       value={formData.requirements}
// //                       onChange={handleInputChange}
// //                       className="border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg resize-none"
// //                       placeholder="Any specific areas you'd like to focus on during the visit..."
// //                     />
// //                   </div>
// //                   <Button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className="w-full h-14 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl disabled:opacity-50"
// //                   >
// //                     {isSubmitting ? (
// //                       <>
// //                         <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-spin" />
// //                         Submitting...
// //                       </>
// //                     ) : (
// //                       <>
// //                         <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
// //                         Schedule My Private Tour
// //                       </>
// //                     )}
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </div>
// //         </div>
// //       </section>
// //       <section>
// //         <ContactForm />
// //       </section>

// //       <Footer />
// //       <WhatsAppChat />
// //     </div>
// //   )
// // }

// "use client"
// import { Button } from "@/components/ui/button"
// import type React from "react"
// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { useToast } from "@/hooks/use-toast"
// import {
//   Phone,
//   Play,
//   Sun,
//   Home,
//   Award,
//   TreePine,
//   Star,
//   Shield,
//   Waves,
//   Dumbbell,
//   Users,
//   Building,
//   MapPin,
//   Mail,
//   Calendar,
//   ChevronRight,
//   Clock,
//   CheckCircle2,
//   Bed,
//   Bath,
//   Square,
//   Car,
//   Download,
//   Loader2,
//   X,
//   IndianRupee,
//   MessageSquareQuote,
// } from "lucide-react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import AboutUsSection from "@/components/aboutus"
// import GallerySection from "./gallery-section"
// import FAQSection from "./faq-section"
// import ContactForm from "@/components/ContactForm"
// import WhatsAppChat from "@/components/WhatsAppChat"
// // import EnhancedPricingSection from "./enhanced-pricing"

// const downloadBrochure = () => {
//   const link = document.createElement("a")
//   link.href = "/nyra-sunterra-brochure-1.pdf"
//   link.download = "NYRA-SUNTERRA-Brochure-1.pdf"
//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)
// }

// export default function LandingPage() {
//   const [showVideo, setShowVideo] = useState(false)
//   const [activeFloorPlan, setActiveFloorPlan] = useState(0)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showBrochurePopup, setShowBrochurePopup] = useState(false)
//   const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false)
//   const [showBrochureSuccess, setShowBrochureSuccess] = useState(false)
//   const [showContactSuccess, setShowContactSuccess] = useState(false)
//   const [showSolarVideo, setShowSolarVideo] = useState(false)
//   const { toast } = useToast()

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     visitDate: "",
//     requirements: "",
//   })

//   const [brochureFormData, setBrochureFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//   })

//   // --- States for Brochure OTP Flow ---
//   const [otp, setOtp] = useState("")
//   const [showOtpInput, setShowOtpInput] = useState(false)
//   const [isSendingOtp, setIsSendingOtp] = useState(false)
//   const [otpError, setOtpError] = useState("")

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleBrochureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setBrochureFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   // FIXED: Step 1 - Call your OWN backend API route
//   const handleSendOtp = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setOtpError("")

//     if (brochureFormData.contactNumber.length < 10) {
//       setOtpError("Please enter a valid 10-digit contact number.")
//       return
//     }

//     setIsSendingOtp(true)
//     try {
//       const response = await fetch("/api/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ contactNumber: brochureFormData.contactNumber }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to send OTP.")
//       }

//       // Store the OTP that the backend generated and sent back
//       sessionStorage.setItem("brochure_otp", data.otp)

//       toast({
//         title: "OTP Sent!",
//         description: "Please enter the OTP sent to your mobile number.",
//         duration: 4000,
//       })
//       setShowOtpInput(true) // Reveal the rest of the form
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
//       setOtpError(errorMessage)
//     } finally {
//       setIsSendingOtp(false)
//     }
//   }

//   // Step 2: Verify OTP and submit the complete form (This function remains the same)
//   const handleVerifyAndSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setOtpError("")

//     if (!brochureFormData.name || !brochureFormData.email || !otp) {
//       setOtpError("Please fill in all fields.")
//       return
//     }

//     setIsSubmittingBrochure(true)
//     try {
//       const savedOtp = sessionStorage.getItem("brochure_otp")

//       if (otp === savedOtp) {
//         const formData = new FormData()
//         formData.append("name", brochureFormData.name)
//         formData.append("email", brochureFormData.email)
//         formData.append("phone", brochureFormData.contactNumber)
//         formData.append("source", "brochure-download-verified")
//         formData.append("message", "Brochure download request for luxury 5BHK villas (OTP Verified)")

//         const response = await fetch("https://formspree.io/f/xblkepgl", {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         })

//         if (response.ok) {
//           toast({
//             title: "Success!",
//             description: "Your brochure is downloading now.",
//             duration: 4000,
//           })
//           downloadBrochure()
//           setShowBrochureSuccess(true)
//           setTimeout(() => closeBrochurePopup(), 5000)
//         } else {
//           throw new Error("Form submission failed after verification.")
//         }
//       } else {
//         throw new Error("Invalid OTP. Please try again.")
//       }
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
//       setOtpError(errorMessage)
//       toast({
//         title: "Error",
//         description: errorMessage,
//         variant: "destructive",
//         duration: 4000,
//       })
//     } finally {
//       setIsSubmittingBrochure(false)
//     }
//   }

//   const closeBrochurePopup = () => {
//     setShowBrochurePopup(false)
//     setShowBrochureSuccess(false)
//     setShowOtpInput(false)
//     setOtp("")
//     setOtpError("")
//     setBrochureFormData({ name: "", email: "", contactNumber: "" })
//     sessionStorage.removeItem("brochure_otp")
//   }

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     try {
//       if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
//         toast({
//           title: "Error",
//           description: "Please fill in all required fields.",
//           variant: "destructive",
//           duration: 5000,
//         })
//         return
//       }
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//       if (!emailRegex.test(formData.email)) {
//         toast({
//           title: "Error",
//           description: "Please enter a valid email address.",
//           variant: "destructive",
//           duration: 5000,
//         })
//         return
//       }
//       if (formData.phone.length < 10) {
//         toast({
//           title: "Error",
//           description: "Please enter a valid contact number.",
//           variant: "destructive",
//           duration: 5000,
//         })
//         return
//       }
//       const submitData = new FormData()
//       submitData.append("name", formData.name)
//       submitData.append("email", formData.email)
//       submitData.append("phone", formData.phone)
//       submitData.append("visitDate", formData.visitDate || "Not specified")
//       submitData.append("requirements", formData.requirements || "Site visit request")
//       submitData.append("source", "landing-page")
//       submitData.append("message", "Site visit booking request for luxury 5BHK villas")

//       const response = await fetch("https://formspree.io/f/xblkepgl", {
//         method: "POST",
//         body: submitData,
//         headers: {
//           Accept: "application/json",
//         },
//       })
//       if (response.ok) {
//         setShowContactSuccess(true)
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           visitDate: "",
//           requirements: "",
//         })
//         toast({
//           title: "Success!",
//           description: "Your tour request has been submitted successfully. We'll contact you soon!",
//           duration: 5000,
//         })
//         setTimeout(() => {
//           setShowContactSuccess(false)
//         }, 5000)
//       } else {
//         throw new Error("Form submission failed")
//       }
//     } catch (error) {
//       console.error("Form submission error:", error)
//       toast({
//         title: "Error",
//         description: "Something went wrong. Please try again or call us directly.",
//         variant: "destructive",
//         duration: 5000,
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {showBrochurePopup && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-8">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-2xl font-bold text-slate-900">Download Brochure</h3>
//                 <button
//                   onClick={closeBrochurePopup}
//                   className="p-2 hover:bg-slate-100 rounded-full transition-colors"
//                 >
//                   <X className="h-5 w-5 text-slate-500" />
//                 </button>
//               </div>

//               {showBrochureSuccess ? (
//                 <div className="text-center space-y-6">
//                   <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
//                     <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
//                     <h4 className="text-2xl font-bold text-green-800 mb-2">Success!</h4>
//                     <p className="text-green-700 mb-4">Your brochure is downloading now!</p>
//                     <p className="text-sm text-green-600">
//                       We'll contact you soon with more details about our luxury 5BHK villas.
//                     </p>
//                   </div>
//                   <div className="text-sm text-slate-500">This popup will close automatically...</div>
//                 </div>
//               ) : (
//                 <div className="space-y-6 mb-8">
//                   <div className="text-center">
//                     <h4 className="text-xl font-semibold text-slate-900 mb-2">
//                       Book a site visit to luxury 5BHK villas
//                     </h4>
//                     <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200">
//                       <p className="text-orange-800 font-medium mb-2">🌟 30 flats get FREE solar power connection</p>
//                       <p className="text-slate-600 text-sm">Know more</p>
//                     </div>
//                   </div>

//                   <div className="text-center">
//                     <h5 className="text-lg font-semibold text-slate-900 mb-4">
//                       {showOtpInput ? `Verify to download` : "First, enter your contact number"}
//                     </h5>

//                     <form onSubmit={showOtpInput ? handleVerifyAndSubmit : handleSendOtp} className="space-y-4">
//                       <Input
//                         type="tel"
//                         name="contactNumber"
//                         placeholder="Contact Number"
//                         value={brochureFormData.contactNumber}
//                         onChange={handleBrochureInputChange}
//                         required
//                         disabled={showOtpInput}
//                         className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                       />

//                       {showOtpInput && (
//                         <>
//                           <Input
//                             name="name"
//                             placeholder="Full Name"
//                             value={brochureFormData.name}
//                             onChange={handleBrochureInputChange}
//                             required
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                           <Input
//                             type="email"
//                             name="email"
//                             placeholder="Email Address"
//                             value={brochureFormData.email}
//                             onChange={handleBrochureInputChange}
//                             required
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                           <Input
//                             type="text"
//                             name="otp"
//                             placeholder="Enter 6-Digit OTP"
//                             value={otp}
//                             onChange={(e) => setOtp(e.target.value)}
//                             required
//                             maxLength={6}
//                             inputMode="numeric"
//                             className="h-12 text-center tracking-widest font-bold text-lg border-slate-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
//                           />
//                         </>
//                       )}

//                       {!showOtpInput ? (
//                         <Button
//                           type="submit"
//                           disabled={isSendingOtp}
//                           className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
//                         >
//                           {isSendingOtp ? (
//                             <>
//                               <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending OTP...
//                             </>
//                           ) : (
//                             <>
//                               <MessageSquareQuote className="h-4 w-4 mr-2" />
//                               Proceed
//                             </>
//                           )}
//                         </Button>
//                       ) : (
//                         <Button
//                           type="submit"
//                           disabled={isSubmittingBrochure}
//                           className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg"
//                         >
//                           {isSubmittingBrochure ? (
//                             <>
//                               <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Verifying...
//                             </>
//                           ) : (
//                             <>
//                               <Download className="h-4 w-4 mr-2" /> Verify & Download
//                             </>
//                           )}
//                         </Button>
//                       )}

//                       {otpError && <p className="text-sm text-red-600 mt-2">{otpError}</p>}
//                     </form>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* REMAINDER OF YOUR PAGE CODE (UNCHANGED) */}
//       <section
//         id="overview"
//         className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
//             <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
//               <div className="space-y-6 sm:space-y-8">
//                 <div className="flex flex-wrap items-center gap-3 sm:gap-4">
//                   <Badge className="bg-gradient-to-r from-orange-50 to-red-50 text-orange-800 border border-orange-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
//                     RERA Approved | Home Loan Assistance | Limited Launch Offer
//                   </Badge>
//                   <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
//                     No Pre-EMI till possession
//                   </Badge>
//                 </div>
//                 <div className="space-y-4 sm:space-y-6">
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
//                     5BHK villa's in
//                     <span className="text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-700">
//                       sarjapura
//                     </span>
//                   </h1>
//                   <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
//                 </div>
//                 <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
//                   Own a luxurious villa at the price of an apartment in Sarjapur.Save big on electricity and experience
//                   lifestyle upgradation with gated community accommodating outstanding amenities.
//                 </p>
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
//                   {[
//                     { number: "58", label: "Premium Villas", icon: Home, color: "orange" },
//                     { number: "3200", label: "Build up Area", icon: Building, color: "blue" },
//                     { number: "5", label: "BHK Luxury", icon: Award, color: "purple" },
//                   ].map((stat, index) => (
//                     <div
//                       key={index}
//                       className="group bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 text-center shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
//                     >
//                       <div
//                         className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
//                       >
//                         <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-8 lg:w-8 text-${stat.color}-600`} />
//                       </div>
//                       <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
//                         {stat.number}
//                       </div>
//                       <div className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col gap-4 pt-4 sm:pt-6">
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <Button
//                       size="lg"
//                       className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 shadow-2xl rounded-xl sm:rounded-2xl font-semibold group"
//                     >
//                       <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
//                       Call Now - Get Best Price
//                     </Button>
//                     <div>
//                       {!showVideo ? (
//                         <Button
//                           size="lg"
//                           variant="outline"
//                           onClick={() => setShowVideo(true)}
//                           className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
//                         >
//                           <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
//                           Watch Virtual Tour
//                         </Button>
//                       ) : (
//                         <video
//                           src="https://res.cloudinary.com/dsj3kcbf4/video/upload/v1752829080/virtual-tour_esxewp.mp4"
//                           controls
//                           autoPlay
//                           className="w-full max-w-4xl mt-8 rounded-xl shadow-xl"
//                         />
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//                     <Button
//                       onClick={() => setShowBrochurePopup(true)}
//                       size="lg"
//                       variant="outline"
//                       className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[280px]"
//                     >
//                       <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
//                       Download Brochure
//                     </Button>

//                     <div>
//                       {!showSolarVideo ? (
//                         <Button
//                           size="lg"
//                           variant="outline"
//                           onClick={() => setShowSolarVideo(true)}
//                           className="border-2 border-red-300 text-red-700 hover:bg-red-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
//                         >
//                           <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
//                           Solar Powered Villas
//                         </Button>
//                       ) : (
//                         <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
//                           <iframe
//                             src="https://www.youtube.com/embed/yukBi8X8CAU?autoplay=1&mute=1&loop=1&playlist=yukBi8X8CAU"
//                             title="Solar Powered Villas"
//                             frameBorder="0"
//                             allow="autoplay; encrypted-media"
//                             allowFullScreen
//                             className="w-full h-full"
//                           ></iframe>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   {/* <div className="w-full sm:w-[610px] rounded-xl overflow-hidden shadow-xl aspect-video"> */}
//                   <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
//                     <iframe
//                       src="https://www.youtube.com/embed/OaUVX9GzMhM?autoplay=1&mute=1&loop=1&playlist=OaUVX9GzMhM&controls=0"
//                       title="Nyra Sunterra Video"
//                       frameBorder="0"
//                       allow="autoplay; encrypted-media"
//                       allowFullScreen
//                       className="w-full h-full"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:col-span-5 mt-8 lg:mt-0">
//               <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl border-0 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl">
//                 <CardContent className="p-0">
//                   {showContactSuccess ? (
//                     <div className="text-center space-y-6">
//                       <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
//                         <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
//                         <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
//                         <p className="text-green-700 mb-4">
//                           Your site visit request has been submitted successfully!
//                         </p>
//                         <p className="text-sm text-green-600">
//                           Our team will contact you within 24 hours to confirm your visit to our luxury 5BHK villas.
//                         </p>
//                       </div>
//                       <Button
//                         onClick={() => setShowContactSuccess(false)}
//                         className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl"
//                       >
//                         Submit Another Request
//                       </Button>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="text-center mb-6">
//                         <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
//                           Book a site visit to luxury 5BHK villas
//                         </h3>
//                         <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200 mb-4">
//                           <p className="text-orange-800 font-medium mb-1">
//                             🌟 30 flats get FREE solar power connection
//                           </p>
//                           <p className="text-slate-600 text-sm">Know more</p>
//                         </div>
//                         <p className="text-lg font-semibold text-slate-900">Get in touch</p>
//                       </div>

//                       <form onSubmit={handleFormSubmit} className="space-y-4">
//                         <div>
//                           <Input
//                             name="name"
//                             placeholder="Full Name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                         </div>
//                         <div>
//                           <Input
//                             type="email"
//                             name="email"
//                             placeholder="Email Address"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                         </div>
//                         <div>
//                           <Input
//                             type="tel"
//                             name="phone"
//                             placeholder="Contact Number"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             required
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                         </div>
//                         <div>
//                           <Input
//                             type="date"
//                             name="visitDate"
//                             placeholder="Visit Date"
//                             value={formData.visitDate}
//                             onChange={handleInputChange}
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                         </div>
//                         <div>
//                           <Input
//                             name="requirements"
//                             placeholder="Requirements (Optional)"
//                             value={formData.requirements}
//                             onChange={handleInputChange}
//                             className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
//                           />
//                         </div>
//                         <Button
//                           type="submit"
//                           disabled={isSubmitting}
//                           className="w-full h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
//                         >
//                           {isSubmitting ? (
//                             <>
//                               <Loader2 className="h-4 w-4 mr-2 animate-spin" />
//                               Submitting...
//                             </>
//                           ) : (
//                             <>
//                               <Calendar className="h-4 w-4 mr-2" />
//                               Book Site Visit
//                             </>
//                           )}
//                         </Button>
//                       </form>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <AboutUsSection />

//       <section
//         id="floor-plans"
//         className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative"
//       >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.05),transparent_50%)]"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//               Floor Plans
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//               Thoughtfully{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
//                 Designed
//               </span>
//             </h2>
//             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
//               Each villa is meticulously planned to maximize space, natural light, and functionality while maintaining
//               the highest standards of luxury living.
//             </p>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div className="space-y-6 sm:space-y-8">
//               <div className="grid grid-cols-2 gap-2 sm:gap-4">
//                 {[
//                   { name: "Ground Living + Bedroom", sqft: "1,600", active: 0 },
//                   { name: "First floor Living + 2 Bedrooms", sqft: "1,400", active: 1 },
//                   { name: "Third floor Living + Bedroom + Cineplex theatre", sqft: "1,800", active: 1 },
//                   { name: "Terrace", sqft: "200", active: 2 },
//                 ].map((plan, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFloorPlan(index)}
//                     className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center transition-all duration-300 ${
//                       activeFloorPlan === index
//                         ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105"
//                         : "bg-white text-slate-700 hover:bg-slate-50 shadow-lg"
//                     }`}
//                   >
//                     <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</div>
//                   </button>
//                 ))}
//               </div>
//               <Card className="p-6 sm:p-8 lg:p-10 bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl">
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//                   {[
//                     { icon: Bed, label: "5 Bedrooms", desc: "Master + 3 Guest" },
//                     { icon: Bath, label: "4 Bathrooms", desc: "Attached + Common" },
//                     { icon: Square, label: "3,200 Sq.Ft", desc: "Built-up Area" },
//                     { icon: Car, label: "1 Car Parking", desc: "Covered Parking" },
//                   ].map((spec, index) => (
//                     <div key={index} className="text-center">
//                       <div className="p-3 sm:p-4 bg-orange-50 rounded-2xl mb-3 sm:mb-4 mx-auto w-fit">
//                         <spec.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
//                       </div>
//                       <div className="font-bold text-sm sm:text-base text-slate-900 mb-1">{spec.label}</div>
//                       <div className="text-xs sm:text-sm text-slate-600">{spec.desc}</div>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//               <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-orange-100">
//                 <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6">Premium Inclusions</h3>
//                 <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
//                   {[
//                     "Italian Marble Flooring",
//                     "Teak Wood Doors",
//                     "Modular Kitchen",
//                     "Premium Fixtures",
//                     "Solar Water Heater",
//                     "Smart Home Ready",
//                   ].map((inclusion, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
//                       <span className="text-sm sm:text-base text-slate-700 font-medium">{inclusion}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
//                 <img src="/Nyra.jpg" alt="Floor Plan" className="w-full h-full object-contain" />
//               </div>
//               <div className="absolute top-4 sm:top-6 -right-0 sm:right-13 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-2xl p-4 sm:p-2 shadow-xl">
//                 <div className="text-center">
//                   <a
//                     href="#schedule-visit"
//                     className="block text-sm sm:text-lg font-bold text-orange-600 mb-1 sm:mb-2 hover:underline cursor-pointer"
//                   >
//                     Schedule Site Visit
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white relative">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//               Premium Features
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//               Crafted for the{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
//                 Extraordinary
//               </span>
//             </h2>
//             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
//               Every detail has been meticulously designed to create spaces that inspire, comfort, and elevate your daily
//               living experience to unprecedented heights.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-20">
//             {[
//               {
//                 title: "SBI approved project",
//                 description:
//                   "This project is officially approved by the State Bank of India, ensuring trust, transparency, and hassle-free home loan processing with faster approvals and attractive interest rates.",
//                 icon: IndianRupee,
//               },
//               {
//                 title: "Easy Home Loan Approvals",
//                 description:
//                   "Get hassle-free approvals with partnered banks and financial institutions, making ownership simple and stress-free.",
//                 icon: Shield,
//               },
//               {
//                 title: "Prime Location – Sarjapura Growth Corridor",
//                 description:
//                   "Located in the rapidly developing Sarjapura corridor with excellent connectivity and high appreciation potential.",
//                 icon: Star,
//               },
//               {
//                 title: "Gated Community with Modern Amenities",
//                 description:
//                   "A secure and well-planned gated community featuring landscaped gardens, jogging tracks, and world-class amenities.",
//                 icon: TreePine,
//               },
//             ].map((highlight, index) => (
//               <div
//                 key={index}
//                 className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500"
//               >
//                 <div className="mb-6 sm:mb-8">
//                   <highlight.icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">{highlight.title}</h3>
//                 <p className="text-slate-600 font-light leading-relaxed">{highlight.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
//             {[
//               {
//                 icon: Award,
//                 title: "Modern Villa Architecture",
//                 description:
//                   "Contemporary villa designs with elegant facades, spacious layouts, and premium exterior finishes for a sophisticated living experience.",
//                 image: "/Italian.jpeg",
//                 gradient: "from-purple-500 to-pink-600",
//                 bgGradient: "from-purple-50 to-pink-50",
//               },
//               {
//                 icon: Star,
//                 title: "Outdoor Gazebo",
//                 description:
//                   "Elegant outdoor gazebo with comfortable seating, perfect for relaxation and enjoying the fresh air.",
//                 image: "/building5.webp",
//                 gradient: "from-blue-500 to-indigo-600",
//                 bgGradient: "from-blue-50 to-indigo-50",
//               },
//               {
//                 icon: Play,
//                 title: "Private Home Theater",
//                 description:
//                   "Dedicated miniplex space accommodating 10+ people with premium acoustics and luxury comfort seating.",
//                 image: "/HomeTheater.jpeg",
//                 gradient: "from-red-500 to-pink-600",
//                 bgGradient: "from-red-50 to-pink-50",
//               },
//               {
//                 icon: TreePine,
//                 title: "Indoor Swimming Pool",
//                 description:
//                   "Luxurious indoor swimming pool with ample space for recreation and relaxation, surrounded by natural light.",
//                 image: "/building4.webp",
//                 gradient: "from-green-500 to-emerald-600",
//                 bgGradient: "from-green-50 to-emerald-50",
//               },
//               {
//                 icon: Shield,
//                 title: "Gourmet Smart Kitchen",
//                 description:
//                   "State-of-the-art kitchen equipped with smart appliances, premium finishes, and intelligent lighting for a seamless culinary experience.",
//                 image: "/SmartHome.jpeg",
//                 gradient: "from-slate-500 to-gray-600",
//                 bgGradient: "from-slate-50 to-gray-50",
//               },
//               {
//                 icon: Sun,
//                 title: "Designer Rooftop Lounge",
//                 description:
//                   "Contemporary rooftop retreat with ambient lighting, pergola shade, and serene seating – perfect for relaxation or intimate gatherings with a sunset view.",
//                 image: "/Rooftop.jpeg",
//                 gradient: "from-yellow-500 to-orange-600",
//                 bgGradient: "from-yellow-50 to-orange-50",
//               },
//             ].map((feature, index) => (
//               <Card
//                 key={index}
//                 className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-3"
//               >
//                 <div className="aspect-[5/4] overflow-hidden relative">
//                   <img
//                     src={feature.image || "/placeholder.svg"}
//                     alt={feature.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
//                   ></div>
//                 </div>
//                 <CardContent className="p-6 sm:p-8 lg:p-10">
//                   <div
//                     className={`p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 w-fit shadow-lg`}
//                   >
//                     <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
//                   </div>
//                   <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
//                     {feature.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
//                     {feature.description}
//                   </p>
//                   <Button variant="ghost" className="p-0 text-slate-700 hover:text-slate-900 font-medium group/btn">
//                     Explore Details
//                     <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-white relative">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <Badge className="bg-purple-100 text-purple-800 border border-purple-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//               World-Class Amenities
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//               Resort-Style{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Living</span>
//             </h2>
//             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
//               Every amenity has been carefully curated to provide you with a lifestyle that's both luxurious and
//               convenient, setting new standards for premium living.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//             {[
//               {
//                 icon: Waves,
//                 name: "Infinity Pool",
//                 desc: "Temperature controlled with poolside lounge and cabanas",
//                 color: "blue",
//                 bgColor: "blue-50",
//               },
//               {
//                 icon: Dumbbell,
//                 name: "Premium Gym",
//                 desc: "State-of-the-art fitness equipment with personal trainers",
//                 color: "red",
//                 bgColor: "red-50",
//               },
//               {
//                 icon: Users,
//                 name: "Grand Banquet",
//                 desc: "Elegant venue for celebrations and corporate events",
//                 color: "purple",
//                 bgColor: "purple-50",
//               },
//               {
//                 icon: TreePine,
//                 name: "Zen Gardens",
//                 desc: "Professionally landscaped meditation and yoga spaces",
//                 color: "green",
//                 bgColor: "green-50",
//               },
//               {
//                 icon: Star,
//                 name: "Sports Complex",
//                 desc: "Multi-sport indoor facilities with professional courts",
//                 color: "orange",
//                 bgColor: "orange-50",
//               },
//               {
//                 icon: Building,
//                 name: "Kids Wonderland",
//                 desc: "Safe and creative play areas with supervised activities",
//                 color: "pink",
//                 bgColor: "pink-50",
//               },
//               {
//                 icon: Award,
//                 name: "Business Center",
//                 desc: "Co-working spaces and meeting rooms with high-speed internet",
//                 color: "indigo",
//                 bgColor: "indigo-50",
//               },
//               {
//                 icon: Shield,
//                 name: "24/7 Security",
//                 desc: "Advanced surveillance systems with trained security personnel",
//                 color: "slate",
//                 bgColor: "slate-50",
//               },
//             ].map((amenity, index) => (
//               <Card
//                 key={index}
//                 className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:-translate-y-2"
//               >
//                 <CardContent className="p-0 text-center">
//                   <div
//                     className={`p-4 sm:p-5 lg:p-6 bg-${amenity.bgColor} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 lg:mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                   >
//                     <amenity.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-${amenity.color}-600`} />
//                   </div>
//                   <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-slate-900 tracking-tight">
//                     {amenity.name}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed font-light text-xs sm:text-sm lg:text-base">
//                     {amenity.desc}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <GallerySection />

//       <FAQSection />

//       <section id="location" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//               Prime Location
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//               Connected to{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
//                 Everything
//               </span>
//             </h2>
//             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
//               Strategically positioned with seamless connectivity to Bangalore's key destinations, ensuring convenience
//               without compromise
//             </p>
//           </div>
//           <div className="mb-16 sm:mb-20 lg:mb-24">
//             <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
//               <div className="aspect-video sm:aspect-[21/9] bg-gradient-to-br from-orange-100 via-white to-red-100 relative">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7395.70200170143!2d77.778238!3d12.821171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73582de78713%3A0x3081835771771805!2sNyra%20Sunterra!5e1!3m2!1sen!2sin!4v1751714705778!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="rounded-2xl sm:rounded-3xl"
//                 ></iframe>
//               </div>
//             </Card>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
//             <div className="space-y-8 sm:space-y-10">
//               {[
//                 {
//                   category: "Education Hub",
//                   icon: Building,
//                   color: "blue",
//                   bgColor: "blue-50",
//                   places: [
//                     { name: "GEAR Innovative International School", time: "5 mins", rating: "★★★★★" },
//                     { name: "Indus International School", time: "6 mins", rating: "★★★★★" },
//                     { name: "Azim Premji University", time: "10 mins", rating: "★★★★★" },
//                   ],
//                 },
//                 {
//                   category: "IT Corridor",
//                   icon: Building,
//                   color: "purple",
//                   bgColor: "purple-50",
//                   places: [
//                     { name: "Upcoming Infosys Campus", time: "10 mins", rating: "★★★★★" },
//                     { name: "Wipro Kodathi", time: "30 mins", rating: "★★★★★" },
//                     { name: "Electronic City", time: "30 mins", rating: "★★★★★" },
//                   ],
//                 },
//                 {
//                   category: "Healthcare",
//                   icon: Building,
//                   color: "red",
//                   bgColor: "red-50",
//                   places: [
//                     { name: "Oxford Hospital", time: "15 mins", rating: "★★★★★" },
//                     { name: "Narayana Hrudayalaya", time: "20 mins", rating: "★★★★★" },
//                     { name: "Manipal Hospital", time: "45 mins", rating: "★★★★★" },
//                   ],
//                 },
//               ].map((category, index) => (
//                 <Card
//                   key={index}
//                   className="p-6 sm:p-8 lg:p-10 border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl"
//                 >
//                   <div className="flex items-center mb-6 sm:mb-8">
//                     <div
//                       className={`p-3 sm:p-4 bg-${category.bgColor} rounded-xl sm:rounded-2xl mr-4 sm:mr-6 shadow-lg`}
//                     >
//                       <category.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${category.color}-600`} />
//                     </div>
//                     <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{category.category}</h3>
//                   </div>
//                   <div className="space-y-3 sm:space-y-4">
//                     {category.places.map((place, placeIndex) => (
//                       <div
//                         key={placeIndex}
//                         className="flex justify-between items-center py-3 sm:py-4 border-b border-slate-100 last:border-b-0"
//                       >
//                         <div>
//                           <span className="text-slate-800 font-medium text-sm sm:text-base">{place.name}</span>
//                           <div className="text-xs sm:text-sm text-slate-500 mt-1">{place.rating}</div>
//                         </div>
//                         <Badge
//                           className={`bg-${category.color}-100 text-${category.color}-800 border-${category.color}-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm`}
//                         >
//                           <Clock className="h-3 w-3 mr-1" />
//                           {place.time}
//                         </Badge>
//                       </div>
//                     ))}
//                   </div>
//                 </Card>
//               ))}
//             </div>
//             <div className="relative">
//               <div className="aspect-square bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
//                 <img
//                   src="/building1.webp?height=600&width=600"
//                   alt="Location Highlights"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
//                 <div className="text-center">
//                   <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">15</div>
//                   <div className="text-sm text-slate-600 font-medium">Min to Metro</div>
//                   <div className="flex items-center justify-center mt-3">
//                     <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
//                     <span className="text-xs text-slate-500">Upcoming</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
//               <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16 sm:mb-20 lg:mb-24">
//             <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
//               Get In Touch
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
//               Your Dream Home{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Awaits</span>
//             </h2>
//             <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
//             <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
//               Schedule a personalized site visit and experience luxury living firsthand with our expert consultants
//             </p>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
//             <div className="space-y-8 sm:space-y-10 lg:space-y-12">
//               <div className="space-y-8 sm:space-y-10">
//                 {[
//                   {
//                     icon: Phone,
//                     title: "Call Us",
//                     subtitle: "Speak with our luxury home consultants",
//                     details: ["+91 7760 777 992", "+91 7090 407 090"],
//                     color: "orange",
//                     bgColor: "orange-50",
//                   },
//                   {
//                     icon: Mail,
//                     title: "Email",
//                     subtitle: "Get detailed information and brochures",
//                     details: ["info@nyrasunterra.in", "sales@nyrasunterra.com"],
//                     color: "blue",
//                     bgColor: "blue-50",
//                   },
//                   {
//                     icon: MapPin,
//                     title: "Visit Us",
//                     subtitle: "Experience center and model villa",
//                     details: [
//                       "BEML Cooperative Society Layout",
//                       "S.Medihalli, Sarjapur-Attibele Road",
//                       "Bengaluru - 562125",
//                     ],
//                     color: "purple",
//                     bgColor: "purple-50",
//                   },
//                 ].map((contact, index) => (
//                   <div key={index} className="flex items-start space-x-4 sm:space-x-6">
//                     <div
//                       className={`p-4 sm:p-5 bg-${contact.bgColor} rounded-2xl sm:rounded-3xl shadow-lg flex-shrink-0`}
//                     >
//                       <contact.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${contact.color}-600`} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-900 tracking-tight">
//                         {contact.title}
//                       </h3>
//                       <p className="text-slate-500 mb-3 sm:mb-4 font-medium text-sm sm:text-base">
//                         {contact.subtitle}
//                       </p>
//                       {contact.details.map((detail, detailIndex) => (
//                         <p key={detailIndex} className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
//                           {detail}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
//                 <div className="text-center">
//                   <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900">RERA Registration</h3>
//                   <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-orange-100">
//                     <p className="font-mono text-xs sm:text-sm text-slate-700 font-medium break-all">
//                       PRM/KA/RERA/1251/308/PR110124/007750
//                     </p>
//                   </div>
//                   <p className="text-xs sm:text-sm text-slate-600 mt-3 sm:mt-4">
//                     Fully compliant and government approved project
//                   </p>
//                 </div>
//               </Card>
//             </div>
//             <Card className="p-6 sm:p-8 lg:p-12 shadow-2xl border-0 bg-white rounded-2xl sm:rounded-3xl">
//               <CardContent className="p-0">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight">
//                   Schedule Your Private Tour
//                 </h3>
//                 <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
//                   <div>
//                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Name</label>
//                     <Input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Email Address</label>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Phone Number</label>
//                     <Input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
//                       Preferred Visit Date
//                     </label>
//                     <Input
//                       type="date"
//                       name="visitDate"
//                       value={formData.visitDate}
//                       onChange={handleInputChange}
//                       className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
//                       Special Requirements (Optional)
//                     </label>
//                     <Textarea
//                       rows={4}
//                       name="requirements"
//                       value={formData.requirements}
//                       onChange={handleInputChange}
//                       className="border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg resize-none"
//                       placeholder="Any specific areas you'd like to focus on during the visit..."
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full h-14 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl disabled:opacity-50"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-spin" />
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
//                         Schedule My Private Tour
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//       <section>
//         <ContactForm />
//       </section>

//       <Footer />
//       <WhatsAppChat />
//     </div>
//   )
// }

"use client"
import { Button } from "@/components/ui/button"
import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation" // <<< MODIFICATION
import {
  Phone,
  Play,
  Sun,
  Home,
  Award,
  TreePine,
  Star,
  Shield,
  Waves,
  Dumbbell,
  Users,
  Building,
  MapPin,
  Mail,
  Calendar,
  ChevronRight,
  Clock,
  CheckCircle2,
  Bed,
  Bath,
  Square,
  Car,
  Download,
  Loader2,
  X,
  IndianRupee,
  MessageSquareQuote,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutUsSection from "@/components/aboutus"
import GallerySection from "./gallery-section"
import FAQSection from "./faq-section"
import ContactForm from "@/components/ContactForm"
import WhatsAppChat from "@/components/WhatsAppChat"
// import EnhancedPricingSection from "./enhanced-pricing"

const downloadBrochure = () => {
  const link = document.createElement("a")
  link.href = "/nyra-sunterra-brochure-1.pdf"
  link.download = "NYRA-SUNTERRA-Brochure-1.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function LandingPage() {
  const router = useRouter() // <<< MODIFICATION
  const [showVideo, setShowVideo] = useState(false)
  const [activeFloorPlan, setActiveFloorPlan] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showBrochurePopup, setShowBrochurePopup] = useState(false)
  const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false)
  const [showBrochureSuccess, setShowBrochureSuccess] = useState(false)
  const [showContactSuccess, setShowContactSuccess] = useState(false)
  const [showSolarVideo, setShowSolarVideo] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    requirements: "",
  })

  const [brochureFormData, setBrochureFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  })

  // --- States for Brochure OTP Flow ---
  const [otp, setOtp] = useState("")
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [otpError, setOtpError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBrochureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBrochureFormData((prev) => ({ ...prev, [name]: value }))
  }

  // FIXED: Step 1 - Call your OWN backend API route
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setOtpError("")

    if (brochureFormData.contactNumber.length < 10) {
      setOtpError("Please enter a valid 10-digit contact number.")
      return
    }

    setIsSendingOtp(true)
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contactNumber: brochureFormData.contactNumber }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP.")
      }

      // Store the OTP that the backend generated and sent back
      sessionStorage.setItem("brochure_otp", data.otp)

      toast({
        title: "OTP Sent!",
        description: "Please enter the OTP sent to your mobile number.",
        duration: 4000,
      })
      setShowOtpInput(true) // Reveal the rest of the form
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
      setOtpError(errorMessage)
    } finally {
      setIsSendingOtp(false)
    }
  }

  // Step 2: Verify OTP and submit the complete form (This function remains the same)
  const handleVerifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setOtpError("")

    if (!brochureFormData.name || !brochureFormData.email || !otp) {
      setOtpError("Please fill in all fields.")
      return
    }

    setIsSubmittingBrochure(true)
    try {
      const savedOtp = sessionStorage.getItem("brochure_otp")

      if (otp === savedOtp) {
        const formData = new FormData()
        formData.append("name", brochureFormData.name)
        formData.append("email", brochureFormData.email)
        formData.append("phone", brochureFormData.contactNumber)
        formData.append("source", "brochure-download-verified")
        formData.append("message", "Brochure download request for luxury 5BHK villas (OTP Verified)")

        const response = await fetch("https://formspree.io/f/xblkepgl", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok) {
          toast({
            title: "Success!",
            description: "Your brochure is downloading now.",
            duration: 4000,
          })
          // 👇 MODIFICATION: Update URL for tracking
          router.push("?form_success=brochure_download", { scroll: false })
          downloadBrochure()
          setShowBrochureSuccess(true)
          setTimeout(() => closeBrochurePopup(), 5000)
        } else {
          throw new Error("Form submission failed after verification.")
        }
      } else {
        throw new Error("Invalid OTP. Please try again.")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
      setOtpError(errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 4000,
      })
    } finally {
      setIsSubmittingBrochure(false)
    }
  }

  const closeBrochurePopup = () => {
    setShowBrochurePopup(false)
    setShowBrochureSuccess(false)
    setShowOtpInput(false)
    setOtp("")
    setOtpError("")
    setBrochureFormData({ name: "", email: "", contactNumber: "" })
    sessionStorage.removeItem("brochure_otp")
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
          duration: 5000,
        })
        return
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Error",
          description: "Please enter a valid email address.",
          variant: "destructive",
          duration: 5000,
        })
        return
      }
      if (formData.phone.length < 10) {
        toast({
          title: "Error",
          description: "Please enter a valid contact number.",
          variant: "destructive",
          duration: 5000,
        })
        return
      }
      const submitData = new FormData()
      submitData.append("name", formData.name)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("visitDate", formData.visitDate || "Not specified")
      submitData.append("requirements", formData.requirements || "Site visit request")
      submitData.append("source", "landing-page")
      submitData.append("message", "Site visit booking request for luxury 5BHK villas")

      const response = await fetch("https://formspree.io/f/xblkepgl", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      })
      if (response.ok) {
        // 👇 MODIFICATION: Update URL for tracking
        router.push("?form_success=site_visit", { scroll: false })
        setShowContactSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          visitDate: "",
          requirements: "",
        })
        toast({
          title: "Success!",
          description: "Your tour request has been submitted successfully. We'll contact you soon!",
          duration: 5000,
        })
        setTimeout(() => {
          setShowContactSuccess(false)
        }, 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {showBrochurePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Download Brochure</h3>
                <button
                  onClick={closeBrochurePopup}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>
              </div>

              {showBrochureSuccess ? (
                <div className="text-center space-y-6">
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-green-800 mb-2">Success!</h4>
                    <p className="text-green-700 mb-4">Your brochure is downloading now!</p>
                    <p className="text-sm text-green-600">
                      We'll contact you soon with more details about our luxury 5BHK villas.
                    </p>
                  </div>
                  <div className="text-sm text-slate-500">This popup will close automatically...</div>
                </div>
              ) : (
                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      Book a site visit to luxury 5BHK villas
                    </h4>
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200">
                      <p className="text-orange-800 font-medium mb-2">🌟 30 flats get FREE solar power connection</p>
                      <p className="text-slate-600 text-sm">Know more</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h5 className="text-lg font-semibold text-slate-900 mb-4">
                      {showOtpInput ? `Verify to download` : "First, enter your contact number"}
                    </h5>

                    <form onSubmit={showOtpInput ? handleVerifyAndSubmit : handleSendOtp} className="space-y-4">
                      <Input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={brochureFormData.contactNumber}
                        onChange={handleBrochureInputChange}
                        required
                        disabled={showOtpInput}
                        className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                      />

                      {showOtpInput && (
                        <>
                          <Input
                            name="name"
                            placeholder="Full Name"
                            value={brochureFormData.name}
                            onChange={handleBrochureInputChange}
                            required
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                          <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={brochureFormData.email}
                            onChange={handleBrochureInputChange}
                            required
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                          <Input
                            type="text"
                            name="otp"
                            placeholder="Enter 6-Digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength={6}
                            inputMode="numeric"
                            className="h-12 text-center tracking-widest font-bold text-lg border-slate-200 focus:border-green-500 focus:ring-green-500 rounded-xl"
                          />
                        </>
                      )}

                      {!showOtpInput ? (
                        <Button
                          type="submit"
                          disabled={isSendingOtp}
                          className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
                        >
                          {isSendingOtp ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending OTP...
                            </>
                          ) : (
                            <>
                              <MessageSquareQuote className="h-4 w-4 mr-2" />
                              Proceed
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmittingBrochure}
                          className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg"
                        >
                          {isSubmittingBrochure ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Verifying...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" /> Verify & Download
                            </>
                          )}
                        </Button>
                      )}

                      {otpError && <p className="text-sm text-red-600 mt-2">{otpError}</p>}
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* REMAINDER OF YOUR PAGE CODE (UNCHANGED) */}
      <section
        id="overview"
        className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Badge className="bg-gradient-to-r from-orange-50 to-red-50 text-orange-800 border border-orange-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
                    RERA Approved | Home Loan Assistance | Limited Launch Offer
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm">
                    No Pre-EMI till possession
                  </Badge>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tight">
                    5BHK villa's in
                    <span className="text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-700">
                      sarjapura
                    </span>
                  </h1>
                  <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
                </div>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                  Own a luxurious villa at the price of an apartment in Sarjapur.Save big on electricity and experience
                  lifestyle upgradation with gated community accommodating outstanding amenities.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                  {[
                    { number: "58", label: "Premium Villas", icon: Home, color: "orange" },
                    { number: "3200", label: "Build up Area", icon: Building, color: "blue" },
                    { number: "5", label: "BHK Luxury", icon: Award, color: "purple" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 text-center shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      <div
                        className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-8 lg:w-8 text-${stat.color}-600`} />
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-4 sm:pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 shadow-2xl rounded-xl sm:rounded-2xl font-semibold group"
                    >
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                      Call Now - Get Best Price
                    </Button>
                    <div>
                      {!showVideo ? (
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={() => setShowVideo(true)}
                          className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
                        >
                          <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                          Watch Virtual Tour
                        </Button>
                      ) : (
                        <video
                          src="https://res.cloudinary.com/dsj3kcbf4/video/upload/v1752829080/virtual-tour_esxewp.mp4"
                          controls
                          autoPlay
                          className="w-full max-w-4xl mt-8 rounded-xl shadow-xl"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button
                      onClick={() => setShowBrochurePopup(true)}
                      size="lg"
                      variant="outline"
                      className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[280px]"
                    >
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                      Download Brochure
                    </Button>

                    <div>
                      {!showSolarVideo ? (
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={() => setShowSolarVideo(true)}
                          className="border-2 border-red-300 text-red-700 hover:bg-red-50 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl font-semibold group w-full sm:w-[300px]"
                        >
                          <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                          Solar Powered Villas
                        </Button>
                      ) : (
                        <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
                          <iframe
                            src="https://www.youtube.com/embed/yukBi8X8CAU?autoplay=1&mute=1&loop=1&playlist=yukBi8X8CAU"
                            title="Solar Powered Villas"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className="w-full sm:w-[610px] rounded-xl overflow-hidden shadow-xl aspect-video"> */}
                  <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden shadow-xl aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/OaUVX9GzMhM?autoplay=1&mute=1&loop=1&playlist=OaUVX9GzMhM&controls=0"
                      title="Nyra Sunterra Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl border-0 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl">
                <CardContent className="p-0">
                  {showContactSuccess ? (
                    <div className="text-center space-y-6">
                      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
                        <p className="text-green-700 mb-4">
                          Your site visit request has been submitted successfully!
                        </p>
                        <p className="text-sm text-green-600">
                          Our team will contact you within 24 hours to confirm your visit to our luxury 5BHK villas.
                        </p>
                      </div>
                      <Button
                        onClick={() => setShowContactSuccess(false)}
                        className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                          Book a site visit to luxury 5BHK villas
                        </h3>
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200 mb-4">
                          <p className="text-orange-800 font-medium mb-1">
                            🌟 30 flats get FREE solar power connection
                          </p>
                          <p className="text-slate-600 text-sm">Know more</p>
                        </div>
                        <p className="text-lg font-semibold text-slate-900">Get in touch</p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <Input
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="Contact Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                        </div>
                        <div>
                          <Input
                            type="date"
                            name="visitDate"
                            placeholder="Visit Date"
                            value={formData.visitDate}
                            onChange={handleInputChange}
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                        </div>
                        <div>
                          <Input
                            name="requirements"
                            placeholder="Requirements (Optional)"
                            value={formData.requirements}
                            onChange={handleInputChange}
                            className="h-12 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Site Visit
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AboutUsSection />

      <section
        id="floor-plans"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-indigo-100 text-indigo-800 border border-indigo-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Floor Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Thoughtfully{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Designed
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Each villa is meticulously planned to maximize space, natural light, and functionality while maintaining
              the highest standards of luxury living.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {[
                  { name: "Ground Living + Bedroom", sqft: "1,600", active: 0 },
                  { name: "First floor Living + 2 Bedrooms", sqft: "1,400", active: 1 },
                  { name: "Third floor Living + Bedroom + Cineplex theatre", sqft: "1,800", active: 1 },
                  { name: "Terrace", sqft: "200", active: 2 },
                ].map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFloorPlan(index)}
                    className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center transition-all duration-300 ${
                      activeFloorPlan === index
                        ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-50 shadow-lg"
                    }`}
                  >
                    <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</div>
                  </button>
                ))}
              </div>
              <Card className="p-6 sm:p-8 lg:p-10 bg-white shadow-2xl border-0 rounded-2xl sm:rounded-3xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: Bed, label: "5 Bedrooms", desc: "Master + 3 Guest" },
                    { icon: Bath, label: "4 Bathrooms", desc: "Attached + Common" },
                    { icon: Square, label: "3,200 Sq.Ft", desc: "Built-up Area" },
                    { icon: Car, label: "1 Car Parking", desc: "Covered Parking" },
                  ].map((spec, index) => (
                    <div key={index} className="text-center">
                      <div className="p-3 sm:p-4 bg-orange-50 rounded-2xl mb-3 sm:mb-4 mx-auto w-fit">
                        <spec.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                      </div>
                      <div className="font-bold text-sm sm:text-base text-slate-900 mb-1">{spec.label}</div>
                      <div className="text-xs sm:text-sm text-slate-600">{spec.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-orange-100">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6">Premium Inclusions</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    "Italian Marble Flooring",
                    "Teak Wood Doors",
                    "Modular Kitchen",
                    "Premium Fixtures",
                    "Solar Water Heater",
                    "Smart Home Ready",
                  ].map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img src="/Nyra.jpg" alt="Floor Plan" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-4 sm:top-6 -right-0 sm:right-13 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-2xl p-4 sm:p-2 shadow-xl">
                <div className="text-center">
                  <a
                    href="#schedule-visit"
                    className="block text-sm sm:text-lg font-bold text-orange-600 mb-1 sm:mb-2 hover:underline cursor-pointer"
                  >
                    Schedule Site Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Premium Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Crafted for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Extraordinary
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Every detail has been meticulously designed to create spaces that inspire, comfort, and elevate your daily
              living experience to unprecedented heights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-20">
            {[
              {
                title: "SBI approved project",
                description:
                  "This project is officially approved by the State Bank of India, ensuring trust, transparency, and hassle-free home loan processing with faster approvals and attractive interest rates.",
                icon: IndianRupee,
              },
              {
                title: "Easy Home Loan Approvals",
                description:
                  "Get hassle-free approvals with partnered banks and financial institutions, making ownership simple and stress-free.",
                icon: Shield,
              },
              {
                title: "Prime Location – Sarjapura Growth Corridor",
                description:
                  "Located in the rapidly developing Sarjapura corridor with excellent connectivity and high appreciation potential.",
                icon: Star,
              },
              {
                title: "Gated Community with Modern Amenities",
                description:
                  "A secure and well-planned gated community featuring landscaped gardens, jogging tracks, and world-class amenities.",
                icon: TreePine,
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="mb-6 sm:mb-8">
                  <highlight.icon className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">{highlight.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: Award,
                title: "Modern Villa Architecture",
                description:
                  "Contemporary villa designs with elegant facades, spacious layouts, and premium exterior finishes for a sophisticated living experience.",
                image: "/Italian.jpeg",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Star,
                title: "Outdoor Gazebo",
                description:
                  "Elegant outdoor gazebo with comfortable seating, perfect for relaxation and enjoying the fresh air.",
                image: "/building5.webp",
                gradient: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
              },
              {
                icon: Play,
                title: "Private Home Theater",
                description:
                  "Dedicated miniplex space accommodating 10+ people with premium acoustics and luxury comfort seating.",
                image: "/HomeTheater.jpeg",
                gradient: "from-red-500 to-pink-600",
                bgGradient: "from-red-50 to-pink-50",
              },
              {
                icon: TreePine,
                title: "Indoor Swimming Pool",
                description:
                  "Luxurious indoor swimming pool with ample space for recreation and relaxation, surrounded by natural light.",
                image: "/building4.webp",
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50",
              },
              {
                icon: Shield,
                title: "Gourmet Smart Kitchen",
                description:
                  "State-of-the-art kitchen equipped with smart appliances, premium finishes, and intelligent lighting for a seamless culinary experience.",
                image: "/SmartHome.jpeg",
                gradient: "from-slate-500 to-gray-600",
                bgGradient: "from-slate-50 to-gray-50",
              },
              {
                icon: Sun,
                title: "Designer Rooftop Lounge",
                description:
                  "Contemporary rooftop retreat with ambient lighting, pergola shade, and serene seating – perfect for relaxation or intimate gatherings with a sunset view.",
                image: "/Rooftop.jpeg",
                gradient: "from-yellow-500 to-orange-600",
                bgGradient: "from-yellow-50 to-orange-50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-3"
              >
                <div className="aspect-[5/4] overflow-hidden relative">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${feature.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div
                    className={`p-3 sm:p-4 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 w-fit shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <Button variant="ghost" className="p-0 text-slate-700 hover:text-slate-900 font-medium group/btn">
                    Explore Details
                    <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-purple-100 text-purple-800 border border-purple-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              World-Class Amenities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Resort-Style{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Living</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Every amenity has been carefully curated to provide you with a lifestyle that's both luxurious and
              convenient, setting new standards for premium living.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Waves,
                name: "Infinity Pool",
                desc: "Temperature controlled with poolside lounge and cabanas",
                color: "blue",
                bgColor: "blue-50",
              },
              {
                icon: Dumbbell,
                name: "Premium Gym",
                desc: "State-of-the-art fitness equipment with personal trainers",
                color: "red",
                bgColor: "red-50",
              },
              {
                icon: Users,
                name: "Grand Banquet",
                desc: "Elegant venue for celebrations and corporate events",
                color: "purple",
                bgColor: "purple-50",
              },
              {
                icon: TreePine,
                name: "Zen Gardens",
                desc: "Professionally landscaped meditation and yoga spaces",
                color: "green",
                bgColor: "green-50",
              },
              {
                icon: Star,
                name: "Sports Complex",
                desc: "Multi-sport indoor facilities with professional courts",
                color: "orange",
                bgColor: "orange-50",
              },
              {
                icon: Building,
                name: "Kids Wonderland",
                desc: "Safe and creative play areas with supervised activities",
                color: "pink",
                bgColor: "pink-50",
              },
              {
                icon: Award,
                name: "Business Center",
                desc: "Co-working spaces and meeting rooms with high-speed internet",
                color: "indigo",
                bgColor: "indigo-50",
              },
              {
                icon: Shield,
                name: "24/7 Security",
                desc: "Advanced surveillance systems with trained security personnel",
                color: "slate",
                bgColor: "slate-50",
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:-translate-y-2"
              >
                <CardContent className="p-0 text-center">
                  <div
                    className={`p-4 sm:p-5 lg:p-6 bg-${amenity.bgColor} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 lg:mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <amenity.icon className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-${amenity.color}-600`} />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-slate-900 tracking-tight">
                    {amenity.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-xs sm:text-sm lg:text-base">
                    {amenity.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <FAQSection />

      <section id="location" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Prime Location
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Connected to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Everything
              </span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Strategically positioned with seamless connectivity to Bangalore's key destinations, ensuring convenience
              without compromise
            </p>
          </div>
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
              <div className="aspect-video sm:aspect-[21/9] bg-gradient-to-br from-orange-100 via-white to-red-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7395.70200170143!2d77.778238!3d12.821171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73582de78713%3A0x3081835771771805!2sNyra%20Sunterra!5e1!3m2!1sen!2sin!4v1751714705778!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl sm:rounded-3xl"
                ></iframe>
              </div>
            </Card>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-8 sm:space-y-10">
              {[
                {
                  category: "Education Hub",
                  icon: Building,
                  color: "blue",
                  bgColor: "blue-50",
                  places: [
                    { name: "GEAR Innovative International School", time: "5 mins", rating: "★★★★★" },
                    { name: "Indus International School", time: "6 mins", rating: "★★★★★" },
                    { name: "Azim Premji University", time: "10 mins", rating: "★★★★★" },
                  ],
                },
                {
                  category: "IT Corridor",
                  icon: Building,
                  color: "purple",
                  bgColor: "purple-50",
                  places: [
                    { name: "Upcoming Infosys Campus", time: "10 mins", rating: "★★★★★" },
                    { name: "Wipro Kodathi", time: "30 mins", rating: "★★★★★" },
                    { name: "Electronic City", time: "30 mins", rating: "★★★★★" },
                  ],
                },
                {
                  category: "Healthcare",
                  icon: Building,
                  color: "red",
                  bgColor: "red-50",
                  places: [
                    { name: "Oxford Hospital", time: "15 mins", rating: "★★★★★" },
                    { name: "Narayana Hrudayalaya", time: "20 mins", rating: "★★★★★" },
                    { name: "Manipal Hospital", time: "45 mins", rating: "★★★★★" },
                  ],
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="p-6 sm:p-8 lg:p-10 border-0 shadow-xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div
                      className={`p-3 sm:p-4 bg-${category.bgColor} rounded-xl sm:rounded-2xl mr-4 sm:mr-6 shadow-lg`}
                    >
                      <category.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{category.category}</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {category.places.map((place, placeIndex) => (
                      <div
                        key={placeIndex}
                        className="flex justify-between items-center py-3 sm:py-4 border-b border-slate-100 last:border-b-0"
                      >
                        <div>
                          <span className="text-slate-800 font-medium text-sm sm:text-base">{place.name}</span>
                          <div className="text-xs sm:text-sm text-slate-500 mt-1">{place.rating}</div>
                        </div>
                        <Badge
                          className={`bg-${category.color}-100 text-${category.color}-800 border-${category.color}-200 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm`}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {place.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 via-white to-red-100 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                <img
                  src="/building1.webp?height=600&width=600"
                  alt="Location Highlights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">15</div>
                  <div className="text-sm text-slate-600 font-medium">Min to Metro</div>
                  <div className="flex items-center justify-center mt-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-slate-500">Upcoming</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Your Dream Home{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Awaits</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Schedule a personalized site visit and experience luxury living firsthand with our expert consultants
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="space-y-8 sm:space-y-10">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    subtitle: "Speak with our luxury home consultants",
                    details: ["+91 7760 777 992", "+91 7090 407 090"],
                    color: "orange",
                    bgColor: "orange-50",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    subtitle: "Get detailed information and brochures",
                    details: ["info@nyrasunterra.in", "sales@nyrasunterra.com"],
                    color: "blue",
                    bgColor: "blue-50",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    subtitle: "Experience center and model villa",
                    details: [
                      "BEML Cooperative Society Layout",
                      "S.Medihalli, Sarjapur-Attibele Road",
                      "Bengaluru - 562125",
                    ],
                    color: "purple",
                    bgColor: "purple-50",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                    <div
                      className={`p-4 sm:p-5 bg-${contact.bgColor} rounded-2xl sm:rounded-3xl shadow-lg flex-shrink-0`}
                    >
                      <contact.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${contact.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-900 tracking-tight">
                        {contact.title}
                      </h3>
                      <p className="text-slate-500 mb-3 sm:mb-4 font-medium text-sm sm:text-base">{contact.subtitle}</p>
                      {contact.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Card className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-center">
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900">RERA Registration</h3>
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-orange-100">
                    <p className="font-mono text-xs sm:text-sm text-slate-700 font-medium break-all">
                      PRM/KA/RERA/1251/308/PR110124/007750
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 sm:mt-4">
                    Fully compliant and government approved project
                  </p>
                </div>
              </Card>
            </div>
            <Card className="p-6 sm:p-8 lg:p-12 shadow-2xl border-0 bg-white rounded-2xl sm:rounded-3xl">
              <CardContent className="p-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight">
                  Schedule Your Private Tour
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                      Preferred Visit Date
                    </label>
                    <Input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">
                      Special Requirements (Optional)
                    </label>
                    <Textarea
                      rows={4}
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg resize-none"
                      placeholder="Any specific areas you'd like to focus on during the visit..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                        Schedule My Private Tour
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <ContactForm />
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}