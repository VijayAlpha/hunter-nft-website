import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Haunted Plague NFT Collection',
  description: 'The Haunted Plague NFT Collection is a spine-tingling digital art series featuring 888 unique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/asserts/images/fav-icon.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
