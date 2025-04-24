import type { Metadata } from 'next'
import { Lateef } from 'next/font/google'
import './globals.css'

const lateef = Lateef({
  subsets: ['arabic'],
  weight: '700',
})

export const metadata: Metadata = {
  title: 'أكادمية القرآن المنير',
  description: 'لتعليم القرآن الكريم بأسلوب مبسط ومناسب لجميع الأعمار',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className={lateef.className}>
        <link rel='icon' href='/logo.png' sizes='any' />
        {children}
      </body>
    </html>
  )
}
