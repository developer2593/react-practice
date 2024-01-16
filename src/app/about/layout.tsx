export const metadata = {
  title: 'About Us',
  description: 'About Page content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {/* Include shared UI here e.g. a header or sidebar */}   
        {children}
      </div>
  )
}
