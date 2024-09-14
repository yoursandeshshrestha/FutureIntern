import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="py-4 px-6 container mx-auto">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
