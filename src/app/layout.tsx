import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Pearl Hotel Hyderabad - Hotel near RGIA Shamshabad Airport",
  description: "Comfort, Elegance & Hospitality – Your Perfect Stay Near Hyderabad Airport. 47 comfortable rooms in Shamshabad with AC, TV, balcony, attached bathroom, 24-hr front desk, and airport transfers.",
  icons: {
    icon: "/images/pearl_mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0f263d] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
