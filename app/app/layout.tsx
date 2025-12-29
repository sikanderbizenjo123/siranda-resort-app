import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Siranda Eco Resorts - Management System',
  description: 'Resort management and booking system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
