"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitDate: "",
    requirements: "",
    inquiryType: "site-visit",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

      const response = await axios.post(
        `${backendUrl}/api/form/submit`,
        {
          ...formData,
          timestamp: new Date().toISOString(),
          source: "contact-page",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        },
      )

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted successfully. We'll contact you soon!",
          duration: 5000,
        })

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          visitDate: "",
          requirements: "",
          inquiryType: "site-visit",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)

      let errorMessage = "Something went wrong. Please try again or call us directly."

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          errorMessage = "Request timeout. Please check your connection and try again."
        } else if (error.response?.status === 400) {
          errorMessage = "Please check your information and try again."
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
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

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-6 sm:mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <Badge className="bg-orange-100 text-orange-800 border border-orange-200 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium">
              Contact Us
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Let's Make Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Dream Home
              </span>{" "}
              Reality
            </h1>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-6 sm:mb-8"></div>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Our luxury home consultants are ready to guide you through every step of your journey to premium
              solar-powered living at NYRA SUNTERRA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              {
                icon: Phone,
                title: "Call Us Directly",
                subtitle: "Immediate assistance available",
                details: ["+91 7022 433 001", "+91 7760 777 992"],
                color: "orange",
                bgColor: "orange-50",
                action: "Call Now",
              },
              {
                icon: Mail,
                title: "Email Inquiries",
                subtitle: "Detailed responses within 24 hours",
                details: ["info@nyrasunterra.com", "sales@nyrasunterra.com"],
                color: "blue",
                bgColor: "blue-50",
                action: "Send Email",
              },
              {
                icon: MapPin,
                title: "Visit Our Office",
                subtitle: "Experience center & model villa",
                details: ["BEML Cooperative Society Layout", "Sarjapur-Attibele Road, Bengaluru"],
                color: "purple",
                bgColor: "purple-50",
                action: "Get Directions",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`p-4 sm:p-5 bg-${contact.bgColor} rounded-2xl sm:rounded-3xl mb-6 mx-auto w-fit shadow-lg`}
                  >
                    <contact.icon className={`h-8 w-8 sm:h-10 sm:w-10 text-${contact.color}-600`} />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-900">{contact.title}</h3>
                  <p className="text-slate-500 mb-4 font-medium text-sm sm:text-base">{contact.subtitle}</p>
                  <div className="space-y-2 mb-6">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-700 font-medium text-sm sm:text-base">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button
                    className={`bg-${contact.color}-600 hover:bg-${contact.color}-700 text-white px-6 py-3 rounded-xl font-semibold`}
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <Card className="p-6 sm:p-8 lg:p-12 shadow-2xl border-0 bg-white rounded-2xl sm:rounded-3xl">
              <CardContent className="p-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 tracking-tight">
                  Send Us Your Inquiry
                </h2>

                <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full h-12 sm:h-14 border border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg px-4"
                    >
                      <option value="site-visit">Schedule Site Visit</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="floor-plans">Floor Plans</option>
                      <option value="amenities">Amenities Details</option>
                      <option value="financing">Financing Options</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="h-12 sm:h-14 border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg"
                      />
                    </div>
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
                      Preferred Contact Date (Optional)
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
                    <label className="block text-sm font-semibold text-slate-700 mb-2 sm:mb-3">Your Message</label>
                    <Textarea
                      rows={5}
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="border-slate-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl sm:rounded-2xl text-base sm:text-lg resize-none"
                      placeholder="Tell us about your requirements, budget, timeline, or any specific questions..."
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
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-orange-100 rounded-2xl mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Office Hours</h3>
                </div>
                <div className="space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Saturday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Site Visits</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </Card>

              {/* Quick Response Promise */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 rounded-2xl mr-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Promise</h3>
                </div>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Response within 2 hours during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Personalized consultation with experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Transparent pricing and no hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Flexible site visit scheduling</span>
                  </div>
                </div>
              </Card>

              {/* RERA Information */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl sm:rounded-3xl shadow-xl">
                <div className="text-center">
                  <h3 className="font-bold text-lg sm:text-xl mb-4 text-slate-900">RERA Registration</h3>
                  <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-blue-100 mb-4">
                    <p className="font-mono text-xs sm:text-sm text-slate-700 font-medium break-all">
                      PRM/KA/RERA/1251/308/PR110124/007750
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">Fully compliant and government approved project</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Find Us on the Map</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Located in the heart of Bangalore's premium residential corridor
            </p>
          </div>

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
      </section>

      <Footer />
    </div>
  )
}
