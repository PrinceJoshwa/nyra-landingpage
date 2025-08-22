// import type React from "react"
// import type { Metadata } from "next"
// import Script from "next/script"
// import "./globals.css"

// export const metadata: Metadata = {
//   title: "NYRA SUNTERA",
//   description: "Nyra Suntera",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <Script src="https://www.googletagmanager.com/gtag/js?id=G-3D5BR4QRS9" strategy="afterInteractive" />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-3D5BR4QRS9');
//           `}
//         </Script>
//       </head>
//       <body>{children}</body>
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "NYRA SUNTERA",
  description: "Nyra Suntera",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WB8YBLEP0B"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WB8YBLEP0B');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
