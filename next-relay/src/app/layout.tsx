import { ReactNode } from 'react'

export const metadata = {
  title: 'Next Relay App',
  description: 'Next Relay App to consume a GraphQL API',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
