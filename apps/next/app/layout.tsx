'use client'
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs"
import { TamaguiProvider } from './TamaguiProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <KindeProvider>
          <TamaguiProvider>{children}</TamaguiProvider>
        </KindeProvider>
      </body>
    </html>
  )
}
