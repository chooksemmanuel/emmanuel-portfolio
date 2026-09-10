import './globals.css'

export const metadata = {
  title: 'Emmanuel Ihejiamaizu | AI • Cybersecurity • DFIR • Software',
  description: 'Portfolio of Emmanuel Ihejiamaizu across applied AI, cybersecurity, digital forensics, incident response and software engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
