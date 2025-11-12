import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-6">
      <div className="bg-white p-10 sm:p-16 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-gray-100">
        <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-6" />
        
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-lg text-slate-600 mb-8">
          Your request has been submitted successfully. Our team will contact you shortly.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>

      <p className="text-slate-500 text-sm mt-8">
        You can now safely close this page.
      </p>
    </div>
  )
}