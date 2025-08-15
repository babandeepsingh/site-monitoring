
import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import Header from './component/Header'
import Dashboard from './component/Dashboard'
import { UserProvider } from '@/context/UserContext'
// import Dashboard from './component/Dashboard'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SitePulse',
  description: 'SitePulse is a website monitoring tool that helps you keep track of your website\'s performance and uptime.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <UserProvider>
            <Header />
            <SignedOut>
              <div className='flex flex-col items-center justify-center h-screen gap-4'>
                {/* <SignIn routing="hash" /> */}
                {children}
              </div>
            </SignedOut>
            <SignedIn>
              <Dashboard />
            </SignedIn>
          </UserProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}