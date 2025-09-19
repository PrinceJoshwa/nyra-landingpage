"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
}

export default function ScheduleVisitForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
          duration: 5000,
        })
        return
      }

      if (!agreedToTerms) {
        toast({
          title: "Error",
          description: "Please agree to the Privacy Policy and Terms & Conditions.",
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
      submitData.append("source", "schedule-site-visit")
      submitData.append("message", "Schedule a site visit request")

      const response = await fetch("https://formspree.io/f/xblkepgl", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
        })
        setAgreedToTerms(false)

        toast({
          title: "Success!",
          description: "Your site visit request has been submitted successfully. We'll contact you soon!",
          duration: 5000,
        })
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
    // <section className="py-12 bg-gray-50">
    <section id="schedule-visit" className="py-12 bg-gray-50">

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule A Site Visit</h2>
          <p className="text-lg text-gray-600">Get in touch with us to schedule your visit</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-14 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 text-base"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-14 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 text-base"
              />
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  <span className="text-lg mr-1">🇮🇳</span>
                  <span className="text-gray-600 font-medium mr-2">IN</span>
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-14 pl-16 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl text-base"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-start space-x-3 mt-8">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                I have read and understood the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                . By registering here, I agree to Nyra Sunterra{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
