import "./globals.css";

export const metadata = {
  title: "grm-stage2-assignment",
  description: "Homepage clone assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}