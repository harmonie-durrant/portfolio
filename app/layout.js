import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {

  var theme = "valentine"

  if (new Date().getMonth() == 9 && new Date().getDate() == 31) {
    theme = "halloween"
  }

  return (
    <html lang="en" data-theme={theme} className="scroll-smooth">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
