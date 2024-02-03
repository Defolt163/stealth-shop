import Script from "next/script"
import Header from "./components/Header/Header"
import './global.sass'
import Footer from "./components/Footer/Footer"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Script src="https://kit.fontawesome.com/073ad96d9b.js" crossorigin="anonymous"></Script>
      </body>
    </html>
  )
}
