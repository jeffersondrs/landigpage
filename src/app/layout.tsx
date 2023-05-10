import './globals.css'

export const metadata = {
  title: 'Paradigman Shift',
  description: 'Site Portifolio',
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
